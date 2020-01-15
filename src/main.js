import App from './App.svelte';
import EventEmitter from 'events';
import util from 'util';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
