<template>
  <div>
    <div>
      <img class="dialog-close-button-image" src="close.png" />
    </div>
    <div class="dialog-content">
      <img class="timeline-item-image" src="timeline-item.png" />
      {{ item.title }}<br>
      {{ formattedDate }} · {{ formattedTime }}<br>
      <br>
      {{ item.description }}<br>
      <br>
      <br>
      Score {{ timeLineItem.score }}/10
    </div>
  </div>
</template>

<script>
import TimelineItemModel from '../models/TimelineItemModel';

export default {
  name: 'DetailModel',
  props: {
    item: TimelineItemModel,
  },
  data() {
    return {
      filters: ['All Work', 'Movie', 'Quiz', 'Easy Quiz'],
      selectedFilter: 'All Work',
    };
  },
};
</script>

<style scoped>
.dialog-close-button-image {
  width: 16.25rem;
  height: 16.25rem;
}

</style>
