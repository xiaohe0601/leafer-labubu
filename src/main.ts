import { createApp } from "vue";
import App from "./App.vue";
import "virtual:uno.css";
import "ress";

async function bootstrap() {
  const app = createApp(App);

  app.mount("#app");
}

void bootstrap();