import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Mail, 
  Instagram, 
  Linkedin, 
  ChevronRight,
  Music,
  User,
  Star,
  PlayCircle
} from 'lucide-react';
import { SECTIONS, REVIEWS, PLAYLISTS } from './data';
import { SectionData, SectionId } from './types';

// --- Sub-Components ---

const Header = ({ 
  onHomeClick, 
  onSectionClick, 
  activeSection 
}: { 
  onHomeClick: () => void, 
  onSectionClick: (id: SectionId) => void,
  activeSection: SectionId | null 
}) => (
  <header className="fixed top-0 left-0 w-full z-50 py-6 md:py-8 px-2 md:px-6 flex justify-between items-start transition-all duration-500">
    <button 
      onClick={onHomeClick}
      className={`group cursor-pointer text-left transition-all duration-500 ${!activeSection ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 translate-y-0'}`}
    >
      <h1 className="text-5xl md:text-6xl font-serif text-brand-black tracking-widest leading-none whitespace-nowrap">
        박민수
      </h1>
      <p className="text-sm md:text-base font-mono text-brand-black/60 tracking-[0.3em] uppercase mt-3 whitespace-nowrap">
        A&R Portfolio
      </p>
    </button>
    
    <div className="flex flex-col items-end gap-6">
      <nav className="flex items-center bg-brand-white/90 backdrop-blur-md py-3 px-6 md:px-8 rounded-full border border-brand-black/10 shadow-sm">
        <div className="flex items-center gap-3 md:gap-8">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id as SectionId)}
              className={`relative text-[10px] md:text-xs font-mono tracking-widest uppercase transition-all duration-300 hover:text-brand-black ${activeSection === section.id ? 'text-brand-black font-bold' : 'text-brand-black/70'}`}
            >
              {section.title}
              {activeSection === section.id && (
                <motion.div 
                  layoutId="nav-underline" 
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-black" 
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {activeSection && (
        <button 
          onClick={onHomeClick}
          className="flex items-center gap-2 text-brand-black/80 hover:text-brand-black transition-colors duration-300 font-mono text-[10px] md:text-xs tracking-widest uppercase mr-4"
        >
          <ArrowLeft size={14} />
          <span className="hidden sm:inline">Back to Archive</span>
        </button>
      )}
    </div>
  </header>
);

interface RecordCardProps {
  section: SectionData;
  onClick: () => void;
}

const RecordCard: React.FC<RecordCardProps> = ({ section, onClick }) => (
  <motion.button
    layoutId={`section-${section.id}`}
    onClick={onClick}
    className="record-card group text-left w-full focus:outline-none"
    whileHover={{ y: -10 }}
  >
    <div className="record-image-container relative bg-brand-gray flex items-center justify-center overflow-hidden">
      <img 
        src={section.image} 
        alt={section.title} 
        className="record-image grayscale group-hover:grayscale-0 relative z-10"
        referrerPolicy="no-referrer"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement?.classList.add('flex-col');
        }}
      />
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
        <Music size={64} strokeWidth={1} />
      </div>
      <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-all duration-500 z-20" />
      
      {/* Vinyl record peek-out effect */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[95%] bg-brand-black rounded-full -z-10 translate-x-12 opacity-0 group-hover:opacity-40 transition-all duration-700 blur-[2px]" />
    </div>
    
    <div className="mt-6 flex justify-between items-start border-t border-brand-black/20 pt-5">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl md:text-2xl font-serif tracking-wide uppercase text-brand-black font-bold leading-none">
          {section.title}
        </h3>
        <p className="text-xs md:text-sm font-serif text-brand-black font-normal tracking-wider uppercase leading-none">
          {section.description}
        </p>
      </div>
      <ChevronRight size={22} className="text-brand-black group-hover:scale-125 transition-all duration-300 ml-2 mt-1" />
    </div>
  </motion.button>
);

// --- Detail Content Componets ---

