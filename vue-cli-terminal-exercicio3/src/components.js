import Vue from "vue";

Vue.component("ButtonString", {
  template:
    '<button @click="clicker"> clicked ButtonString {{counter}} times :)</button >',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    clicker() {
      this.counter++;
    },
  },
});

Vue.component("ButtonTemplateString", {
  template: `<button @click="clicker">
         clicked ButtonTemplateString {{counter}} times :)
        </button>`,
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    clicker() {
      this.counter++;
    },
  },
});

Vue.component("ButtonXTemplate", {
  template: "#button-x-template",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    clicker() {
      this.counter++;
    },
  },
});

Vue.component("ButtonInline", {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    clicker() {
      this.counter++;
    },
  },
});

Vue.component("ButtonRender", {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    clicker() {
      this.counter++;
    },
  },
  render(createElement) {
    return createElement(
      "button",
      {
        on: {
          click: () => this.counter++,
        },
      },
      ` clicked ButtonRender ${this.counter} times`
    );
  },
});

Vue.component("ButtonJSX", {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    clicker() {
      this.counter++;
    },
  },
  render() {
    return (
      <button onClick={this.clicker}>
        clicked ButtonJSX {this.counter} times :)
      </button>
    );
  },
});
