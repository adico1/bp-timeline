<template>
  <article @click="itemClickHandler()" class="timeline-item-podium">
    <div class="flex-thin">
      <img
        v-if="this.timelineItem && this.timelineItem.image"
        class="timeline-item-image"
        v-bind:src="require('../../../assets/topics/' + this.timelineItem.image)"
        alt="">
    </div>
    <div class="flex-stretch">{{ timelineItem.title }}<br>
    {{ formattedDate }} · {{ formattedTime }}</div>
    <div class="flex-base">
      <div v-if="isScoreType">Score {{ timelineItem.score }}/{{ timelineItem.ofScore }}</div>
      <div v-if="isViewType"><eye-outline-icon></eye-outline-icon>
       View Work</div>
    </div>
  </article>
</template>

<script>
import TimelineItemModel from '../models/TimelineItemModel';
import types from '../models/TimelineItemTypeAllow';
import DateUtil from '../utils/date-util';

export default {
  name: 'TimelineItem',
  props: {
    timelineItem: TimelineItemModel,
  },
  computed: {
    formattedDate() {
      if (this.timelineItem) {
        return DateUtil.formatDate(this.timelineItem.date);
      }

      return '';
    },
    formattedTime() {
      if (this.timelineItem) {
        return DateUtil.formatTime(this.timelineItem.date);
      }

      return '';
    },
    getImage() {
      // eslint-disable-next-line no-console
      console.log('getImage', this.timelineItem);

      if (this.timelineItem) {
        // eslint-disable-next-line no-console
        console.log('hello');
        return `../../../../assets/topics/${this.timelineItem.image}`;
      }

      return '';
    },
    isViewType() {
      return types.getZoomByType(this.timelineItem.type);
    },
    isScoreType() {
      return types.getScoreByType(this.timelineItem.type);
    },
  },
  methods: {
    itemClickHandler() {
      this.$emit('click', this.timelineItem);
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
