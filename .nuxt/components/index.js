export const CartDropdownComponent = () => import('../../components/CartDropdownComponent.vue' /* webpackChunkName: "components/cart-dropdown-component" */).then(c => wrapFunctional(c.default || c))
export const FooterSection = () => import('../../components/FooterSection.vue' /* webpackChunkName: "components/footer-section" */).then(c => wrapFunctional(c.default || c))
export const ManifestoSection = () => import('../../components/ManifestoSection.vue' /* webpackChunkName: "components/manifesto-section" */).then(c => wrapFunctional(c.default || c))
export const PageBanner = () => import('../../components/PageBanner.vue' /* webpackChunkName: "components/page-banner" */).then(c => wrapFunctional(c.default || c))
export const ProductCard = () => import('../../components/ProductCard.vue' /* webpackChunkName: "components/product-card" */).then(c => wrapFunctional(c.default || c))
export const ProductsSection = () => import('../../components/ProductsSection.vue' /* webpackChunkName: "components/products-section" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
