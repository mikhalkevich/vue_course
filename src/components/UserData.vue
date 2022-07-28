<template>
   <div>
   asdf
 
   </div>
</template>
<script>
 import axios from "axios"
 export default {
   name: 'UserData',
   data(){
   this.load();
    return {
       
    }
   },
   methods: {
    load(){
     axios.post('http://localhost:8001/catalog');
 
    }
   }
 }
</script>