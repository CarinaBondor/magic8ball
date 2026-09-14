import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Advice } from "~/types/advice";

function isAdvice(value: unknown): value is Advice {
    if (!value || typeof value !== "object") {
        return false;
    }

    const { id, advice } = value as Record<string, unknown>;

    return typeof id === "number" && typeof advice === "string" && advice.length > 0;
}

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
        if (!import.meta.client) {
            return;
        }

        try {
            const storedFavs: unknown = JSON.parse(
                localStorage.getItem("favourites") || "[]",
            );

            favouritedAdvices.value = Array.isArray(storedFavs)
                ? storedFavs.filter(isAdvice)
                : [];
        } catch (error) {
            console.error("Error getting favourites from localStorage:", error);
            favouritedAdvices.value = [];
        }
    }

    function toggleFavouriteAdvice(advice: Advice | undefined) {
        if (!advice || !import.meta.client) {
            return;
        }

        const index = favouritedAdvices.value.findIndex((fav) => fav.id === advice.id);

        if (index !== -1) {
            favouritedAdvices.value.splice(index, 1);
        } else {
            favouritedAdvices.value.push(advice);
        }

        localStorage.setItem("favourites", JSON.stringify(favouritedAdvices.value));
    }

    return {
        countFavourite,
        favouritedAdvices,
        getFavsFromLocalStorage,
        toggleFavouriteAdvice,
        isAdviceFavourited,
    };
});
