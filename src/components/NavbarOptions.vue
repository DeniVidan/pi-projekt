<template>
  <div class="row NavbarOptions">
    <router-link class="item" class-active="active" to="/" exact
      ><i class="fas fa-home mr-5"></i> Naslovnica</router-link
    >
    <router-link class="item" class-active="active" to="/profile" exact v-if="this.$store.currentUser"
      ><i class="fas fa-user-circle mr-5"></i> Moj profil</router-link
    >
    <router-link class="item" class-active="active" to="/favorite" exact v-if="this.$store.currentUser"
      ><i class="fas fa-star mr-5"></i>Favoriti</router-link
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
a.router-link-exact-active {
  color: #383838 !important; /* mediumorchid */ /* goldenrod */
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  box-shadow: 1px 1px 10px #888888;
  background-color: #ffcd94;
}
.item {
  width: 300px;
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
.isActive.item {
  background-color: #ffcd94;
  color: black;
  box-shadow: 2px 2px 5px grey;
}
.isActive > i {
  color: #383838;
}
@media only screen and (max-width: 991px) {
  .NavbarOptions{
    display: none;
  }
}
</style>
