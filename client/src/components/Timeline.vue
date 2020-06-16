<template>
  <div>
    <section class="timeline-podium">
      <h1>Timeline</h1>
      <SearchComponent
        @search-query="queryChangedHandler"
        @search-filter="filterChangedHandler"></SearchComponent>
      <TimelineItemSet @show-detail="showDetail"
        v-for="(timelineItemSet, index) in filtered"
        :key="index"
        :timelineitemset="timelineItemSet">
      </TimelineItemSet>
      <div @click="loadMoreHandler"><i class=""></i> Load More</div>
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
import axios from 'axios';
import SearchComponent from './SearchComponent.vue';
import TimelineItemSet from './TimelineItemSet.vue';
import DetailModal from './DetailModal.vue';
import timelineItemSets from '../mocks/timeline.mock';
import types from '../utils/timeline-item-type.util';
import TimelineMapper from '../mappers/TimelineMapper';
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
      timelineItemSets,
      detailTimelineItem: null,
      maxItems: 10,
      query: '',
      filter: ALL_WORKS,
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
  },
  computed: {
    filtered() {
      if (this.query === '' && this.filter === ALL_WORKS) {
        return this.timelineItemSets;
      }

      let count = 0;
      const newTimelineItemSets = [];
      this.timelineItemSets.forEach((timelineItemSet) => {
        const items = timelineItemSet.items.filter((timelineItem) => {
          if (count >= this.maxItems) {
            return false;
          }
          count += 1;
          return this.titleContains(timelineItem, this.query)
            && this.filterMatch(timelineItem, this.filter);
        });
        const newTimelineItemSet = new TimelineItemSetModel(items, timelineItemSet.month);

        if (newTimelineItemSet.items.length) {
          newTimelineItemSets.push(newTimelineItemSet);
        }
      });

      return newTimelineItemSets;
    },
  },
  mounted() {
    let apiUrl = 'http://localhost:3000/activities/v1';
    if (this.version === 'v2') {
      apiUrl = 'http://localhost:3000/activities/v2';
    }

    axios
      .get(apiUrl)
      .then((response) => {
        let { data } = response;

        if (this.version === 'v2') {
          data = TimelineMapper.mapv2tov1(data);
        }
        this.timelineItemSets = TimelineMapper.mapV1(data);
        return this.info;
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });
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
