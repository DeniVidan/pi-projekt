<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "@/firebase.js";
import store from "@/store.js";
import { mapActions } from "vuex";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    //console.log("User: " + user.email);
    store.currentUser = user;
    // ...
  } else {
    store.currentUser = null;
    // User is signed out
    // ...
  }
});
export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    ...mapActions({ getPosts: "getPosts" }),
  },
};
</script>

<style scoped>
* {
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  text-decoration: none;
  font-weight: bold;
  color: #467db5;
}

.bg-img {
  width: 1920px;
  position: fixed;
  z-index: -1;
  filter: blur(2px);
}

.navbar {
  position: fixed;
  background-color: #cccccc !important;
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
