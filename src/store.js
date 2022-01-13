import Vue from "vue";
import Vuex from "vuex";
import { collection, getDocs, db, query, orderBy } from "@/firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    objave: null,
  },
  mutations: {
    updateUser(state, payload) {
      state.currentUser = payload;
    },
    updateObjave(state, payload) {
      state.objave = payload;
    },
    filterObjave(state, payload) {
      state.objave = payload;
    },
  },
  getters: {
    user(state) {
      return state.currentUser;
    },
    objave(state) {
      return state.objave;
    },
  },
  actions: {
    async filterPosts({ commit, dispatch, state }, payload) {
      const { vrsta, tip, cijenaOd, cijenaDo } = payload;
      await dispatch("getPosts");
      let newObjave = state.objave;
      if (tip != null) {
        newObjave = newObjave.filter((objava) => objava.tip == tip);
      }
      if (vrsta) {
        newObjave = newObjave.filter((objava) => objava.vrsta == vrsta);
      }
      if (cijenaOd && cijenaDo) {
        newObjave = newObjave.filter(
          (objava) =>
            Number(objava.cijena) >= cijenaOd &&
            Number(objava.cijena) <= cijenaDo
        );
      } else if (cijenaOd) {
        newObjave = newObjave.filter(
          (objava) => Number(objava.cijena) >= cijenaOd
        );
      } else if (cijenaDo) {
        newObjave = newObjave.filter(
          (objava) => Number(objava.cijena) <= cijenaDo
        );
      }
      commit("filterObjave", newObjave);
    },
    async getPosts({ commit }) {
      console.log("Dohvačam postove iz Firebase");
      const querySnapshot = await query(
        collection(db, "objave"),
        orderBy("time", "desc")
      );
      const objaveDocs = await getDocs(querySnapshot);
      const Objave = [];
      objaveDocs.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        Objave.push({ id: doc.id, ...doc.data() });
      });
      commit("updateObjave", Objave);
    },
  },
  modules: {},
});
