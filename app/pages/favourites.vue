<template>
    <div>
        <hero title="Favourites Page" />

        {{ favCount }} Favourites

        <p v-if="!favourites.length">You have no favourites yet.</p>

        <advice-card
            v-else
            :advices="favourites"
        />
    </div>
</template>

<script setup lang="ts">
import { useFavouriteStore } from "~/store/useFavouriteStore";

const favouritesStore = useFavouriteStore();
const favourites = computed(() => favouritesStore.favouritedAdvices);
const favCount = computed(() => favouritesStore.countFavourite);

onMounted(() => {
    favouritesStore.getFavsFromLocalStorage();
});
</script>
