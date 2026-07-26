import { mount } from '@vue/test-utils';
import AboutCard from './about-card.vue';
import { describe, it, expect } from 'vitest';

describe('AboutCard', () => {
    it('renders the card with the correct text', () => {
        const wrapper = mount(AboutCard);
        const text = wrapper.text();
        expect(text.trim()).toContain('Advice Slip API');

        expect(wrapper.text()).toContain('This project was made by Carina B.S.');
        expect(wrapper.text()).toContain('Vue 3/Nuxt 3');
        expect(wrapper.text()).toContain('Pinia for state management');
        expect(wrapper.text()).toContain('Customized Bootstrap V5');
    });
});