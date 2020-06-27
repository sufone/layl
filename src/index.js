import App from '@components/App';
import './index.css';

window.app = new App({
	target: document.querySelector('#app'),
	hydrate: true
});

if (process.env.NODE_ENV === 'production') {
	if ('serviceWorker' in navigator) {

		const runtime = require('offline-plugin/runtime');

		runtime.install({
			onUpdating: () => {
				console.log('SW Event:', 'onUpdating');
			},
			onUpdateReady: () => {
				console.log('SW Event:', 'onUpdateReady');
				// Tells to new SW to take control immediately
				runtime.applyUpdate();
			},
			onUpdated: () => {
				console.log('SW Event:', 'onUpdated');
				// Reload the webpage to load into the new version
				window.location.reload();
			},
		
			onUpdateFailed: () => {
				console.log('SW Event:', 'onUpdateFailed');
			}
		});
	}
}
