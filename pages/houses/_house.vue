<template>
  <div>
    <div class="px-4 py-5 sm:px-6">
      <div class="flex">
        <Icon name="castle-1" class="flex-none w-6 h-6 mr-2" />
        <h3 class="flex-grow text-2xl font-medieval leading-6 font-medium text-gray-900">
          {{ house.name }}
        </h3>
        <nuxt-link to="/" class="flex-none text-red-800 underline">
          backt to list of houses
        </nuxt-link>
      </div>
      <p class="mt-1 max-w-2xl text-sm text-gray-800">
        {{ house.region }}
      </p>
    </div>
    <div class="border-t border-black">
      <dl>
        <house-definition v-for="property in houseProperties" :key="property.id" :def-title="property.title" :definition="house[property.id]" />
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const houseId = await params.house
    const house = await $axios.$get(`https://www.anapioficeandfire.com/api/houses/${houseId}`)
    return { houseId, house }
  },
  data () {
    return {
      houseProperties: [
        { id: 'currentLord', title: 'Current Lord' },
        { id: 'overlord', title: 'Overlord' },
        { id: 'coatOfArms', title: 'Coat Of Arms' },
        { id: 'words', title: 'Words' },
        { id: 'founded', title: 'Founded' },
        { id: 'founder', title: 'Founder' },
        { id: 'diedOut', title: 'diedOut' },
        { id: 'heir', title: 'Heir' },
        { id: 'cadetBranches', title: 'Cadet Branches' },
        { id: 'titles', title: 'Titles' },
        { id: 'seats', title: 'Seats' },
        { id: 'swornMembers', title: 'Sworn Members' },
        { id: 'ancestralWeapons', title: 'Ancestral Weapons' }
      ]
    }
  }
}
</script>

<style>

</style>
