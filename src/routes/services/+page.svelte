<script lang="ts">
	import { logoUrls } from '$lib/constants/logos.constants';
	import Head from '$lib/components/seo/head.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Container from '$lib/components/page/container.svelte';
	import Section from '$lib/components/page/section.svelte';
	import TechnologyCard from '$lib/components/cards/card-technology.svelte';
	import SocialLinks from '$lib/components/contact/links.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head canonical="https://jackreimers.dev/services" description="" title="Jack Reimers | Services" />
<Hero
	subtitle="I offer a range of development services, from basic websites to full-blown web applications and everything in between."
	title="Services"
>
	<SocialLinks slot="below" />
</Hero>
<Container>
	<Section>
		<div class="markdown">
			<SvelteMarkdown source={data.services.website} />
		</div>
		<div class="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3.5">
			<TechnologyCard
				href="tags/html"
				imageAlt="The HTML 5 logo."
				imageHref={logoUrls.html}
				title="HTML"
			/>
			<TechnologyCard
				href="tags/css"
				imageAlt="The CSS 3 logo."
				imageHref={logoUrls.css}
				title="CSS"
			/>
			<TechnologyCard
				href="tags/javascript"
				imageAlt="The JavaScript logo."
				imageHref={logoUrls.javascript}
				title="JavaScript"
			/>
			<TechnologyCard
				href="tags/typescript"
				imageAlt="The TypeScript logo."
				imageHref={logoUrls.typescript}
				title="TypeScript"
			/>
		</div>
	</Section>
	<Section>
		<div class="markdown">
			<SvelteMarkdown source={data.services.webApplication} />
		</div>
		<div class="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3.5">
			<TechnologyCard
				href="tags/angular"
				imageAlt="The Angular logo."
				imageHref={logoUrls.angular}
				title="Angular"
			/>
			<TechnologyCard
				href="tags/blazor"
				imageAlt="The Blazor logo."
				imageHref={logoUrls.blazor}
				title="Blazor"
			/>
			<TechnologyCard
				href="tags/svelte"
				imageAlt="The Svelte logo."
				imageHref={logoUrls.svelte}
				title="Svelte"
			/>
			<TechnologyCard
				href="tags/azure"
				imageAlt="The Azure logo."
				imageHref={logoUrls.azure}
				title="Azure"
			/>
			<TechnologyCard
				href="tags/mssql"
				imageAlt="The Microsoft SQL Server logo."
				imageHref={logoUrls.mssql}
				title="MSSQL"
			/>
		</div>
	</Section>
	<Section>
		<div class="markdown">
			<SvelteMarkdown source={data.services.wordpress} />
		</div>
		<div class="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3.5">
			<TechnologyCard
				href="tags/wordpress"
				imageAlt="The WordPress logo."
				imageHref={logoUrls.wordpress}
				title="WordPress"
			/>
			<TechnologyCard
				href="tags/mysql"
				imageAlt="The MySQL logo."
				imageHref={logoUrls.mysql}
				title="MySQL"
			/>
		</div>
	</Section>
</Container>
