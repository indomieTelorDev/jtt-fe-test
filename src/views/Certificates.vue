<script setup>
import { ref, computed, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 900)
})

const searchQuery = ref('')

const certificates = ref([
  {
    id: 'cert-101',
    courseTitle: 'Pengenalan Budaya Perusahaan AKHLAK',
    issueDate: '15 April 2026',
    credentialId: 'JTT-2026-AKH-0042',
    image:
      'https://images.unsplash.com/photo-1589330694653-efa64753ba0a?q=80&w=2070&auto=format&fit=crop',
    score: 95,
  },
  {
    id: 'cert-102',
    courseTitle: 'Dasar-dasar Manajemen Proyek Infrastruktur',
    issueDate: '28 Maret 2026',
    credentialId: 'JTT-2026-MPI-0155',
    image:
      'https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=2036&auto=format&fit=crop',
    score: 88,
  },
  {
    id: 'cert-103',
    courseTitle: 'Keselamatan Lalu Lintas dan Jalan Raya',
    issueDate: '10 Februari 2026',
    credentialId: 'JTT-2026-KLL-0891',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    score: 92,
  },
])

const filteredCertificates = computed(() => {
  if (!searchQuery.value) return certificates.value
  const query = searchQuery.value.toLowerCase()
  return certificates.value.filter(
    (cert) =>
      cert.courseTitle.toLowerCase().includes(query) ||
      cert.credentialId.toLowerCase().includes(query),
  )
})
</script>

<template>
  <div class="space-y-6">
    <div
      class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-2xl border border-base-200 shadow-sm"
    >
      <div v-if="isLoading" class="flex-1 w-full max-w-sm h-10 bg-base-200 rounded-xl animate-pulse"></div>
      <div v-else class="flex-1 w-full max-w-sm relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-base-content/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Cari berdasarkan judul atau ID..."
          class="input input-sm h-10 input-bordered w-full pl-10 rounded-xl focus:outline-none focus:border-[#005b9f]"
        />
      </div>
      <div v-if="isLoading" class="h-6 w-24 bg-base-200 rounded animate-pulse"></div>
      <div v-else class="text-sm font-medium text-base-content/70 whitespace-nowrap">
        Total:
        <span class="text-base-content font-bold">{{ filteredCertificates.length }}</span>
        Sertifikat
      </div>
    </div>

    <div
      v-if="isLoading || filteredCertificates.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <template v-if="isLoading">
        <div v-for="i in 4" :key="i" class="bg-white rounded-2xl border border-base-200 shadow-sm overflow-hidden flex flex-col">
          <div class="h-48 bg-base-200 animate-pulse"></div>
          <div class="p-5 flex-1 space-y-4">
            <div class="h-6 bg-base-200 rounded-lg w-3/4 animate-pulse"></div>
            <div class="space-y-2 mt-auto pt-3 border-t border-base-100">
              <div class="h-3 bg-base-200 rounded w-1/2 animate-pulse"></div>
              <div class="h-3 bg-base-200 rounded w-2/3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <router-link
          :to="`/dashboard/certificates/${cert.id}`"
          v-for="cert in filteredCertificates"
          :key="cert.id"
          class="bg-white rounded-2xl border border-base-200 shadow-sm overflow-hidden group hover:shadow-lg transition-all flex flex-col cursor-pointer hover:border-[#005b9f]/30"
        >
          <div class="relative h-48 overflow-hidden bg-base-200 flex items-center justify-center p-4">
            <div
              class="absolute inset-0 bg-[#005b9f]/5 group-hover:bg-[#005b9f]/0 transition-colors z-10"
            ></div>

            <div
              class="w-full h-full bg-white shadow-sm border border-base-300 p-2 flex flex-col items-center justify-center relative transform group-hover:scale-105 transition-transform duration-500"
            >
              <div
                class="border-2 border-double border-[#005b9f]/20 w-full h-full flex flex-col items-center justify-center p-2 text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-yellow-500 mb-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div class="text-[8px] font-bold text-[#005b9f] uppercase tracking-wider">
                  Sertifikat Kelulusan
                </div>
                <div class="h-0.5 w-8 bg-base-200 my-1"></div>
                <div class="text-[6px] text-base-content/50 line-clamp-2 leading-tight px-2">
                  {{ cert.courseTitle }}
                </div>
              </div>
            </div>

            <div
              class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 backdrop-blur-[2px]"
            >
              <span class="btn btn-sm rounded-full bg-white text-[#005b9f] border-none shadow-lg"
                >Lihat Detail</span
              >
            </div>
          </div>

          <div class="p-5 flex-1 flex flex-col">
            <h3
              class="font-bold text-base text-base-content line-clamp-2 leading-tight mb-4 group-hover:text-[#005b9f] transition-colors h-10"
            >
              {{ cert.courseTitle }}
            </h3>

            <div class="mt-auto space-y-2 pt-3 border-t border-base-100">
              <div class="flex justify-between items-center text-xs text-base-content/60">
                <span>Diterbitkan:</span>
                <span class="font-medium text-base-content">{{ cert.issueDate }}</span>
              </div>
              <div class="flex justify-between items-center text-xs text-base-content/60">
                <span>ID Kredensial:</span>
                <span
                  class="font-mono text-[10px] bg-base-100 px-1.5 py-0.5 rounded border border-base-200"
                  >{{ cert.credentialId }}</span
                >
              </div>
            </div>
          </div>
        </router-link>
      </template>
    </div>

    <div
      v-else
      class="bg-white rounded-2xl border border-base-200 p-12 flex flex-col items-center justify-center text-center"
    >
      <div class="w-20 h-20 bg-base-100 rounded-full flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 text-yellow-500/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </div>
      <h3 class="text-lg font-bold text-base-content mb-2">Tidak ada sertifikat ditemukan</h3>
      <p class="text-base-content/60 text-sm max-w-sm">
        Anda belum memiliki sertifikat atau pencarian tidak cocok dengan sertifikat mana pun.
      </p>
    </div>
  </div>
</template>
