<template>
  <div>Home</div>
  <p>Getting Started with Vesselize and Vue.js.</p>
  <p>
    <a :href="gitURL" target="_blank"> Github Source </a>
  </p>
</template>

<style scoped></style>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    return {
      gitURL: computed(() => store.state.git),
    };
  },
};
</script>
