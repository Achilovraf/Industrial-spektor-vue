<script setup>
import { ref } from 'vue'
const formEl = ref(null)
const sent = ref(false)
function submit() {
  if (!formEl.value.reportValidity()) return
  sent.value = true
}
</script>
<template>
<section id="contact">
  <div class="wrap">
    <div class="cform-wrap rv">
      <div class="cform-dark">
        <div>
          <h2 class="hd hd-lg">Bepul <em>audit</em> bilan boshlaymiz</h2>
          <p class="lead">Joriy marketing'ingizni tahlil qilamiz va mijozlar qayerda yo'qolayotganini ko'rsatamiz. Majburiyatsiz.</p>
        </div>
        <div class="clinks">
          <div>
            <div class="cl">Telegram</div>
            <a href="https://t.me/spektor_uz" target="_blank" rel="noopener">@spektor_uz</a>
          </div>
          <div>
            <div class="cl">Telefon</div>
            <a href="tel:+998900000000">+998 90 000 00 00</a>
          </div>
          <div>
            <div class="cl">Pochta</div>
            <a href="mailto:hello@spektor.uz">hello@spektor.uz</a>
          </div>
        </div>
      </div>
      <div class="cform-right">
        <h3>Sizning ma'lumotlaringiz</h3>
        <form ref="formEl" novalidate @submit.prevent="submit">
          <div class="fgrid">
            <div class="ff"><label for="fn">Ism <em>*</em></label><input id="fn" name="name" type="text" autocomplete="name" required></div>
            <div class="ff"><label for="fp">Telefon <em>*</em></label><input id="fp" name="phone" type="tel" autocomplete="tel" placeholder="+998" required></div>
            <div class="ff"><label for="fc">Kompaniya</label><input id="fc" name="company" type="text" autocomplete="organization"></div>
            <div class="ff"><label for="fs">Faoliyat sohasi</label><input id="fs" name="sphere" type="text" placeholder="Ishlab chiqarish, ulgurji, logistika…"></div>
            <div class="ff full"><label for="fm">Vazifa haqida qisqacha</label><textarea id="fm" name="message" rows="3"></textarea></div>
          </div>
          <div class="ffoot">
            <label class="fagree">
              <input type="checkbox" required checked>
              <span>Shaxsiy ma'lumotlarni qayta ishlashga roziman</span>
            </label>
            <button class="btn btn-acc" type="submit" :disabled="sent">Audit olish</button>
          </div>
          <div class="fok" :class="{ show: sent }">Ariza yuborildi. Ish kuni davomida bog'lanamiz.</div>
        </form>
      </div>
    </div>
  </div>
</section>
</template>
