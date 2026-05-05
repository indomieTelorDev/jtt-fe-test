<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1200)
})

const stats = [
  {
    title: 'Course Aktif',
    value: '4',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    color: 'text-blue-500',
    bg: 'bg-blue-100',
  },
  {
    title: 'Selesai',
    value: '12',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'text-success',
    bg: 'bg-success/20',
  },
  {
    title: 'Sertifikat',
    value: '8',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    color: 'text-warning',
    bg: 'bg-warning/20',
  },
  {
    title: 'Poin Belajar',
    value: '2.450',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    color: 'text-purple-500',
    bg: 'bg-purple-100',
  },
]

const recentCourses = [
  {
    id: 1,
    title: 'Keselamatan & Kesehatan Kerja (K3) Dasar',
    category: 'Mandatory',
    progress: 65,
    image: 'https://cms.jmtransjawatol.co.id/storage/1616/conversions/152-medium.jpg',
  },
  {
    id: 2,
    title: 'Leadership di Era Digital',
    category: 'Soft Skill',
    progress: 30,
    image: 'https://cms.jmtransjawatol.co.id/storage/1612/conversions/150-medium.jpg',
  },
  {
    id: 3,
    title: 'Pengenalan Sistem Tol Terpadu',
    category: 'Technical',
    progress: 0,
    image: 'https://cms.jmtransjawatol.co.id/storage/1606/conversions/147-medium.jpg',
  },
]

const todos = [
  { id: 1, title: 'Selesaikan Kuis Modul 3: Leadership', deadline: 'Besok, 23:59', isUrgent: true },
  { id: 2, title: 'Review materi K3 Dasar', deadline: '12 Mei 2026', isUrgent: false },
  { id: 3, title: 'Pre-test Pengenalan Sistem Tol', deadline: '15 Mei 2026', isUrgent: false },
]
</script>

