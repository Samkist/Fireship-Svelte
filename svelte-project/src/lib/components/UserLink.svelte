<script>
    import { getFavicons } from 'get-website-favicon';
    export let icon = 'default';
    export let url = 'foo';
    export let title = 'some cool title';

    async function getLinkData() {

    }
</script>

<!--https://s2.googleusercontent.com/s2/favicons?domain=http://www.stackoverflow.com-->


<a href={url} class="stack w-full max-w-md text-center bg-base-300 flex justify-center items-center p-4 rounded-lg not-prose no-underline">
  <img src={`https://s2.googleusercontent.com/s2/favicons?domain=${url}&sz=256`} alt={icon} width="32" height="32" class="w-8" />
  <span class="text-lg text-white font-bold">{title}</span>
</a>