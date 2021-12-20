<template>
  <div class="EditProfile">
    <div class="">
      <form class="form-body" role="form">
        <div class="element">
          <label for="">Ime i Prezime</label>
          <input type="text" placeholder="Ime" v-model="ime" />
        </div>
        <div class="element">
          <label for="">Lozinka</label>
          <input type="password" placeholder="lozina" v-model="lozinka1" />
        </div>
        <div class="element">
          <label for="">Ponovite lozinku</label>
          <input type="password" placeholder="lozinka" v-model="lozinka2" />
        </div>
        <div class="element" style="align-items: ">
          <label for="img">Select image:</label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            @change="setImage"
          />
          <button
            class="mt-4"
            style="background-color: lightgreen; width: 100px"
            @click.prevent="profilePicture"
            :disabled="isSending"
          >
            Pošalji
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  updateProfile,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  updatePassword,
} from "@/firebase";
import { v4 as randomID } from "uuid";
export default {
  name: "EditProfile",
  data() {
    return {
      ime: "",
      image: null,
      isSending: false,
      lozinka1: "",
      lozinka2: "",
    };
  },

  methods: {
    async profilePicture() {
      console.log("RADIM");
      const randomId = randomID();
      const storageRef = ref(storage, `profilePictures/${randomId}`);
      this.isSending = true;
      if (this.image) {
        await uploadBytes(storageRef, this.image);
        const downloadUrl = await getDownloadURL(storageRef);

        try {
          await updateProfile(getAuth().currentUser, { photoURL: downloadUrl });

          await deleteObject(oldImage);
        } catch (error) {
          console.log(error);
        }
      }
      if (this.ime) {
        await updateProfile(getAuth().currentUser, { displayName: this.ime });
      }
      if (this.lozinka1) {
        if (this.lozinka1 == this.lozinka2) {
          await updatePassword(getAuth().currentUser, this.lozinka1);
          console.log("Lozinka promjenjena!");
        } else {
          alert("Lozinke nisu iste!");
        }
      }

      this.$router.go();
    },
    setImage(e) {
      this.image = e.target.files[0];
    },
  },
  components: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  margin-top: 20px;
}
.row {
  display: flex;
  flex-direction: column;
}
.element {
  text-align: start;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
button {
  padding: 8px 5px;
  border: 0.5px solid grey;
  border-radius: 5px;
}
@media only screen and (max-width: 576px) {
  input,
  label {
    margin: 0 20px;
  }
}
</style>
