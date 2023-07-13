<script>
	import { createEventDispatcher } from 'svelte'; 	
	import { onMount, onDestroy, afterUpdate } from 'svelte';
	export let countdown = 0;
	const dispatch = createEventDispatcher();
	
	// @ts-ignore
	let timer = null;
	$: seconds = countdown;
	
	onMount(() => {
		timer = setInterval(() => {
			countdown -= 1;
	  }, 1000);
	})
	
	afterUpdate(() => {
		seconds -= 1;
	})
	
	onDestroy(() => {
			// @ts-ignore
		if (timer) {
			clearInterval(timer);
		}
	})
	
	$: {
		if (countdown === 1) {
			// @ts-ignore
			clearInterval(timer);
			timer = null;
			dispatch('completed');
		}
	}
</script>
{seconds}