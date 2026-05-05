<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isSidebarOpen = ref(false)

const menuItems = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
  },
  {
    name: 'My Courses',
    path: '/dashboard/courses',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    name: 'Quiz & Tugas',
    path: '/dashboard/assignments',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    name: 'Sertifikat',
    path: '/dashboard/certificates',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
  },
  {
    name: 'Profile',
    path: '/dashboard/profile',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  },
]

const pageTitle = computed(() => {
  const currentMenu = menuItems.find((item) => item.path === route.path)
  return currentMenu ? currentMenu.name : 'Dashboard'
})
</script>

<template>
  <div class="drawer lg:drawer-open bg-base-200 min-h-screen font-sans">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" v-model="isSidebarOpen" />
    <div class="drawer-content flex flex-col">
      <header
        class="w-full h-[68px] bg-white border-b border-base-200 sticky top-0 z-30 flex items-center justify-between px-4 lg:px-8 gap-4 shrink-0"
      >
        <div class="flex items-center gap-3 lg:hidden">
          <label for="my-drawer-2" class="btn btn-square btn-ghost btn-sm text-base-content/70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <span class="font-bold text-xl text-[#005b9f]">JM LiNX</span>
        </div>

        <div class="hidden lg:flex items-center gap-8 flex-1">
          <h1 class="text-2xl font-bold text-base-content capitalize whitespace-nowrap">
            {{ pageTitle }}
          </h1>
          <div class="form-control w-full max-w-md relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-base-content/40 group-focus-within:text-[#005b9f] transition-colors"
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
              placeholder="Cari materi, sertifikat..."
              class="input input-sm h-10 bg-base-100 border-base-200 w-full pl-11 pr-4 rounded-full focus:outline-none focus:border-[#005b9f] focus:bg-white focus:ring-4 focus:ring-[#005b9f]/10 transition-all text-sm"
            />
          </div>
        </div>

        <div class="flex items-center gap-2 lg:gap-4 shrink-0">
          <button
            class="btn btn-ghost btn-circle text-base-content/70 hover:text-[#005b9f] hover:bg-[#005b9f]/5 transition-colors"
          >
            <div class="indicator">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span class="badge badge-xs badge-error indicator-item border-white"></span>
            </div>
          </button>

          <div class="h-6 w-[1px] bg-base-200 hidden sm:block"></div>

          <div class="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost rounded-full px-1.5 py-1 flex items-center gap-3 hover:bg-base-200/50 h-auto min-h-0 border border-transparent hover:border-base-200"
            >
              <div class="hidden md:flex flex-col items-end">
                <span class="text-sm font-semibold text-base-content leading-none">Ariel Noah</span>
                <span class="text-xs text-base-content/60 mt-1">Staff IT</span>
              </div>
              <div class="avatar">
                <div
                  class="w-9 h-9 rounded-full bg-[#005b9f] text-white flex items-center justify-center font-bold overflow-hidden ring-2 ring-base-200 ring-offset-1"
                >
                  <img
                    src="https://ui-avatars.com/api/?name=Ariel+Noah&background=005b9f&color=fff&bold=true"
                    alt="User Avatar"
                  />
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-base-content/50 hidden sm:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-2xl w-56 border border-base-200"
            >
              <div class="px-4 py-3 mb-2 border-b border-base-200 md:hidden">
                <p class="text-sm font-semibold text-base-content">Insan Jasa Marga</p>
                <p class="text-xs text-base-content/60">Learner</p>
              </div>
              <li
                class="menu-title px-4 py-1 text-[#005b9f] opacity-70 text-xs tracking-wider font-semibold"
              >
                PENGATURAN
              </li>
              <li>
                <router-link
                  to="/dashboard/profile"
                  class="py-2.5 rounded-xl hover:bg-[#005b9f]/5 hover:text-[#005b9f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 opacity-70"
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
                  Profile Lengkap
                </router-link>
              </li>
              <li>
                <a class="py-2.5 rounded-xl hover:bg-[#005b9f]/5 hover:text-[#005b9f]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 opacity-70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Pengaturan Akun
                </a>
              </li>
              <div class="divider my-1 h-[1px]"></div>
              <li>
                <router-link
                  to="/"
                  class="text-error py-2.5 rounded-xl hover:bg-error/10 hover:text-error"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 opacity-70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Keluar
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <router-view />
      </main>
    </div>

    <div class="drawer-side z-40">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="w-72 min-h-full bg-base-100 border-r border-base-200 flex flex-col">
        <div
          class="h-[68px] flex items-center justify-center border-b border-base-200 px-6 shrink-0 bg-white"
        >
          <img
            src="https://www.jmtransjawatol.co.id/_nuxt/img/site-logo.157c35a.png"
            class="h-10 w-auto object-contain"
            alt="JM LiNX Logo"
          />
        </div>

        <ul class="menu p-4 text-base-content flex-1 gap-1.5">
          <li v-for="item in menuItems" :key="item.path">
            <router-link
              :to="item.path"
              class="rounded-xl py-3 px-4 font-medium transition-colors"
              :class="{
                'bg-[#005b9f]/10 text-[#005b9f]': route.path === item.path,
                'hover:bg-base-200 text-base-content/80': route.path !== item.path,
              }"
              @click="isSidebarOpen = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="item.icon"
                />
              </svg>
              {{ item.name }}
            </router-link>
          </li>
        </ul>

        <div class="p-5 border-t border-base-200 bg-base-50 shrink-0">
          <div
            class="bg-gradient-to-br from-[#005b9f]/10 to-transparent rounded-2xl p-4 text-center border border-[#005b9f]/20"
          >
            <p class="text-xs text-base-content/70 font-semibold mb-2">Butuh Bantuan Teknis?</p>
            <button
              class="btn btn-sm w-full rounded-full bg-white border border-base-300 text-[#005b9f] hover:border-[#005b9f] hover:bg-base-100 shadow-sm"
            >
              Hubungi Support
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
