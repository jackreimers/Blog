<script lang="ts">
	export let active: boolean = false;
	export let onClick: Function;
</script>

<button
	on:click={() => {
		onClick();
	}}
	class="rounded py-1 pl-3 pr-9 text-left transition-colors duration-200 sm:py-2 sm:pl-4 sm:pr-12 {active
		? 'bg-gray-600 hover:bg-gray-500'
		: 'hover:bg-gray-600'}"
>
	<slot />
</button>
