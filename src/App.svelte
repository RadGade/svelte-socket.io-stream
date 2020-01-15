
<script>
	export let name;
	let file = "";
	import {onMount} from 'svelte'
	import io from 'socket.io-client'
	import ss from 'socket.io-stream'
	onMount(async function(){
		const socket = await io('http://localhost:4200');
		await console.log('emitting watch event')
		ss(socket).emit('ferret', 'tobi', 'woot', function (data) { // args are sent in order to acknowledgement function
      console.log(data); // data will be 'tobi says woot'
    })
	})

</script>

<video src={file} controls width="320" height="240"></video>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
