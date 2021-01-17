<template>
  <div class="lecture-file" @click="$emit('click')">{{ data.title }}</div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style>
.lecture-file {
  padding: 20px 0;
  border-bottom: 1px solid black;
  cursor: pointer;
}

.lecture-file:last-child {
  border-bottom: 0;
}
</style>
