<script lang="ts">
	import Navbar from '$lib/Components/Navbar.svelte';
	import { userFollowState } from '$lib/Store/UserFollowState';
	import Toast from '$lib/Components/ui/Toast/Toast.svelte';
	import './styles.css';
  </script>
  
  <div class="app">
	<Navbar />
	<main>
	  <slot />
	</main>
	{#if $userFollowState.message}
	  <Toast isFollowing={$userFollowState.isFollowing} toastMessage={$userFollowState.message} />
	{/if}
  </div>
  


<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		box-sizing: border-box;
		position: relative;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	
</style>
