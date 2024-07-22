<script lang="ts">
	export let classes: string = '';
</script>

<div class="tag-grid grid grid-cols-2 gap-2.5 sm:gap-3.5 lg:grid-cols-3 {classes}">
	<slot />
</div>
