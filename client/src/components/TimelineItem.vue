<template>
  <article class="timeline-item-podium">
    <div class="flex-thin">
      <img class="timeline-item-image" src="../../../assets/topics/adalovelace.png" alt="">
    </div>
    <div class="flex-stretch">{{ timeLineItem.title }}<br>
    {{ formattedDate }} · {{ formattedTime }}</div>
    <div class="flex-base">
      Score {{ timeLineItem.score }}/10
      <eye-outline-icon></eye-outline-icon>
       View Work
    </div>
  </article>
</template>

<script>
import TimelineItemModel from '../models/TimelineItemModel';

export default {
  name: 'TimelineItem',
  props: {
    timeLineItem: TimelineItemModel,
  },
  computed: {
    formattedDate() {
      return 'Oct 28, 2019';
    },
    formattedTime() {
      return '7:08 pm';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeline-item-image {
  width: 30px;
  height: 30px;
}
.timeline-item-podium {
  display: flex;
  border: 1px solid #000;
  padding: 10px;
}
.flex-thin {
  flex: 0.2;
}
.flex-base {
  flex: 1;
}
.flex-stretch {
  flex: 6;
}
</style>
