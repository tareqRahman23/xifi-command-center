export type Metric = {
	label: string;
	value: string;
	delta: string;
	direction: 'up' | 'down' | 'neutral';
	accent: string;
	live?: boolean;
};

export const metrics: Metric[] = [
	{
		label: 'Active sessions',
		value: '102',
		delta: 'live now',
		direction: 'neutral',
		accent: '#2f63f5',
		live: true
	},
	{
		label: 'Conversations today',
		value: '1,417',
		delta: '8.2% vs yesterday',
		direction: 'up',
		accent: '#d83f9b'
	},
	{
		label: 'AI resolution rate',
		value: '78%',
		delta: '4.1 pts',
		direction: 'up',
		accent: '#17b26a'
	},
	{
		label: 'Human escalations',
		value: '42',
		delta: '6 vs yesterday',
		direction: 'down',
		accent: '#ff6e73'
	},
	{
		label: 'Avg. response time',
		value: '1.8s',
		delta: '0.3s',
		direction: 'down',
		accent: '#7552ed'
	},
	{
		label: 'Estimated cost today',
		value: '$196.05',
		delta: '$12.40 vs plan',
		direction: 'up',
		accent: '#f4b740'
	}
];

export const conversationBars = [
	{ label: '9', ai: 31, human: 10 },
	{ label: '10', ai: 39, human: 14 },
	{ label: '11', ai: 48, human: 17 },
	{ label: '12', ai: 58, human: 22 },
	{ label: '13', ai: 71, human: 29 },
	{ label: '14', ai: 88, human: 34 },
	{ label: '15', ai: 76, human: 31 },
	{ label: '16', ai: 70, human: 27 },
	{ label: '17', ai: 85, human: 38 },
	{ label: '18', ai: 91, human: 41 },
	{ label: '19', ai: 74, human: 34 },
	{ label: '20', ai: 87, human: 40 },
	{ label: '21', ai: 96, human: 46 },
	{ label: '22', ai: 109, human: 50 }
];

export const activityFeed = [
	{
		text: 'Call campaign “Delivery follow-up” dialed 40 numbers',
		time: '22:27:25',
		color: '#7552ed'
	},
	{ text: 'Knowledge sync completed: Notion — Ops SOPs', time: '22:27:21', color: '#17b26a' },
	{
		text: 'Automation ran: Create ticket on negative sentiment',
		time: '22:27:17',
		color: '#17b26a'
	},
	{
		text: 'Session escalated to human agent — Billing dispute',
		time: '22:27:12',
		color: '#ff6e73'
	},
	{ text: 'Zendesk ticket #48291 updated', time: '22:27:08', color: '#2f63f5' }
];

export const modelCosts = [
	{ name: 'GPT-4o', value: '$78.40', percent: 100, color: '#2f63f5' },
	{ name: 'Llama-3.1-70B · local', value: '$23.10', percent: 30, color: '#7552ed' },
	{ name: 'Whisper STT', value: '$54.60', percent: 70, color: '#17b26a' },
	{ name: 'ElevenLabs TTS', value: '$29.90', percent: 38, color: '#d83f9b' }
];
