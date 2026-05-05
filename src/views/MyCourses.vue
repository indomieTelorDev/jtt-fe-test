<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})

const activeTab = ref('in-progress')

const coursesInProgress = ref([
  {
    id: 1,
    title: 'Pelatihan Keselamatan dan Kesehatan Kerja (K3) Dasar',
    category: 'Wajib / Mandatory',
    progress: 45,
    totalModules: 10,
    completedModules: 4,
    lastAccessed: '2 Hari yang lalu',
    image: 'https://cms.jmtransjawatol.co.id/storage/1635/conversions/162-large.jpg',
    instructor: 'Ir. Budi Uhuy, M.T.',
  },
  {
    id: 2,
    title: 'Standar Operasional Prosedur (SOP) Gardu Tol',
    category: 'Operasional',
    progress: 80,
    totalModules: 5,
    completedModules: 4,
    lastAccessed: 'Baru saja',
    image: 'https://cms.jmtransjawatol.co.id/storage/1628/conversions/159-large.jpg',
    instructor: 'Siti Aminoy, S.E.',
  },
  {
    id: 3,
    title: 'Customer Service Excellence untuk Petugas Tol',
    category: 'Pelayanan Publik',
    progress: 15,
    totalModules: 6,
    completedModules: 1,
    lastAccessed: '1 Minggu yang lalu',
    image: 'https://cms.jmtransjawatol.co.id/storage/1626/conversions/158-medium.jpg',
    instructor: 'Agus Budimen, S.I.Kom',
  },
])

const completedCourses = ref([
  {
    id: 4,
    title: 'Pengenalan Budaya Perusahaan AKHLAK',
    category: 'Wajib / Mandatory',
    completedDate: '15 April 2026',
    score: 95,
    image: 'https://cms.jmtransjawatol.co.id/storage/1620/conversions/154-medium.jpg',
    hasCertificate: true,
  },
  {
    id: 5,
    title: 'Dasar-dasar Manajemen Proyek Infrastruktur',
    category: 'Manajemen',
    completedDate: '28 Maret 2026',
    score: 88,
    image: 'https://cms.jmtransjawatol.co.id/storage/1622/conversions/155-medium.jpg',
    hasCertificate: true,
  },
])

const tabs = [
  { id: 'in-progress', label: 'Sedang Dipelajari', count: coursesInProgress.value.length },
  { id: 'completed', label: 'Selesai', count: completedCourses.value.length },
  { id: 'saved', label: 'Tersimpan', count: 0 },
]
</script>

