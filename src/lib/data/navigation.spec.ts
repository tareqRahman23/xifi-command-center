import { describe, expect, it } from 'vitest';
import { allNavigationItems, sectionContent } from './navigation';

describe('command center navigation', () => {
	it('has unique, absolute routes', () => {
		const hrefs = allNavigationItems.map((item) => item.href);

		expect(new Set(hrefs).size).toBe(hrefs.length);
		expect(hrefs.every((href) => href.startsWith('/'))).toBe(true);
	});

	it('provides content for every non-overview workspace', () => {
		const slugs = allNavigationItems
			.filter((item) => item.href !== '/')
			.map((item) => item.href.slice(1, -1));

		expect(Object.keys(sectionContent).sort()).toEqual(slugs.sort());
	});
});
