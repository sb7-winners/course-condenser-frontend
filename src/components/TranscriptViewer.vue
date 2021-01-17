<template>
  <div v-for="timestamp in timestamps" :key="timestamp[1]">
    {{ timestamp[0] }}
  </div>
</template>

<script>
export default {
  props: {
    timestamps: Array,
  },
};
</script>

<style></style>
