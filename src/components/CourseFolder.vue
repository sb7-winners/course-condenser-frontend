<template>
  <div class="container" @click="$emit('open-course', name)">
    <ion-icon class="course-folder-icon" name="book" size="large" />
    {{ name }}
  </div>
</template>

<script>
import { IonIcon } from "@ionic/vue";

export default {
  props: {
    name: String,
  },
  components: {
    IonIcon,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.course-folder-icon {
  margin-bottom: 1rem;
}
</style>
