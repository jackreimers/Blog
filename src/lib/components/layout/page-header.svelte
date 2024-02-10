<script lang="ts">
	export let border: boolean = true;
</script>

<div
	class:border-gray-200={border}
	class:border-transparent={!border}
	class="mb-8 border-b-2 pb-4 sm:mb-12 sm:pb-8"
>
	<slot />
</div>
