<template>
    <div>
        <hero title="Search for specific advice" />

        <div class="my-3">
            <div class="input-group">
                <input
                    type="text"
                    class="form-control"
                    id="searchTopic"
                    placeholder="Get some advice"
                    v-model="inputTerm"
                />

                <button
                    type="submit"
                    class="input-group-text"
                    @click="getAdviceByQuery(inputTerm)"
                >
                    Search
                </button>
            </div>

            <template v-if="advices">
                <advice-card :advices="advices" />
            </template>
            <template v-else-if="inputTerm">
                <p class="mt-3">No advices for "{{ inputTerm }}". Better luck next time!</p>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputTerm = ref(null);

const { advices, isLoading, getAdviceByQuery } = useSearchAdvice();
</script>
