import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';

register('ar', () => import('./locales/ar.json'));
register('en', () => import('./locales/en.json'));
register('bd', () => import('./locales/bd.json'));
register('sv', () => import('./locales/sv.json'));
register('ms', () => import('./locales/ms.json'));

locale.subscribe((value) => {
	if (value == null) return;
    localStorage.setItem('locale', value)
});

export function startClient() {
    init({
        fallbackLocale: 'en',
        loadingDelay: 200,
        formats: {},
        warnOnMissingMessages: true,
        initialLocale: localStorage.getItem('locale') || getLocaleFromNavigator()
    });
}