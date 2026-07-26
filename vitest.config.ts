import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './test/setup.ts', // Optional: Add a setup file for global configurations
        coverage: {
            reporter: ['text', 'json', 'html'], // Output coverage reports
        },
    },
});