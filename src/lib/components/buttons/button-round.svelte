<script lang="ts">
	export let href: string = '';
	export let target: string = '';
</script>

<a {href} {target} class="rounded-full bg-blue-800 p-3 text-white sm:p-4">
	<slot />
</a>
