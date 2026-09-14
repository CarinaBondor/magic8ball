// import { defineStore } from "pinia";
import type { Advice, AdviceSlipResponse } from "~/types/advice";

export const useAdvice = () => {
    const advice = ref<Advice | null>(null);
    const isLoading = ref(false);

    const fetchRandomAdvice = async () => {
        isLoading.value = true;
        try {
            const res = await $fetch<AdviceSlipResponse>("https://api.adviceslip.com/advice");
            advice.value = res.slip || null;
        } catch (e) {
            console.error(e);
            advice.value = null;
        } finally {
            isLoading.value = false;
        }
    };

    return { advice, isLoading, fetchRandomAdvice };
};
