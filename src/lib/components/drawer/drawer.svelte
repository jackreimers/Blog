<script lang="ts">
	import {
		AppWindow,
		BrainCircuit,
		Bug,
		CloudCog,
		GaugeCircle,
		Globe2,
		HardDriveUpload,
		Mail,
		Monitor,
		Network,
		Shield,
		Workflow
	} from 'lucide-svelte';
	import DrawerCard from '$lib/components/drawer/drawer-card.svelte';

	let activeTab = 0;
</script>

<div class="flex justify-evenly gap-4 border-t-2 border-gray-300 sm:gap-6">
	<button
		class="w-full -translate-y-[2px] border-t-2 pb-2 pt-4 transition-colors duration-300 sm:pb-4 sm:pt-6
			{activeTab === 0 ? 'border-blue-600' : 'border-gray-300 mhover:hover:border-gray-500'}"
		on:click={() => (activeTab = 0)}
	>
		<span class="block text-sm font-semibold sm:text-xl">Development</span>
		<span class="mt-4 hidden tracking-tight text-gray-700 sm:block">
			Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum aenean eget taciti
			torquent.
		</span>
	</button>
	<button
		class="w-full -translate-y-[2px] border-t-2 pb-2 pt-4 transition-colors duration-300 sm:pb-4 sm:pt-6
			{activeTab === 1 ? 'border-blue-600' : 'border-gray-300 mhover:hover:border-gray-500'}"
		on:click={() => (activeTab = 1)}
	>
		<span class="block text-sm font-semibold sm:text-xl">Hosting</span>
		<span class="mt-4 hidden tracking-tight text-gray-700 sm:block">
			Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum aenean eget taciti
			torquent.
		</span>
	</button>
	<button
		class="w-full -translate-y-[2px] border-t-2 pb-2 pt-4 transition-colors duration-300 sm:pb-4 sm:pt-6
			{activeTab === 2 ? 'border-blue-600' : 'border-gray-300 mhover:hover:border-gray-500'}"
		on:click={() => (activeTab = 2)}
	>
		<span class="block text-sm font-semibold sm:text-xl">Maintenance</span>
		<span class="mt-4 hidden tracking-tight text-gray-700 sm:block">
			Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum aenean eget taciti
			torquent.
		</span>
	</button>
</div>
<div class="mt-6 grid grid-cols-1 gap-4 text-center">
	{#if activeTab === 0}
		<DrawerCard icon={Monitor} title="Websites" />
		<DrawerCard icon={AppWindow} title="Web Applications" />
		<DrawerCard icon={Network} title="API Development" />
		<DrawerCard icon={BrainCircuit} title="Artificial Intelligence" />
	{:else if activeTab === 1}
		<DrawerCard icon={CloudCog} title="Cloud Hosting" />
		<DrawerCard icon={Globe2} title="Custom Domains" />
		<DrawerCard icon={Mail} title="Email Hosting" />
		<DrawerCard icon={Workflow} title="Continuous Integration" />
	{:else if activeTab === 2}
		<DrawerCard icon={Shield} title="Security Updates" />
		<DrawerCard icon={HardDriveUpload} title="Content Updates" />
		<DrawerCard icon={GaugeCircle} title="Performance Optimisation" />
		<DrawerCard icon={Bug} title="Bug Fixes" />
	{/if}
</div>
