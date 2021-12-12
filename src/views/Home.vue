<template>
  <div class="home">
    <Navbar style="z-index: 2" />
    <div class="flex-container">
      <div class="row">
        <div class="col-sm-3">
          <NavbarOptions class="sideNavbar"/>
        </div>
        <div class="col-sm-9">
          <AddPostButton />
          <Post style="z-index: 1" />
          <Post style="z-index: 1" />
          <Post style="z-index: 1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/Navbar.vue";
import Post from "@/components/Post.vue";
import AddPostButton from "@/components/AddPostButton.vue";
import NavbarOptions from "@/components/NavbarOptions.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Post,
    AddPostButton,
    NavbarOptions,
  },
};
</script>

<style scoped>
.flex-container {
  margin-top: 100px;
}
@media only screen and (max-width: 991px) {
  .row{
    flex-direction: column;
    width: 140% !important;
  }
}
@media only screen and (max-width: 577px) {
  .row{
    flex-direction: column;
    width: 105% !important;
  }
}
</style>
