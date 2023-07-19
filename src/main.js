import { createApp } from "vue";
import App from "./App.vue";

//import and instantiate the mitt package for global bus
import mitt from "mitt";
const emitter = mitt();

//start vue instance based on component,
const app = createApp(App);

//configure the miit package instance as a global property
app.config.globalProperties.emitter = emitter;

//bind vue instance to app id html element
app.mount("#app");
