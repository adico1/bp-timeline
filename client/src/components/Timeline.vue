<template>
  <div>
    <section class="timeline-podium">
      <h1>Timeline</h1>
      <SearchComponent
        @search-query="queryChangedHandler"
        @search-filter="filterChangedHandler"
        :possibleQueries="this.$store.getters.possibleQueries"></SearchComponent>
      <TimelineItemSet @show-detail="showDetail"
        v-for="(timelineItemSet, index) in filtered"
        :key="index"
        :timelineitemset="timelineItemSet"
        @delete-item="deleteItemHandler">
      </TimelineItemSet>
      <div class="load-more-podium" @click="loadMoreHandler">
        <span><chevron-down-icon></chevron-down-icon> Load More</span>
      </div>
    </section>
    <div class="modal-podium" :class="{ 'detail-modal': detailTimelineItem === null }">
      <DetailModal
        :item="detailTimelineItem"
        @close-modal="modelCloseHandler"
         />
      </div>
  </div>
</template>

<script>
import SearchComponent from './SearchComponent.vue';
import TimelineItemSet from './TimelineItemSet.vue';
import DetailModal from './DetailModal.vue';
import types from '../utils/timeline-item-type.util';
import TimelineItemSetModel from '../models/TimelineItemSetModel';
import TimelineItemType from '../models/TimelineItemType';

const ALL_WORKS = 'All Work';

export default {
  name: 'Timeline',
  props: {
    version: String,
  },
  components: {
    SearchComponent,
    TimelineItemSet,
    DetailModal,
  },
  data() {
    return {
      loading: true,
      errored: false,
      timelineItemSets: [],
      detailTimelineItem: null,
      maxItems: 10,
      query: '',
      filter: ALL_WORKS,
      deleted: [],
      possibleQueries: [],
    };
  },
  methods: {
    showDetail(timelineItem) {
      if (types.getZoomByType(timelineItem.type)) {
        this.detailTimelineItem = timelineItem;
      }
    },
    queryChangedHandler(query) {
      this.query = query;
    },
    filterChangedHandler(filter) {
      this.filter = filter;
    },
    titleContains(timelineItem, query) {
      return timelineItem.title.indexOf(query) > -1;
    },
    filterMatch(timelineItem, filter) {
      if (filter === ALL_WORKS) {
        return true;
      }
      return timelineItem.type === TimelineItemType[filter];
    },
    modelCloseHandler() {
      this.detailTimelineItem = null;
    },
    loadMoreHandler() {
      this.maxItems += 10;
    },
    deleteItemHandler(itemId) {
      if (this.deleted.indexOf(itemId) > -1) {
        return;
      }
      this.deleted.push(itemId);
    },
  },
  computed: {
    filtered() {
      let count = 0;
      const newTimelineItemSets = [];
      const timelineItemSetsEx = this.$store.getters.timelineItemSets;
      if (timelineItemSetsEx) {
        timelineItemSetsEx.forEach((timelineItemSet) => {
          const items = timelineItemSet.items.filter((timelineItem) => {
            if (this.deleted.indexOf(timelineItem.id) > -1) {
              return false;
            }

            if (count >= this.maxItems) {
              return false;
            }
            count += 1;

            if (this.query === '' && this.filter === ALL_WORKS) {
              return true;
            }

            return this.titleContains(timelineItem, this.query)
              && this.filterMatch(timelineItem, this.filter);
          });
          const newTimelineItemSet = new TimelineItemSetModel(items, timelineItemSet.month);

          if (newTimelineItemSet.items.length) {
            newTimelineItemSets.push(newTimelineItemSet);
          }
        });
      }
      return newTimelineItemSets;
    },
  },
  mounted() {
    if (this.version === 'v2') {
      this.$store.dispatch('fetchTimelineItemsV2');
      return;
    }
    this.$store.dispatch('fetchTimelineItemsV1');
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
.load-more-podium {
  text-align: center;
}
.load-more-podium span {
  cursor: pointer;
}
</style>
