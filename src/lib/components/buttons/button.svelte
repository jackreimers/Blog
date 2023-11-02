<script lang="ts">
	export let onClick: Function;

	export let classes: string = '';
</script>

<button
	class="flex items-center rounded p-2 font-semibold transition-colors duration-700 hover:bg-gray-100 {classes}"
>
	<button on:click={() => onClick}>
		<slot>
			<p>Button</p>
		</slot>
	</button>
</button>
