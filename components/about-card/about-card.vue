<template>
    <div class="row">
        <div class="card p-4">
            <p>This project was made by Carina B.S. with:</p>

            <ul>
                <li>Vue 3/Nuxt 3</li>

                <li>
                    <nuxt-link
                        to="https://api.adviceslip.com/"
                        external
                    >
                        Advice Slip API
                    </nuxt-link>
                </li>

                <li>Pinia for state management</li>

                <li>Customized Bootstrap V5</li>

                <li>Tested with Vitest</li>
            </ul>

            <p>Next plans for this project:</p>

            <ul>
                <li>Optimize performance</li>
                <li>Add internationalization support</li>
                <li>Add more tests</li>
                <li>Tweak sharing feature</li>
            </ul>

            <p>
                Check out the repo
                <nuxt-link
                    to="https://github.com/CarinaBondor/magic8ball"
                    external
                >
                    here
                </nuxt-link>
            </p>
        </div>
    </div>
</template>

<script setup></script>
