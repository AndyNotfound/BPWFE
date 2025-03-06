import { useNuxtApp } from "#app";
import { reactive } from "vue";

export const useApiRequest = async ({ url= '', method = "GET", params = {}, body = {} }) => {
    const { $axios } = useNuxtApp();
    
    const state = reactive<Record<string, any>>({
        data: null,
        error: null,
        isLoading: false
    });

    const sendRequest = async () => {
        state.isLoading = true;
        state.error = null;

        try {
            const response = await $axios({
                url,
                method,
                params: method === "GET" ? params : undefined,
                data: method !== "GET" ? body : undefined,
            });

            console.log('API response: ', response)
            state.data = response.data;
        } catch (err) {
            state.error = err;
        } finally {
            state.isLoading = false;
        }
    };

    await sendRequest()

    return { 
        ...toRefs(state),
        sendRequest 
    };
};

const fetchTravelPackages = async ({ params = {}, body = {} }) => {
    const res = await useApiRequest({
        url: "/api/travel-packages/homepage",
        params,
        body
    });

    console.log('fetch: data: ', res)

    return res;
};

export { 
    fetchTravelPackages,
};
