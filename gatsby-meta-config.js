module.exports = {
  title: `The Hitchhiker's Doyclopedia to the Galaxy`,
  description: `While the world sleep,I dreamWhile the world sleep,I dream`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://d0iloppa.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `D0iloppa/d0iloppa.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'G-Z0BTXCLGCZ', // Google Analytics Tracking ID
  author: {
    name: `권도일`,
    bio: {
      role: `개발자`,
      description: ['세상을 이롭게 만드는', '언제나 즐거움을 만드는', '항상 성장하는', 'FULL STACK 지향'],
      thumbnail: 'profile.jpg', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/d0iloppa`, // `https://github.com/zoomKoding`,
      naver: 'https://blog.naver.com/kdi3939',
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      instagram: 'https://www.instagram.com/d01l_man/',
      email: `kdi3939@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2010.04 ~ 2018.08',
        activity: '교내 정보보안 동아리 "INVISIBLE SHIELD" 활동',
      },
      {
        date: '2011.04 ~ 2011.08',
        activity: '교내 정보전산원 서버관리부 근로장학생',
      },
      {
        date: '2015.08 ~ 2015.11',
        activity: '한국전력공사 대학생 서포터즈 활동',
      },
      {
        date: '2020.12 ~ 2021.07',
        activity: '직업전문학교 자바응용sw(앱) 개발자 양성과정 교육 수료',
      },
      {
        date: '2021.08 ~ ',
        activity: '(주)웰컨 개발 연구원',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '교내 소프트웨어공학 팀 프로젝트',
        description: '풋살,농구 등 생활체육에 즉흥적 참여를 위해 GPS 기반으로 팀 매칭시켜주는 애플리케이션',
        techStack: ['android'],
        thumbnailUrl:'',
      },
      {
        title: 'KEEP WALK',
        description: '음식의 칼로리만 서버 DB에 저장해 놓고, 여러 키워드들에 대하여 (ex. 햄버거, 롯데리아, 맥도날드…) 검색이 가능하도록 키워드를 배열로 관리한다. 이는 자동으로 사용자의 신체정보에 맞춰 활동해야 할 거리를 계산해준다. 이 거리정보를 기준으로 거리만큼 떨어져 있는 해당 음식점을 매핑시켜 준다.',
        techStack: ['android'],
        thumbnailUrl: 'profile/keepwalk.png',
      },
      {
        title: '쇼핑몰 홈페이지 제작 및 하이버 연계 상품 등록 모듈 제작',
        description: '쇼핑몰 사이트 제작, 상품관리, 사진보정, 소셜네트워크 마케팅 관리(페이스북 연동 상품 광고 및 카탈로그 관리) , 하이버 연계 상품 등록 모듈 제작',
        techStack: ['html','css','js','python','photoshop CS6'],
        thumbnailUrl: 'profile/kkl.png',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: 'https://kwonkoolook.com/',
        },
      },


    ],

    certificates:[
      // =====         [Certificate Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        date: '',
        title: '',
        description: '',
        issuer: '',
      },
      // ========================================================
      // ========================================================
      {
        date: '2015.03',
        title: '2종보통운전면허',
        description: '',
        issuer: '경찰청(운전면허시험관리단)',
      },
      {
        date: '2015.08',
        title: '한국사능력검정시험 1급',
        description: '',
        issuer: '국사편찬위원회',
      },
      {
        date: '2017.11',
        title: '정보처리기사',
        description: '',
        issuer: '한국산업인력공단',
      },
      {
        date: '2020.09',
        title: '산업안전기사',
        description: '',
        issuer: '한국산업인력공단',
      },
      {
        date: '2021.05',
        title: 'GTQ포토샵 1급',
        description: '',
        issuer: '한국생산성본부(KPC)',
      },

    ],

  },
};
