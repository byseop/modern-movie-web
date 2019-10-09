export type Genre = {
  id: number;
  name: string;
};
const movieGenres: Genre[] = [
  {
    id: 28,
    name: '액션'
  },
  {
    id: 12,
    name: '어드벤처'
  },
  {
    id: 16,
    name: '애니메이션'
  },
  {
    id: 35,
    name: '코메디'
  },
  {
    id: 80,
    name: '범죄'
  },
  {
    id: 99,
    name: '다큐'
  },
  {
    id: 18,
    name: '드라마'
  },
  {
    id: 10751,
    name: '가족'
  },
  {
    id: 14,
    name: '판타지'
  },
  {
    id: 36,
    name: '역사'
  },
  {
    id: 27,
    name: '공포'
  },
  {
    id: 10402,
    name: '음악'
  },
  {
    id: 9648,
    name: '미스터리'
  },
  {
    id: 10749,
    name: '로맨스'
  },
  {
    id: 878,
    name: 'SF'
  },
  {
    id: 10770,
    name: 'TV'
  },
  {
    id: 53,
    name: '스릴러'
  },
  {
    id: 10752,
    name: '전쟁'
  },
  {
    id: 37,
    name: '웨스턴'
  }
];
const tvGenres: Genre[] = [
  {
    id: 10759,
    name: '액션 & 어드벤처'
  },
  {
    id: 16,
    name: '애니메이션'
  },
  {
    id: 35,
    name: '코메디'
  },
  {
    id: 80,
    name: '범죄'
  },
  {
    id: 99,
    name: '다큐'
  },
  {
    id: 18,
    name: '드라마'
  },
  {
    id: 10751,
    name: '가족'
  },
  {
    id: 10762,
    name: '어린이'
  },
  {
    id: 9648,
    name: '미스터리'
  },
  {
    id: 10763,
    name: '뉴스'
  },
  {
    id: 10764,
    name: '리얼리티'
  },
  {
    id: 10765,
    name: 'SF & 판타지'
  },
  {
    id: 10766,
    name: '소프'
  },
  {
    id: 10767,
    name: '토크'
  },
  {
    id: 10768,
    name: '전쟁 & 정치'
  },
  {
    id: 37,
    name: '웨스턴'
  }
];

export function getGenre(mediaType: string): Genre[] {
  switch (mediaType) {
    case 'tv':
      return tvGenres;
    case 'movie':
      return movieGenres;
    default:
      throw new Error(`Unhandled media type "${mediaType}"`);
  }
}
