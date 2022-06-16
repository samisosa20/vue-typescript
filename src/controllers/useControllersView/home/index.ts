import { defineComponent } from "vue";

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
  mounted() {
    this.count = 2; // type: number
    console.log("tolis")
  },
});
