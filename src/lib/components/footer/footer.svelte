<script>
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import SocialLinks from '$lib/components/contact/social.svelte';
</script>

<footer class="mx-auto mt-8 sm:mt-9">
	<VerticalStack classes="mb-2.5 sm:mb-3.5">
		<SocialLinks />
		<p class="text-center text-sm font-semibold sm:text-base">
			Copyright © {new Date().getFullYear()}
		</p>
	</VerticalStack>
</footer>
