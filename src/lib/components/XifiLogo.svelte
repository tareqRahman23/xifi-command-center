<script lang="ts">
	let { compact = false }: { compact?: boolean } = $props();
</script>

<div class="logo-lockup" aria-label="XIFI">
	<span class="logo-mark" aria-hidden="true">
		<svg viewBox="0 0 24 24" role="img">
			<path d="M6 5.5 14.5 18.5" />
			<path d="M17 5.5c-5 5.5-7 8.5-9.5 13" />
		</svg>
	</span>
	{#if !compact}
		<span class="wordmark">XIFI</span>
		<span class="version">v2.4</span>
	{/if}
</div>

<style>
	.logo-lockup {
		display: flex;
		align-items: center;
		min-width: 0;
		gap: 11px;
	}

	.logo-mark {
		display: grid;
		width: 34px;
		height: 34px;
		flex: 0 0 34px;
		place-items: center;
		border-radius: 10px;
		background: linear-gradient(150deg, #ec5bae, #c0338a);
		box-shadow: 0 6px 16px -4px rgb(216 63 155 / 60%);
	}

	svg {
		width: 20px;
		height: 20px;
		fill: none;
		stroke: white;
		stroke-width: 3.4;
		stroke-linecap: round;
	}

	.wordmark {
		color: white;
		font-size: 19px;
		font-weight: 750;
		letter-spacing: 0.12em;
	}

	.version {
		margin-left: auto;
		border: 1px solid #2a2e55;
		border-radius: 6px;
		padding: 2px 6px;
		color: #7379a2;
		font-size: 9px;
		font-weight: 700;
		letter-spacing: 0.04em;
	}
</style>
