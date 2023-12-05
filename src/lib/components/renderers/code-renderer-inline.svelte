<script lang="ts">
	export let raw: string = '';
</script>

<code class="bg-gray-50 py-1 px-1.5 rounded">{raw.replace(/`/g, '')}</code>
