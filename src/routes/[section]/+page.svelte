<script lang="ts">
	import AppShell from '$lib/components/AppShell.svelte';
	import SectionPlaceholder from '$lib/components/SectionPlaceholder.svelte';
	import { sectionContent } from '$lib/data/navigation';

	let { data } = $props();
	const content = $derived(sectionContent[data.section]);
</script>

<AppShell>
	<SectionPlaceholder {...content} />
</AppShell>
