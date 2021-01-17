<template>
  <div class="separated-row" @click="setTime">
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
        Math.floor(this.time / 60).toString() +
        ":" +
        Math.round(this.time % 60)
          .toString()
          .padStart(2, "0")
      );
    },
  },
  methods: {
    setTime() {
      this.$store.commit("set", {
        time: this.time,
      });
      console.log(this.$store.state.time);
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
