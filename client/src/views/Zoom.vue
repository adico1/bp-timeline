<template>
  <div class="detail">
    <DetailModal :item="item"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DetailModal from '@/components/DetailModal.vue';

export default {
  name: 'detail',
  components: {
    DetailModal,
  },
  computed: {
    item() {
      let retItem = null;
      const matchId = this.$route.params.id;

      const timelineItemSetsEx = this.$store.getters.timelineItemSets;
      timelineItemSetsEx.forEach((timelineItemSet) => {
        timelineItemSet.items.forEach((item) => {
          if (item.id === matchId) {
            retItem = item;
          }
        });
      });

      return retItem;
    },
  },
  mounted() {
    if (this.item) { return; }

    this.$store.dispatch('fetchTimelineItemsV1');
  },
};
</script>
