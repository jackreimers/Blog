<script lang="ts">
	export let title: string;
	export let text: string;
	export let classes: string = '';
</script>

<div class="flex gap-3 rounded-lg bg-white p-5 shadow {classes}">
	<div class="text-blue-900">
		<slot />
	</div>
	<p>
		<span class="font-semibold">{title}</span>
		<span class="text-gray-600">{text}</span>
	</p>
</div>
