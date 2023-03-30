import { gsap, ScrollTrigger } from "gsap/all";

export function useAnimations() {

  gsap.registerPlugin(ScrollTrigger)

  gsap.from('#home', {
    scrollTrigger: {
      trigger: '#home',
      start: '-=400%',
      end: 'bottom top',
      toggleActions: 'play reverse restart reverse',
    },
    x: -100,
    opacity: 0,
    duration: 1
  })

  gsap.from('#home + p', {
    scrollTrigger: {
      trigger: '#home',
      start: '-=400%',
      end: 'bottom top',
      toggleActions: 'play reverse restart reverse',
    },
    x: -100,
    opacity: 0,
    duration: 1,
    delay: .3
  })

  gsap.from('#about', {
    scrollTrigger: {
      trigger: '#about',
      start: '-=400%',
      end: '+=100%',
      toggleActions: 'play reverse restart reverse'
    },
    x: -100,
    opacity: 0,
    duration: 1
  })

  gsap.from('#features h1, #features p, #features strong, #features path, #features svg', {
    scrollTrigger: {
      trigger: '#features',
      start: 'top center',
      end: 'bottom top',
      toggleActions: 'play reverse restart reverse',
    },
    y: 100,
    opacity: 0,
    duration: .8
  })

  gsap.from('#product', {
    scrollTrigger: {
      trigger: '#product',
      start: 'top center',
      end: 'bottom top',
      toggleActions: 'play reverse restart reverse',
    },
    translateZ: -4,
    opacity: 0,
    duration: .8
  })

  gsap.from('#start', {
    scrollTrigger: {
      trigger: '#start',
      start: 'top center',
      end: '+=300%',
      toggleActions: 'play reverse restart reverse',
    },
    scale: 0.8,
    opacity: 0,
    duration: .8
  })

  gsap.from('#insight', {
    scrollTrigger: {
      trigger: '#insight',
      start: 'top center',
      end: '+=200%',
      toggleActions: 'play reverse restart reverse',
    },
    opacity: 0,
    duration: .8
  })

  gsap.from('#blog', {
    scrollTrigger: {
      trigger: '#blog',
      start: 'top center',
      end: '+=180%',
      toggleActions: 'play reverse restart reverse',
    },
    y: 20,
    opacity: 0,
    duration: .8
  })

  gsap.to('#cs', {
    scrollTrigger: {
      trigger: '#insight',
      start: 'top center',
      end: 'bottom top',
      toggleActions: 'play reverse restart reverse',
    },
    innerText: 99,
    snap: {
      innerText: 1
    },
    duration: 5,
    ease: 'power3'
  })

  gsap.to('#nupw', {
    scrollTrigger: {
      trigger: '#insight',
      start: 'top center',
      end: 'bottom top',
      toggleActions: 'play reverse restart reverse',
    },
    innerText: 100,
    snap: {
      innerText: 1
    },
    duration: 5,
    ease: 'power3'
  })

  gsap.to('#mau', {
    scrollTrigger: {
      trigger: '#insight',
      start: 'top center',
      end: 'bottom top',
      toggleActions: 'play reverse restart reverse',
    },
    innerText: 205,
    snap: {
      innerText: 1
    },
    duration: 5,
    ease: 'power3'
  })

  gsap.to('#gyoy', {
    scrollTrigger: {
      trigger: '#insight',
      start: 'top center',
      end: 'bottom top',
      toggleActions: 'play reverse restart reverse',
    },
    innerText: 55,
    snap: {
      innerText: 1
    },
    duration: 5,
    ease: 'power3'
  })
}

