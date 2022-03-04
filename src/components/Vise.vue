<template>
  <div class="row more-info" v-if="trenutnaObjava">
    <button @click="test" class="w3-button">Više</button>
    <div :id="trenutnaObjava.id" class="w3-modal">
      <div class="w3-modal-content">
        <div class="w3-container">
          <span @click="zatvori" class="w3-button w3-display-topright"
            >&times;</span
          >
          <PostOpened v-if="trenutnaObjava" :id="trenutnaObjava.id" />
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

      console.log(this.trenutnaObjava.id);
    },
  },
};
</script>

<style></style>
