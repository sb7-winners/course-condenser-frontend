<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-grid class="grid">
          <ion-row>
            <ion-col class="folders-panel">
              <div class="folders">
                <course-folder
                  v-for="course in courses"
                  :key="course"
                  :name="course"
                  @open-course="onOpenCourse"
                />
              </div>
            </ion-col>
            <ion-col>
              <div>
                Lectures for current course
                {{ openCourse }}
              </div>
              <div>
                {{ token }}
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { auth } from "../firebase.js";
import axios from "axios";
import CourseFolder from "../components/CourseFolder.vue";

export default {
  name: "Folder",
  components: {
    CourseFolder,
    IonButtons,
    IonContent,
    IonGrid,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  data: function() {
    return {
      courses: ["PSTAT 512", "MATH 512", "CS 512", "ASTRO 512"],
      openCourse: "",
      token: "",
    };
  },
  mounted: function() {
    auth.currentUser.getIdToken().then(
      function(token) {
        console.log(token);
        axios
          .get("http://localhost:5000/getMostRecents", {
            headers: {
              Authorization: "Bearer " + token,
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
  methods: {
    onOpenCourse: function(newCourse) {
      this.openCourse = newCourse;
    },
  },
};
</script>

<style scoped>
#container {
  height: 100%;
  padding-top: 80px;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

.grid {
  height: 100%;
}

.folders-panel {
  background-color: var(--ion-color-light);
}

.folders {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
