<template>
  <youtube-iframe
    :video-id="id"
    @player-setup="onPlayerSetup"
    @playing="onPlaying"
  />
</template>
<script>
export default {
  props: {
    id: String,
  },
  data: function() {
    return {
      player: null,
    };
  },
  mounted: function() {
    setInterval(
      function() {
        if (this.player != null) {
          let newTime = this.player.getCurrentTime();
          this.$store.commit("set", {
            time: newTime,
          });
        }
      }.bind(this),
      1000
    );
  },
  methods: {
    onPlayerSetup: function(player) {
      if (this.player == null) {
        this.player = player;
        console.log(this.player);
      }
    },
  },
};
</script>

<style></style>
