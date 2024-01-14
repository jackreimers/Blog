<script lang="ts">
	import { PUBLIC_APP_ROOT } from '$env/static/public';
	import Icon from '$lib/components/text/icon.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	const url = `${PUBLIC_APP_ROOT}/images/headshot.png`;
</script>

<svelte:head>
	<title>Jack Reimers | About</title>
</svelte:head>

<div class="flex flex-col">
	<div>
		<div
			class="mx-auto h-[170px] w-[170px] rounded-full border border-gray-300 bg-cover"
			style="background-image: url({url})"
		/>
		<div class="mt-4 text-center">
			<h2 class="text-3xl font-semibold">Jack Reimers</h2>
			<p class="font-medium text-gray-500">Software Engineer</p>
			<p class="text-[#CC4141] font-medium">SSW</p>
		</div>
		<div class="my-6 h-[2px] w-full rounded-full bg-gray-200" />
		<div class="flex w-full justify-center gap-3">
			<Button classes="rounded-full bg-gray-100 p-4 hover:bg-gray-200">
				<Icon icon="mail" classes="text-2xl" />
			</Button>
			<Button classes="rounded-full bg-gray-100 p-4 hover:bg-gray-200">
				<Icon icon="question_mark" classes="text-2xl" />
			</Button>
			<Button classes="rounded-full bg-gray-100 p-4 hover:bg-gray-200">
				<Icon icon="question_mark" classes="text-2xl" />
			</Button>
		</div>
		<div class="my-6 h-[2px] w-full rounded-full bg-gray-200" />
	</div>
	<div class="">
		<p class="mb-5">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper
			feugiat nibh.
		</p>
		<p class="mb-5">
			In vitae turpis massa sed elementum tempus. Laoreet id donec ultrices tincidunt arcu non
			sodales neque sodales. Velit laoreet id donec ultrices. Pulvinar neque laoreet
			suspendisse interdum consectetur libero id. Mi bibendum neque egestas congue.
		</p>
	</div>
</div>
