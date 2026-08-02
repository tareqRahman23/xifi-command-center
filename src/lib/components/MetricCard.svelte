<script lang="ts">
	import { ArrowDownRight, ArrowUpRight } from '@lucide/svelte';
	import { Card } from 'konsta/svelte';
	import type { Metric } from '$lib/data/overview';

	let { metric }: { metric: Metric } = $props();
</script>

<Card
	outline
	class="metric-card !m-0 !overflow-hidden !rounded-[15px] !border-[#eaebf3] !shadow-none"
	contentWrapPadding="p-4"
	style={`--metric-accent: ${metric.accent}`}
>
	<div class="accent"></div>
	<div class="label-row">
		<span>{metric.label}</span>
		{#if metric.live}<i aria-label="Live"></i>{/if}
	</div>
	<strong>{metric.value}</strong>
	<div class:warning={metric.accent === '#f4b740'} class="delta">
		{#if metric.direction === 'up'}
			<ArrowUpRight size={13} strokeWidth={2.5} />
		{:else if metric.direction === 'down'}
			<ArrowDownRight size={13} strokeWidth={2.5} />
		{/if}
		<span>{metric.delta}</span>
	</div>
</Card>

<style>
	:global(.metric-card) {
		position: relative;
		min-height: 112px;
		background: white;
	}

	.accent {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		height: 3px;
		background: var(--metric-accent);
	}

	.label-row {
		display: flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 10px;
		color: #7a7f95;
		font-size: 11.5px;
		font-weight: 520;
	}

	.label-row i {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #17b26a;
		box-shadow: 0 0 0 4px rgb(23 178 106 / 10%);
	}

	strong {
		display: block;
		color: #101239;
		font-size: clamp(24px, 2vw, 27px);
		font-weight: 750;
		letter-spacing: -0.035em;
		line-height: 1;
	}

	.delta {
		display: flex;
		align-items: center;
		gap: 2px;
		margin-top: 9px;
		color: #0f9858;
		font-size: 11px;
		font-weight: 650;
	}

	.delta.warning {
		color: #ca8a04;
	}
</style>
