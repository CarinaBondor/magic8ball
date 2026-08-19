export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },
    css: [
        "bootstrap/dist/css/bootstrap.min.css",
        "bootstrap-icons/font/bootstrap-icons.css",
        "~/assets/scss/theme.scss",
    ],
    plugins: ["~/plugins/bootstrap.client.js"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler",
                    silenceDeprecations: [
                        "mixed-decls",
                        "color-functions",
                        "global-builtin",
                        "import",
                    ],
                },
            },
        },
    },
    modules: ["@pinia/nuxt"],
    typescript: {
        tsConfig: {
            compilerOptions: {
                noUnusedLocals: true,
                noUnusedParameters: true,
                strict: true,
                allowUnreachableCode: false,
                noUncheckedIndexedAccess: true,
                strictNullChecks: true,
                noImplicitAny: true,
            },
        },
    },
});
