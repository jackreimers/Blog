<script lang="ts">
	export let active: boolean = false;
	export let onClick: Function;
</script>

<button
	on:click={() => {
		onClick();
	}}
	class="rounded px-3 py-1.5 text-left transition-colors duration-200 sm:px-4 sm:py-2.5 {active
		? 'bg-gray-100 hover:bg-gray-200'
		: 'hover:bg-gray-100'}"
>
	<slot />
</button>
