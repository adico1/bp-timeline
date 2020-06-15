<template>
  <div>
    <section class="timeline-podium">
      <h1>Timeline</h1>
      <SearchComponent></SearchComponent>
      <TimelineItemSet @show-detail="showDetail"
        v-for="(timelineItemSet, index) in timelineItemSets"
        :key="index"
        :timelineitemset="timelineItemSet">
      </TimelineItemSet>
      <i class=""></i> Load More
    </section>
    <div class="modal-podium" :class="{ 'detail-modal': detailTimelineItem === null }">
      <DetailModal
        :item="detailTimelineItem"
         />
      </div>
  </div>
</template>

<script>
import SearchComponent from './SearchComponent.vue';
import TimelineItemSet from './TimelineItemSet.vue';
import DetailModal from './DetailModal.vue';
import timelineItemSets from '../mocks/timeline.mock';

export default {
  name: 'Timeline',
  props: {
    msg: String,
  },
  components: {
    SearchComponent,
    TimelineItemSet,
    DetailModal,
  },
  data() {
    return {
      timelineItemSets,
      detailTimelineItem: null,
    };
  },
  methods: {
    showDetail(timelineItem) {
      // eslint-disable-next-line no-console
      console.log('TimelineItemSet=>itemClickHandler', timelineItem);
      this.detailTimelineItem = timelineItem;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeline-podium {
  width: 100;
}
.detail-modal {
  display: none;
}
.modal-podium {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  padding:0;
  margin: 0;
}
</style>
