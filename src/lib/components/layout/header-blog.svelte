<script lang="ts">
	import Icon from '$lib/components/text/icon.svelte';
	import Detail from '$lib/components/text/detail.svelte';
	import Button from '$lib/components/buttons/button.svelte';
</script>

<div class="inline-flex flex-col gap-4">
	<h1 class="text-6xl font-semibold">Article Title</h1>

	<div>
		<Detail>
			<Icon slot="icon" icon="calendar_month" />
			<p slot="text">02/11/2023</p>
		</Detail>
	</div>

	<div class="border- flex gap-2">
		<Button
			onClick={() => {}}
			classes="border-2 border-gray-200 bg-gray-100 px-3.5 py-2 hover:border-sky-700"
		>
			<p>C#</p>
		</Button>

		<Button
			onClick={() => {}}
			classes="border-2 border-gray-200 bg-gray-100 px-3.5 py-2 hover:border-sky-700"
		>
			<p>.NET</p>
		</Button>

		<Button
			onClick={() => {}}
			classes="border-2 border-gray-200 bg-gray-100 px-3.5 py-2 hover:border-sky-700"
		>
			<p>Angular</p>
		</Button>

		<Button
			onClick={() => {}}
			classes="border-2 border-gray-200 bg-gray-100 px-3.5 py-2 hover:border-sky-700"
		>
			<p>React</p>
		</Button>
	</div>
</div>
