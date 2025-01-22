export interface IChildren {
  content: string;
}

export interface IPortData {
  title: string;
  date: string;
  stack: string;
  children: IChildren[];
}

const mockPortFolioData: IPortData[] = [
  {
    title: 'LG AI IXI Studio',
    date: '2024.11 ~ 2024.12',
    stack: 'Vite, Vue3, Typescript, Pinia, TailwindCSS',
    children: [
      {
        content:
          '컴포넌트 재사용성 향상 및 모듈화',
      },
      {
        content:
          '상태 관리 및 사용자 인증 시스템 구축',
      },
      {
        content:
          '사용자 중심의 UI/UX 설계 및 접근성 개선',
      },
      {
        content:
          '관리자 기능 개발',
      },

    ],
  },
  {
    title: 'LG DataFarm Visualization Mobile',
    date: '2024.07 ~ 2024.11',
    stack: 'Vite, Vue3, Typescript, Pinia, TailwindCSS',
    children: [
      {
        content:
          '무한 스크롤 기능을 구현',
      },
      {
        content:
          '앱 개발자와 협업하여 앱스킴 코드를 활용하여 공유 기능을 구현',
      },
      {
        content:
          '글로벌 에러 핸들링을 위해 에러 처리 로직 구현',
      },

    ],
  },
  {
    title: 'LG DataFarm Visualization Web',
    date: '2024.03 ~ 2024.06',
    stack: 'Vue2,  Vuex, TailwindCSS',
    children: [
      {
        content:
          '각 탭 별 더보기 기능을 구현',
      },
      {
        content:
          '즐겨찾기 및 구독 기능 구현',
      },
      {
        content:
          'iframe을 통해 데이터 시각화 화면을 웹과 연결',
      },

    ],
  },
  {
    title: 'LG DataFarm Customer 360 Visualization ',
    date: '2023.10 ~ 2024.02',
    stack: 'Vue2,  Vuex, TailwindCSS',
    children: [
      {
        content:
          '대규모 데이터 시각화 구현',
      },
      {
        content:
          '사용자 맞춤형 데이터 필터링 기능 개발',
      },

    ],
  },

];

export default mockPortFolioData;
