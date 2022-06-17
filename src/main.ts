import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

// Styles
import "./styles/index.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

// Layouts
import useLayout from "@/screens/layouts";

const { LayoutDefault, LayoutMap } = useLayout();

createApp(App)
  .use(router)
  .component("LayoutDefault", LayoutDefault)
  .component("LayoutMap", LayoutMap)
  .mount("#app");
