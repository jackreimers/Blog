<script>
	import { PUBLIC_APP_ROOT } from '$env/static/public';
	import Button from '$lib/components/buttons/button.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	const url = `${PUBLIC_APP_ROOT}/icons/github.svg`;
</script>

<footer class="mt-32">
	<!-- TODO: Decide whether to include this or not -->
	<!--
    <div class="container mx-auto flex w-full gap-8 px-8 py-8">
        <div class="flex-1">
            <p class="mb-3 text-2xl font-medium">Header</p>
            <p>
                Text goes here blah blah blah and on and more and just a whole lotta text type beat
                up in this div element right now.
            </p>
        </div>
        <div class="flex-1">
            <p class="mb-3 text-2xl font-medium">Header</p>
            <p>
                Text goes here blah blah blah and on and more and just a whole lotta text type beat
                up in this div element right now.
            </p>
        </div>
        <div class="flex-1">
            <p class="mb-3 text-2xl font-medium">Header</p>
            <p>
                Text goes here blah blah blah and on and more and just a whole lotta text type beat
                up in this div element right now.
            </p>
        </div>
    </div>
    -->

	<!-- Social buttons 
    <div class="h-[50px] w-full border-y border-gray-300 bg-gray-100"></div>
    -->
	<div class="flex w-full justify-center gap-3">
		<Button classes="rounded-full bg-gray-100 p-4">
			<Icon icon="mail" classes="text-2xl" />
		</Button>
		<Button classes="rounded-full bg-gray-100 p-4">
			<Icon icon="question_mark" classes="text-2xl" />
		</Button>
		<Button classes="rounded-full bg-gray-100 p-4">
			<Icon icon="question_mark" classes="text-2xl" />
		</Button>
	</div>
	<div class="w-full text-center">
		<p class="my-4 font-semibold">Copyright © 2023</p>
	</div>
</footer>
