<script>
	import { PUBLIC_APP_ROOT } from '$env/static/public';
	import Button from '$lib/components/buttons/button.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	const url = `${PUBLIC_APP_ROOT}/icons/github.svg`;
</script>

<footer class="mt-32">
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
	<div class="w-full text-center">
		<p class="my-4 text-sm font-semibold lg:text-base">Copyright © 2023</p>
	</div>
</footer>
