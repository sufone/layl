import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('../locales/en.json'));
register('ar-eg', () => import('../locales/ar.json'));
// not available yet

export function startClient() {
    init({
        fallbackLocale: 'en',
        loadingDelay: 200,
        formats: {},
        warnOnMissingMessages: true,
        initialLocale: getLocaleFromNavigator()
    });
}