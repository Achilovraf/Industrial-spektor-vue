<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const heroR = ref(null)
const hrImg = ref(null)
function onMove(e) {
  const r = heroR.value.getBoundingClientRect()
  const dx = (e.clientX - r.left) / r.width - 0.5
  const dy = (e.clientY - r.top) / r.height - 0.5
  hrImg.value.style.transform = `scale(1.06) translate(${dx * -12}px, ${dy * -8}px)`
}
function onLeave() { hrImg.value.style.transform = 'scale(1.04)' }
onMounted(() => {
  if (heroR.value && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
    heroR.value.addEventListener('mousemove', onMove)
    heroR.value.addEventListener('mouseleave', onLeave)
  }
})
onBeforeUnmount(() => { if (heroR.value) { heroR.value.removeEventListener('mousemove', onMove); heroR.value.removeEventListener('mouseleave', onLeave) } })
</script>
<template>
<section class="hero" id="top">
  <div class="hero-split">
    <div class="hero-l">
      <div class="hero-eyebrow rv">
        <span class="sec-num">01.</span>
        <span>B2B Marketing · Sanoat</span>
      </div>
      <h1 class="rv">
        Sanoat<br>biznesiga<br><em>marketing</em>
      </h1>
      <p class="lead rv">
        Ishlab chiqaruvchilar, distribyutorlar va logistika kompaniyalari uchun mijoz jalb qilish tizimini quramiz. Ijtimoiy tarmoq yuritmaymiz — sotish bo'limiga yetib keladigan arizalar keltiramiz.
      </p>
      <div class="hero-cta rv">
        <a class="btn btn-acc" href="#contact">Bepul audit olish</a>
        <a class="btn btn-ghost" href="#services">Xizmatlar</a>
      </div>
      <div class="hero-stats rv">
        <div class="stat">
          <b>50<em>+</em></b>
          <span>amalga oshirilgan B2B loyihalar</span>
        </div>
        <div class="stat">
          <b>6<em> yil</em></b>
          <span>sanoat va distribusiyada tajriba</span>
        </div>
        <div class="stat">
          <b>×2.4</b>
          <span>o'rtacha murojaatlar o'sishi</span>
        </div>
      </div>
    </div>
    <div class="hero-r" ref="heroR">
      <div class="hr-img" ref="hrImg"></div>
      <div class="hr-overlay"></div>
    </div>
  </div>
</section>
</template>
