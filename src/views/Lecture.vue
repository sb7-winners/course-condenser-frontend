<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ lectureTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <ion-row>
            <ion-col>
              <div>
                <lecture-info
                  :title="lectureTitle"
                  :summary="lectureMainSummary"
                  :courseName="courseName"
                  :color="courseColor"
                />
                {{ $route.params.id }}
                <timestamp-list :timestamps="summaryTimestamps" />
              </div>
            </ion-col>

            <ion-col>
              <div>
                <video-player :id="videoId" />
                <transcript-viewer :timestamps="fullTimestamps" />
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import LectureInfo from "../components/LectureInfo.vue";
import TimestampList from "../components/TimestampList.vue";
import TranscriptViewer from "../components/TranscriptViewer.vue";
import VideoPlayer from "../components/VideoPlayer.vue";
import axios from "axios";

export default {
  name: "Folder",
  components: {
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    LectureInfo,
    TimestampList,
    TranscriptViewer,
    VideoPlayer,
  },
  data() {
    return {
      lectureTitle: "Lecture 1: Intro to Probability",
      lectureMainSummary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel erat tempor, rutrum tortor ac, feugiat mi. \
                               Proin interdum, ligula sed fermentum commodo, erat justo rutrum lacus, quis lobortis velit tellus in velit. \
                               Quisque felis arcu, consectetur ac imperdiet et, varius ac neque. Sed at sem eros. Donec turpis lectus, euismod \
                               sed egestas sit amet, vulputate sit amet ex. Nullam eros mauris, ullamcorper vitae varius at, sodales at mi.",
      courseName: "PSTAT 512B",
      courseColor: "#1554f6",
      summaryTimestamps: [
        ["Lorem ipsum, this is a sentence.", 1.38],
        ["Lorem ipsum, this is a sentence.", 180.1],
        ["Lorem ipsum, this is a sentence.", 390.451],
        ["Lorem ipsum, this is a sentence.", 510.612],
      ],
      fullTimestamps: [
        ["Lorem ipsum, this is a sentence.", 1.38],
        ["Lorem ipsum, this is a sentence.", 60.1],
        ["Lorem ipsum, this is a sentence.", 120.451],
        ["Lorem ipsum, this is a sentence.", 180.1],
        ["Lorem ipsum, this is a sentence.", 240.38],
        ["Lorem ipsum, this is a sentence.", 283.199],
        ["Lorem ipsum, this is a sentence.", 390.451],
        ["Lorem ipsum, this is a sentence.", 450.681],
        ["Lorem ipsum, this is a sentence.", 510.612],
      ],
      videoId: "bMDVSTnNHEU",
    };
  },
  mounted: function() {
    let id = $route.params.id;
    axios.get;
  },
};
</script>

<style scoped>
#container {
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
</style>
