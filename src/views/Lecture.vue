<template>
  <ion-page>
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
                <timestamp-list :timestamps="summaryTimestamps" />
              </div>
            </ion-col>

            <ion-col>
              <div>
                <video-player v-if="videoId != ''" :id="videoId" />
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
import { IonCol, IonContent, IonGrid, IonPage } from "@ionic/vue";
import LectureInfo from "../components/LectureInfo.vue";
import TimestampList from "../components/TimestampList.vue";
import TranscriptViewer from "../components/TranscriptViewer.vue";
import VideoPlayer from "../components/VideoPlayer.vue";
import axios from "axios";
import { auth } from "../firebase";

export default {
  name: "Folder",
  components: {
    IonCol,
    IonContent,
    IonGrid,
    IonPage,
    LectureInfo,
    TimestampList,
    TranscriptViewer,
    VideoPlayer,
  },
  data() {
    return {
      lectureTitle: "",
      lectureMainSummary: "",
      courseName: "PSTAT 512B",
      courseColor: "#1554f6",
      summaryTimestamps: [],
      fullTimestamps: [],
      videoId: "",
    };
  },
  mounted: function() {
    let id = this.$route.params.id;
    auth.currentUser.getIdToken().then(
      function(token) {
        axios
          .get("http://e1f788fb04f4.ngrok.io/getLecture", {
            headers: {
              Authorization: token,
            },
            params: {
              lecture_id: id,
            },
          })
          .then((res) => {
            this.lectureTitle = res.data.title;
            this.lectureMainSummary = res.data.key_points;
            this.courseName = "";
            this.courseColor = "#000000";
            this.fullTimestamps = res.data.sentences;

            // From StackOverflow
            var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            if (res.data.url.match(p)) {
              this.videoId = RegExp.$1;
            }

            let summarySentences = res.data.summarized_transcript.split(".");
            let tmpData = [];
            for (let sentence in summarySentences) {
              tmpData.push({
                sentence: sentence,
                start_time: res.data.sentences.find(
                  (element) => element.sentence == sentence
                ).start_time,
              });
            }
            this.summaryTimestamps = tmpData;

            console.log(this);
          })
          .catch((err) => {
            console.log(err);
          });
      }.bind(this)
    );
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
