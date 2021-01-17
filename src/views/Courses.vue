<template>
  <ion-content :fullscreen="true">
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon @click="openCreateLecture" name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
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

          <!-- <ion-item-divider>
              <ion-label> Basic Item Divider </ion-label>
            </ion-item-divider> -->
          <ion-col>
            <div v-if="openCourse">
              <ion-text>
                <h1>
                  {{ openCourse }}
                </h1>
              </ion-text>
            </div>
            <ion-text v-else>
              <h2
                style="
                  display: flex;
                  height: 100%;
                  align-items: center;
                  justify-content: center;
                "
              >
                Select a course to get started
              </h2>
            </ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonHeader,
  IonTitle,
  IonToolbar,
  modalController,
} from "@ionic/vue";
import { auth } from "../firebase.js";
import axios from "axios";
import CourseFolder from "../components/CourseFolder.vue";
import AddLecture from "../components/AddLecture.vue";
export default {
  name: "Folder",
  components: {
    CourseFolder,
    IonContent,
    IonGrid,
    IonCol,
    IonRow,
    IonHeader,
    IonTitle,
    IonToolbar,
  },
  data: function () {
    return {
      courses: ["PSTAT 512", "MATH 512", "CS 512", "ASTRO 512"],
      openCourse: "",
    };
  },
  mounted: function () {
    auth.currentUser.getIdToken().then(
      function (token) {
        axios
          .get("http://localhost:5000/getMostRecents", {
            headers: {
              Authorization: token,
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
    async openCreateLecture() {
      const modal = await modalController.create({
        component: AddLecture,
        componentProps: { title: "Test" },
      });
      return modal.present();
    },
    onOpenCourse: function (newCourse) {
      this.openCourse = newCourse;
    },
  },
};
</script>

<style scoped>
#container {
  height: 100%;
  padding-top: 80px;
  /* text-align: center; */
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
  /* background-color: var(--ion-color-light); */
}

.folders {
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
}
</style>
