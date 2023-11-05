<script lang="ts">
	export let onClick: Function;
	export let classes: string = '';
</script>

<button
	class="flex items-center rounded transition-colors duration-700 {classes}"
	on:click={() => onClick}
>
	<slot>
		<p>Button</p>
	</slot>
</button>
