<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">majstor</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto"></ul>

      <div class="account">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/login" v-if="this.$store.currentUser"
              >Moj profil</a
            >
          </li>
          <li class="nav-item" v-if="this.$store.currentUser">
            <a class="nav-link" href="#" @click.prevent="odjavi_korisnika()"
              >Odjava</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login" v-if="!this.$store.currentUser"
              >Prijava</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup" v-if="!this.$store.currentUser"
              >Registracija</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import store from "@/store.js";
import { getAuth, signOut } from "@/firebase.js";
export default {
  name: "Navbar",
  methods: {
    odjavi_korisnika() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          store.currentUser = null;
          this.$router.push({ name: "Login" });
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;

  color: #ffcd94 !important;
}
#nav a.router-link-exact-active {
  text-decoration: none;
  font-weight: bold;
  color: #467db5;
}

.navbar {
  position: fixed;
  background-color: #383838 !important;
  padding: 0;
  width: 100%;
}
.navbar-brand {
  font-family: "Dancing Script", cursive;
  font-size: 50px;
  padding-left: 35px;
}

form {
  padding: 0px 20px 0px 20px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}
.form-control {
  background-color: rgba(0, 0, 0, 0.323);
  border: 1px solid black;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.form-control::placeholder {
  color: white;
}

.btn {
  color: black;
  border: 1px solid black;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.navbar-toggler {
  border-color: transparent !important;
}
</style>
