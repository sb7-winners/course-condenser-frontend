<template>
  <div @click="$emit('click')">{{ data.title }}</div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style></style>
