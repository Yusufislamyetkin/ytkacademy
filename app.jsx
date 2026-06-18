const { useState, useRef, useEffect } = React;

/* ============ SCROLL REVEAL HOOK ============ */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    // Reveal = remove the JS-applied hidden state. Base CSS is already visible,
    // so any failure below still leaves content on screen.
    const reveal = (el) => el.classList.remove('reveal-hidden');

    if (!('IntersectionObserver' in window)) return; // stay visible, no anim

    // Apply the pre-animation hidden state via JS only.
    els.forEach((el) => el.classList.add('reveal-hidden'));

    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {if (e.isIntersecting) {reveal(e.target);io.unobserve(e.target);}});
    }, { threshold: .08, rootMargin: '0px 0px -5% 0px' });

    els.forEach((el) => io.observe(el));

    // Safety net: reveal anything still hidden shortly after mount.
    const fallback = setTimeout(() => els.forEach(reveal), 600);

    return () => {io.disconnect();clearTimeout(fallback);};
  });
}

/* ============ HEADER ============ */
/* ============ HEADER ============ */
const Header = ({ navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = [['Anasayfa', 'home'], ['Hakkımızda', 'about'], ['Blog', 'blogs'], ['İletişim', 'contact'], ['Fiyatlandırma', 'pricing']];
  return (
    <header className="sticky top-0 z-50 bg-[rgba(2,8,6,.88)] backdrop-blur-md border-b border-[#0c2719]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex items-center justify-between h-[72px]">
        <a href={getPagePath('home')} onClick={(e) => { e.preventDefault(); navigate('home'); }} className="flex items-center gap-3 font-disp font-bold text-xl text-[#eafff5] tracking-tight">
          <span className="w-[34px] h-[34px] border-[1.5px] border-[#00ff88] rounded-lg grid place-items-center text-[#00ff88] font-mono text-[15px] font-bold shadow-[0_0_18px_-4px_var(--glow),inset_0_0_12px_-6px_var(--glow)]">&gt;_</span>
          YTK <b className="text-[#00ff88]">Academy</b>
        </a>
        <nav className="hidden md:flex gap-9 items-center">
          {menuItems.map(([t, p]) => (
            <a key={p} href={getPagePath(p)} onClick={(e) => { e.preventDefault(); navigate(p); }} className="text-sm text-[#74998a] hover:text-[#cdeede] transition-colors relative group">
              {t}
              {p === 'pricing' && (
                <span className="absolute -top-5 -right-8 bg-[#00ff88] text-[#021008] text-[11px] font-black px-2 py-0.5 rounded-lg font-mono shadow-[0_0_12px_#00ff88]">
                  🔥 %50
                </span>
              )}
              <span className="absolute left-0 -bottom-2 h-[1.5px] w-0 bg-[#00ff88] group-hover:w-full transition-all duration-200"></span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3.5">
          <a href={getPagePath('login')} onClick={(e) => { e.preventDefault(); navigate('login'); }} className="hidden sm:inline-flex font-mono text-sm text-[#cdeede] px-[18px] py-[11px] border border-[#103a26] bg-transparent hover:border-[#00ff88] hover:text-[#00ff88] transition-colors">Giriş Yap</a>
          <a href={getPagePath('register')} onClick={(e) => { e.preventDefault(); navigate('register'); }} className="hidden sm:inline-flex font-mono text-sm font-bold text-[#021008] bg-[#00ff88] px-[22px] py-3 clip-btn hover:shadow-[0_0_28px_-4px_var(--glow)] hover:-translate-y-px transition-all">Hemen Başla</a>
          
          <button onClick={() => setMobileMenuOpen(o => !o)} aria-label="Mobil Menüyü Aç/Kapat" className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 border border-[#103a26] rounded bg-[#04100a] transition-all">
            <span className={`w-5 h-0.5 bg-[#00ff88] transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-[#00ff88] transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-[#00ff88] transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#0c2719] bg-[#04100a] px-6 py-4 flex flex-col gap-4">
          {menuItems.map(([t, p]) => (
            <a key={p} href={getPagePath(p)} onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); navigate(p); }} className="text-left py-2 text-sm text-[#74998a] hover:text-[#00ff88] transition-colors flex items-center justify-between">
              <span>{t}</span>
              {p === 'pricing' && <span className="bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-[10px] font-bold px-1.5 py-0.5 rounded font-mono scale-90">%50 İndirim</span>}
            </a>
          ))}
          <div className="h-px bg-[#0c2719] my-1"></div>
          <div className="flex gap-4">
            <a href={getPagePath('login')} onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); navigate('login'); }} className="flex-1 text-center py-2.5 text-sm text-[#cdeede] border border-[#103a26] rounded">Giriş Yap</a>
            <a href={getPagePath('register')} onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); navigate('register'); }} className="flex-1 text-center py-2.5 text-sm font-bold text-[#021008] bg-[#00ff88] rounded">Kayıt Ol</a>
          </div>
        </div>
      )}
    </header>
  );
};


/* ============ FOOTER ============ */
const Footer = ({ navigate }) =>
<footer className="bg-[#04100a] border-t border-[#0c2719] pt-16 pb-9">
    <div className="max-w-[1280px] mx-auto px-8">
      <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] gap-10 pb-12 border-b border-[#0c2719]">
        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <a href={getPagePath('home')} onClick={(e) => { e.preventDefault(); navigate('home'); }} className="flex items-center gap-3 font-disp font-bold text-xl text-[#eafff5] whitespace-nowrap">
            <span className="w-[34px] h-[34px] border-[1.5px] border-[#00ff88] rounded-lg grid place-items-center text-[#00ff88] font-mono text-[15px] font-bold">&gt;_</span>
            YTK <b className="text-[#00ff88]">Academy</b>
          </a>
          <p className="text-[#74998a] text-sm mt-[18px] max-w-[300px] leading-relaxed">Uygulamalı CTF görevleri ve siber güvenlik laboratuvarlarıyla yeni nesil siber güvenlik uzmanlarını yetiştiriyoruz.</p>
        </div>
        {[
      { h: 'Platform', items: [['Laboratuvarlar', 'rooms'], ['Blog', 'blogs'], ['CTF Görevleri', 'rooms'], ['Liderlik Tablosu', 'leaderboard']] },
      { h: 'Kurumsal & Yasal', items: [['Hakkımızda', 'about'], ['İletişim', 'contact'], ['Kullanım Şartları', 'terms'], ['Gizlilik Politikası', 'privacy'], ['İade ve İptal Koşulları', 'refund-policy']] },
      { h: 'Geliştirici Araçları I', items: [['C# Model & DTO Oluşturucu', 'tools/reverse-shell'], ['JWT & Base64 Çözücü', 'tools/encoder-decoder'], ['Password Hash & Salt Test', 'tools/password-strength'], ['CIDR & Subnet Hesaplayıcı', 'tools/subnet-calc'], ['MD5, SHA-256 Jeneratörü', 'tools/hash-tool']] },
      { h: 'Geliştirici Araçları II', items: [['SQL Şema Oluşturucu', 'tools/xss-generator'], ['EF Model Mapper', 'tools/sqli-generator'], ['Cron Zamanlayıcı & Açıklayıcı', 'tools/cron-explainer'], ['Base64 Dosya Dönüştürücü', 'tools/base64-file'], ['API Endpoint & Header Test', 'tools/dns-lookup']] }].
      map((col, i) =>
      <div key={i}>
            <div className="font-disp font-bold text-xs tracking-widest text-[#74998a] uppercase mb-[18px]">{col.h}</div>
            {col.items.map(([t, p], j) => {
              let hrefVal = '/';
              let navigatePage = 'home';
              let navigateData = null;
              if (p) {
                if (p.startsWith('tools/')) {
                  const slug = p.split('/')[1];
                  hrefVal = getPagePath('tools', { slug });
                  navigatePage = 'tools';
                  navigateData = { slug };
                } else {
                  hrefVal = getPagePath(p);
                  navigatePage = p;
                }
              }
              return (
                <a key={j} href={hrefVal} onClick={(e) => { e.preventDefault(); navigate(navigatePage, navigateData); }} className="block text-left text-[#74998a] text-sm py-1.5 hover:text-[#00ff88] transition-colors">{t}</a>
              );
            })}
          </div>
      )}
      </div>
      <div className="flex justify-between items-center pt-7 flex-wrap gap-4 border-t border-[#0c2719]/50 mt-6">
        <p className="text-[13px] text-[#5c8a74]">© 2026 YTK Academy — Tüm hakları saklıdır. | 💳 PCI-DSS 256-Bit Güvenli Ödeme Altyapısı</p>
        <img src="/visa-mastercard-troypng.png" alt="Visa, Mastercard, Troy" className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
      </div>
    </div>
  </footer>;


/* ============ HOMEPAGE ============ */
const HomePage = ({ navigate }) => {
  const matrixRef = useRef(null);
  const sphereRef = useRef(null);
  const termRef = useRef(null);
  const statsRef = useRef(null);
  useReveal();

  const [onlineCount, setOnlineCount] = useState(250);
  const [totalUsers, setTotalUsers] = useState(12400);

  const [showQuiz, setShowQuiz] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);
  const [quizStep, setQuizStep] = useState(1);
  const [quizLevel, setQuizLevel] = useState('');
  const [quizGoal, setQuizGoal] = useState('');
  const [quizHours, setQuizHours] = useState('');
  const [quizName, setQuizName] = useState('');
  const [quizNotes, setQuizNotes] = useState('');

  useEffect(() => {
    const fetchOnline = () => {
      fetch(`/api/users/online?t=${Date.now()}`)
        .then(res => res.json())
        .then(data => {
          if (data && Array.isArray(data)) {
            setOnlineCount(data.length);
          }
        })
        .catch(() => {});
    };
    fetchOnline();
    const interval = setInterval(fetchOnline, 20000);

    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data && data.totalUsers) {
          setTotalUsers(data.totalUsers);
        }
      })
      .catch(() => {});

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let io;
    if (statsRef.current) {
      const nums = statsRef.current.querySelectorAll('[data-count]');
      io = new IntersectionObserver((es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target,end = +el.dataset.count,sx = el.dataset.suffix || '';
            let cur = 0;const step = end / 60;
            (function up() {
              cur += step;
              if (cur < end) {el.textContent = Math.floor(cur).toLocaleString('tr-TR') + sx;requestAnimationFrame(up);} else
              el.textContent = end.toLocaleString('tr-TR') + sx;
            })();
            io.unobserve(el);
          }
        });
      }, { threshold: .5 });
      nums.forEach((n) => io.observe(n));
    }
    return () => {
      if (io) io.disconnect();
    };
  }, [totalUsers]);

  useEffect(() => {
    const cleanups = [];

    /* ---- MATRIX RAIN ---- */
    if (matrixRef.current) {
      const cv = matrixRef.current,ctx = cv.getContext('2d'),hero = cv.parentElement;
      let cols, drops;const fs = 15;
      const chars = 'アカサタナハマヤラ0123456789ABCDEF<>{}#$%&*ANGRSU01'.split('');
      const size = () => {
        cv.width = hero.offsetWidth;cv.height = hero.offsetHeight;
        cols = Math.floor(cv.width / fs);
        drops = new Array(cols).fill(0).map(() => Math.random() * -50);
      };
      size();window.addEventListener('resize', size);
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      let raf;
      const draw = () => {
        ctx.fillStyle = 'rgba(2,8,6,.10)';ctx.fillRect(0, 0, cv.width, cv.height);
        ctx.font = fs + 'px JetBrains Mono, monospace';
        for (let i = 0; i < cols; i++) {
          const t = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fs,y = drops[i] * fs;
          ctx.fillStyle = Math.random() > .975 ? '#eafff5' : 'rgba(0,255,136,' + (Math.random() * .5 + .35) + ')';
          ctx.fillText(t, x, y);
          if (y > cv.height && Math.random() > .975) drops[i] = 0;
          drops[i] += 1;
        }
        raf = requestAnimationFrame(draw);
      };
      if (!reduce) draw();
      cleanups.push(() => {cancelAnimationFrame(raf);window.removeEventListener('resize', size);});
    }

    /* ---- WIREFRAME SPHERE ---- */
    if (sphereRef.current) {
      const cv = sphereRef.current,ctx = cv.getContext('2d');
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const size = () => {
        const r = cv.getBoundingClientRect();
        const w = Math.round(r.width * dpr);
        const h = Math.round(r.height * dpr);
        if (cv.width !== w || cv.height !== h) {
          cv.width = w;
          cv.height = h;
        }
      };
      size();window.addEventListener('resize', size);
      const N = 240,pts = [];const off = 2 / N,inc = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < N; i++) {const y = i * off - 1 + off / 2;const r = Math.sqrt(1 - y * y);const phi = i * inc;pts.push([Math.cos(phi) * r, y, Math.sin(phi) * r]);}
      let a = 0,raf;const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const frame = () => {
        ctx.clearRect(0, 0, cv.width, cv.height);
        const cx = cv.width / 2,cy = cv.height / 2,R = Math.min(cv.width, cv.height) * .40;
        a += reduce ? 0 : .0035;
        const ca = Math.cos(a),sa = Math.sin(a),cb = Math.cos(a * .6),sb = Math.sin(a * .6);
        const proj = pts.map((p) => {
          let [x, y, z] = p;
          let x1 = x * ca - z * sa,z1 = x * sa + z * ca;
          let y1 = y * cb - z1 * sb,z2 = y * sb + z1 * cb;
          const persp = 1.7 / (1.7 + z2);
          return { sx: cx + x1 * R * persp, sy: cy + y1 * R * persp, z: z2 };
        });
        for (let i = 0; i < proj.length; i++) for (let j = i + 1; j < proj.length; j++) {
          const dx = proj[i].sx - proj[j].sx,dy = proj[i].sy - proj[j].sy,d = dx * dx + dy * dy;
          if (d < 38 * dpr * (38 * dpr)) {
            const al = (1 - Math.sqrt(d) / (38 * dpr)) * .28 * ((proj[i].z + 1) / 2);
            ctx.strokeStyle = 'rgba(0,255,136,' + al + ')';ctx.lineWidth = dpr * .6;
            ctx.beginPath();ctx.moveTo(proj[i].sx, proj[i].sy);ctx.lineTo(proj[j].sx, proj[j].sy);ctx.stroke();
          }
        }
        proj.forEach((p) => {
          const depth = (p.z + 1) / 2;
          ctx.beginPath();ctx.arc(p.sx, p.sy, (1.1 + depth * 2) * dpr, 0, 7);
          ctx.fillStyle = 'rgba(' + (180 - depth * 180) + ',255,' + (180 + depth * 40) + ',' + (.35 + depth * .6) + ')';
          ctx.fill();
        });
        raf = requestAnimationFrame(frame);
      };
      frame();
      cleanups.push(() => {cancelAnimationFrame(raf);window.removeEventListener('resize', size);});
    }

    /* ---- TERMINAL TYPING ---- */
    if (termRef.current) {
      const el = termRef.current;el.innerHTML = '';
      const lines = [
        { t: '$ ', c: '#00ff88', x: 'dotnet new webapi -o MentorApp', d: 50 },
        { t: '', c: '#74998a', x: '  Creating template "ASP.NET Core Web API"...', d: 10 },
        { t: '$ ', c: '#00ff88', x: 'cd MentorApp && dotnet run', d: 50 },
        { t: '', c: '#ffd166', x: '  Building project...', d: 10 },
        { t: '', c: '#00ff88', x: '  [info] Now listening on: http://localhost:5000', d: 10 },
        { t: '', c: '#00ff88', x: '  [info] Application started. Press Ctrl+C to shut down.', d: 10 },
        { t: '$ ', c: '#00ff88', x: 'curl http://localhost:5000/api/mentorship', d: 50 },
        { t: '', c: '#5cffba', x: '  { "status": "Ready", "mentor": "Yusuf Islam Yetkin" }', d: 10 },
        { t: '$ ', c: '#00ff88', x: '_', d: 0, cur: true }
      ];

      let li = 0,stopped = false;
      const typeLine = () => {
        if (stopped || li >= lines.length) return;
        const L = lines[li];
        const div = document.createElement('div');
        const pre = document.createElement('span');pre.style.color = '#00ff88';pre.textContent = L.t;div.appendChild(pre);
        const span = document.createElement('span');span.style.color = L.c;div.appendChild(span);el.appendChild(div);
        if (L.cur) {const cu = document.createElement('span');cu.className = 'term-cursor';div.appendChild(cu);li++;return;}
        let i = 0;
        (function ch() {
          if (stopped) return;
          if (i <= L.x.length) {span.textContent = L.x.slice(0, i);i++;setTimeout(ch, L.d);} else
          {li++;setTimeout(typeLine, L.d > 20 ? 260 : 60);}
        })();
      };
      typeLine();
      cleanups.push(() => {stopped = true;});
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  useEffect(() => {
    if (window.__SK_OPEN_QUIZ) {
      setShowQuiz(true);
      window.__SK_OPEN_QUIZ = false;
    }
  }, []);

  const selectQuizOption = (step, val) => {
    if (step === 1) {
      setQuizLevel(val);
      setTimeout(() => setQuizStep(2), 200);
    } else if (step === 2) {
      setQuizGoal(val);
      setTimeout(() => setQuizStep(3), 200);
    } else if (step === 3) {
      setQuizHours(val);
      setTimeout(() => setQuizStep(4), 200);
    }
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    setQuizStep(5);
    triggerWhatsAppRedirect();
  };

  const triggerWhatsAppRedirect = () => {
    const formattedName = quizName || 'Öğrenci';
    const message = `Merhaba Yusuf Hocam,\n\nBirebir Yazılım Mentorluğu için randevu oluşturmak istiyorum:\n\n• Ad Soyad: ${formattedName}\n• Eğitim Konusu: C# & .NET Core Geliştirme\n• Ders Türü: Ücretsiz Ön Görüşme / Kariyer Planlama\n• Seviye: ${quizLevel}\n• Hedef: ${quizGoal}\n• Haftalık Süre: ${quizHours}${quizNotes ? '\n• Ek Not: ' + quizNotes : ''}\n\nSiteden gönderilmiştir. Geri dönüşünüzü bekliyorum.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/905389351189?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <Header navigate={navigate} />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#0c2719]">
        <canvas ref={matrixRef} className="absolute inset-0 w-full h-full z-0 opacity-[.32]"></canvas>
        <div className="grid-floor"></div>
        <div className="absolute top-[-12%] left-1/2 -translate-x-1/2 w-[900px] h-[560px] z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center,rgba(0,255,136,.16),transparent 62%)' }}></div>

        <div className="max-w-[1280px] mx-auto px-8 relative z-[2] grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-14 items-center pt-24 pb-[104px]">
          <div>
            <span className="inline-flex items-center gap-2.5 text-[12.5px] tracking-[.12em] uppercase text-[#5cffba] border border-[#103a26] bg-[rgba(0,255,136,.04)] px-3.5 py-[7px] rounded-full mb-[26px]">
              <span className="w-[7px] h-[7px] rounded-full bg-[#00ff88] shadow-[0_0_10px_#00ff88] sk-pulse"></span>
              Yusuf İslam Yetkin ile Birebir Yazılım Eğitimi
            </span>
            <h1 className="text-[clamp(36px,5.5vw,72px)] text-[#eafff5] mb-[20px] tracking-[-.025em] font-disp font-bold leading-[1.15]">
              YTK Academy |<br />
              <span className="glitch" data-text="Bire Bir Yazılım Mentörlük Programı">Bire Bir Yazılım Mentörlük Programı</span>
            </h1>
            
            {/* HERO CONTENT */}
            <div className="space-y-4 text-[#74998a] text-[15px] leading-relaxed mb-8 mt-6 max-w-[680px]">
              <p>
                <strong>YTK Academy</strong>, Yusuf İslam Yetkin rehberliğinde sunulan bire bir yazılım mentörlük programıdır.
              </p>
              <p>
                Yazılıma sıfırdan başlamak isteyenler veya mevcut teknik yetkinliklerini ileri seviyeye taşımayı hedefleyen geliştiriciler için kişiselleştirilmiş bir öğrenme yolculuğu sunar.
              </p>
              <p>
                Eğitim sürecinde yalnızca teorik bilgiler değil, gerçek kurumsal projelerde kullanılan yaklaşımlar, modern yazılım mimarileri ve profesyonel geliştirme süreçleri uygulamalı olarak öğretilir.
              </p>
              <p>
                Katılımcılar adım adım ilerleyen bir yol haritası eşliğinde; .NET, SQL, mikroservisler, bulut teknolojileri ve yazılım mimarileri gibi alanlarda yetkinlik kazanırken, aynı zamanda CV'lerinde ve iş görüşmelerinde kullanabilecekleri profesyonel projelerden oluşan güçlü bir portföy oluştururlar.
              </p>
            </div>

            {/* HERO CTA */}
            <div className="flex gap-4 flex-wrap items-center">
              <button onClick={() => setShowQuiz(true)} className="font-mono text-[14px] font-bold text-[#021008] bg-[#00ff88] px-[28px] py-4 clip-btn hover:shadow-[0_0_28px_-4px_var(--glow)] hover:-translate-y-px transition-all">Ücretsiz Ön Görüşme Planla</button>
              <a href="https://wa.me/905389351189?text=Merhaba%2C%20birebir%20yaz%C4%B1l%C4%B1m%20mentorlu%C4%9Fu%20i%C3%A7in%20ilk%20dersimi%20rezerve%20etmek%20istiyorum." target="_blank" rel="noopener noreferrer" className="font-mono text-[14px] text-[#cdeede] px-[28px] py-4 border border-[#103a26] hover:border-[#00ff88] hover:text-[#00ff88] transition-colors flex items-center justify-center">İlk Dersini Rezerve Et</a>
            </div>

            <div className="flex items-center gap-3.5 mt-[26px] text-[13px] text-[#5c8a74]">
              <div className="flex">
                {['AK', 'MY', 'EÇ', '+9'].map((a, i) =>
                <span key={i} className={"w-[30px] h-[30px] rounded-full border-[1.5px] border-[#020806] grid place-items-center text-[11px] font-bold text-[#5cffba] " + (i ? '-ml-2 ' : '')} style={{ background: 'linear-gradient(135deg,#0a3a24,#063018)' }}>{a}</span>
                )}
              </div>
              <span>{onlineCount} öğrenci şu an aktif çalışmakta 🟢</span>
            </div>
          </div>

          {/* TERMINAL */}
          <div className="rounded-xl overflow-hidden border border-[#103a26] text-[13.5px] shadow-[0_40px_80px_-30px_rgba(0,0,0,.9),0_0_60px_-20px_var(--glow)]" style={{ background: 'linear-gradient(160deg,#06140d,#040d08)' }}>
            <div className="flex items-center gap-2 px-3.5 py-3 border-b border-[#0c2719] bg-black/25">
              <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]"></span>
              <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]"></span>
              <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]"></span>
              <span className="ml-2 text-xs text-[#5c8a74]">yusuf@ytkacademy: ~/csharp-project</span>
            </div>
            <div ref={termRef} className="p-[18px] min-h-[240px] leading-[1.85] font-mono" style={{ letterSpacing: "1px", height: "340px", padding: "12px" }}></div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <div ref={statsRef} className="border-b border-[#0c2719]" style={{ background: 'linear-gradient(180deg,#04100a,#020806)' }}>
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-2 md:grid-cols-4">
          {[
            { c: totalUsers, s: '+', l: 'Aktif Öğrenci' },
            { c: window.SK_ALL_ROOMS ? window.SK_ALL_ROOMS.length : 15, s: '+', l: 'Kodlama Laboratuvarı' },
            { c: 90, s: '+', l: 'Uygulamalı Görev' },
            { c: 94, s: '%', l: 'Tamamlama Oranı' }
          ].map((st, i) =>
            <div key={i} className={"py-11 px-7 text-center " + (i ? 'border-l border-[#0c2719]' : '')}>
              <div key={st.c} data-count={st.c} data-suffix={st.s} className="font-disp font-bold text-[clamp(32px,4vw,52px)] text-[#00ff88] tracking-[-.02em] drop-shadow-[0_0_26px_rgba(0,255,136,.3)]">0</div>
              <div className="text-[13px] text-[#74998a] mt-2 tracking-wide">{st.l}</div>
            </div>
          )}
        </div>
      </div>

      {/* 2. KİMLER İÇİN? */}
      <section className="py-[108px] border-b border-[#0c2719]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center max-w-[640px] mx-auto mb-14 reveal">
            <span className="font-mono text-[13px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center justify-center gap-2.5">
              <span className="text-[#5c8a74] font-bold">//</span> Kimler İçin?
            </span>
            <h2 className="text-[clamp(28px,4vw,42px)] text-[#eafff5] mt-4">Bu Mentorluk Kimlere Uygun?</h2>
            <p className="text-[#74998a] mt-4 text-[15px]">Farklı bilgi seviyeleri ve kariyer hedefleri için özel hazırlanmış birebir içerik.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🌱", title: "Yazılıma sıfırdan başlamak isteyenler", desc: "Hiç kod yazmamış veya temel mantığı tam kavrayamamış olanlar için sıfırdan sağlam bir temel." },
              { icon: "💻", title: "Junior geliştiriciler", desc: "Sektörde çalışan fakat kendisini mimari, sistem tasarımı ve ileri düzey konularda geliştirmek isteyenler." },
              { icon: "🔄", title: "İş değiştirmek isteyenler", desc: "Farklı meslek gruplarından gelip, yazılım dünyasına backend geliştirici olarak geçmek isteyen kariyer değişimcileri." },
              { icon: "🎯", title: "Mülakatlara hazırlananlar", desc: "Kurumsal firmaların teknik mülakat, kod testleri ve System Design aşamalarını aşmak isteyenler." },
              { icon: "🚀", title: "Backend uzmanlaşmak isteyenler", desc: "C# ve .NET Core teknolojilerinde derinleşerek kurumsal ölçekte backend sistemleri tasarlamak isteyenler." },
              { icon: "⚡", title: "Mühendislik öğrencileri & Mezunlar", desc: "Okullardaki teorik eğitimi endüstriyel pratiklerle birleştirip, mezun olmadan veya mezuniyet sonrasında sektöre hazır hale gelmek isteyenler." }
            ].map((k, idx) => (
              <div key={idx} className="reveal group relative overflow-hidden rounded-2xl border border-[#0c2719] p-8 hover:border-[#103a26] hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,255,136,.35)] transition-all flex flex-col justify-between min-h-[200px]" style={{ background: 'linear-gradient(165deg,#07150e,#04100a)' }}>
                <span className="absolute top-0 left-0 w-full h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ background: 'linear-gradient(90deg,#00ff88,transparent)' }}></span>
                <div>
                  <div className="text-3xl mb-4">{k.icon}</div>
                  <h3 className="text-lg text-[#eafff5] font-disp font-bold mb-2.5">{k.title}</h3>
                  <p className="text-xs text-[#74998a] leading-[1.65]">{k.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NELER ÖĞRENECEKSİNİZ? */}
      <section className="py-[108px] border-b border-[#0c2719]" style={{ background: 'linear-gradient(180deg,#020806,#04100a)' }}>
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="font-mono text-[13px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center gap-2.5">
              <span className="text-[#5c8a74] font-bold">//</span> Neler Öğreneceksiniz?
            </span>
            <h2 className="text-[clamp(30px,4vw,46px)] text-[#eafff5] my-[18px]">Gerçek Sektör Deneyimiyle Öğrenin</h2>
            <p className="text-[#74998a] text-[15.5px] leading-relaxed mb-8">
              Piyasadaki teorik videoların aksine, kurumsal projelerin mutfağında kullanılan tüm modern mimari ve teknoloji yığınını Yusuf İslam Yetkin ile birebir uygulamalı öğrenirsiniz.
            </p>
            
            <div className="flex flex-wrap gap-2.5 max-w-[580px]">
              {[
                "C#", ".NET", "ASP.NET Core", "SQL Server", "Microservices", 
                "Docker", "Kubernetes", "RabbitMQ", "Redis", "Clean Architecture", "System Design"
              ].map((tech, idx) => (
                <span key={idx} className="text-[12.5px] text-[#5cffba] border border-[#103a26] px-4 py-2 rounded-lg bg-[rgba(0,255,136,.03)] font-mono hover:border-[#00ff88] transition-colors">
                  <span className="text-[#00ff88] mr-1">›</span> {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="reveal">
            <div className="sphere-wrap relative aspect-square grid place-items-center">
              <canvas ref={sphereRef} className="w-full h-full"></canvas>
              <span className="absolute top-[6%] left-0 font-mono text-[11.5px] text-[#5cffba] border border-[#103a26] bg-[rgba(2,8,6,.85)] px-2.5 py-[5px] rounded-md backdrop-blur-sm">build: succeeded ✓</span>
              <span className="absolute bottom-[10%] -right-[4%] font-mono text-[11.5px] text-[#5cffba] border border-[#103a26] bg-[rgba(2,8,6,.85)] px-2.5 py-[5px] rounded-md backdrop-blur-sm">active_devs: 380</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EĞİTİM SÜRECİ */}
      <section className="py-[108px] border-b border-[#0c2719]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center max-w-[640px] mx-auto mb-14 reveal">
            <span className="font-mono text-[13px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center justify-center gap-2.5">
              <span className="text-[#5c8a74] font-bold">//</span> Eğitim Süreci
            </span>
            <h2 className="text-[clamp(28px,4vw,42px)] text-[#eafff5] mt-4">Mentorluk Süreci Nasıl İşliyor?</h2>
            <p className="text-[#74998a] mt-4 text-[15px]">Başlangıçtan hedeflerinize ulaşana kadar disiplinli ve adım adım ilerleyen süreç.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "01", h: "Tanışma görüşmesi", p: "Hedeflerinizi, beklentilerinizi ve mevcut seviyenizi belirlediğimiz 15 dakikalık görüşme." },
              { n: "02", h: "Seviye analizi", p: "Algoritmik düşünce ve yazılım altyapınızı ölçerek program başlangıç seviyesini belirliyoruz." },
              { n: "03", h: "Kişisel yol haritası", p: "Öğrenme hızınıza ve hedeflerinize özel haftalık konu ve ödev dağılımlı plan oluşturuyoruz." },
              { n: "04", h: "Haftalık birebir dersler", p: "Haftalık periyotlarda mentörle canlı yayında, kod yazarak ve sorgulayarak ilerliyoruz." },
              { n: "05", h: "Ödev ve proje geliştirme", p: "Canlı ders sonrasında kurumsal standartlarda ödevler ve portföy projeleri geliştiriyorsunuz." },
              { n: "06", h: "Kariyer ve mülakat desteği", p: "Özgeçmiş revizyonu, mockup mülakatlar ve kurumsal referans desteği sağlıyoruz." }
            ].map((step, idx) => (
              <div key={idx} className="reveal group relative overflow-hidden rounded-2xl border border-[#0c2719] p-[30px] hover:border-[#103a26] hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,255,136,.35)] transition-all flex flex-col justify-between min-h-[210px]" style={{ background: 'linear-gradient(165deg,#07150e,#04100a)' }}>
                <span className="absolute top-0 left-0 w-full h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ background: 'linear-gradient(90deg,#00ff88,transparent)' }}></span>
                <div className="absolute top-5 right-6 font-mono text-2xl font-bold text-[rgba(0,255,136,0.06)]">{step.n}</div>
                <div>
                  <span className="w-9 h-9 border border-[#103a26] rounded-lg grid place-items-center text-[#00ff88] font-mono font-bold bg-[rgba(0,255,136,.02)] mb-5">{step.n}</span>
                  <h3 className="text-lg text-[#eafff5] font-disp font-bold mb-2">{step.h}</h3>
                  <p className="text-xs text-[#74998a] leading-[1.65]">{step.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEDEN BENİ TERCİH ETMELİSİNİZ? */}
      <section className="py-[108px] border-b border-[#0c2719]" style={{ background: 'linear-gradient(180deg,#04100a,#020806)' }}>
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center max-w-[640px] mx-auto mb-14 reveal">
            <span className="font-mono text-[13px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center justify-center gap-2.5">
              <span className="text-[#5c8a74] font-bold">//</span> Tercih Sebebi
            </span>
            <h2 className="text-[clamp(28px,4vw,42px)] text-[#eafff5] mt-4">Gerçek Üretim Sistemlerinden Gelen Deneyim</h2>
            <p className="text-[#74998a] mt-4 text-[15px]">Kurumsal mimaride edinilmiş gerçek saha tecrübesinin doğrudan aktarımı.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💳", h: "Finans ve ödeme sistemleri tecrübesi", p: "Yıllık milyarlarca liralık hacme sahip ödeme geçitleri, sanal POS entegrasyonu standartları." },
              { icon: "🚀", h: "Yüksek trafikli sistemler", p: "Binlerce anlık isteği karşılayabilen, asenkron, ölçeklenebilir ve performans odaklı mimariler." },
              { icon: "📁", h: "Gerçek projeler", p: "Kurumsal şirketlerde bizzat kullanılan sistemlerin benzerlerini sıfırdan omuz omuza kodlama." },
              { icon: "🧠", h: "Ezber değil mühendislik yaklaşımı", p: "Tasarım desenleri, SOLID ve Clean Architecture prensipleriyle neden-sonuç odaklı öğrenim." }
            ].map((item, idx) => (
              <div key={idx} className="reveal group relative overflow-hidden rounded-2xl border border-[#0c2719] p-[30px] hover:border-[#103a26] hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,255,136,.35)] transition-all flex flex-col min-h-[220px]" style={{ background: 'linear-gradient(165deg,#07150e,#04100a)' }}>
                <span className="absolute top-0 left-0 w-full h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ background: 'linear-gradient(90deg,#00ff88,transparent)' }}></span>
                <div className="w-[42px] h-[42px] border border-[#103a26] rounded-[10px] grid place-items-center text-[#00ff88] text-xl bg-[rgba(0,255,136,.04)] mb-5">{item.icon}</div>
                <h3 className="text-[17px] text-[#eafff5] font-disp font-bold mb-2.5">{item.h}</h3>
                <p className="text-xs text-[#74998a] leading-[1.65]">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ÖRNEK PROJELER */}
      <section className="py-[108px] border-b border-[#0c2719]" style={{ background: 'linear-gradient(180deg,#020806,#04100a)' }}>
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center max-w-[640px] mx-auto mb-14 reveal">
            <span className="font-mono text-[13px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center justify-center gap-2.5">
              <span className="text-[#5c8a74] font-bold">//</span> Uygulamalı Portföy
            </span>
            <h2 className="text-[clamp(28px,4vw,42px)] text-[#eafff5] mt-4">Birlikte Geliştireceğimiz Projeler</h2>
            <p className="text-[#74998a] mt-4 text-[15px]">İş mülakatlarında fark yaratmanızı sağlayacak, kurumsal mimari standartlarında projeler.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Kurumsal E-Ticaret Sistemi',
                tag: 'YÜKSEK TRAFİKLİ ALTYAPI',
                desc: 'Sepet, sipariş, stok ve ödeme akışlarını barındıran, yüksek trafikli kurumsal ölçekte e-ticaret altyapısı.',
                techs: ['.NET Core API', 'PostgreSQL', 'RabbitMQ', 'Redis'],
                details: ['Repository ve Unit of Work Desenleri', 'Redis ile Dağıtık Cache Yönetimi', 'Stok Ayrıştırma ve Sipariş Kuyrukları']
              },
              {
                title: 'Netflix Benzeri Video Stream API',
                tag: 'BÜYÜK VERİ & MEDYA AKIŞI',
                desc: 'Video içerik yönetimi, kullanıcı izleme geçmişi analizi ve yüksek boyutlu veri/medya akışı yönetimi.',
                techs: ['ASP.NET Core', 'MongoDB', 'AWS S3', 'Redis'],
                details: ['Video streaming chunking algoritmaları', 'NoSQL veri tabanı tasarımı', 'CDN entegrasyonu ve önbellekleme']
              },
              {
                title: 'Sanal POS & Finans Gateway',
                tag: 'FİNTECH MİMARİSİ',
                desc: 'Güvenli 3D Secure ödeme alma, hash doğrulama ve gerçek ödeme geçitleri (PayTR / Iyzico) ile fintech entegrasyonu.',
                techs: ['C#', 'SQL Server', 'SHA256 Encryption', 'Loglama'],
                details: ['PCI-DSS güvenlik standartları', 'Callback endpoint ve web-hook yönetimi', 'Database Transaction (ACID) yönetimi']
              },
              {
                title: 'Slack & Discord Benzeri Chat',
                tag: 'GERÇEK ZAMANLI SİSTEMLER',
                desc: 'Kullanıcıların canlı odalar oluşturup mesajlaşabildiği, okundu bilgisi ve anlık bildirimler gönderen WebSocket altyapısı.',
                techs: ['SignalR', '.NET Core', 'Redis Pub/Sub', 'PostgreSQL'],
                details: ['SignalR Hub ve WebSocket yönetimi', 'Redis Pub/Sub ile ölçeklenebilir mesaj iletimi', 'Çevrimdışı mesaj kuyruklama']
              },
              {
                title: 'Çoklu Kiracılı SaaS Altyapısı',
                tag: 'KURUMSAL YAZILIM MİMARİSİ',
                desc: 'Her şirkete özel şema/veritabanı ayıran, JWT token ve rol tabanlı güvenli SaaS mimarisi.',
                techs: ['Clean Architecture', 'ASP.NET Identity', 'EF Core', 'JWT'],
                details: ['Dynamic Tenant connection string yönetimi', 'JWT Claims & Role-based authorization', 'Refresh Token ile güvenli oturum yönetimi']
              },
              {
                title: 'Yönetilebilir Mikroservis Geçidi',
                tag: 'MİKROSERVİS ORKESTRASYONU',
                desc: 'Tüm arka plan servislerinin önünde duran, güvenlik, rate limiting ve loglama işlemlerini merkezi olarak üstlenen geçit.',
                techs: ['Ocelot Gateway', 'Docker Compose', 'Serilog', 'ELK Stack'],
                details: ['Ocelot üzerinden istek yönlendirme', 'IP tabanlı Rate Limiting altyapısı', 'Merkezi log toplama ve izleme (Serilog)']
              }
            ].map((proj, idx) => (
              <div key={idx} className="reveal group relative overflow-hidden rounded-2xl border border-[#0c2719] p-8 hover:border-[#103a26] hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(0,255,136,.3)] transition-all flex flex-col justify-between" style={{ background: 'linear-gradient(165deg,#07150e,#04100a)' }}>
                <span className="absolute top-0 left-0 w-full h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ background: 'linear-gradient(90deg,#00ff88,transparent)' }}></span>
                <div>
                  <span className="font-mono text-[10px] tracking-[.15em] text-[#00ff88] bg-[#00ff88]/10 border border-[#00ff88]/20 px-2.5 py-1 rounded mb-4 inline-block font-bold">{proj.tag}</span>
                  <h3 className="text-xl text-[#eafff5] font-disp font-bold mb-3">{proj.title}</h3>
                  <p className="text-xs text-[#74998a] leading-[1.6] mb-5">{proj.desc}</p>
                  <ul className="space-y-2 mb-6 text-xs text-[#cdeede] border-t border-[#0c2719] pt-4">
                    {proj.details.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-[#00ff88]">✔</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {proj.techs.map((t, tIdx) => (
                    <span key={tIdx} className="font-mono text-[10px] text-[#5cffba] bg-black/40 border border-[#103a26] px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ÖĞRENCİ KAZANIMLARI */}
      <section className="py-[108px] border-b border-[#0c2719]" style={{ background: 'linear-gradient(180deg,#04100a,#020806)' }}>
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center max-w-[640px] mx-auto mb-14 reveal">
            <span className="font-mono text-[13px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center justify-center gap-2.5">
              <span className="text-[#5c8a74] font-bold">//</span> Öğrenme Çıktıları
            </span>
            <h2 className="text-[clamp(28px,4vw,42px)] text-[#eafff5] mt-4">Program Sonunda Neler Yapabiliyor Olacaksınız?</h2>
            <p className="text-[#74998a] mt-4 text-[15px]">Mid/Senior backend mühendislik rollerinin gerektirdiği kurumsal yetkinlikler.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'REST API geliştirme', desc: 'HTTP standartlarına uygun, hata yönetimleri entegre edilmiş, dökümante edilmiş ve kurumsal standartta güvenli API uç noktaları tasarlama.' },
              { title: 'Veritabanı tasarımı', desc: 'SQL Server ve PostgreSQL üzerinde ilişkisel şemalar kurabilme, EF Core ve ham SQL sorgularında performans optimizasyonları yapabilme.' },
              { title: 'Docker kullanımı', desc: 'Uygulamaları, veritabanlarını ve mesaj kuyruklarını containerize edip Docker Compose ile tek komutla tüm sistemi ayağa kaldırabilme.' },
              { title: 'Mikroservis geliştirme', desc: 'Monolitik yapıları mikroservislere bölüp asenkron, event-driven mimarilerle CQRS ve Outbox desenlerini uygulayarak servisleri haberleştirme.' },
              { title: 'Mülakat çözebilme', desc: 'Kurumsal iş başvurularındaki teknik kod testlerini, canlı kodlama seanslarını ve System Design (Sistem Tasarımı) mülakatlarını başarıyla çözebilme.' },
              { title: 'Production seviyesinde proje geliştirme', desc: 'Ezber kodlardan uzak, SOLID prensiplerine tam uyumlu, Clean Architecture yapısına oturan, canlı sunucuda çalışmaya hazır kodlar üretebilme.' }
            ].map((k, idx) => (
              <div key={idx} className="reveal flex gap-4 p-6 rounded-2xl border border-[#0c2719]" style={{ background: 'linear-gradient(165deg,#07150e,#04100a)' }}>
                <span className="w-8 h-8 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#00ff88] flex items-center justify-center font-bold text-lg flex-none">✓</span>
                <div>
                  <h3 className="text-base text-[#eafff5] font-disp font-bold mb-1.5">{k.title}</h3>
                  <p className="text-xs text-[#74998a] leading-[1.6]">{k.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SIK SORULAN SORULAR */}
      <section className="py-[108px] border-b border-[#0c2719]" style={{ background: 'linear-gradient(180deg,#020806,#04100a)' }}>
        <div className="max-w-[800px] mx-auto px-8">
          <div className="text-center mb-14 reveal">
            <span className="font-mono text-[13px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center justify-center gap-2.5">
              <span className="text-[#5c8a74] font-bold">//</span> SSS
            </span>
            <h2 className="text-[clamp(28px,4vw,42px)] text-[#eafff5] mt-4">Sık Sorulan Sorular</h2>
            <p className="text-[#74998a] mt-4 text-[15px]">Mentorluk programı hakkında merak ettiğiniz tüm detaylar.</p>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: 'Yazılıma sıfırdan başlayabilir miyim?', 
                a: 'Evet. Mentorluk programı başlangıç seviyesinden ileri seviyeye kadar farklı profillere uygundur. İlk görüşmede mevcut seviyenizi değerlendirerek size özel bir öğrenme planı oluşturuyoruz.' 
              },
              { 
                q: 'Dersler birebir mi yapılıyor?', 
                a: 'Evet. Tüm oturumlar birebir gerçekleştirilir. Böylece öğrenme süreci tamamen hedeflerinize ve seviyenize göre şekillenir.' 
              },
              { 
                q: 'Hangi teknolojileri öğrenebilirim?', 
                a: 'Programın içeriği hedeflerinize göre belirlenir. Genel olarak:\n\n• C#\n• .NET & ASP.NET Core\n• SQL\n• Entity Framework\n• Microservices\n• Docker\n• Redis\n• RabbitMQ\n• System Design\n• Clean Architecture\n\nkonularında mentorluk verilmektedir.' 
              },
              { 
                q: 'Haftada kaç saat görüşüyoruz?', 
                a: 'Bu tamamen sizin programınıza bağlıdır. Genellikle haftada 1 veya 2 oturum şeklinde ilerlenir. Görüşmeler dışında da çalışma planı ve yönlendirmeler sağlanır.' 
              },
              { 
                q: 'Ders kayıtları paylaşılabiliyor mu?', 
                a: 'Talebe göre oturum kayıtları alınabilir ve daha sonra tekrar izyleyebilmeniz için paylaşılabilir.' 
              },
              { 
                q: 'Sadece ders mi yapıyoruz?', 
                a: 'Hayır.\n\nMentorluk süreci yalnızca canlı derslerden oluşmaz. Kod incelemeleri, proje çalışmaları, ödevler ve teknik yönlendirmeler de sürecin önemli bir parçasıdır.' 
              },
              { 
                q: 'Gerçek proje geliştirecek miyiz?', 
                a: 'Evet.\n\nAmaç yalnızca konu anlatmak değil, öğrendiklerinizi gerçek senaryolarda uygulayabilmenizi sağlamaktır. Bu nedenle süreç boyunca proje geliştirme odaklı ilerlenir.' 
              },
              { 
                q: 'Teknik mülakatlara hazırlık yapıyor musunuz?', 
                a: 'Evet.\n\nTeknik mülakatlarda sık karşılaşılan konular, sistem tasarımı soruları ve backend geliştirme senaryoları üzerinde çalışılabilir.' 
              },
              { 
                q: 'İş garantisi veriyor musunuz?', 
                a: 'Hayır.\n\nHiç kimse etik olarak iş garantisi veremez. Ancak amacım sizi sektörün beklentilerine uygun teknik seviyeye ulaştırmak ve kariyer yolculuğunuzda doğru şekilde yönlendirmektir.' 
              },
              { 
                q: 'Mentorluk programı bana uygun mu?', 
                a: 'Eğer aşağıdakilerden biriyseniz program sizin için uygun olabilir:\n\n• Yazılıma sıfırdan başlamak isteyenler\n• Backend alanında uzmanlaşmak isteyenler\n• Kariyer değişikliği hedefleyenler\n• Teknik mülakatlara hazırlananlar\n• Mevcut bilgisini ileri seviyeye taşımak isteyen geliştiriciler' 
              },
              { 
                q: 'İlk görüşme ücretli mi?', 
                a: 'Hayır.\n\nİlk görüşmede hedeflerinizi, mevcut seviyenizi ve nasıl bir yol haritası izleyebileceğimizi konuşuruz. Bu görüşme herhangi bir ücret talep edilmeden gerçekleştirilir.' 
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-[#0c2719] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#103a26]" style={{ background: 'linear-gradient(165deg,#07150e,#04100a)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-disp font-medium text-[#eafff5] hover:text-[#00ff88] transition-colors cursor-pointer text-sm md:text-base border-none bg-transparent focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className={`text-[#00ff88] text-xl transform transition-transform duration-300 ${openFaq === idx ? 'rotate-45' : ''}`}>＋</span>
                </button>
                <div
                  className="transition-all duration-300 overflow-hidden"
                  style={{
                    maxHeight: openFaq === idx ? '400px' : '0px',
                    opacity: openFaq === idx ? 1 : 0
                  }}
                >
                  <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-[#74998a] border-t border-[#0c2719]/40 leading-relaxed font-mono whitespace-pre-line">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SSS Altı Soru Kartı */}
          <div className="mt-12 p-8 rounded-2xl border border-[#0c2719] text-center relative overflow-hidden reveal" style={{ background: 'linear-gradient(165deg,#07150e,#04100a)' }}>
            <div className="absolute inset-0 bg-[#00ff88]/[0.01] pointer-events-none"></div>
            <h3 className="text-lg md:text-xl text-[#eafff5] font-disp font-bold mb-2">Sorunuzun cevabını bulamadınız mı?</h3>
            <p className="text-xs md:text-sm text-[#74998a] mb-6 max-w-[500px] mx-auto">Bana ulaşın, hedeflerinizi konuşalım ve size uygun bir öğrenme planı oluşturalım.</p>
            <button
              onClick={() => setShowQuiz(true)}
              className="font-mono text-xs md:text-sm font-bold text-[#021008] bg-[#00ff88] px-6 py-3.5 clip-btn hover:shadow-[0_0_24px_rgba(0,255,136,0.4)] transition-all cursor-pointer border-none"
            >
              Ücretsiz Ön Görüşme Planla
            </button>
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />

      {/* QUIZ MODAL */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[150] flex items-center justify-center p-4" onClick={() => setShowQuiz(false)}>
          <div className="border border-[#103a26] rounded-2xl max-w-[500px] w-full overflow-hidden shadow-[0_0_50px_rgba(0,255,136,0.15)] flex flex-col bg-[#020806]" onClick={e => e.stopPropagation()}>
            <div className="bg-[#04100a] border-b border-[#103a26] px-6 py-4 flex items-center justify-between">
              <span className="font-disp font-bold text-xs text-[#00ff88] tracking-widest uppercase">⚡ Mentorluk Programı Oluşturucu</span>
              <button className="bg-none border-none text-[#74998a] hover:text-white font-mono cursor-pointer text-sm" onClick={() => setShowQuiz(false)}>[X]</button>
            </div>
            <div className="w-full bg-[#0c2719] h-[3px]">
              <div className="bg-[#00ff88] h-full transition-all duration-300" style={{ width: `${(quizStep / 5) * 100}%` }}></div>
            </div>
            <div className="p-6 md:p-8 text-left">
              {/* Step 1 */}
              {quizStep === 1 && (
                <div>
                  <h3 className="font-disp font-bold text-base text-[#eafff5] mb-4">// Soru 1: Seviyeniz nedir?</h3>
                  {["Sıfırdan Başlıyorum", "Temelim Var", "Profesyonelleşmek İstiyorum"].map((opt) => (
                    <button key={opt} className="w-full text-left p-4 rounded-xl border border-[#103a26] bg-transparent text-[#cdeede] font-mono text-xs cursor-pointer hover:border-[#00ff88] hover:bg-[#00ff88]/5 transition-all mb-3" onClick={() => selectQuizOption(1, opt)}>{opt}</button>
                  ))}
                </div>
              )}
              {/* Step 2 */}
              {quizStep === 2 && (
                <div>
                  <h3 className="font-disp font-bold text-base text-[#eafff5] mb-4">// Soru 2: Hedefiniz nedir?</h3>
                  {["Yazılımcı Olarak İşe Girmek", "Kendi Projemi Yazmak", "Sınavlara Hazırlık"].map((opt) => (
                    <button key={opt} className="w-full text-left p-4 rounded-xl border border-[#103a26] bg-transparent text-[#cdeede] font-mono text-xs cursor-pointer hover:border-[#00ff88] hover:bg-[#00ff88]/5 transition-all mb-3" onClick={() => selectQuizOption(2, opt)}>{opt}</button>
                  ))}
                  <button className="bg-none border-none text-[#74998a] hover:text-[#00ff88] font-mono text-[11px] cursor-pointer mt-4" onClick={() => setQuizStep(1)}>← Geri</button>
                </div>
              )}
              {/* Step 3 */}
              {quizStep === 3 && (
                <div>
                  <h3 className="font-disp font-bold text-base text-[#eafff5] mb-4">// Soru 3: Haftada kaç saat ayırabilirsiniz?</h3>
                  {["2-4 Saat", "5-10 Saat", "10+ Saat"].map((opt) => (
                    <button key={opt} className="w-full text-left p-4 rounded-xl border border-[#103a26] bg-transparent text-[#cdeede] font-mono text-xs cursor-pointer hover:border-[#00ff88] hover:bg-[#00ff88]/5 transition-all mb-3" onClick={() => selectQuizOption(3, opt)}>{opt}</button>
                  ))}
                  <button className="bg-none border-none text-[#74998a] hover:text-[#00ff88] font-mono text-[11px] cursor-pointer mt-4" onClick={() => setQuizStep(2)}>← Geri</button>
                </div>
              )}
              {/* Step 4 */}
              {quizStep === 4 && (
                <div>
                  <h3 className="font-disp font-bold text-base text-[#eafff5] mb-4">// Ön Görüşme Bilgileri</h3>
                  <form onSubmit={handleQuizSubmit} className="space-y-4">
                    <div>
                      <label className="font-mono text-[10px] text-[#74998a] block mb-1">Ad Soyad *</label>
                      <input type="text" value={quizName} onChange={e => setQuizName(e.target.value)} required placeholder="Ad Soyad" className="w-full bg-[#04100a] border border-[#103a26] rounded-lg px-3 py-2 text-[#cdeede] font-mono text-xs focus:border-[#00ff88] focus:outline-none" />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] text-[#74998a] block mb-1">Ek Not / Mesaj (Opsiyonel)</label>
                      <textarea value={quizNotes} onChange={e => setQuizNotes(e.target.value)} placeholder="Eklemek istediğiniz notlar..." rows={2} className="w-full bg-[#04100a] border border-[#103a26] rounded-lg px-3 py-2 text-[#cdeede] font-mono text-xs focus:border-[#00ff88] focus:outline-none resize-none" />
                    </div>
                    <button type="submit" className="w-full font-mono font-bold text-xs text-[#021008] bg-[#00ff88] py-3 rounded-xl cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all uppercase tracking-wider">Eğitim Programını Oluştur & Randevu Al ➔</button>
                  </form>
                  <button className="bg-none border-none text-[#74998a] hover:text-[#00ff88] font-mono text-[11px] cursor-pointer mt-4" onClick={() => setQuizStep(3)}>← Geri</button>
                </div>
              )}
              {/* Step 5 */}
              {quizStep === 5 && (
                <div className="text-center py-4">
                  <div className="w-12 h-12 rounded-full bg-[#00ff88]/10 border border-[#00ff88] flex items-center justify-center mx-auto mb-4 text-[#00ff88] text-xl font-bold">✓</div>
                  <h3 className="font-disp font-bold text-base text-[#eafff5] mb-3">Sana Özel C# .NET Eğitim Programı Çıkarıldı!</h3>
                  <p className="text-xs text-[#74998a] mb-6 leading-relaxed">
                    Detayları konuşmak ve kariyer planınızı netleştirmek için 15 Dk ücretsiz ön görüşmeniz rezerve edildi. WhatsApp üzerinden görüşmeyi başlatabilirsiniz.
                  </p>
                  <button className="w-full font-mono font-bold text-xs text-[#021008] bg-[#00ff88] py-3.5 rounded-xl cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all flex items-center justify-center gap-2" onClick={triggerWhatsAppRedirect}>
                    💬 WhatsApp ile Görüşmeyi Başlat
                  </button>
                  <button className="bg-none border-none text-[#74998a] hover:text-[#00ff88] font-mono text-[11px] cursor-pointer mt-6" onClick={() => setShowQuiz(false)}>Pencereyi Kapat</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* ============ BLOG LIST ============ */
const BlogListPage = ({ navigate }) => {
  const [search, setSearch] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useReveal();

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setBlogs(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  const filtered = blogs.filter((b) => 
    b.title.toLowerCase().includes(search.toLowerCase()) || 
    b.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header navigate={navigate} />
      <section className="py-20 border-b border-[#0c2719] relative overflow-hidden">
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center,rgba(0,255,136,.10),transparent 62%)' }}></div>
        <div className="max-w-[1280px] mx-auto px-8 relative z-[2]">
          <span className="font-mono text-[13px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center gap-2.5"><span className="text-[#5c8a74] font-bold">//</span> Blog</span>
          <h1 className="text-[clamp(36px,5vw,56px)] text-[#eafff5] my-5">Yazılım & Backend Geliştirme Makaleleri</h1>
          <p className="text-[#74998a] max-w-[600px] mb-10">C#, .NET Core, Onion Architecture, Microservices ve kurumsal sistem tasarımları. Alanında uzmanlar tarafından kaleme alınmış en güncel içerikler.</p>
          <div className="relative max-w-[480px]">
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Makale veya kategori ara..." className="w-full bg-[#07150e] border border-[#103a26] rounded-lg pl-4 pr-10 py-3 text-[#cdeede] placeholder-[#3d564b] focus:border-[#00ff88] focus:outline-none transition-colors font-mono text-sm" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5c8a74]">⌕</span>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-8 grid gap-5">
          {loading ? (
            <div className="py-20 text-center text-[#74998a]">Makaleler yükleniyor...</div>
          ) : (
            filtered.map((b) =>
              <article key={b.id} onClick={() => navigate('blog-detail', b)} className="reveal group cursor-pointer border border-[#0c2719] rounded-xl p-8 hover:border-[#00ff88] hover:-translate-y-1 transition-all" style={{ background: 'linear-gradient(165deg,#07150e,#04100a)' }}>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs text-[#5cffba] border border-[#103a26] bg-[rgba(0,255,136,.04)] px-2.5 py-1 rounded-full">{b.category}</span>
                  <span className="text-xs text-[#5c8a74]">{b.readTime}</span>
                </div>
                <h2 className="text-2xl text-[#eafff5] mb-3 group-hover:text-[#00ff88] transition-colors">{b.title}</h2>
                <p className="text-[#74998a] mb-6 text-[15px]">{b.excerpt}</p>
                <div className="flex justify-between items-center text-xs text-[#5c8a74]">
                  <div className="flex items-center gap-3"><span>{b.author}</span><span>•</span><span>{b.date}</span></div>
                  <span className="group-hover:text-[#00ff88] transition-colors">Oku →</span>
                </div>
              </article>
            )
          )}
          {!loading && filtered.length === 0 && <p className="text-center text-[#74998a] py-10">Sonuç bulunamadı.</p>}
        </div>
      </section>
      <Footer navigate={navigate} />
    </>
  );
};

/* ============ BLOG DETAIL ============ */
const BlogDetailPage = ({ blog, navigate }) => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState([]);
  useReveal();

  useEffect(() => {
    if (blog && blog.slug) {
      setLoading(true);
      fetch(`/api/blogs/${blog.slug}`)
        .then(res => {
          if (!res.ok) throw new Error("Blog not found");
          return res.json();
        })
        .then(data => {
          setDetail(data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching blog details:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [blog]);

  useEffect(() => {
    if (blog) {
      fetch('/api/blogs')
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            const filtered = data
              .filter(b => b.slug !== blog.slug)
              .slice(0, 2);
            setRelated(filtered);
          }
        })
        .catch(err => console.error("Error fetching related blogs:", err));
    }
  }, [blog]);

  if (!blog) return <><Header navigate={navigate} /><div className="py-32 text-center text-[#74998a]">Makale bulunamadı.</div><Footer navigate={navigate} /></>;

  if (loading) {
    return (
      <>
        <Header navigate={navigate} />
        <div className="py-32 text-center text-[#74998a]">
          <div className="w-10 h-10 border-4 border-[#00ff88] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          Makale yükleniyor...
        </div>
        <Footer navigate={navigate} />
      </>
    );
  }

  const displayBlog = detail || blog;

  return (
    <>
      <Header navigate={navigate} />
      <article className="py-20">
        <div className="max-w-[760px] mx-auto px-8">
          <button onClick={() => navigate('blogs')} className="text-[#00ff88] hover:text-[#5cffba] transition-colors text-sm mb-8">← Tüm Makalelere Dön</button>
          <header className="mb-12">
            <span className="text-xs text-[#5cffba] border border-[#103a26] bg-[rgba(0,255,136,.04)] px-2.5 py-1 rounded-full">{displayBlog.category}</span>
            <h1 className="text-[clamp(32px,5vw,52px)] text-[#eafff5] my-6">{displayBlog.title}</h1>
            <div className="flex items-center gap-4 text-sm text-[#74998a]"><span>{displayBlog.author}</span><span>•</span><span>{displayBlog.date}</span><span>•</span><span>{displayBlog.readTime}</span></div>
          </header>
          <div className="space-y-6">
            <p className="text-[#cdeede] text-lg leading-relaxed">{displayBlog.excerpt}</p>
            <div className="border border-[#103a26] rounded-lg p-6 bg-[#07150e] font-mono text-sm text-[#5cffba] leading-relaxed">
              // Bu makale ytkacademy'taki laboratuvarlarla uyumludur.<br />// Öğrendiklerini hemen uygulamak için platformu ziyaret et.
            </div>
            {loading ? (
              <div className="py-10 text-center text-[#74998a]">İçerik yükleniyor...</div>
            ) : displayBlog.content ? (
              <div className="blog-content text-[#b8d5c8] leading-relaxed text-[16px]" dangerouslySetInnerHTML={{ __html: displayBlog.content }}></div>
            ) : (
              <p className="text-[#74998a] leading-relaxed">Bu makalenin detay içeriği bulunmamaktadır.</p>
            )}
          </div>
          <div className="border-t border-[#0c2719] mt-14 pt-12">
            <h2 className="text-2xl text-[#eafff5] mb-8">İlgili Makaleler</h2>
            <div className="grid gap-4">
              {related.map((p) =>
                <div key={p.id} onClick={() => navigate('blog-detail', p)} className="cursor-pointer group bg-[#07150e] border border-[#0c2719] rounded-lg p-6 hover:border-[#00ff88] hover:bg-[#0a1d13] transition-all">
                  <span className="text-xs text-[#5cffba] border border-[#103a26] bg-[rgba(0,255,136,.04)] px-2.5 py-1 rounded-full">{p.category}</span>
                  <h3 className="text-lg text-[#eafff5] my-3 group-hover:text-[#00ff88] transition-colors">{p.title}</h3>
                  <span className="text-xs text-[#5c8a74] group-hover:text-[#00ff88] transition-colors">Oku →</span>
                </div>
              )}
              {related.length === 0 && <p className="text-[#74998a] text-sm">İlgili başka makale bulunamadı.</p>}
            </div>
          </div>
          <div className="mt-12 rounded-xl border border-[#103a26] p-10 text-center" style={{ background: 'linear-gradient(90deg,#07150e,#04100a)' }}>
            <h2 className="text-2xl text-[#eafff5] mb-4">Bu Konuyu Pratik Yapmak İster misin?</h2>
            <p className="text-[#74998a] mb-6 max-w-[520px] mx-auto">Siberkampus'ta bu makaleyle ilgili laboratuvarlar ve CTF görevleri seni bekliyor. Hemen başla ve gerçek bir sistem üzerinde çalışarak öğren.</p>
            <button onClick={() => navigate('rooms')} className="font-mono text-sm font-bold text-[#021008] bg-[#00ff88] px-7 py-3 clip-btn hover:shadow-[0_0_28px_-4px_var(--glow)] transition-all">Laboratuvarları Gör →</button>
          </div>
        </div>
      </article>
      <Footer navigate={navigate} />
    </>
  );
};

/* ============ ROOMS ============ */
const RoomsPage = ({ navigate }) => {
  const [selected, setSelected] = useState(null);
  useReveal();
  
  // Gerçek sistemdeki odaları karışık sırada göster
  const allRooms = (window.SK_ALL_ROOMS || []).map(r => ({ ...r }));
  const shuffled = [...allRooms].sort(() => Math.random() - 0.5);

  const dc = { 'Başlangıç': 'text-[#5cffba] bg-[rgba(92,255,186,.1)]', 'Kolay': 'text-[#5cffba] bg-[rgba(92,255,186,.1)]', 'Orta': 'text-[#ffd166] bg-[rgba(255,209,102,.1)]', 'İleri': 'text-[#ff8c42] bg-[rgba(255,140,66,.1)]', 'Zor': 'text-[#ff8c42] bg-[rgba(255,140,66,.1)]', 'Uzman': 'text-[#ff2e88] bg-[rgba(255,46,136,.1)]' };
  return (
    <>
      <Header navigate={navigate} />
      <section className="py-20 border-b border-[#0c2719] relative overflow-hidden">
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center,rgba(0,255,136,.10),transparent 62%)' }}></div>
        <div className="max-w-[1280px] mx-auto px-8 relative z-[2]">
          <span className="font-mono text-[13px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center gap-2.5"><span className="text-[#5c8a74] font-bold">//</span> Laboratuvarlar</span>
          <h1 className="text-[clamp(36px,5vw,56px)] text-[#eafff5] my-5">C# & .NET Core Kodlama Görevleri</h1>
          <p className="text-[#74998a] max-w-[600px]">{allRooms.length} adet uygulamalı laboratuvarla sıfırdan uzman seviyesine kadar çıkmanı sağlayacak CTF görevleri. Kayıt ol ve hemen başla!</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {shuffled.map((r) =>
          <div key={r.id} onClick={() => setSelected(r)} className="reveal group cursor-pointer border border-[#0c2719] rounded-xl p-8 hover:border-[#00ff88] hover:shadow-[0_24px_50px_-28px_rgba(0,255,136,.35)] transition-all" style={{ background: 'linear-gradient(165deg,#07150e,#04100a)' }}>
              <div className="flex items-start justify-between mb-4 gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-2"><span className="font-mono text-xs text-[#5c8a74]">{r.id.toUpperCase()}</span><span className="text-xs text-[#5c8a74]">·</span><span className="text-xs text-[#5c8a74]">{r.cat}</span></div>
                  <h2 className="text-xl text-[#eafff5] group-hover:text-[#00ff88] transition-colors mb-2">{r.name}</h2>
                  <p className="text-sm text-[#74998a]">{r.desc}</p>
                </div>
                <span className={"text-xs font-bold px-3 py-1.5 rounded whitespace-nowrap " + (dc[r.difficulty] || dc['Orta'])}>{r.difficulty}</span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#0c2719] text-xs text-[#5c8a74]">
                <span>◆ {r.points} puan</span>
                <span className="group-hover:text-[#00ff88] transition-colors">Detay →</span>
              </div>
            </div>
          )}
        </div>
      </section>
      {selected &&
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[70] p-4" onClick={() => setSelected(null)}>
          <div className="border border-[#103a26] rounded-xl max-w-[520px] w-full p-10 shadow-[0_0_60px_-20px_var(--glow)]" style={{ background: '#020806' }} onClick={(e) => e.stopPropagation()}>
            <span className="font-mono text-xs text-[#5c8a74]">{selected.id.toUpperCase()} · {selected.cat}</span>
            <h2 className="text-3xl text-[#eafff5] mt-2 mb-4">{selected.name}</h2>
            <p className="text-[#74998a] mb-6">{selected.desc}</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-between p-4 bg-[#07150e] border border-[#0c2719] rounded-lg"><span className="text-sm text-[#74998a]">Zorluk Seviyesi</span><span className={"font-bold text-sm px-3 py-1 rounded " + (dc[selected.difficulty] || dc['Orta'])}>{selected.difficulty}</span></div>
              <div className="flex items-center justify-between p-4 bg-[#07150e] border border-[#0c2719] rounded-lg"><span className="text-sm text-[#74998a]">Kazanılacak Puan</span><span className="font-bold text-[#00ff88]">◆ {selected.points}</span></div>
              <div className="flex items-center justify-between p-4 bg-[#07150e] border border-[#0c2719] rounded-lg"><span className="text-sm text-[#74998a]">Kategori</span><span className="font-bold text-[#eafff5]">{selected.cat}</span></div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => navigate('register')} className="flex-1 font-mono text-sm font-bold text-[#021008] bg-[#00ff88] py-3 clip-btn hover:shadow-[0_0_28px_-4px_var(--glow)] transition-all">Kayıt Ol & Başla</button>
              <button onClick={() => setSelected(null)} className="flex-1 border border-[#103a26] text-[#cdeede] py-3 rounded-lg hover:border-[#00ff88] hover:text-[#00ff88] transition-colors text-sm">Kapat</button>
            </div>
          </div>
        </div>
      }
      <Footer navigate={navigate} />
    </>);

};

/* ============ AUTH SHARED ============ */
const AuthShell = ({ children }) => (
  <section className="min-h-[calc(100vh-72px)] flex items-center justify-center py-20 px-4 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center,rgba(0,255,136,.08),transparent 62%)' }}></div>
    <div className="w-full max-w-[420px] relative z-[2]">{children}</div>
  </section>
);

const Field = ({ label, hint, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-[#cdeede] mb-2">{label}</label>
    <input {...props} className="w-full bg-[#07150e] border border-[#103a26] rounded-lg px-4 py-3 text-[#cdeede] placeholder-[#3d564b] focus:border-[#00ff88] focus:outline-none transition-colors font-mono text-sm" />
    {hint && <p className="text-xs text-[#5c8a74] mt-2">{hint}</p>}
  </div>
);

/* ============ LOGIN ============ */
const LoginPage = ({ navigate }) => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (userEmail, userPassword) => {
    setLoading(true);
    setErr('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, pw: userPassword })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Giriş yapılamadı.');
      }
      
      // Eski kullanıcının tüm verilerini temizle
      localStorage.removeItem('sk_solved_rooms');
      localStorage.removeItem('sk_room_progress');
      localStorage.removeItem('sk_unlocked_hints');
      window.__SK_USER_FETCHED = false;
      
      localStorage.setItem('sk_token', data.token);
      localStorage.setItem('sk_user_name', data.user.name);
      localStorage.setItem('sk_user_points', data.user.points);
      localStorage.setItem('sk_user_solved', data.user.solved_count);
      localStorage.setItem('sk_user_level', data.user.level);
      localStorage.setItem('sk_user_rank', data.user.rank_val);
      localStorage.setItem('sk_user_badges', data.user.badges !== undefined ? data.user.badges : 0);
      localStorage.setItem('sk_user_streak', data.user.streak !== undefined ? data.user.streak : 1);
      localStorage.setItem('sk_name_changed', data.user.name_changed ? '1' : '0');
      localStorage.setItem('sk_user_is_admin', data.user.is_admin ? 'true' : 'false');
      localStorage.setItem('sk_user_is_banned', data.user.is_banned ? 'true' : 'false');
      
      window.dispatchEvent(new Event('sk_user_update'));
      navigate('dashboard');
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (!email || !pw) {
      setErr('Tüm alanları doldurunuz.');
      return;
    }
    handleLogin(email, pw);
  };

  return (
    <><Header navigate={navigate} />
      <AuthShell>
        <div className="text-center mb-10">
          <span className="w-[52px] h-[52px] border-[1.5px] border-[#00ff88] rounded-xl grid place-items-center text-[#00ff88] font-mono text-lg font-bold mx-auto mb-5 shadow-[0_0_24px_-4px_var(--glow)]">&gt;_</span>
          <h1 className="text-4xl text-[#eafff5] mb-2">Giriş Yap</h1>
          <p className="text-[#74998a] text-sm">YTK Academy hesabına erişim sağla</p>
        </div>
        {/* ── Demo Giriş ── */}
        <button
          type="button"
          disabled={loading}
          onClick={() => handleLogin('demo@siberkampus.com', 'demo123456')}
          className="w-full flex items-center justify-center gap-2.5 py-3 rounded-lg border border-[#00ff88]/40 bg-[#00ff88]/8 text-[#00ff88] font-mono font-bold text-sm hover:bg-[#00ff88]/15 hover:border-[#00ff88] hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all disabled:opacity-50 mb-6"
        >
          <span className="text-base">⚡</span>
          {loading ? 'Lütfen bekleyin...' : 'Demo Hesabıyla Görüntüle →'}
        </button>

        {/* ── Ayırıcı ── */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-[#0c2719]"></div>
          <span className="text-xs font-mono text-[#5c8a74] uppercase tracking-widest">veya kendi hesabınla giriş yap</span>
          <div className="flex-1 h-px bg-[#0c2719]"></div>
        </div>

        <form onSubmit={submit} className="space-y-5">
          {err && <div className="bg-[rgba(255,46,136,.08)] border border-[#ff2e88]/50 rounded-lg p-3.5"><p className="text-sm text-[#ff2e88]">{err}</p></div>}
          <Field label="E-posta Adresi" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="seni@example.com" disabled={loading} />
          <Field label="Şifre" type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="••••••••" disabled={loading} />
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-[#74998a]"><input type="checkbox" className="w-4 h-4 accent-[#00ff88]" /> Beni hatırla</label>
            <a href="#" className="text-[#00ff88] hover:text-[#5cffba] transition-colors">Şifremi Unuttum?</a>
          </div>
          <button type="submit" disabled={loading} className="w-full font-mono font-bold text-[#021008] bg-[#00ff88] py-3 rounded-lg hover:shadow-[0_0_28px_-4px_var(--glow)] transition-all disabled:opacity-50">
            {loading ? 'Lütfen bekleyin...' : 'Giriş Yap'}
          </button>
        </form>
        <p className="text-center text-[#74998a] text-sm mt-7">Hesabın yok mu? <button onClick={() => navigate('register')} className="text-[#00ff88] hover:text-[#5cffba] transition-colors font-medium">Kayıt Ol</button></p>
      </AuthShell>
      <Footer navigate={navigate} />
    </>
  );
};

/* ============ REGISTER ============ */
const RegisterPage = ({ navigate, data }) => {
  const [f, setF] = useState({ name: '', email: '', pw: '', pw2: '', terms: false });
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const ch = (e) => {const { name, value, type, checked } = e.target;setF((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));};
  
  const submit = async (e) => {
    e.preventDefault();
    if (!f.name || !f.email || !f.pw || !f.pw2) return setErr('Tüm alanları doldurunuz.');
    if (f.pw !== f.pw2) return setErr('Şifreler eşleşmiyor.');
    if (f.pw.length < 8) return setErr('Şifre en az 8 karakter olmalıdır.');
    if (!f.terms) return setErr('Şartları ve koşulları kabul etmelisiniz.');
    
    setLoading(true);
    setErr('');
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: f.name, email: f.email, pw: f.pw })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Kayıt olunamadı.');
      }
      
      // Yeni hesap — eski verileri temizle
      localStorage.removeItem('sk_solved_rooms');
      localStorage.removeItem('sk_room_progress');
      localStorage.removeItem('sk_unlocked_hints');
      window.__SK_USER_FETCHED = false;
      
      localStorage.setItem('sk_token', data.token);
      localStorage.setItem('sk_user_name', data.user.name);
      localStorage.setItem('sk_user_points', data.user.points);
      localStorage.setItem('sk_user_solved', data.user.solved_count);
      localStorage.setItem('sk_user_level', data.user.level);
      localStorage.setItem('sk_user_rank', data.user.rank_val);
      localStorage.setItem('sk_user_badges', data.user.badges !== undefined ? data.user.badges : 0);
      localStorage.setItem('sk_user_streak', data.user.streak !== undefined ? data.user.streak : 1);
      localStorage.setItem('sk_name_changed', '0');
      localStorage.setItem('sk_user_is_admin', data.user.is_admin ? 'true' : 'false');
      localStorage.setItem('sk_user_is_banned', data.user.is_banned ? 'true' : 'false');
      
      window.dispatchEvent(new Event('sk_user_update'));
      navigate('dashboard');
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <><Header navigate={navigate} />
      <AuthShell>
        <div className="text-center mb-10">
          <span className="w-[52px] h-[52px] border-[1.5px] border-[#00ff88] rounded-xl grid place-items-center text-[#00ff88] font-mono text-lg font-bold mx-auto mb-5 shadow-[0_0_24px_-4px_var(--glow)]">&gt;_</span>
          <h1 className="text-4xl text-[#eafff5] mb-2">Kayıt Ol</h1>
          <p className="text-[#74998a] text-sm">YTK Academy'ye katıl ve siber güvenlik uzmanı ol</p>
        </div>
        {(data && data.fromFreeBasic || window.__SK_REGISTER_INFO) && (
          <div className="bg-[rgba(0,255,136,.06)] border border-[#00ff88]/30 rounded-xl p-4 mb-6 text-center text-sm text-[#00ff88] font-mono leading-relaxed shadow-[0_0_15px_rgba(0,255,136,0.05)] animate-pulse">
            🚀 <strong>{window.__SK_REGISTER_INFO || 'Kayıt olarak platformdaki ücretsiz eğitimlere erişebilirsiniz!'}</strong>
          </div>
        )}
        <form onSubmit={submit} className="space-y-4">
          {err && <div className="bg-[rgba(255,46,136,.08)] border border-[#ff2e88]/50 rounded-lg p-3.5"><p className="text-sm text-[#ff2e88]">{err}</p></div>}
          <Field label="Ad Soyad" type="text" name="name" value={f.name} onChange={ch} placeholder="Adını Gir" disabled={loading} />
          <Field label="E-posta Adresi" type="email" name="email" value={f.email} onChange={ch} placeholder="seni@example.com" disabled={loading} />
          <Field label="Şifre" type="password" name="pw" value={f.pw} onChange={ch} placeholder="••••••••" hint="En az 8 karakter" disabled={loading} />
          <Field label="Şifreyi Onayla" type="password" name="pw2" value={f.pw2} onChange={ch} placeholder="••••••••" disabled={loading} />
          <label className="flex items-start gap-3"><input type="checkbox" name="terms" checked={f.terms} onChange={ch} className="w-4 h-4 accent-[#00ff88] mt-1" disabled={loading} /><span className="text-xs text-[#74998a]"><button type="button" onClick={() => navigate('terms')} className="text-[#00ff88] hover:text-[#5cffba]">Kullanım Şartları</button> ve <button type="button" onClick={() => navigate('privacy')} className="text-[#00ff88] hover:text-[#5cffba]">Gizlilik Politikası</button>'nı kabul ediyorum.</span></label>
          <button type="submit" disabled={loading} className="w-full font-mono font-bold text-[#021008] bg-[#00ff88] py-3 rounded-lg hover:shadow-[0_0_28px_-4px_var(--glow)] transition-all disabled:opacity-50">
            {loading ? 'Kayıt Yapılıyor...' : 'Kayıt Ol'}
          </button>
        </form>
        <p className="text-center text-[#74998a] text-sm mt-7">Zaten hesabın var mı? <button onClick={() => navigate('login')} className="text-[#00ff88] hover:text-[#5cffba] transition-colors font-medium">Giriş Yap</button></p>
      </AuthShell>
      <Footer navigate={navigate} />
    </>
  );
};

/* ============ SHARED EXPORTS (for app-auth.jsx, separate babel scope) ============ */
Object.assign(window, { SKHeader: Header, SKFooter: Footer, SKAuthShell: AuthShell, SKField: Field, SKuseReveal: useReveal });

/* ============ PAGE REGISTRY ============ */
// Marketing pages register here; authenticated pages (app-auth.jsx) add themselves
// to the same global registry so the router can resolve them after load.
const PAGES = window.__SK_PAGES = window.__SK_PAGES || {};
Object.assign(PAGES, {
  home: HomePage,
  blogs: BlogListPage,
  'blog-detail': BlogDetailPage,
  rooms: RoomsPage,
  login: LoginPage,
  register: RegisterPage,
  product: window.SKProductDetailPage || (() => null)
});

/* ============ WHATSAPP DESTEK BUTONU ============ */
const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/905389351189?text=Merhaba%20bire%20bir%20yaz%C4%B1l%C4%B1m%20e%C4%9Fitimi%20alarak%20yaz%C4%B1l%C4%B1m%20kariyerimi%20in%C5%9Fa%20etmek%20istiyorum";

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Canlı Destek"
      className="fixed bottom-5 right-5 z-[9999] flex items-center justify-center w-14 h-14 rounded-2xl bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.4)] hover:scale-105 transition-all"
    >
      <span className="absolute inset-0 rounded-2xl bg-[#25D366] animate-ping opacity-20 z-0"></span>
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current z-10">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.573 1.453 5.61 1.454 5.51.003 9.993-4.42 9.997-9.923.002-2.667-1.03-5.174-2.907-7.056C17.472 1.748 14.965.717 12.285.717 6.775.717 2.29 5.14 2.286 10.643c-.001 2.008.525 3.97 1.522 5.722l-.992 3.624 3.738-.979h-.007zm11.418-6.161c-.3-.149-1.772-.874-2.047-.974-.275-.1-.475-.149-.675.149-.2.3-.775.974-.95 1.174-.175.2-.35.225-.65.075-1.02-.519-1.796-.948-2.512-2.18-.18-.31-.07-.48.05-.62.11-.13.25-.3.375-.45.125-.15.167-.25.25-.42.083-.17.042-.32-.02-.47-.063-.15-.475-1.144-.65-1.562-.17-.41-.358-.354-.49-.36-.128-.005-.275-.006-.422-.006-.147 0-.387.055-.588.275-.201.22-1.772 1.73-1.772 4.22 0 2.49 1.812 4.896 2.062 5.23.25.33 3.567 5.447 8.642 7.64.185.08.337.16.445.2.515.163.984.14 1.354.084.412-.062 1.772-.724 2.022-1.424.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
      </svg>
    </a>
  );
};

/* ============ APP ROOT ============ */
const pageTitles = {
  home: "YTK Academy | Siber Güvenlik Eğitimi",
  blogs: "Blog | YTK Academy — Güncel Yazılım & Backend Geliştirme Makaleleri",
  'blog-detail': "Blog Detay | YTK Academy",
  rooms: "C# & .NET Core Kodlama Görevleri | YTK Academy",
  login: "Giriş Yap | YTK Academy",
  register: "Kayıt Ol | YTK Academy",
  dashboard: "Kontrol Paneli | YTK Academy",
  chat: "Yazılım Soru Cevap & Sohbet | YTK Academy",
  leaderboard: "Liderlik Sıralaması | YTK Academy",
  admin: "Yönetim Paneli | YTK Academy",
  category: "Kategori | YTK Academy",
  roomArticle: "Ders Brifingi | YTK Academy",
  profile: "Profilim | YTK Academy",
  terms: "Kullanım Şartları | YTK Academy",
  privacy: "Gizlilik Politikası | YTK Academy",
  tools: "Geliştirici Araçları & Online Hesaplayıcılar | YTK Academy",
  pricing: "Eğitim Paketleri & Fiyatlandırma | YTK Academy",
  product: "Eğitim Detayı & Satın Al | YTK Academy",
  'refund-policy': "İade ve İptal Koşulları | YTK Academy",
};

const updateSEOMeta = (p, d) => {
  let title = "YTK Academy | Siber Güvenlik Eğitimi";
  let desc = "YTK Academy ile siber güvenliği uygulamalı öğren. Uygulamalı eğitimler, Onion Architecture, mikroservisler ve adım adım rehberlerle backend yazılımcı kariyerine başla. Hemen başla!";
  let keys = "ytk academy, backend eğitimi, c# net core eğitimi, yazılım eğitimi, yusuf islam yetkin, c# oop, clean architecture, mikroservis eğitimi, siber güvenlik kursu, siber güvenlik öğren, siber güvenlik nedir, siber güvenlik başlangıç, bilgi güvenliği, online güvenlik eğitimi";
  const slug = p === 'tools' && d && d.slug;

  if (p === 'home') {
    title = "YTK Academy | Siber Güvenlik Eğitimi";
    desc = "YTK Academy ile siber güvenliği uygulamalı öğren. Uygulamalı eğitimler, Onion Architecture, mikroservisler ve adım adım rehberlerle backend yazılımcı kariyerine başla. Hemen başla!";
  } else if (p === 'blogs') {
    title = "Blog | YTK Academy — Güncel Yazılım & Backend Geliştirme Makaleleri";
    desc = "Güncel siber güvenlik açıkları, web güvenliği, network güvenliği ve siber güvenlik rehberlerine dair teknik blog yazıları.";
  } else if (p === 'blog-detail' && d && d.title) {
    title = d.seo_title ? d.seo_title : `${d.title} | YTK Academy`;
    desc = d.meta_description ? d.meta_description : `${d.excerpt || d.title + ' hakkında detaylı siber güvenlik makalesi.'}`;
    if (d.focus_keywords) {
      keys = d.focus_keywords;
    }
  } else if (p === 'category' && d) {
    const catName = typeof d === 'string' ? d : d.name || '';
    title = `${catName} | YTK Academy`;
    desc = `${catName} kategorisindeki uygulamalı siber güvenlik eğitim laboratuvarları. Sıfırdan siber güvenlik öğren.`;
  } else if (p === 'tools') {
    if (slug === 'reverse-shell') {
      title = "Online C# Model & DTO Oluşturucu | YTK Academy";
      desc = "Sızma testlerinde hedef makineye bağlantı sağlamak için Bash, Python, PHP, PowerShell ve Netcat reverse shell komutlarını online oluşturun.";
      keys = "reverse shell oluşturucu, reverse shell jeneratörü, bash reverse shell, python reverse shell, powershell reverse shell, netcat dinleyici";
    } else if (slug === 'encoder-decoder') {
      title = "Cyber JWT & Base64 Çözücü — Base64, Hex, URL, Binary ve HTML | YTK Academy";
      desc = "Metinlerinizi Base64, Hexadecimal, URL, Binary ve HTML formatlarında online olarak şifreleyin ve çözün. Güvenli, hızlı ve tarayıcı tabanlı.";
      keys = "base64 çevirici, url encode decode, hex dönüştürücü, binary çevirici, html entity encode, cyber encoder decoder";
    } else if (slug === 'password-strength') {
      title = "Parola Güvenlik Testi & Entropi Hesaplama | YTK Academy";
      desc = "Şifrenizin brute force (kaba kuvvet) denemelerine karşı kırılma süresini online hesaplayın ve kriptografik olarak güvenli, güçlü parolalar üretin.";
      keys = "şifre gücü testi, parola entropi hesaplama, şifre kırılma süresi, güvenli şifre oluşturucu, brute force testi";
    } else if (slug === 'subnet-calc') {
      title = "CIDR & CIDR & Subnet Hesaplayıcı (IP Alt Ağ Maskesi) | YTK Academy";
      desc = "IP adresinizi ve CIDR değerini girerek ağ adresini, yayım adresini, IP aralığını ve kullanılabilir cihaz sayısını online hesaplayın.";
      keys = "subnet hesaplayıcı, cidr hesaplayıcı, ip alt ağ hesaplama, alt ağ maskesi, network ip hesaplama";
    } else if (slug === 'hash-tool') {
      title = "Online Hash Oluşturucu ve Tanımlayıcı (MD5, SHA-256) | YTK Academy";
      desc = "Metinlerinizin MD5, SHA-1, SHA-256 ve SHA-512 özet çıktılarını online oluşturun veya bilinmeyen hash formatlarını anında tespit edin.";
      keys = "md5 oluşturucu, sha256 hesaplama, hash tanımlayıcı, hash tespit etme, hash jeneratörü, online hash tool";
    } else if (slug === 'xss-generator') {
      title = "SQL Şema Oluşturucu ve Filtre Atlatma Kiti | YTK Academy";
      desc = "HTML, img, svg, iframe ve öznitelik bağlamlarında çalışan XSS payload'larını online oluşturun ve WAF filtre atlatma yöntemlerini test edin.";
      keys = "xss payload oluşturucu, xss jeneratörü, waf bypass payload, html entity xss, xss bypass kiti";
    } else if (slug === 'sqli-generator') {
      title = "SQL Injection (SQLi) Payload ve Bypass Jeneratörü | YTK Academy";
      desc = "MySQL, PostgreSQL, MSSQL ve Oracle veritabanlarına yönelik Union, Error, Time ve Auth bypass SQL Injection test payload'larını online oluşturun.";
      keys = "sqli payload oluşturucu, sql injection jeneratörü, union based sqli, error based sqli, sql bypass payload";
    } else if (slug === 'cron-explainer') {
      title = "Cron Job Zamanlayıcı ve Türkçe Açıklayıcı | YTK Academy";
      desc = "Linux cron job zaman ifadelerini Türkçe doğal dilde analiz edin veya görsel seçicilerle sıfırdan cron zamanlamaları tasarlayın.";
      keys = "cron zamanlayıcı, cron job açıklaması, cron ifadesi oluşturucu, crontab editör, cron türkçe açıklayıcı";
    } else if (slug === 'base64-file') {
      title = "Base64 Dosya & Görsel Dönüştürücü (JWT & Base64 Çözücü) | YTK Academy";
      desc = "Görsellerinizi ve dosyalarınızı sunucuya göndermeden yerel tarayıcınızda Base64 koduna dönüştürün veya Base64 kodlarını dosyaya çevirip indirin.";
      keys = "dosyayı base64e çevirme, base64 dosya dönüştürücü, görsel base64 encoder, base64 to file, base64 decode";
    } else if (slug === 'dns-lookup') {
      title = "Online DNS Sorgulama ve E-posta Güvenlik Analizi | YTK Academy";
      desc = "Alan adınızın A, MX, TXT kayıtlarını sorgulayın; mail sahteciliğini önleyen SPF ve DMARC güvenlik yapılandırmalarını online analiz edin.";
      keys = "dns sorgulama, spf sorgula, dmarc testi, mail güvenliği analizi, mx kaydı kontrolü, online dns lookup";
    } else {
      title = "Geliştirici Araçları & Online Hesaplayıcılar | YTK Academy";
      desc = "Tamamen tarayıcınızda çalışan, 100% istemci taraflı çalışan, SEO uyumlu siber güvenlik araç kiti. Reverse Shell, Subnet, Encoder, Hash, SQLi ve DNS araçları.";
      keys = "siber güvenlik araçları, online siber araçlar, siber güvenlik araçları, network hesaplayıcılar, web güvenliği araçları";
    }
  } else if (p === 'pricing') {
    title = "Eğitim Paketleri & Fiyatlandırma | YTK Academy";
    desc = "YTK Academy uygulamalı eğitim paketleri ve fiyatlandırma planları. Ücretsiz temel eğitimden 1'e 1 canlı mentörlük destekli eğitimlerimize kadar inceleyin.";
    keys = "siber kampüs eğitimleri, siber güvenlik eğitim fiyatları, siber güvenlik kursu ücreti, siber güvenlik mentörlük";
  } else if (p === 'product' && d && d.id) {
    if (d.id === 'free-basic') {
      title = "Ücretsiz Temel Siber Güvenlik Eğitimi | YTK Academy";
      desc = "YTK Academy ile siber güvenliğe ücretsiz ve kurulumsuz başlayın. Temel Linux ve Ağ laboratuvarları.";
    } else if (d.id === 'web-pentest') {
      title = "İleri Düzey Web Siber Güvenlik Uzmanı Eğitimi | YTK Academy";
      desc = "Web sızma testi ve zafiyet analizi konularında uzmanlaşın. VIP laboratuvarları ve doğrulanabilir sertifika.";
    } else if (d.id === 'one-on-one') {
      title = "1'e 1 Canlı C# & .NET Core Backend Eğitimi | YTK Academy";
      desc = "Yusuf İslam Yetkin eşliğinde birebir canlı dersler ve kurumsal backend yazılım eğitimi.";
    }
  } else if (p === 'rooms') {
    title = "C# & .NET Core Kodlama Görevleri | YTK Academy";
    desc = "YTK Academy uygulamalı siber güvenlik laboratuvarları ile siber güvenliği sıfırdan deneyimleyin. Web zafiyetlerinden ağ analizine kadar düzinelerce laboratuvar.";
  } else if (p === 'login') {
    title = "Giriş Yap | YTK Academy";
    desc = "YTK Academy hesabınıza giriş yapın ve siber güvenlik eğitim laboratuvarlarınızı çözmeye devam edin.";
  } else if (p === 'register') {
    title = "Kayıt Ol | YTK Academy";
    desc = "YTK Academy hesabı oluşturun, siber güvenlik eğitimlerine başlayın ve siber güvenlik becerilerinizi geliştirin.";
  } else if (p === 'dashboard') {
    title = "Kontrol Paneli | YTK Academy";
    desc = "YTK Academy öğrenim durumunuzu, çözdüğünüz odaları ve kazandığınız rozetleri takip edin.";
  } else if (p === 'leaderboard') {
    title = "Liderlik Sıralaması | YTK Academy";
    desc = "YTK Academy genel sıralamasında en yüksek puanı alan öğrencileri görün ve rekabete katılın.";
  } else if (p === 'terms') {
    title = "Kullanım Şartları | YTK Academy";
    desc = "YTK Academy eğitim platformu kullanım şartları ve kuralları.";
  } else if (p === 'privacy') {
    title = "Gizlilik Politikası | YTK Academy";
    desc = "YTK Academy kullanıcı gizliliği ve veri güvenliği politikası.";
  } else if (p === 'refund-policy') {
    title = "İade ve İptal Koşulları | YTK Academy";
    desc = "YTK Academy dijital eğitim programları ve üyelik paketleri iptal ve iade koşulları.";
  } else {
    const pageTitle = pageTitles[p] || "YTK Academy";
    title = `${pageTitle}`;
  }

  document.title = title;
  
  let descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.setAttribute('content', desc);
  
  let keyMeta = document.querySelector('meta[name="keywords"]');
  if (keyMeta) keyMeta.setAttribute('content', keys);

  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  const currentPath = getPagePath(p, d);
  const canonicalUrl = (p === 'blog-detail' && d && d.canonical_url) ? d.canonical_url : `https://www.ytkacademy.com.tr${currentPath}`;
  canonicalLink.setAttribute('href', canonicalUrl);

  // Open Graph / Twitter dinamik güncellemeleri
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', desc);
  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

  let twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', title);
  let twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', desc);
  let twUrl = document.querySelector('meta[name="twitter:url"]');
  if (twUrl) twUrl.setAttribute('content', canonicalUrl);

  // Robots meta tag for sensitive or non-indexed pages
  let robotsMeta = document.querySelector('meta[name="robots"]');
  if (!robotsMeta) {
    robotsMeta = document.createElement('meta');
    robotsMeta.setAttribute('name', 'robots');
    document.head.appendChild(robotsMeta);
  }
  if (['dashboard', 'chat', 'admin', 'profile', 'room', 'set-password'].includes(p)) {
    robotsMeta.setAttribute('content', 'noindex, nofollow');
  } else {
    robotsMeta.setAttribute('content', 'index, follow');
  }

  let ldJsonScript = document.getElementById('seo-structured-data');
  if (ldJsonScript) ldJsonScript.remove();

  ldJsonScript = document.createElement('script');
  ldJsonScript.id = 'seo-structured-data';
  ldJsonScript.type = 'application/ld+json';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": title,
    "url": canonicalUrl,
    "description": desc,
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript. Requires HTML5."
  };

  ldJsonScript.textContent = JSON.stringify(structuredData);
  document.head.appendChild(ldJsonScript);
};

const getPagePath = (p, d) => {
  if (p === 'home') return '/';
  if (p === 'blog-detail' && d) {
    const slug = typeof d === 'string' ? d : d.slug || '';
    return `/blogs/${slug}`;
  }
  if (p === 'category' && d) {
    const catName = typeof d === 'string' ? d : d.name || '';
    return `/category/${encodeURIComponent(catName)}`;
  }
  if (p === 'room' && d) {
    const roomId = typeof d === 'string' ? d : d.id || '';
    return `/rooms/${roomId}`;
  }
  if (p === 'roomArticle' && d) {
    const roomId = typeof d === 'string' ? d : d.id || '';
    return `/brief/${roomId}`;
  }
  if (p === 'pathway' && d) {
    const slug = typeof d === 'string' ? d : d.slug || '';
    return `/pathway/${slug}`;
  }
  if (p === 'doc' && d) {
    const docId = typeof d === 'string' ? d : d.id || '';
    return `/docs/${docId}`;
  }
  if (p === 'tools') {
    return d && d.slug ? `/tools/${d.slug}` : `/tools`;
  }
  if (p === 'product' && d) {
    const id = typeof d === 'string' ? d : d.id || '';
    return `/product/${id}`;
  }
  return `/${p}`;
};

const parseLocation = () => {
  const path = window.location.pathname;
  if (path === '/' || path === '') {
    return { page: 'home', data: null };
  }
  if (path.startsWith('/blogs/')) {
    const slug = path.substring(7);
    return { page: 'blog-detail', data: { slug } };
  }
  if (path.startsWith('/tools/')) {
    const slug = path.substring(7);
    return { page: 'tools', data: { slug } };
  }
  if (path === '/tools') {
    return { page: 'tools', data: null };
  }
  if (path === '/set-password') {
    const params = new URLSearchParams(window.location.search);
    return { page: 'set-password', data: { token: params.get('token') || '' } };
  }
  if (path.startsWith('/product/')) {
    const id = path.substring(9);
    return { page: 'product', data: { id } };
  }
  if (path.startsWith('/pathway/')) {
    const slug = path.substring(9);
    return { page: 'pathway', data: slug };
  }
  if (path.startsWith('/docs/')) {
    const docId = path.substring(6);
    return { page: 'doc', data: { id: docId } };
  }
  if (path.startsWith('/category/')) {
    const catName = decodeURIComponent(path.substring(10));
    let catObj = null;
    if (window.SK_CATEGORIES) {
      catObj = window.SK_CATEGORIES.find(c => c.name === catName || c.slug === catName);
    }
    return { page: 'category', data: catObj || { name: catName, rooms: [] } };
  }
  if (path.startsWith('/rooms/') || path.startsWith('/brief/')) {
    const roomId = path.substring(7);
    const targetPage = path.startsWith('/brief/') ? 'roomArticle' : 'room';
    let roomObj = null;
    if (window.SK_CATEGORIES) {
      for (const cat of window.SK_CATEGORIES) {
        const found = cat.rooms.find(r => r.id === roomId);
        if (found) {
          roomObj = found;
          break;
        }
      }
    }
    return { page: targetPage, data: roomObj || { id: roomId } };
  }
  const pageName = path.substring(1);
  return { page: pageName, data: null };
};

const App = () => {
  const [trainingPromptRoom, setTrainingPromptRoom] = useState(null);
  // Synchronous initial parse to avoid home page flash
  const getInitialState = () => {
    const parsed = parseLocation();
    const token = localStorage.getItem('sk_token');
    const protectedPages = ['dashboard', 'room', 'leaderboard', 'chat', 'category', 'admin', 'profile'];
    let initialPage = parsed.page;
    let initialData = parsed.data;
    
    if (protectedPages.includes(initialPage) && !token) {
      initialPage = 'login';
      initialData = null;
    } else if ((initialPage === 'rooms' || initialPage === 'login' || initialPage === 'register') && token) {
      initialPage = 'dashboard';
      initialData = null;
    }
    return { page: initialPage, data: initialData };
  };

  const initialState = getInitialState();
  const [page, setPage] = useState(initialState.page);
  const [data, setData] = useState(initialState.data);

  // Scroll to top on page change to prevent clamping scroll to the footer on shorter pages
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const t = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
    return () => clearTimeout(t);
  }, [page, data]);

  const navigate = (p, d = null, fromPopState = false) => {
    const token = localStorage.getItem('sk_token');
    if (p === 'roomArticle' && token && d && !d.forceNoPrompt && !fromPopState) {
      let roomObj = null;
      if (typeof d === 'string') {
        if (window.SK_CATEGORIES) {
          for (const cat of window.SK_CATEGORIES) {
            const found = cat.rooms.find(r => r.id === d);
            if (found) { roomObj = found; break; }
          }
        }
        if (!roomObj) roomObj = { id: d, name: d };
      } else {
        roomObj = d;
      }
      setTrainingPromptRoom(roomObj);
      return;
    }

    if (typeof p === 'string' && p.startsWith('tools/')) {
      d = { slug: p.substring(6) };
      p = 'tools';
    }
    // Auth guards
    const protectedPages = ['dashboard', 'room', 'leaderboard', 'chat', 'category', 'admin', 'profile'];
    
    if (protectedPages.includes(p) && !token) {
      p = 'login';
      d = null;
    } else if ((p === 'rooms' || p === 'login' || p === 'register') && token) {
      p = 'dashboard';
      d = null;
    }

    setPage(p);
    setData(d);
    window.scrollTo(0, 0);

    // Dynamic SEO Titles, Meta Tags, Canonical URL & JSON-LD Structured Data
    updateSEOMeta(p, d);
    const pageTitle = document.title;

    // Resolve URL path and update browser history
    const path = getPagePath(p, d);
    if (!fromPopState) {
      window.history.pushState({ page: p, data: d }, "", path);
    } else {
      if (window.location.pathname !== path) {
        window.history.replaceState({ page: p, data: d }, "", path);
      }
    }

    if (window.gtag) {
      window.gtag('config', 'G-QFXKTX2HD3', {
        'page_path': path,
        'page_title': pageTitle
      });
    }
  };

  // Track initial page view and bind popstate listener
  useEffect(() => {
    // Force state refresh if initial mount was rendered before page scripts loaded
    const initLoc = parseLocation();
    if (initLoc.page !== page) {
      navigate(initLoc.page, initLoc.data, true);
    }
    // Replace initial state to sync history object
    const path = getPagePath(page, data);
    window.history.replaceState({ page, data }, "", path);

    // Dynamic Title, Meta Tags, Canonical URL & JSON-LD Structured Data for Initial Load
    updateSEOMeta(page, data);

    if (window.gtag) {
      window.gtag('config', 'G-QFXKTX2HD3', {
        'page_path': path,
        'page_title': document.title
      });
    }

    const handlePopState = (event) => {
      const state = event.state;
      if (state && state.page) {
        navigate(state.page, state.data, true);
      } else {
        const fallback = parseLocation();
        navigate(fallback.page, fallback.data, true);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const Cmp = PAGES[page] || PAGES.notfound || PAGES.home;
  // pass `blog` too so BlogDetailPage's existing prop name keeps working
  return (
    <div className="min-h-screen">
      <Cmp navigate={navigate} data={data} blog={data} />
      <WhatsAppButton />
      
      {trainingPromptRoom && (
        <div className="fixed inset-0 bg-[#020806]/85 z-[999] grid place-items-center p-4 overflow-y-auto" style={{ animation: 'modalFadeIn .4s cubic-bezier(0.16,1,0.3,1) both' }} onClick={() => setTrainingPromptRoom(null)}>
          <div className="relative max-w-md w-full border border-[#103a26] bg-[#04100a] rounded-2xl shadow-[0_0_80px_rgba(0,255,136,.25)] p-8 text-center" style={{ background: 'linear-gradient(165deg,#07150e,#020806)', animation: 'modalScaleIn .5s cubic-bezier(0.16,1,0.3,1) both' }} onClick={e => e.stopPropagation()}>
            <span className="font-mono text-xs text-[#00ff88] tracking-[0.2em] uppercase mb-2 block">// GÖREV HAZIRLIĞI</span>
            <h3 className="text-2xl font-disp font-bold text-[#eafff5] mb-4">{trainingPromptRoom.name || trainingPromptRoom.title}</h3>
            <p className="text-[#9fc4b5] text-sm leading-relaxed mb-8">
              Operasyona başlamadan önce mentörünüz tarafından hazırlanan mini eğitimi (Ders Brifingi) okumak ister misiniz? Temel kavramları önceden öğrenmek çözümü kolaylaştıracaktır.
            </p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => {
                  const r = trainingPromptRoom;
                  setTrainingPromptRoom(null);
                  navigate('roomArticle', { ...r, forceNoPrompt: true });
                }} 
                className="w-full font-mono text-sm font-bold text-[#021008] bg-[#00ff88] py-3.5 rounded-xl hover:shadow-[0_0_24px_rgba(0,255,136,0.4)] transition-all uppercase tracking-wider animate-pulse hover:animate-none"
              >
                🎓 Evet, Eğitimi Al (Önerilen)
              </button>
              <button 
                onClick={() => {
                  const r = trainingPromptRoom;
                  setTrainingPromptRoom(null);
                  navigate('room', { ...r, cameFromArticle: false });
                }} 
                className="w-full font-mono text-sm font-bold text-[#74998a] border border-[#103a26] py-3 rounded-xl hover:border-[#ffd166] hover:text-[#ffd166] transition-all uppercase tracking-wider"
              >
                ⚡ Hayır, Direkt Odaya Geç
              </button>
              <button 
                onClick={() => setTrainingPromptRoom(null)} 
                className="text-[#5c8a74] hover:text-[#74998a] text-xs transition-colors mt-2 underline"
              >
                İptal Et
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);