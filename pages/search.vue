<template>
    <div>
        <hero title="Search for specific advice" />

        <div class="my-3">
            <div class="input-group">
                <input
                    type="text"
                    class="form-control"
                    id="searchTopic"
                    placeholder="Type to search advice..."
                    v-model="inputTerm"
                />

                <!-- Optional: Show a spinner inside the input group when loading -->
                <span
                    v-if="isLoading"
                    class="input-group-text"
                >
                    <span
                        class="spinner-border spinner-border-sm text-primary"
                        role="status"
                    ></span>
                </span>
                <span
                    v-else
                    class="input-group-text"
                >
                    <i class="bi bi-search"></i>
                </span>
            </div>

            <!-- Show results if we have them -->
            <template v-if="advices && advices.length > 0">
                <advice-card :advices="advices" />
            </template>

            <!-- Show no results only if the user typed something and we got 0 results back -->
            <template v-else-if="inputTerm && advices && advices.length === 0">
                <p class="mt-3">No advices for "{{ inputTerm }}". Better luck next time!</p>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from "vue";
const inputTerm = ref<string>("");
const { advices, isLoading, getAdviceByQuery } = useSearchAdvice();

let debounceTimer: ReturnType<typeof setTimeout> | null = null;
watch(inputTerm, (newValue) => {
    if (debounceTimer) {
        clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
        getAdviceByQuery(newValue);
    }, 300);
});
// Clean up the timer if the component is destroyed
onUnmounted(() => {
    if (debounceTimer) {
        clearTimeout(debounceTimer);
    }
});
</script>
