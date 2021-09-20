export { default as CartDropdownComponent } from '../../components/CartDropdownComponent.vue'
export { default as FooterSection } from '../../components/FooterSection.vue'
export { default as ManifestoSection } from '../../components/ManifestoSection.vue'
export { default as PageBanner } from '../../components/PageBanner.vue'
export { default as ProductCard } from '../../components/ProductCard.vue'
export { default as ProductPageDetails } from '../../components/ProductPageDetails.vue'
export { default as ProductsSection } from '../../components/ProductsSection.vue'

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
