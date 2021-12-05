<template>
    <div class="row NavbarOptions">
        <a href="" class="item isActive"><i class="fas fa-home mr-5"></i> Naslovnica</a>
        <a href="" class="item"><i class="fas fa-user-circle mr-5"></i> Moj profil</a>
        <a href="" class="item"><i class="fas fa-star mr-5"></i>Favoriti</a>
    </div>
</template>

<script>
export default {
    name: "NavbarOptions",
}
</script>

<style scoped>
*{
    margin: 0;
}
.NavbarOptions{
    margin-top: 50px;
}
.item{
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
.row.NavbarOptions{
    flex-direction: column;
    flex-wrap: wrap;
}
.isActive.item{
    background-color: #ffcd94;
    color: black;
    box-shadow: 2px 2px 5px grey;
}
.isActive > i{
    color: #383838;
}
</style>