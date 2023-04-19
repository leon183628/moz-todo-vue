import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

import "./assets/reset.css";
import "C:/Workspace/ToDoList2/moz-todo-vue/node_modules/semantic-ui-css/semantic.min.css";
import semantic from "C:/Workspace/ToDoList2/moz-todo-vue/node_modules/semantic-ui-css/semantic.min.js";

App.use(semantic);
