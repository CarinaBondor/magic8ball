<template>
    <div>
        <hero title="Search for specific advice" />

        <div class="my-3">
            <form
                @submit.prevent="defaultSearch"
                class="input-group"
            >
                <input
                    type="text"
                    class="form-control"
                    id="searchTopic"
                    placeholder="Type to search advice..."
                    v-model="inputTerm"
                    @input="defaultSearch"
                />

                <button
                    type="submit"
                    class="input-group-text"
                    :disabled="isLoading"
                >
                    <span
                        v-if="isLoading"
                        class="spinner-border spinner-border-sm text-primary"
                        role="status"
                    />
                    <i
                        v-else
                        class="bi bi-search"
                    ></i>
                </button>
            </form>

            <template v-if="advices && advices.length > 0">
                <advice-card :advices="advices" />
            </template>

            <template v-else>
                <p class="mt-3">
                    No advices for this topic. Better luck next time!
                </p>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const inputTerm = ref<string>("");
const { advices, isLoading, getAdviceByQuery } = useSearchAdvice();

const defaultSearch = () => {
    getAdviceByQuery(inputTerm.value);
};

// let debounceTimer: ReturnType<typeof setTimeout> | null = null;
// watch(inputTerm, (newValue) => {
//     if (debounceTimer) {
//         clearTimeout(debounceTimer);
//     }
//     debounceTimer = setTimeout(() => {
//         getAdviceByQuery(newValue);
//     }, 300);
// });

// onUnmounted(() => {
//     if (debounceTimer) {
//         clearTimeout(debounceTimer);
//     }
// });
</script>
