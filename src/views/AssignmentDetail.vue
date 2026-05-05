<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isLoading = ref(true)
const isStarted = ref(false)
const isSubmitted = ref(false)
const currentQuestionIndex = ref(0)
const answers = ref({})

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})

const quizInfo = {
  title: 'Evaluasi Akhir Modul K3 Dasar',
  courseTitle: 'Pelatihan Keselamatan dan Kesehatan Kerja (K3) Dasar',
  duration: 30,
  passingScore: 80,
  questions: [
    {
      id: 1,
      text: 'Apa kepanjangan dari K3?',
      options: [
        { id: 'A', text: 'Keselamatan dan Ketertiban Kerja' },
        { id: 'B', text: 'Kesehatan dan Keselamatan Kerja' },
        { id: 'C', text: 'Keselamatan dan Kesehatan Kerja' },
        { id: 'D', text: 'Keamanan dan Kesehatan Karyawan' },
      ],
    },
    {
      id: 2,
      text: 'Apa langkah pertama yang harus dilakukan ketika menemukan potensi bahaya di lingkungan jalan tol?',
      options: [
        { id: 'A', text: 'Membiarkan saja karena bukan tanggung jawab saya' },
        { id: 'B', text: 'Segera melapor ke atasan atau tim K3' },
        { id: 'C', text: 'Menulisnya di media sosial' },
        { id: 'D', text: 'Mencoba menangani sendiri tanpa perlengkapan' },
      ],
    },
    {
      id: 3,
      text: 'Berikut ini adalah Alat Pelindung Diri (APD) standar untuk petugas operasional tol, KECUALI:',
      options: [
        { id: 'A', text: 'Rompi Reflektif' },
        { id: 'B', text: 'Sepatu Safety' },
        { id: 'C', text: 'Helm Safety' },
        { id: 'D', text: 'Kacamata Hitam Fashion' },
      ],
    },
    {
      id: 4,
      text: 'Metode HIRADC digunakan untuk:',
      options: [
        { id: 'A', text: 'Menghitung lembur karyawan' },
        { id: 'B', text: 'Identifikasi Bahaya dan Penilaian Risiko' },
        { id: 'C', text: 'Mengevaluasi laporan keuangan' },
        { id: 'D', text: 'Menyusun jadwal shift operasional' },
      ],
    },
  ],
}

const currentQuestion = computed(() => quizInfo.questions[currentQuestionIndex.value])
const isLastQuestion = computed(() => currentQuestionIndex.value === quizInfo.questions.length - 1)
const isFirstQuestion = computed(() => currentQuestionIndex.value === 0)
const progressPercentage = computed(
  () => (Object.keys(answers.value).length / quizInfo.questions.length) * 100,
)

const selectOption = (optionId) => {
  answers.value[currentQuestion.value.id] = optionId
}

const nextQuestion = () => {
  if (!isLastQuestion.value) currentQuestionIndex.value++
}

const prevQuestion = () => {
  if (!isFirstQuestion.value) currentQuestionIndex.value--
}

const submitQuiz = () => {
  if (
    confirm(
      'Apakah Anda yakin ingin mengumpulkan jawaban? Anda tidak bisa mengubahnya setelah ini.',
    )
  ) {
    isSubmitted.value = true
  }
}

const jumpToQuestion = (index) => {
  currentQuestionIndex.value = index
}
</script>

