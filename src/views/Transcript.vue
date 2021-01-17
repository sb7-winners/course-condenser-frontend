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
                  <lecture-info :title="lectureTitle" :summary="lectureMainSummary" />
                  <timestamps :data="timestamps" />
                </div>
            </ion-col>

            <ion-col>
              <div>
                Placeholder secondary content
              </div>
            </ion-col>
            </ion-row>
          </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonSplitPane, IonTitle, IonToolbar } from '@ionic/vue';
import LectureInfo from '../components/LectureInfo.vue';

export default {
  name: 'Folder',
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
    LectureInfo
  },
  data() {
      return {
          lectureTitle: 'Lecture 1: Intro to Probability',
          lectureMainSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel erat tempor, rutrum tortor ac, feugiat mi. \
                               Proin interdum, ligula sed fermentum commodo, erat justo rutrum lacus, quis lobortis velit tellus in velit. \
                               Quisque felis arcu, consectetur ac imperdiet et, varius ac neque. Sed at sem eros. Donec turpis lectus, euismod \
                               sed egestas sit amet, vulputate sit amet ex. Nullam eros mauris, ullamcorper vitae varius at, sodales at mi.'
      };
  },
}
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