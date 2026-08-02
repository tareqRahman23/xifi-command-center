<script lang="ts">
	import { page } from '$app/state';
	import { Page } from 'konsta/svelte';
	import type { Snippet } from 'svelte';
	import Sidebar from './Sidebar.svelte';
	import Topbar from './Topbar.svelte';

	let { children }: { children: Snippet } = $props();
	let navigationOpen = $state(false);
</script>

<Page class="xifi-page !min-h-dvh !bg-[#f4f5fa] !text-[#101239]">
	<Sidebar
		currentPath={page.url.pathname}
		open={navigationOpen}
		onClose={() => (navigationOpen = false)}
	/>
	<div class="workspace-shell">
		<Topbar onMenu={() => (navigationOpen = true)} />
		<main>{@render children()}</main>
	</div>
</Page>

<style>
	:global(.xifi-page) {
		height: 100dvh;
		overflow: hidden;
	}

	.workspace-shell {
		display: flex;
		height: 100dvh;
		min-width: 0;
		flex-direction: column;
	}

	main {
		min-height: 0;
		flex: 1;
		overflow: auto;
		background: #f4f5fa;
	}

	@media (min-width: 900px) {
		.workspace-shell {
			margin-left: 246px;
		}
	}
</style>
