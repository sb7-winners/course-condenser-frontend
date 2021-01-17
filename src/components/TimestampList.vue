<template>
  <div class="timestamps-container">
    <timestamp
      v-for="timestamp in timestamps"
      :key="timestamp[1]"
      :sentence="timestamp[0]"
      :time="timestamp[1]"
      :currentTime="currentSentenceTime"
      :inMenu="true"
      class="contents-timestamp"
    />
  </div>
</template>

<script>
import Timestamp from "./Timestamp.vue";

export default {
  props: {
    timestamps: Array,
  },
  data: function() {
    return {
      currentSentenceTime: 0,
    };
  },
  computed: {
    time: function() {
      return this.$store.state.time;
    },
  },
  watch: {
    time: function(val) {
      // Find last timestamp with time < current time, or if none exist, use first timestamp
      for (let i = this.timestamps.length - 1; i >= 0; i--) {
        if (this.timestamps[i][1] <= val || i == 0) {
          this.currentSentenceTime = this.timestamps[i][1];
          break;
        }
      }
    },
  },
  components: {
    Timestamp,
  },
};
</script>

<style>
.timestamps-container {
  padding: 20px 40px;
}

.contents-timestamp {
  margin: 20px 0;
}
</style>
