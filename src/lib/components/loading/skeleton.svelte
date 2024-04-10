<script lang="ts">
	export let classes: string = '';
</script>

<div class="inline-block animate-pulse rounded bg-gray-300 {classes}">
	<div class="opacity-0">
		<slot />
	</div>
</div>
