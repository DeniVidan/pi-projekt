!
<template>
  <div class="profile">
    <Navbar style="z-index: 2" />
    <div class="flex-container">
      <div class="row">
        <div class="col-sm-3" style="padding: 0">
          <NavbarOptions class="navbar-options" />
        </div>
        <div
          class="col-sm-9"
          style="padding: 0px; max-width: 100% !important"
          v-if="Objave.length > 0"
        >
          <Post
            v-for="Objava in Objave"
            :key="Objava.id"
            :opis="Objava.opis"
            :ime="Objava.korisnik.ime"
            :lokacija="Objava.lokacija"
            :slika="Objava.korisnik.imageURL"
            :korisnik_id="Objava.korisnik.id"
            :id="Objava.id"
            :favorite="Objava.favorite"
            :likes="Objava.likes"
          />
        </div>
        <div v-else>Nemate dodanih omiljenih postova</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/Navbar.vue";
import NavbarOptions from "@/components/NavbarOptions.vue";
import Post from "@/components/Post.vue";
import store from "@/store.js";
import { collection, getDocs, db, query, where, orderBy } from "@/firebase";

export default {
  name: "favourite",
  components: {
    Navbar,
    NavbarOptions,
    Post,
  },
  data() {
    return {
      Objave: [],
      id: store.currentUser.uid,
    };
  },
  mounted() {
    this.dohvatiFavorite();
  },
  methods: {
    async dohvatiFavorite() {
      const q = query(
        collection(db, "objave"),
        where("favorite", "array-contains", this.id)
      );
      const Objave = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        Objave.push({ id: doc.id, ...doc.data() });
      });
      this.Objave = Objave;
      console.log(this.Objave);
    },
  },
};
</script>

<style scoped>
.flex-container {
  margin-top: 100px;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: auto;
}
.navbar-options {
  margin-top: 50px;
}
@media only screen and (max-width: 991px) {
  .row {
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
  }
  .navbar-options {
    display: none;
  }
}
</style>
