<template>
    <div class="advice">
        <button
            @click="getAdvice"
            class="btn me-2 btn-outline-primary btn-lg"
        >
            Get advice
        </button>

        <section
            class="ball"
            :class="{ wiggle: isMoving, 'is-loading': isLoading }"
        >
            <div class="center">
                <div
                    v-if="isLoading"
                    class="d-flex justify-content-center align-items-center h-100"
                >
                    <div
                        class="spinner-border text-primary"
                        role="status"
                    >
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>

                <template v-else-if="advice.advice?.length">
                    <p>{{ advice.advice }}</p>
                </template>

                <template v-else>
                    <h2>8</h2>
                </template>
            </div>
        </section>

        <interactions
            v-if="advice.advice?.length"
            :advice="advice"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const advice = ref({});
const isMoving = ref(false);
const isLoading = ref(false);

const getAdvice = async () => {
    isLoading.value = true;
    isMoving.value = false;

    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();

        advice.value = data.slip;
        isMoving.value = true;
    } catch (error) {
        isMoving.value = false;
    } finally {
        isLoading.value = false;
    }
};
</script>

<style lang="scss" src="./advice.scss"></style>
