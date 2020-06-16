<template>
  <section>
    <div class="timeline-month-name">{{ timelineitemset.month }}</div>
    <TimelineItem
      v-for="(timelineitem) in timelineitemset.items"
      :key="timelineitem.id"
      :timelineItem="timelineitem"
      @click="itemClickHandler"
      @delete-item="deleteItemHandler"
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
    deleteItemHandler(itemId) {
      this.$emit('delete-item', itemId);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeline-month-name {
  font-size: 12px;
  margin: 10px 10px 0 10px;
  background-color: #FBF9E5;
  border-radius:20px;
  width: 78px;
  height: 18px;
  text-align: center;
  padding-top: 3px;
}
.timeline-item {
  margin: 0;
}
</style>
