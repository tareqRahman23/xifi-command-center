<script lang="ts">
	import { resolve } from '$app/paths';
	import { ChevronDown, X } from '@lucide/svelte';
	import { Button } from 'konsta/svelte';
	import { navigation } from '$lib/data/navigation';
	import XifiLogo from './XifiLogo.svelte';

	let {
		currentPath,
		open = false,
		onClose
	}: { currentPath: string; open?: boolean; onClose: () => void } = $props();

	const isActive = (href: string) =>
		href === '/' ? currentPath === href : currentPath.startsWith(href);
</script>

{#if open}
	<button class="scrim" type="button" aria-label="Close navigation" onclick={onClose}></button>
{/if}

<aside class:open aria-label="Primary navigation">
	<div class="brand-row">
		<a href={resolve('/')} onclick={onClose}><XifiLogo /></a>
		<Button
			clear
			rounded
			class="close-button !h-9 !w-9 !p-0 !text-white md:!hidden"
			aria-label="Close navigation"
			onclick={onClose}
		>
			<X size={18} />
		</Button>
	</div>

	<nav>
		{#each navigation as section (section.label ?? 'overview')}
			{#if section.label}
				<p class="nav-label">{section.label}</p>
			{/if}
			{#each section.items as item (item.href)}
				{@const Icon = item.icon}
				<a
					href={resolve(item.href)}
					class:active={isActive(item.href)}
					aria-current={isActive(item.href) ? 'page' : undefined}
					onclick={onClose}
				>
					<Icon size={16} strokeWidth={1.8} />
					<span>{item.label}</span>
					{#if item.badge}<span class="badge">{item.badge}</span>{/if}
				</a>
			{/each}
		{/each}
	</nav>

	<button class="profile" type="button">
		<span class="avatar">SW</span>
		<span class="profile-copy">
			<strong>Sarah Whitfield</strong>
			<small>Supervisor</small>
		</span>
		<ChevronDown size={16} strokeWidth={1.8} />
	</button>
</aside>

<style>
	aside {
		position: fixed;
		z-index: 50;
		top: 0;
		bottom: 0;
		left: 0;
		display: flex;
		width: 246px;
		flex-direction: column;
		transform: translateX(-100%);
		background: #101239;
		color: #9aa0bd;
		transition: transform 220ms ease;
	}

	aside.open {
		transform: translateX(0);
	}

	.scrim {
		position: fixed;
		z-index: 40;
		inset: 0;
		border: 0;
		background: rgb(7 8 26 / 55%);
		backdrop-filter: blur(2px);
	}

	.brand-row {
		display: flex;
		height: 68px;
		align-items: center;
		justify-content: space-between;
		padding: 0 15px 0 20px;
	}

	.brand-row > a {
		text-decoration: none;
	}

	nav {
		min-height: 0;
		flex: 1;
		overflow-y: auto;
		padding: 4px 12px 16px;
	}

	.nav-label {
		margin: 0;
		padding: 14px 12px 6px;
		color: #5f668d;
		font-size: 10px;
		font-weight: 750;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	nav a {
		position: relative;
		display: flex;
		height: 36px;
		align-items: center;
		gap: 11px;
		border-radius: 9px;
		padding: 0 11px;
		color: #a7acc6;
		font-size: 12.5px;
		font-weight: 560;
		text-decoration: none;
		transition:
			background 160ms ease,
			color 160ms ease,
			transform 160ms ease;
	}

	nav a:hover {
		transform: translateX(1px);
		background: rgb(255 255 255 / 5%);
		color: white;
	}

	nav a.active {
		background: linear-gradient(90deg, rgb(216 63 155 / 24%), rgb(216 63 155 / 8%));
		color: white;
	}

	nav a.active::before {
		position: absolute;
		top: 8px;
		bottom: 8px;
		left: -12px;
		width: 3px;
		border-radius: 0 3px 3px 0;
		background: #d83f9b;
		content: '';
	}

	.badge {
		margin-left: auto;
		border-radius: 999px;
		background: #2f63f5;
		padding: 1px 7px;
		color: white;
		font-size: 10px;
		font-weight: 750;
	}

	.profile {
		display: flex;
		min-height: 62px;
		align-items: center;
		gap: 10px;
		border: 0;
		border-top: 1px solid #23274c;
		background: transparent;
		padding: 12px;
		color: #70769b;
		text-align: left;
		cursor: pointer;
	}

	.profile:hover {
		background: rgb(255 255 255 / 4%);
	}

	.avatar {
		display: grid;
		width: 32px;
		height: 32px;
		flex: 0 0 32px;
		place-items: center;
		border-radius: 9px;
		background: linear-gradient(140deg, #7552ed, #2f63f5);
		color: white;
		font-size: 11px;
		font-weight: 750;
	}

	.profile-copy {
		display: grid;
		min-width: 0;
		flex: 1;
		gap: 2px;
	}

	.profile-copy strong {
		overflow: hidden;
		color: #eef0fa;
		font-size: 12.5px;
		font-weight: 650;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.profile-copy small {
		font-size: 11px;
	}

	@media (min-width: 900px) {
		aside {
			transform: none;
		}

		.scrim {
			display: none;
		}
	}
</style>
