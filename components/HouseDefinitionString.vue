<template>
  <div>
    {{ definition }}
  </div>
</template>

<script>
export default {
  name: 'HouseDefinitionString',
  props: {
    definition: {
      type: String,
      default: null,
      required: true
    }
  }
}
</script>
