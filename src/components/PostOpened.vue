<template v-if="id">
  <div class="box1">
    <div class="row personal-info">
      <div class="col-md-3 image-box">
        <img :src="slika" alt="" class="image" />
      </div>
      <div class="col-md-7 name">
        <p>{{ ime }}</p>
      </div>
      <div class="col-md-2 favourite-icon">
        <i
          class="far fa-times-circle mt-3"
          style="font-size: 20px; padding-left: 40px"
        ></i>
      </div>
    </div>

    <div class="row post-info">
      <div class="col-md-2 like-box mt-3">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNC4xOTggMC04IDMuNDAzLTggNy42MDIgMCA2LjI0MyA2LjM3NyA2LjkwMyA4IDE2LjM5OCAxLjYyMy05LjQ5NSA4LTEwLjE1NSA4LTE2LjM5OCAwLTQuMTk5LTMuODAxLTcuNjAyLTgtNy42MDJ6bTAgMTFjLTEuNjU3IDAtMy0xLjM0My0zLTNzMS4zNDItMyAzLTMgMyAxLjM0MyAzIDMtMS4zNDMgMy0zIDN6Ii8+PC9zdmc+"
        />
        {{ lokacija }}
        <br />
        <i
          v-if="this.$store.currentUser"
          class="far fa-thumbs-up mt-3"
          style="font-size: 20px"
        ></i>
        <i
          v-if="this.$store.currentUser"
          class="far fa-star"
          style="font-size: 20px; padding-left: 10px"
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
        <p class="card-text" v-for="data in comments" :key="data.id">
          <img
            :src="data.user.photoURL"
            alt=""
            class="image-box"
            width="40px"
            style="border-radius: 20px; padding-right: 7px;"
          />

          <b>{{ data.user.displayName }}: </b>
          {{ data.comment }}
        </p>
      </div>
    </div>
    <form action="">
      <div class="row comment-section">
        <div class="col-sm-1 image-box">
          <img
            :src="slika"
            alt=""
            class=""
            width="40px"
            style="float: right; border-radius: 20px"
          />
        </div>

        <div class="col-sm-10 comment">
          <input
            type="text"
            placeholder="Napiši komentar..."
            v-model="newComment"
          />
        </div>
        <div class="col-sm-1 button">
          <button @click.prevent="addComment">
            <img
              src="@/assets/send-message.png"
              alt=""
              style="float: left; align-items: center !important"
            />
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import store from "@/store";
import {
  db,
  firebase,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
} from "@/firebase";
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
  },

  methods: {
    async getObjava() {
      const objava = await getDoc(doc(db, "objave", this.id));

      const data = objava.data();

      this.opis = data.opis;
      this.lokacija = data.lokacija;
      this.ime = data.korisnik.ime;
      this.slika = data.korisnik.imageURL;
      console.log(data);
    },
    async addComment() {
      await addDoc(collection(doc(db, "objave", this.id), "komentari"), {
        user: {
          id: store.currentUser.uid,
          displayName: store.currentUser.displayName,
          photoURL: store.currentUser.photoURL,
        },
        comment: this.newComment,
        posted_at: Date.now(),
      });
      this.newComment = null;
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
      console.log(this.comments);
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
.like-box {
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
}
input {
  background-color: #383838;
  padding: 10px;
  border: 1px solid white;
  border-radius: 20px;
  width: 90%;
}
input:focus {
  border: 0px solid transparent;
}
.button {
  align-self: center;
  max-width: 50px !important;
}
.card-text{
  text-align: start;
  padding-left: 9rem;
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
  .more-info > button {
    margin-right: 0px;
  }

  .box1 {
    padding-bottom: 0px;
    border-radius: 0px !important;
  }
}
</style>
