<template>
  <timestamp
    v-for="timestamp in timestamps"
    :key="timestamp[1]"
    :sentence="timestamp[0]"
    :time="timestamp[1]"
  />
</template>

<script>
import Timestamp from "./Timestamp.vue";

export default {
  props: {
    timestamps: Array,
  },
  components: {
    Timestamp,
  },
};
</script>

<style></style>
