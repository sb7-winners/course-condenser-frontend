<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>New Lecture for {{ course.course_name }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-label position="floating">Lecture Name</ion-label>
      <ion-input :ionChange="(lectureName = $event.target.value)"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Youtube URL</ion-label>
      <ion-input
        :ionChange="
          lectureURL = $event.target.value;
        "
      ></ion-input>
    </ion-item>

    <br />
    <ion-button @click="save" color="dark">Save</ion-button>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/vue";
import { defineComponent } from "vue";
import { auth } from "../firebase";
import axios from "axios";

export default defineComponent({
  name: "Modal",
  props: {
    course: { type: Object },
  },
  data() {
    return {
      content: "Content",
      lectureName: "",
      lectureURL: "",
    };
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar },
  methods: {
    save() {
      console.log(this.lecture_url);
      auth.currentUser.getIdToken().then(
        function(token) {
          axios
            .post("http://localhost:5000/processLecture", {
              headers: {
                Authorization: token,
              },
              data: {
                url: this.lectureURL,
                title: this.lectureName,
                course_id: this.course.course_id,
              },
            })
            .then((response) => {
              console.log(response);
            })
            .catch((err) => {
              console.log(err);
            });
        }.bind(this)
      );
    },
  },
});
</script>
