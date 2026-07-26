<template>
    <div v-if="validAdvices.length">
        <div
            v-for="advice in validAdvices"
            :key="advice.id"
            class="row mt-3"
        >
            <div class="col">
                <div class="card rounded-3 shadow-sm">
                    <div class="card-body d-flex flex-row flex-wrap justify-content-between">
                        <p class="m-0 flex-grow-1">{{ advice.advice }}</p>

                        <interactions :advice="advice" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Advice {
    id: string | number;
    advice: string;
    [key: string]: any;
}

const props = defineProps<{
    advices: Array<Advice | unknown>;
}>();

const validAdvices = computed(() =>
    props.advices.filter((item): item is Advice => {
        if (!item || typeof item !== "object" || Array.isArray(item)) {
            return false;
        }

        const candidate = item as Advice;
        return typeof candidate.id === "string" || typeof candidate.id === "number";
    }),
);
</script>
