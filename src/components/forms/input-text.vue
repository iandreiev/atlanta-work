<template>
  <label
    class="form-controller input"
    v-show="item.type == 'text' || i.type == 'url'"
  >
    <input
      :type="item.type"
      :id="item.id"
      v-model="item.id"
      v-bind="$attrs"
      v-bind:value="value"
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
    //   inputListeners(){
    //       let vm = this;

    //       return Object.assign({},
    //       this.$listeners,
    //       input(event){
    //           vm.$emit.()
    //       }
    //       )
    //   }
  }
};
</script>

<style>
</style>