<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	export let data: PageData;

    function statusToEnglish(status: number) {
        if (status == 200) {
            return "";
        } else if (status == 204) {
            return "Success";
        } else if (status == 400) {
            return "Bad Request";
        } else if (status == 401) {
            return "Unauthorized";
        } else if (status == 403) {
            return "Forbidden";
        } else if (status == 404) {
            return "Not Found";
        } else if (status == 500) {
            return "Internal Server Error";
        } else if (status == 503) {
            return "Service Unavailable";
        } else {
            console.log(status);
            return "Unknown Error";
        }
    }
</script>

<main class="max-w-lg prose text-center mx-auto my-6">
	<p>Current Bio: <span class="text-info">{data.bio}</span></p>

	<p>{statusToEnglish($page.status)}</p>
	<p class="text-error">{$page.form?.problem ?? ''}</p>

	<form method="POST" use:enhance>
		<div class="form-control">
			<label for="bio" class="label">
				<span class="label-text">Enter Bio</span>
			</label>
			<textarea name="bio" class="textarea textarea-bordered textarea-accent" value={data.bio} />
		</div>
		<button class="btn btn-primary my-5">Update Bio</button>
	</form>
</main>
