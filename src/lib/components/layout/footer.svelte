<script>
	import { Direction, Size } from '$lib/common/enums.ts';
	import { Mail, Linkedin, Github } from 'lucide-svelte';
	import Stack from '$lib/components/layout/stack.svelte';
	import Button from '$lib/components/buttons/button-round.svelte';
</script>

<footer class="mx-auto mt-16 md:mt-32">
	<Stack direction={Direction.Vertical} size={Size.M}>
		<Stack direction={Direction.Horizontal} size={Size.M}>
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
		<span />
	</Stack>
</footer>
