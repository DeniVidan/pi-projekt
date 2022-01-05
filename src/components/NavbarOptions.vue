<template>
  <div class="row NavbarOptions">
    <router-link class="item" class-active="active" to="/" exact
      ><i class="fas fa-home"></i>Naslovnica</router-link
    >
    <router-link
      class="item"
      class-active="active"
      to="/profile"
      exact
      v-if="this.$store.currentUser"
      ><i class="fas fa-user-circle"></i>Moj profil</router-link
    >
    <router-link
      class="item"
      class-active="active"
      to="/favorite"
      exact
      v-if="this.$store.currentUser"
      ><i class="fas fa-star"></i>Favoriti</router-link
    >
  </div>
</template>

<script>
export default {
  name: "NavbarOptions",
};
</script>

<style scoped>
* {
  margin: 0;
}
.NavbarOptions {
  margin-top: 50px;
}
.fas {
  margin-right: 45px;
}
a.router-link-exact-active {
  color: #383838 !important; /* mediumorchid */ /* goldenrod */
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  box-shadow: 1px 1px 10px #888888;
  background-color: #ffcd94;
}
.item {
  max-width: 270px;
  font-size: 25px;
  text-decoration: none;
  text-align: start;
  color: white;
  background-color: #383838;
  padding: 5px 30px 5px 30px;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 40px;
}
.row.NavbarOptions {
  flex-direction: column;
  flex-wrap: wrap;
}

@media only screen and (max-width: 991px) {
  .NavbarOptions {
    display: none;
  }
}
@media only screen and (max-width: 1391px) {
  .item {
    padding: 5px 10px 5px 10px;
  }
  .fas {
    margin-right: 25px;
  }
}
@media only screen and (max-width: 1080px) {
  .item {
    padding: 5px 10px 5px 10px;
  }
  .fas {
    margin-right: 3px;
  }
}
</style>
