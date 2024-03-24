<script>
	import { Mail } from 'lucide-svelte';
	import { Linkedin } from 'lucide-svelte';
	import { Github } from 'lucide-svelte';

	import Button from '$lib/components/buttons/button.svelte';
</script>

<footer class="mt-32">
	<div class="flex w-full justify-center gap-3">
		<Button href="mailto:" classes="btn-hover rounded-full bg-white p-4 shadow">
			<Mail />
		</Button>
		<Button
			href="https://www.linkedin.com/in/jackreimers/"
			target="_blank"
			classes="btn-hover rounded-full bg-white p-4 shadow"
		>
			<Linkedin />
		</Button>
		<Button
			href="https://github.com/jackreimers"
			target="_blank"
			classes="btn-hover rounded-full bg-white p-4 shadow"
		>
			<Github />
		</Button>
	</div>
	<div class="w-full text-center">
		<p class="my-4 text-sm font-semibold lg:text-base">
			Copyright © {new Date().getFullYear()}
		</p>
	</div>
</footer>
