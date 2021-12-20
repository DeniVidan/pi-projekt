import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import { getAuth, onAuthStateChanged } from "@/firebase.js";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

let app = null;
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.commit("updateUser", user);
  } else {
    store.commit("updateUser", null);
  }
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
