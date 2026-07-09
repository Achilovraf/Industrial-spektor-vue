<script setup>
defineProps({ open: Boolean })
defineEmits(['close'])
</script>
<template>
  <nav class="fs-nav" :class="{ open }" :aria-hidden="!open">
    <a class="fs-link" href="#top" @click="$emit('close')">Bosh sahifa</a>
    <a class="fs-link" href="#pains" @click="$emit('close')">Muammolar</a>
    <a class="fs-link" href="#segments" @click="$emit('close')">Kimlar uchun</a>
    <a class="fs-link" href="#services" @click="$emit('close')">Xizmatlar</a>
    <a class="fs-link" href="#cases" @click="$emit('close')">Natijalar</a>
    <a class="fs-link" href="#contact" @click="$emit('close')">Bog'lanish</a>
    <div class="fs-contacts">
      <a href="https://t.me/spektor_uz" target="_blank" rel="noopener">Telegram: @spektor_uz</a>
      <a href="tel:+998900000000">+998 90 000 00 00</a>
      <a href="mailto:hello@spektor.uz">hello@spektor.uz</a>
    </div>
  </nav>
</template>
