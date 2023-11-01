<script lang='ts'>
	export let classes: string = '';
</script>

<div class='flex items-center font-semibold hover:bg-gray-100 {classes}'>
	<slot>
		<p>Button</p>
	</slot>
</div>