<template>
  <div class="h-[calc(100vh-120px)] flex flex-col -mt-2">
    <div v-if="!isStarted" class="max-w-3xl mx-auto w-full mt-10">
      <div class="bg-white rounded-3xl p-8 md:p-12 border border-base-200 shadow-xl text-center">
        <template v-if="isLoading">
          <div class="w-20 h-20 bg-base-200 rounded-full mx-auto mb-6 animate-pulse"></div>
          <div class="h-8 bg-base-200 rounded w-3/4 mx-auto mb-3 animate-pulse"></div>
          <div class="h-5 bg-base-200 rounded w-1/2 mx-auto mb-8 animate-pulse"></div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div v-for="i in 4" :key="i" class="h-20 bg-base-50 rounded-xl border border-base-200 animate-pulse"></div>
          </div>

          <div class="h-24 bg-base-50 rounded-xl border border-base-200 mb-8 animate-pulse"></div>

          <div class="flex gap-3 justify-center">
            <div class="h-12 bg-base-200 rounded-xl w-32 animate-pulse"></div>
            <div class="h-12 bg-base-200 rounded-xl w-48 animate-pulse"></div>
          </div>
        </template>
        <template v-else>
          <div
            class="w-20 h-20 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h1 class="text-3xl font-bold mb-3 text-base-content">{{ quizInfo.title }}</h1>
          <p class="text-base-content/60 mb-8">{{ quizInfo.courseTitle }}</p>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left">
            <div class="bg-base-50 p-4 rounded-xl border border-base-200">
              <p class="text-xs text-base-content/50 uppercase font-bold tracking-wider mb-1">
                Durasi
              </p>
              <p class="font-bold text-lg">{{ quizInfo.duration }} Menit</p>
            </div>
            <div class="bg-base-50 p-4 rounded-xl border border-base-200">
              <p class="text-xs text-base-content/50 uppercase font-bold tracking-wider mb-1">Soal</p>
              <p class="font-bold text-lg">{{ quizInfo.questions.length }} Pilihan Ganda</p>
            </div>
            <div class="bg-base-50 p-4 rounded-xl border border-base-200">
              <p class="text-xs text-base-content/50 uppercase font-bold tracking-wider mb-1">
                KKM / Lulus
              </p>
              <p class="font-bold text-lg text-green-600">{{ quizInfo.passingScore }}</p>
            </div>
            <div class="bg-base-50 p-4 rounded-xl border border-base-200">
              <p class="text-xs text-base-content/50 uppercase font-bold tracking-wider mb-1">
                Kesempatan
              </p>
              <p class="font-bold text-lg">1x Percobaan</p>
            </div>
          </div>

          <div
            class="bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-left mb-8 text-sm text-base-content/80"
          >
            <p class="font-bold text-[#005b9f] mb-2 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                />
              </svg>
              Petunjuk Pengerjaan
            </p>
            <ul class="list-disc ml-5 space-y-1">
              <li>Pastikan koneksi internet Anda stabil sebelum memulai.</li>
              <li>Waktu akan terus berjalan meskipun Anda menutup browser.</li>
              <li>Kerjakan dengan jujur dan teliti.</li>
            </ul>
          </div>

          <div class="flex gap-3 justify-center">
            <button @click="router.back()" class="btn btn-outline border-base-300 rounded-xl px-8">
              Kembali
            </button>
            <button
              @click="isStarted = true"
              class="btn bg-[#005b9f] text-white hover:bg-[#004780] border-none rounded-xl px-10 shadow-lg shadow-[#005b9f]/30"
            >
              Mulai Kuis Sekarang
            </button>
          </div>
        </template>
      </div>
    </div>

    <div v-else-if="!isSubmitted" class="flex flex-col lg:flex-row gap-6 h-full">
      <div
        class="flex-1 flex flex-col min-w-0 bg-white rounded-2xl border border-base-200 shadow-sm overflow-hidden relative"
      >
        <div
          class="h-16 border-b border-base-200 px-6 flex items-center justify-between bg-white shrink-0"
        >
          <h2 class="font-bold text-lg truncate max-w-[200px] md:max-w-md">{{ quizInfo.title }}</h2>
          <div
            class="flex items-center gap-3 bg-red-50 text-red-600 px-4 py-1.5 rounded-full font-bold border border-red-100"
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            29:59
          </div>
        </div>

        <div class="p-6 md:p-10 flex-1 overflow-y-auto custom-scroll">
          <div class="mb-8">
            <div
              class="inline-flex items-center gap-2 text-[#005b9f] font-bold bg-[#005b9f]/10 px-4 py-1.5 rounded-lg mb-4 text-sm"
            >
              Pertanyaan {{ currentQuestionIndex + 1 }} dari {{ quizInfo.questions.length }}
            </div>
            <h3 class="text-xl md:text-2xl font-medium leading-relaxed text-base-content">
              {{ currentQuestion.text }}
            </h3>
          </div>

          <div class="space-y-3">
            <label
              v-for="option in currentQuestion.options"
              :key="option.id"
              class="flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all hover:bg-base-50"
              :class="
                answers[currentQuestion.id] === option.id
                  ? 'border-[#005b9f] bg-[#005b9f]/5'
                  : 'border-base-200'
              "
              @click="selectOption(option.id)"
            >
              <div class="shrink-0 mt-0.5">
                <input
                  type="radio"
                  :name="`question-${currentQuestion.id}`"
                  class="radio radio-primary border-base-300"
                  :checked="answers[currentQuestion.id] === option.id"
                />
              </div>
              <div class="flex gap-3">
                <span class="font-bold text-base-content/50 w-5">{{ option.id }}.</span>
                <span class="text-base-content text-base">{{ option.text }}</span>
              </div>
            </label>
          </div>
        </div>

        <div class="p-4 border-t border-base-200 bg-base-50 flex justify-between shrink-0">
          <button
            class="btn btn-outline border-base-300 rounded-xl"
            :disabled="isFirstQuestion"
            @click="prevQuestion"
          >
            Sebelumnya
          </button>
          <button
            v-if="!isLastQuestion"
            class="btn bg-[#005b9f] text-white hover:bg-[#004780] border-none rounded-xl px-8"
            @click="nextQuestion"
          >
            Selanjutnya
          </button>
          <button
            v-else
            class="btn bg-green-500 text-white hover:bg-green-600 border-none rounded-xl px-8 shadow-lg shadow-green-500/30"
            @click="submitQuiz"
          >
            Selesai Kumpulkan
          </button>
        </div>
      </div>

      <div
        class="lg:w-72 shrink-0 bg-white rounded-2xl border border-base-200 shadow-sm overflow-hidden flex flex-col h-auto max-h-[300px] lg:max-h-full"
      >
        <div class="p-5 border-b border-base-200 bg-base-50 shrink-0">
          <h3 class="font-bold mb-2">Navigasi Soal</h3>
          <div class="flex justify-between text-xs text-base-content/60 mb-2">
            <span>Terjawab: {{ Object.keys(answers).length }}</span>
            <span>Belum: {{ quizInfo.questions.length - Object.keys(answers).length }}</span>
          </div>
          <progress
            class="progress progress-primary w-full h-2"
            :value="progressPercentage"
            max="100"
          ></progress>
        </div>

        <div class="p-5 overflow-y-auto custom-scroll flex-1">
          <div class="grid grid-cols-5 gap-2">
            <button
              v-for="(q, idx) in quizInfo.questions"
              :key="q.id"
              @click="jumpToQuestion(idx)"
              class="w-10 h-10 rounded-lg font-bold flex items-center justify-center transition-all border-2"
              :class="[
                currentQuestionIndex === idx ? 'ring-2 ring-offset-2 ring-[#005b9f]' : '',
                answers[q.id]
                  ? 'bg-[#005b9f] text-white border-[#005b9f]'
                  : 'bg-white text-base-content/70 border-base-200 hover:border-base-300',
              ]"
            >
              {{ idx + 1 }}
            </button>
          </div>
        </div>

        <div class="mt-auto p-4 border-t border-base-200 bg-base-50 text-center shrink-0">
          <button @click="submitQuiz" class="btn btn-sm btn-outline btn-error w-full rounded-xl">
            Akhiri Kuis
          </button>
        </div>
      </div>
    </div>

    <div v-else class="max-w-3xl mx-auto w-full mt-10">
      <div class="bg-white rounded-3xl p-8 md:p-12 border border-base-200 shadow-xl text-center">
        <div class="relative w-24 h-24 mx-auto mb-6">
          <div class="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-50"></div>
          <div
            class="relative w-full h-full bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h2 class="text-3xl font-bold mb-2">Kerja Bagus!</h2>
        <p class="text-base-content/60 mb-8">
          Anda telah menyelesaikan
          <span class="font-semibold text-base-content">{{ quizInfo.title }}</span>
        </p>

        <div class="bg-base-50 rounded-2xl p-8 border border-base-200 mb-8 max-w-sm mx-auto">
          <p class="text-sm text-base-content/60 font-bold uppercase tracking-widest mb-2">
            Skor Akhir Anda
          </p>
          <div class="text-6xl font-black text-green-500 mb-2">100</div>
          <p
            class="text-sm font-semibold text-green-600 bg-green-100 inline-block px-3 py-1 rounded-full"
          >
            LULUS
          </p>
        </div>

        <div class="flex gap-3 justify-center">
          <router-link
            to="/dashboard/assignments"
            class="btn btn-outline border-base-300 rounded-xl px-8"
            >Kembali ke Daftar</router-link
          >
          <router-link
            to="/dashboard/courses"
            class="btn bg-[#005b9f] text-white hover:bg-[#004780] border-none rounded-xl px-8"
            >Lihat Course</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>
