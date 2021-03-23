module.exports = {
  theme: {
    extend: {
      backgroundImage: theme => ({
        default: "url('/gameofthrone-houses/img/jonathan-kemper-4_ZvmLAeIZk-unsplash.jpg')",
        paper: "url('/gameofthrone-houses/img/paper-bg.jpg')",
        wood: "url('/gameofthrone-houses/img/martin-berrios-8u3xeBT1HIc-unsplash.jpg')"
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
