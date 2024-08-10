<script lang="ts">
	export let href = '';
	export let title: string | null = null;
</script>

<a
	class="border-b border-gray-300 font-medium transition-colors duration-200 mhover:hover:border-gray-800"
	{href}
	target="_blank"
	{title}
>
	<slot />
</a>
