<template>
  <div class="hello">
    <h1>Hello {{ getNameWithIcon() }}</h1>
    <div v-if="isCarsVisible" data-test="cars">🚘 🚘 🚘 🚘 🚘 🚘 🚘</div>
    <button @click="switchCarsVisibility">switch visibility</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ref } from "@vue/composition-api";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    name: String,
    icon: String
  },
  setup() {
    const isCarsVisible = ref(false);
    const switchCarsVisibility = () => {
      return (isCarsVisible.value = !isCarsVisible.value);
    };

    return {
      isCarsVisible,
      switchCarsVisibility
    };
  },
  methods: {
    getNameWithIcon() {
      return `${this.name} ${this.icon}`;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
