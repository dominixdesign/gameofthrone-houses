<template>
  <ul v-if="Array.isArray(definition)" class="rounded-md divide-y divide-gray-200">
    <li v-for="def in definition" :key="def" class="pl-1 pr-4 py-3 flex items-center justify-between text-sm">
      <span class="ml-2 flex-1 w-0 truncate">
        <component :is="definitionComponent(def)" :definition="def" aria-hidden="true" />
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HouseDefinitionArray',
  props: {
    definition: {
      type: Array,
      default: null,
      required: true
    }
  },
  methods: {
    definitionComponent (definition) {
      if (definition.substr(0, 4) === 'http') {
        return 'HouseDefinitionUrl'
      }
      return 'HouseDefinitionString'
    }
  }
}
</script>
