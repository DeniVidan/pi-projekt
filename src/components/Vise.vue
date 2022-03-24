<template>
  <div class="row more-info" v-if="trenutnaObjava">
    <button @click="test" class="w3-button">Više - {{ cijena }}kn</button>
    <div :id="trenutnaObjava.id" class="w3-modal">
      <div class="w3-modal-content">
        <div class="w3-container">
          <PostOpened
            v-if="trenutnaObjava"
            :id="trenutnaObjava.id"
            :zatvori="zatvori"
            :trenutnaObjava="trenutnaObjava"
            :liked="liked"
            :toggleLike="toggleLike"
            :favorited="favorited"
            :toggleFavorite="toggleFavorite"
            :brojLajkova="brojLajkova"
            :broj="broj"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostOpened from "@/components/PostOpened";

export default {
  name: "Vise",
  props: {
    trenutnaObjava: Object,
    liked: Boolean,
    toggleLike: Function,
    favorited: Boolean,
    toggleFavorite: Function,
    brojLajkova: Number,
    cijena: String,
    broj: String,
  },
  components: {
    PostOpened,
  },
  methods: {
    zatvori() {
      document.getElementById(`${this.trenutnaObjava.id}`).style.display =
        "none";
    },
    test() {
      document.getElementById(`${this.trenutnaObjava.id}`).style.display =
        "block";

      //console.log(this.trenutnaObjava.id);
    },
  },
};
</script>

<style scoped>
.w3-modal-content {
  border-radius: 20px;
  margin: auto;
}
.w3-modal {
  backdrop-filter: blur(4px);
}
.w3-container {
  padding: 0;
}
.w3-button {
  margin-right: 2rem;
  background-color: rgb(187, 187, 187);
}
@media only screen and (max-width: 600px) {
  .w3-button {
    margin-right: 0;
  }
}
</style>
