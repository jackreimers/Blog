<script lang="ts">
	import Container from '$lib/components/container/container.svelte';
	import GitHub from '$lib/components/icons/github/github.svelte';
	import LinkedIn from '$lib/components/icons/linkedin/linkedin.svelte';
</script>

<footer>
	<Container>
		<div class="flex flex-col-reverse sm:flex-row gap-4 text-center justify-between border-t border-gray-300 py-6">
			<div class="text-gray-700">
				<p class="tracking-tight">
					Copyright © 2021 - {new Date().getFullYear()}. All rights reserved.
				</p>
			</div>
			<div class="flex gap-3 mx-auto sm:mx-0 text-gray-500">
				<a
					class="transition-colors duration-300 focus:text-gray-700 mhover:hover:text-gray-700"
					href="https://www.linkedin.com/in/jackreimers"
					target="_blank"
				>
					<LinkedIn class="h-6 w-6" />
				</a>
				<a
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
