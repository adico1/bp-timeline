<template>
  <div class="home">
    <Timeline version="v2"/>
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
