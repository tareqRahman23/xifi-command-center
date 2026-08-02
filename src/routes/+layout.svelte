<script lang="ts">
	import './layout.css';
	import { App } from 'konsta/svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>XIFI Command Center</title>
	<meta
		name="description"
		content="XIFI's AI-powered customer support operations command center."
	/>
</svelte:head>

<App theme="ios" safeAreas dark={false} class="min-h-dvh bg-[#f4f5fa] text-[#101239]">
	{@render children()}
</App>
