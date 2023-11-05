<script lang="ts">
	import Icon from '$lib/components/text/icon.svelte';
	import Detail from '$lib/components/text/detail.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Profile from '$lib/components/social/profile.svelte';
</script>

<div class="flex">
	<div class="inline-flex flex-1 flex-col gap-4">
		<h1 class="text-6xl font-semibold">Article Title</h1>

		<div>
			<Detail>
				<Icon slot="icon" icon="calendar_month" />
				<p slot="text">02/11/2023</p>
			</Detail>
		</div>

		<!-- TODO: Have these populated from markdown frontmatter -->
		<div class="flex gap-2">
			<Button
				onClick={() => {}}
				classes="border-2 border-gray-200 bg-gray-100 px-3.5 py-2 hover:border-sky-700"
			>
				<p class="font-semibold">C#</p>
			</Button>

			<Button
				onClick={() => {}}
				classes="border-2 border-gray-200 bg-gray-100 px-3.5 py-2 hover:border-sky-700"
			>
				<p class="font-semibold">.NET</p>
			</Button>

			<Button
				onClick={() => {}}
				classes="border-2 border-gray-200 bg-gray-100 px-3.5 py-2 hover:border-sky-700"
			>
				<p class="font-semibold">Angular</p>
			</Button>

			<Button
				onClick={() => {}}
				classes="border-2 border-gray-200 bg-gray-100 px-3.5 py-2 hover:border-sky-700"
			>
				<p class="font-semibold">React</p>
			</Button>
		</div>

		<Profile />
	</div>
	<div class="flex items-end">
		<!-- TODO: Have this calculated from markdown -->
		<Detail>
			<Icon slot="icon" icon="schedule" />
			<p slot="text">2 minutes</p>
		</Detail>
	</div>
</div>
