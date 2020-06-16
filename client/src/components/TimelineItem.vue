<template>
  <article @click="itemClickHandler()" class="timeline-item-podium">
    <div class="flex-thin">
      <img
        v-if="this.timelineItem && this.timelineItem.image"
        class="timeline-item-image"
        v-bind:src="require('../../../assets/topics/' + this.timelineItem.image)"
        alt="">
      <div v-if="isBpJr" class="product-tag">JR</div>
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
import types from '../utils/timeline-item-type.util';
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
      if (this.timelineItem) {
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
    isBpJr() {
      return this.timelineItem.product === 'bpjr';
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
  position: relative;
}
.flex-base {
  flex: 1;
}
.flex-stretch {
  flex: 6;
}
.product-tag {
  background-color: #ffff00;
  width: 10px;
  height: 10px;
  position: absolute;
  font-size: 10px;
  border-radius: 50%;
  top: 22px;
  left: 20px;
}
</style>
