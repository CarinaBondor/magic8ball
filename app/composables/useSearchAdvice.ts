import type { Advice } from "~/types/advice";

export const useSearchAdvice = () => {
    const advices = ref<Advice[] | null>(null);
    const isLoading = ref(false);

    const getAdviceByQuery = async (query: string) => {
        isLoading.value = true;

        try {
            const data = await $fetch(`https://api.adviceslip.com/advice/search/${query}`);

            advices.value = data.slips || null;
        } catch (e) {
            console.error("Error fetching advices:", e);
            advices.value = null;
        } finally {
            isLoading.value = false;
        }
    };

    return { advices, isLoading, getAdviceByQuery };
};
