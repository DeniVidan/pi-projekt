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
      <div class="col-md-3 like-box"></div>
      <div class="col-md-9 content-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, eos
          sunt omnis molestias debitis officia deserunt facere dolorum. Iusto,
          fugit!
        </p>
      </div>
    </div>

    <div class="row comment-section">
      <div class="col-md-2 image-box">
        <img
          src="@/assets/profilepic.jpg"
          alt=""
          class=""
          width="40px"
          style="float: right; border-radius: 20px"
        />
      </div>
      <div class="col-md-8 comment">
        <input type="text" placeholder="Napiši komentar..."/>
      </div>
      <div class="col-md-2 button">
          <a href="#">
              <img src="@/assets/send-message.png" alt="" style="float: left; align-items: center !important;">
          </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>