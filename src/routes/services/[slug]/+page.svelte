<script lang="ts">
	import { page } from '$app/stores';
	import Hero from '$lib/components/hero/hero.svelte';
</script>

<Hero title={$page.url.pathname}/>