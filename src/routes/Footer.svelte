<script>
	import logo from '$lib/images/FotoBelakkaf.jpg';
	import github from '$lib/images/github.svg';
	import home from '$lib/images/home.svg'
</script>

<footer>
	<div class="footer-center">
		<img class='logo' src={logo} alt="github" />
		<a href="https://github.com/grnd-alt" target="_blank">
			<img src={github} alt="GitHub" />
		</a>
		<a href="/">
			<img src={home} alt="SvelteKit" />
		</a>
	</div>
</footer>

<style>
	.footer-center{
		height:2rem;
		overflow: hidden;
		padding-bottom: 10px;
		display:flex;
		justify-content: space-around;
	}
	footer{
		height:3rem;
		overflow:hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.logo{
		border-radius:100px;
	}
	img{
		object-fit: cover;
		aspect-ratio: 1/1;
		height: 2em;
		width: 2em;
		overflow: hidden
	}
</style>
