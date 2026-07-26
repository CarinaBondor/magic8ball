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
                    defer
                />

                <button
                    type="submit"
                    class="input-group-text"
                    @click="getAdvice"
                >
                    Search
                </button>
            </div>

            <template v-if="advices">
                <advice-card :advices="advices.slips" />
            </template>
            <template v-else-if="inputTerm">
                <p class="mt-3">No advices for "{{ inputTerm }}". Better luck next time!</p>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const inputTerm = ref(null);
const advices = ref(null);

const getAdvice = async () => {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice/search/${inputTerm.value}`);

        const data = await response.json();

        advices.value = data;
    } catch (error) {}
};
</script>
