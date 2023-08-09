import { defineComponent, ref } from "vue";
export default defineComponent({ //aqui se tiene que usar un defineComponent a fuerza
    setup() {
        const counter = ref<number>(0);

        return {
            counter
        }
    }
})