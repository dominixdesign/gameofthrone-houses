<template>
  <div>
    <div class="flex justify-between w-full pt-6 ">
      <div class="flex justify-center w-full">
        <Icon name="sword-1" class="w-12 h-12" />
        <h1 class="text-center text-4xl font-medieval font-bold mx-4">
          List of Houses
        </h1>
        <Icon name="sword-1" class="w-12 h-12" />
      </div>
    </div>
    <div class="overflow-x-auto mt-6">
      <table class="table-auto border-collapse w-full">
        <thead class="bg-wood bg-cover opacity-80">
          <tr class="text-sm font-medium text-gray-100 text-left text-lg">
            <th class="px-4 py-2">
              Name
            </th>
            <th class="px-4 py-2 w-1/4">
              Region
            </th>
          </tr>
        </thead>
        <tbody v-if="loading" class="text-sm font-normal text-gray-700">
          <tr v-for="index in 10" :key="index" class="hover:bg-gray-100 border-b border-gray-200 py-10">
            <td class="px-4 py-4 text-left">
              <span class="relative overflow-hidden bg-red-800 animate-pulse h-3 w-1/2 inline-block" />
            </td>
            <td class="px-4 py-4 w-1/4 text-left">
              <span class="relative overflow-hidden bg-red-800 animate-pulse h-3 w-1/2 inline-block" />
            </td>
          </tr>
        </tbody>
        <tbody v-else class="text-sm font-normal text-gray-700">
          <tr v-for="house in listData" :key="house.name" class="bg-gradient-to-r hover:from-gray-200 border-b border-gray-200 py-10">
            <td class="px-4 py-4 text-left">
              <NuxtLink :to="$id(house.url)" class="text-red-800 underline">
                {{ house.name }}
              </NuxtLink>
            </td>
            <td class="px-4 py-4 w-1/4 text-left">
              {{ house.region }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="pagination" class="w-full flex justify-center border-t border-gray-100 pt-4 items-center">
      <div v-if="links.prev" class="flex cursor-pointer hover:text-red-800" @click="url = links.prev">
        <Icon name="sword" class="flex-none -rotate-90 transform w-6 h-6 mr-2" /> Previous Page
      </div>
      <div class="mx-3">
        •
      </div>
      <div v-if="links.next" class="flex cursor-pointer hover:text-red-800" @click="url = links.next">
        Next Page <Icon name="sword" class="flex-none rotate-90 transform w-6 h-6 ml-2" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      url: null,
      listData: [],
      loading: true,
      links: {}
    }
  },
  watch: {
    url (newUrl) {
      this.getData(newUrl)
    }
  },
  mounted () {
    this.url = 'https://www.anapioficeandfire.com/api/houses?page=1&pageSize=10'
  },
  methods: {
    async getData (url) {
      this.loading = true
      const apidata = await this.$axios.$get(url)
      this.listData = apidata.data
      this.links = apidata.links
      this.loading = false
    }
  }
}
</script>
