<template>
  <main class="search-results flex flex-wrap mx-auto">
    <template v-for="(result, index) in results">
      <Result :key="index" :product="result" />
    </template>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SearchInput",
  components: {
    Result: () => import("./Result/Index.vue"),
  },
  computed: {
    ...mapState("search", ["results"]),
  },
};
</script>

<style>
.search-results .result:not(:nth-child(3n)) {
  margin-right: 2rem;
}

.search-results .result:not(:nth-last-child(-n + 3)) {
  margin-bottom: 2rem;
}
</style>
