!
<template>
  <div class="home">
    <Navbar style="z-index: 2" />
    <div class="flex-container">
      <div class="row">
        <div class="col-sm-3">
          <NavbarOptions />
        </div>
        <div class="col-sm-9"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/Navbar.vue";
import NavbarOptions from "@/components/NavbarOptions.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    NavbarOptions,
  },
};
</script>

<style>
.flex-container {
  margin-top: 100px;
}
</style>
