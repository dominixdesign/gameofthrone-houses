<template>
  <component :is="iconComponent" aria-hidden="true" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    iconComponent() {
        return () =>
          import(
            /* webpackChunkName: `icon/[request]` */ `~/static/icons/${this.name}.svg?inline`
          )
    }
  }
}
</script>
