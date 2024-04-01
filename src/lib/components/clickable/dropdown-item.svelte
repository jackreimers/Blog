<script lang="ts">
	export let active: boolean = false;
	export let onClick: Function;
</script>

<button
	on:click={() => {
		onClick();
	}}
	class="rounded px-2 py-1 text-left transition-colors duration-200 sm:px-3 sm:py-1.5 {active
		? 'bg-gray-100 hover:bg-gray-200'
		: 'hover:bg-gray-100'}"
>
	<slot />
</button>
