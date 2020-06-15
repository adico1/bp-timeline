<template>
  <div v-if="item" class="detail-model-podium">
    <div class="flex-center">
      <div class="close-icon-podium">
        <close-circle-outline class="icon-2x"></close-circle-outline>
      </div>
      <div class="dialog-content">
        <div class="item-info-podium">
          <div><img class="timeline-item-image" :src="item.imageSource" /></div>
          <div>{{ item.title }}</div>
          <div>{{ formattedDate }} · {{ formattedTime }}</div>
        </div>
        <div>
          <br>
          {{ item.description }}<br>
          <br>
          <br>
          Score {{ item.score }}/{{ item.ofScore }}
        </div>
      </div>
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
  computed: {
    formattedDate() {
      return 'Oct 28, 2019';
    },
    formattedTime() {
      return '7:08 pm';
    },
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
.detail-model-podium {
  width: 100%;
  height: 100%;
  display: flex;
}
.flex-center {
  background-color: #fff;
  border: 5px solid #ccc;
  border-radius: 10px;
  width: 600px;
  height: 300px;
  margin: auto;
}
.close-icon-podium {
  position: relative;
}
.icon-2x {
  position:absolute;
  top: 5px;
  right: 5px;
  font-size: 32px;
  color: #ccc;
}
.item-info-podium {
  text-align: center;
  width: 100%;
}
</style>
