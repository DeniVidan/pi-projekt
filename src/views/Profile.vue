!
<template>
  <div class="profile">
    <Navbar style="z-index: 2" />
    <div class="flex-container">
      <div class="row profilePage">
        <div class="col-sm-3 sidebar">
          <NavbarOptions />
        </div>
        <div class="col-sm-9">
          <div class="row userSettings">
            <div class="col-lg-6 userImage">
              <img :src="photoURL" class="image" alt="" />
              <h2 class="mt-4">{{ name }}</h2>
            </div>
            <div class="col-lg-6 userInfo">
              <router-link
                class="item"
                class-active="active"
                to="/profile"
                exact
                >Moje objave</router-link
              >
              <router-link
                class="item"
                class-active="active"
                to="/profileedit"
                exact
                >Uredi profil</router-link
              >
              <UserPosts />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/Navbar.vue";
import NavbarOptions from "@/components/NavbarOptions.vue";
import UserPosts from "@/components/UserPosts.vue";
import store from "@/store";

export default {
  name: "profile",
  data() {
    return {
      name: store.currentUser.displayName,
      photoURL: store.currentUser.photoURL,
    };
  },
  components: {
    Navbar,
    NavbarOptions,
    UserPosts,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.flex-container {
  margin-top: 100px;
}
a {
  padding: 0px 30px;
  text-decoration: none;
  color: black;
  font-size: 20px;
}
a.router-link-exact-active {
  text-decoration: underline;
}
.row {
  padding: 0;
  margin: 0;
}
.sidebar {
  padding: 0;
  margin-top: 50px;
}
.userSettings {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.userImage {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image {
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  border: 1px solid gray;
  padding: 5px;
}

.userInfo {
  margin-top: 40px;
  padding: 0;
}
@media only screen and (max-width: 991px) {
  .sidebar {
    display: none;
  }
  .col-sm-9 {
    left: 10%;
  }
}
@media only screen and (max-width: 576px) {
  .col-sm-9 {
    left: 0%;
  }
}
</style>
