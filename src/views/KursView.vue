<template>
<article class="uni" id="kurs">
    <section class="kurs">Курсы предназначены для всех, кто хочет научиться программировать, кто хочет сменить профессию и стать высокооплачиваемым специалистом. 
        Он подойдёт для работающих людей, у которых мало времени.</section>
 <KursData></KursData>
</article>
</template>
<script>
// @ is an alias to /src
import KursData from '@/components/KursData.vue'

export default {
  name: 'KursView',
  components: {
    KursData
  }
}
</script>
