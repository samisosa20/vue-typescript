import { defineComponent } from "vue";
import { mapState } from "vuex";

import useStrings from "@/string";

const { useGeneralTypes } = useStrings();

export default defineComponent({
  name: "Home",
  data() {
    return {
      count: 1,
    };
  },
  created() {
    console.log(this.count, "Oli");
  },
  computed: {
    ...mapState(["footer"]),
  },
  mounted() {
    this.count = 2; // type: number
    console.log(this.footer);
  },
  methods: {
    incr() {
      this.$store.dispatch(`footer/like`, {amount: 1});
    },
    decr() {
      this.$store.dispatch(`footer/like`, {amount: -1});
    },
  },
});
