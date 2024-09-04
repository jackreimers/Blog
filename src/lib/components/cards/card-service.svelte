<script lang="ts">
	export let title: string;
	export let slug: string;
</script>

<a
	class="flex aspect-square flex-col rounded-lg bg-white p-4 shadow transition-all duration-300 md:p-5 mhover:hover:scale-[1.015] mhover:hover:shadow-lg"
	href={`services/${slug}`}
>
	<div class="flex-1" />
	<h3 class="text-lg font-semibold sm:text-xl">{title}</h3>
</a>
