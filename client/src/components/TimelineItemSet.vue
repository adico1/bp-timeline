<template>
  <section>
    <div>{{ timelineitemset.month }}</div>
    <TimelineItem
      v-for="(timelineitem, index) in timelineitemset.items"
      :key="index"
      :timeLineItem="timelineitem">
    </TimelineItem>
  </section>
</template>

<script>
// @ is an alias to /src
import TimelineItem from './TimelineItem.vue';
import TimelineItemSet from '../models/TimelineItemSetModel';

export default {
  name: 'Timeline',
  props: {
    timelineitemset: TimelineItemSet,
  },
  components: {
    TimelineItem,
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
