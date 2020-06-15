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
import TimelineItemType from '../models/TimelineItemType';
import types from '../models/TimelineItemTypeAllow';

function formatDate(date) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  return date.toLocaleDateString('en-US', options);
}

function formatTime(date) {
  const hours = `${date.getHours()}`.padStart(2, '0');
  const minutes = `${date.getMinutes()}`.padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';

  return `${hours}:${minutes} ${ampm}`;
}

export default {
  name: 'TimelineItem',
  props: {
    timelineItem: TimelineItemModel,
  },
  computed: {
    formattedDate() {
      if (this.timelineItem) {
        return formatDate(this.timelineItem.date);
      }

      return '';
    },
    formattedTime() {
      if (this.timelineItem) {
        return formatTime(this.timelineItem.date);
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
      // eslint-disable-next-line no-console
      console.log('isViewType', types[TimelineItemType[this.timelineItem.type]]);
      return types[TimelineItemType[this.timelineItem.type]].Zoom;
    },
    isScoreType() {
      return types[TimelineItemType[this.timelineItem.type]].Score;
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
