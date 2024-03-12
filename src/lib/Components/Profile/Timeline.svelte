
<script lang="ts">

import * as Avatar from '$lib/Components/ui/avatar';
import { timelineItems } from '$lib/Data/Dummy';
import { writable } from 'svelte/store';
import ImageLoader from '../ui/ImageLoader/ImageLoader.svelte';

let isImageLoading = writable(true);

function handleImageLoad(imageUrl: string) {
    isImageLoading.set(false);
}


</script>
  
<section class="ml-[60px] flex flex-col gap-px">
{#each timelineItems as item, index}
    {#if item.type === "post" && 'posts' in item}
        <div class="flex items-center gap-8 px-12 py-7 border-l-2 border-dotted border-[#778FB1] relative">
            {#each item.posts as post, postIndex}
                <div class="w-[344px] h-[226px] rounded-[12px] border-[0.5px] border-[#D0D5DD] flex flex-col items-center hover:shadow-md hover:cursor-pointer">
                    <img src={post.imageUrl} class="w-[344px] h-[136px] object-cover rounded-t-[12px]" alt="ima" on:load={() => handleImageLoad(post.imageUrl)} />
                    <p class="text-sm font-normal text-[#141618] p-5">{post.convincingDescription}</p>
                </div>
            {/each}

            <div class="flex items-center gap-4 absolute top-1/2 -left-[1px] -translate-x-1/2 -translate-y-1/2">
                <span class="absolute right-full mr-7 whitespace-nowrap text-xs font-normal text-[#7A9299]">{item.date}</span>
                <div class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-[3px] border-[#0066FF]"></div>
            </div>
        </div>
    {:else if item.type === "job" && 'JobTitle' in item}
        <div class="flex items-center px-12 py-5 border-l-2 border-dotted border-[#778FB1] relative">
            <div class="w-[713px] h-[83px] flex flex-col gap-[4px] rounded-[13px] px-4 py-5 shadow-[0_1px_2px_0_#DBE5F540]">
                <p class="text-[18px] font-bold text-[#141618]">{item.JobTitle}</p>
                <p class="text-xs font-normal text-[#7A9299]">{item.JobType}</p>
            </div>

            <div class="flex items-center gap-4 absolute top-1/2 -left-[1px] -translate-x-1/2 -translate-y-1/2">
                <div class="flex flex-col items-end absolute right-full mr-7 whitespace-nowrap">
                  
                    <div class="-mr-[10px] w-[48px] h-[48px] rounded-full">
                        <Avatar.Root>
                            <Avatar.Image src={item.ImageUrl} alt="Duggup's icon with circular outline" />
                            <Avatar.Fallback>Duggup</Avatar.Fallback>
                        </Avatar.Root>
                    </div>

                    <p class="text-right text-base font-bold text-[#141618]">{item.CompanyName}</p>
                    <p class="text-right text-xs font-normal text-[#7A9299]">{item.JobLocation}</p>
                    <p class="text-right text-xs font-normal text-[#7A9299]">Joined</p>
                    <p class="text-right text-xs font-normal text-[#7A9299]">{item.JoiningDate}</p>

                </div>
                <div class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-white rounded-full border-[9px] border-[#0066FF] shadow-[0px_1px_1px_0px_#A5B9D3]"></div>
            </div>

            <div class="absolute top-0 -left-[1px] -translate-x-1/2 -translate-y-1/2">
                <svg width="31" height="10" viewBox="0 0 31 10" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 8L15.5 2L9 8" stroke="#778FB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
                    
            </div>
        </div>

       
    {/if}
{/each}
</section>  