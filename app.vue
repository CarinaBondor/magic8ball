<template>
    <div class="container">
        <app-header />

        <NuxtPage />

        <!-- <dark-mode-toggler @toggleDarkMode="onToggleDark" /> -->
    </div>
</template>

<script setup lang="ts">
function onToggleDark() {
    // Handle the event here
    console.log("Dark mode toggled!");
    if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
        document.documentElement.setAttribute("data-bs-theme", "light");
    } else {
        document.documentElement.setAttribute("data-bs-theme", "dark");
    }
}
</script>
