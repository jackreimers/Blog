<script lang='ts'>
	export let icon: string = 'question_mark';
	export let weight: number = 600;
	export let classes: string = '';
</script>

<div class='flex items-center'>
	<span
		class='material-symbols-rounded {classes}'
		style="font-variation-settings: 'wght' {weight}"
	>
		{icon}
	</span>
</div>