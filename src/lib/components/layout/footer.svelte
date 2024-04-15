<script>
	import { Direction } from '$lib/common/enums.ts';
	import { Mail, Linkedin, Github } from 'lucide-svelte';
	import Stack from '$lib/components/layout/stack.svelte';
	import Button from '$lib/components/buttons/button-round.svelte';
</script>

<footer class="mx-auto mt-14">
	<Stack direction={Direction.Vertical} classes="mb-2.5 gap-2.5 sm:mb-3 sm:gap-3.5">
		<Stack direction={Direction.Horizontal} classes="gap-2.5 sm:gap-3.5">
			<Button href="mailto:me@jackreimers.dev">
				<Mail />
			</Button>
			<Button href="https://www.linkedin.com/in/jackreimers/" target="_blank">
				<Linkedin />
			</Button>
			<Button href="https://github.com/jackreimers" target="_blank">
				<Github />
			</Button>
		</Stack>
		<p class="text-center font-semibold">
			Copyright © {new Date().getFullYear()}
		</p>
	</Stack>
</footer>
