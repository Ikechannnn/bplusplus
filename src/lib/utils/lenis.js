import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenis

export function smoothScroll() {
  lenis = new Lenis()

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  // lenis.on('scroll', (e) => {
  // 	console.log(e);
  // });

  // function raf(time) {
  // 	lenis.raf(time);
  // 	requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);
}

export { lenis }
