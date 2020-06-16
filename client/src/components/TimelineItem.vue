<template>
  <div>
    <div class="spacer"></div>
    <article class="timeline-item-podium">
      <div class="flex-thin">
        <div class="timeline-image-podium" :class="{'jr-bg': isBpJr}">
        <img
          v-if="this.timelineItem && this.timelineItem.image"
          class="timeline-item-image"
          v-bind:src="require('../../../assets/topics/' + this.timelineItem.image)"
          alt="">
        </div>
        <div v-if="isBpJr" class="product-tag">Jr.</div>
      </div>
      <div class="flex-stretch">
        <div class="item-title">{{ timelineItem.title }}</div>
        <div>{{ formattedDate }} · {{ formattedTime }}</div>
      </div>
      <div class="flex-base">
        <div v-if="isScoreType">
          Score <b>{{ timelineItem.score }}/{{ timelineItem.ofScore }}</b>
        </div>
        <div class="action" @click="itemClickHandler()" v-if="isViewType">
          <eye-outline-icon></eye-outline-icon> View Work
        </div>
        <div class="action" @click="deleteItemHandler(timelineItem.id)">
          <delete-icon></delete-icon>
          Delete
        </div>
      </div>
    </article>
  </div>
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
    deleteItemHandler(itemId) {
      this.$emit('delete-item', itemId);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeline-item-image {
  position: absolute;
  top: 0.55rem;
  left: 0.5rem;
  width: 1.873rem;
  height: 1.873rem;
}
.timeline-image-podium {
  background-color: #01CCCC;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
}
.timeline-item-podium {
  display: flex;
  border: 1px solid #CBCCCD;
  padding: 1.25rem 0.625rem;
  border-radius:5px;
  font-size: 0.75rem;
}
.item-title {
  font-weight: bold;
}
.flex-thin {
  position: relative;
  margin-right: 1.25rem;
}
.flex-base {
  justify-content: flex-end;
  display: flex;
  flex: 1.5;
  color: #00807E;
}
.flex-base div {
  padding-right: 1.25rem;
}
.flex-stretch {
  flex: 5.5;
}
.product-tag {
  background-color: #FECC68;
  border: 1px solid #000;
  width: 0.9375rem;
  height: 0.9375rem;
  position: absolute;
  font-size: 0.625rem;
  font-weight: bold;
  line-height: 0.9375rem;
  border-radius: 50%;
  top: 1.875rem;
  left: 1.875rem;
  text-align: center;
}
.action {
  cursor: pointer;
  font-weight: bold;
}
.jr-bg {
  background-color: #F4B80D;
}
.spacer {
  padding: 0;
  margin: 0;
  margin-left: 3.125rem;
  border-left: 1px solid #CBCCCD;
  width: 90%;
  height: 1.25rem;
}
</style>
