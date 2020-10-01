<template>
  <div
    class="result max-w-xs w-full flex flex-col bg-white shadow-lg rounded-lg overflow-hidden"
  >
    <div class="px-4 py-2">
      <h2 class="text-gray-900 font-bold text-sm">
        {{ product.title }}
      </h2>
      <h5 class="text-gray-600 text-sm mt-1">{{ product.brand }}</h5>
    </div>
    <Img
      class="h-56 mx-auto object-cover mt-2"
      :src="product.image_url"
      :placeholder="product.image_url"
    />
    <div
      class="flex items-center justify-between px-4 py-2 bg-gray-900 mt-auto"
    >
      <p class="text-gray-200 font-bold text-md">£{{ product.price.min }}</p>
      <a
        :href="product.link"
        target="_blank"
        class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"
        >View</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  props: {
    product: {
      type: Object,
      required: null,
    },
  },
  components: {
    Img: () => import("./Image.vue"),
  },
};
</script>

<style></style>
