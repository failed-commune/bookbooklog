<script>
	import '$lib/css/global.css'
</script>

<div class="root">
	<header>
		<h1><a href="/">북북Dev 👀</a></h1>
		<div class="menu">
			<a href="/about">about</a>
			<!-- <a href="/issues">issues</a> -->
		</div>
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<ul class="container">
			<li>
				<p class="copyright">Copyright ©2022</p>
			</li>
			<!-- <li><a href="https://github.com/hanseul-wang" target="_blank">github</a></li> -->
		</ul>
	</footer>
</div>

<style>
	.root {
		position: relative;
		min-height: 100vh;
	}
	header {
		height: 3rem;
		max-width: 900px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		padding: 1rem;
	}
	.menu {
		display: flex;
		gap: 1.5rem;
	}
	main {
		margin: 0 auto;
		max-width: 900px;
		padding: 1rem 2rem;
		padding-bottom: 3rem;
	}
	footer {
		width: 100%;
		position: absolute;
		bottom: 0;
	}
	footer .container {
		display: flex;
		max-width: 900px;
		margin: 0 auto;
		padding: 1rem;
	}

	footer .container li:before {
		content: '　|　';
	}

	footer .container li:first-child::before {
		content: '';
	}
</style>
