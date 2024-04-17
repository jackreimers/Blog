<script lang="ts">
	export let href: string = '';
	export let target: string = '';
</script>

<a
	{href}
	{target}
	class="mhover:hover:border-gray-500 rounded-full border-2 border-transparent bg-white p-3 shadow transition-colors duration-200 sm:p-4"
>
	<slot />
</a>
