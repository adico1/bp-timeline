<template>
  <section>
    <div class="timeline-month-name">{{ timelineitemset.month }}</div>
    <TimelineItem
      v-for="(timelineitem) in timelineitemset.items"
      :key="timelineitem.id"
      :timelineItem="timelineitem"
      @click="itemClickHandler"
      class="timeline-item">
    </TimelineItem>
  </section>
</template>

<script>
// @ is an alias to /src
import TimelineItem from './TimelineItem.vue';
import TimelineItemSet from '../models/TimelineItemSetModel';

export default {
  name: 'Timeline',
  props: {
    timelineitemset: TimelineItemSet,
  },
  components: {
    TimelineItem,
  },
  methods: {
    itemClickHandler(timelineItem) {
      this.$emit('show-detail', timelineItem);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeline-month-name {
  margin: 10px 0;
}
.timeline-item {
  margin: 10px 0;
}
</style>
