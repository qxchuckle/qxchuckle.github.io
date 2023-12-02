//缓存库名称
const CACHE_NAME = 'Chuckle'
const VERSION_CACHE_NAME = 'ChuckleTime'
//缓存离线超时时间
const MAX_ACCESS_CACHE_TIME = 60 * 60 * 24 * 4

function time() {
    return new Date().getTime()
}

const dbHelper = {
    read: (key) => {
        return new Promise((resolve) => {
            caches.match(key).then(function (res) {
                if (!res) resolve(null)
                res.text().then(text => resolve(text))
            }).catch(() => {
                resolve(null)
            })
        })
    },
    write: (key, value) => {
        return new Promise((resolve, reject) => {
            caches.open(VERSION_CACHE_NAME).then(function (cache) {
                // noinspection JSIgnoredPromiseFromCall
                cache.put(key, new Response(value));
                resolve()
            }).catch(() => {
                reject()
            })
        })
    },
    delete: (key) => {
        caches.match(key).then(response => {
            if (response) caches.open(VERSION_CACHE_NAME).then(cache => cache.delete(key))
        })
    }
}

/** 存储缓存入库时间 */
const dbTime = {
    read: (key) => dbHelper.read(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`)),
    write: (key, value) => dbHelper.write(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`), value),
    delete: (key) => dbHelper.delete(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`))
}

/** 存储缓存最后一次访问的时间 */
const dbAccess = {
    update: (key) => dbHelper.write(new Request(`https://ACCESS-CACHE/${encodeURIComponent(key)}`), time()),
    check: async (key) => {
        const realKey = new Request(`https://ACCESS-CACHE/${encodeURIComponent(key)}`)
        const value = await dbHelper.read(realKey)
        if (value) {
            dbHelper.delete(realKey)
            return time() - value < MAX_ACCESS_CACHE_TIME
        } else return false
    }
}

self.addEventListener('install', () => self.skipWaiting())

/**
 * 缓存列表
 * @param url 匹配规则
 * @param time 缓存有效时间
 * @param clean 清理缓存时是否无视最终访问时间直接删除
 */
