export function trackEvent(...args: any[]) {
	if (window.umami) {
		if (window.umami.trackEvent) {
			window.umami.trackEvent(...args);
			return;
		} 

		if (window.umami.track) {
			window.umami.track(...args);
			return;
		}

		console.log('Could not find umami tracking method');
	} else {
		console.log('Umami is not available');
	}
}