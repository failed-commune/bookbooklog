<script>
	import { aboutData } from './data'
</script>

<h1>About 북북</h1>
<p class="main-description">
	<b>디자인과 데이터분석 경험</b>을 가진 프론트엔드 개발자입니다. <br />
	비즈니스를 깊게 고민하고 짧은 주기로 고객을 만나 제품의 완성도를 빠르게 올리는 것과 같이
	<b>비즈니스-드리븐</b> 개발을 합니다. 좋은 UX를 만드는 것이 큰 비즈니스적인 가치로 이어질 수 있다고
	믿고, 퀄리티에 타협하지 않는 사람들과 일하고자 합니다. 동시에 프로덕트의 확장성 및 지속가능성을 위한
	엔지니어링 차원의 고민을 실천하려고 노력합니다.
</p>

email : w.hanseul@gmail.com

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

<style>
	b {
		font-weight: 700;
	}
	h1 {
		color: var(--primary);
		font-size: 2rem;
		margin-bottom: 1rem;
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
	p.main-description {
		color: var(--primary-light);
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
