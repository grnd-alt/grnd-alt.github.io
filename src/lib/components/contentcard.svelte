<script lang="ts">
    import { base } from '$app/paths';
    export let imageurl:string = '';
    export let redirecturl:string='';
    export let headline:string="";
</script>

<a class="imgwrap" href="{base}{redirecturl}">
    <img src={imageurl} alt="">
    <div class="greyscaled"></div>
    <div class="content">
        <h2 class="content-head">{headline}</h2>
        <slot/>
    </div>
</a>

<style>
    li {
		line-height: 1.5em;
	}
	ul {
		padding-left:0px;
		list-style-type: none;
	}
	.content{
		z-index: 9;
		grid-row: 1;
		grid-column: 1;
		color:white;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding-inline:1rem;
		background-image: linear-gradient(to top right,rgba(0,0,0,.7),rgba(0,0,0,0));
	}
	.content h2 {
		color: var(--color-highlight);
		font-size: 2.5em;
		margin: 0;
		padding:0;
	}
	.content p {
		margin-top:0;
	}
    .imgwrap{
		border: 3px solid var(--color-highlight);
		border-radius: 20px;
		overflow: hidden;
		display: grid;
	}
	.imgwrap img {
		grid-row: 1;
		grid-column: 1;
		object-fit: cover;
		width: 100%;
		height: 100%;
		z-index: 0;
		transform: scale(1);
		transition: transform ease-in-out .7s;
	}
    .imgwrap:hover img {
		transform: scale(1.05);
		transition: ease-in-out .7s;
	}
	.imgwrap:hover .greyscaled {
		cursor: pointer;
		opacity: 0;
		transition: opacity cubic-bezier(0.47, 0, 0.745, 0.715) .7s;
	}
    .imgwrap{
		margin-top:1rem;
		min-width: 100px;
		max-width: 300px;
	}
    .greyscaled {
		z-index: 10;
		grid-row: 1;
		grid-column: 1;
		background: black;
		filter: grayscale(1);
		opacity: 0.5;
		transition: opacity cubic-bezier(0.47, 0, 0.745, 0.715) 1s;
	}
</style>