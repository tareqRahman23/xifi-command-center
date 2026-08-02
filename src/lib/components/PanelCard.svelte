<script lang="ts">
	import { Card } from 'konsta/svelte';
	import type { Snippet } from 'svelte';

	let {
		title,
		subtitle,
		action,
		children,
		class: className = ''
	}: {
		title: string;
		subtitle?: string;
		action?: Snippet;
		children: Snippet;
		class?: string;
	} = $props();
</script>

<Card
	outline
	class={`panel-card !m-0 !rounded-2xl !border-[#eaebf3] !shadow-none ${className}`}
	contentWrapPadding="p-0"
>
	<div class="panel-head">
		<div>
			<h2>{title}</h2>
			{#if subtitle}<p>{subtitle}</p>{/if}
		</div>
		{#if action}<div class="panel-action">{@render action()}</div>{/if}
	</div>
	<div class="panel-content">{@render children()}</div>
</Card>

<style>
	:global(.panel-card) {
		overflow: hidden;
		background: white;
	}

	.panel-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 16px;
		padding: 18px 20px 0;
	}

	h2 {
		margin: 0;
		color: #181b42;
		font-size: 14.5px;
		font-weight: 680;
		letter-spacing: -0.01em;
	}

	p {
		margin: 3px 0 0;
		color: #8a8fa3;
		font-size: 11px;
	}

	.panel-action {
		flex: none;
	}

	.panel-content {
		padding: 16px 20px 20px;
	}
</style>
