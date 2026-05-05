<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})

const certData = {
  id: route.params.id,
  courseTitle: 'Pengenalan Budaya Perusahaan AKHLAK',
  recipient: 'Ariel Noah',
  issueDate: '15 April 2026',
  credentialId: 'JTT-2026-AKH-0042',
  url: 'https://iniwebjtt.co.id/verify/JTT-2026-AKH-0042',
  score: 95,
  skills: ['Budaya Perusahaan', 'Etika Kerja', 'Corporate Value', 'Teamwork'],
  instructor: 'Ir. Budi Uhuy, M.T.',
}

const printCertificate = () => {
  alert('OKKKKKKKKKEIIII')
}
</script>

<template>
  <div class="max-w-6xl mx-auto space-y-6 pb-10">
    <div
      class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-2xl border border-base-200 shadow-sm print:hidden"
    >
      <div class="text-sm breadcrumbs text-base-content/60">
        <ul>
          <li>
            <router-link to="/dashboard/certificates" class="hover:text-[#005b9f]"
              >Sertifikat</router-link
            >
          </li>
          <li class="text-base-content font-medium">Detail Sertifikat</li>
        </ul>
      </div>
      <div v-if="!isLoading" class="flex gap-2 w-full sm:w-auto">
        <button
          @click="router.back()"
          class="btn btn-sm btn-ghost border-base-200 shrink-0 rounded-xl px-4"
        >
          Kembali
        </button>
        <button
          @click="printCertificate"
          class="btn btn-sm bg-[#005b9f] text-white hover:bg-[#004780] border-none rounded-xl px-4 shadow-md flex-1 sm:flex-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
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
          Unduh PDF
        </button>
      </div>
      <div v-else class="flex gap-2 w-full sm:w-auto">
        <div class="h-8 bg-base-200 rounded-xl w-24 animate-pulse"></div>
        <div class="h-8 bg-base-200 rounded-xl w-32 animate-pulse"></div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-8 items-start">
      <div class="flex-1 w-full overflow-hidden">
        <div
          class="bg-base-200 p-4 md:p-8 rounded-3xl shadow-inner print:p-0 print:bg-white print:shadow-none overflow-x-auto hide-scrollbar"
        >
          <template v-if="isLoading">
            <div class="w-full max-w-4xl aspect-[1.414/1] bg-white rounded-2xl shadow-xl animate-pulse flex items-center justify-center">
              <div class="w-1/2 space-y-8 flex flex-col items-center">
                <div class="w-20 h-20 bg-base-100 rounded-full"></div>
                <div class="h-10 bg-base-100 rounded w-full"></div>
                <div class="h-6 bg-base-100 rounded w-1/2"></div>
                <div class="h-12 bg-base-100 rounded w-3/4"></div>
                <div class="h-4 bg-base-100 rounded w-full"></div>
              </div>
            </div>
          </template>
          <div
            v-else
            class="w-[800px] md:w-full max-w-4xl aspect-[1.414/1] bg-white shadow-2xl relative flex flex-col p-8 md:p-14 text-center print:shadow-none print:w-[1000px] print:h-[707px] mx-auto border-[16px] border-double border-[#005b9f]/20"
          >
            <div
              class="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center overflow-hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                class="w-full h-full scale-150 fill-[#005b9f]"
              >
                <path d="M50 0 L100 50 L50 100 L0 50 Z" />
              </svg>
            </div>

            <div
              class="absolute top-0 left-0 w-24 h-24 border-t-[8px] border-l-[8px] border-[#005b9f]/60 m-6"
            ></div>
            <div
              class="absolute top-0 right-0 w-24 h-24 border-t-[8px] border-r-[8px] border-[#005b9f]/60 m-6"
            ></div>
            <div
              class="absolute bottom-0 left-0 w-24 h-24 border-b-[8px] border-l-[8px] border-[#005b9f]/60 m-6"
            ></div>
            <div
              class="absolute bottom-0 right-0 w-24 h-24 border-b-[8px] border-r-[8px] border-[#005b9f]/60 m-6"
            ></div>

            <div class="flex-1 flex flex-col justify-center relative z-10">
              <div class="mb-6 md:mb-10 flex flex-col items-center">
                <div
                  class="w-16 h-16 md:w-20 md:h-20 bg-[#005b9f] mask mask-hexagon mb-4 flex items-center justify-center"
                >
                  <span class="text-white font-bold text-xl md:text-2xl">JTT</span>
                </div>
                <h4 class="text-xs md:text-sm font-bold tracking-widest text-[#005b9f] uppercase">
                  PT Jasamarga Transjawa Tol
                </h4>
              </div>

              <h1
                class="text-3xl md:text-5xl font-serif text-base-content mb-3 tracking-wide font-black"
              >
                SERTIFIKAT KELULUSAN
              </h1>
              <p class="text-sm md:text-base text-base-content/60 italic mb-8 md:mb-10">
                Diberikan dengan bangga kepada:
              </p>

              <h2
                class="text-2xl md:text-4xl font-bold text-[#005b9f] border-b-[3px] border-base-200 pb-3 inline-block mx-auto min-w-[300px] md:min-w-[500px] mb-8 md:mb-12 uppercase tracking-wider"
              >
                {{ certData.recipient }}
              </h2>

              <p class="text-sm md:text-base text-base-content/80 mb-2">
                Atas keberhasilan dalam menyelesaikan program pelatihan:
              </p>
              <h3
                class="text-lg md:text-2xl font-bold text-base-content px-10 mb-10 md:mb-16 leading-relaxed"
              >
                "{{ certData.courseTitle }}"
              </h3>

              <div class="mt-auto flex justify-between items-end px-4 md:px-10">
                <div class="text-left w-40">
                  <p class="text-xs text-base-content/50 uppercase font-bold tracking-wider mb-1">
                    Tanggal Terbit
                  </p>
                  <p class="font-medium border-t border-base-300 pt-1 text-sm">
                    {{ certData.issueDate }}
                  </p>
                </div>

                <div class="flex flex-col items-center">
                  <div
                    class="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg relative shrink-0 z-20"
                  >
                    <div
                      class="absolute inset-1.5 border-2 border-yellow-200 border-dashed rounded-full opacity-70"
                    ></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 text-white drop-shadow-md"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 flex gap-1 -z-10">
                      <div class="w-4 h-10 bg-yellow-600 rounded-b-sm rotate-12 origin-top"></div>
                      <div class="w-4 h-10 bg-yellow-500 rounded-b-sm -rotate-12 origin-top"></div>
                    </div>
                  </div>
                </div>

                <div class="text-right w-40">
                  <p class="text-xs text-base-content/50 uppercase font-bold tracking-wider mb-1">
                    Instruktur Utama
                  </p>

                  <div class="h-8 md:h-10 flex items-end justify-end mb-1">
                    <span
                      class="font-serif italic text-2xl md:text-3xl text-base-content/80 -rotate-3 opacity-80"
                      >{{ certData.instructor.split(' ')[1] || 'Signature' }}</span
                    >
                  </div>
                  <p class="font-medium text-sm border-t border-base-300 pt-1 inline-block">
                    {{ certData.instructor }}
                  </p>
                </div>
              </div>

              <div
                class="absolute bottom-6 left-0 right-0 text-[10px] md:text-xs text-base-content/40 font-mono tracking-wider flex justify-center gap-4 px-10"
              >
                <span>ID: {{ certData.credentialId }}</span>
                <span>•</span>
                <span>{{ certData.url }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-80 shrink-0 space-y-6 print:hidden">
        <div class="bg-white rounded-2xl border border-base-200 shadow-sm p-6">
          <h3 class="font-bold text-lg mb-6 border-b border-base-200 pb-3">Informasi Sertifikat</h3>

          <div class="space-y-4">
            <template v-if="isLoading">
              <div v-for="i in 5" :key="i" class="space-y-2">
                <div class="h-3 bg-base-200 rounded w-20 animate-pulse"></div>
                <div class="h-8 bg-base-50 rounded-xl animate-pulse"></div>
              </div>
            </template>
            <template v-else>
              <div>
                <p class="text-xs text-base-content/50 uppercase font-bold tracking-wider mb-1">
                  Penerima
                </p>
                <div class="flex items-center gap-3">
                  <div
                    class="w-8 h-8 rounded-full bg-[#005b9f] text-white flex items-center justify-center font-bold text-xs shadow-sm"
                  >
                    IJ
                  </div>
                  <span class="font-medium text-base-content">{{ certData.recipient }}</span>
                </div>
              </div>

              <div>
                <p class="text-xs text-base-content/50 uppercase font-bold tracking-wider mb-1">
                  Diterbitkan Oleh
                </p>
                <div class="flex items-center gap-2">
                  <div
                    class="w-6 h-6 bg-[#005b9f] mask mask-hexagon flex items-center justify-center text-white text-[8px] font-bold"
                  >
                    JTT
                  </div>
                  <p class="font-medium text-base-content text-sm">
                    JM LiNX - PT Jasamarga Transjawa Tol
                  </p>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-xs text-base-content/50 uppercase font-bold tracking-wider mb-1">
                    Diterbitkan
                  </p>
                  <p class="font-medium text-base-content text-sm">{{ certData.issueDate }}</p>
                </div>
                <div>
                  <p class="text-xs text-base-content/50 uppercase font-bold tracking-wider mb-1">
                    Nilai Akhir
                  </p>
                  <p class="font-bold text-green-600 text-sm">{{ certData.score }} / 100</p>
                </div>
              </div>

              <div>
                <p class="text-xs text-base-content/50 uppercase font-bold tracking-wider mb-1">
                  ID Kredensial
                </p>
                <div class="flex items-center gap-2">
                  <code
                    class="text-xs font-mono bg-base-100 px-2 py-1.5 rounded-lg border border-base-200"
                    >{{ certData.credentialId }}</code
                  >
                </div>
              </div>

              <div>
                <p class="text-xs text-base-content/50 uppercase font-bold tracking-wider mb-1">
                  Tautan Verifikasi
                </p>
                <a
                  :href="certData.url"
                  class="text-xs text-[#005b9f] hover:underline break-all block truncate"
                  >{{ certData.url }}</a
                >
              </div>
            </template>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-base-200 shadow-sm p-6">
          <h3 class="font-bold text-lg mb-4">Keahlian (Skills)</h3>
          <template v-if="isLoading">
            <div class="flex flex-wrap gap-2">
              <div v-for="i in 4" :key="i" class="h-7 bg-base-200 rounded-lg w-20 animate-pulse"></div>
            </div>
          </template>
          <div v-else class="flex flex-wrap gap-2">
            <span
              v-for="skill in certData.skills"
              :key="skill"
              class="bg-blue-50/80 text-[#005b9f] px-3 py-1.5 rounded-lg text-xs font-semibold border border-[#005b9f]/20"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <button
          v-if="!isLoading"
          class="btn bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5] hover:text-white border-none w-full rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
            />
          </svg>
          Tambahkan ke profil LinkedIn
        </button>
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
</style>
