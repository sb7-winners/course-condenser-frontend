<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>New Lecture for {{course}}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-label position="floating">Lecture Name</ion-label>
      <ion-input></ion-input>
    </ion-item>
    <br />
    <ion-button @click="save" color="dark">Save</ion-button>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    course: { type: String},
  },
  data() {
    return {
      content: "Content",
    };
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar },
});
</script>