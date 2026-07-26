import { defineStore } from 'pinia';

export const useFavouriteStore = defineStore('favourite', () => {

    // --- State: reactive data for the store ---

    // favouritedAdvices is a reactive array that will hold the list of favourited advices
    const favouritedAdvices = ref<any[]>([]);


    // countFavourite is a computed property that returns the number of favourited advices
    const countFavourite = computed(() => favouritedAdvices.value.length);

    function isAdviceFavourited(adviceId: { id: string | number }) {
        return favouritedAdvices.value.some(fav => fav && fav.id === adviceId);
    }

    // --- Actions: methods that can mutate the state or perform logic ---
    

    /**
     * getFavsFromLocalStorage
     * Loads the list of favourites from localStorage and commits them to the store.
     */
    function getFavsFromLocalStorage() {
        try {
            const favsString = localStorage.getItem('favourites');

            const storedFavs = favsString ? JSON.parse(favsString) : [];

            // If storedFavs is an array, update the state directly (Pinia style)
            if (storedFavs && Array.isArray(storedFavs)) {
                favouritedAdvices.value = storedFavs;
            }
        } catch (error) {
            // Log any errors that occur during retrieval or parsing
            console.error("Error getting favourites from localStorage:", error);
        }
    }

    function toggleFavouriteAdvice(advice: { id: string | number }) {
        if (!advice || !advice.id) {
            console.warn("toggleFavouriteAdvice called with invalid advice:", advice);
            return;
        }

        // Get current favourites from localStorage
        const favsString = localStorage.getItem('favourites');
        let storedFavs: any[] = favsString ? JSON.parse(favsString) : [];

        // Remove any null entries
        storedFavs = storedFavs.filter((fav) => fav !== null && fav !== undefined);

        // Check if advice is already favourited
        const index = storedFavs.length
            ? storedFavs.findIndex((fav) => fav && fav.id === advice.id)
            : -1;

        if (index !== -1) {
            // If exists, remove it
            storedFavs.splice(index, 1);
        } else {
            // If not, add it
            storedFavs.push(advice);
        }

        // Update localStorage and state
        localStorage.setItem('favourites', JSON.stringify(storedFavs));
        favouritedAdvices.value = storedFavs;
    }


    

    // Return the state, computed properties, and actions so they can be used in components
    return { countFavourite, favouritedAdvices, getFavsFromLocalStorage, toggleFavouriteAdvice, isAdviceFavourited }
})