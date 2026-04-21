import { SectionData, ProjectReview, Playlist } from './types';

export const SECTIONS: SectionData[] = [
  {
    id: 'about-life',
    title: 'About Life',
    titleEn: 'CAREER & BACKGROUND',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800',
    description: '박민수의 삶'
  },
  {
    id: 'about-music',
    title: 'About Music',
    titleEn: 'MUSICAL TASTE',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800',
    description: '박민수의 음악'
  },
  {
    id: 'review',
    title: 'Review',
    titleEn: 'ALBUM CRITIQUE',
    image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=800',
    description: '앨범 리뷰'
  },
  {
    id: 'playlist',
    title: 'My Playlist',
    titleEn: 'CURATED SELECTION',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800',
    description: '직접 만들어본 플리'
  },
  {
    id: 'contact',
    title: 'Contact',
    titleEn: '연락 수단',
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?auto=format&fit=crop&q=80&w=800',
    description: '연락처'
  }
];

export const REVIEWS: ProjectReview[] = [
  {
    id: 'review-1',
    album: 'Teen Troubles',
    artist: '검정치마 (The Black Skirts)',
    title: '청춘을 복원하는 그만의 방식 – 검정치마 『Teen Troubles』',
    coverImage: 'https://koreanmusicawards.com/wp-content/uploads/2023/02/2023_TheBlackSkirts.jpeg',
    description: `검정치마의 Teen Troubles는 2022년 9월 15일에 발표된 정규 앨범으로, TEAM BABY와 THIRSTY에 이어지는 이른바 ‘Love Trilogy’의 마지막 장을 이루는 작품이다. 그러나 이 앨범은 단순히 연작의 완결로만 바라보기에는, 그 안에 담긴 정서와 형식적 시도가 이전보다 훨씬 더 확장되어 있다. Teen Troubles는 사랑에 대한 이야기이면서 동시에 청춘에 대한 이야기이고, 더 나아가 조휴일이라는 개인이 오랫동안 품어왔던 감정과 기억의 총합에 가깝다.

이 앨범을 처음부터 끝까지 관통하는 정서는 분명 ‘청춘에 대한 향수’다. 그러나 그것은 흔히 떠올리는 따뜻하고 안정된 회상의 감각이 아니라, 어딘가 비어 있고 불완전한 상태로 남아 있는 감정에 가깝다. 이 앨범에서 그려지는 청춘은 이미 지나가버린 시간인 동시에, 그 시절을 살아가던 당시에도 완전히 이해되지 않았고 지금에 와서야 비로소 감각되는 어떤 감정들이다. 그래서 Teen Troubles의 정서는 단순한 회상이 아니라, 지나온 시간을 현재의 시점에서 다시 해석하고 복원하는 과정에 가깝다. 여름, 친구들, 사랑, 그리고 사소한 사건들은 모두 구체적인 장면으로 제시되지만, 그 장면들에는 늘 설명되지 않는 공백과 불안이 함께 남아 있다.

이러한 정서는 앨범의 사운드와도 긴밀하게 연결된다. Teen Troubles는 검정치마의 기존 작업들에 비해 훨씬 더 뚜렷하게 90년대 인디 록과 얼터너티브 록의 질감을 전면에 내세운다. 거칠고 건조한 기타 톤, 단순하지만 직선적인 리듬, 그리고 밴드 중심의 편곡은 단순한 스타일적 선택을 넘어, 조휴일이 실제로 지나온 시기와 밀접하게 연결된 음악적 환경을 반영한다. 이는 특정 시대를 낭만적으로 재현하는 것이 아니라, 자신의 청춘이 놓여 있던 감각적 배경을 음악적으로 복원하려는 시도로 보인다. 그래서 이 앨범에서의 90년대적 사운드는 레퍼런스라기보다, 개인의 기억을 구성하는 하나의 언어처럼 기능한다. 물론 90년대적 사운드만이 앨범을 이루고 있는 것은 아니다. 플레이밍 립스의 영향력 또한 감지되지만, 작중에 등장하는 신스 사운드는 분명 2010년대 이후 검정치마가 지속적으로 보여온 작법에 가깝다. 과거의 사운드와 현재의 사운드를 융합함으로써, 단순한 재현에 머무르지 않고 지금의 시점에서 다시 쓰여진 개인의 기억을 만들어낸 것이다.

또한 Teen Troubles는 음악을 넘어 하나의 서사적 흐름을 형성한다는 점에서도 인상적이다. 단편 영화와 함께 공개되었다는 사실을 떠나서라도, 앨범 자체가 하나의 느슨한 이야기처럼 전개된다. 각 트랙은 독립된 곡이기보다는 서로 다른 시점과 감정을 담은 장면처럼 이어지며, 특정한 결론을 향해 나아가기보다는 기억의 단편들을 축적해 나간다. 이는 명확한 기승전결을 갖춘 서사라기보다, 한 시기를 통과하면서 형성된 감정의 층위를 따라가는 방식에 가깝다. 그리고 그 서사의 끝에 매미 소리가 등장하면서 첫 트랙과 이어진다. 이는 단순한 연출적 장치라기보다, 이 앨범이 하나의 선형적인 이야기로 끝나는 것이 아니라 끊임없이 되돌아가고 반복되는 기억의 구조를 지니고 있음을 드러낸다. 시작과 끝이 맞물리는 이 순환은 청춘이라는 시간이 명확히 정리되거나 종결될 수 없는 것임을 암시하며, 동시에 그 시절의 감정이 현재까지도 지속되고 있음을 보여준다. 결국 Teen Troubles의 서사는 어떤 결론에 도달하기 위해 존재하는 것이 아니라, 한 개인의 기억과 감정이 계속해서 되감기고 재생되는 과정을 담아낸 열린 형태의 이야기로 남는다.

결국 Teen Troubles는 검정치마의 디스코그래피에서 가장 확장된 사운드를 보여주는 동시에, 가장 깊숙이 개인의 이야기를 파고드는 앨범이다. 이 작품은 청춘을 단순히 아름답게 포장하지 않는다. 대신, 그 시절의 불안과 결핍, 그리고 설명되지 않았던 감정들을 지금의 시점에서 다시 꺼내어 재구성한다. 그리고 그 과정에서 조휴일은 자신의 이야기를 가장 솔직한 방식으로 풀어낸다. Teen Troubles는 그렇게, 개인의 기억과 시대의 감각이 교차하는 지점에서 탄생한, 가장 자전적이고도 가장 입체적인 검정치마의 앨범이다.`
  },
  {
    id: 'review-2',
    artist: '빈지노 (Beenzino)',
    album: 'NOWITZKI',
    title: '“공백 이후의 빈지노, 그리고 삶의 재구성 – 『NOWITZKI』',
    coverImage: 'https://image.bugsm.co.kr/album/images/500/40883/4088314.jpg',
    description: `빈지노의 NOWITZKI는 2023년 발표된 정규 2집으로, 1집 12 이후 약 7년 만에 선보이는 작품이다. 오랜 공백 끝에 나온 정규 앨범이라는 점에서 의미를 가지지만, 이 작품의 핵심은 단순한 복귀에 있지 않다. NOWITZKI는 ‘성공 이후의 삶’을 어떻게 살아갈 것인가에 대한 질문을 중심에 두고, 그 질문에 대한 빈지노 자신의 현재 진행형 답변을 담아낸 기록에 가깝다.

이 앨범을 관통하는 정서는 이전의 빈지노와 분명히 구분된다. 과거 그의 음악이 여유롭고 쿨한 태도, 혹은 성공을 향해 나아가는 과정에서의 자신감에 가까웠다면, NOWITZKI는 그 이후의 상태를 다룬다. 이미 많은 것을 이룬 이후에 찾아오는 공허함, 방향성에 대한 고민, 그리고 삶의 균형을 다시 설정하려는 움직임이 앨범 전반에 걸쳐 드러난다. 중요한 것은 이 감정들이 과장되지 않는다는 점이다. 이 앨범은 감정을 극적으로 드러내기보다는, 오히려 담담한 톤으로 현재의 자신을 관찰하고 기록하는 방식에 가깝다.

이러한 정서는 자연스럽게 강한 자전성으로 이어진다. NOWITZKI는 빈지노의 커리어에서 가장 개인적인 앨범이라 해도 과장이 아니다. 군 복무 이후의 공백과 단절감, 그리고 커리어에 대한 고민은 이 앨범의 중요한 출발점으로 작용한다. 특히 ‘Camp’에서 드러나는 군대 시기의 경험은 이후 이어지는 정서의 기반을 형성하며, 이 앨범이 단순한 현재의 기록이 아니라 하나의 시간적 흐름 위에 놓여 있음을 보여준다. 이러한 흐름 속에서 자연스럽게 등장하는 것이 그의 삶의 중심이 된 관계—현재의 아내인 스테파니 미초바와의 이야기다. 이 관계는 단순한 서사의 일부가 아니라, 앨범 전반의 감정과 방향을 결정짓는 핵심적인 축으로 기능한다. 이 앨범에서 사랑은 감정의 표현을 넘어, 실제로 삶의 방향을 바꾸는 계기로 작용하며, 연애에서 결혼으로 이어지는 과정 속에서 형성된 안정감과 시선의 변화는 이전의 빈지노와는 분명히 다른 결을 만들어낸다.

이 앨범은 개별 트랙들이 모여 하나의 서사적 흐름을 형성한다는 점에서도 인상적이다. NOWITZKI는 특정한 기승전결을 따르기보다는, 한 시기를 통과하는 과정에서의 감정이 자연스럽게 이어지는 구조를 가진다. 특히 ‘Trippy’에서 ‘Change’에 이르기까지는 내면의 불안과 침잠, 그리고 감정의 균열이 지속적으로 드러난다. 이 구간에서 빈지노는 자신의 상태를 인식하면서도 쉽게 벗어나지 못하는 모습을 보여준다. 그러나 이후 ‘Sandman’에 이르러서는 그 흐름이 전환된다. 미초바와의 관계 속에서 형성된 안정감이 감정의 균열을 서서히 봉합하며, 다시 현실과 연결되는 감각이 회복되기 시작한다. 이러한 변화는 극적인 반전이라기보다는, 관계와 시간을 통해 점진적으로 이루어지는 회복의 과정으로 그려지며, 그렇기 때문에 더욱 현실적인 설득력을 가진다.

사운드 역시 이러한 서사와 긴밀하게 맞물려 있다. NOWITZKI의 음악은 이전보다 훨씬 절제되어 있고, 여백이 강조되어 있다. 과거의 재즈 힙합 기반 사운드가 잔존하고 있지만, 전반적으로는 더 미니멀하고 현대적인 방향으로 이동한다. 반복적인 루프 위에 랩을 쌓아 올리기보다는, 공간을 남겨두고 그 위에 감정을 얹는 방식이 두드러진다. 또한 일부 트랙에서는 기타나 밴드적인 질감이 자연스럽게 스며들며, 힙합이라는 장르적 틀을 넘어서는 시도도 드러난다. 이러한 사운드는 과시를 줄이고, 대신 감정의 미세한 결을 더욱 또렷하게 드러낸다.

앨범의 제목인 NOWITZKI 역시 이 작품의 방향성을 이해하는 데 중요한 단서가 된다. NBA 선수 Dirk Nowitzki는 화려한 이동보다는, 오랜 시간 하나의 팀에서 자신의 스타일을 유지하며 커리어를 쌓아온 인물이다. 이는 빠르게 변화하는 씬 속에서도 자신만의 속도를 유지해온 빈지노의 태도와 겹쳐진다. 이 앨범은 단순한 자기 고백을 넘어, 앞으로 어떤 방식으로 살아갈 것인가에 대한 태도를 드러내는 작업이기도 하다.

결국 NOWITZKI는 ‘성공 이후’라는 상태에서 출발해, 한 개인이 자신의 삶을 다시 정렬해 나가는 과정을 담아낸 앨범이다. 이 작품은 더 이상 무언가를 증명하려 하지 않는다. 대신, 지나온 시간과 현재의 자신을 받아들이고, 관계 속에서 변화한 시선을 바탕으로 앞으로 나아간다. 특히 미초바와의 관계 통해 드러나는 회복의 과정은 이 앨범을 단순한 회고가 아닌, 현재 진행형의 이야기로 만든다. NOWITZKI는 그렇게, 한 아티스트가 자신의 삶과 음악을 어떤 방식으로 이어가고자 하는지를 가장 담담하면서도 진솔하게 보여주는 작품이다.`
  }
];