const cacheList = {
    /* font: {
        url: /(jet|HarmonyOS)\.(woff2|woff|ttf)$/g,
        time: Number.MAX_VALUE,
        clean: false
    }, */
    qxcdn: {
        url: /(^(https:\/\/cdn\.chuckle\.top).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    },
    qccdn: {
        url: /(^(https:\/\/cdn\.qcqx\.cn).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    },
    tianli: {
        url: /(^(https:\/\/cdn1\.tianli0\.top).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    },
    pai: {
        url: /(^(https:\/\/jsdelivr\.pai233\.top).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    },
    n: {
        url: /(^(https:\/\/img\.cdn\.nesxc\.com).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    },
    jsdcdn: {
        url: /(^(https:\/\/cdn\.jsdelivr\.net).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    },
    bootcdn: {
        url: /(^(https:\/\/cdn\.bootcdn\.net).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    },
    alfonts: {
        url: /(^(https:\/\/at\.alicdn\.com).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    },
    fastly: {
        url: /(^(https:\/\/fastly\.jsdelivr\.net).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    },
/*     gcore: {
        url: /(^(https:\/\/gcore\.jsdelivr\.net).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    }, */
    lf3: {
        url: /(^(https:\/\/lf3-cdn-tos\.bytecdntp\.com).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    },
    lf26: {
        url: /(^(https:\/\/lf26-cdn-tos\.bytecdntp\.com).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    },
    zhimg: {
        url: /(^(https:\/\/unpkg\.zhimg\.com).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    },
    unpkg: {
        url: /(^(https:\/\/unpkg\.com).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    },
    /* onm: {
        url: /(^(https:\/\/jsd\.onmicrosoft\.cn).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    }, */
    /* arcitcgn: {
        url: /(^(https:\/\/adn\.arcitcgn\.cn).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    }, */
    elemecdn: {
        url: /(^(https:\/\/npm\.elemecdn\.com).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    },
    /* lncldglobal: {
        url: /(^(https:\/\/v7yd3jww\.api\.lncldglobal\.com).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    }, */
    /* router: {
        url: /(^(https:\/\/app-router\.com).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    }, */
    /* cdngo: {
        url: /(^(https:\/\/cdn-go\.cn).*@\d.*)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    }, */
    update: {
        url: /.*((\/article.*\/)|search\.xml)$/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    },
/*     chuckle: {
        url: /(^(https:\/\/(www\.chuckle\.top|chuckle\.top|blog\.chuckle\.top)).*)/g,
        time: 60 * 60 * 24 * 2,
        clean: true
    },
    localhost: {
        url: /(^(http:\/\/localhost:4000).*)/g,
        time: 60 * 60 * 24 * 2,
        clean: true
    }, */
    chuckle: {
        url: /(^(https:\/\/(www\.chuckle\.top|chuckle\.top|www\.qcqx\.cn|qcqx\.cn)).*(\/)$)/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    },
    resources: {
        url: /(^(https:\/\/(www\.chuckle\.top|chuckle\.top|www\.qcqx\.cn|qcqx\.cn))).*\.(css|html|webp|png|jpg|gif|ico|js|woff2|woff|ttf|json|svg)$/g,
        time: 60 * 60 * 24 * 3,
        clean: true
    }
    /* stand: {
        url: /^https:\/\/image\.kmar\.top\/indexBg/g,
        time: 60 * 60 * 24 * 7,
        clean: true
    } */
}

/**
 * 链接替换列表
 * @param source 源链接
 * @param dist 目标链接
 */
const replaceList = {
   /*  gh: {
        source: ['https://cdn.jsdelivr.net/'],
        dist: 'https://cdn1.tianli0.top/'
    }, */
    /* npm: {
        source: [
            '//cdn.jsdelivr.net/npm',
            '//unpkg.zhimg.com'
        ],
        dist: '//npm.elemecdn.com'
    }, */
    /* emoji: {
        source: ['/gh/EmptyDreams/resources/icon'],
        dist: '/gh/EmptyDreams/twikoo-emoji'
    } */
}

/** 判断指定url击中了哪一种缓存，都没有击中则返回null */
function findCache(url) {
    for (let key in cacheList) {
        const value = cacheList[key]
        if (url.match(value.url)) return value
    }
    return null
}

/**
 * 检查连接是否需要重定向至另外的链接，如果需要则返回新的Request，否则返回null<br/>
 * 该函数会顺序匹配{@link replaceList}中的所有项目，即使已经有可用的替换项<br/>
 * 故该函数允许重复替换，例如：<br/>
 * 如果第一个匹配项把链接由"http://abc.com/"改为了"https://abc.com/"<br/>
 * 此时第二个匹配项可以以此为基础继续进行修改，替换为"https://abc.net/"<br/>
 */
 function replaceRequest(request) {
    let url = request.url;
    let flag = false
    for (let key in replaceList) {
        const value = replaceList[key]
        for (let source of value.source) {
            if (url.match(source)) {
                url = url.replace(source, value.dist)
                flag = true
            }
        }
    }
    return flag ? new Request(url) : null
}

/** 判断是否拦截指定的request */
function blockRequest(request) {
    return false
}

async function fetchEvent(request, response, cacheDist) {
    const NOW_TIME = time()
    // noinspection ES6MissingAwait
    dbAccess.update(request.url)
    const maxTime = cacheDist.time
    let remove = false
    if (response) {
        const time = await dbTime.read(request.url)
        if (time) {
            const difTime = NOW_TIME - time
            if (difTime < maxTime) return response
        }
        remove = true
    }
    const fetchFunction = () => fetch(request).then(response => {
        dbTime.write(request.url, NOW_TIME)
        //如果加载正常再缓存
        //至于为什么多了个检测与0相等是因为我实操的时候遇到了status为0的情况
        //为什么会有0我没搞清楚，知道的小伙伴可以分享一下
        if (response.ok || response.status === 0) {
            const clone = response.clone()
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone))
        }
        return response
    })
    if (!remove) return fetchFunction()
    const timeOut = () => new Promise((resolve => setTimeout(() => resolve(response), 400)))
    return Promise.race([
        timeOut(),
        fetchFunction()]
    ).catch(err => console.error('不可达的链接：' + request.url + '\n错误信息：' + err))
}

self.addEventListener('fetch', async event => {
    const replace = replaceRequest(event.request)
    const request = replace === null ? event.request : replace
    const cacheDist = findCache(request.url)
    if (blockRequest(request)) {
        event.respondWith(new Response(null, {status: 204}))
    } else if (cacheDist !== null) {
        event.respondWith(caches.match(request)
            .then(async (response) => fetchEvent(request, response, cacheList))
        )
    } else if (replace !== null) {
        event.respondWith(fetch(request))
    }
})

self.addEventListener('message', function (event) {
    //刷新缓存
    if (event.data === 'refresh') {
        caches.open(CACHE_NAME).then(function (cache) {
            cache.keys().then(function (keys) {
                for (let key of keys) {
                    const value = findCache(key.url)
                    if (value == null || value.clean || !dbAccess.check(key.url)) {
                        // noinspection JSIgnoredPromiseFromCall
                        cache.delete(key)
                        dbTime.delete(key)
                    }
                }
                event.source.postMessage('success')
            })
        })
    }
})
/* 
const cdn = {
    gh: {
      jsdelivr: 'https://cdn.jsdelivr.net/gh',
      fastly: 'https://fastly.jsdelivr.net/gh',
      gcore: 'https://gcore.jsdelivr.net/gh',
      tianli: 'https://cdn1.tianli0.top/gh',
      ravi: 'https://cdn.ravi.cool/gh',
      pai: 'https://jsdelivr.pai233.top/gh',
    },
    combine: {
      jsdelivr: 'https://cdn.jsdelivr.net/combine',
      fastly: 'https://fastly.jsdelivr.net/combine',
      gcore: 'https://gcore.jsdelivr.net/combine',
      tianli: 'https://cdn1.tianli0.top/combine'
    },
    npm: {
      jsdelivr: 'https://cdn.jsdelivr.net/npm',
      fastly: 'https://fastly.jsdelivr.net/npm',
      gcore: 'https://gcore.jsdelivr.net/npm',
      tianli: 'https://cdn1.tianli0.top/npm',
      eleme: 'https://npm.elemecdn.com',
      pai: 'https://jsdelivr.pai233.top/npm',
      onm: 'https://jsd.onmicrosoft.cn/npm',
      unpkg: 'https://unpkg.com',
      zhimg: 'https://unpkg.zhimg.com',
      arcitcgn: 'https://adn.arcitcgn.cn',
    }
  }
  
  self.addEventListener('install', async () => {
    await self.skipWaiting()
  })
  
  self.addEventListener('activate', async () => {
    await self.clients.claim()
  })
  
  self.addEventListener('fetch', async (event) => {
    try {
      // 如果用户当前网速慢，或是开启了省流模式，则不使用sw处理请求
      const nav = navigator
      const { saveData, effectiveType } = nav.connection || nav.mozConnection || nav.webkitConnection || {}
      if (saveData || /2g/.test(effectiveType)) return
  
      // 劫持请求
      event.respondWith(handleRequest(event.request))
      // eslint-disable-next-line
    } catch (e) {}
  })
  
  // 返回响应
  async function progress(res) {
    return new Response(await res.arrayBuffer(), {
      status: res.status,
      headers: res.headers
    })
  }
  
  function handleRequest(req) {
    const urls = []
    const urlStr = req.url
    let urlObj = new URL(urlStr)
    // 为了获取 cdn 类型
    // 例如获取gh (https://cdn.jsdelivr.net/gh)
    const path = urlObj.pathname.split('/')[1]
  
    // 匹配 cdn
    for (const type in cdn) {
      if (type === path) {
        for (const key in cdn[type]) {
          const url = cdn[type][key] + urlObj.pathname.replace('/' + path, '')
          urls.push(url)
        }
      }
    }
  
    // 如果上方 cdn 遍历 匹配到 cdn 则直接统一发送请求
    if (urls.length) return fetchAny(urls)
    throw new Error('failure')
  }
  
  // Promise.any 的 polyfill
  function createPromiseAny() {
    Promise.any = function (promises) {
      return new Promise((resolve, reject) => {
        promises = Array.isArray(promises) ? promises : []
        let len = promises.length
        let errs = []
        if (len === 0) return reject(new AggregateError('All promises were rejected'))
        promises.forEach((p) => {
          if (p instanceof Promise) {
            p.then(
              (res) => resolve(res),
              (err) => {
                len--
                errs.push(err)
                if (len === 0) reject(new AggregateError(errs))
              }
            )
          } else {
            reject(p)
          }
        })
      })
    }
  }
  
  // 发送所有请求
  function fetchAny(urls) {
    // 中断一个或多个请求
    const controller = new AbortController()
    const signal = controller.signal
  
    // 遍历将所有的请求地址转换为promise
    const PromiseAll = urls.map((url) => {
      return new Promise((resolve, reject) => {
        fetch(url, { signal })
          .then(progress)
          .then((res) => {
            const r = res.clone()
            if (r.status !== 200) reject(null)
            controller.abort() // 中断
            resolve(r)
          })
          .catch(() => reject(null))
      })
    })
  
    // 判断浏览器是否支持 Promise.any
    if (!Promise.any) createPromiseAny()
  
    // 谁先返回"成功状态"则返回谁的内容，如果都返回"失败状态"则返回null
    return Promise.any(PromiseAll)
      .then((res) => res)
      .catch(() => null)
  } */

  let cachelist = [];
  self.addEventListener('install', async function (installEvent) {
      self.skipWaiting();
      installEvent.waitUntil(
          caches.open(CACHE_NAME)
              .then(function (cache) {
                  console.log('Opened cache');
                  return cache.addAll(cachelist);
              })
      );
  });
  self.addEventListener('fetch', async event => {
      try {
          event.respondWith(handle(event.request))
      } catch (msg) {
          event.respondWith(handleerr(event.request, msg))
      }
  });
  const handleerr = async (req, msg) => {
      return new Response(`<h1>CDN分流器遇到了致命错误</h1>
      <b>${msg}</b>`, { headers: { "content-type": "text/html; charset=utf-8" } })
  }
  let cdn = {
      "gh": {
          jsdelivr: {
              "url": "https://jsdelivr.pai233.top/gh"
          },
          tianli: {
              "url": "https://cdn1.tianli0.top/gh"
          },
/*           ravi: {
              "url": "https://cdn.ravi.cool/gh"
          }, */
        //   jsdelivr: {
        //       "url": "https://cdn.jsdelivr.net/gh"
        //   },
          fastly: {
              "url": "https://fastly.jsdelivr.net/gh"
          },
/*           gcore: {
              "url": "https://gcore.jsdelivr.net/gh"
          },
          quantil: {
              "url": "https://quantil.jsdelivr.net/gh"
          } */
      },
      "combine": {
          jsdelivr: {
              "url": "https://jsdelivr.pai233.top/combine"
          },
          tianli: {
              "url": "https://cdn1.tianli0.top/combine"
          },
        //   jsdelivr: {
        //       "url": "https://cdn.jsdelivr.net/combine"
        //   },
          jsdelivr_fastly: {
              "url": "https://fastly.jsdelivr.net/combine"
          },
/*           jsdelivr_gcore: {
              "url": "https://gcore.jsdelivr.net/combine"
          },
          quantil: {
              "url": "https://quantil.jsdelivr.net/combine"
          } */
      },
      "npm": {
          eleme: {
              "url": "https://npm.elemecdn.com"
          },
          pai: {
              "url": "https://jsdelivr.pai233.top/npm"
          },
          zhimg: {
              "url": "https://unpkg.zhimg.com"
          },
          unpkg: {
              "url": "https://unpkg.com"
          },
          tianli: {
              "url": "https://cdn1.tianli0.top/npm"
          },
          /* onm: {
              "url": "https://jsd.onmicrosoft.cn/npm"
          }, */
        //   jsdelivr: {
        //       "url": "https://cdn.jsdelivr.net/npm"
        //   },
          fastly: {
              "url": "https://fastly.jsdelivr.net/npm"
          },
/*           gcore: {
              "url": "https://gcore.jsdelivr.net/npm"
          },
          arcitcgn: {
              "url": "https://adn.arcitcgn.cn"
          }, */
      }
  }
  const handle = async function (req) {
      const urlStr = req.url
      const domain = (urlStr.split('/'))[2]
      let urls = []
      for (let i in cdn) {
          for (let j in cdn[i]) {
              if (domain == cdn[i][j].url.split('https://')[1].split('/')[0] && urlStr.match(cdn[i][j].url)) {
                  urls = []
                  for (let k in cdn[i]) {
                      urls.push(urlStr.replace(cdn[i][j].url, cdn[i][k].url))
                  }
                  if (urlStr.indexOf('@latest/') > -1) {
                      return lfetch(urls, urlStr)
                  } else {
                      return caches.match(req).then(function (resp) {
                          return resp || lfetch(urls, urlStr).then(function (res) {
                              return caches.open(CACHE_NAME).then(function (cache) {
                                  cache.put(req, res.clone());
                                  return res;
                              });
                          });
                      })
                  }
              }
          }
      }
      return fetch(req)
  }
  const lfetch = async (urls, url) => {
      let controller = new AbortController();
      const PauseProgress = async (res) => {
          return new Response(await (res).arrayBuffer(), { status: res.status, headers: res.headers });
      };
      if (!Promise.any) {
          Promise.any = function (promises) {
              return new Promise((resolve, reject) => {
                  promises = Array.isArray(promises) ? promises : []
                  let len = promises.length
                  let errs = []
                  if (len === 0) return reject(new AggregateError('All promises were rejected'))
                  promises.forEach((promise) => {
                      promise.then(value => {
                          resolve(value)
                      }, err => {
                          len--
                          errs.push(err)
                          if (len === 0) {
                              reject(new AggregateError(errs))
                          }
                      })
                  })
              })
          }
      }
      return Promise.any(urls.map(urls => {
          return new Promise((resolve, reject) => {
              fetch(urls, {
                  signal: controller.signal
              })
                  .then(PauseProgress)
                  .then(res => {
                      if (res.status == 200) {
                          controller.abort();
                          resolve(res)
                      } else {
                          reject(res)
                      }
                  })
          })
      }))
  }
  