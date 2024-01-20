<script>
	import { Mail } from 'lucide-svelte';
	import { Linkedin } from 'lucide-svelte';
	import { Github } from 'lucide-svelte';

	import Button from '$lib/components/buttons/button.svelte';
</script>

<footer class="mt-32">
	<div class="flex w-full justify-center gap-3">
		<Button
			classes="transform rounded-full bg-gray-100 p-4 transition-all hover:translate-y-[-5px] hover:bg-gray-200"
		>
			<Mail />
		</Button>
		<Button
			href="https://www.linkedin.com/in/jackreimers/"
			classes="transform rounded-full bg-gray-100 p-4 transition-all hover:translate-y-[-5px] hover:bg-gray-200"
		>
			<Linkedin />
		</Button>
		<Button
			href="https://github.com/jackreimers"
			classes="transform rounded-full bg-gray-100 p-4 transition-all hover:translate-y-[-5px] hover:bg-gray-200"
		>
			<Github />
		</Button>
	</div>
	<div class="w-full text-center">
		<p class="my-4 text-sm font-semibold lg:text-base">Copyright © 2023</p>
	</div>
</footer>
