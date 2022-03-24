<template v-if="id">
  <div class="box1">
    <div class="row personal-info">
      <div class="col-md-3 image-box">
        <img :src="slika" alt="" class="image" />
      </div>
      <div class="col-md-7 name">
        <p>{{ ime }}</p>
        <br />
        <p style="font-weight: normal !important">Kontakt: {{ broj }}</p>
      </div>
      <div class="col-md-2 favourite-icon">
        <i @click="zatvori" class="far fa-times-circle mt-3"></i>
      </div>
    </div>

    <div class="row post-info">
      <div class="col-md-2 like-box mt-3">
        <i class="fas fa-map-marker-alt" style="font-size: 1.3rem"></i>
        {{ lokacija }}
        <br />
        <b class="pr-2">{{ brojLajkova }}</b>
        <i
          v-if="this.$store.currentUser"
          class="far fa-thumbs-up mt-3 klik"
          style="font-size: 20px"
          :class="liked ? 'fas' : 'far'"
          @click="likePressed()"
        ></i>
        <i
          v-if="this.$store.currentUser"
          class="fa-star klik"
          :class="favorited ? 'fas' : 'far'"
          style="font-size: 20px; margin-left: 30px"
          @click="toggleFavorite()"
        ></i>
      </div>
      <div class="col-md-10 content-box">
        <p>
          {{ opis }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col mt-3">
        <div class="card-text" v-for="data in comments" :key="data.id">
          <div class="commented-image" style="padding-right: 7px">
            <img
              :src="data.user.photoURL"
              alt=""
              class="image-box"
              width="35px"
              style="border-radius: 20px"
            />
          </div>
          <div class="commented-content">
            <p style="margin-left: 0.6rem; color: black; font-weight: bold">
              {{ data.user.displayName }}
            </p>
            <div class="one-comment">
              {{ data.comment }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <form action="">
      <div class="row comment-section">
        <div class="col-sm-1 image-box">
          <img
            :src="photoURL"
            alt=""
            class=""
            width="45px"
            style="float: right; border-radius: 30px"
          />
        </div>

        <div class="col-sm-10 comment">
          <input
            type="text"
            required
            placeholder="Napiši komentar..."
            v-model="newComment"
          />
        </div>
        <div class="col-sm-1 button">
          <button @click.prevent="addComment">
            <img
              src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-send-user-interface-kmg-design-flat-kmg-design.png"
            />
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import store from "@/store";
import { db, addDoc, collection, doc, getDoc, getDocs } from "@/firebase";
export default {
  name: "PostOpened",
  mounted() {
    this.getObjava();
    this.getComments();
  },
  data() {
    return {
      photoURL: store.currentUser.photoURL,
      newComment: "",
      comments: [],
      opis: "",
      ime: "",
      lokacija: "",
      slika: "",
    };
  },
  props: {
    id: String,
    zatvori: Function,
    trenutnaObjava: Object,
    liked: Boolean,
    toggleLike: Function,
    favorited: Boolean,
    toggleFavorite: Function,
    brojLajkova: Number,
    broj: String,
  },

  methods: {
    async likePressed() {
      await this.toggleLike();
    },
    async getObjava() {
      const objava = await getDoc(doc(db, "objave", this.id));

      const data = objava.data();

      this.opis = data.opis;
      this.lokacija = data.lokacija;
      this.ime = data.korisnik.ime;
      this.slika = data.korisnik.imageURL;
    },
    async addComment() {
      if (!this.newComment.length > 0) {
        return alert("Ne možete poslati prazan komentar!");
      }
      await addDoc(collection(doc(db, "objave", this.id), "komentari"), {
        user: {
          id: store.currentUser.uid,
          displayName: store.currentUser.displayName,
          photoURL: store.currentUser.photoURL,
        },
        comment: this.newComment,
        posted_at: Date.now(),
      });
      this.newComment = "";
      this.getComments();
    },
    // hvatanje komentara
    async getComments() {
      const komentari = await getDocs(
        collection(doc(db, "objave", this.id), "komentari")
      );
      let noviKomentari = [];
      komentari.forEach((komentar) => {
        noviKomentari.push({ id: komentar.id, ...komentar.data() });
      });

      this.comments = noviKomentari;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0;
  color: white;
}
.col {
}
.box1 {
  margin: 0px;
  background-color: #383838;
  border-radius: 20px !important;
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

.image-box {
  margin: 0px 0px 0px 0px !important;
}
.col-sm-1.image-box {
  max-width: 50px !important;
}
.image {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  float: left;
  transform: translate(40%, 30%);
  object-fit: cover;
}
.name > p {
  float: left;
  transform: translate(0%, 210%);
  font-weight: bold;
}
.content-box > p {
  text-align: left;

  margin-right: 50px;
  margin-left: 50px;
}
.post-info.row {
  width: 100%;
  margin: auto;
}
.row.comment-section {
  padding-bottom: 20px;
  margin-top: 20px !important;
  margin: auto;
  width: 90%;
}
.like-box {
  align-self: center;
}

input {
  background-color: #383838;
  padding: 10px;
  border: 1px solid white;
  border-radius: 20px;
  width: 90%;
  box-shadow: none !important;
}
input:focus {
  border: 0px solid transparent;
  box-shadow: none;
}
.button {
  align-self: center;
  max-width: 50px !important;
}
.commented-content {
  text-align: start;
  background-color: rgb(212, 212, 212);
  border-radius: 15px;
  padding: 0.5rem;
}
button {
  border: none;
  box-shadow: none;
  background-color: transparent !important;
}
.fa-times-circle {
  font-size: 20px;
  font-size: 20px;
  margin-left: 40px;
  cursor: pointer;
}
.fa-thumbs-up,
.fa-star {
  font-size: 20px;
  cursor: pointer;
}

.one-comment {
  background-color: rgb(212, 212, 212);
  border-radius: 15px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding: 2px 10px;
  color: black;
}
.card-text {
  display: flex;
  flex-direction: row;
  margin-left: 8rem;
  margin-top: 0.6rem;
  margin-right: 2rem;
}

@media only screen and (max-width: 1000px) {
  .box1 {
    width: 100%;
    border-radius: 0px;
    border-bottom: transparent;
    border-right: transparent;
    border-left: transparent;
  }
  .like-box {
    width: 150px;
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
  .name > p {
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

  .post-info.row {
    margin-top: 50px;
    flex-direction: column-reverse;
  }
  .content-box > p {
    text-align: left;
    margin: auto;
    margin-right: 30px;
    margin-left: 30px;
  }
  .like-box {
    margin: auto;
  }
  .more-info {
    margin-top: 30px !important;
    justify-content: center;
    padding-bottom: 0px;
  }

  .box1 {
    padding-bottom: 0px;
    border-radius: 0px !important;
  }
}
@media only screen and (max-width: 992px) {
  .card-text {
    margin-left: 3rem;
  }
}
@media only screen and (max-width: 767px) {
  .fa-times-circle {
    font-size: 20px;
    padding-left: 0px;
    margin-left: 0px;
  }
  .card-text {
    margin-left: 2rem;
  }
}
</style>
