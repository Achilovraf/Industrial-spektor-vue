<script setup>
import { ref, onMounted } from 'vue'
const visible = ref(true)
const out = ref(false)
let gone = false
function hide() {
  if (gone) return; gone = true
  out.value = true
  document.body.classList.remove('lock')
  setTimeout(() => visible.value = false, 800)
}
onMounted(() => {
  document.body.classList.add('lock')
  if (document.readyState === 'complete') setTimeout(hide, 900)
  else window.addEventListener('load', () => setTimeout(hide, 900), { once: true })
  setTimeout(hide, 3000)
})
</script>
<template>
  <div v-if="visible" id="ldr" :class="{ out }">
    <svg width="80" height="80" viewBox="0 0 100 100">
      <circle class="ldr-ring" pathLength="1" cx="50" cy="50" r="40"/>
      <circle class="ldr-ring r2" pathLength="1" cx="50" cy="50" r="27"/>
      <circle cx="50" cy="50" r="5" fill="#E8903A"/>
    </svg>
    <div class="ldr-word">SPEKTOR<span>.</span></div>
  </div>
</template>
