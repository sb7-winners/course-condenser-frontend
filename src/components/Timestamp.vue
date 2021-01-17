<template>
  <div class="separated-row">
    {{ sentence }}
    {{ humanTimestamp }}
  </div>
</template>

<script>
export default {
  props: {
    sentence: String,
    time: Number,
  },
  computed: {
    humanTimestamp: function() {
      return (
        Math.round(this.time / 60).toString() +
        ":" +
        Math.round(this.time % 60)
          .toString()
          .padStart(2, "0")
      );
    },
  },
};
</script>

<style>
.separated-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
