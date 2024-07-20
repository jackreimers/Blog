<script lang="ts">
	export let classes: string = '';
</script>

<span class="block animate-pulse bg-gray-300 {classes}">
	<span class="opacity-0">
		<slot />
	</span>
</span>
