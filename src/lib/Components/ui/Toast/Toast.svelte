<script lang="ts">

export let isFollowing: boolean;
export let toastMessage: string = '';

console.log(isFollowing, toastMessage);

</script>


<div class="fixed flex items-center justify-center top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black p-3 px-6 border border-gray-200 rounded-md shadow-md">

    {#if isFollowing}
   <p class="text-base font-semibold text-black">{toastMessage} is <span class="text-green-500"> Followed</span></p>
    {:else}
    <p class="text-base font-semibold text-black">{toastMessage} is <span class="text-red-500"> Unfollowed</span></p>
    {/if}
   </div>