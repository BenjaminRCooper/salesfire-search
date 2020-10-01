<template>
  <div class="flex flex-col max-w-6xl w-full mx-auto pt-8">
    <Input />
    <Results />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Input: () => import("./components/SearchInput.vue"),
    Results: () => import("./components/SearchResults.vue"),
  },
};
</script>

<style></style>
