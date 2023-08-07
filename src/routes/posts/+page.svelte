<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
	let posts = data.posts
	let publishedPosts = posts.filter((p: { draft: any }) => !p.draft)
</script>

<ul class="posts">
	{#each posts as post}
		<li>
			<article>
				<time class="published-at">{post.publishedAt}</time>
				<h2 class="title"><a href={`/posts/${post.id}`}>{post.title}</a></h2>
				<p class="summary">{post.summary}</p>
			</article>
		</li>
	{/each}
</ul>

<style>
	article {
		padding: 1rem 0;
		border-bottom: 1px solid var(--primary-light);
	}
	article h2 {
		margin-bottom: 0.5rem;
	}
</style>
