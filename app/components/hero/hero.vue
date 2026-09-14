<template>
    <div class="px-4 py-2 text-center">
        <h1 class="display-5 fw-bold text-body-emphasis">
            {{ title }}
        </h1>
        <div class="col-lg-6 mx-auto">
            <p class="lead">
               
                {{ body }}
            </p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: false
        }
    })
</script>