const AboutLifeContent = () => (
  <div className="space-y-16">
    <section>
      <h4 className="text-5xl font-bold text-brand-black mb-8">박민수</h4>
      <p className="text-xl leading-relaxed font-light">
        2002년생 대학생이자 음악 애호가.  
        현재 한성대학교에서 문학문화콘텐츠학과에서 공부하면서 비즈니스적 관점을 익히는 동시에, 
        음악 제작 전반의 과정을 아우르는 A&R이라는 목표를 향해 달려가고 있습니다.
      </p>
    </section>
    
    <section>
      <h4 className="text-xs font-mono text-brand-dark-gray tracking-widest uppercase mb-8">Career Timeline</h4>
      <div className="space-y-12 border-l border-brand-black/10 pl-8 ml-2">
        <div className="relative">
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-brand-black border-4 border-brand-white" />
          <span className="text-sm font-mono text-brand-dark-gray">2002 - 2007</span>
          <h5 className="text-lg font-medium mt-1">출생 및 어린이집 재학</h5>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-brand-black/20 border-4 border-brand-white" />
          <span className="text-sm font-mono text-brand-dark-gray">2008 - 2014</span>
          <h5 className="text-lg font-medium mt-1">상원 초등학교 재학</h5>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-brand-black/20 border-4 border-brand-white" />
          <span className="text-sm font-mono text-brand-dark-gray">2015 - 2017</span>
          <h5 className="text-lg font-medium mt-1">상원중학교 재학</h5>
        </div>

        <div className="relative">
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-brand-black/20 border-4 border-brand-white" />
          <span className="text-sm font-mono text-brand-dark-gray">2018 - 2020</span>
          <h5 className="text-lg font-medium mt-1">청원고등학교 재학</h5>
        </div>

        <div className="relative">
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-brand-black/20 border-4 border-brand-white" />
          <span className="text-sm font-mono text-brand-dark-gray">2021 - 현재</span>
          <h5 className="text-lg font-medium mt-1">한성대학교 재학 중</h5>
        </div>
      </div>
    </section>

    <section className="pt-12">
      <h4 className="text-xs font-mono text-brand-dark-gray tracking-widest uppercase mb-8">Music Timeline</h4>
      <div className="space-y-12 border-l border-brand-black/10 pl-8 ml-2">
        <div className="relative">
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-brand-black/20 border-4 border-brand-white" />
          <span className="text-sm font-mono text-brand-dark-gray">2006 - 2013</span>
          <h5 className="text-lg font-medium mt-1">빅뱅, 2NE1, 싸이 등 YG엔터테인먼트 음악 청취</h5>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-brand-black/20 border-4 border-brand-white" />
          <span className="text-sm font-mono text-brand-dark-gray">2014 - 2015</span>
          <h5 className="text-lg font-medium mt-1">힙합 음악과 비틀즈를 들으며 본격적인 음악 청취 시작</h5>
        </div>

        <div className="relative">
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-brand-black/20 border-4 border-brand-white" />
          <span className="text-sm font-mono text-brand-dark-gray">2016 - 2019</span>
          <h5 className="text-lg font-medium mt-1">국내 힙합 음악 디깅 및 미국 힙합 입문</h5>
        </div>

        <div className="relative">
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-brand-black/20 border-4 border-brand-white" />
          <span className="text-sm font-mono text-brand-dark-gray">2020 - 2021</span>
          <h5 className="text-lg font-medium mt-1">오아시스를 시작으로 해외 락 음악 디깅</h5>
        </div>

        <div className="relative">
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-brand-black/20 border-4 border-brand-white" />
          <span className="text-sm font-mono text-brand-dark-gray">2022 - 2026</span>
          <h5 className="text-lg font-medium mt-1">콘서트 및 페스티벌 경험, 평점 사이트 기반 주도적 음악 디깅</h5>
        </div>
      </div>
    </section>
  </div>
);

