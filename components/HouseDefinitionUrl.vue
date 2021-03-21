<template>
  <div>
    <nuxt-link v-if="definition.includes('/houses/')" :to="$id(definition)" class="text-blue-700 underline">
      {{ name }}
    </nuxt-link>
    <span v-else>{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'HouseDefinitionUrl',
  props: {
    definition: {
      type: String,
      default: null,
      required: true
    }
  },
  data () {
    return {
      name: null
    }
  },
  mounted () {
    this.loadName()
  },
  methods: {
    async loadName () {
      const responseData = await this.$axios.$get(this.definition)
      this.name = responseData.name
    }
  }
}
</script>
