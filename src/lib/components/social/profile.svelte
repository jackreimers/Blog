<script lang="ts">
	import { PUBLIC_APP_ROOT } from '$env/static/public';
	const url = `${PUBLIC_APP_ROOT}/images/headshot.png`;
</script>

<a href="https://www.linkedin.com/in/jack-reimers" class="flex items-center gap-3">
	<div class="h-[64px] w-[64px] rounded-full border border-gray-300 bg-cover" style="background-image: url({url})" />
	<div>
		<p class="text-gb mb-1 text-2xl font-bold leading-none">Jack Reimers</p>
		<p class="leading-none">@jackreimers</p>
	</div>
</a>
