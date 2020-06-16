<template>
  <nav>
    <div class="search-form">
      <input v-model="query" class="search-timeline-input" placeholder="Search Timeline">
      <button class="search-button" @click="searchClickHandler">
        <magnify-icon class="icon-2x"></magnify-icon>
      </button>
    </div>
    <div class="filter-header">Filter By:</div>
    <button
      v-for="([filter,filterType], index) in filters" :key="index"
      @click="filterClickHandler(filter, filterType)"
      class="filter-button"
      :class="{ 'filter-button-active': selectedFilter === filter }">
        {{filter}}
    </button>
  </nav>
</template>

<script>
import timelineItemTypeConfig from '../models/TimelineItemTypeConfig';

export default {
  name: 'SearchComponent',
  props: {
  },
  data() {
    return {
      filters: [
        ['All Work', 'All Work'],
        ...Object
          .keys(timelineItemTypeConfig)
          .map(key => [
            timelineItemTypeConfig[key].FilterName,
            timelineItemTypeConfig[key].KeyName])],
      selectedFilter: 'All Work',
      query: '',
    };
  },
  methods: {
    searchClickHandler() {
      this.$emit('search-query', this.query);
    },
    filterClickHandler(filter, filterType) {
      this.selectedFilter = filter;
      this.$emit('search-filter', filterType);
    },
  },
};
</script>

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
.filter-header {
  margin-bottom: 5px;
  font-size: 12px;
}
.filter-button {
  background-color: #fff;
  border: 1px solid #008181;
  border-radius: 3px;
  margin-right: 5px;
  height: 25px;
  font-size: 12px;
  font-weight: bold;
  color: #008181;
}

.filter-button-active {
  background-color: #ECFDFF;
}
</style>
