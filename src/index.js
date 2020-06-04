import GAnalytics from 'ganalytics';
import App from '@components/App';
import './index.css';

window.app = new App({
	target: document.querySelector('#app'),
	hydrate: true
});

if (process.env.NODE_ENV === 'production') {
	window.ga = new GAnalytics('UA-XXXXXXXX-X');

	// Service Worker registration
	require('offline-plugin/runtime').install();
}
