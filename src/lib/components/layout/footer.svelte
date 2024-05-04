<script>
	import { Mail, Linkedin, Github } from 'lucide-svelte';
	import Button from '$lib/components/buttons/button-round.svelte';
</script>

<footer class="mx-auto mt-8 sm:mt-9">
	<div class="mb-2.5 flex flex-col gap-2.5 sm:mb-3.5 sm:gap-3.5">
		<div class="flex gap-2.5 sm:gap-3.5">
			<Button href="mailto:me@jackreimers.dev">
				<Mail strokeWidth={1.75} />
			</Button>
			<Button href="https://www.linkedin.com/in/jackreimers/" target="_blank">
				<Linkedin strokeWidth={1.75} />
			</Button>
			<Button href="https://github.com/jackreimers" target="_blank">
				<Github strokeWidth={1.75} />
			</Button>
		</div>
		<p class="text-center font-semibold">
			Copyright © {new Date().getFullYear()}
		</p>
	</div>
</footer>
