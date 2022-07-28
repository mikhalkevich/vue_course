<template>
<article class="uni" id="kont">
    <section>
     <div class="flexi top">
        <div> <i class="material-icons icon" >email</i></div>
        <div>mikhalkevich@ya.ru</div>
    </div>
    <div class="flexi">
        <div><i class="material-icons icon">phone_android</i></div>
        <div>+375297639382</div>
    </div>
    </section>
    <UserData/>
</article>
</template>
<script>
 import UserData from '@/components/UserData';
 export default {
  components: {
    UserData
  }
 }
</script>