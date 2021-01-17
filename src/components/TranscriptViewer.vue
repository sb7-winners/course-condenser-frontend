<template>
  <div class="transcript">
    <div v-for="timestamp in timestamps" :key="timestamp[1]">
      <timestamp
        :sentence="timestamp.sentence"
        :time="timestamp.start_time"
        :currentTime="currentSentenceTime"
        :inMenu="false"
        class="indiv-timestamp"
      />
    </div>
  </div>
</template>

<script>
import Timestamp from "./Timestamp.vue";

function numericTime(time) {
  let minutes = time.substring(0, 2);
  let seconds = time.substring(3, 5);
  return parseInt(minutes) * 60 + parseInt(seconds);
}

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
        if (numericTime(this.timestamps[i].start_time) <= val || i == 0) {
          this.currentSentenceTime = numericTime(this.timestamps[i].start_time);
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
.transcript {
  max-height: 40vh;
  overflow-y: scroll;
}

.indiv-timestamp {
  margin: 10px 0;
}
</style>
