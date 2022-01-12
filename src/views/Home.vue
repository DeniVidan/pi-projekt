<template>
  <div class="home">
    <Navbar style="z-index: 2" />
    <div class="flex-container">
      <div class="row">
        <div class="col-sm-3">
          <NavbarOptions class="sideNavbar" />
          <Filterr />
        </div>
        <div class="col-sm-9">
          <AddPostButton />
          <a href="#">filter</a>
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
import Filterr from "@/components/Filterr.vue";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {};
  },

  computed: {
    ...mapGetters({ Objave: "objave" }),
  },
  methods: {},
  components: {
    Navbar,
    Post,
    AddPostButton,
    NavbarOptions,
    Filterr,
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
