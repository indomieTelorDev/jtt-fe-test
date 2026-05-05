<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 800)
})

const activeFilter = ref('todo')

const assignments = ref([
  {
    id: 1,
    courseTitle: 'Pelatihan Keselamatan dan Kesehatan Kerja (K3) Dasar',
    title: 'Evaluasi Akhir Modul K3 Dasar',
    type: 'Quiz',
    dueDate: 'Besok, 23:59 WIB',
    status: 'todo',
    score: null,
    totalQuestions: 20,
    duration: '30 Menit',
  },
  {
    id: 2,
    courseTitle: 'Standar Operasional Prosedur (SOP) Gardu Tol',
    title: 'Tugas Praktik: Skenario Penanganan Kendala Transaksi',
    type: 'Tugas',
    dueDate: '10 Mei 2026, 12:00 WIB',
    status: 'todo',
    score: null,
    totalQuestions: null,
    duration: 'Tidak dibatasi',
  },
  {
    id: 3,
    courseTitle: 'Customer Service Excellence untuk Petugas Tol',
    title: 'Kuis Pemahaman Modul 1 & 2',
    type: 'Quiz',
    dueDate: '20 April 2026, 23:59 WIB',
    status: 'completed',
    score: 85,
    totalQuestions: 15,
    duration: '20 Menit',
  },
  {
    id: 4,
    courseTitle: 'Manajemen Lalu Lintas Jalan Tol',
    title: 'Tugas Analisis Arus Kendaraan',
    type: 'Tugas',
    dueDate: '1 Mei 2026, 23:59 WIB',
    status: 'overdue',
    score: null,
    totalQuestions: null,
    duration: null,
  },
])

const filteredAssignments = (status) => {
  if (status === 'all') return assignments.value
  return assignments.value.filter((a) => a.status === status)
}

const filters = [
  { id: 'all', label: 'Semua' },
  { id: 'todo', label: 'Belum Dikerjakan' },
  { id: 'completed', label: 'Selesai' },
  { id: 'overdue', label: 'Lewat Tenggat' },
]

const getStatusColor = (status) => {
  switch (status) {
    case 'todo':
      return 'bg-blue-50 text-[#005b9f] border-[#005b9f]/20'
    case 'completed':
      return 'bg-green-50 text-green-600 border-green-200'
    case 'overdue':
      return 'bg-red-50 text-red-600 border-red-200'
    default:
      return 'bg-base-200 text-base-content/70 border-base-300'
  }
}

const getStatusLabel = (status) => {
  switch (status) {
    case 'todo':
      return 'Belum Dikerjakan'
    case 'completed':
      return 'Selesai'
    case 'overdue':
      return 'Lewat Tenggat'
    default:
      return 'Unknown'
  }
}
</script>

<template>
  <div class="space-y-6">
    <div
      class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-2xl border border-base-200 shadow-sm"
    >
      <div v-if="isLoading" class="flex flex-wrap gap-2 w-full">
        <div v-for="i in 4" :key="i" class="h-10 w-32 bg-base-200 rounded-xl animate-pulse"></div>
      </div>
      <div v-else class="flex flex-wrap gap-2">
        <button
          v-for="filter in filters"
          :key="filter.id"
          @click="activeFilter = filter.id"
          class="px-4 py-2 rounded-xl text-sm font-medium transition-colors"
          :class="
            activeFilter === filter.id
              ? 'bg-[#005b9f] text-white'
              : 'hover:bg-base-200 text-base-content/70'
          "
        >
          {{ filter.label }}
          <span class="ml-1 opacity-70 text-xs">({{ filteredAssignments(filter.id).length }})</span>
        </button>
      </div>
    </div>

    <div
      v-if="isLoading || filteredAssignments(activeFilter).length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <template v-if="isLoading">
        <div
          v-for="i in 3"
          :key="i"
          class="bg-white rounded-2xl border border-base-200 shadow-sm p-5 flex flex-col space-y-4"
        >
          <div class="flex justify-between items-start">
            <div class="h-6 w-32 bg-base-200 rounded animate-pulse"></div>
            <div class="h-6 w-16 bg-base-200 rounded animate-pulse"></div>
          </div>
          <div class="h-7 bg-base-200 rounded w-full animate-pulse"></div>
          <div class="h-4 bg-base-200 rounded w-2/3 animate-pulse"></div>
          <div class="space-y-2 pt-4 border-t border-base-100">
            <div class="h-4 bg-base-200 rounded w-1/2 animate-pulse"></div>
            <div class="h-4 bg-base-200 rounded w-1/3 animate-pulse"></div>
          </div>
        </div>
      </template>
      <template v-else>
        <router-link
          :to="`/dashboard/assignments/${item.id}`"
          v-for="item in filteredAssignments(activeFilter)"
          :key="item.id"
          class="bg-white rounded-2xl border border-base-200 shadow-sm p-5 hover:shadow-md transition-all group flex flex-col cursor-pointer hover:border-[#005b9f]/30"
        >
          <div class="flex justify-between items-start mb-3">
            <div
              class="badge border font-semibold text-xs py-2.5 px-3"
              :class="getStatusColor(item.status)"
            >
              {{ getStatusLabel(item.status) }}
            </div>
            <div
              class="bg-base-100 px-3 py-1 rounded-lg text-xs font-semibold text-base-content/60 border border-base-200 flex items-center gap-1.5"
            >
              <svg
                v-if="item.type === 'Quiz'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 text-orange-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ item.type }}
            </div>
          </div>

          <h3
            class="font-bold text-lg leading-tight mb-1 group-hover:text-[#005b9f] transition-colors"
          >
            {{ item.title }}
          </h3>
          <p class="text-sm text-base-content/60 line-clamp-1 mb-4">{{ item.courseTitle }}</p>

          <div class="mt-auto space-y-3 pt-4 border-t border-base-100">
            <div class="flex items-center gap-2 text-sm text-base-content/70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 shrink-0 text-error"
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
              <span :class="{ 'text-error font-semibold': item.status === 'overdue' }"
                >Tenggat: {{ item.dueDate }}</span
              >
            </div>

            <div class="flex items-center gap-2 text-sm text-base-content/70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>Durasi: {{ item.duration || '-' }}</span>
            </div>

            <div
              v-if="item.status === 'completed'"
              class="flex items-center gap-2 text-sm text-green-600 font-bold bg-green-50 p-2 rounded-lg mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              Nilai Anda: {{ item.score }} / 100
            </div>

            <div v-if="item.status === 'todo'" class="pt-2">
              <button
                class="btn btn-sm w-full bg-[#005b9f] text-white hover:bg-[#004780] border-none rounded-xl"
              >
                Mulai Kerjakan
              </button>
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
          class="h-10 w-10 text-base-content/30"
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
      <h3 class="text-lg font-bold text-base-content mb-2">Tidak ada data</h3>
      <p class="text-base-content/60 text-sm max-w-sm">
        Anda tidak memiliki daftar tugas atau quiz untuk kategori filter ini.
      </p>
    </div>
  </div>
</template>
