import Vue from "vue";

Vue.component("ButtonString", {
  template: ' <button @click="click">Clicked {{ count }} times </button>',
  data() {
    return {
      count: 0
    };
  },
  methods: {
    click() {
      this.count++;
    }
  }
});
