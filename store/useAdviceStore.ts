import { defineStore } from 'pinia';

export const useAdviceStore = defineStore('advice' , () => {
    //state

    const advices = ref<any[]>([]); // Array to hold all advices
    const countedAdvices = computed(() => advices.value.length); // Computed property to count advices


    //Actions - was previously methods 

    /**
     * getAdvices
     * Fetches advices from the API and updates the state.
     */
    

    return { advices, countedAdvices, getAdvices, getAdviceById}
});