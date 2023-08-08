<script lang="ts">
	import { aboutData } from './data'
</script>

<h1>한슬 <small> aka 북북 </small></h1>
<section id="main-description">
	<p>
		디자인과 데이터 분석 경험을 가진 프론트엔드 개발자입니다.<br />
		비즈니스에 대해 폭넓게 고민하고, 짧은 주기로 고객을 만나 제품의 완성도를 올립니다. 저는 서비스를
		이해하는데 중점을 두고, 좋은 사용자 경험을 제공하는 것이 큰 가치로 이어질 수 있다고 믿는 비즈니스-드리븐
		개발에 강점을 가지고 있습니다. 애자일하게 움직이면서도 퀄리티를 타협하지 않는 사람들과 일하고자 합니다.
		또한 프로덕트의 확장성 및 지속가능성을 위한 엔지니어링 차원의 고민도 놓지 않으려고 노력합니다.
	</p>
	<a href="mailto:bookbooks.dev@gmail.com" class="email">💌 bookbooks.dev@gmail.com</a>
</section>

<section id="work-experiences">
	<h2>Work Experiences</h2>
	<table>
		<thead>
			<tr>
				<th class="th-period">기간</th>
				<th>직책 및 업무 내용</th>
			</tr>
		</thead>
		<tbody>
			{#each aboutData as x}
				<tr>
					<td>{x.start} - {x.end}</td>
					<td>
						<h3 class="job-title">
							<span class="company-name">
								{x.company} |
							</span>
							<span>
								{x.position}
							</span>
						</h3>
						<p class="job-description">{x.description}</p>
						<ol>
							{#each x.porjects as project}
								<li class="project-list">
									<div class="project-name">
										{project.name}
									</div>
									<div class="project-description">
										{project.description}
									</div>
									<ol class="porject-details">
										{#each project.details as task}
											<li>{task}</li>
										{/each}
									</ol>
								</li>
							{/each}
						</ol>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style>
	b {
		font-weight: 700;
	}
	h1 {
		color: var(--primary);
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	h1 > small {
		font-size: 1.25rem;
		font-weight: 400;
	}
	h2 {
		color: var(--primary);
		font-weight: 600;
		margin-top: 3rem;
	}
	h2::before {
		content: '🌝 ';
		margin-top: 1rem;
	}
	h3 {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}
	section#main-description {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	#main-description p {
		color: var(--primary-light);
	}
	#main-description .email {
		width: fit-content;
	}

	table {
		margin: 1rem;
		border-collapse: collapse;
		text-align: left;
	}
	thead {
		visibility: collapse;
	}
	.th-period {
		width: 20%;
	}
	.company-name {
		font-weight: 600;
		color: var(--primary);
	}
	.project-list {
		margin-top: 1rem;
	}
	.project-name {
		font-weight: 600;
		font-size: 1.1rem;
		margin-bottom: 0.25rem;
	}
	.porject-details {
		list-style: '- ';
		margin-left: 1.5rem;
		line-height: 150%;
		color: var(--text-light);
	}
	tbody td {
		padding-bottom: 1rem;
	}
</style>
