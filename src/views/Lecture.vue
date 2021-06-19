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
// import axios from "axios";
// import { auth } from "../firebase";

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
      lectureTitle: "Random Walks",
      lectureMainSummary: `An elementary example of a random walk is the random walk on the integer number line, Z , which starts at 0 and at each step moves +1 or −1 with equal probability. Other examples include the path traced by a molecule as it travels in a liquid or a gas (see Brownian motion), the search path of a foraging animal, the price of a fluctuating stock and the financial status of a gambler: all can be approximated by random walk models, even though they may not be truly random in reality.

`,
      courseName: "6.0002",
      courseColor: "#1554f6",
      summaryTimestamps: [
        [
          "As illustrated by those examples, random walks have applications to engineering and many scientific fields including ecology, psychology, computer science, physics, chemistry, biology, economics, and sociology.",
          "10:05",
        ],
        [
          "In the simplest context the walk is in discrete time, that is a sequence of random variables.",
          "20:53",
        ],

        [
          "Specific cases or limits of random walks include the Lévy flight and diffusion models such as Brownian motion. ",
          "53:23",
        ],
      ],
      fullTimestamps: [],
      videoId: "6wUD_gp5WeE",
    };
  },
  mounted: function () {
    return;
    //   auth.currentUser.getIdToken().then(
    //     function (token) {
    //       axios
    //         .get("http://e1f788fb04f4.ngrok.io/getLecture", {
    //           headers: {
    //             Authorization: token,
    //           },
    //           params: {
    //             lecture_id: id,
    //           },
    //         })
    //         .then((res) => {
    //           this.lectureTitle = res.data.title;
    //           this.lectureMainSummary = res.data.key_points;
    //           this.courseName = "";
    //           this.courseColor = "#000000";
    //           this.fullTimestamps = res.data.sentences;

    //           // From StackOverflow
    //           var p =
    //             /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    //           if (res.data.url.match(p)) {
    //             this.videoId = RegExp.$1;
    //           }

    //           let summarySentences = res.data.summarized_transcript.split(".");
    //           let tmpData = [];
    //           for (let sentence in summarySentences) {
    //             tmpData.push({
    //               sentence: sentence,
    //               start_time: res.data.sentences.find(
    //                 (element) => element.sentence == sentence
    //               ).start_time,
    //             });
    //           }
    //           this.summaryTimestamps = tmpData;

    //           console.log(this);
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     }.bind(this)
    //   );
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
