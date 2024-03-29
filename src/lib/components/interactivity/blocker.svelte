<script lang="ts">
	export let open: boolean = false;
	export let onClick: Function | null = null;

	function handleClick() {
		onClick?.call(null);
		open = false;
	}
</script>

<button
	on:click={handleClick}
	class="fixed left-0 top-0 z-20 h-full w-full bg-black bg-opacity-50 transition-opacity duration-500 {open
		? ''
		: 'invisible opacity-0'}"
/>
