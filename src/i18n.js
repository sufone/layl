import { register, init, getLocaleFromNavigator } from 'svelte-i18n';
import dayjs from 'dayjs' 
import 'dayjs/locale/ar'

register('en', () => import('../locales/en.json'));
register('ar', () => import('../locales/ar.json'));

export function startClient() {
    init({
        fallbackLocale: 'en',
        loadingDelay: 200,
        formats: {},
        warnOnMissingMessages: true,
        initialLocale: getLocaleFromNavigator()
    });
    dayjs.locale(getLocaleFromNavigator())
}