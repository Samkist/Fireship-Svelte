<script lang="ts">
  import { typewriter } from '$lib/typewriter';
	import Countdown from '$lib/components/Countdown.svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  export let countdown = 10;
</script>

<style>
  div.image {
    content: url('/img/realmen.webp');
    width: 100%;
    height: 100%;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
  }
</style>

  <div class='image background absolute z-50 h-full'></div>
  

  <div class="isolate px-6 pt-14 lg:px-8 flex-grow">
    <div class="mx-auto py-32 sm:py-48 lg:py-56">
      <div class="text-center gap-5 flex flex-col mx-auto w-96">
        <h1 in:typewriter={{speed: 1}} class="text-6xl font-bold tracking-tight text-indigo-500 ">{$page.status}</h1>
        <h2 class="mt-4 text-3xl font-bold tracking-tight text-indigo-500 ">{$page.error?.message ?? "Unrecoverable Error."}</h2>
        <br/>
        <button class='btn-primary btn' on:click={() => goto('/')}>Redirecting in <Countdown countdown={countdown} on:completed="{() => goto('/')}" /></button>
      </div>
    </div>
  </div>
