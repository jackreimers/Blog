<script>
	import { Mail } from 'lucide-svelte';
	import { Linkedin } from 'lucide-svelte';
	import { Github } from 'lucide-svelte';
</script>

<footer class="mt-16 md:mt-32">
	<div class="flex w-full justify-center gap-3">
		<a href="mailto:me@jackreimers.dev" class="btn-hover rounded-full bg-white p-4 shadow">
			<Mail />
		</a>
		<a
			href="https://www.linkedin.com/in/jackreimers/"
			target="_blank"
			class="btn-hover rounded-full bg-white p-4 shadow"
		>
			<Linkedin />
		</a>
		<a
			href="https://github.com/jackreimers"
			target="_blank"
			class="btn-hover rounded-full bg-white p-4 shadow"
		>
			<Github />
		</a>
	</div>
	<div class="w-full text-center">
		<p class="my-4 text-sm font-semibold lg:text-base">
			Copyright © {new Date().getFullYear()}
		</p>
	</div>
</footer>
