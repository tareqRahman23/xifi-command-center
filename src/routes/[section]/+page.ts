import { error } from '@sveltejs/kit';
import { sectionContent } from '$lib/data/navigation';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const content = sectionContent[params.section];

	if (!content) {
		error(404, 'Workspace not found');
	}

	return { section: params.section };
};
