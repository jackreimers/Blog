<script lang="ts">
	import { Mail } from 'lucide-svelte';
	import { Linkedin } from 'lucide-svelte';
	import { Github } from 'lucide-svelte';

	import PageHeader from '$lib/components/layout/page-header.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Jack Reimers | About</title>
</svelte:head>

<PageHeader>
	<h1 class="text-center text-3xl font-bold sm:text-5xl lg:text-6xl">About</h1>
</PageHeader>

<div class="mb-5 flex gap-3 sm:gap-4">
	<div class="flex flex-1 overflow-hidden rounded bg-gray-100">
		<div class="mx-auto w-[200px] xl:w-[300px]">
			<img
				src="/images/headshot-transparent.png"
				alt="Professional headshot of Jack Reimers"
				width="300"
			/>
		</div>
	</div>
	<div class="flex flex-col justify-between gap-3 sm:gap-4 xl:justify-normal">
		<Button classes="rounded bg-gray-100 p-4 hover:bg-gray-200">
			<Mail />
		</Button>
		<Button
			href="https://www.linkedin.com/in/jackreimers"
			target="_blank"
			classes="rounded bg-gray-100 p-4 hover:bg-gray-200"
		>
			<Linkedin />
		</Button>
		<Button
			href="https://github.com/jackreimers"
			target="_blank"
			classes="rounded bg-gray-100 p-4 hover:bg-gray-200"
		>
			<Github />
		</Button>
	</div>
</div>
<div class="mb-5 flex">
	<span class="w-[4px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800" />
	<div class="py-2 pl-3.5">
		<p class="mb-0.5 text-2xl font-bold md:text-4xl">Jack Reimers</p>
		<p class="font-medium text-gray-500">Software Engineer</p>
	</div>
</div>
<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
	labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh.
</p>
<!--
<div class="flex flex-col gap-8 md:flex-row">
<div class="mx-auto flex flex-col gap-3 bg-gray-100">
<div class="text-center">
    <p class="text-2xl font-semibold">Jack Reimers</p>
    <p class="font-medium text-gray-500">Software Engineer</p>
</div>
<div class="mx-auto">
    <div class="flex gap-3">
        <Button classes="rounded-full bg-gray-100 p-4 hover:bg-gray-200">
            <Mail />
        </Button>
        <Button
            href="https://www.linkedin.com/in/jackreimers"
            target="_blank"
            classes="rounded-full bg-gray-100 p-4 hover:bg-gray-200"
        >
            <Linkedin />
        </Button>
        <Button
            href="https://github.com/jackreimers"
            target="_blank"
            classes="rounded-full bg-gray-100 p-4 hover:bg-gray-200"
        >
            <Github />
        </Button>
    </div>
</div>
</div>
<div class="flex-1">
<p
    class="mb-1 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-4xl font-bold leading-none text-transparent"
>
    Jack Reimers
</p>
<p class="mb-3 font-semibold text-gray-500">Full Stack Software Engineer</p>
<p class="mb-4 font-medium">SSW Consulting</p>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper
    feugiat nibh.
</p>
</div>
</div>
<div class="mt-6">
<div>
<div class="flex gap-4 text-center">
	<div class="">
		<div class="inline-block rounded bg-gray-100 p-4">
			<img src="/images/csharp.png" alt="C# Logo" width="64" />
		</div>
		<p class="text-sm font-medium">C#</p>
	</div>
	<div>
		<div class="inline-block rounded bg-gray-100 p-4">
			<img src="/images/javascript.png" alt="JavaScript Logo" width="64" class="rounded" />
		</div>
		<p class="text-sm font-medium">JavaScript</p>
	</div>
	<div>
		<div class="inline-block rounded bg-gray-100 p-4">
			<img src="/images/typescript.svg" alt="TypeScript Logo" width="64" class="rounded" />
		</div>
		<p class="text-sm font-medium">TypeScript</p>
	</div>
</div>

</div>
</div>
<div class="mb-6 flex gap-4">
	<span class="w-[4px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800" />
	<div>
		<p class="mb-4 text-gray-500">Frontend</p>
		<div class="flex gap-8 text-center">
			<div>
				<div class="inline-block rounded bg-gray-100 p-4">
					<img src="/images/blazor.png" alt="C#" width="100" />
				</div>
				<p class="font-medium">Blazor</p>
			</div>
			<div>
				<div class="inline-block rounded bg-gray-100 p-4">
					<img src="/images/angular.svg" alt="C#" width="100" class="rounded" />
				</div>
				<p class="font-medium">Angular</p>
			</div>
		</div>
	</div>
</div>


		
		<div class="">
			<h2 class="text-3xl font-semibold">Jack Reimers</h2>
			<p class="font-medium text-gray-500">Full Stack Software Engineer</p>
		</div>
<PageHeader border={false}>
			<p class="font-semibold text-[#CC4141]">SSW</p>
	<div class="flex flex-col gap-4">
		<div class="flex w-full justify-center gap-3">
			<Button classes="rounded-full bg-gray-100 p-4 hover:bg-gray-200">
				<Mail />
			</Button>
			<Button
				href="https://www.linkedin.com/in/jackreimers"
				target="_blank"
				classes="rounded-full bg-gray-100 p-4 hover:bg-gray-200"
			>
				<Linkedin />
			</Button>
			<Button
				href="https://github.com/jackreimers"
				target="_blank"
				classes="rounded-full bg-gray-100 p-4 hover:bg-gray-200"
			>
				<Github />
			</Button>
		</div>
	</div>
</PageHeader>
<div class="rounded md:flex-1">
	<p class="mb-5">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh.
	</p>
	<p>
		In vitae turpis massa sed elementum tempus. Laoreet id donec ultrices tincidunt arcu non
		sodales neque sodales. Velit laoreet id donec ultrices. Pulvinar neque laoreet suspendisse
		interdum consectetur libero id. Mi bibendum neque egestas congue.
	</p>
</div>
-->
