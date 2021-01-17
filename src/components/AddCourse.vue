<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>New Course</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-label position="floating">Course Name</ion-label>
      <ion-input @ionChange="updatecourseName"></ion-input>
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
    course: { type: String },
  },
  data() {
    return {
      content: "Content",
      courseName: "",
    };
  },
  methods: {
    save() {
      console.log(this.$data);
      auth.currentUser.getIdToken().then(
        function (token) {
          axios
            .post(
              "https://e1f788fb04f4.ngrok.io/addCourse",
              {
                course_name: this.courseName,
              },
              {
                headers: {
                  Authorization: token,
                },
              }
            )
            .then((response) => {
              console.log(response);
              this.$store.commit("refresh");
            })
            .catch((err) => {
              console.log(err);
              this.$store.commit("refresh");
            });
        }.bind(this)
      );
    },
    updatecourseName() {
      this.courseName = event.target.value;
    },
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar },
});
</script>