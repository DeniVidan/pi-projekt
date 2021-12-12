<template>
  <div>
    <img src="@/assets/background_V2.svg" alt="" class="bg-img" />
    <div class="flex-container">
      <div
      class="brand-name"
        style="
          font-family: 'Dancing Script', cursive;
          font-size: 70px;
          color: black;
          font-weight: ;
        "
      >
        majstor
      </div>

      <div class="login-box">
        <h2>Kreirajte račun</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" v-model="ime" />
            <label>Ime i prezime</label>
          </div>
          <div class="user-box">
            <input type="text" name="" required="" v-model="mail" />
            <label>E-pošta</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" v-model="lozinka1" />
            <label>Lozinka</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" v-model="lozinka2" />
            <label>Potvrdite lozinku</label>
          </div>
          <div class="row1">
            <div class="col-md-6">
              Već imate račun?
              <a href="/login" style="text-decoration: underline">Prijavi se</a>
            </div>
            <div class="col-md-6">
              <a href="#" class="button" @click.prevent="registriraj_korisnika">
                Registriraj se
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "@/firebase";
export default {
  name: "signup",
  data() {
    return {
      ime: "",
      mail: "",
      lozinka1: "",
      lozinka2: "",
      user: null,
      eror: "",
    };
  },
  methods: {
    registriraj_korisnika() {
      if (this.lozinka1 !== this.lozinka2)
        return (this.eror = "Lozinke se ne podudaraju");
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.mail, this.lozinka1)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: this.ime,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
          this.$router.replace({ name: "Home" });
        })

        .catch((error) => {
          console.log(error);
          // ..
        });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.flex-container {
  margin: 0;
  margin-top: 100px;
}
.bg-img {
  top: 0;
  left: 0;
  width: 1920px;
  position: fixed;
  z-index: -1;
  filter: blur(2px);
}

input {
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: #383838;
  padding: 5px;
}

html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
}
.login-box {
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

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
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
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 350ms;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #ffdaae;
  font-size: 12px;
}

.login-box form .button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 3px;
  border: 1px solid #ffdaae;
  border-radius: 10px;
  float: right;
}

.login-box .button:hover {
  background: #ffdaae;
  color: black;
  border-radius: 5px;
  box-shadow: 0 0 3px #ffdaae, 0 0 5px #ffdaae, 0 0 25px #ffdaae,
    0 0 10px #ffdaae;
}

.login-box a span {
  position: absolute;
  display: block;
}
div {
  color: white;
}
.row1 {
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}
.col-md-6 {
  margin: auto;
}
@media only screen and (max-width: 600px) {
  .login-box {
    width: 100%;
    border-radius: 0px;
  }
  .brand-name{
    margin-top: 0px;
  }
  .flex-container{
    margin-top: 0px;
  }
}
</style>
