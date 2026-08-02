<script lang="ts">
	import { ChevronDown, Play, RadioTower } from '@lucide/svelte';
	import { Button } from 'konsta/svelte';
	import { activityFeed, conversationBars, metrics, modelCosts } from '$lib/data/overview';
	import MetricCard from './MetricCard.svelte';
	import PanelCard from './PanelCard.svelte';

	let liveSessionStarted = $state(false);
	const filters = ['Today', 'All teams', 'All channels', 'All personas'];
</script>

<section class="dashboard">
	<div class="hero-row">
		<div>
			<h1>Good evening, Sarah</h1>
			<p>
				Your AI frontline has handled 1,417 conversations today · 102 sessions active right now.
			</p>
		</div>
		<div class="filters" aria-label="Dashboard filters">
			{#each filters as filter (filter)}
				<Button
					outline
					rounded
					small
					inline
					class="filter-button !h-9 !border-[#e1e3ed] !bg-white !px-3 !text-[12px] !font-medium !text-[#3a3f57]"
				>
					{filter}<ChevronDown size={13} />
				</Button>
			{/each}
			<Button
				rounded
				small
				inline
				class="start-button !h-9 !bg-[#d83f9b] !px-4 !text-[12px] !font-semibold !text-white"
				onclick={() => (liveSessionStarted = true)}
			>
				{#if liveSessionStarted}<RadioTower size={15} /> Live session started{:else}<Play
						size={14}
						fill="currentColor"
					/> Start live session{/if}
			</Button>
		</div>
	</div>

	<div class="metrics-grid">
		{#each metrics as metric (metric.label)}
			<MetricCard {metric} />
		{/each}
	</div>

	<div class="dashboard-grid">
		<div class="primary-column">
			<PanelCard title="Conversations by hour" subtitle="AI vs. human handling · last 14 hours">
				{#snippet action()}
					<div class="legend">
						<span><i class="ai"></i>AI</span>
						<span><i class="human"></i>Human</span>
					</div>
				{/snippet}
				<div class="bar-chart" aria-label="Conversations by hour bar chart">
					{#each conversationBars as bar (bar.label)}
						<div class="bar-column">
							<div class="bar-stack">
								<div class="human-bar" style:height={`${bar.human}px`}></div>
								<div class="ai-bar" style:height={`${bar.ai}px`}></div>
							</div>
							<span>{bar.label}</span>
						</div>
					{/each}
				</div>
			</PanelCard>

			<div class="detail-grid">
				<PanelCard title="Customer sentiment" subtitle="Rolling 12-hour trend">
					<svg class="sentiment-chart" viewBox="0 0 300 88" role="img" aria-label="Sentiment trend">
						<defs>
							<linearGradient id="sentiment-fill" x1="0" y1="0" x2="0" y2="1">
								<stop offset="0" stop-color="#17b26a" stop-opacity=".3" />
								<stop offset="1" stop-color="#17b26a" stop-opacity="0" />
							</linearGradient>
						</defs>
						<path
							d="M0 65 C18 55 28 56 44 60 S72 43 90 48 S115 32 138 38 S163 24 183 31 S210 19 231 27 S260 18 300 12 L300 88 L0 88 Z"
							fill="url(#sentiment-fill)"
						/>
						<path
							d="M0 65 C18 55 28 56 44 60 S72 43 90 48 S115 32 138 38 S163 24 183 31 S210 19 231 27 S260 18 300 12"
							fill="none"
							stroke="#17b26a"
							stroke-width="2.5"
							stroke-linecap="round"
						/>
					</svg>
					<div class="stat-footer"><span>Avg. positive</span><strong>72%</strong></div>
				</PanelCard>

				<PanelCard title="Cost by model" subtitle="Today · $186.00 total">
					<div class="cost-list">
						{#each modelCosts as model (model.name)}
							<div class="cost-row">
								<div><span>{model.name}</span><strong>{model.value}</strong></div>
								<div class="track">
									<div
										class="fill"
										style:width={`${model.percent}%`}
										style:background={model.color}
									></div>
								</div>
							</div>
						{/each}
					</div>
				</PanelCard>
			</div>
		</div>

		<div class="secondary-column">
			<PanelCard title="Live activity">
				{#snippet action()}
					<button class="view-all" type="button">View all</button>
				{/snippet}
				<div class="activity-list">
					{#each activityFeed as event (event.time)}
						<div class="activity-row">
							<i style:background={event.color}></i>
							<div>
								<p>{event.text}</p>
								<time>{event.time}</time>
							</div>
						</div>
					{/each}
				</div>
			</PanelCard>

			<PanelCard title="Channel distribution" subtitle="Active sessions by channel">
				<div class="channel-layout">
					<div class="donut" aria-label="Voice 48 percent, chat 34 percent, email 18 percent">
						<div><strong>102</strong><span>active</span></div>
					</div>
					<div class="channel-legend">
						<span><i class="voice"></i>Voice <strong>48%</strong></span>
						<span><i class="chat"></i>Chat <strong>34%</strong></span>
						<span><i class="email"></i>Email <strong>18%</strong></span>
					</div>
				</div>
			</PanelCard>
		</div>
	</div>
</section>

<style>
	.dashboard {
		width: min(1520px, 100%);
		padding: 24px clamp(16px, 2.4vw, 30px) 40px;
	}

	.hero-row {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 20px;
		margin-bottom: 20px;
	}

	h1 {
		margin: 0 0 5px;
		color: #101239;
		font-size: clamp(23px, 2.2vw, 27px);
		font-weight: 760;
		letter-spacing: -0.035em;
	}

	.hero-row p {
		margin: 0;
		color: #5f657a;
		font-size: 13px;
	}

	.filters {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 7px;
	}

	:global(.filter-button),
	:global(.start-button) {
		gap: 6px;
		white-space: nowrap;
	}

	:global(.start-button) {
		box-shadow: 0 7px 15px -7px rgb(216 63 155 / 80%);
	}

	.metrics-grid {
		display: grid;
		grid-template-columns: repeat(6, minmax(135px, 1fr));
		gap: 12px;
		margin-bottom: 15px;
	}

	.dashboard-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.72fr) minmax(280px, 1fr);
		gap: 15px;
	}

	.primary-column,
	.secondary-column {
		display: grid;
		align-content: start;
		gap: 15px;
	}

	.detail-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 15px;
	}

	.legend {
		display: flex;
		gap: 14px;
		color: #5a5f72;
		font-size: 10.5px;
		font-weight: 550;
	}

	.legend span,
	.channel-legend span {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.legend i,
	.channel-legend i {
		display: inline-block;
		width: 8px;
		height: 8px;
		border-radius: 3px;
	}

	.legend .ai,
	.voice {
		background: #2f63f5;
	}

	.legend .human,
	.chat {
		background: #7552ed;
	}

	.email {
		background: #d83f9b;
	}

	.bar-chart {
		display: flex;
		height: 165px;
		align-items: flex-end;
		gap: clamp(4px, 1vw, 8px);
		padding-top: 5px;
		background-image: linear-gradient(#eff0f5 1px, transparent 1px);
		background-size: 100% 38px;
	}

	.bar-column {
		display: flex;
		min-width: 0;
		flex: 1;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		gap: 5px;
	}

	.bar-stack {
		display: flex;
		width: 100%;
		max-width: 26px;
		flex-direction: column;
		justify-content: flex-end;
	}

	.human-bar {
		border-radius: 3px 3px 0 0;
		background: #7552ed;
	}

	.ai-bar {
		border-radius: 0 0 3px 3px;
		background: #2f63f5;
	}

	.bar-column > span {
		color: #a5a9b9;
		font-size: 9px;
	}

	.sentiment-chart {
		display: block;
		width: 100%;
		height: 94px;
	}

	.stat-footer {
		display: flex;
		justify-content: space-between;
		margin-top: 2px;
		color: #8a8fa3;
		font-size: 11px;
	}

	.stat-footer strong {
		color: #0f8a51;
	}

	.cost-list {
		display: grid;
		gap: 11px;
	}

	.cost-row > div:first-child {
		display: flex;
		justify-content: space-between;
		gap: 10px;
		margin-bottom: 5px;
		color: #3a3f57;
		font-size: 10.5px;
	}

	.cost-row strong {
		color: #101239;
		font-weight: 650;
	}

	.track {
		height: 5px;
		overflow: hidden;
		border-radius: 99px;
		background: #f0f1f7;
	}

	.fill {
		height: 100%;
		border-radius: inherit;
	}

	.view-all {
		border: 0;
		background: none;
		padding: 2px 0;
		color: #8a8fa3;
		font-size: 10.5px;
		cursor: pointer;
	}

	.view-all:hover {
		color: #2f63f5;
	}

	.activity-list {
		margin-top: -8px;
	}

	.activity-row {
		display: flex;
		gap: 10px;
		border-bottom: 1px solid #f1f2f8;
		padding: 9px 0;
	}

	.activity-row:last-child {
		border-bottom: 0;
		padding-bottom: 0;
	}

	.activity-row > i {
		width: 7px;
		height: 7px;
		flex: 0 0 7px;
		margin-top: 5px;
		border-radius: 50%;
	}

	.activity-row p {
		margin: 0;
		color: #31354b;
		font-size: 11.5px;
		line-height: 1.42;
	}

	.activity-row time {
		display: block;
		margin-top: 2px;
		color: #a1a5b8;
		font-family: ui-monospace, 'SFMono-Regular', Consolas, monospace;
		font-size: 9.5px;
	}

	.channel-layout {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: clamp(20px, 3vw, 36px);
	}

	.donut {
		position: relative;
		display: grid;
		width: 116px;
		height: 116px;
		flex: 0 0 116px;
		place-items: center;
		border-radius: 50%;
		background: conic-gradient(#2f63f5 0 48%, #7552ed 48% 82%, #d83f9b 82% 100%);
	}

	.donut::before {
		position: absolute;
		width: 76px;
		height: 76px;
		border-radius: 50%;
		background: white;
		content: '';
	}

	.donut > div {
		position: relative;
		display: grid;
		place-items: center;
	}

	.donut strong {
		font-size: 22px;
		line-height: 1;
	}

	.donut span {
		margin-top: 3px;
		color: #8a8fa3;
		font-size: 10px;
	}

	.channel-legend {
		display: grid;
		gap: 11px;
		min-width: 112px;
		color: #5a5f72;
		font-size: 11px;
	}

	.channel-legend strong {
		margin-left: auto;
		color: #101239;
		font-weight: 700;
	}

	@media (max-width: 1250px) {
		.metrics-grid {
			grid-template-columns: repeat(3, minmax(150px, 1fr));
		}
	}

	@media (max-width: 1060px) {
		.hero-row {
			align-items: flex-start;
			flex-direction: column;
		}

		.filters {
			justify-content: flex-start;
			flex-wrap: wrap;
		}

		.dashboard-grid {
			grid-template-columns: 1fr;
		}

		.secondary-column {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 650px) {
		.dashboard {
			padding-top: 20px;
		}

		.filters {
			display: grid;
			width: 100%;
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		:global(.filter-button),
		:global(.start-button) {
			width: 100%;
		}

		.metrics-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.detail-grid,
		.secondary-column {
			grid-template-columns: 1fr;
		}

		.bar-chart {
			gap: 3px;
		}
	}

	@media (max-width: 410px) {
		.metrics-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
