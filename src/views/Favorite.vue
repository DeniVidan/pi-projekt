!
<template>
  <div class="profile">
    <Navbar style="z-index: 2" />
    <div class="flex-container">
      <div class="row">
        <div class="col-sm-3" style="padding: 0;">
          <NavbarOptions class="navbar-options" />
        </div>
        <div class="col-sm-9" style="padding: 0px; max-width: 100% !important;">

          <Post />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/Navbar.vue";
import NavbarOptions from "@/components/NavbarOptions.vue";
import Post from "@/components/Post.vue";

export default {
  name: "favourite",
  components: {
    Navbar,
    NavbarOptions,
    Post,
  },
};
</script>

<style scoped>
.flex-container {
  margin-top: 100px;
}
.row{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: auto;
}
.navbar-options{
    margin-top: 50px;
  }
@media only screen and (max-width: 991px) {
  .row{
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
  }
  .navbar-options{
    display: none;
  }
}
</style>