<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <template v-if="isLoading">
        <div
          v-for="i in 3"
          :key="i"
          class="bg-white rounded-2xl p-5 border border-base-200 shadow-sm flex items-center gap-4"
        >
          <div class="w-12 h-12 rounded-xl bg-base-200 animate-pulse"></div>
          <div class="flex-1 space-y-2">
            <div class="h-3 bg-base-200 rounded-full w-1/2 animate-pulse"></div>
            <div class="h-6 bg-base-200 rounded-lg w-1/3 animate-pulse"></div>
          </div>
        </div>
      </template>
      <template v-else>
        <div
          class="bg-white rounded-2xl p-5 border border-base-200 shadow-sm flex items-center gap-4"
        >
          <div
            class="w-12 h-12 rounded-xl bg-blue-50 text-[#005b9f] flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <div>
            <p class="text-sm text-base-content/60 font-medium">Total Course</p>
            <p class="text-2xl font-bold text-base-content">5</p>
          </div>
        </div>

        <div
          class="bg-white rounded-2xl p-5 border border-base-200 shadow-sm flex items-center gap-4"
        >
          <div
            class="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <p class="text-sm text-base-content/60 font-medium">Diselesaikan</p>
            <p class="text-2xl font-bold text-base-content">2</p>
          </div>
        </div>

        <div
          class="bg-white rounded-2xl p-5 border border-base-200 shadow-sm flex items-center gap-4"
        >
          <div
            class="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <p class="text-sm text-base-content/60 font-medium">Total Jam Belajar</p>
            <p class="text-2xl font-bold text-base-content">
              14<span class="text-sm font-medium text-base-content/60 ml-1">Jam</span>
            </p>
          </div>
        </div>
      </template>
    </div>

    <div class="bg-white rounded-2xl border border-base-200 p-2 shadow-sm">
      <div class="flex overflow-x-auto hide-scrollbar gap-2">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="px-5 py-2.5 rounded-xl font-medium text-sm transition-all whitespace-nowrap flex items-center gap-2"
          :class="
            activeTab === tab.id
              ? 'bg-[#005b9f] text-white shadow-md'
              : 'text-base-content/70 hover:bg-base-100 hover:text-base-content'
          "
        >
          {{ tab.label }}
          <span
            class="px-2 py-0.5 rounded-full text-xs"
            :class="
              activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-base-200 text-base-content/70'
            "
          >
            {{ tab.count }}
          </span>
        </button>
      </div>
    </div>

    <div
      v-if="activeTab === 'in-progress'"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <template v-if="isLoading">
        <div
          v-for="i in 3"
          :key="i"
          class="bg-white rounded-2xl border border-base-200 shadow-sm overflow-hidden flex flex-col"
        >
          <div class="h-48 bg-base-200 animate-pulse"></div>
          <div class="p-5 flex-1 space-y-4">
            <div class="h-6 bg-base-200 rounded-lg w-3/4 animate-pulse"></div>
            <div class="h-4 bg-base-200 rounded-lg w-1/2 animate-pulse"></div>
            <div class="h-3 bg-base-200 rounded-full w-full animate-pulse mt-4"></div>
          </div>
        </div>
      </template>
      <template v-else>
        <router-link
          :to="`/dashboard/courses/${course.id}`"
          v-for="course in coursesInProgress"
          :key="course.id"
          class="bg-white rounded-2xl border border-base-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow flex flex-col cursor-pointer block"
        >
        <div class="relative h-48 overflow-hidden">
          <img
            :src="course.image"
            :alt="course.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute top-3 left-3">
            <span
              class="badge bg-white/90 border-none text-[#005b9f] font-semibold text-xs shadow-sm backdrop-blur-sm"
              >{{ course.category }}</span
            >
          </div>

          <div
            class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]"
          >
            <button
              class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#005b9f] shadow-lg transform scale-90 group-hover:scale-100 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col">
          <h3
            class="font-bold text-lg text-base-content line-clamp-2 leading-tight mb-2 group-hover:text-[#005b9f] transition-colors"
          >
            {{ course.title }}
          </h3>
          <div class="flex items-center gap-2 text-sm text-base-content/60 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span class="truncate">{{ course.instructor }}</span>
          </div>

          <div class="mt-auto pt-4 border-t border-base-100">
            <div class="flex justify-between text-xs font-medium text-base-content/70 mb-2">
              <span>Progres Belajar</span>
              <span>{{ course.progress }}%</span>
            </div>
            <progress
              class="progress progress-primary w-full h-2"
              :value="course.progress"
              max="100"
            ></progress>
            <div class="flex justify-between items-center mt-3 text-xs text-base-content/50">
              <span>{{ course.completedModules }} dari {{ course.totalModules }} Modul</span>
              <span class="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {{ course.lastAccessed }}
              </span>
            </div>
          </div>
        </div>
      </router-link>
      </template>
    </div>

    <div
      v-else-if="activeTab === 'completed'"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <router-link
        :to="`/dashboard/courses/${course.id}`"
        v-for="course in completedCourses"
        :key="course.id"
        class="bg-white rounded-2xl border border-base-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow flex flex-col cursor-pointer block"
      >
        <div
          class="relative h-48 overflow-hidden grayscale-[30%] group-hover:grayscale-0 transition-all"
        >
          <img :src="course.image" :alt="course.title" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-4 left-4 right-4 text-white">
            <div class="flex items-center gap-2 text-sm font-medium mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              Selesai pada {{ course.completedDate }}
            </div>
          </div>
          <div class="absolute top-3 left-3">
            <span
              class="badge bg-white/90 border-none text-base-content font-semibold text-xs shadow-sm"
              >{{ course.category }}</span
            >
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col">
          <h3 class="font-bold text-lg text-base-content line-clamp-2 leading-tight mb-4">
            {{ course.title }}
          </h3>

          <div class="flex items-center justify-between mt-auto">
            <div class="flex flex-col">
              <span class="text-xs text-base-content/60 mb-1">Nilai Akhir</span>
              <span class="text-xl font-bold text-green-600">{{ course.score }}</span>
            </div>
            <button
              v-if="course.hasCertificate"
              class="btn btn-outline btn-sm border-[#005b9f] text-[#005b9f] hover:bg-[#005b9f] hover:text-white rounded-lg flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              Sertifikat
            </button>
          </div>
        </div>
      </router-link>
    </div>

    <div
      v-else
      class="bg-white rounded-2xl border border-base-200 p-12 flex flex-col items-center justify-center text-center"
    >
      <div class="w-20 h-20 bg-base-100 rounded-full flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 text-base-content/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      </div>
      <h3 class="text-lg font-bold text-base-content mb-2">Belum Ada Course Tersimpan</h3>
      <p class="text-base-content/60 text-sm max-w-sm mb-6">
        Anda dapat menyimpan course untuk dipelajari nanti dengan menekan ikon bookmark pada katalog
        course.
      </p>
      <button class="btn bg-[#005b9f] hover:bg-[#004780] text-white rounded-xl border-none">
        Jelajahi Katalog
      </button>
    </div>
  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
