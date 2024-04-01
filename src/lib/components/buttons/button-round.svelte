<script lang="ts">
	export let href: string = '';
	export let target: string = '';
</script>

<a
	{href}
	{target}
	class="rounded-full border border-transparent bg-white p-3 shadow transition-colors duration-200 hover:border-gray-700 sm:p-4"
>
	<slot />
</a>
