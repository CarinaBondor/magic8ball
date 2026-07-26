import { defineStore } from "pinia";

export const useAdviceStore = defineStore("advice", () => {
    //state

    const advices = ref<any[]>([]); // Array to hold all advices
    const countedAdvices = computed(() => advices.value.length); // Computed property to count advices

    //Actions - was previously methods

    /**
     * getAdvices
     * Fetches advices from the API and updates the state.
     */
    async function getAdvice() {
        try {
            const response = await fetch("https://api.adviceslip.com/advice");

            const data = await response.json();
            return (advices.value = data.slip);
        } catch (error) {
            console.error("Error fetching advices:", error);
        }
    }

    async function getAdviceById(id) {
        try {
            const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
        } catch (error) {
            console.error("Error fetching advices:", error);
        } finally {
        }
    }

    return { advices, countedAdvices, getAdvice, getAdviceById };
});
