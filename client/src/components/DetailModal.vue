<template>
  <div :v-if="item" class="detail-model-podium">
    <div class="flex-center">
      <div class="close-icon-podium" @click="closeClickHandler">
        <close-circle-outline class="icon-2x"></close-circle-outline>
      </div>
      <div class="dialog-content">
        <div class="item-info-podium">
          <div :v-if="item.image">
            <img
              class="timeline-item-image"
              v-bind:src="require('../../../assets/topics/' + item.image)"
            />
          </div>
          <div><h1>{{ item.title }}</h1></div>
          <div>{{ formattedDate }} · {{ formattedTime }}</div>
        </div>
        <div class="teacher-review">
          <br>
          <h2>{{ item.teacherComment }}</h2><br>
          <div v-if="item.score">Score {{ item.score }}/{{ item.ofScore }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimelineItemModel from '../models/TimelineItemModel';
import DateUtil from '../utils/date-util';

export default {
  name: 'DetailModel',
  props: {
    item: TimelineItemModel,
  },
  computed: {
    formattedDate() {
      if (this.item) {
        return DateUtil.formatDate(this.item.date);
      }

      return '';
    },
    formattedTime() {
      if (this.item) {
        return DateUtil.formatTime(this.item.date);
      }

      return '';
    },
    getImage() {
      if (this.item) {
        return `../../../assets/topics/${this.item.image}`;
      }

      return '';
    },
  },
  data() {
    return {
      filters: ['All Work', 'Movie', 'Quiz', 'Easy Quiz'],
      selectedFilter: 'All Work',
    };
  },
  methods: {
    closeClickHandler() {
      this.$emit('close-modal');
    },
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
.timeline-item-image {
  margin-top: 20px;
  width: 60px;
  height: 60px;
  background-color: #008181;
  border-radius: 50%;
}
.teacher-review {
  margin-left: 20px;
}
</style>
