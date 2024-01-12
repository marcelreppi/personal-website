export function trackEvent(eventName: string, eventData?: Record<string, any>) {
	window?.umami?.track(eventName, eventData);
}