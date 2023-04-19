<template>
  <form @submit.prevent="onSubmit">
    <label for="new-todo-input"> </label>
    <div class="ui fluid huge action green input">
      <input
        type="text"
        id="new-todo-input"
        name="new-todo"
        placeholder="請輸入待辦事項"
        autocomplete="off"
        v-model="label"
      />
      <button type="submit" class="ui icon button">
        <i class="large plus icon"></i>
      </button>
    </div>
  </form>
</template>

<script>
import "C:/Workspace/ToDoList2/moz-todo-vue/node_modules/semantic-ui-css/semantic.min.css";
import "C:/Workspace/ToDoList2/moz-todo-vue/node_modules/semantic-ui-css/semantic.min.js";

export default {
  data() {
    return {
      label: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.label === "") {
        return;
      }
      this.$emit("todo-added", this.label);
    },
  },
};
</script>
