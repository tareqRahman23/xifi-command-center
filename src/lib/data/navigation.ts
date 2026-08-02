import {
	Activity,
	BarChart3,
	Bot,
	Braces,
	BrainCircuit,
	CreditCard,
	FileCheck2,
	Gauge,
	Headphones,
	LayoutDashboard,
	LibraryBig,
	MessageSquareText,
	Phone,
	PlugZap,
	RadioTower,
	Settings,
	ShieldCheck,
	Sparkles,
	Workflow
} from '@lucide/svelte';
import type { Component } from 'svelte';

export type NavItem = {
	label: string;
	href: '/' | `/${string}/`;
	icon: Component;
	badge?: string;
};

export type NavSection = {
	label?: string;
	items: NavItem[];
};

export const navigation: NavSection[] = [
	{
		items: [{ label: 'Overview', href: '/', icon: LayoutDashboard }]
	},
	{
		label: 'Operations',
		items: [
			{ label: 'Live Operations', href: '/live-operations/', icon: RadioTower, badge: '87' },
			{ label: 'Conversations', href: '/conversations/', icon: MessageSquareText },
			{ label: 'Calls', href: '/calls/', icon: Phone },
			{ label: 'Tickets', href: '/tickets/', icon: FileCheck2, badge: '42' }
		]
	},
	{
		label: 'AI Workforce',
		items: [
			{ label: 'Personas', href: '/personas/', icon: Bot },
			{ label: 'Copilot', href: '/copilot/', icon: Sparkles },
			{ label: 'Automations', href: '/automations/', icon: Workflow },
			{ label: 'Knowledge', href: '/knowledge/', icon: LibraryBig }
		]
	},
	{
		label: 'Intelligence',
		items: [
			{ label: 'Insights', href: '/insights/', icon: BrainCircuit },
			{ label: 'Analytics', href: '/analytics/', icon: BarChart3 },
			{ label: 'Quality', href: '/quality/', icon: ShieldCheck }
		]
	},
	{
		label: 'Platform',
		items: [
			{ label: 'Integrations', href: '/integrations/', icon: PlugZap },
			{ label: 'Usage & Billing', href: '/usage-billing/', icon: CreditCard },
			{ label: 'Platform Health', href: '/platform-health/', icon: Activity },
			{ label: 'Developers', href: '/developers/', icon: Braces },
			{ label: 'Settings', href: '/settings/', icon: Settings }
		]
	}
];

export const allNavigationItems = navigation.flatMap((section) => section.items);

export const sectionContent: Record<
	string,
	{ title: string; description: string; icon: Component; status: string }
> = Object.fromEntries(
	allNavigationItems
		.filter((item) => item.href !== '/')
		.map((item) => [
			item.href.slice(1, -1),
			{
				title: item.label,
				description: `The ${item.label.toLowerCase()} workspace is connected to the production shell and ready for its feature implementation.`,
				icon: item.icon,
				status: item.badge ? `${item.badge} items need attention` : 'Environment ready'
			}
		])
);

export const supportIcon = Headphones;
export const healthIcon = Gauge;
