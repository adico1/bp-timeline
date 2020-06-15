<template>
  <section>
    <h1>Timeline</h1>
    <SearchComponent></SearchComponent>
    <TimelineItemSet
      v-for="(timelineItemSet, index) in timelineItemSets"
      :key="index"
      :timelineitemset="timelineItemSet">
    </TimelineItemSet>
    <i class=""></i> Load More
  </section>
</template>

<script>
import SearchComponent from './SearchComponent.vue';
import TimelineItemSet from './TimelineItemSet.vue';
import timelineItemSets from '../mocks/timeline.mock';

// eslint-disable-next-line
console.log('timelineItemSets', timelineItemSets);

export default {
  name: 'Timeline',
  props: {
    msg: String,
  },
  components: {
    SearchComponent,
    TimelineItemSet,
  },
  data() {
    return {
      timelineItemSets,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-timeline-input {
  width: 16.25rem;
  height: 1.5rem;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 18px;
}
.search-button {
  padding: 0;
  margin: 0;
  width: 1.5rem;
  height: 1.5rem;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 18px;
}
.icon-2x {
  font-size: 16px;
}
.search-form {
  margin: 10px 0
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
