<script lang="ts">
	import { base } from '$app/paths'
	import Contentcard from '$lib/components/contentcard.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="images">
	<Contentcard headline="Frontend" redirecturl="/frontend" imageurl="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60">
		<ul>
			<li>
				Visual Frontend-projects
			</li>
			<li>Algorithm visualizations</li>
			<li>Design concepts</li>
		</ul>
	</Contentcard>
	<Contentcard headline="Backend" redirecturl="/backend" imageurl="https://img.freepik.com/premium-photo/computer-servers-with-purple-lights-server-farm-created-using-generative-ai-technology_772924-1989.jpg">
		<ul>
			<li>Backend API applications</li>
			<li>Fullstack application and clones</li>
		</ul>
	</Contentcard>
	<Contentcard headline="Experience" redirecturl="/exp" imageurl="https://images.unsplash.com/photo-1689579230089-5f3715ebe0f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60">
		<ul>
			<li>
				Professional experience I've been able to gather over the years
			</li>
		</ul>
	</Contentcard>
</div>

<style>
	.images{
		margin: auto;
		display:flex;
		width: 100%;
		justify-content: space-evenly;
		flex-wrap: wrap-reverse;
	}
</style>
