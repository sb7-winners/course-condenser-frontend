<template>
  <span :style="spanStyle">
    <ion-icon name="book"></ion-icon>
    {{ name }}
  </span>
</template>

<script>
import { IonIcon } from "@ionic/vue";

export default {
  props: {
    name: String,
    color: String,
  },
  computed: {
    spanStyle: function() {
      return "color: " + this.color;
    },
  },
  components: {
    IonIcon,
  },
};
</script>

<style></style>
