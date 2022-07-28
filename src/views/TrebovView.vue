<template>
<article class="uni" id="trebov">
    <section>
     <CountryWorld/>
    </section>
</article>
</template>
<script>
import CountryWorld from '@/components/CountryWorld.vue'

export default {
  name: 'TrebovView',
  components: {
    CountryWorld
  }
}
</script>