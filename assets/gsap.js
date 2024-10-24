// plugins/gsap.js
import { defineNuxtPlugin } from '#app';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Регистрация ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default defineNuxtPlugin((nuxtApp) => {
    // Инжектируем GSAP и ScrollTrigger в Nuxt 3
    nuxtApp.provide('gsap', gsap);
    nuxtApp.provide('ScrollTrigger', ScrollTrigger);
});
