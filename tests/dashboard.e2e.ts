import { expect, test } from '@playwright/test';

test('renders the iOS command center and navigates to a workspace', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle(/XIFI Command Center/);
	await expect(page.getByRole('heading', { name: 'Good evening, Sarah' })).toBeVisible();
	await expect(page.getByText('1,417', { exact: true })).toBeVisible();

	await page.getByRole('link', { name: 'Live Operations' }).click();
	await expect(page).toHaveURL(/\/live-operations\/$/);
	await expect(page.getByRole('heading', { name: 'Live Operations' })).toBeVisible();
});

test('exposes the health endpoint', async ({ request }) => {
	const response = await request.get('/api/health');

	expect(response.ok()).toBe(true);
	expect(await response.json()).toMatchObject({
		status: 'ok',
		service: 'xifi-command-center'
	});
});
