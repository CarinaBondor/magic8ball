import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Advice, AdviceSlipResponse } from "~/types/advice";

export const useFavouriteStore = defineStore("favourite", () => {
    const favouritedAdvices = ref<Advice[]>([]);

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

            // Filter to ensure we only load valid Advice objects
            favouritedAdvices.value = storedFavs.filter(
                (fav: any) => fav && typeof fav === "object" && typeof fav.id !== "undefined",
            );
        } catch (error) {
            console.error("Error getting favourites from localStorage:", error);
        }
    }

    function toggleFavouriteAdvice(advice: Advice | undefined) {
        if (!advice || !advice.id) {
            return;
        }

        const storedFavs = JSON.parse(localStorage.getItem("favourites") || "[]") || [];
        const index = storedFavs.findIndex((fav: Advice) => fav.id === advice.id);

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
