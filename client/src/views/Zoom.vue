<template>
  <div class="detail">
    <DetailModal :item="item"/>
  </div>
</template>

<script>
import axios from 'axios';
import TimelineMapper from '../mappers/TimelineMapper';
// @ is an alias to /src
import DetailModal from '@/components/DetailModal.vue';

export default {
  name: 'detail',
  components: {
    DetailModal,
  },
  data() {
    return {
      item: null,
    };
  },
  mounted() {
    if (this.item) { return; }

    axios
      .get('http://localhost:3000/activities/v1')
      .then((response) => {
        response.data.forEach((item) => {
          if (item.id === this.$route.params.id) {
            this.item = TimelineMapper.mapItem(item);
          }
        });
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
