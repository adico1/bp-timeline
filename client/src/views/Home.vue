<template>
  <div class="home">
    <Timeline msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Timeline from '@/components/Timeline.vue';

export default {
  name: 'home',
  components: {
    Timeline,
  },
};
</script>
