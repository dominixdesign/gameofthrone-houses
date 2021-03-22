module.exports = {
  theme: {
    extend: {
      backgroundImage: theme => ({
        default: "url('/img/jonathan-kemper-4_ZvmLAeIZk-unsplash.jpg')",
        paper: "url('/img/paper-bg.jpg')",
        wood: "url('/img/martin-berrios-8u3xeBT1HIc-unsplash.jpg')"
      }),
      fontFamily: {
        medieval: ['MedievalSharp', 'ui-serif', 'Georgia']
      }
    }
  },
  variants: {
    extend: {
      backgroundImage: ['hover']
    }
  }
}
