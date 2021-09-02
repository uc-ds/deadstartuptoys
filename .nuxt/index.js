import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_813f926c from 'nuxt_plugin_plugin_813f926c' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_0b1abef0 from 'nuxt_plugin_cookieuniversalnuxt_0b1abef0' // Source: ./cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_templatesplugin2615d42e_1b7f7425 from 'nuxt_plugin_templatesplugin2615d42e_1b7f7425' // Source: ./templates.plugin.2615d42e.js (mode: 'client')
import nuxt_plugin_axios_13527e40 from 'nuxt_plugin_axios_13527e40' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_libplugin2bd6a348_4117b028 from 'nuxt_plugin_libplugin2bd6a348_4117b028' // Source: ./lib.plugin.2bd6a348.js (mode: 'all')
import nuxt_plugin_workbox_3d7a7dfc from 'nuxt_plugin_workbox_3d7a7dfc' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_4264090f from 'nuxt_plugin_metaplugin_4264090f' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_470bae83 from 'nuxt_plugin_iconplugin_470bae83' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_vuemomentlib_7080cf76 from 'nuxt_plugin_vuemomentlib_7080cf76' // Source: ../plugins/vue-moment-lib (mode: 'all')
import nuxt_plugin_vueawesomecountdown_a53cbd6e from 'nuxt_plugin_vueawesomecountdown_a53cbd6e' // Source: ../plugins/vue-awesome-countdown (mode: 'client')
import nuxt_plugin_vueanalytics_d511c5e4 from 'nuxt_plugin_vueanalytics_d511c5e4' // Source: ../plugins/vue-analytics.js (mode: 'all')
import nuxt_plugin_vuescrolllock_303bf52a from 'nuxt_plugin_vuescrolllock_303bf52a' // Source: ../plugins/vue-scroll-lock.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"lang":"en"},"title":"Dead Startup Toys","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"},{"name":"referrer","content":"no-referrer"},{"name":"title","content":"Dead Startup Toys"},{"hid":"description","name":"description","content":"Website about toys that were long gone, and vanished."},{"name":"keywords","content":", "},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:site","content":"@mschfxyz"},{"name":"twitter:title","content":"Dead Startup Toys"},{"name":"twitter:description","content":"Website about toys that were long gone, and vanished."},{"name":"twitter:image:src","content":"https:\u002F\u002F[PROJECT_DOMAIN]\u002Fsocial\u002Fsharecard-twitter.png"},{"name":"og:title","property":"og:title","content":"Dead Startup Toys"},{"name":"og:type","property":"og:type","content":"website"},{"name":"og:url","property":"og:url","content":"https:\u002F\u002F[PROJECT_DOMAIN]"},{"name":"og:image","property":"og:image","content":"https:\u002F\u002F[PROJECT_DOMAIN]\u002Fsocial\u002Fsharecard-facebook.png"},{"name":"og:description","property":"og:description","content":"Website about toys that were long gone, and vanished."},{"name":"og:site_name","property":"og:site_name","content":"Dead Startup Toys"},{"name":"author","content":"MSCHF"},{"meta":"msapplication-TileColor","content":"#ffffff"},{"meta":"msapplication-TileImage","content":"\u002Fms-icon-144x144.png"},{"meta":"theme-color","content":"#ffffff"}],"script":[{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fmodernizr\u002F2.8.3\u002Fmodernizr.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fdetectizr\u002F2.2.0\u002Fdetectizr.min.js"},{"src":"https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=GA_ID"},{"src":"\u002Fjs\u002Fsnap.js"}],"link":[],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_813f926c === 'function') {
    await nuxt_plugin_plugin_813f926c(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_0b1abef0 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_0b1abef0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_templatesplugin2615d42e_1b7f7425 === 'function') {
    await nuxt_plugin_templatesplugin2615d42e_1b7f7425(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_13527e40 === 'function') {
    await nuxt_plugin_axios_13527e40(app.context, inject)
  }

  if (typeof nuxt_plugin_libplugin2bd6a348_4117b028 === 'function') {
    await nuxt_plugin_libplugin2bd6a348_4117b028(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_3d7a7dfc === 'function') {
    await nuxt_plugin_workbox_3d7a7dfc(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_4264090f === 'function') {
    await nuxt_plugin_metaplugin_4264090f(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_470bae83 === 'function') {
    await nuxt_plugin_iconplugin_470bae83(app.context, inject)
  }

  if (typeof nuxt_plugin_vuemomentlib_7080cf76 === 'function') {
    await nuxt_plugin_vuemomentlib_7080cf76(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueawesomecountdown_a53cbd6e === 'function') {
    await nuxt_plugin_vueawesomecountdown_a53cbd6e(app.context, inject)
  }

  if (typeof nuxt_plugin_vueanalytics_d511c5e4 === 'function') {
    await nuxt_plugin_vueanalytics_d511c5e4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrolllock_303bf52a === 'function') {
    await nuxt_plugin_vuescrolllock_303bf52a(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
