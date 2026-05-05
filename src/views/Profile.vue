<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})

const user = ref({
  name: 'Ariel Noah',
  npp: '202100456',
  position: 'Staff IT',
  division: 'Learning Center Jasa Marga Transjawa Tol',
  email: 'ariel.noah@jmtransjawa.co.id',
  phone: '0812-3456-7890',
  location: 'Kantor Pusat JTT, Bekasi',
  bio: 'Berfokus pada pengembangan sistem pembelajaran digital dan inovasi teknologi untuk mendukung kompetensi insan Jasa Marga.',
  stats: [
    {
      label: 'Kursus Selesai',
      value: '12',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      color: 'text-blue-600',
    },
    {
      label: 'Sertifikat Aktif',
      value: '08',
      icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      color: 'text-yellow-600',
    },
    {
      label: 'Poin Kompetensi',
      value: '1.250',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      color: 'text-purple-600',
    },
  ],
})

const activeTab = ref('personal')
const showCurrentPassword = ref(false)
const showNewPassword = ref(false)
</script>

<template>
  <div class="max-w-6xl mx-auto space-y-8 animate-fade-in">
    <div
      class="card bg-white shadow-xl shadow-base-200/50 overflow-hidden rounded-3xl border border-base-200"
    >
      <div class="h-32 bg-gradient-to-r from-[#005b9f] via-[#003865] to-[#005b9f] relative">
        <div
          class="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"
        ></div>
      </div>
      <div class="px-8 pb-8 relative">
        <div class="flex flex-col md:flex-row items-end gap-6 -mt-12 relative z-10">
          <div class="avatar shadow-2xl ring-4 ring-white rounded-full bg-white p-1">
            <div class="w-32 h-32 rounded-full overflow-hidden bg-base-200 relative">
              <template v-if="isLoading">
                <div class="w-full h-full bg-base-200 animate-pulse"></div>
              </template>
              <template v-else>
                <img
                  src="https://ui-avatars.com/api/?name=Ariel+Noah&background=005b9f&color=fff&size=256&bold=true"
                  alt="User"
                />
              </template>
            </div>
          </div>
          <div class="flex-1 pb-2">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div class="flex-1">
                <template v-if="isLoading">
                  <div class="h-8 bg-base-200 rounded w-48 mb-2 animate-pulse"></div>
                  <div class="h-5 bg-base-200 rounded w-32 animate-pulse"></div>
                </template>
                <template v-else>
                  <h1 class="text-3xl font-extrabold text-base-content tracking-tight">
                    {{ user.name }}
                  </h1>
                  <p class="text-lg font-medium text-base-content/60">{{ user.position }}</p>
                </template>
              </div>
              <div v-if="!isLoading" class="flex gap-2">
                <button
                  class="btn btn-primary bg-[#005b9f] hover:bg-[#003865] border-none text-white rounded-xl shadow-lg shadow-[#005b9f]/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 border-t border-base-100 pt-8">
          <template v-if="isLoading">
            <div v-for="i in 3" :key="i" class="bg-base-50 p-6 rounded-2xl border border-base-200/50 flex items-center gap-4">
              <div class="w-12 h-12 bg-base-200 rounded-xl animate-pulse"></div>
              <div class="flex-1 space-y-2">
                <div class="h-3 bg-base-200 rounded w-1/2 animate-pulse"></div>
                <div class="h-6 bg-base-200 rounded w-1/3 animate-pulse"></div>
              </div>
            </div>
          </template>
          <template v-else>
            <div
              v-for="stat in user.stats"
              :key="stat.label"
              class="bg-base-50 p-6 rounded-2xl border border-base-200/50 hover:border-[#005b9f]/30 transition-all group"
            >
              <div class="flex items-center gap-4">
                <div
                  :class="[
                    'p-3 rounded-xl bg-white shadow-sm transition-transform group-hover:scale-110',
                    stat.color,
                  ]"
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
                      :d="stat.icon"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-bold text-base-content/50 uppercase tracking-wider mb-0.5">
                    {{ stat.label }}
                  </p>
                  <p class="text-2xl font-black text-base-content">{{ stat.value }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-8">
        <div class="card bg-white shadow-xl shadow-base-200/50 rounded-3xl border border-base-200">
          <div class="p-8">
            <div class="flex items-center gap-4 mb-8">
              <div class="tabs tabs-boxed bg-base-100 p-1 rounded-2xl w-full sm:w-auto">
                <button
                  @click="activeTab = 'personal'"
                  :class="[
                    'tab tab-lg flex-1 sm:flex-initial rounded-xl transition-all',
                    activeTab === 'personal'
                      ? 'bg-[#005b9f] text-white'
                      : 'text-base-content/60 hover:text-[#005b9f]',
                  ]"
                >
                  Informasi Personal
                </button>
                <button
                  @click="activeTab = 'security'"
                  :class="[
                    'tab tab-lg flex-1 sm:flex-initial rounded-xl transition-all',
                    activeTab === 'security'
                      ? 'bg-[#005b9f] text-white'
                      : 'text-base-content/60 hover:text-[#005b9f]',
                  ]"
                >
                  Keamanan & Akun
                </button>
              </div>
            </div>

            <div v-if="activeTab === 'personal'" class="space-y-8 animate-slide-up">
              <template v-if="isLoading">
                <div class="space-y-4">
                  <div class="h-6 bg-base-200 rounded w-32 animate-pulse"></div>
                  <div class="h-20 bg-base-50 rounded-2xl border border-dashed border-base-300 animate-pulse"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="space-y-6">
                    <div class="h-6 bg-base-200 rounded w-40 animate-pulse"></div>
                    <div v-for="i in 3" :key="i" class="space-y-2">
                      <div class="h-3 bg-base-200 rounded w-24 animate-pulse"></div>
                      <div class="h-5 bg-base-200 rounded w-48 animate-pulse"></div>
                    </div>
                  </div>
                  <div class="space-y-6">
                    <div class="h-6 bg-base-200 rounded w-40 animate-pulse"></div>
                    <div v-for="i in 2" :key="i" class="space-y-2">
                      <div class="h-3 bg-base-200 rounded w-24 animate-pulse"></div>
                      <div class="h-5 bg-base-200 rounded w-48 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div>
                  <h3 class="text-lg font-bold text-base-content mb-4 flex items-center gap-2">
                    <span class="w-1.5 h-6 bg-[#ffc600] rounded-full"></span>
                    Bio & Deskripsi
                  </h3>
                  <p
                    class="text-base-content/70 leading-relaxed bg-base-50 p-5 rounded-2xl border border-dashed border-base-300 italic"
                  >
                    "{{ user.bio }}"
                  </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="space-y-4">
                    <h3 class="text-lg font-bold text-base-content mb-4 flex items-center gap-2">
                      <span class="w-1.5 h-6 bg-[#005b9f] rounded-full"></span>
                      Informasi Pegawai
                    </h3>
                    <div class="space-y-4">
                      <div class="flex flex-col gap-1">
                        <span class="text-xs font-bold text-base-content/40 uppercase tracking-widest"
                          >Nomor Pokok Pegawai (NPP)</span
                        >
                        <span class="text-base font-semibold text-base-content">{{ user.npp }}</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-xs font-bold text-base-content/40 uppercase tracking-widest"
                          >Divisi</span
                        >
                        <span class="text-base font-semibold text-base-content">{{
                          user.division
                        }}</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-xs font-bold text-base-content/40 uppercase tracking-widest"
                          >Lokasi Kantor</span
                        >
                        <span class="text-base font-semibold text-base-content">{{
                          user.location
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-4">
                    <h3 class="text-lg font-bold text-base-content mb-4 flex items-center gap-2">
                      <span class="w-1.5 h-6 bg-[#005b9f] rounded-full"></span>
                      Kontak & Hubungan
                    </h3>
                    <div class="space-y-4">
                      <div class="flex flex-col gap-1">
                        <span class="text-xs font-bold text-base-content/40 uppercase tracking-widest"
                          >Alamat Email</span
                        >
                        <span class="text-base font-semibold text-base-content">{{
                          user.email
                        }}</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-xs font-bold text-base-content/40 uppercase tracking-widest"
                          >Nomor Telepon</span
                        >
                        <span class="text-base font-semibold text-base-content">{{
                          user.phone
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>

            <div v-if="activeTab === 'security'" class="space-y-8 animate-slide-up">
              <div class="space-y-6 max-w-lg">
                <div>
                  <h3 class="text-xl font-bold text-base-content mb-2 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-[#005b9f]"
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
                    Ganti Kata Sandi
                  </h3>
                  <p class="text-sm text-base-content/60">
                    Disarankan untuk mengganti kata sandi secara berkala demi keamanan akun Anda.
                  </p>
                </div>

                <div class="space-y-4">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text font-bold text-base-content/70"
                        >Kata Sandi Saat Ini</span
                      >
                    </label>
                    <div class="relative">
                      <div
                        class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-base-content/30"
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
                        :type="showCurrentPassword ? 'text' : 'password'"
                        placeholder="Masukkan kata sandi lama"
                        class="input input-bordered w-full pl-11 pr-12 focus:border-[#005b9f] rounded-xl bg-base-50 transition-all"
                      />
                      <button
                        @click="showCurrentPassword = !showCurrentPassword"
                        type="button"
                        class="absolute inset-y-0 right-0 pr-4 flex items-center text-base-content/30 hover:text-[#005b9f] transition-colors"
                      >
                        <svg
                          v-if="!showCurrentPassword"
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
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <svg
                          v-else
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
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div
                    class="divider text-[10px] font-bold uppercase tracking-[0.2em] text-base-content/20 py-2"
                  >
                    Kata Sandi Baru
                  </div>

                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text font-bold text-base-content/70">Kata Sandi Baru</span>
                    </label>
                    <div class="relative">
                      <div
                        class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-base-content/30"
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
                            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                          />
                        </svg>
                      </div>
                      <input
                        :type="showNewPassword ? 'text' : 'password'"
                        placeholder="••••••••"
                        class="input input-bordered w-full pl-11 pr-12 focus:border-[#005b9f] rounded-xl bg-base-50 transition-all"
                      />
                      <button
                        @click="showNewPassword = !showNewPassword"
                        type="button"
                        class="absolute inset-y-0 right-0 pr-4 flex items-center text-base-content/30 hover:text-[#005b9f] transition-colors"
                      >
                        <svg
                          v-if="!showNewPassword"
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
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <svg
                          v-else
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
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                          />
                        </svg>
                      </button>
                    </div>
                    <label class="label">
                      <span class="label-text-alt text-base-content/50 flex items-center gap-1.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Minimal 8 karakter dengan kombinasi angka dan huruf.
                      </span>
                    </label>
                  </div>

                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text font-bold text-base-content/70"
                        >Konfirmasi Kata Sandi Baru</span
                      >
                    </label>
                    <div class="relative">
                      <div
                        class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-base-content/30"
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <input
                        type="password"
                        placeholder="Ulangi kata sandi baru"
                        class="input input-bordered w-full pl-11 focus:border-[#005b9f] rounded-xl bg-base-50 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div class="pt-4">
                  <button
                    class="btn bg-[#005b9f] hover:bg-[#003865] text-white border-none rounded-xl px-10 shadow-lg shadow-[#005b9f]/20 h-12 transition-all active:scale-95"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                      />
                    </svg>
                    Simpan Perubahan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-8">
        <div
          class="card bg-[#005b9f] text-white shadow-xl rounded-3xl overflow-hidden relative border border-[#005b9f]"
        >
          <div class="absolute top-0 right-0 p-8 opacity-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-24 w-24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
          </div>
          <div class="card-body p-8 relative z-10">
            <h3 class="text-xl font-black mb-1">Learning Path</h3>
            <p class="text-blue-100 text-sm mb-6 opacity-80">
              Progress pengembangan kompetensi Anda tahun ini.
            </p>

            <div class="space-y-6">
              <template v-if="isLoading">
                <div v-for="i in 3" :key="i" class="space-y-2">
                  <div class="h-3 bg-white/20 rounded w-24 animate-pulse"></div>
                  <div class="h-2.5 bg-white/20 rounded w-full animate-pulse"></div>
                </div>
              </template>
              <template v-else>
                <div class="space-y-2">
                  <div class="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span>Soft Skills</span>
                    <span>75%</span>
                  </div>
                  <progress
                    class="progress progress-warning w-full h-2.5 shadow-sm"
                    value="75"
                    max="100"
                  ></progress>
                </div>
                <div class="space-y-2">
                  <div class="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span>Technical Skills</span>
                    <span>40%</span>
                  </div>
                  <progress
                    class="progress progress-warning w-full h-2.5 shadow-sm"
                    value="40"
                    max="100"
                  ></progress>
                </div>
                <div class="space-y-2">
                  <div class="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span>Leadership</span>
                    <span>20%</span>
                  </div>
                  <progress
                    class="progress progress-warning w-full h-2.5 shadow-sm"
                    value="20"
                    max="100"
                  ></progress>
                </div>
              </template>
            </div>

            <div v-if="!isLoading" class="mt-8 pt-6 border-t border-white/10">
              <button class="btn btn-sm btn-ghost text-white hover:bg-white/10 w-full rounded-xl">
                Lihat Detail Progress
              </button>
            </div>
          </div>
        </div>

        <div
          class="card bg-white shadow-xl shadow-base-200/50 rounded-3xl border border-base-200 overflow-hidden"
        >
          <div class="p-8">
            <h3 class="text-lg font-bold text-base-content mb-6 flex items-center justify-between">
              <span>Aktivitas Terakhir</span>
              <span v-if="!isLoading" class="text-xs font-bold text-[#005b9f] hover:underline cursor-pointer"
                >Lihat Semua</span
              >
            </h3>
            <div class="space-y-6">
              <template v-if="isLoading">
                <div v-for="i in 3" :key="i" class="flex gap-4">
                  <div class="w-10 h-10 bg-base-200 rounded-xl animate-pulse"></div>
                  <div class="flex-1 space-y-2">
                    <div class="h-4 bg-base-200 rounded w-full animate-pulse"></div>
                    <div class="h-3 bg-base-200 rounded w-1/2 animate-pulse"></div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div
                  v-for="(activity, index) in [
                    {
                      title: 'Menyelesaikan Modul K3 Dasar',
                      time: '2 jam yang lalu',
                      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                      color: 'text-green-500',
                      bg: 'bg-green-50',
                    },
                    {
                      title: 'Mengerjakan Post-Test Excel Advanced',
                      time: 'Kemarin, 14:20',
                      icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
                      color: 'text-yellow-500',
                      bg: 'bg-yellow-50',
                    },
                    {
                      title: 'Pendaftaran Kursus Leadership 101',
                      time: '2 hari yang lalu',
                      icon: 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z',
                      color: 'text-blue-500',
                      bg: 'bg-blue-50',
                    },
                  ]"
                  :key="index"
                  class="flex gap-4 group cursor-pointer"
                >
                  <div
                    :class="[
                      'w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110',
                      activity.bg,
                      activity.color,
                    ]"
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
                        :d="activity.icon"
                      />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p
                      class="text-sm font-bold text-base-content group-hover:text-[#005b9f] transition-colors"
                    >
                      {{ activity.title }}
                    </p>
                    <p class="text-xs text-base-content/50">{{ activity.time }}</p>
                  </div>
                </div>
              </template>
            </div>

            <div v-if="!isLoading" class="mt-8 pt-6 border-t border-base-100">
              <button
                class="btn btn-sm btn-ghost w-full text-xs font-bold text-base-content/40 hover:text-[#005b9f] hover:bg-[#005b9f]/5 rounded-xl"
              >
                Tandai semua sudah dibaca
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}
.animate-slide-up {
  animation: slideUp 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
