<template>
  <div class="hello">
    <div v-for="destination in destinations" :key="destination.id">
     <h2>{{destination.name}}</h2>
     <div>{{destination.description}}</div>
     <img :src="`/image/${destination.image}`" />
      <div v-for="experience in destination.experiences" :key="experience.slug">
       <p>{{experience.description}}</p>  
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/assets/data.json';
export default {
 data(){
  return {
  destinations: sourceData.destinations
  }
 }
}
</script>
 