<script lang="ts">
	export let href: string = '';
	export let target: string = '';
</script>

<a {href} {target} class="group relative rounded-full bg-white p-3 shadow sm:p-4">
	<div
		class="absolute left-0 top-0 -z-10 h-[calc(100%+4px)] w-[calc(100%+4px)] -translate-x-[2px] -translate-y-[2px] transform rounded-full bg-white bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
	/>
	<slot />
</a>
