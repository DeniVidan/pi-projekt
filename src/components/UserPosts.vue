<template>
  <div class="UserPosts">
    <div class="post" v-if="Objave.length > 0">
      <Post
        v-for="Objava in Objave"
        :key="Objava.id"
        :opis="Objava.opis"
        :ime="Objava.korisnik.ime"
        :lokacija="Objava.lokacija"
        :slika="Objava.korisnik.imageURL"
        :korisnik_id="Objava.korisnik.id"
        :id="Objava.id"
      />
    </div>
    <div v-else>Nemate objavljenih postova</div>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import { collection, getDocs, db, query, where, orderBy } from "@/firebase";
import store from "@/store.js";

export default {
  name: "UserPosts",
  data() {
    return {
      id: store.currentUser.uid,
      Objave: [],
    };
  },
  mounted() {
    this.getMyPosts();
  },
  methods: {
    async getMyPosts() {
      //console.log("Dohvačam tvoje postove");
      const q = query(
        collection(db, "objave"),
        where("uid", "==", this.id),
        orderBy("time", "desc")
      );
      const Objave = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        Objave.push({ id: doc.id, ...doc.data() });
      });
      this.Objave = Objave;
    },
  },
  components: {
    Post,
  },
};
</script>

<style scoped>
.post {
  margin-top: 40px;
}
</style>
