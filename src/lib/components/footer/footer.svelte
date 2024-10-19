<script lang="ts">
	import Container from '$lib/components/container/container.svelte';
	import LinkedIn from '$lib/components/icons/linkedin/linkedin.svelte';
	import GitHub from '$lib/components/icons/github/github.svelte';
</script>

<footer>
	<Container>
		<div
			class="flex flex-col-reverse justify-between gap-4 border-t-2 border-gray-200 py-6 text-center sm:flex-row"
		>
			<p class="text-sm tracking-tight text-gray-500 sm:text-base">
				Copyright © 2021 - {new Date().getFullYear()}. All rights reserved.
			</p>
			<div class="mx-auto flex gap-3 text-gray-500 sm:mx-0">
				<a
					aria-label="LinkedIn"
					class="transition-colors duration-300 focus:text-gray-700 mhover:hover:text-gray-700"
					href="https://www.linkedin.com/in/jackreimers"
					target="_blank"
				>
					<LinkedIn class="h-6 w-6" />
				</a>
				<a
					aria-label="GitHub"
					class="transition-colors duration-300 focus:text-gray-700 mhover:hover:text-gray-700"
					href="https://github.com/jackreimers"
					target="_blank"
				>
					<GitHub class="h-6 w-6" />
				</a>
			</div>
		</div>
	</Container>
</footer>
