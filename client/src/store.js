import Vue from 'vue';
import Vuex from 'vuex';
import TimelineMapper from './mappers/TimelineMapper';
import timelineService from './services/timeline.service';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loading: true,
    timelineItemSets: [],
    possibleQueries: [],
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loading = status;
    },
    SET_TIMELINE_DATA(state, timelineItemSets) {
      state.timelineItemSets = timelineItemSets;
    },
    SET_QUERIES_DATA(state, possibleQueries) {
      state.possibleQueries = possibleQueries;
    },
  },
  actions: {
    fetchTimelineItemsV1(context) {
      context.commit('SET_LOADING_STATUS', true);
      timelineService.getTimelineItemsV1().then((response) => {
        const { data } = response;
        const [timelineItemSets, possibleQueries] = TimelineMapper.mapV1(data);

        context.commit('SET_LOADING_STATUS', false);
        context.commit('SET_TIMELINE_DATA', timelineItemSets);
        context.commit('SET_QUERIES_DATA', possibleQueries);
      });
    },
    fetchTimelineItemsV2(context) {
      context.commit('SET_LOADING_STATUS', true);
      timelineService.getTimelineItemsV2().then((response) => {
        let { data } = response;

        data = TimelineMapper.mapv2tov1(data);
        const { timelineItemSets, possibleQueries } = TimelineMapper.mapV1(data);

        context.commit('SET_LOADING_STATUS', false);
        context.commit('SET_TIMELINE_DATA', timelineItemSets, possibleQueries);
      });
    },
  },
  getters: {
    timelineItemSets(state) {
      return state.timelineItemSets;
    },
    possibleQueries(state) {
      return state.possibleQueries;
    },
  },
});

export default store;
