<script lang="ts">
	import BlogHeader from '$lib/components/layout/header-blog.svelte';

	import { PUBLIC_APP_ROOT } from '$env/static/public';
</script>

<BlogHeader />

<p>{PUBLIC_APP_ROOT}</p>
