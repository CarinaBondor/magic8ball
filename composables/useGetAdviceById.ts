import type { Advice, AdviceQuery } from "~/types/advice";

export const useSearchAdvice = () => {
    const advices = ref<Advice[] | null>(null);
    const isLoading = ref(false);

    const getAdviceByQuery = async (query: string | null) => {
        if (!query || !query.trim()) {
            advices.value = [];
            return;
        }

        isLoading.value = true;
        try {
            const data = await $fetch<AdviceQuery>(
                `https://api.adviceslip.com/advice/search/${query}`,
            );
            advices.value = data.slips || [];
        } catch (e) {
            console.error("Error fetching advices:", e);
            advices.value = [];
        } finally {
            isLoading.value = false;
        }
    };

    return { advices, isLoading, getAdviceByQuery };
};
