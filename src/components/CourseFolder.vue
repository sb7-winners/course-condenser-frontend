<template>
  <div class="container" @click="$emit('open-course', data)">
    <ion-icon class="course-folder-icon" :name="icon" size="large" />
    {{ name }}
  </div>
</template>

<script>
import { IonIcon } from "@ionic/vue";

export default {
  props: {
    name: String,
    icon: { type: String, default: "Book" },
    data: Object,
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
  padding: 30px;
  width: 150px;
  height: 150px;
  align-items: center;
  transition: all 1s;
}

.container:hover {
  background-color: rgb(223, 223, 223);
}
.course-folder-icon {
  margin-bottom: 1rem;
}
</style>
