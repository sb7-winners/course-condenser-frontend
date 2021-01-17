<template>
  <div :class="classname" @click="setTime">
    {{ sentence }}
    {{ humanTimestamp }}
  </div>
</template>

<script>
export default {
  props: {
    sentence: String,
    time: Number,
    currentTime: Number,
    inMenu: Boolean,
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

    classname: function() {
      return (this.time == this.currentTime ? "active" : "") + " separated-row";
    },
  },
  methods: {
    setTime() {
      if (this.inMenu) {
        this.$store.commit("set", {
          time: this.time,
        });
      }
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

.active {
  font-weight: bold;
}
</style>
