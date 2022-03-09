<template>
  <div>
    <div class="addPostButton">
      <button
        class="button_r"
        v-if="this.$store.currentUser"
        @click="modalShow = !modalShow"
      >
        <i class="far fa-plus-square" style="font-size: 18px"></i> Dodaj oglas
      </button>
    </div>
    <div class="modalForm" v-if="modalShow">
      <div class="postForm">
        <div class="headerForma">
          <h2>Novi oglas</h2>
          <button class="gumbIkona" @click="modalShow = !modalShow">
            <!-- <span
              onclick="document.getElementById('id01').style.display='none'"
              class="close-button w3-button w3-display-topright"
              >&times;</span
            > -->
            <i
              @click="zatvori"
              class="far fa-times-circle mt-3 close-button w3-button w3-display-topright"
              style="font-size: 20px; margin-right: 15px; cursor: pointer"
            ></i>
          </button>
        </div>

        <form>
          <div class="switch-button">
            <input
              class="switch-button-checkbox"
              type="checkbox"
              v-model="newTip"
            />
            <label class="switch-button-label" for=""
              ><span class="switch-button-label-span">Nudim</span></label
            >
          </div>
          <div class="filter-item">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                Vrsta posla <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <input
                    type="radio"
                    value="elektrotehnicar"
                    name="isto"
                    @change="(e) => (this.newVrsta = e.target.value)"
                  />
                  <label for="el"> Elektrotehničar</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="vodoinstalater"
                    name="isto"
                    @change="(e) => (this.newVrsta = e.target.value)"
                  />
                  <label for="voda"> Vodoinstalater</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="ciscenje"
                    name="isto"
                    @change="(e) => (this.newVrsta = e.target.value)"
                  />
                  <label for="čiščenje"> Čiščenje</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="odrzavanjeVrta"
                    name="isto"
                    @change="(e) => (this.newVrsta = e.target.value)"
                  />
                  <label for="vrt"> Održavanje vrta</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="soboslikar"
                    name="isto"
                    @change="(e) => (this.newVrsta = e.target.value)"
                  />
                  <label for="soboslikanje"> Soboslikanje</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="odabir1"
                    name="isto"
                    @change="(e) => (this.newVrsta = e.target.value)"
                  />
                  <label for="odabir1"> Odabir1</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="odabir2"
                    name="isto"
                    @change="(e) => (this.newVrsta = e.target.value)"
                  />
                  <label for="odabir2"> Odabir2</label>
                </li>
              </ul>
            </div>
          </div>
          <div class="user-box">
            <input type="text" name="" v-model="newOpis" required />
            <label>Opis</label>
          </div>
          <div class="user-box">
            <input type="text" name="" v-model="newLokacija" required />
            <label>Lokacija</label>
          </div>
          <div class="user-box">
            <input type="text" name="" v-model="newCijena" required />
            <label>Cijena po satu (u KN)</label>
          </div>
          <div class="row1">
            <button
              type="submit"
              class="button"
              @click.prevent="newPost"
              :disabled="isSending"
            >
              Objavi
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { db, addDoc, collection } from "@/firebase";
import store from "@/store";

export default {
  name: "AddPostButton",
  data() {
    return {
      modalShow: false,
      isSending: false,
      newTip: false,
      newVrsta: "",
      newOpis: "",
      newLokacija: "",
      newCijena: "",
      time: "",
    };
  },
  props: {
    zatvori: Function,
  },
  methods: {
    async newPost() {
      console.log("Postam");
      this.isSending = true;
      const newObjava = {
        tip: this.newTip,
        vrsta: this.newVrsta,
        opis: this.newOpis,
        lokacija: this.newLokacija,
        cijena: this.newCijena,
        time: Date.now(),
        uid: store.currentUser.uid,
        korisnik: {
          id: store.currentUser.uid,
          ime: store.currentUser.displayName,
          imageURL: store.currentUser.photoURL,
        },
        likes: [],
      };
      try {
        const docRef = await addDoc(collection(db, "objave"), newObjava);
        console.log("Spremljeno");
      } catch (e) {
        console.error("Greška kod dodavanja oglasa ", e);
      }
      this.$router.go();
    },
  },
};
</script>

<style lang="scss" scoped>
li > label {
  padding: 0px 5px;
}
li {
  padding-left: 5px !important;
}
.btn {
  padding: 0px;
  color: white;
  background-color: transparent;
}
.btn:focus {
  box-shadow: none;
}
.dropdown {
  text-align: start;
}
.filter-item {
  padding: 5px 0px 13px 0px;
  color: white;
}
select {
  background-color: transparent;
  color: white;
}
option {
  color: black;
}
.addPostButton {
  margin-bottom: 35px;
}
.addPostButton > button {
  padding: 0px 50px 0px 50px;
  text-decoration: none;
  color: black;
  background-color: #ffcd94;
  border-radius: 20px;
  border: 1px solid black;
  box-shadow: 2px 2px 3px #888888;
  transition: transform 100ms;
}
.addPostButton > button:hover {
  transform: scale(1.1);
}

.button_r {
  height: 40px;
  align-items: center;
  justify-content: center;
}
.modalForm {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  backdrop-filter: blur(4px);
}

.postForm {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: #383838; /* rgba(0, 0, 0, 0.5) */
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 30px;
}

.postForm h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.postForm .user-box {
  position: relative;
}

.postForm .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  border-radius: 0px;
  outline: none;
  background: transparent;
}
.postForm .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 350ms;
}

.postForm .user-box input:focus ~ label,
.postForm .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #ffdaae;
  font-size: 12px;
}

.postForm form .button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 3px;
  border: 1px solid #ffdaae;
  border-radius: 10px;
  float: right;
  background-color: #383838;
}

.postForm .button:hover {
  background: #ffdaae;
  color: black;
  border-radius: 5px;
  box-shadow: 0 0 3px #ffdaae, 0 0 5px #ffdaae, 0 0 25px #ffdaae,
    0 0 10px #ffdaae;
}

.postForm a span {
  position: absolute;
  display: block;
}

.headerForma {
  display: flex;
  justify-content: center;
  align-items: center;
}
.headerForma > h2 {
  margin-left: auto;
}

.gumbIkona {
  background: none;
  color: white;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin-left: auto;
  font-size: 20px;
  margin-bottom: 4%;
}
/* TOOOOOOOGLER */
.switch-button {
  background: #888888;
  border-radius: 30px;
  overflow: hidden;
  text-align: center;
  width: 240px;
  height: 50px;
  font-size: 18px;
  letter-spacing: 1px;
  color: black;
  position: relative;
  padding-right: 120px;
  position: relative;
  margin-bottom: 2rem;

  &:before {
    content: "Tražim";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    pointer-events: none;
  }

  &-checkbox {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;

    &:checked + .switch-button-label:before {
      transform: translateX(120px);
      transition: transform 300ms linear;
    }

    & + .switch-button-label {
      position: relative;
      padding: 11px 0;
      display: block;
      user-select: none;
      pointer-events: none;

      &:before {
        content: "";
        background: #ffdaae;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 30px;
        transform: translateX(0);
        transition: transform 300ms;
      }

      .switch-button-label-span {
        position: relative;
      }
    }
  }
}
/* .close-button {
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  font-size: 30px;
} */

.w3-button:hover{
  background-color: transparent !important;
  color: white !important;
}

@media only screen and (max-width: 600px) {
  .postForm {
    width: 100%;
    border-radius: 0px;
  }
}
</style>