<template>
  <div class="max-w-7xl mx-auto space-y-6 lg:space-y-8 animate-fade-in-up">
    <div
      class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-base-200"
    >
      <div v-if="isLoading" class="w-full">
        <div class="h-8 bg-base-200 rounded-lg w-1/3 animate-pulse mb-2"></div>
        <div class="h-4 bg-base-200 rounded-lg w-1/2 animate-pulse"></div>
      </div>
      <div v-else>
        <h1 class="text-2xl font-bold text-base-content">Halo, Insan Jasa Marga! 👋</h1>
        <p class="text-base-content/70 mt-1">
          Siap untuk belajar dan mengembangkan kompetensi hari ini?
        </p>
      </div>
      <div v-if="isLoading" class="h-12 w-32 bg-base-200 rounded-xl animate-pulse"></div>
      <button
        v-else
        class="btn bg-[#005b9f] hover:bg-[#004a84] text-white border-none shadow-md shrink-0"
      >
        Mulai Belajar
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      <template v-if="isLoading">
        <div
          v-for="i in 4"
          :key="i"
          class="bg-white rounded-2xl p-6 shadow-sm border border-base-200 flex items-center gap-5"
        >
          <div class="w-14 h-14 rounded-2xl bg-base-200 animate-pulse"></div>
          <div class="flex-1 space-y-2">
            <div class="h-3 bg-base-200 rounded-full w-2/3 animate-pulse"></div>
            <div class="h-8 bg-base-200 rounded-lg w-1/2 animate-pulse"></div>
          </div>
        </div>
      </template>
      <template v-else>
        <div
          v-for="stat in stats"
          :key="stat.title"
          class="bg-white rounded-2xl p-6 shadow-sm border border-base-200 flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300"
        >
          <div
            class="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            :class="stat.bg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              :class="stat.color"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="stat.icon"
              />
            </svg>
          </div>
          <div>
            <p class="text-sm font-semibold text-base-content/60 uppercase tracking-wider">
              {{ stat.title }}
            </p>
            <p class="text-3xl font-extrabold text-base-content mt-1">{{ stat.value }}</p>
          </div>
        </div>
      </template>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      <div class="lg:col-span-2 space-y-6">
        <div class="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-base-200">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold text-base-content">Lanjutkan Belajar</h2>
            <button class="btn btn-sm btn-ghost text-[#005b9f] hover:bg-[#005b9f]/10">
              Lihat Semua
            </button>
          </div>

          <div class="space-y-4">
            <template v-if="isLoading">
              <div
                v-for="i in 3"
                :key="i"
                class="flex flex-col sm:flex-row gap-5 p-4 rounded-2xl border border-base-200"
              >
                <div class="w-full sm:w-48 h-32 rounded-xl bg-base-200 animate-pulse"></div>
                <div class="flex-1 space-y-4 py-2">
                  <div class="h-5 bg-base-200 rounded-lg w-1/4 animate-pulse"></div>
                  <div class="h-6 bg-base-200 rounded-lg w-3/4 animate-pulse"></div>
                  <div class="h-4 bg-base-200 rounded-full w-full animate-pulse mt-4"></div>
                </div>
              </div>
            </template>
            <template v-else>
              <div
                v-for="course in recentCourses"
                :key="course.id"
                class="flex flex-col sm:flex-row gap-5 p-4 rounded-2xl border border-base-200 hover:border-[#005b9f]/40 hover:shadow-md transition-all group cursor-pointer bg-base-50/50"
              >
                <div class="w-full sm:w-48 h-32 rounded-xl overflow-hidden shrink-0 relative">
                  <img
                    :src="course.image"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Course Cover"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"
                  ></div>

                  <div
                    class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div class="bg-white/90 rounded-full p-2 shadow-lg backdrop-blur-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-[#005b9f] ml-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="flex-1 flex flex-col justify-center">
                  <div class="flex items-center gap-2 mb-2">
                    <span
                      class="badge badge-sm border-none font-semibold px-2 py-3"
                      :class="
                        course.category === 'Mandatory'
                          ? 'bg-error/10 text-error'
                          : 'bg-[#005b9f]/10 text-[#005b9f]'
                      "
                      >{{ course.category }}</span
                    >
                  </div>
                  <h3
                    class="font-bold text-lg text-base-content group-hover:text-[#005b9f] transition-colors line-clamp-2 leading-snug"
                  >
                    {{ course.title }}
                  </h3>
                  <div class="mt-auto pt-4 flex items-center gap-4">
                    <div class="flex-1 bg-base-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        class="bg-[#005b9f] h-full rounded-full transition-all duration-1000"
                        :style="{ width: course.progress + '%' }"
                      ></div>
                    </div>
                    <span class="text-sm font-bold text-base-content whitespace-nowrap"
                      >{{ course.progress }}%</span
                    >
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

      <div class="space-y-6 lg:space-y-8">
        <div
          class="bg-gradient-to-br from-[#005b9f] to-[#003865] rounded-2xl p-6 lg:p-8 text-white shadow-lg relative overflow-hidden group"
        >
          <svg
            class="absolute top-0 right-0 text-white/5 w-40 h-40 transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
            />
          </svg>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-4">
              <span class="bg-[#ffc600] text-amber-900 text-xs font-bold px-2 py-1 rounded"
                >TERBARU</span
              >
            </div>
            <h2 class="text-xl font-bold mb-3 leading-tight">Pengumuman Pelatihan Batch 2</h2>
            <p class="text-sm text-blue-100 mb-6 leading-relaxed opacity-90">
              Pelatihan Budaya Perusahaan batch 2 akan dimulai pada tanggal 10 Mei 2026. Pastikan
              Anda telah mengunduh modul pre-reading yang tersedia di portal.
            </p>
            <button
              class="btn btn-sm bg-white text-[#005b9f] border-none hover:bg-base-200 shadow-md"
            >
              Baca Selengkapnya
            </button>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-base-200">
          <h2 class="text-lg font-bold text-base-content mb-5 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-warning"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            Tugas & Aktivitas
          </h2>
          <ul class="space-y-4">
            <template v-if="isLoading">
              <li v-for="i in 3" :key="i" class="flex gap-4 p-4 rounded-xl border border-base-200">
                <div class="w-6 h-6 bg-base-200 rounded animate-pulse"></div>
                <div class="flex-1 space-y-2">
                  <div class="h-4 bg-base-200 rounded-lg w-full animate-pulse"></div>
                  <div class="h-3 bg-base-200 rounded-lg w-1/2 animate-pulse"></div>
                </div>
              </li>
            </template>
            <template v-else>
              <li
                v-for="todo in todos"
                :key="todo.id"
                class="flex gap-4 p-4 rounded-xl border border-base-200 hover:border-[#005b9f]/30 hover:shadow-sm transition-all group"
              >
                <input
                  type="checkbox"
                  class="checkbox checkbox-sm mt-0.5 checkbox-primary rounded"
                />
                <div>
                  <p
                    class="font-semibold text-sm text-base-content leading-tight group-hover:text-[#005b9f] transition-colors"
                  >
                    {{ todo.title }}
                  </p>
                  <div class="flex items-center gap-1.5 mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      :class="todo.isUrgent ? 'text-error' : 'text-base-content/50'"
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
                    <p
                      class="text-xs font-medium"
                      :class="todo.isUrgent ? 'text-error' : 'text-base-content/60'"
                    >
                      {{ todo.deadline }}
                    </p>
                  </div>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}
</style>
