<script lang="ts">
import { user } from '$lib/firebase';
import { signInWithGithub, signInWithGoogle } from '$lib/util/auth';
import { signOutSSR } from '$lib/util/auth';

</script>
<!--  <label>
			<input type='checkbox' bind:checked={$navVisible} />
			Visible
  </label>-->

  {#if $user}
  <h2 class='card-title mx-auto'>Welcome, {$user.displayName}</h2>
  <!--<p class='text-center text-success'>You are logged in</p>-->
  <a href='/'><button class='btn btn-danger mx-auto' on:click={() => signOutSSR()}>Sign out</button></a>
{:else}
  <div class='flex flex-col gap-5'>
    <button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google</button>
    <button class="btn btn-primary" on:click={signInWithGithub}>Sign in with GitHub</button>
  </div>
 {/if}



