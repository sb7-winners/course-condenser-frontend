<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>New Lecture for {{ course.course_name }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-label position="floating">Lecture Name</ion-label>
      <ion-input @ionChange="updateLectureName"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Youtube URL</ion-label>
      <ion-input @ionChange="updateLectureURL"></ion-input>
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
      console.log(this.$data);
      auth.currentUser.getIdToken().then(
        function(token) {
          axios
            .post(
              "http://e1f788fb04f4.ngrok.io/processLecture",
              {
                url: this.lectureURL,
                title: this.lectureName,
                course_id: this.course.course_id,
              },
              {
                headers: {
                  Authorization: token,
                },
              }
            )
            .then((response) => {
              console.log(response);
            })
            .catch((err) => {
              console.log(err);
            });
        }.bind(this)
      );
    },
    updateLectureName(event) {
      console.log(event);
      this.lectureName = event.target.value;
    },
    updateLectureURL(event) {
      console.log(event);
      this.lectureURL = event.target.value;
    },
  },
});
</script>
