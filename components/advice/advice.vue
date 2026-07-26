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
            :class="{ wiggle: isMoving }"
        >
            <div class="center">
                <template v-if="advice.advice?.length">
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
const isMoving = ref(Boolean);

const getAdvice = async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();

        setTimeout(() => {
            isMoving.value = true;
            advice.value = data.slip;
            //allow time for shake
        }, 400);
        isMoving.value = false;
    } catch (error) {
        isMoving.value = false;
    }
};
</script>

<style lang="scss" src="./advice.scss"></style>
