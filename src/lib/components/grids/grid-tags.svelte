<script lang="ts">
	export let classes: string = '';
</script>

<div class="grid grid-cols-1 gap-5 lg:grid-cols-2 {classes}">
	<slot />
</div>
