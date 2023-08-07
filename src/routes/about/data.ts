interface AboutData {
	start: string
	end: string
	company: string
	position: string
	description: string
	porjects: Project[]
}

interface Project {
	name: string
	description: string
	details: string[]
	link?: string
	usedSkills?: string[]
}

export const aboutData: AboutData[] = [
	{
		start: '2022.12',
		end: '현재',
		company: 'Viva Republica(Toss)',
		position: 'UX Engineer Assistant',
		description:
			'토스 디자인 시스템 및 머신러닝과 디자인을 접목하는 새로운 도구를 만드는 작업 등을 했습니다. 여러 팀에 소속되어 제품 & 그래픽 디자이너, ML 사이언티스 & 엔지니어, UX 리서처 등 다양한 직군의 사람들과 협업해 주도적으로 개발을 했습니다.',
		porjects: [
			{
				name: 'DEUS 팀',
				description:
					'데우스팀은 메이커(Designer, FE developer, Native developer)가 토스 디자인 시스템을 가지고 최대한의 효율을 낼 수 있는 디자인 에디터를 만들고 있습니다. 팀에서 디자인 시스템과 에디터 UX관련 기능들을 개발하고 있습니다.',
				details: [
					'에디터의 디자인 시스템 컴포넌트 개발',
					'기존 툴에서의 소프트 랜딩을 위해 디자인 마이그레이션 기능 개발(Framer to Deus)',
					'접근성(a11y) 체크 도구 및 사용자 경험 향상을 위한 기능 개발',
					'에디터 기능 개발.'
				]
			},
			{
				name: '디자인 플랫폼 팀',
				description:
					'디자인 플랫폼팀은 토스의 메인 제품들에 들어가는 디자인 시스템(TDS)을 만들고 개선합니다. 복잡한 코드베이스에서 빠르게 문제를 발견하고 개선하는 작업을 했습니다.',
				details: [
					'TDS 컴포넌트 개발 및 성능 개선',
					'잡초제거기(UX 라이팅 린팅 툴) 속도 개선 및 UX 개선',
					'토스 디자인 시스템(TDS) 내 유틸리티 도구 개발 및 성능 개선(크롬 익스텐션 등)'
				]
			},
			{
				name: 'AI Graphic Guild',
				description:
					'AI 그래픽 길드는 이미지 생성 ML 모델을 통해 제품에 필요한 이미지를 빠르게 만들 수 있는 제품을 만듭니다. 길드의 유일한 서비스 개발자로 주도했습니다. 머신러닝에 익숙하지 않은 디자이너들의 멘탈모델 형성을 돕는 UX를 만드는 것에 중점을 두고 개발했습니다.',
				details: [
					'그래픽 ML 학습 센터 - 프론트 아키텍쳐 설계 및 개발',
					'그래픽 ML 이미지 제작 툴 - 프론트 아키텍쳐 설계 및 개발',
					'그래픽 아이디네이션 챗봇 - 챗봇 제작 & 챗봇을 노코드로 관리할 수 있도록 설계',
					'사용 트래킹 및 사용성 검증을 위한 Amplitude 로깅 및 대시보드 개발'
				]
			},
			{
				name: 'NPS Visualize Guild',
				description:
					'토스의 NPS(Net Promoter Score)의 정량데이터 분석 대시보드를 만드는 작업을 했습니다. 엔드유저인 리서처의 사용성을 중점으로 시작해서, 다양한 데이터 필터링과 시각화를 통해 인사이트를 얻을 수 있는 도구를 만드는 것이 목표로 잡고 빠르게 POC 했습니다.',
				details: ['NPS 정량 데이터(VOC) 대시보드 기획 및 POC 개발', '텍스트 전처리 방식 설계']
			},
			{
				name: 'AI UI Gen Guild',
				description:
					'토스 디자인 시스템(TDS)에 대한 개발적, 디자인적 이해를 기반으로 LLM(대규모 언어 모델) 학습 데이터와 방식을 기획했습니다. UI LLM을 위한 학습 데이터를 만들고, 학습 데이터를 처리하는 방식을 기획했습니다.',
				details: ['UI LLM을 위한 학습 데이터 처리 방식 기획', 'UI LLM을 위한 학습 데이터 생성']
			}
		]
	},
	{
		start: '2022.10',
		end: '2023.01',
		company: 'Datarian',
		position: 'Frontend Engineer',
		description: 'React 기반 홈페이지 디자인 및 개발',
		porjects: [
			{
				name: '홈페이지 디자인 및 프론트 개발',
				description:
					'React 기반으로 홈페이지 디자인 및 개발을 했습니다. 노션을 DB 겸 CMS로 사용하여 관리 포인트를 최대한 줄일 수 있는 환경으로 기획하고 개발했습니다.',
				details: [
					'데이터리안 디자인 시스템 제작',
					'React, NextJS 기반 프론트엔드 기술환경 구성 및 기능 구현'
				]
			}
		]
	},
	{
		start: '2021.05',
		end: '2022.12',
		company: 'PXD',
		position: 'UX Tech Lab Full Stack Engineer',
		description: '정성 데이터 분석 도구를 개발했습니다.',
		porjects: [
			{
				name: '정성 데이터(텍스트) 탐색 및 분석 도구 개발',
				description:
					'어피니티 다이어그램의 컨셉에서 출발해서 UX리서쳐/데이터분석가가 사용할 수 있는 도구를 개발했습니다.',
				details: [
					'자연어처리 기술을 활용, User Voice 탐색을 돕는 도구 로직 개발',
					'프로토타입 인터페이스 개발',
					'데이터 시각화 인터페이스, 디자인 시스템 개발'
				]
			},
			{
				name: '유저 보이스 스크래핑 도구 풀스택 개발 ',
				description:
					'유튜브, 트위터, 디스코드, 앱스토어 등 다양한 유저 보이스를 분석하기 위한 데이터 수집 도구 개발을 했습니다.',
				details: [
					'각 소셜미디어(Youtube, twitter, discord, etc) API를 활용해 스크래퍼 제작',
					'API를 제공하지 않는 소셜미디어 크롤러 개발',
					'다양한 매체를 한 눈에 분석하고 시각화하기 위한 일반화된 데이터 구조 설계',
					'AWS Copilot, SQS, SNS를 활용해 분석 queue pipeline 개발',
					'Django, PostgreSQL을 활용해 키워드, 크롤러 관리자 프로그램, DB 구현'
				]
			}
		]
	}
]
