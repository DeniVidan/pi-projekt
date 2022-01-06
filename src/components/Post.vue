<template>
  <div class="box">
    <div class="row personal-info">
      <div class="col-md-3 image-box">
        <img :src="slika" alt="" class="image" />
      </div>
      <div class="col-md-7 name">
        <p>{{ ime }}</p>
      </div>
      <div class="col-md-2 favourite-icon">
        <i class="far fa-star" style="font-size: 20px; margin-top: 15px"></i>
      </div>
    </div>

    <div class="row post-info">
      <div class="col-md-2 like-box mt-3">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNC4xOTggMC04IDMuNDAzLTggNy42MDIgMCA2LjI0MyA2LjM3NyA2LjkwMyA4IDE2LjM5OCAxLjYyMy05LjQ5NSA4LTEwLjE1NSA4LTE2LjM5OCAwLTQuMTk5LTMuODAxLTcuNjAyLTgtNy42MDJ6bTAgMTFjLTEuNjU3IDAtMy0xLjM0My0zLTNzMS4zNDItMyAzLTMgMyAxLjM0MyAzIDMtMS4zNDMgMy0zIDN6Ii8+PC9zdmc+"
        />{{ lokacija }}
        <br />
        <i class="far fa-thumbs-up mt-3"></i>
      </div>
      <div class="col-md-10 content-box">
        <p>
          {{ opis }}
        </p>
      </div>
    </div>

    <div class="row more-info">
      <button
        onclick="document.getElementById('id01').style.display='block'"
        class="w3-button"
      >
        Više
      </button>
      <div id="id01" class="w3-modal">
        <div class="w3-modal-content">
          <div class="w3-container">
            <span
              onclick="document.getElementById('id01').style.display='none'"
              class="w3-button w3-display-topright"
              >&times;</span
            >
            <PostOpened />
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import PostOpened from "@/components/PostOpened.vue";
export default {
  name: "Post",

  data() {
    return {};
  },
  props: {
    opis: String,
    ime: String,
    lokacija: String,
    slika: String,
  },
  components: {
    PostOpened,
  }
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0;
}

.box {
  margin: auto;
  max-width: 830px;
  min-height: 250px;
  border-radius: 10px;
  border: 1px solid rgba(128, 128, 128, 0.514);
  background-color: #e5e5e5;
  margin-bottom: 20px;
  padding-bottom: 20px;
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

.col-md-3.image-box {
  margin: 0px 0px 0px 0px !important;
}
.image {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  float: left;
  transform: translate(40%, 30%);
  object-fit: cover;
}
.col-md-7.name > p {
  float: left;
  transform: translate(0%, 210%);
  font-weight: bold;
}
.col-md-10.content-box > p {
  text-align: left;
  margin: auto;
  margin-right: 50px;
  margin-left: 50px;
}
.post-info.row {
  width: 100%;
  margin: auto;
}
.row.comment-section {
  padding-bottom: 20px;
  margin-top: 50px !important;
  margin: auto;
  width: 90%;
}
.col-md-2.image-box {
  width: 30px;
}
.col-md-2.like-box {
  align-self: center;
}
.more-info {
  margin-top: 30px !important;
  justify-content: right;
}
.more-info > button {
  border: none;
  color: black;
  float: right;
  margin-right: 50px;
  background-color: rgb(172, 172, 172);
  padding: 3px 25px 3px 25px;
  border-radius: 5px;
  transition: transform 100ms;
}
.more-info > button:hover {
  transform: scale(1.1);
}
.w3-modal{
  margin: 0;
  padding: 0;
    backdrop-filter: blur(4px);
}
.w3-modal-content{
  margin: 0;
  padding: 0;
  top: 25%;
  margin: auto;
}
.w3-container{
  margin: 0;
  padding: 0;
}
span{
  position: absolute;
  color: white;
  z-index: 1;
  font-size: 30px;
  padding-right: 5px;
  padding-left: 5px;
}
@media only screen and (max-width: 1000px) {
  .box {
    width: 100%;
    border-radius: 0px;
    border-bottom: transparent;
    border-right: transparent;
    border-left: transparent;
  }
  .col-md-2.like-box {
    width: 150px;
  }
  .col-md-3.image-box {
    width: 200px;
  }
  .favourite-icon {
    width: 20px;
    margin-right: 15px;
  }
}
@media only screen and (max-width: 600px) {
  .personal-info.row {
    flex-direction: column;
    flex-wrap: wrap;
    width: 85%;
  }
  .col-md-7.name > p {
    float: none;
    transform: translate(0%, 150%);
    font-weight: bold;
  }
  .image {
    width: 80px;
    border-radius: 40px;
    float: none;
    transform: translate(0%, 30%);
  }
  .col-md-3.image-box {
    width: 100%;
  }
  .post-info.row {
    margin-top: 50px;
    flex-direction: column-reverse;
  }
  .col-md-10.content-box > p {
    text-align: left;
    margin: auto;
    margin-right: 30px;
    margin-left: 30px;
  }
  .col-md-2.like-box {
    margin: auto;
  }
  .more-info {
    margin-top: 30px !important;
    justify-content: center;
    padding-bottom: 0px;
  }
  .more-info > button {
    margin-right: 0px;
  }

  .box {
    padding-bottom: 0px;
  }
}
</style>
