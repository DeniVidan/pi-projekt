<template>
  <div class="box">
    <div class="row personal-info">
      <div class="col-md-3 image-box">
        <img src="@/assets/profilepic.jpg" alt="" class="image" />
      </div>
      <div class="col-md-8 name">
        <p>Deni Vidan</p>
      </div>
      <div class="col-md-1 close-icon">
        <i class="far fa-star" style="font-size: 20px; margin-top: 15px"></i>
      </div>
    </div>

    <div class="row post-info">
      <div class="col-md-3 like-box">
          <i class="far fa-thumbs-up"></i>
      </div>
      <div class="col-md-9 content-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, eos
          sunt omnis molestias debitis officia deserunt facere dolorum. Iusto,
          fugit!
        </p>
      </div>
    </div>

    <div class="more-info">
        <a href="#" class="">Više</a>
    </div>

  </div>
</template>

<script>
export default {
  name: "Post",
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0;
}

.box {
  margin: auto;
  width: 830px;
  min-height: 250px;
  border-radius: 10px;
  border: 1px solid rgba(128, 128, 128, 0.514);
  background-color: #E5E5E5;
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
.name > p {
  float: left;
  transform: translate(0%, 210%);
  font-weight: bold;
}
.content-box > p {
  text-align: left;
  margin: auto;
  margin-right: 50px;
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
input {
  width: 95%;
  border-radius: 20px;
  border: 1px solid black;
  height: 40px;
  text-indent: 10px;
}
.col-md-2.button{
    align-self: center;
}
.more-info{
    margin-top: 30px !important;
}
.more-info>a{
    text-decoration: none;
    color: black;
    float: right;
    margin-right: 50px;
    background-color: rgb(172, 172, 172);
    padding: 3px 25px 3px 25px;
    border-radius: 5px;
}
@media only screen and (max-width: 1000px) {
    .box{
        width: 100%;
    }
    .col-md-2.button{
        width: 20px;
    }
    .col-md-3.like-box{
        width: 150px;
    }
    .col-md-3.image-box{
        width: 200px;
    }
    .col-md-1.close-icon{
        width: 20px;
        margin-right: 15px;
    }
}
</style>
