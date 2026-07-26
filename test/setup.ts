import { vi, expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { config } from '@vue/test-utils';

// Extend Vitest's `expect` with Testing Library matchers
expect.extend(matchers);
// Mock nuxt-link globally
config.global.stubs = {
    'nuxt-link': {
        template: '<a><slot /></a>',
    },
};