export const useGetAdviceById = () => {
    const advice = ref<any>(null);
    const isLoading = ref(false);

    const getAdviceById = async (id: string) => {
        try {
            const response = await $fetch(`https://api.adviceslip.com/advice/${id}`);

            return response;
        } catch (e) {
            console.error("Error fetching advices:", e);
        }
    };

    return { advice, isLoading, getAdviceById };
};
