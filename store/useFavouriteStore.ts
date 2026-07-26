import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useFavouriteStore = defineStore("favourite", () => {
    const favouritedAdvices = ref<any[]>([]);

    const countFavourite = computed(() => favouritedAdvices.value.length);

    function isAdviceFavourited(adviceId: string | number | undefined) {
        if (typeof adviceId === "undefined") {
            return false;
        }

        return favouritedAdvices.value.some((fav) => fav.id === adviceId);
    }

    function getFavsFromLocalStorage() {
        try {
            const storedFavs = JSON.parse(localStorage.getItem("favourites") || "[]") || [];
            favouritedAdvices.value = storedFavs;
        } catch (error) {
            console.error("Error getting favourites from localStorage:", error);
        }
    }

    function toggleFavouriteAdvice(advice: any) {
        if (!advice || !advice.id) {
            return;
        }

        const storedFavs = JSON.parse(localStorage.getItem("favourites") || "[]") || [];
        const index = storedFavs.findIndex((fav: any) => fav.id === advice.id);

        if (index !== -1) {
            storedFavs.splice(index, 1);
        } else {
            storedFavs.push(advice);
        }

        localStorage.setItem("favourites", JSON.stringify(storedFavs));
        favouritedAdvices.value = storedFavs;
    }

    return {
        countFavourite,
        favouritedAdvices,
        getFavsFromLocalStorage,
        toggleFavouriteAdvice,
        isAdviceFavourited,
    };
});
