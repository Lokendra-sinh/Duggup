

<script lang="ts">
  
    import { onMount } from 'svelte';
    import Skeleton from '../skeleton/skeleton.svelte';
    import { writable } from 'svelte/store';

    export let imageUrl: string = '';

    let loaded: any = writable(false);

    onMount(() => {
        const img = new Image();
        img.onload = () => {
            console.log('loaded');
            loaded.set(true);
        };
        img.onerror = () => {
            loaded.set(true);
        };
        img.src = imageUrl;
    });

</script>

{#if !loaded}
    <Skeleton class="w-full h-full bg-gray-400" />
{:else}
<img src={imageUrl} class="w-[344px] h-[136px] object-cover rounded-t-[12px]" alt="ima"/>
{/if}