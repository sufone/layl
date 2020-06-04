import App from '@components/App';
import './index.css';

window.app = new App({
	target: document.querySelector('#app'),
	hydrate: true
});

if (process.env.NODE_ENV === 'production') {

	// Service Worker registration
	require('offline-plugin/runtime').install();
}
