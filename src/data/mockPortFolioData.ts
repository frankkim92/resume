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
    title: '데이터팜 모바일',
    date: '2024.03 ~ 2024.11',
    stack: 'Vite, Vue3, Typescript',
    children: [
      {
        content:
          '로그인 화면 구현 로그인 화면 구현로그인 화면 구현로그인 화면 구현로그인 화면 구현로그인 화 ',
      },
      {
        content:
          "모달창 화면 구현 모달창 화면 구현모달창 화면 구현모달창 화면 구현모달창 화면 '",
      },
      {
        content:
          '에러처리 구현 에러처리 구현에러처리 구현에러처리 구현에러처리 구현에러처리 구현에러처리',
      },
      {
        content:
          '모바일 웹앱모바일 웹앱모바일 웹앱모바일 웹앱모바일 웹앱모바일 웹앱 ',
      },
    ],
  },
  {
    title: '데이터팜 웹',
    date: '2024.02 ~ 2024.09',
    stack: 'webpack, Vue2',
    children: [
      {
        content:
          '로그인 화면 구현 로그인 화면 구현로그인 화면 구현로그인 화면 구현로그인 화면 구현로그인 화 ',
      },
      {
        content:
          "모달창 화면 구현 모달창 화면 구현모달창 화면 구현모달창 화면 구현모달창 화면 '",
      },
      {
        content:
          '에러처리 구현 에러처리 구현에러처리 구현에러처리 구현에러처리 구현에러처리 구현에러처리',
      },
      {
        content:
          '모바일 웹앱모바일 웹앱모바일 웹앱모바일 웹앱모바일 웹앱모바일 웹앱 ',
      },
    ],
  },
  {
    title: 'Customer 360',
    date: '2023.10 ~ 2024.02',
    stack: 'Vite, Vue3, Typescript',
    children: [
      {
        content:
          '로그인 화면 구현 로그인 화면 구현로그인 화면 구현로그인 화면 구현로그인 화면 구현로그인 화 ',
      },
      {
        content:
          "모달창 화면 구현 모달창 화면 구현모달창 화면 구현모달창 화면 구현모달창 화면 '",
      },
      {
        content:
          '에러처리 구현 에러처리 구현에러처리 구현에러처리 구현에러처리 구현에러처리 구현에러처리',
      },
      {
        content:
          '모바일 웹앱모바일 웹앱모바일 웹앱모바일 웹앱모바일 웹앱모바일 웹앱 ',
      },
    ],
  },
  {
    title: '상품출시지원 관리자페이지',
    date: '2023.05 ~ 2024.09',
    stack: 'Vite, Vue3, Typescript',
    children: [
      {
        content:
          '로그인 화면 구현 로그인 화면 구현로그인 화면 구현로그인 화면 구현로그인 화면 구현로그인 화 ',
      },
      {
        content:
          "모달창 화면 구현 모달창 화면 구현모달창 화면 구현모달창 화면 구현모달창 화면 '",
      },
      {
        content:
          '에러처리 구현 에러처리 구현에러처리 구현에러처리 구현에러처리 구현에러처리 구현에러처리',
      },
      {
        content:
          '모바일 웹앱모바일 웹앱모바일 웹앱모바일 웹앱모바일 웹앱모바일 웹앱 ',
      },
    ],
  },
];

export default mockPortFolioData;
