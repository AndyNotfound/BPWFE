import { onBeforeUnmount, onMounted, ref } from "vue";
import { useWindowSize } from "@vueuse/core";

export function useIsMobile() {
    const isMobile = ref<boolean>(false);
    const { width } = useWindowSize();

    const checkIsMobile = () => {
        if (typeof window !== "undefined") {
            isMobile.value = width.value < 767;
        }
    };

    onMounted(() => {
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("resize", checkIsMobile);
    });

    return { isMobile };
}
