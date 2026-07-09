<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import AppPreloader from './components/AppPreloader.vue'
import AppHeader from './components/AppHeader.vue'
import FullscreenNav from './components/FullscreenNav.vue'
import HeroSection from './components/HeroSection.vue'
import PainsSection from './components/PainsSection.vue'
import SegmentsSection from './components/SegmentsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ApproachSection from './components/ApproachSection.vue'
import CasesSection from './components/CasesSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
import { useReveal } from './composables/useReveal'

const menuOpen = ref(false)
watch(menuOpen, (open) => {
  document.body.classList.toggle('menu-open', open)
  document.body.style.overflow = open ? 'hidden' : ''
})
function onKeydown(e) { if (e.key === 'Escape') menuOpen.value = false }
onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))
useReveal()
</script>

<template>
  <AppPreloader />
  <AppHeader :menu-open="menuOpen" @toggle-menu="menuOpen = !menuOpen" />
  <FullscreenNav :open="menuOpen" @close="menuOpen = false" />
  <main>
    <HeroSection />
    <PainsSection />
    <SegmentsSection />
    <ServicesSection />
    <ApproachSection />
    <CasesSection />
    <AboutSection />
    <ContactSection />
  </main>
  <AppFooter />
</template>
