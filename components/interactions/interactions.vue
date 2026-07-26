<template>
    <div class="interactions d-flex">
        <button
            type="button"
            class="btn-icon"
            @click="shareAdvice()"
        >
            <i class="bi bi-share" />
        </button>

        <button
            type="button"
            class="btn-icon"
            @click="addToFavourites()"
        >
            <i
                v-if="!isFavourited"
                class="bi bi-heart"
            />

            <i
                v-else
                class="bi bi-heart-fill"
            />
        </button>
    </div>
</template>

<script setup lang="ts">
import { useFavouriteStore } from "~/store/useFavouriteStore";

const favouritesStore = useFavouriteStore();

const props = defineProps<{
    advice: { id: string | number; [key: string]: any };
}>();

const addToFavourites = () => {
    favouritesStore.toggleFavouriteAdvice(props.advice);
};

const isFavourited = computed(() => favouritesStore.isAdviceFavourited(props.advice.id));

const shareAdvice = async () => {
    const text = props.advice.advice;
    if (navigator.share) {
        try {
            await navigator.share({
                title: "Check out this advice!",
                text,
                url: window.location.href,
            });
        } catch (err) {
            // User cancelled or error occurred
        }
    } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(text);
        alert("Advice copied to clipboard!");
    }
};
</script>
