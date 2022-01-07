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

          <!--           <button
            onclick="document.getElementById('id01').style.display='block'"
            class="w3-button mobile-filter-button"
          >
            <img src="@/assets/filter.png" alt="">Filter
          </button>
          <div id="id01" class="w3-modal">
            <div class="w3-modal-content">
              <div class="w3-container">
                <span
                  onclick="document.getElementById('id01').style.display='none'"
                  class="w3-button w3-display-topright"
                  >&times;</span
                >
                <Filterr />
              </div>
            </div>
          </div> -->

          <!-- Button trigger modal -->
          <FilterOpened class="filter-opened" style="margin-left: 65%;"/>

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
import FilterOpened from "@/components/FilterOpened.vue"
import { collection, getDocs, db, query, orderBy } from "@/firebase";

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
    Filterr,
    FilterOpened,
  },
};
</script>

<style scoped>
*{
  padding: 0;
}
.flex-container {
  margin-top: 100px;
}
.col-sm-9 {
  padding: 0;
}
.w3-button {
  display: none;
  margin-bottom: 7px !important;
}
.mobile-filter-button {
  margin: auto;
  margin-right: 40px;
}
.w3-button > img {
  padding-right: 10px;
}
.filter-opened{
  display: none;
}
@media only screen and (max-width: 991px) {
  .row {
    flex-direction: column;
    width: 140% !important;
  }
  .w3-button {
    display: block;
  }
  .filter-opened{
    display: block;
  }
}
@media only screen and (max-width: 577px) {
  .row {
    flex-direction: column;
    width: 105% !important;
  }
}
</style>
