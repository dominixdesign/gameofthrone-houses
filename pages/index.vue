<template>
  <div class="container">
    <div class="bg-opacity-60 bg-white pb-4 px-4 rounded-md w-full">
      <div class="flex justify-between w-full pt-6 ">
        <p class="ml-3">
          Table of Houses
        </p>
        <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <circle cx="2.19796" cy="1.80139" r="1.38611" fill="#222222" />
            <circle cx="11.9013" cy="1.80115" r="1.38611" fill="#222222" />
            <circle cx="7.04991" cy="1.80115" r="1.38611" fill="#222222" />
          </g>
        </svg>
      </div>
      <div class="w-full flex justify-end px-2 mt-2">
        <div class="w-full sm:w-64 inline-block relative ">
          <input type="" name="" class="leading-snug border border-gray-300 block w-full appearance-none bg-gray-100 text-sm text-gray-600 py-1 px-4 pl-8 rounded-lg" placeholder="Search">

          <div class="pointer-events-none absolute pl-3 inset-y-0 left-0 flex items-center px-2 text-gray-300">
            <svg class="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999">
              <path d="M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="overflow-x-auto mt-6">
        <table class="table-auto border-collapse w-full">
          <thead>
            <tr class="rounded-lg text-sm font-medium text-gray-700 text-left" style="font-size: 0.9674rem">
              <th class="px-4 py-2 bg-gray-200 " style="background-color:#f8f8f8">
                Name
              </th>
              <th class="px-4 py-2 " style="background-color:#f8f8f8">
                Region
              </th>
            </tr>
          </thead>
          <tbody v-if="loading" class="text-sm font-normal text-gray-700">
            <tr v-for="index in 10" :key="index">
              <td class="px-4 py-4">
                <span class="skeleton-box h-4 w-1/2 inline-block" />
              </td>
              <td class="px-4 py-4">
                <span class="skeleton-box h-4 w-1/2 inline-block" />
              </td>
            </tr>
          </tbody>
          <tbody v-else class="text-sm font-normal text-gray-700">
            <tr v-for="house in listData" :key="house.name" class="hover:bg-gray-100 border-b border-gray-200 py-10">
              <td class="px-4 py-4">
                {{ house.name }}
              </td>
              <td class="px-4 py-4">
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
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
  },
  data () {
    return {
      url: null,
      listData: [],
      loading: true,
      links: {}
    }
  },
  head: {
    bodyAttrs: {
      class: 'bg-default'
    }
  },
  watch: {
    url (newUrl) {
      this.getData(newUrl)
    }
  },
  mounted () {
    this.url = 'https://www.anapioficeandfire.com/api/houses'
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
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

thead tr th:first-child { border-top-left-radius: 10px; border-bottom-left-radius: 10px;}
thead tr th:last-child { border-top-right-radius: 10px; border-bottom-right-radius: 10px;}

tbody tr td:first-child { border-top-left-radius: 5px; border-bottom-left-radius: 0px;}
tbody tr td:last-child { border-top-right-radius: 5px; border-bottom-right-radius: 0px;}

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
