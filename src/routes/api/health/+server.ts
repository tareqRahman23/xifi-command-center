import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = () =>
	json({
		status: 'ok',
		service: 'xifi-command-center',
		timestamp: new Date().toISOString()
	});
