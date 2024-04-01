<script>
	import { Mail, Linkedin, Github } from 'lucide-svelte';
</script>

<footer class="mt-16 md:mt-32">
	<div class="flex w-full justify-center gap-3">
		<a
			href="mailto:me@jackreimers.dev"
			class="btn btn-hover rounded-full bg-white p-3 shadow sm:p-4"
		>
			<Mail />
		</a>
		<a
			href="https://www.linkedin.com/in/jackreimers/"
			target="_blank"
			class="btn btn-hover rounded-full bg-white p-3 shadow sm:p-4"
		>
			<Linkedin />
		</a>
		<a
			href="https://github.com/jackreimers"
			target="_blank"
			class="btn btn-hover rounded-full bg-white p-3 shadow sm:p-4"
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
