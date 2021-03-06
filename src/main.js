import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import { auth } from "./firebase";
import { IonicVue } from "@ionic/vue";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* YouTube plugin */
import VueYoutubeIframe from "@techassi/vue-youtube-iframe";

/* Theme variables */
import "./theme/variables.css";

const store = createStore({
  state() {
    return {
      time: 0,
      refresh: 0,
    };
  },
  mutations: {
    set(state, payload) {
      state.time = payload.time;
    },
    refresh(state) {
      state.refresh++;
    },
  },
});

// auth.onAuthStateChanged( () => {console.log('hi')})
let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(store)
      .use(IonicVue)
      .use(router)
      .use(VueYoutubeIframe);

    router.isReady().then(() => {
      app.mount("#app");
    });
  }
});
