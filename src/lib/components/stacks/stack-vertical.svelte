<script lang="ts">
	export let classes: string = '';
</script>

<div class="flex flex-col gap-2.5 sm:gap-3.5 {classes}">
	<slot />
</div>
