<template>
  <div :class="classname" @click="setTime">
    <span>{{ sentence }}</span>
    <span class="timestamp">{{ humanTimestamp }}</span>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.sentence, this.time);
  },
  props: {
    sentence: String,
    time: String,
    currentTime: Number,
    inMenu: Boolean,
  },
  computed: {
    humanTimestamp: function () {
      if (this.time) {
        return this.time.substring(0, 5);
      } else {
        return "00:00";
      }
    },

    numericTime: function () {
      console.log(this.time);
      if (this.time) {
        let minutes = this.time.substring(0, 2);
        let seconds = this.time.substring(3, 5);
        return parseInt(minutes) * 60 + parseInt(seconds);
      } else {
        return 0;
      }
    },

    classname: function () {
      return (
        (this.numericTime == this.currentTime ? "active" : "") +
        " separated-row"
      );
    },
  },
  methods: {
    setTime() {
      if (this.inMenu) {
        this.$store.commit("set", {
          time: this.numericTime,
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

.timestamp {
  color: var(--ion-color-tertiary);
}

.active {
  font-weight: bold;
}
</style>
