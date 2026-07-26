import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('bootstrap', bootstrap);
});