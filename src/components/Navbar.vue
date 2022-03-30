<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">majstor</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars" style="color: #ffcd94"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto"></ul>

      <div class="CollapsedNavbar">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              class-active="active"
              to="/"
              exact
              v-if="this.$store.currentUser"
              >Naslovnica</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              class-active="active"
              to="/favorite"
              exact
              v-if="this.$store.currentUser"
              >Favoriti</router-link
            >
          </li>
        </ul>
      </div>

      <div class="account">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              class-active="active"
              to="/profile"
              exact
              v-if="this.$store.currentUser"
              ><i class="fal fa-user-circle"></i> {{ name }}</router-link
            >
          </li>
          <li class="nav-item" v-if="this.$store.currentUser">
            <a
              href="#"
              class="nav-link"
              class-active="active"
              to="/login"
              exact
              @click.prevent="odjavi_korisnika()"
              ><i class="fas fa-sign-out"></i> Odjava</a
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              class-active="active"
              to="/login"
              exact
              v-if="!this.$store.currentUser"
              >Prijava</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              class-active="active"
              to="/signup"
              exact
              v-if="!this.$store.currentUser"
              >Registracija</router-link
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
  data() {
    return {
      name: store.currentUser.displayName,
    };
  },
  methods: {
    odjavi_korisnika() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("Odjavio si se");
          store.currentUser = null;
          this.$router.push({ name: "Login" });
        })
        .catch((error) => {
          console.log(error);
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
li {
  font-size: 1.2rem;
}
#nav a.router-link-exact-active {
  text-decoration: none;
  font-weight: bold;
  color: #383838 !important;
  background-color: #ffcd94;
  border-radius: 5px;
}
.CollapsedNavbar {
  display: none;
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
.navbar-toggler-icon {
  color: #ffcd94;
}
@media only screen and (max-width: 991px) {
  .CollapsedNavbar {
    display: block;
  }
}
</style>
