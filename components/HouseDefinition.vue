<template>
  <div v-if="showDefinition()" class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt class="text-sm font-medium text-gray-500">
      {{ defTitle }}
    </dt>
    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
      <component :is="definitionComponent" :definition="definition" aria-hidden="true" />
    </dd>
  </div>
</template>

<script>
export default {
  name: 'HouseDefinition',
  props: {
    defTitle: {
      type: String,
      default: null,
      required: true
    },
    definition: {
      type: [String, Array],
      default: null,
      required: true
    }
  },
  data () {
    return {
      definitionComponent: 'HouseDefinitionString'
    }
  },
  methods: {
    showDefinition () {
      if (!this.definition) {
        return false
      }
      if (typeof (this.definition) === 'string' && this.definition.length > 0) {
        if (this.definition.substr(0, 4) === 'http') {
          this.definitionComponent = 'HouseDefinitionUrl'
        }
        return true
      }
      if (Array.isArray(this.definition) && this.definition[0] !== '') {
        this.definitionComponent = 'HouseDefinitionArray'
        return true
      }
      return false
    }
  }
}
</script>

<style>

</style>
