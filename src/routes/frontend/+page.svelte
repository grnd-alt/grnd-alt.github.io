<script>
	import { base } from '$app/paths'
	import Contentcard from '$lib/components/contentcard.svelte';
    console.log(base)
    console.log('updated')
</script>
<div class="contentCards">
    <Contentcard headline="TypingGame" redirecturl="/typinggame" imageurl="https://images.unsplash.com/photo-1689579230089-5f3715ebe0f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60">
		<ul>
			<li>
				A simple typing game to practice fast typing with random quotes
			</li>
		</ul>
	</Contentcard>
</div>

<style>
    .contentCards{
		margin: auto;
		display:flex;
		width: 100%;
		justify-content: space-evenly;
		flex-wrap: wrap-reverse;
    }
</style>