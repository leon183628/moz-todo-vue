<template>
  <input type="checkbox" :id="id" :checked="isDone" />
  <label :for="id">{{ label }}</label>
  <div
    class="ui red mini right floated circular icon button"
    @click="$emit('remove')"
  >
    <i class="remove icon"></i>
  </div>
</template>
<script>
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
    id: { required: true, type: String },
  },
  data() {
    return {
      isDone: this.done,
    };
  },
};
</script>
