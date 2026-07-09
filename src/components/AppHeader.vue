<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
defineProps({ menuOpen: Boolean })
defineEmits(['toggle-menu'])
const scrolled = ref(false)
const hidden = ref(false)
let lastY = 0, tick = false
function upd() {
  const y = window.scrollY
  scrolled.value = y > 10
  if (y < 60) hidden.value = false
  else if (y > lastY + 8) hidden.value = true
  else if (y < lastY - 8) hidden.value = false
  lastY = y; tick = false
}
function onScroll() { if (!tick) { requestAnimationFrame(upd); tick = true } }
onMounted(() => { lastY = window.scrollY; window.addEventListener('scroll', onScroll, { passive: true }); upd() })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
<template>
  <header :class="{ scrolled, hide: hidden }">
    <div class="wrap nav">
      <a class="logo" href="#top">SPEKTOR<span>.</span></a>
      <ul class="navlinks">
        <li><a href="#pains">Muammolar</a></li>
        <li><a href="#segments">Kimlar uchun</a></li>
        <li><a href="#services">Xizmatlar</a></li>
        <li><a href="#approach">Yondashuv</a></li>
        <li><a href="#cases">Natijalar</a></li>
      </ul>
      <a class="btn btn-acc" href="#contact" style="display:none" id="hdr-cta">Bog'lanish</a>
      <button class="burger" :class="{ open: menuOpen }" :aria-expanded="menuOpen" aria-label="Menyu" @click="$emit('toggle-menu')">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
    </div>
  </header>
</template>
