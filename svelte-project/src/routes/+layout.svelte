<script lang="ts">
	import '../app.css';
	import Logo from '$lib/components/Logo.svelte';
	import { user, userData } from '$lib/firebase';
	import { fly, fade } from 'svelte/transition';
	import { navVisible } from '$lib/dev';
	import { signOutSSR } from '$lib/util/auth';
	import { page } from '$app/stores';
	const navSettings = {
		delay: 500,
		y: -100,
		duration: 300
	};


</script>

<div>
	<div
		class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
		aria-hidden="true"
	>
		<!-- from-[#f87171] to-[#dc2626] -->
		<!-- from-[#ff80b5] to-[#9089fc] -->
		<div
			class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		/>
	</div>
	{#if $navVisible}
		<header in:fly={{ y: -100, duration: 100 }} out:fade class="absolute inset-x-0 top-0 z-40 ">
			<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div class="flex lg:flex-1">
					<Logo />
				</div>
				{#if $user}
					<div class="hidden lg:flex flex-row lg:flex-1 lg:justify-end gap-10 align-top">
						<!-- Edit: {!$page?.url.pathname.includes('edit')}<br>
						Bio: {!$page?.url.pathname.includes('bio')}<br>-->
						{#if $userData}
						<!--User Data Present<br>
						 User Data is<br>
						{$userData?.username}<br>
						{$page?.data?.username} -->
							{#if $userData?.username == $page?.data?.username}
									<!-- User Data Equal<br> -->
								{#if !$page?.url.pathname.includes('edit')}				
									<a
										href="/{$userData?.username}/edit"
										in:fly={navSettings}
										out:fade
										class="text-sm font-semibold leading-6 text-indigo-500"
										><span aria-hidden="true">&#64;</span> Edit Profile</a
									>
								{/if}	
								{#if $page?.data?.bio && !$page?.url.pathname.includes('bio')}
									<a
										href="/{$userData?.username}/bio"
										in:fly={navSettings}
										out:fade
										class="text-sm font-semibold leading-6 text-indigo-500"
										><span aria-hidden="true">&Popf;</span> Edit Bio</a
									>
								{/if}
							{/if}
							<a
								href="/{$userData?.username}"
								in:fly={navSettings}
								out:fade
								class="text-sm font-semibold leading-6 text-indigo-500"
								><span aria-hidden="true">&hearts;</span> Your Profile</a
							>
						{/if}
						<a
							href="/"
							on:click={() => signOutSSR()}
							in:fly={navSettings}
							out:fade
							class="text-sm font-semibold leading-6 text-indigo-500"
							><span aria-hidden="true">&larr;</span> Log out</a
						>
					</div>
				{:else}
					<div class="hidden lg:flex lg:flex-1 lg:justify-end">
						<a
							href="/login"
							class="text-sm font-semibold leading-6 text-indigo-500"
							in:fly={navSettings}
							out:fade>Log in <span aria-hidden="true">&rarr;</span></a
						>
					</div>
				{/if}
			</nav>
		</header>
	{/if}
	<div />
	<slot />
	<div
		class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
		aria-hidden="true"
	>
		<div
			class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		/>
	</div>
</div>
