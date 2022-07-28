<template>
  <div class="hello">
    <div v-for="data of datas" :key="data.id" class="row">
     <p>{{data.title}}</p>
      <img :src="data.image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'KursData',
  data() {
    let datas = [
     {id:1, image:'image/php.png', title:'PHP'},
     {id:2, image:'image/js.png', title:'JavaScript'},
     {id:3, image:'image/html.png', title:'Html & CSS'},
    ];
    return {
    datas
    }
  }
}
</script>
 