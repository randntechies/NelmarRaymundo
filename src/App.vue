<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'

const email = 'randntechies@gmail.com'
const baseUrl = import.meta.env.BASE_URL
const profilePhotoPath = `${baseUrl}Nelmar.png`
const logoPath = `${baseUrl}logo.png`

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isProfilePhotoAvailable = ref(true)
const selectedProject = ref(null)

const navItems = [
  { label: 'Profile', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Approach', href: '#approach' },
]

const expertise = [
  {
    number: '01',
    title: 'Full-stack web systems',
    copy: 'I design and deliver role-aware Laravel and Vue applications that bring real workflows, data, permissions, and responsive interfaces into one dependable product.',
    icon: 'layers',
  },
  {
    number: '02',
    title: 'Mobile app development',
    copy: 'I also build mobile experiences with Flutter, applying the same focus on clear flows, maintainable structure, and practical user value across devices.',
    icon: 'mobile',
  },
  {
    number: '03',
    title: 'AI-assisted delivery',
    copy: 'I use AI as a delivery accelerator for research, prototyping, implementation support, documentation, testing ideas, and iteration—while architecture, security, and final review remain human-owned.',
    icon: 'sparkle',
  },
]

const skills = [
  {
    label: 'Web Development',
    items: ['Laravel', 'PHP', 'Vue 3', 'Inertia.js', 'Tailwind CSS', 'MySQL'],
  },
  {
    label: 'Mobile Development',
    items: ['Flutter', 'Dart', 'Cross-platform apps', 'Responsive design'],
  },
  {
    label: 'Building Better Systems',
    items: [
      'User roles and permissions',
      'User flow planning',
      'Form and data validation',
      'Database design',
      'Easy-to-use interface design',
    ],
  },
  {
    label: 'How I Use AI',
    items: [
      'Prototype ideas faster',
      'Code and documentation support',
      'Improve and refactor code',
      'Plan testing',
      'Final work reviewed by me',
    ],
  },
]

const ualcOne = {
  eyebrow: 'Public launch / flagship product',
  title: 'UALC-ONE',
  shortTitle: 'UALC-ONE',
  summary:
    'A unified campus platform that brings student services, academic workflows, attendance, assessment, governance, and operational tools into one role-aware environment.',
  stack: ['Laravel', 'Vue 3', 'Inertia', 'Tailwind CSS', 'MySQL'],
  role: 'Full-stack developer · Product and UX lead',
  challenge:
    'Campus operations can become fragmented across forms, spreadsheets, message threads, and disconnected tools. The product objective was to create one operating environment without flattening the responsibilities, controls, and privacy needs of each role.',
  response:
    'UALC-ONE is structured as a modular, role-aware platform with task-focused workspaces, controlled access, responsive student experiences, and backend workflows designed to remain maintainable as institutional needs evolve.',
  delivery: [
    'Student services and current-term registration workflows',
    'Attendance, class records, assessments, and quiz operations',
    'Student governance, elections, penalties, and settlement tracking',
    'Mobile-first student experiences with focused navigation and feedback',
  ],
  principles: ['Role-aware by default', 'Operational clarity over visual noise', 'Mobile-ready service delivery'],
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 16
}

function scrollTo(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
  closeMenu()
}

function openProject() {
  selectedProject.value = ualcOne
  closeMenu()
}

function closeProject() {
  selectedProject.value = null
}

function handleKeydown(event) {
  if (event.key === 'Escape') closeProject()
}

watch(selectedProject, (project) => {
  document.body.style.overflow = project ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <main class="overflow-hidden bg-slate-950 text-slate-100">
    <header
      class="fixed inset-x-0 top-0 z-50 transition duration-300"
      :class="isScrolled ? 'border-b border-white/10 bg-slate-950/90 backdrop-blur-xl' : 'bg-transparent'"
    >
      <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#top" class="group inline-flex items-center gap-3" aria-label="Nelmar A. Raymundo home" @click="closeMenu">
          <img
            :src="logoPath"
            alt="NR logo"
            class="h-11 w-11 shrink-0 object-contain drop-shadow-lg drop-shadow-cyan-950/30"
          />
          <span class="leading-tight">
            <span class="block text-sm font-bold tracking-tight text-white">Nelmar A. Raymundo</span>
            <span class="block text-xs text-slate-400">Web & Mobile Developer</span>
          </span>
        </a>

        <nav class="hidden items-center gap-7 xl:flex" aria-label="Primary navigation">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            {{ item.label }}
          </a>
          <a href="#contact" class="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100">
            Let’s connect
          </a>
        </nav>

        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white xl:hidden"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg v-if="!isMenuOpen" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
          </svg>
          <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m6 6 12 12M18 6 6 18" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div v-if="isMenuOpen" class="border-t border-white/10 bg-slate-950 px-5 pb-6 pt-4 xl:hidden">
        <nav class="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/5"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
          <a href="#contact" class="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-slate-950" @click="closeMenu">Let’s connect</a>
        </nav>
      </div>
    </header>

    <section id="top" class="relative isolate overflow-hidden">
      <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div class="absolute -left-20 top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl sm:h-96 sm:w-96"></div>
        <div class="absolute right-0 top-16 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl sm:h-[30rem] sm:w-[30rem]"></div>
        <div class="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl"></div>
        <div class="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(148,163,184,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.11)_1px,transparent_1px)] [background-size:42px_42px]"></div>
      </div>

      <div class="mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[1.02fr_.98fr] lg:gap-12 lg:px-10 lg:pb-20">
        <div class="max-w-2xl py-4 lg:py-12">
          <div class="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100">
            <span class="h-2 w-2 rounded-full bg-cyan-300"></span>
            Web & Mobile Developer
          </div>
          <p class="mt-7 text-lg font-bold text-white sm:text-2xl">Hi, I’m Nelmar A. Raymundo!</p>
          <h1 class="mt-3 max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Web &amp; <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">Mobile</span> Developer.
          </h1>
          <p class="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            I’m a Web and Mobile Developer who enjoys turning ideas into clear, practical digital experiences. I work with <span class="font-semibold text-white">Laravel, Vue, and Flutter</span>, and I use <span class="font-semibold text-white">AI</span> thoughtfully to support my development workflow. I aim to keep learning, contribute to meaningful work, and build technology that makes everyday tasks easier for people.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100" @click="scrollTo('#projects')">
              View Projects
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </button>
            <a :href="`mailto:${email}`" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              Hire me
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z" rx="2" /><path d="m4 6 8 6 8-6" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </a>
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-3 text-xs text-slate-400 sm:text-sm">
            <span class="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 font-semibold text-slate-200">Laravel + Vue</span>
            <span class="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 font-semibold text-slate-200">Flutter</span>
            <span class="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 font-semibold text-slate-200">AI-assisted workflow</span>
          </div>

          <div class="mt-8 flex items-center gap-3">
            <a :href="`mailto:${email}`" aria-label="Email Nelmar" class="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:text-white">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z" rx="2" /><path d="m4 6 8 6 8-6" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </a>
            <a href="#expertise" aria-label="Go to expertise" class="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:text-white">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14" stroke-linecap="round" /></svg>
            </a>
            <a href="#contact" aria-label="Go to contact" class="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:text-white">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </a>
          </div>
        </div>

        <div class="relative flex min-h-[27rem] items-end justify-center self-end overflow-visible sm:min-h-[35rem] lg:min-h-[46rem]">
          <div class="pointer-events-none absolute inset-x-8 bottom-0 h-3/4 rounded-[50%] bg-gradient-to-t from-cyan-400/10 via-violet-400/10 to-transparent blur-2xl"></div>
          <div class="pointer-events-none absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"></div>
          <img
            v-if="isProfilePhotoAvailable"
            :src="profilePhotoPath"
            alt="Portrait of Nelmar A. Raymundo"
            class="relative z-10 h-[27rem] w-auto max-w-none object-contain sm:h-[35rem] lg:h-[46rem]"
            @error="isProfilePhotoAvailable = false"
          />
          <div v-else class="relative z-10 grid h-full w-full place-items-center p-6 text-center text-slate-300">
            <div>
              <span class="mx-auto grid h-24 w-24 place-items-center rounded-[2rem] border border-white/15 bg-slate-950/45 text-3xl font-black text-cyan-200 shadow-2xl">MR</span>
              <p class="mt-5 text-sm font-bold text-white">Profile photo unavailable</p>
              <p class="mt-2 text-xs uppercase tracking-[0.16em] text-slate-400">Add Nelmar.png to the public folder</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="border-y border-white/10 bg-white/[0.03]">
      <div class="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-10 lg:py-28">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Professional profile</p>
          <h2 class="mt-4 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl">Practical engineering, grounded in the user.</h2>
        </div>
        <div class="max-w-3xl">
          <p class="text-lg leading-8 text-slate-300">My work sits at the intersection of software delivery, education, and service design. I help turn fragmented processes into coherent systems that are simpler to use, easier to operate, and ready to evolve.</p>
          <p class="mt-5 text-base leading-8 text-slate-400">I care about more than the interface. Strong products need accountable role boundaries, intentional data structures, understandable task flows, responsive layouts, and feedback that makes the next step obvious.</p>
          <div class="mt-8 grid gap-3 sm:grid-cols-3">
            <div class="rounded-2xl border border-white/10 bg-slate-900/70 p-4"><p class="text-xs font-bold uppercase tracking-wider text-slate-500">I build</p><p class="mt-2 text-sm font-bold text-white">Web and mobile products with operational depth</p></div>
            <div class="rounded-2xl border border-white/10 bg-slate-900/70 p-4"><p class="text-xs font-bold uppercase tracking-wider text-slate-500">I teach</p><p class="mt-2 text-sm font-bold text-white">Technical concepts through application</p></div>
            <div class="rounded-2xl border border-white/10 bg-slate-900/70 p-4"><p class="text-xs font-bold uppercase tracking-wider text-slate-500">I use AI</p><p class="mt-2 text-sm font-bold text-white">To accelerate delivery, not replace judgment</p></div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="border-y border-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
      <div class="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.08fr] lg:items-center lg:gap-16 lg:px-10 lg:py-28">
        <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-5 shadow-2xl shadow-slate-950/30 sm:p-7">
          <div class="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl"></div>
          <div class="relative">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3"><span class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-sky-400 text-xs font-black text-slate-950">U1</span><div><p class="text-sm font-bold text-white">UALC-ONE</p><p class="text-xs text-slate-500">Unified campus platform</p></div></div>
              <span class="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[10px] font-bold text-cyan-100">FEATURED PROJECT</span>
            </div>
            <div class="mt-7 grid gap-4 sm:grid-cols-[.66fr_1.34fr]">
              <aside class="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <p class="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Workspaces</p>
                <div class="mt-4 space-y-2">
                  <div class="rounded-lg bg-cyan-300/15 px-3 py-2 text-[11px] font-semibold text-cyan-100">Student services</div>
                  <div class="rounded-lg px-3 py-2 text-[11px] text-slate-400">Academic life</div>
                  <div class="rounded-lg px-3 py-2 text-[11px] text-slate-400">Assessment center</div>
                  <div class="rounded-lg px-3 py-2 text-[11px] text-slate-400">Governance</div>
                  <div class="rounded-lg px-3 py-2 text-[11px] text-slate-400">Operations</div>
                </div>
              </aside>
              <div class="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-4 sm:p-5">
                <div class="flex items-start justify-between gap-3"><div><p class="text-xs font-semibold text-cyan-300">Student portal</p><h3 class="mt-1 text-xl font-black text-white">Essential services, in context.</h3></div><span class="h-8 w-8 rounded-full bg-white/10"></span></div>
                <div class="mt-5 grid grid-cols-2 gap-3"><div class="rounded-xl border border-white/10 bg-white/[0.06] p-3"><div class="h-2 w-2/3 rounded-full bg-white/70"></div><div class="mt-3 h-12 rounded-lg bg-cyan-300/10"></div></div><div class="rounded-xl border border-white/10 bg-white/[0.06] p-3"><div class="h-2 w-1/2 rounded-full bg-white/70"></div><div class="mt-3 h-12 rounded-lg bg-violet-400/10"></div></div></div>
                <div class="mt-3 rounded-xl border border-white/10 bg-slate-950/40 p-3"><div class="flex items-center justify-between"><span class="text-[10px] font-bold text-slate-300">Service progress</span><span class="text-[10px] font-bold text-cyan-300">Clear next actions</span></div><div class="mt-3 h-2 rounded-full bg-white/10"><div class="h-2 w-[78%] rounded-full bg-gradient-to-r from-cyan-300 to-sky-400"></div></div></div>
              </div>
            </div>
            <div class="mt-4 grid grid-cols-3 gap-3"><div class="rounded-xl border border-white/10 bg-white/[0.04] p-3"><p class="text-[10px] text-slate-500">Design principle</p><p class="mt-1 text-xs font-bold text-white">Role-aware</p></div><div class="rounded-xl border border-white/10 bg-white/[0.04] p-3"><p class="text-[10px] text-slate-500">Experience</p><p class="mt-1 text-xs font-bold text-white">Mobile-ready</p></div><div class="rounded-xl border border-white/10 bg-white/[0.04] p-3"><p class="text-[10px] text-slate-500">Architecture</p><p class="mt-1 text-xs font-bold text-white">Modular</p></div></div>
          </div>
        </div>

        <div>
          <p class="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Selected work</p>
          <h2 class="mt-4 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl">Projects</h2>
          <p class="mt-5 text-base leading-8 text-slate-300">A growing collection of web and mobile work focused on practical, user-centered digital experiences. UALC-ONE is the first public project in this portfolio.</p>
          <div class="mt-7 grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><p class="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Role</p><p class="mt-3 text-sm font-bold leading-6 text-white">{{ ualcOne.role }}</p></div>
            <div class="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><p class="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Design objective</p><p class="mt-3 text-sm font-bold leading-6 text-white">One operating environment, without flattening role boundaries.</p></div>
          </div>
          <ul class="mt-7 space-y-3">
            <li v-for="item in ualcOne.delivery.slice(0, 3)" :key="item" class="flex gap-3 text-sm leading-6 text-slate-300"><span class="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-300/10 text-xs text-cyan-300">✓</span><span>{{ item }}</span></li>
          </ul>
          <button type="button" class="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 transition hover:text-white" @click="openProject">
            View project details
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </button>
        </div>
      </div>
    </section>

    <section id="expertise" class="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div class="max-w-2xl">
        <p class="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">What I bring</p>
        <h2 class="mt-4 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl">Product delivery across web, mobile, and AI-enabled workflows.</h2>
        <p class="mt-5 text-base leading-8 text-slate-400">The outcome is not a screen that merely looks complete. It is a product that gives the right person the right next step at the right time.</p>
      </div>

      <div class="mt-12 grid gap-5 md:grid-cols-3">
        <article v-for="item in expertise" :key="item.number" class="group rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900">
          <div class="flex items-center justify-between">
            <span class="text-sm font-black text-cyan-300">{{ item.number }}</span>
            <span class="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-cyan-200">
              <svg v-if="item.icon === 'layers'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 8 4.5L12 12 4 7.5 12 3Z"/><path d="m4 12 8 4.5 8-4.5"/><path d="m4 16.5 8 4.5 8-4.5"/></svg>
              <svg v-else-if="item.icon === 'mobile'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M10 6h4M11 18h2" stroke-linecap="round"/></svg>
              <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3Z"/><path d="m19 15 .8 3.2L23 19l-3.2.8L19 23l-.8-3.2L15 19l3.2-.8L19 15Z"/></svg>
            </span>
          </div>
          <h3 class="mt-10 text-2xl font-black tracking-tight text-white">{{ item.title }}</h3>
          <p class="mt-4 text-sm leading-7 text-slate-400">{{ item.copy }}</p>
        </article>
      </div>
    </section>

    <section id="teaching" class="border-y border-white/10 bg-white/[0.03]">
      <div class="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-10 lg:py-28">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">How I teach</p>
          <h2 class="mt-4 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl">Helping students learn by building real solutions.</h2>
          <p class="mt-6 max-w-xl text-base leading-8 text-slate-400">As an instructor, I guide students from understanding a problem to creating a working system. We focus on programming, design, mobile development, and improving their work step by step.</p>
          <div class="mt-8 rounded-3xl border border-amber-300/15 bg-amber-300/[0.05] p-6">
            <p class="text-sm leading-7 text-slate-300"><span class="font-bold text-amber-200">Student project privacy:</span> Student capstone projects are not shown here to protect their work, ownership, and project details.</p>
          </div>
          <a :href="`mailto:${email}?subject=Teaching%20or%20technical%20collaboration`" class="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 transition hover:text-white">
            Discuss teaching or technical collaboration
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </a>
        </div>
        <div class="grid gap-4">
          <article class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:p-7"><p class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">01 / Understand</p><h3 class="mt-4 text-2xl font-black tracking-tight text-white">Understand the problem first.</h3><p class="mt-3 text-sm leading-7 text-slate-400">Before coding, students identify who will use the system, what they need, and what the solution should do.</p></article>
          <article class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:p-7"><p class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">02 / Build</p><h3 class="mt-4 text-2xl font-black tracking-tight text-white">Turn ideas into a working system.</h3><p class="mt-3 text-sm leading-7 text-slate-400">Students plan the pages and features, then use code to create a solution that people can actually use.</p></article>
          <article class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:p-7"><p class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">03 / Improve</p><h3 class="mt-4 text-2xl font-black tracking-tight text-white">Test, fix, and improve.</h3><p class="mt-3 text-sm leading-7 text-slate-400">Students check if the system works, fix problems, gather feedback, and make the experience better.</p></article>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div class="max-w-2xl">
        <p class="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Tools I use</p>
        <h2 class="mt-4 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl">Technologies I use to build web and mobile apps.</h2>
        <p class="mt-5 text-base leading-8 text-slate-400">I use these tools to create reliable, easy-to-use, and practical digital experiences.</p>
      </div>
      <div class="mt-12 grid gap-4 sm:grid-cols-2">
        <article v-for="group in skills" :key="group.label" class="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <p class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">{{ group.label }}</p>
          <div class="mt-5 flex flex-wrap gap-2"><span v-for="item in group.items" :key="item" class="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-300">{{ item }}</span></div>
        </article>
      </div>
    </section>

    <section id="approach" class="border-y border-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
      <div class="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div class="max-w-2xl"><p class="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">How I work</p><h2 class="mt-4 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl">From idea to a working app.</h2></div>
        <div class="mt-12 grid gap-4 md:grid-cols-4">
          <article v-for="step in [
            { number: '01', title: 'Understand the need', copy: 'I listen to the problem, identify the users, and clarify what the system needs to do.' },
            { number: '02', title: 'Plan the experience', copy: 'I organize the pages, features, and user flow so the system is easy to understand and use.' },
            { number: '03', title: 'Build the system', copy: 'I develop the frontend, backend, database, and features needed to make the solution work.' },
            { number: '04', title: 'Test and improve', copy: 'I review the result, fix issues, gather feedback, and improve the experience over time.' },
          ]" :key="step.number" class="rounded-3xl border border-white/10 bg-white/[0.035] p-7">
            <p class="text-sm font-black text-cyan-300">{{ step.number }}</p>
            <h3 class="mt-9 text-xl font-black tracking-tight text-white">{{ step.title }}</h3>
            <p class="mt-4 text-sm leading-7 text-slate-400">{{ step.copy }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="relative overflow-hidden">
      <div class="pointer-events-none absolute inset-0 -z-10"><div class="absolute bottom-0 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl"></div></div>
      <div class="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <p class="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Contact</p>
        <h2 class="mx-auto mt-4 max-w-4xl text-4xl font-black tracking-[-0.05em] text-white sm:text-6xl">Let’s turn a meaningful problem into a working product.</h2>
        <p class="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">Open to campus technology initiatives, full-stack product work, Flutter mobile development, UI/UX improvement, and practical technical collaboration.</p>
        <div class="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a :href="`mailto:${email}`" class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"><span>{{ email }}</span><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg></a>
          <button type="button" class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10" @click="scrollTo('#top')">Back to top</button>
        </div>
        <p class="mt-6 text-xs text-slate-500">Public portfolio content is intentionally limited to approved product information and non-sensitive visuals.</p>
      </div>
    </section>

    <footer class="border-t border-white/10 px-5 py-7 sm:px-8 lg:px-10">
      <div class="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {{ new Date().getFullYear() }} Nelmar A. Raymundo. Built with Vue and Tailwind CSS.</p><p>Designed for clarity, built for impact.</p></div>
    </footer>

    <Teleport to="body">
      <div v-if="selectedProject" class="fixed inset-0 z-[100] flex items-end bg-slate-950/80 p-0 backdrop-blur-sm sm:items-center sm:justify-center sm:p-5" role="dialog" aria-modal="true" :aria-label="`${selectedProject.title} case study`" @click.self="closeProject">
        <div class="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/50 sm:rounded-[2rem]">
          <div class="sticky top-0 z-10 flex items-start justify-between gap-5 border-b border-white/10 bg-slate-900/95 px-5 py-5 backdrop-blur sm:px-8">
            <div><p class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">{{ selectedProject.eyebrow }}</p><h2 class="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">{{ selectedProject.title }}</h2></div>
            <button type="button" class="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label="Close case study" @click="closeProject">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 6 12 12M18 6 6 18" stroke-linecap="round"/></svg>
            </button>
          </div>
          <div class="p-5 sm:p-8">
            <div class="flex flex-wrap gap-2"><span v-for="item in selectedProject.stack" :key="item" class="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300">{{ item }}</span></div>
            <div class="mt-8 grid gap-6 lg:grid-cols-2">
              <section class="rounded-2xl border border-white/10 bg-slate-950/45 p-5"><p class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">The brief</p><p class="mt-4 text-sm leading-7 text-slate-300">{{ selectedProject.challenge }}</p></section>
              <section class="rounded-2xl border border-white/10 bg-slate-950/45 p-5"><p class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">The response</p><p class="mt-4 text-sm leading-7 text-slate-300">{{ selectedProject.response }}</p></section>
            </div>
            <div class="mt-8 grid gap-6 lg:grid-cols-[.78fr_1.22fr]">
              <section><p class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">Role</p><p class="mt-3 text-lg font-black leading-7 text-white">{{ selectedProject.role }}</p><p class="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Operating principles</p><div class="mt-3 flex flex-wrap gap-2"><span v-for="item in selectedProject.principles" :key="item" class="rounded-full bg-cyan-300/10 px-3 py-1.5 text-xs font-bold text-cyan-100">{{ item }}</span></div></section>
              <section><p class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">Key delivery areas</p><ul class="mt-4 space-y-3"><li v-for="item in selectedProject.delivery" :key="item" class="flex gap-3 text-sm leading-6 text-slate-300"><span class="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-300/10 text-xs text-cyan-300">✓</span><span>{{ item }}</span></li></ul></section>
            </div>
            <div class="mt-9 rounded-2xl border border-amber-300/15 bg-amber-300/[0.05] p-4 text-sm leading-6 text-slate-300"><span class="font-bold text-amber-200">Portfolio note:</span> This case study describes approved product scope and design decisions. It intentionally excludes confidential student, institutional, and operational data.</div>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a :href="`mailto:${email}?subject=${encodeURIComponent(`Portfolio inquiry: ${selectedProject.shortTitle}`)}`" class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-cyan-100">Discuss this type of project<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg></a>
              <button type="button" class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10" @click="closeProject">Close case study</button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </main>
</template>
