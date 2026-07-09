# SPEKTOR — лендинг (Vue 3 + Vite + Tailwind CSS)

Одностраничный сайт маркетингового агентства SPEKTOR, разбитый на Vue-компоненты.

## Запуск

```bash
npm install
npm run dev      # режим разработки — http://localhost:5173
npm run build    # продакшн-сборка в dist/
npm run preview  # локальный просмотр сборки
```

## Структура

```
public/img/            — изображения (hero, кейсы, команда)
src/
  App.vue              — корневой компонент, состояние меню
  assets/main.css      — Tailwind-директивы + фирменные стили SPEKTOR
  composables/
    useReveal.js       — появление блоков при скролле (IntersectionObserver)
  components/
    AppPreloader.vue   — прелоадер с анимацией колец
    AppHeader.vue      — шапка (прячется при скролле вниз)
    FullscreenNav.vue  — полноэкранное меню (бургер)
    HeroSection.vue    — первый экран с параллаксом
    PainsSection.vue   — «Задачи»
    SegmentsSection.vue— «Кому»
    ServicesSection.vue— «Услуги»
    ApproachSection.vue— «Подход»
    CasesSection.vue   — «Кейсы»
    AboutSection.vue   — «О нас»
    ContactSection.vue — форма заявки (валидация + состояние «отправлено»)
    AppFooter.vue      — футер
```

## Tailwind

Фирменная палитра и шрифты вынесены в `tailwind.config.js`
(цвета `dark`, `acc`, `muted`…, шрифты `font-display` / `font-body`,
радиусы `rounded-card`, тени `shadow-card`) — используйте утилиты
при доработке новых блоков. Исходные стили лендинга лежат в
`src/assets/main.css` и полностью сохраняют оригинальный дизайн.

## Форма

Отправка формы сейчас — заглушка (`ContactSection.vue`, функция `submit`).
Подключите свой бэкенд или Telegram-бота в помеченном `TODO` месте.
