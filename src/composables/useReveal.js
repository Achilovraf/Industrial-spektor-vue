import { onMounted, onBeforeUnmount } from 'vue'

/**
 * Появление элементов при скролле (.rv, .rv-s, .rl).
 * Вызывается один раз на уровне App.
 */
export function useReveal() {
  let io

  onMounted(() => {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('on')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    document.querySelectorAll('.rv, .rv-s, .rl').forEach((el, i) => {
      if (el.classList.contains('rv') && !el.classList.contains('rv-s')) {
        el.style.transitionDelay = Math.min(i % 4, 3) * 70 + 'ms'
      }
      io.observe(el)
    })
  })

  onBeforeUnmount(() => io && io.disconnect())
}
