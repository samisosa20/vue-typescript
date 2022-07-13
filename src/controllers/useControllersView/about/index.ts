import { defineComponent } from "vue";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "About",
  data() {
    return {
      name: '',
    };
  },
  created() {
    this.getNameRoute()
  },
  methods: {
    getNameRoute() {
      const router = useRouter()
      this.name = router.currentRoute.value.params.name 
      return
    }
  },
  updated() {
    this.getNameRoute()
  },
});
