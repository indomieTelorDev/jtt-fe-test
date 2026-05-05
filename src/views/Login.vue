<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const npp = ref('')
const password = ref('')
const isLoading = ref(false)

const handleLogin = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    router.push('/dashboard')
  }, 1000)
}
</script>

<template>
  <div class="min-h-screen flex flex-col md:flex-row bg-base-200 font-sans">
    <div
      class="hidden md:flex flex-1 relative bg-[#005b9f] overflow-hidden items-center justify-center"
    >
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
          alt="Jalan Tol PT Jasa Marga"
          class="w-full h-full object-cover opacity-30 mix-blend-multiply"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-[#005b9f]/80 to-[#003865]/90"></div>
      </div>

      <div class="relative z-10 p-12 text-white max-w-2xl">
        <div class="mb-10">
          <div class="bg-white inline-block px-5 py-3 rounded-2xl shadow-lg">
            <img
              src="https://www.jmtransjawatol.co.id/_nuxt/img/site-logo.157c35a.png"
              alt="Logo PT Jasamarga Transjawa Tol"
              class="h-12 w-auto object-contain"
            />
          </div>
        </div>

        <h2 class="text-4xl lg:text-5xl font-extrabold mb-2 leading-tight">
          Aplikasi JM <span class="text-[#ffc600]">LiNX</span>
        </h2>
        <h3 class="text-xl lg:text-2xl font-bold text-white mb-6">
          (Jasa Marga Learning and Experience)
        </h3>
        <p class="text-lg text-blue-100 mb-8 max-w-lg leading-relaxed">
          Platform pembelajaran terintegrasi untuk meningkatkan kompetensi dan pengembangan karir
          Insan Jasa Marga.
        </p>

        <div class="flex items-center gap-6 text-sm font-medium">
          <div
            class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-[#ffc600]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            Tumbuh
          </div>
          <div
            class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-[#ffc600]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            Tangguh
          </div>
          <div
            class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-[#ffc600]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            Terpercaya
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full md:w-1/2 lg:w-[500px] bg-base-100 flex flex-col justify-center px-8 py-12 lg:px-14 relative shadow-2xl z-20"
    >
      <div class="absolute top-0 left-0 right-0 h-1.5 flex">
        <div class="flex-[3] bg-[#005b9f]"></div>
        <div class="flex-1 bg-[#ffc600]"></div>
      </div>

      <div class="md:hidden flex justify-center mb-10">
        <img
          src="https://www.jmtransjawatol.co.id/_nuxt/img/site-logo.157c35a.png"
          alt="Logo PT Jasamarga Transjawa Tol"
          class="h-12 w-auto object-contain"
        />
      </div>

      <div class="mb-10">
        <h2 class="text-3xl font-extrabold text-base-content mb-2 tracking-tight">
          Selamat Datang di JM LiNX
        </h2>
        <p class="text-base-content/60 text-lg">Silakan masuk menggunakan akun Anda.</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div class="form-control">
          <label class="label">
            <span class="label-text font-semibold text-base-content/80"
              >Nomor Pokok Pegawai (NPP)</span
            >
          </label>
          <div class="relative group">
            <div
              class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors group-focus-within:text-[#005b9f] text-base-content/40 z-10"
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <input
              v-model="npp"
              type="text"
              placeholder="Masukkan NPP Anda"
              class="input input-bordered input-lg w-full pl-11 text-base focus:border-[#005b9f] focus:ring-2 focus:ring-[#005b9f]/20 transition-all bg-base-100"
              required
            />
          </div>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text font-semibold text-base-content/80">Kata Sandi</span>
          </label>
          <div class="relative group">
            <div
              class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors group-focus-within:text-[#005b9f] text-base-content/40 z-10"
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <input
              v-model="password"
              type="password"
              placeholder="••••••••"
              class="input input-bordered input-lg w-full pl-11 text-base focus:border-[#005b9f] focus:ring-2 focus:ring-[#005b9f]/20 transition-all bg-base-100"
              required
            />
          </div>
        </div>

        <div class="flex items-center justify-between pt-2">
          <label class="label cursor-pointer gap-3 justify-start p-0 group">
            <input
              type="checkbox"
              class="checkbox checkbox-sm border-base-content/30 group-hover:border-[#005b9f]"
              style="--chkbg: #005b9f; --chkfg: white"
            />
            <span
              class="label-text font-medium text-base-content/80 group-hover:text-base-content transition-colors"
              >Ingat saya</span
            >
          </label>
          <a
            href="#"
            class="text-sm font-bold text-[#005b9f] hover:text-[#ffc600] transition-colors"
            >Lupa Kata Sandi?</a
          >
        </div>

        <button
          type="submit"
          class="btn btn-lg w-full text-white border-none shadow-lg shadow-[#005b9f]/20 mt-4"
          :class="
            isLoading ? 'bg-[#004a84]' : 'bg-[#005b9f] hover:bg-[#004a84] hover:-translate-y-0.5'
          "
          :disabled="isLoading"
        >
          <span v-if="isLoading" class="loading loading-spinner loading-md"></span>
          <span v-else class="text-base">Masuk Sekarang</span>
        </button>
      </form>

      <div class="mt-14 pt-8 border-t border-base-200 text-center text-sm text-base-content/50">
        <p class="font-medium">&copy; 2026 PT Jasamarga Transjawa Tol</p>
        <p class="mt-1">Divisi Learning Center JTT</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input {
  transition: all 0.3s ease;
}
.btn {
  transition: all 0.3s ease;
}
</style>
