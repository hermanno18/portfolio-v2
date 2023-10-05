import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    nuxtApp.AOS = AOS.init(
      // container: "#appContainer",
    ); // eslint-disable-line new-cap
  }
});
