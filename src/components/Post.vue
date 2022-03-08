<template>
  <div class="box">
    <div class="row personal-info">
      <div class="col-md-3 image-box">
        <img :src="slika" alt="" class="image" />
      </div>
      <div class="col-md-7 name">
        <p>{{ ime }}</p>
      </div>
      <div class="col-md-2 favourite-icon">
        <i
          v-if="uid == korisnik_id"
          class="far fa-trash-alt"
          style="font-size: 20px; margin-top: 15px; color: #b30000"
          @click="obrisiPost"
        ></i>
      </div>
    </div>

    <div class="row post-info">
      <div class="col-md-2 like-box mt-3">
        <img src="https://img.icons8.com/ios-filled/23/000000/marker.png" />{{
          lokacija
        }}
        <br />
        <i v-if="this.$store.currentUser" class="far fa-thumbs-up mt-3" style="font-size: 20px"></i>
        <i
          v-if="this.$store.currentUser"
          class="far fa-star"
          style="font-size: 20px; padding-left: 30px"
        ></i>
      </div>
      <div class="col-md-10 content-box">
        <p>
          {{ opis }}
        </p>
      </div>
    </div>
    <Vise :trenutnaObjava="trenutnaObjava" />
  </div>
</template>

<script>
import PostOpened from "@/components/PostOpened.vue";
import { mapGetters } from "vuex";
import Vise from "@/components/Vise";
import store from "@/store.js";
import { doc, deleteDoc, db } from "@/firebase.js";
export default {
  name: "Post",
  data() {
    return {
      trenutnaObjava: null,
      uid: store.currentUser.uid,
    };
  },
  mounted() {
    const objava = this.Objave.find((x) => x.id == this.id);
    this.trenutnaObjava = objava;
  },
  methods: {
    async obrisiPost() {
      await deleteDoc(doc(db, "objave", this.id));
      console.log("Post Obrisan");
      this.$router.go();
    },
  },
  computed: {
    ...mapGetters({ Objave: "objave" }),
  },
  props: {
    id: String,
    opis: String,
    ime: String,
    lokacija: String,
    slika: String,
    korisnik_id: String,
  },
  components: {
    PostOpened,
    Vise,
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0;
}

.box {
  margin: auto;
  max-width: 830px;
  min-height: 250px;
  border-radius: 10px;
  border: 1px solid rgba(128, 128, 128, 0.514);
  background-color: #e5e5e5;
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.personal-info.row {
  width: 100%;
  height: 120px;
  margin: auto;
}

.col-md-3.image-box {
  margin: 0px 0px 0px 0px !important;
}
.image {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  float: left;
  transform: translate(40%, 30%);
  object-fit: cover;
}
.col-md-7.name > p {
  float: left;
  transform: translate(0%, 210%);
  font-weight: bolder;
  font-size: 17px;
}
.col-md-10.content-box > p {
  text-align: left;
  margin: auto;
  margin-right: 50px;
  margin-left: 50px;
}
.post-info.row {
  width: 100%;
  margin: auto;
}
.row.comment-section {
  padding-bottom: 20px;
  margin-top: 50px !important;
  margin: auto;
  width: 90%;
}
.col-md-2.image-box {
  width: 30px;
}
.col-md-2.like-box {
  align-self: center;
}
.more-info {
  margin-top: 30px !important;
  justify-content: right;
}
.more-info > button {
  border: none;
  color: black;
  float: right;
  margin-right: 50px;
  background-color: rgb(172, 172, 172);
  padding: 3px 25px 3px 25px;
  border-radius: 5px;
  transition: transform 100ms;
}
.more-info > button:hover {
  transform: scale(1.1);
  background-color: rgb(172, 172, 172) !important;
}
.w3-modal {
  margin: 0;
  padding: 0;
  backdrop-filter: blur(4px);
}
.w3-modal-content {
  margin: 0;
  padding: 0;
  top: 25%;
  margin: auto;
  background-color: transparent;
}
.w3-container {
  margin: 0;
  padding: 0;
}
span {
  position: absolute;
  color: white;
  z-index: 1;
  font-size: 30px;
  padding-right: 9px;
  padding-left: 9px;
  border-top-right-radius: 20px !important;
  border-bottom-left-radius: 20px !important;
}

/* SHAKE EFFECT */
.fa-trash-alt:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(0px, 0px) rotate(10deg); }
  25% { transform: translate(0px, -0px) rotate(-10deg); }
  50% { transform: translate(0px, 0px) rotate(10deg); }
  75% { transform: translate(0px, 0px) rotate(-10deg); }
  100% { transform: translate(0px, 0px) rotate(10deg); }

}
/* SHAKE EFFECT KRAJ */


@media only screen and (max-width: 1000px) {
  .box {
    width: 100%;
    border-radius: 0px;
    border-bottom: transparent;
    border-right: transparent;
    border-left: transparent;
  }
  .col-md-2.like-box {
    width: 150px;
  }
  .col-md-3.image-box {
    width: 200px;
  }
  .favourite-icon {
    width: 20px;
    margin-right: 15px;
  }
}
@media only screen and (max-width: 600px) {
  .personal-info.row {
    flex-direction: column;
    flex-wrap: wrap;
    width: 85%;
  }
  .col-md-7.name > p {
    float: none;
    transform: translate(0%, 150%);
    font-weight: bold;
  }
  .image {
    width: 80px;
    border-radius: 40px;
    float: none;
    transform: translate(0%, 30%);
  }
  .col-md-3.image-box {
    width: 100%;
  }
  .post-info.row {
    margin-top: 50px;
    flex-direction: column-reverse;
  }
  .col-md-10.content-box > p {
    text-align: center;
    margin: auto;
    margin-right: 30px;
    margin-left: 30px;
  }
  .col-md-2.like-box {
    margin: auto;
  }
  .more-info {
    margin-top: 30px !important;
    justify-content: center;
    padding-bottom: 0px;
  }
  .more-info > button {
    margin-right: 0px;
  }

  .box {
    padding-bottom: 0px;
  }
}
</style>
