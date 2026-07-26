<template>
    <div v-if="advices.length">
        <div
            v-for="advice in advices"
            :key="advice.id"
            class="row mt-3"
        >
            <div class="col">
                <div class="card rounded-3 shadow-sm">
                    <div
                        class="card-body d-flex flex-row flex-wrap justify-content-between"
                    >
                        <p class="m-0 flex-grow-1">{{ advice.advice }}</p>

                        <interactions :advice="advice" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

interface Advice {
    id: string | number;
    advice: string;
    [key: string]: any;
}

const props = defineProps<{
    advices: Advice[];
}>();
</script>
