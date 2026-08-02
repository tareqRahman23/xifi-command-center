<script lang="ts">
	import { Bell, ChevronDown, Menu, Search } from '@lucide/svelte';
	import { Button } from 'konsta/svelte';

	let { onMenu }: { onMenu: () => void } = $props();
</script>

<header>
	<Button
		clear
		rounded
		class="menu-button !h-10 !w-10 !p-0 !text-[#454a62] md:!hidden"
		aria-label="Open navigation"
		onclick={onMenu}
	>
		<Menu size={20} />
	</Button>

	<button class="workspace" type="button">
		<span></span>
		<strong>Acme Support</strong>
		<ChevronDown size={14} />
	</button>

	<label class="search">
		<Search size={16} strokeWidth={2} />
		<span class="sr-only">Search XIFI</span>
		<input placeholder="Search sessions, customers, tickets, knowledge…" />
		<kbd>⌘K</kbd>
	</label>

	<div class="actions">
		<div class="system-status"><i></i><span>All systems live</span></div>
		<Button
			clear
			rounded
			class="notification !relative !h-10 !w-10 !border !border-[#e7e8f1] !p-0 !text-[#565b70]"
			aria-label="Notifications"
		>
			<Bell size={18} strokeWidth={1.8} />
			<span class="notification-dot"></span>
		</Button>
	</div>
</header>

<style>
	header {
		display: flex;
		height: 60px;
		flex: 0 0 60px;
		align-items: center;
		gap: 14px;
		border-bottom: 1px solid #e7e8f1;
		background: rgb(255 255 255 / 92%);
		padding: 0 max(14px, var(--k-safe-area-right)) 0 max(14px, var(--k-safe-area-left));
		backdrop-filter: blur(18px);
	}

	.workspace {
		display: flex;
		height: 36px;
		align-items: center;
		gap: 8px;
		border: 1px solid #e7e8f1;
		border-radius: 10px;
		background: white;
		padding: 0 11px;
		color: #101239;
		cursor: pointer;
	}

	.workspace:hover {
		background: #f8f8fb;
	}

	.workspace > span {
		width: 7px;
		height: 7px;
		border-radius: 2px;
		background: #d83f9b;
	}

	.workspace strong {
		font-size: 12.5px;
		font-weight: 650;
		white-space: nowrap;
	}

	.search {
		display: flex;
		width: min(440px, 42vw);
		height: 36px;
		align-items: center;
		gap: 9px;
		border: 1px solid #edeef5;
		border-radius: 10px;
		background: #f4f5fa;
		padding: 0 12px;
		color: #9296ab;
	}

	.search:focus-within {
		border-color: #9ab1f8;
		box-shadow: 0 0 0 3px rgb(47 99 245 / 10%);
	}

	.search input {
		min-width: 0;
		flex: 1;
		border: 0;
		outline: 0;
		background: transparent;
		color: #101239;
		font-size: 12.5px;
	}

	.search input::placeholder {
		color: #9296ab;
	}

	.search kbd {
		border: 1px solid #dfe1eb;
		border-radius: 5px;
		background: white;
		padding: 1px 5px;
		color: #8a8fa3;
		font-size: 10px;
		font-family: inherit;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 7px;
		margin-left: auto;
	}

	.system-status {
		display: flex;
		height: 32px;
		align-items: center;
		gap: 7px;
		border-radius: 9px;
		background: rgb(23 178 106 / 8%);
		padding: 0 11px;
		color: #0f8a51;
		font-size: 11.5px;
		font-weight: 650;
		white-space: nowrap;
	}

	.system-status i {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #17b26a;
		box-shadow: 0 0 0 4px rgb(23 178 106 / 10%);
	}

	.notification-dot {
		position: absolute;
		top: 7px;
		right: 7px;
		width: 7px;
		height: 7px;
		border: 2px solid white;
		border-radius: 50%;
		background: #ff6e73;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
	}

	@media (max-width: 700px) {
		.search {
			display: none;
		}

		.system-status span {
			display: none;
		}

		.system-status {
			width: 32px;
			justify-content: center;
			padding: 0;
		}
	}
</style>
