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
    <span class="absolute right-0 top-0 mt-1 mr-12" v-if="!!loading">
      <svg width="45" height="45" stroke="#e2e8f0">
        <g
          fill="none"
          fill-rule="evenodd"
          transform="translate(1 1)"
          stroke-width="2"
        >
          <circle cx="22" cy="22" r="6" stroke="none">
            <animate
              attributeName="r"
              begin="1.5s"
              dur="3s"
              values="6;22"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="1.5s"
              dur="3s"
              values="1;0"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              begin="1.5s"
              dur="3s"
              values="2;0"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="22" cy="22" r="6" stroke="none">
            <animate
              attributeName="r"
              begin="3s"
              dur="3s"
              values="6;22"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="3s"
              dur="3s"
              values="1;0"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              begin="3s"
              dur="3s"
              values="2;0"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="22" cy="22" r="8">
            <animate
              attributeName="r"
              begin="0s"
              dur="1.5s"
              values="6;1;2;3;4;5;6"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </span>
  </form>
</template>

<script>
import debounce from "lodash.debounce";
import { mapActions, mapState } from "vuex";

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
  computed: {
    ...mapState("search", ["loading"]),
  },
};
</script>

<style></style>
