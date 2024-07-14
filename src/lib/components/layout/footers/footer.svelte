<script>
	import { Mail, Linkedin, Github } from 'lucide-svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import VerticalStack from '$lib/components/layout/stacks/stack-vertical.svelte';
	import Button from '$lib/components/buttons/button-round.svelte';
</script>

<footer class="mx-auto mt-8 sm:mt-9">
	<VerticalStack classes="mb-2.5 sm:mb-3.5">
		<HorizontalStack>
			<Button href="mailto:me@jackreimers.dev">
				<Mail strokeWidth={2} />
			</Button>
			<Button href="https://www.linkedin.com/in/jackreimers/" target="_blank">
				<Linkedin strokeWidth={2} />
			</Button>
			<Button href="https://github.com/jackreimers" target="_blank">
				<Github strokeWidth={2} />
			</Button>
		</HorizontalStack>
		<p class="text-center font-semibold">
			Copyright © {new Date().getFullYear()}
		</p>
	</VerticalStack>
</footer>
