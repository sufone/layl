import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';

register('en', () => import('../locales/en.json'));
register('ar', () => import('../locales/ar.json'));

locale.subscribe((value) => {
	if (value == null) return;

    // Handle manual user locale change by forcing refresh, and prevent GH issue #58. If locale 
    // value in store !== current localStorage value, update the latter and refresh with the new locale.
    // Terrible… but we need to release somehow - Naved April 11, 2021 
    if (value !== localStorage.getItem('locale')) {
        localStorage.setItem('locale', value)
        location.reload(); 
    }
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