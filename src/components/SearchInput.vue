<template>
  <form class="pt-2 relative mx-auto w-1/2 text-gray-600 mb-12">
    <input
      class="border-2 border-gray-300 w-full bg-white h-10 pr-5 pl-12 rounded-lg text-sm focus:outline-none"
      type="search"
      name="search"
      placeholder="Search Products"
      autoComplete="off"
      aria-label="Search Products"
      @input="onInputChange"
    />
    <button type="submit" class="absolute left-0 top-0 mt-5 ml-4">
      <svg
        class="text-gray-600 h-4 w-4 fill-current"
        viewBox="0 0 56.966 56.966"
      >
        <path
          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
        />
      </svg>
    </button>
  </form>
</template>

<script>
import debounce from "lodash.debounce";
import { mapActions } from "vuex";

export default {
  name: "SearchInput",
  async mounted() {
    this.getResults();
  },
  methods: {
    ...mapActions("search", ["getResults"]),
    onInputChange: debounce(function({ target: { value } }) {
      this.getResults(value);
    }, 500),
  },
};
</script>

<style></style>
