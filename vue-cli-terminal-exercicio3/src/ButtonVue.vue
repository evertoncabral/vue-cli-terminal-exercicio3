<template>
<button @click="clicker"> clicked ButtonVue {{counter}} times :) 
</button>

</template>

<script>
export default {
  name: "ButtonVue",
  data() {
    return {
      counter: 0,
    };
  },
  methods:{
      clicker(){
          this.counter++;
      },
  },
};
</script>