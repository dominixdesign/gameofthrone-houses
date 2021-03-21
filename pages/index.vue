<template>
  <div>
    <div class="flex justify-between w-full pt-6 ">
      <div class="flex justify-center w-full">
        <Icon name="sword-1" class="w-12 h-12" />
        <h1 class="text-center text-3xl font-bold mx-4">
          List of Houses
        </h1>
        <Icon name="sword-1" class="w-12 h-12" />
      </div>
    </div>
    <div class="overflow-x-auto mt-6">
      <table class="table-auto border-collapse w-full">
        <thead>
          <tr class="text-sm font-medium text-gray-700 text-left" style="font-size: 0.9674rem">
            <th class="px-4 py-2 bg-gray-200 " style="background-color:#f8f8f8">
              Name
            </th>
            <th class="px-4 py-2 w-1/4" style="background-color:#f8f8f8">
              Region
            </th>
          </tr>
        </thead>
        <tbody v-if="loading" class="text-sm font-normal text-gray-700">
          <tr v-for="index in 10" :key="index" class="hover:bg-gray-100 border-b border-gray-200 py-10">
            <td class="px-4 py-4 text-left">
              <span class="skeleton-box h-3 w-1/2 inline-block" />
            </td>
            <td class="px-4 py-4 w-1/4 text-left">
              <span class="skeleton-box h-3 w-1/2 inline-block" />
            </td>
          </tr>
        </tbody>
        <tbody v-else class="text-sm font-normal text-gray-700">
          <tr v-for="house in listData" :key="house.name" class="hover:bg-gray-100 border-b border-gray-200 py-10">
            <td class="px-4 py-4 text-left">
              <NuxtLink :to="$id(house.url)" class="text-blue-700 underline">
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
      <svg
        v-if="links.prev"
        class="h-6 w-6 transform cursor-pointer scale-150"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="url = links.prev"
      >
        <g>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7072C13.6834 17.0977 14.3166 17.0977 14.7071 16.7072C15.0977 16.3167 15.0977 15.6835 14.7071 15.293L11.4142 12L14.7071 8.70712C15.0977 8.31659 15.0977 7.68343 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z" fill="#18A0FB" />
        </g>
      </svg>
      <svg
        v-else
        class="h-6 w-6 transform scale-150"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7072C13.6834 17.0977 14.3166 17.0977 14.7071 16.7072C15.0977 16.3167 15.0977 15.6835 14.7071 15.293L11.4142 12L14.7071 8.70712C15.0977 8.31659 15.0977 7.68343 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z" fill="#2C2C2C" />
        </g>
      </svg>
      <svg
        v-if="links.next"
        class="h-6 w-6 cursor-pointer transform scale-150"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="url = links.next"
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 12C15 11.7348 14.8946 11.4804 14.7071 11.2929L10.7071 7.2929C10.3166 6.9024 9.6834 6.9024 9.2929 7.2929C8.9024 7.6834 8.9024 8.3166 9.2929 8.7071L12.5858 12L9.2929 15.2929C8.9024 15.6834 8.9024 16.3166 9.2929 16.7071C9.6834 17.0976 10.3166 17.0976 10.7071 16.7071L14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12Z" fill="#18A0FB" />
      </svg>
      <svg
        v-else
        class="h-6 w-6 transform scale-150"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="url = links.next"
      >
        <g opacity="0.4">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15 12C15 11.7348 14.8946 11.4804 14.7071 11.2929L10.7071 7.2929C10.3166 6.9024 9.6834 6.9024 9.2929 7.2929C8.9024 7.6834 8.9024 8.3166 9.2929 8.7071L12.5858 12L9.2929 15.2929C8.9024 15.6834 8.9024 16.3166 9.2929 16.7071C9.6834 17.0976 10.3166 17.0976 10.7071 16.7071L14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12Z" fill="#2C2C2C" />
        </g>
      </svg>
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
      console.log(apidata)
      this.listData = apidata.data
      this.links = apidata.links
      this.loading = false
    }
  }
}
</script>

<style>
.skeleton-box {
  position: relative;
  overflow: hidden;
  background-color: #e2e8f0;

}
.skeleton-box::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
  animation: shimmer 3s infinite;
  content: '';
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
