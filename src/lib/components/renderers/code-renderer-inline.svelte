<script lang="ts">
	//TODO: This is currently redundant, just apply the classes to the code element
	export let raw: string = '';
</script>

<code class="rounded bg-white px-1.5 py-1">{raw.replace(/`/g, '')}</code>
