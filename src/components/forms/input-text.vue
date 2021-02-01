<template>
  <label
    class="form-controller input"
    v-show="item.type == 'text' || item.type == 'url'"
  >
    <input
      :type="item.type"
      :id="item.id"
      v-on:input="$emit('input', $event.target.value)"
    />
    <span class="placeholder">{{ item.placeholder }}</span>
  </label>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  computed:{

  }
};
</script>

<style>
</style>