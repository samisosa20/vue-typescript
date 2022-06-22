import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

// Styles
import "./styles/index.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

// Layouts
import useLayout from "@/screens/layouts";

// Store
import useModels from "@/models"

const { LayoutDefault, LayoutMap } = useLayout();

const {useMutations} = useModels()

createApp(App)
  .use(router)
  .use(useMutations)
  .component("LayoutDefault", LayoutDefault)
  .component("LayoutMap", LayoutMap)
  .mount("#app");
