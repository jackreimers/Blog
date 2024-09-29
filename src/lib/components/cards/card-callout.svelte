<script lang="ts">
	export let title: string;
	export let text: string;
	export let classes: string = '';
</script>

<div class="flex gap-3 rounded-lg border border-gray-300 bg-gray-100 p-5 {classes}">
	<div class="text-blue-900">
		<slot />
	</div>
	<p>
		<span class="font-semibold">{title}</span>
		<span class="text-gray-700">{text}</span>
	</p>
</div>
