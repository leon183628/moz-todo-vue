<template>
  <div id="app">
    <div class="ui doubling stackable grid container">
      <div class="ten wide centered column">
        <h1 class="ui centered blue huge top header">My ToDo List</h1>

        <ToDoForm @todo-added="addToDo"></ToDoForm>
        <div class="ui middle aligned divided animated big list">
          <ul>
            <li v-for="item in ToDoItems" :key="item.id">
              <ToDoItem
                :label="item.label"
                :done="item.done"
                :id="item.id"
                @remove="ToDoItems.splice(index, 1)"
              ></ToDoItem>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoItem from "./components/ToDoItem.vue";
import ToDoForm from "./components/ToDoForm.vue";
import uniqueId from "lodash.uniqueid";

export default {
  name: "app",
  components: {
    ToDoItem,
    ToDoForm,
  },
  data() {
    return {
      ToDoItems: [
        { id: uniqueId("todo-"), label: "Learn Vue", done: false },
        {
          id: uniqueId("todo-"),
          label: "Create a Vue project with the CLI",
          done: true,
        },
        { id: uniqueId("todo-"), label: "Have fun", done: true },
        { id: uniqueId("todo-"), label: "Create a to-do list", done: false },
      ],
    };
  },
  methods: {
    addToDo(toDoLabel) {
      this.ToDoItems.push({
        id: uniqueId("todo-"),
        label: toDoLabel,
        done: false,
      });
      this.label = "";
    },
  },
};
</script>

<style>
.ui.header.top {
  margin-top: 1rem;
}
</style>
