<script lang="ts">
	export let classes: string = '';
</script>

<span class="block animate-pulse bg-gray-200 {classes}">
	<span class="block opacity-0">
		<slot />
	</span>
</span>
