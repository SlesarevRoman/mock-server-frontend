<template>
  <div class="home">
    <create/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import create from '@/components/Create.vue'

export default {
  name: 'home',
  components: {
    create,
  }
}
</script>
