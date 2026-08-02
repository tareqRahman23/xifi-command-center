<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowLeft, CheckCircle2 } from '@lucide/svelte';
	import { Button, Card } from 'konsta/svelte';
	import type { Component } from 'svelte';

	let {
		title,
		description,
		status,
		icon: Icon
	}: { title: string; description: string; status: string; icon: Component } = $props();
</script>

<section class="section-page">
	<a class="back-link" href={resolve('/')}><ArrowLeft size={15} /> Overview</a>
	<Card
		outline
		class="section-card !m-0 !rounded-[22px] !border-[#e7e8f1] !shadow-none"
		contentWrapPadding="p-0"
	>
		<div class="icon-wrap"><Icon size={30} strokeWidth={1.7} /></div>
		<h1>{title}</h1>
		<p>{description}</p>
		<div class="status"><CheckCircle2 size={16} /><span>{status}</span></div>
		<Button rounded inline href={resolve('/')} class="!mt-7 !bg-[#d83f9b] !px-5 !text-white">
			Return to overview
		</Button>
	</Card>
</section>

<style>
	.section-page {
		width: min(860px, 100%);
		padding: 30px clamp(16px, 3vw, 36px);
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 18px;
		color: #626980;
		font-size: 12px;
		font-weight: 600;
		text-decoration: none;
	}

	.back-link:hover {
		color: #2f63f5;
	}

	:global(.section-card) {
		background: white;
		padding: clamp(28px, 6vw, 64px);
	}

	.icon-wrap {
		display: grid;
		width: 58px;
		height: 58px;
		place-items: center;
		border-radius: 17px;
		background: linear-gradient(145deg, #fce8f4, #eef2ff);
		color: #c0338a;
	}

	h1 {
		margin: 24px 0 10px;
		font-size: clamp(28px, 5vw, 42px);
		font-weight: 760;
		letter-spacing: -0.045em;
	}

	p {
		max-width: 620px;
		margin: 0;
		color: #697089;
		font-size: 15px;
		line-height: 1.65;
	}

	.status {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		margin-top: 20px;
		border-radius: 10px;
		background: rgb(23 178 106 / 8%);
		padding: 8px 11px;
		color: #0f8a51;
		font-size: 12px;
		font-weight: 650;
	}
</style>
