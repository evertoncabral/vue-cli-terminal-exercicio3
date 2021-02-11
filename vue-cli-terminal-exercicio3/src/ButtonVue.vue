<template>
  <button @click="click">Clicked {{ counter }} times </button>
</template>

<script>
export default {
  name: "ButtonVue",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    click() {
      this.counter++;
    },
  },
}
</script>