const AboutMusicContent = () => (
  <div className="space-y-32 py-12">
    <section className="flex flex-col items-center text-center max-w-2xl mx-auto">
      <h4 className="text-xs font-mono text-brand-dark-gray tracking-widest uppercase mb-8 flex items-center gap-2">
        <Music size={14} /> 음악 취향
      </h4>
      <div className="space-y-6 text-lg leading-relaxed font-light text-brand-black/80">
        <p><span className="font-bold text-black">힙합</span>: 90년대 뉴욕 힙합(EX. The Notorious BIG, NAS, JAY-Z), 2010년대 사운드클라우드 에라 시절 트랩 음악들(EX. Playboi Carti, Lil Uzi Vert), 앱스트랙트 힙합(EX. MF DOOM), 레이지(EX. SLAYR, YEAT, CHE)</p>
        <p><span className="font-bold text-black">락</span>: 90년대 얼터너티브 락(EX. Pixies, Pavement, R.E.M), 60년대 락(EX. The Beatles, The Beach Boys), 한국 인디락(EX. 언니네 이발관, 노브레인, 세이수미)</p>
        <p><span className="font-bold text-black">알앤비</span>: 얼터너티브 알앤비(EX. Frank Ocean, The Weeknd), 네오소울(EX. D'angelo, Maxwell)</p>
        <p><span className="font-bold text-black">케이팝</span>: 트와이스, 뉴진스, 2NE1, 키키, 에스파</p>
      </div>
    </section>
    
    <section className="w-full max-w-4xl mx-auto">
      <h4 className="text-xs font-mono text-brand-dark-gray tracking-widest uppercase mb-8 flex items-center justify-center gap-2">
        <Star size={14} /> 인생 앨범
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { id: 1, src: "https://i.namu.wiki/i/QL1d00dt0lIHKjp2wPLBJektvp_cRI25Q66Wo2gwhfDOhCX9d3su30ERZ4MtmB21UCspIlZHF0qRDOylDjMt2w.webp", title: "Madvillainy - Madvillain" },
          { id: 2, src: "https://i.namu.wiki/i/6IEf5Xn3guD0gIxtl3GisIxBuAXdHILkFzj-7-begw4iAzHdK21EpwlkKXPzwBvLx5pzLiKw-kigxnooMLJvaw.webp", title: "Blonde - Frank Ocean" },
          { id: 3, src: "https://i.namu.wiki/i/La8mia11s-pN2jfGMpoPd_U9Y5qF1HOcXv9eMBbwkxT0Cejx3gdOc4QzDwxuOnlSvMyWXDFNc1aSHzgW61CZNw.webp", title: "Voodoo - D'angelo" },
          { id: 4, src: "https://upload.wikimedia.org/wikipedia/commons/2/20/TheBeatles68LP.jpg", title: "The Beatles - The Beatles" }
        ].map((album) => (
          <div key={album.id} className="aspect-square bg-brand-gray overflow-hidden rounded-lg group relative cursor-pointer">
            <img 
              src={album.src} 
              alt={album.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
              <span className="text-white font-mono text-[10px] uppercase tracking-widest mb-1 opacity-70">Selected Album</span>
              <span className="text-white font-medium text-center text-sm">{album.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="flex flex-col items-center text-center max-w-3xl mx-auto bg-brand-gray p-12 md:p-16 rounded-3xl">
      <h4 className="text-xs font-mono text-brand-dark-gray tracking-widest uppercase mb-8">목표</h4>
      <p className="text-3xl font-serif leading-snug italic">
        "아티스트의 상상이 현실이 되는 가장 가까운 곳에서, 
        대중과 소통할 수 있는 가장 세련된 다리를 놓는 A&R이 되는 것."
      </p>
    </section>
    
    <section className="flex flex-col items-center text-center">
      <h4 className="text-xs font-mono text-brand-dark-gray tracking-widest uppercase mb-8">Favorite Genres</h4>
      <div className="flex flex-wrap justify-center gap-3">
        {['Electronic Pop', 'Alternative Hip-hop', 'Contemporary Jazz', 'Dream Pop', 'Nu-Disco'].map(genre => (
          <span key={genre} className="px-5 py-2 border border-brand-black/10 rounded-full text-xs font-mono tracking-wider uppercase bg-white">
            {genre}
          </span>
        ))}
      </div>
    </section>
  </div>
);

const ReviewContent = () => (
  <div className="space-y-32">
    {REVIEWS.map((review, idx) => (
      <article key={review.id} className="block overflow-hidden">
        <div className="md:float-left md:w-1/3 md:mr-12 mb-8 md:mb-6">
          <div className="aspect-square bg-brand-gray overflow-hidden shadow-2xl">
            <img 
              src={review.coverImage} 
              alt={review.album} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-6 space-y-2 font-mono text-xs tracking-widest uppercase">
            <p className="text-brand-dark-gray">Album</p>
            <p className="font-bold">{review.album}</p>
            <p className="text-brand-dark-gray mt-4">Artist</p>
            <p className="font-bold">{review.artist}</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <h5 className="text-2xl font-serif text-brand-black">{review.title}</h5>
          <div className="h-px w-20 bg-brand-black/20" />
          <p className="text-lg leading-relaxed font-light whitespace-pre-line text-brand-black/80">
            {review.description}
          </p>
        </div>
      </article>
    ))}
  </div>
);

const PlaylistContent = () => (
  <div className="space-y-24">
    {PLAYLISTS.map((playlist, idx) => (
      <section key={playlist.id}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-brand-black/10">
          <div>
            <h4 className="text-xs font-mono text-brand-dark-gray tracking-widest uppercase mb-4 flex items-center gap-2">
               Curated Vol. 0{idx + 1}
            </h4>
            <h5 className="text-4xl font-serif">{playlist.title}</h5>
          </div>
          <p className="text-brand-dark-gray md:max-w-xs">{playlist.description}</p>
        </div>
        
        <div className="bg-brand-gray/50 rounded-2xl p-6 md:p-10">
          <ul className="space-y-4">
            {playlist.tracks.map((track, trackIdx) => (
              <li key={track} className="group flex items-center justify-between py-3 border-b border-brand-black/5 last:border-0 hover:px-4 transition-all duration-300 rounded-lg hover:bg-white/80">
                <div className="flex items-center gap-6">
                  <span className="font-mono text-[10px] text-brand-dark-gray opacity-50">
                    {(trackIdx + 1).toString().padStart(2, '0')}
                  </span>
                  <p className="text-lg font-light group-hover:font-normal transition-all">{track}</p>
                </div>
                <PlayCircle size={20} className="text-brand-dark-gray opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    ))}
  </div>
);

const ContactContent = () => (
  <div className="flex flex-col items-center justify-center text-center py-12 md:py-24">
    <h4 className="text-4xl md:text-5xl font-serif mb-16 text-center tracking-tight">
      아래 연락 수단을 통해 연락해주십시오
    </h4>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 w-full max-w-xl px-6">
      <a href="mailto:ipkn67728@gmail.com" className="group flex flex-col items-center gap-4 text-center">
        <div className="w-16 h-16 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black transition-all duration-500">
          <Mail size={24} className="group-hover:text-brand-white transition-colors" />
        </div>
        <div>
          <p className="text-[10px] font-mono tracking-widest uppercase text-brand-dark-gray">Email</p>
          <p className="text-sm font-medium">ipkn67728@gmail.com</p>
        </div>
      </a>
      
      <a href="https://instagram.com/pismark310" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4 text-center">
        <div className="w-16 h-16 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black transition-all duration-500">
          <Instagram size={24} className="group-hover:text-brand-white transition-colors" />
        </div>
        <div>
          <p className="text-[10px] font-mono tracking-widest uppercase text-brand-dark-gray">Instagram</p>
          <p className="text-sm font-medium">@pismark310</p>
        </div>
      </a>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState<SectionId | null>(null);

  // Auto-scroll to top when section changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSectionId]);

  const activeSection = SECTIONS.find(s => s.id === activeSectionId);

  return (
    <div className="min-h-screen bg-brand-white selection:bg-brand-black selection:text-brand-white selection:bg-opacity-100">
      {/* Ambient Background Layer */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.05] grayscale -z-20"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&q=80&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'contrast(120%) brightness(100%)'
        }}
      />
      
      {/* Subtle Noise/Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] -z-20 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      <Header 
        onHomeClick={() => setActiveSectionId(null)} 
        onSectionClick={(id) => setActiveSectionId(id)}
        activeSection={activeSectionId} 
      />

      <main className={`${activeSectionId ? 'pt-52 md:pt-64' : 'pt-0'} pb-24`}>
        <AnimatePresence mode="wait">
          {!activeSectionId ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen flex flex-col lg:flex-row bg-brand-white"
            >
              <div className="w-full lg:w-2/5 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center items-center px-8 py-24 md:px-16 md:py-32 lg:p-24 bg-brand-gray text-brand-black relative overflow-hidden">
                {/* Subtle Background Image Contextual to A&R */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1460036181710-e542d821c5f3?auto=format&fit=crop&q=80&w=1080" 
                    alt=""
                    className="w-full h-full object-cover opacity-20 grayscale brightness-110 contrast-125"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="max-w-md w-full relative z-10 text-center lg:text-left"
                >
                  <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif tracking-tight leading-[0.85] mb-8 whitespace-nowrap">
                    박민수
                  </h1>
                  <p className="text-xs md:text-sm lg:text-lg font-mono text-brand-black/60 tracking-[0.4em] uppercase whitespace-nowrap">
                    A&R Portfolio
                  </p>
                  <div className="mt-8 lg:mt-12 h-px w-16 lg:w-24 bg-brand-black/20 mx-auto lg:mx-0" />
                  <p className="mt-8 lg:mt-12 text-brand-black text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                    A&R 지망생 '박민수'의<br />
                    포트폴리오 홈페이지입니다.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="w-full lg:w-3/5 px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:pb-24 lg:pt-56 flex flex-col justify-center bg-brand-off-white"
              >
                <div className="record-grid">
                  {SECTIONS.map((section) => (
                    <RecordCard 
                      key={section.id} 
                      section={section} 
                      onClick={() => setActiveSectionId(section.id as SectionId)} 
                    />
                  ))}
                </div>
                
                <footer className="mt-32 pt-12 border-t border-brand-black/10 flex flex-col md:flex-row justify-between gap-6 opacity-30 font-mono text-[10px] uppercase tracking-[0.3em]">
                  <p>&copy; 2026 PARK MINSOO.</p>
                  <div className="flex gap-8">
                    <span>SEOUL, KOREA</span>
                    <span>A&R ASPIRANT</span>
                  </div>
                </footer>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen bg-brand-gray px-6 pb-24 pt-40 md:px-12 md:pb-32 md:pt-52 lg:pt-64 flex flex-col items-center"
            >
              <div className="w-full max-w-4xl">
                <div className="mb-20 text-center">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-5xl md:text-7xl font-serif mb-6"
                  >
                    {activeSection?.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="font-mono text-xs md:text-sm text-brand-dark-gray tracking-[0.4em] uppercase"
                  >
                    {activeSection?.titleEn}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  {activeSectionId === 'about-life' && <AboutLifeContent />}
                  {activeSectionId === 'about-music' && <AboutMusicContent />}
                  {activeSectionId === 'review' && <ReviewContent />}
                  {activeSectionId === 'playlist' && <PlaylistContent />}
                  {activeSectionId === 'contact' && <ContactContent />}
                </motion.div>

                <button 
                  onClick={() => setActiveSectionId(null)}
                  className="mt-32 w-full py-12 border-t border-b border-brand-black/10 flex items-center justify-center gap-4 group hover:bg-brand-white/50 transition-colors duration-500"
                >
                  <span className="font-mono text-xs tracking-[0.5em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                    Back to Main Page
                  </span>
                  <ArrowLeft size={16} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      {/* Decorative vertical lines */}
      <div className="fixed top-0 left-12 h-screen w-px bg-brand-black/5 -z-10 hidden xl:block" />
      <div className="fixed top-0 right-12 h-screen w-px bg-brand-black/5 -z-10 hidden xl:block" />
    </div>
  );
}
