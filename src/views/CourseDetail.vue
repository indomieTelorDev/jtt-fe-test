<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const courseId = route.params.id

const isLoading = ref(true)
const isSidebarOpen = ref(true)
const activeTab = ref('deskripsi')

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})

const courseData = {
  title: 'Pelatihan Keselamatan dan Kesehatan Kerja (K3) Dasar',
  category: 'Wajib / Mandatory',
  instructor: 'Ir. Budi Uhuy, M.T.',
  progress: 45,
  videoUrl:
    'https://rr2---sn-4g5ednsl.googlevideo.com/videoplayback?expire=1777977205&ei=FXP5acyrIP2Ap-oPipnbgQc&ip=172.70.246.97&id=o-ANsAMwO6ZvUA2IC_8r9j56ccOWaKGkoNtSIL1QuhZC3N&itag=136&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=367&met=1777955605%2C&mh=xf&mm=31%2C26&mn=sn-4g5ednsl%2Csn-1gi7znes&ms=au%2Conr&mv=m&mvi=2&pl=24&rms=au%2Cau&ctier=A&pfa=5&initcwndbps=5988750&hightc=yes&siu=1&bui=AbKmrwplvi8GI6l1NqKYr4gxSRgGRTNzCsLqEF7ELxoGAz55FRa4XaBhPoKh4Gw00C8sPriyLw&spc=96Xrv1Ia_4Mk31zrByoun3ZJ7YdtCAztgjNo2bgxmmEVBpHA4VZv6f6Qug&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=27267030&dur=260.533&lmt=1733343317403444&mt=1777955345&fvip=5&keepalive=yes&fexp=51565116%2C51565681&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cpfa%2Chightc%2Csiu%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AHEqNM4wRgIhAJmoxF1NJgEWWjAKtCKhSZDCJTYu5jaQcP8G-gHV4PSQAiEA-IeObZeWcWNnNlmB8VRpvUVEIsHIjtI0wPdiqoCmiGk%3D&lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIgE5FITAq48RjPHLtzrxMq4YMkS2u0eWK_IURAPUsoIBwCIQCs4m5S0VVxfSiZCbA0FHepAnb9mlGfmI6efjdE5z35KA%3D%3D',
  description:
    'Pelatihan ini dirancang untuk memberikan pemahaman mendalam tentang standar Keselamatan dan Kesehatan Kerja (K3) di lingkungan operasional Jasa Marga. Peserta akan mempelajari protokol keselamatan jalan tol, identifikasi risiko tinggi, serta prosedur evakuasi darurat sesuai standar internasional.',
  modules: [
    {
      id: 1,
      title: 'Modul 1: Landasan Hukum & Kebijakan K3',
      duration: '45 Menit',
      isCompleted: true,
      lessons: [
        {
          id: 101,
          title: 'Implementasi K3 di Lingkungan Jasa Marga',
          type: 'video',
          duration: '15m',
          isCompleted: true,
          isCurrent: false,
        },
        {
          id: 102,
          title: 'Regulasi K3 Nasional & Standar Perusahaan',
          type: 'document',
          duration: '20m',
          isCompleted: true,
          isCurrent: false,
        },
        {
          id: 103,
          title: 'Kuis Pemahaman Kebijakan K3',
          type: 'quiz',
          duration: '10m',
          isCompleted: true,
          isCurrent: false,
        },
      ],
    },
    {
      id: 2,
      title: 'Modul 2: Mitigasi Risiko Operasional Jalan Tol',
      duration: '1 Jam 20 Menit',
      isCompleted: false,
      lessons: [
        {
          id: 201,
          title: 'Identifikasi Bahaya di Area Transaksi & Gerbang Tol',
          type: 'video',
          duration: '25m',
          isCompleted: true,
          isCurrent: false,
        },
        {
          id: 202,
          title: 'Prosedur Kerja Aman di Bahu Jalan & Lajur Aktif',
          type: 'video',
          duration: '35m',
          isCompleted: false,
          isCurrent: true,
        },
        {
          id: 203,
          title: 'Studi Kasus Penanganan Kecelakaan Kerja',
          type: 'document',
          duration: '20m',
          isCompleted: false,
          isCurrent: false,
        },
      ],
    },
    {
      id: 3,
      title: 'Modul 3: Peralatan Keselamatan & Keadaan Darurat',
      duration: '50 Menit',
      isCompleted: false,
      lessons: [
        {
          id: 301,
          title: 'Standar Penggunaan APD Petugas Operasional',
          type: 'video',
          duration: '30m',
          isCompleted: false,
          isCurrent: false,
        },
        {
          id: 302,
          title: 'Protokol Komunikasi Darurat (Radio & Mobile)',
          type: 'video',
          duration: '10m',
          isCompleted: false,
          isCurrent: false,
        },
        {
          id: 303,
          title: 'Evaluasi Kompetensi K3 Dasar',
          type: 'quiz',
          duration: '10m',
          isCompleted: false,
          isCurrent: false,
        },
      ],
    },
  ],
}

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-6 -mt-2 h-[calc(100vh-120px)]">
    <div class="flex-1 flex flex-col min-w-0 h-full overflow-y-auto pr-2 custom-scroll">
      <div class="mb-4 shrink-0">
        <div class="text-sm breadcrumbs text-base-content/60 mb-2">
          <ul>
            <li>
              <router-link to="/dashboard/courses" class="hover:text-[#005b9f]"
                >My Courses</router-link
              >
            </li>
            <li class="text-base-content truncate max-w-[200px] md:max-w-md">
              <template v-if="isLoading">
                <div class="h-4 bg-base-200 rounded w-48 animate-pulse"></div>
              </template>
              <template v-else>
                {{ courseData.title }}
              </template>
            </li>
          </ul>
        </div>
        <div class="flex justify-between items-start gap-4">
          <template v-if="isLoading">
            <div class="h-8 bg-base-200 rounded w-3/4 animate-pulse"></div>
          </template>
          <template v-else>
            <h1 class="text-2xl font-bold text-base-content">{{ courseData.title }}</h1>
          </template>
          <button
            @click="toggleSidebar"
            class="btn btn-sm btn-outline border-base-300 lg:hidden shrink-0"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Modul
          </button>
        </div>
      </div>

      <div
        class="w-full bg-black rounded-2xl overflow-hidden aspect-video relative shadow-md shrink-0"
      >
        <template v-if="isLoading">
          <div class="w-full h-full bg-base-200 animate-pulse flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16 text-base-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </template>
        <video
          v-else
          class="w-full h-full object-contain"
          controls
          poster="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
        >
          <source :src="courseData.videoUrl" type="video/mp4" />
          Browser Anda tidak mendukung video HTML5.
        </video>
      </div>

      <div class="mt-6 bg-white rounded-2xl border border-base-200 shadow-sm shrink-0 mb-6">
        <div class="flex border-b border-base-200 px-4 pt-2 gap-4 overflow-x-auto hide-scrollbar">
          <button
            @click="activeTab = 'deskripsi'"
            class="px-4 py-3 font-medium text-sm border-b-2 transition-colors whitespace-nowrap"
            :class="
              activeTab === 'deskripsi'
                ? 'border-[#005b9f] text-[#005b9f]'
                : 'border-transparent text-base-content/60 hover:text-base-content'
            "
          >
            Deskripsi Course
          </button>
          <button
            @click="activeTab = 'materi'"
            class="px-4 py-3 font-medium text-sm border-b-2 transition-colors whitespace-nowrap"
            :class="
              activeTab === 'materi'
                ? 'border-[#005b9f] text-[#005b9f]'
                : 'border-transparent text-base-content/60 hover:text-base-content'
            "
          >
            Materi Pendukung
          </button>
          <button
            @click="activeTab = 'diskusi'"
            class="px-4 py-3 font-medium text-sm border-b-2 transition-colors whitespace-nowrap"
            :class="
              activeTab === 'diskusi'
                ? 'border-[#005b9f] text-[#005b9f]'
                : 'border-transparent text-base-content/60 hover:text-base-content'
            "
          >
            Forum Diskusi
          </button>
        </div>

        <div class="p-6">
          <template v-if="isLoading">
            <div class="space-y-4">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 rounded-full bg-base-200 animate-pulse"></div>
                <div class="space-y-2">
                  <div class="h-3 bg-base-200 rounded w-20 animate-pulse"></div>
                  <div class="h-5 bg-base-200 rounded w-32 animate-pulse"></div>
                </div>
              </div>
              <div class="h-6 bg-base-200 rounded w-40 animate-pulse"></div>
              <div class="space-y-2">
                <div class="h-4 bg-base-200 rounded w-full animate-pulse"></div>
                <div class="h-4 bg-base-200 rounded w-full animate-pulse"></div>
                <div class="h-4 bg-base-200 rounded w-2/3 animate-pulse"></div>
              </div>
            </div>
          </template>
          <template v-else>
            <div v-if="activeTab === 'deskripsi'" class="space-y-4">
              <div class="flex items-center gap-4 mb-6">
                <div class="avatar">
                  <div class="w-12 h-12 rounded-full bg-base-200">
                    <img src="https://ui-avatars.com/api/?name=Budi+Santoso&background=random" />
                  </div>
                </div>
                <div>
                  <p class="text-sm text-base-content/60">Instruktur</p>
                  <p class="font-bold text-base-content">{{ courseData.instructor }}</p>
                </div>
                <div class="divider divider-horizontal mx-1"></div>
                <div>
                  <p class="text-sm text-base-content/60">Kategori</p>
                  <p class="font-semibold text-[#005b9f]">{{ courseData.category }}</p>
                </div>
              </div>
              <h3 class="text-lg font-bold">Tentang Course Ini</h3>
              <p class="text-base-content/80 leading-relaxed">
                {{ courseData.description }}
              </p>
            </div>

            <div v-else-if="activeTab === 'materi'" class="space-y-3">
              <div
                class="flex items-center justify-between p-3 bg-base-50 rounded-xl border border-base-200 hover:bg-base-100 transition-colors cursor-pointer"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-sm">Buku_Panduan_K3_JTT.pdf</p>
                    <p class="text-xs text-base-content/50">PDF Document • 2.4 MB</p>
                  </div>
                </div>
                <button class="btn btn-sm btn-ghost btn-circle text-[#005b9f]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div v-else class="text-center py-8">
              <p class="text-base-content/60">Forum diskusi belum tersedia untuk sesi ini.</p>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div
      class="lg:w-80 xl:w-96 flex-shrink-0 flex-col bg-white rounded-2xl border border-base-200 shadow-sm overflow-hidden h-full"
      :class="isSidebarOpen ? 'flex' : 'hidden lg:flex'"
    >
      <div class="p-5 border-b border-base-200 bg-base-50 shrink-0">
        <h2 class="font-bold text-lg mb-2">Daftar Modul</h2>
        <div class="flex items-center justify-between text-sm mb-2">
          <span class="text-base-content/70">Progres Keseluruhan</span>
          <span class="font-bold text-[#005b9f]">
            <template v-if="isLoading">
              <div class="h-4 bg-base-200 rounded w-8 animate-pulse"></div>
            </template>
            <template v-else>{{ courseData.progress }}%</template>
          </span>
        </div>
        <template v-if="isLoading">
          <div class="h-2.5 bg-base-200 rounded-full w-full animate-pulse"></div>
        </template>
        <progress
          v-else
          class="progress progress-primary w-full h-2"
          :value="courseData.progress"
          max="100"
        ></progress>
      </div>

      <div class="flex-1 overflow-y-auto custom-scroll">
        <div v-if="isLoading" class="p-4 space-y-4">
          <div v-for="i in 5" :key="i" class="space-y-2">
            <div class="h-12 bg-base-100 rounded-xl animate-pulse"></div>
          </div>
        </div>
        <div v-else class="join join-vertical w-full rounded-none">
          <div
            v-for="module in courseData.modules"
            :key="module.id"
            class="collapse collapse-arrow join-item border-b border-base-200 rounded-none"
          >
            <input type="radio" name="my-accordion-4" :checked="module.id === 2" />
            <div
              class="collapse-title font-medium py-4 px-5 bg-white hover:bg-base-50 transition-colors"
            >
              <div class="flex flex-col gap-1 pr-6">
                <span class="text-sm font-bold text-base-content line-clamp-2 leading-tight">{{
                  module.title
                }}</span>
                <span class="text-xs text-base-content/50"
                  >{{ module.lessons.length }} Materi • {{ module.duration }}</span
                >
              </div>
            </div>
            <div class="collapse-content bg-base-50/50 p-0">
              <ul class="menu menu-sm w-full p-2 gap-1">
                <li v-for="lesson in module.lessons" :key="lesson.id">
                  <a
                    class="py-3 px-4 rounded-xl flex gap-3 transition-colors"
                    :class="
                      lesson.isCurrent
                        ? 'bg-[#005b9f]/10 text-[#005b9f] active:!bg-[#005b9f]/10'
                        : 'hover:bg-base-200 text-base-content/80'
                    "
                  >
                    <div class="mt-0.5 shrink-0">
                      <svg
                        v-if="lesson.isCompleted"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        v-else-if="lesson.type === 'video'"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        :class="lesson.isCurrent ? 'text-[#005b9f]' : 'text-base-content/40'"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <svg
                        v-else-if="lesson.type === 'document'"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        :class="lesson.isCurrent ? 'text-[#005b9f]' : 'text-base-content/40'"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <svg
                        v-else-if="lesson.type === 'quiz'"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        :class="lesson.isCurrent ? 'text-[#005b9f]' : 'text-base-content/40'"
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
                    </div>

                    <div class="flex flex-col min-w-0">
                      <span
                        class="text-sm font-medium leading-tight mb-1"
                        :class="lesson.isCurrent ? 'text-[#005b9f] font-bold' : ''"
                        >{{ lesson.title }}</span
                      >
                      <span
                        class="text-[11px]"
                        :class="lesson.isCurrent ? 'text-[#005b9f]/80' : 'text-base-content/50'"
                        >{{
                          lesson.type === 'video'
                            ? 'Video'
                            : lesson.type === 'quiz'
                              ? 'Kuis'
                              : 'Dokumen'
                        }}
                        • {{ lesson.duration }}</span
                      >
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
.custom-scroll::-webkit-scrollbar {
  width: 6px;
}
.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 20px;
}
.custom-scroll::-webkit-scrollbar-thumb:hover {
  background-color: #94a3b8;
}
</style>
