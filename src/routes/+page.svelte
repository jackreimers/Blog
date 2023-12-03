<script lang="ts">
	import Button from '$lib/components/buttons/button.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import Detail from '$lib/components/text/detail.svelte';
</script>

<div class="mb-20">
	<p class="mb-3.5 text-2xl text-gray-500">Hi, my name is</p>
	<h1 class="text-gb mb-3 text-7xl font-semibold">Jack Reimers</h1>
	<p class="mb-5 text-4xl font-medium">
		I'm a full-stack Software Engineer at
		<a
			href="https://ssw.com.au"
			target="_blank"
			class="bg-gradient-to-b from-[#CC1414] to-red-800 bg-clip-text font-semibold text-transparent"
		>
			SSW Consulting.
		</a>
	</p>
	<p class="max-w-prose text-gray-500">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.
	</p>
</div>

<p class="mb-3 font-medium">What am I interested in?</p>
<div class="grid grid-cols-10 gap-2 text-center">
	<div class="border border-gray-300 p-6">
		<p class="font-semibold">C#</p>
	</div>
	<div class="border border-gray-300 p-6">
		<p class="font-semibold">.NET</p>
	</div>
	<div class="border border-gray-300 p-6">
		<p class="font-semibold">JavaScript</p>
	</div>
	<div class="border border-gray-300 p-6">
		<p class="font-semibold">Blazor</p>
	</div>
	<div class="border border-gray-300 p-6">
		<p class="font-semibold">Svelte</p>
	</div>
	<div class="border border-gray-300 p-6">
		<p class="font-semibold">Godot</p>
	</div>
	<div class="border border-gray-300 p-6">
		<p class="font-semibold">Unity</p>
	</div>
</div>

<!--
<Button href="blog">
	<p>Go to blog</p>
</Button>
<Button href="blog/test">
	<p>Go to blog post</p>
</Button>
-->
