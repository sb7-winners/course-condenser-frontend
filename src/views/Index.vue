<template>
  <ion-content :fullscreen="true" v-show="!hide">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <div id="container">
      <strong class="capitalize">Login</strong>
      <div @click="hide = true" id="firebaseui-auth-container"></div>
    </div>
  </ion-content>
</template>

<script>
import {
  // IonButtons,
  IonContent,
  IonHeader,
  // IonMenuButton,
  // IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { auth } from "../firebase";
let firebaseui = require("firebaseui");
import firebase from "firebase/app";
export default {
  data() {
    return {
      hide: false,
    };
  },
  mounted() {
    let ui = new firebaseui.auth.AuthUI(auth);
    ui.start("#firebaseui-auth-container", {
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      signInSuccessUrl: location.href + "courses",
    });
  },
  components: {
    // IonButtons,
    IonContent,
    IonHeader,
    // IonMenuButton,
    // IonPage,
    IonTitle,
    IonToolbar,
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