export const PLAYLISTS: Playlist[] = [
  {
    id: 'playlist-1',
    title: 'Spring Hip-Hop Selection',
    description: '따뜻해지는 계절 속에서 듣기 좋은 힙합 음악들을 선별한 플레이리스트입니다. 산책이나 이동 중에도 자연스럽게 어우러지는 부드러운 흐름의 곡들로 구성되어 있습니다.',
    tracks: [
      'Naughty By Nature - Feel Me Now',
      'Tyler, The Creator - Where This Flower Blooms (Feat. Frank Ocean)',
      'Common - The Questions (Feat. Mos Def)',
      'N.E.R.D & Kendrick Lamar - Don\'t Don\'t Do It!',
      'Mac Miller - Blue World',
      'DJ Soulscape - Love Is A Song',
      'Amine - New Flower! (Feat. Leon Thomas)',
      'MF DOOM - Rhymes Like Dimes (Feat. DJ Cucumber Slice)',
      'Tyler, The Creator - DOGTOOTH'
    ]
  },
  {
    id: 'playlist-2',
    title: '90s Indie Rock',
    description: '90년대 인디 록의 감성을 담은 플레이리스트입니다. 불완전하면서도 솔직한 사운드와 멜로디를 통해 그 시기의 공기와 감정을 담아냈습니다.',
    tracks: [
      'Smashing Pumkins - Mayonaise',
      'Yo La Tengo - Little Honda',
      'Superchunk - Like a Fool',
      'Teenage Fanclub - Sparky\'s Dream',
      'Sparklehorse - Ghost Of His Smile',
      'Third Eye Blind - Semi-Charmed Life',
      'The Lemondheads - My Drug Buddy',
      'R.E.M. - Nightswimming',
      'Pavement - Fillmore Jive'
    ]
  }
];
