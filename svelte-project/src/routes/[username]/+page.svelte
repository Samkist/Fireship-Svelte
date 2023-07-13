<script lang="ts">
	  import { goto } from "$app/navigation";
	  import UserLink from "$lib/components/UserLink.svelte";
    import { userData } from "$lib/firebase";
    import type { PageData } from "./$types";
    export let data: PageData;

    function mouseOver(e: MouseEvent) {
      
    }
</script>

  <svelte:head>
    <title>{data.username} Links</title>
    <meta name="description" content={data.bio} />
  </svelte:head>

  <main class="prose text-center mx-auto mt-8">
    <h1 class="text-6xl font-semibold my-16 text-indigo-500">
      @{data.username}
    </h1>

    <img
      src={data.photoURL ?? "/user.png"}
      alt="photoURL"
      width="256"
      class="mx-auto"
    />
    <p class="text-xl my-8">{data.bio ?? "No bio yet..."}</p>

    <ul class="list-none p-0 flex flex-col items-center">
      {#each data.links as item}
      <li
          class="border-2 border-dashed border-transparent p-2 transition-all max-w-md w-full"
          on:focus={() => {
             
            }}
          >
        <UserLink {...item} />
        </li>

      {/each}
    </ul>

    
  </main>