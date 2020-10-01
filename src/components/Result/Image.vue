<template>
  <img
    :src="imageSrc"
    :class="{
      'search-result__image': true,
      'search-result__image--loaded': this.loaded,
    }"
    v-on:load="load"
  />
</template>

<script>
export default {
  name: "SearchResultImage",
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "data:,",
    },
  },
  data: () => ({
    observer: null,
    intersected: false,
    loaded: false,
  }),
  computed: {
    imageSrc() {
      return this.intersected && this.src ? this.src : this.placeholder;
    },
  },
  methods: {
    load() {
      if (this.$el.getAttribute("src") !== this.srcPlaceholder) {
        this.loaded = true;
      }
    },
  },
  mounted() {
    if ("IntersectionObserver" in window) {
      this.observer = new IntersectionObserver((entries) => {
        const image = entries[0];
        if (image.isIntersecting) {
          this.intersected = true;
          this.observer.disconnect();
        }
      }, this.intersectionOptions);
      this.observer.observe(this.$el);
    }
  },
  destroyed() {
    if ("IntersectionObserver" in window) {
      this.observer.disconnect();
    }
  },
};
</script>

<style>
.search-result__image {
  filter: blur(5px);
  transition: filter 1.6s;
  will-change: filter;
}
.search-result__image--loaded {
  filter: blur(0);
}
</style>
