<template>
  <div class="home">
    <Navbar style="z-index: 2" />
    <div class="flex-container">
      <div class="row">
        <div class="col-sm-3">
          <NavbarOptions class="sideNavbar" />
        </div>
        <div class="col-sm-9">
          <AddPostButton />
          <Post
            style="z-index: 1"
            v-for="Objava in Objave"
            :key="Objava.id"
            :opis="Objava.opis"
            :ime="Objava.korisnik.ime"
            :lokacija="Objava.lokacija"
            :slika="Objava.korisnik.imageURL"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/Navbar.vue";
import Post from "@/components/Post.vue";
import AddPostButton from "@/components/AddPostButton.vue";
import NavbarOptions from "@/components/NavbarOptions.vue";
import { collection, query, db, orderBy, getDocs } from "@/firebase";

export default {
  name: "Home",
  data() {
    return {
      Objave: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
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
      this.Objave = Objave;
    },
  },
  components: {
    Navbar,
    Post,
    AddPostButton,
    NavbarOptions,
  },
};
</script>

<style scoped>
.flex-container {
  margin-top: 100px;
}
.col-sm-9 {
  padding: 0;
}
@media only screen and (max-width: 991px) {
  .row {
    flex-direction: column;
    width: 140% !important;
  }
}
@media only screen and (max-width: 577px) {
  .row {
    flex-direction: column;
    width: 105% !important;
  }
}
</style>
