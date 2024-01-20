<script lang="ts">
    //TODO: This is currently redundant, just apply the classes to the code element
	export let raw: string = '';
</script>

<code class="bg-gray-100 py-1 px-1.5 rounded">{raw.replace(/`/g, '')}</code>
