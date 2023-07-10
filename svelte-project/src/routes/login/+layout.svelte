<script lang="ts">
    import { page } from "$app/stores";
    import { scale } from 'svelte/transition';
</script>
  
  <nav class="flex justify-center my-20">
    <ul class="steps">
      <a href="/login" class="step step-primary">Sign In</a>
      <a
        href="/login/username"
        class="step"
        class:step-primary={$page.route.id?.match(/username|photo/g)}>
        Choose Username
      </a>
      <a
        href="/login/photo"
        class="step"
        class:step-primary={$page.route.id?.includes("photo")}>
        Upload Photo
      </a>
    </ul>
  </nav>
  
  <main in:scale class="card w-96 bg-neutral mx-auto">
    <div class="card-body items-center text-center">
      <slot />
    </div>
  </main>