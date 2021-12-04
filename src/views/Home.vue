<template>
  <div class="home">
    <Navbar />
    <div class="flex-container">
      <div class="box">
        <div class="row personal-info">
          <div class="col-md-3 image-box">
            <img src="@/assets/profilepic.jpg" alt="" class="image" />
          </div>
          <div class="col-md-9 name">
            <p>Deni Vidan</p>
          </div>
        </div>
        <div class="row post-info">
          <div class="col-md-3 like-box"></div>
          <div class="col-md-9 content-box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
              eos sunt omnis molestias debitis officia deserunt facere dolorum.
              Iusto, fugit!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Navbar,
  },
};
</script>

<style scoped>
* {
  margin-top: 0px !important;
  padding: 0;
}
.box {
  margin: auto;
  margin-top: 200px !important;
  width: 50%;
  height: 250px;
  border-radius: 10px;
  border: 1px solid rgba(128, 128, 128, 0.514);
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.personal-info.row {
  width: 100%;
  height: 120px;
  margin: auto;
}

.col-md-4.image-box {
  float: left;
  margin: 0px 0px 0px 0px !important;
}
.image {
  width: 80px;
  border-radius: 40px;
  float: left;
  transform: translate(40%, 30%);
}
.name>p {
  float: left;
  transform: translate(0%, 210%);
  font-weight: bold;
}
.content-box>p{
  text-align: left;
  margin: auto;
  margin-right: 50px;
}
.post-info.row {
  width: 100%;
  margin: auto;
}
</style>
