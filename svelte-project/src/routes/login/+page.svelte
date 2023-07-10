<script lang="ts">
import { user } from '$lib/firebase';
import { signInWithGithub, signInWithGoogle, signOut } from '$lib/auth';
import { navVisible } from '$lib/dev';



</script>
<!--  <label>
			<input type='checkbox' bind:checked={$navVisible} />
			Visible
  </label>-->

  {#if $user}
  <h2 class='card-title mx-auto'>Welcome, {$user.displayName}</h2>
  <!--<p class='text-center text-success'>You are logged in</p>-->
  <button class='btn btn-danger mx-auto' on:click={() => signOut()}>Sign out</button>
{:else}
  <div class='flex flex-col gap-5'>
    <button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google</button>
    <button class="btn btn-primary" on:click={signInWithGithub}>Sign in with GitHub</button>
  </div>
 {/if}



