var SiberKampusApp = (() => {
  // app.jsx
  var { useState, useRef, useEffect } = React;
  function useReveal() {
    useEffect(() => {
      const els = Array.from(document.querySelectorAll(".reveal"));
      const reveal = (el) => el.classList.remove("reveal-hidden");
      if (!("IntersectionObserver" in window)) return;
      els.forEach((el) => el.classList.add("reveal-hidden"));
      const io = new IntersectionObserver((es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });
      els.forEach((el) => io.observe(el));
      const fallback = setTimeout(() => els.forEach(reveal), 600);
      return () => {
        io.disconnect();
        clearTimeout(fallback);
      };
    });
  }
  var Header = ({ navigate }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuItems = [["Anasayfa", "home"], ["Hakk\u0131m\u0131zda", "about"], ["Blog", "blogs"], ["\u0130leti\u015Fim", "contact"], ["Fiyatland\u0131rma", "pricing"]];
    return /* @__PURE__ */ React.createElement("header", { className: "sticky top-0 z-50 bg-[rgba(2,8,6,.88)] backdrop-blur-md border-b border-[#0c2719]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1280px] mx-auto px-6 md:px-8 flex items-center justify-between h-[72px]" }, /* @__PURE__ */ React.createElement("a", { href: getPagePath("home"), onClick: (e) => {
      e.preventDefault();
      navigate("home");
    }, className: "flex items-center gap-3 font-disp font-bold text-xl text-[#eafff5] tracking-tight" }, /* @__PURE__ */ React.createElement("span", { className: "w-[34px] h-[34px] border-[1.5px] border-[#00ff88] rounded-lg grid place-items-center text-[#00ff88] font-mono text-[15px] font-bold shadow-[0_0_18px_-4px_var(--glow),inset_0_0_12px_-6px_var(--glow)]" }, ">_"), "YTK ", /* @__PURE__ */ React.createElement("b", { className: "text-[#00ff88]" }, "Academy")), /* @__PURE__ */ React.createElement("nav", { className: "hidden md:flex gap-9 items-center" }, menuItems.map(([t, p]) => /* @__PURE__ */ React.createElement("a", { key: p, href: getPagePath(p), onClick: (e) => {
      e.preventDefault();
      navigate(p);
    }, className: "text-sm text-[#74998a] hover:text-[#cdeede] transition-colors relative group" }, t, p === "pricing" && /* @__PURE__ */ React.createElement("span", { className: "absolute -top-5 -right-8 bg-[#00ff88] text-[#021008] text-[11px] font-black px-2 py-0.5 rounded-lg font-mono shadow-[0_0_12px_#00ff88]" }, "\u{1F525} %50"), /* @__PURE__ */ React.createElement("span", { className: "absolute left-0 -bottom-2 h-[1.5px] w-0 bg-[#00ff88] group-hover:w-full transition-all duration-200" })))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3.5" }, /* @__PURE__ */ React.createElement("a", { href: getPagePath("login"), onClick: (e) => {
      e.preventDefault();
      navigate("login");
    }, className: "hidden sm:inline-flex font-mono text-sm text-[#cdeede] px-[18px] py-[11px] border border-[#103a26] bg-transparent hover:border-[#00ff88] hover:text-[#00ff88] transition-colors" }, "Giri\u015F Yap"), /* @__PURE__ */ React.createElement("a", { href: getPagePath("register"), onClick: (e) => {
      e.preventDefault();
      navigate("register");
    }, className: "hidden sm:inline-flex font-mono text-sm font-bold text-[#021008] bg-[#00ff88] px-[22px] py-3 clip-btn hover:shadow-[0_0_28px_-4px_var(--glow)] hover:-translate-y-px transition-all" }, "Hemen Ba\u015Fla"), /* @__PURE__ */ React.createElement("button", { onClick: () => setMobileMenuOpen((o) => !o), "aria-label": "Mobil Men\xFCy\xFC A\xE7/Kapat", className: "md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 border border-[#103a26] rounded bg-[#04100a] transition-all" }, /* @__PURE__ */ React.createElement("span", { className: `w-5 h-0.5 bg-[#00ff88] transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}` }), /* @__PURE__ */ React.createElement("span", { className: `w-5 h-0.5 bg-[#00ff88] transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}` }), /* @__PURE__ */ React.createElement("span", { className: `w-5 h-0.5 bg-[#00ff88] transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}` })))), mobileMenuOpen && /* @__PURE__ */ React.createElement("div", { className: "md:hidden border-t border-[#0c2719] bg-[#04100a] px-6 py-4 flex flex-col gap-4" }, menuItems.map(([t, p]) => /* @__PURE__ */ React.createElement("a", { key: p, href: getPagePath(p), onClick: (e) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      navigate(p);
    }, className: "text-left py-2 text-sm text-[#74998a] hover:text-[#00ff88] transition-colors flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", null, t), p === "pricing" && /* @__PURE__ */ React.createElement("span", { className: "bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-[10px] font-bold px-1.5 py-0.5 rounded font-mono scale-90" }, "%50 \u0130ndirim"))), /* @__PURE__ */ React.createElement("div", { className: "h-px bg-[#0c2719] my-1" }), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement("a", { href: getPagePath("login"), onClick: (e) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      navigate("login");
    }, className: "flex-1 text-center py-2.5 text-sm text-[#cdeede] border border-[#103a26] rounded" }, "Giri\u015F Yap"), /* @__PURE__ */ React.createElement("a", { href: getPagePath("register"), onClick: (e) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      navigate("register");
    }, className: "flex-1 text-center py-2.5 text-sm font-bold text-[#021008] bg-[#00ff88] rounded" }, "Kay\u0131t Ol"))));
  };
  var Footer = ({ navigate }) => /* @__PURE__ */ React.createElement("footer", { className: "bg-[#04100a] border-t border-[#0c2719] pt-16 pb-9" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1280px] mx-auto px-8" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] gap-10 pb-12 border-b border-[#0c2719]" }, /* @__PURE__ */ React.createElement("div", { className: "col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left" }, /* @__PURE__ */ React.createElement("a", { href: getPagePath("home"), onClick: (e) => {
    e.preventDefault();
    navigate("home");
  }, className: "flex items-center gap-3 font-disp font-bold text-xl text-[#eafff5] whitespace-nowrap" }, /* @__PURE__ */ React.createElement("span", { className: "w-[34px] h-[34px] border-[1.5px] border-[#00ff88] rounded-lg grid place-items-center text-[#00ff88] font-mono text-[15px] font-bold" }, ">_"), "YTK ", /* @__PURE__ */ React.createElement("b", { className: "text-[#00ff88]" }, "Academy")), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm mt-[18px] max-w-[300px] leading-relaxed" }, "Uygulamal\u0131 kodlama g\xF6revleri ve kurumsal mimari senaryolar\u0131yla yeni nesil C# & .NET Core backend geli\u015Ftiricilerini yeti\u015Ftiriyoruz.")), [
    { h: "Platform", items: [["Laboratuvarlar", "rooms"], ["Blog", "blogs"], ["Yol Haritalar\u0131", "rooms"], ["Liderlik Tablosu", "leaderboard"]] },
    { h: "Kurumsal & Yasal", items: [["Hakk\u0131m\u0131zda", "about"], ["\u0130leti\u015Fim", "contact"], ["Kullan\u0131m \u015Eartlar\u0131", "terms"], ["Gizlilik Politikas\u0131", "privacy"], ["\u0130ade ve \u0130ptal Ko\u015Fullar\u0131", "refund-policy"]] },
    { h: "Geli\u015Ftirici Ara\xE7lar\u0131 I", items: [["DTO Olu\u015Fturucu", "tools/reverse-shell"], ["JWT & Base64 Encoder", "tools/encoder-decoder"], ["Password Hash Test", "tools/password-strength"], ["Subnet Hesaplay\u0131c\u0131", "tools/subnet-calc"], ["SHA-256 Jenerat\xF6r\xFC", "tools/hash-tool"]] },
    { h: "Geli\u015Ftirici Ara\xE7lar\u0131 II", items: [["SQL \u015Eema Olu\u015Fturucu", "tools/xss-generator"], ["EF Model Mapper", "tools/sqli-generator"], ["Cron Zamanlay\u0131c\u0131", "tools/cron-explainer"], ["Base64 Dosya/G\xF6rsel", "tools/base64-file"], ["API Endpoint Test", "tools/dns-lookup"]] }
  ].map(
    (col, i) => /* @__PURE__ */ React.createElement("div", { key: i }, /* @__PURE__ */ React.createElement("div", { className: "font-disp font-bold text-xs tracking-widest text-[#74998a] uppercase mb-[18px]" }, col.h), col.items.map(([t, p], j) => {
      let hrefVal = "/";
      let navigatePage = "home";
      let navigateData = null;
      if (p) {
        if (p.startsWith("tools/")) {
          const slug = p.split("/")[1];
          hrefVal = getPagePath("tools", { slug });
          navigatePage = "tools";
          navigateData = { slug };
        } else {
          hrefVal = getPagePath(p);
          navigatePage = p;
        }
      }
      return /* @__PURE__ */ React.createElement("a", { key: j, href: hrefVal, onClick: (e) => {
        e.preventDefault();
        navigate(navigatePage, navigateData);
      }, className: "block text-left text-[#74998a] text-sm py-1.5 hover:text-[#00ff88] transition-colors" }, t);
    }))
  )), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center pt-7 flex-wrap gap-4 border-t border-[#0c2719]/50 mt-6" }, /* @__PURE__ */ React.createElement("p", { className: "text-[13px] text-[#5c8a74]" }, "\xA9 2026 YTK Academy \u2014 T\xFCm haklar\u0131 sakl\u0131d\u0131r. | \u{1F4B3} PCI-DSS 256-Bit G\xFCvenli \xD6deme Altyap\u0131s\u0131"), /* @__PURE__ */ React.createElement("img", { src: "/visa-mastercard-troypng.png", alt: "Visa, Mastercard, Troy", className: "h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" }))));
  var HomePage = ({ navigate }) => {
    const matrixRef = useRef(null);
    const sphereRef = useRef(null);
    const termRef = useRef(null);
    const statsRef = useRef(null);
    useReveal();
    const [onlineCount, setOnlineCount] = useState(250);
    const [totalUsers, setTotalUsers] = useState(127);
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizStep, setQuizStep] = useState(1);
    const [quizLevel, setQuizLevel] = useState("");
    const [quizGoal, setQuizGoal] = useState("");
    const [quizHours, setQuizHours] = useState("");
    const [quizName, setQuizName] = useState("");
    const [quizNotes, setQuizNotes] = useState("");
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
      const formattedName = quizName || "Yusuf \u0130slam";
      const message = `Merhaba Yusuf Hocam,

Birebir Yaz\u0131l\u0131m E\u011Fitimi i\xE7in randevu olu\u015Fturmak istiyorum:

\u2022 Ad Soyad: ${formattedName}
\u2022 E\u011Fitim Konusu: C# & .NET Core Geli\u015Ftirme
\u2022 Ders T\xFCr\xFC: \xDCcretsiz \xD6n G\xF6r\xFC\u015Fme / Kariyer Planlama
\u2022 Seviye: ${quizLevel}
\u2022 Hedef: ${quizGoal}
\u2022 Haftal\u0131k S\xFCre: ${quizHours}${quizNotes ? "\n\u2022 Ek Not: " + quizNotes : ""}

Siteden (ytkacademy.com.tr) g\xF6nderilmi\u015Ftir. Geri d\xF6n\xFC\u015F\xFCn\xFCz\xFC bekliyorum.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/905389351189?text=${encodedMessage}`, "_blank");
    };
    useEffect(() => {
      const fetchOnline = () => {
        fetch(`/api/users/online?t=${Date.now()}`).then((res) => res.json()).then((data) => {
          if (data && Array.isArray(data)) {
            setOnlineCount(data.length);
          }
        }).catch(() => {
        });
      };
      fetchOnline();
      const interval = setInterval(fetchOnline, 2e4);
      fetch("/api/stats").then((res) => res.json()).then((data) => {
        if (data && data.totalUsers) {
          setTotalUsers(data.totalUsers);
        }
      }).catch(() => {
      });
      return () => clearInterval(interval);
    }, []);
    useEffect(() => {
      let io;
      if (statsRef.current) {
        const nums = statsRef.current.querySelectorAll("[data-count]");
        io = new IntersectionObserver((es) => {
          es.forEach((e) => {
            if (e.isIntersecting) {
              const el = e.target, end = +el.dataset.count, sx = el.dataset.suffix || "";
              let cur = 0;
              const step = end / 60;
              (function up() {
                cur += step;
                if (cur < end) {
                  el.textContent = Math.floor(cur).toLocaleString("tr-TR") + sx;
                  requestAnimationFrame(up);
                } else
                  el.textContent = end.toLocaleString("tr-TR") + sx;
              })();
              io.unobserve(el);
            }
          });
        }, { threshold: 0.5 });
        nums.forEach((n) => io.observe(n));
      }
      return () => {
        if (io) io.disconnect();
      };
    }, [totalUsers]);
    useEffect(() => {
      const cleanups = [];
      if (matrixRef.current) {
        const cv = matrixRef.current, ctx = cv.getContext("2d"), hero = cv.parentElement;
        let cols, drops;
        const fs = 15;
        const chars = "\u30A2\u30AB\u30B5\u30BF\u30CA\u30CF\u30DE\u30E4\u30E90123456789ABCDEF<>{}#$%&*ANGRSU01".split("");
        const size = () => {
          cv.width = hero.offsetWidth;
          cv.height = hero.offsetHeight;
          cols = Math.floor(cv.width / fs);
          drops = new Array(cols).fill(0).map(() => Math.random() * -50);
        };
        size();
        window.addEventListener("resize", size);
        const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
        let raf;
        const draw = () => {
          ctx.fillStyle = "rgba(2,8,6,.10)";
          ctx.fillRect(0, 0, cv.width, cv.height);
          ctx.font = fs + "px JetBrains Mono, monospace";
          for (let i = 0; i < cols; i++) {
            const t = chars[Math.floor(Math.random() * chars.length)];
            const x = i * fs, y = drops[i] * fs;
            ctx.fillStyle = Math.random() > 0.975 ? "#eafff5" : "rgba(0,255,136," + (Math.random() * 0.5 + 0.35) + ")";
            ctx.fillText(t, x, y);
            if (y > cv.height && Math.random() > 0.975) drops[i] = 0;
            drops[i] += 1;
          }
          raf = requestAnimationFrame(draw);
        };
        if (!reduce) draw();
        cleanups.push(() => {
          cancelAnimationFrame(raf);
          window.removeEventListener("resize", size);
        });
      }
      if (sphereRef.current) {
        const cv = sphereRef.current, ctx = cv.getContext("2d");
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
        size();
        window.addEventListener("resize", size);
        const N = 240, pts = [];
        const off = 2 / N, inc = Math.PI * (3 - Math.sqrt(5));
        for (let i = 0; i < N; i++) {
          const y = i * off - 1 + off / 2;
          const r = Math.sqrt(1 - y * y);
          const phi = i * inc;
          pts.push([Math.cos(phi) * r, y, Math.sin(phi) * r]);
        }
        let a = 0, raf;
        const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
        const frame = () => {
          ctx.clearRect(0, 0, cv.width, cv.height);
          const cx = cv.width / 2, cy = cv.height / 2, R = Math.min(cv.width, cv.height) * 0.4;
          a += reduce ? 0 : 35e-4;
          const ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(a * 0.6), sb = Math.sin(a * 0.6);
          const proj = pts.map((p) => {
            let [x, y, z] = p;
            let x1 = x * ca - z * sa, z1 = x * sa + z * ca;
            let y1 = y * cb - z1 * sb, z2 = y * sb + z1 * cb;
            const persp = 1.7 / (1.7 + z2);
            return { sx: cx + x1 * R * persp, sy: cy + y1 * R * persp, z: z2 };
          });
          for (let i = 0; i < proj.length; i++) for (let j = i + 1; j < proj.length; j++) {
            const dx = proj[i].sx - proj[j].sx, dy = proj[i].sy - proj[j].sy, d = dx * dx + dy * dy;
            if (d < 38 * dpr * (38 * dpr)) {
              const al = (1 - Math.sqrt(d) / (38 * dpr)) * 0.28 * ((proj[i].z + 1) / 2);
              ctx.strokeStyle = "rgba(0,255,136," + al + ")";
              ctx.lineWidth = dpr * 0.6;
              ctx.beginPath();
              ctx.moveTo(proj[i].sx, proj[i].sy);
              ctx.lineTo(proj[j].sx, proj[j].sy);
              ctx.stroke();
            }
          }
          proj.forEach((p) => {
            const depth = (p.z + 1) / 2;
            ctx.beginPath();
            ctx.arc(p.sx, p.sy, (1.1 + depth * 2) * dpr, 0, 7);
            ctx.fillStyle = "rgba(" + (180 - depth * 180) + ",255," + (180 + depth * 40) + "," + (0.35 + depth * 0.6) + ")";
            ctx.fill();
          });
          raf = requestAnimationFrame(frame);
        };
        frame();
        cleanups.push(() => {
          cancelAnimationFrame(raf);
          window.removeEventListener("resize", size);
        });
      }
      if (termRef.current) {
        const el = termRef.current;
        el.innerHTML = "";
        const lines = [
          { t: "$ ", c: "#00ff88", x: "dotnet new webapi -n YtkApi", d: 40 },
          { t: "", c: "#00ff88", x: '  Creating template "ASP.NET Core Web API"...', d: 8 },
          { t: "", c: "#00ff88", x: "  Template created successfully.", d: 8 },
          { t: "$ ", c: "#00ff88", x: "cd YtkApi && dotnet run", d: 40 },
          { t: "", c: "#ffd166", x: "  Building project...", d: 8 },
          { t: "", c: "#00ff88", x: "  Running on http://localhost:5000", d: 8 },
          { t: "$ ", c: "#00ff88", x: "curl http://localhost:5000/weatherforecast", d: 40 },
          { t: "", c: "#00ff88", x: '  [{"date":"2026-06-18","temperatureC":25,"summary":"Warm"}]', d: 8 },
          { t: "$ ", c: "#00ff88", x: "_", d: 0, cur: true }
        ];
        let li = 0, stopped = false;
        const typeLine = () => {
          if (stopped || li >= lines.length) return;
          const L = lines[li];
          const div = document.createElement("div");
          const pre = document.createElement("span");
          pre.style.color = "#00ff88";
          pre.textContent = L.t;
          div.appendChild(pre);
          const span = document.createElement("span");
          span.style.color = L.c;
          div.appendChild(span);
          el.appendChild(div);
          if (L.cur) {
            const cu = document.createElement("span");
            cu.className = "term-cursor";
            div.appendChild(cu);
            li++;
            return;
          }
          let i = 0;
          (function ch() {
            if (stopped) return;
            if (i <= L.x.length) {
              span.textContent = L.x.slice(0, i);
              i++;
              setTimeout(ch, L.d);
            } else {
              li++;
              setTimeout(typeLine, L.d > 20 ? 260 : 60);
            }
          })();
        };
        typeLine();
        cleanups.push(() => {
          stopped = true;
        });
      }
      return () => cleanups.forEach((fn) => fn());
    }, []);
    const features = [
      { num: "01", icon: "\u26A1", title: "Kurulumsuz Laboratuvar", desc: 'Sanal makine, dual boot, bozuk yap\u0131land\u0131rma yok. Taray\u0131c\u0131n\u0131 a\xE7, "Ba\u015Flat" de ve saniyeler i\xE7inde canl\u0131 bir hedef sistemin kar\u015F\u0131s\u0131nda ol.' },
      { num: "02", icon: "\u2316", title: "Ger\xE7ek\xE7i G\xFCvenlik Senaryolar\u0131", desc: "Her g\xF6rev, sahada kar\u015F\u0131na \xE7\u0131kacak ger\xE7ek zafiyetlerden \xFCretildi. Sahte sorular de\u011Fil, ger\xE7ek sistemleri analiz etme deneyimi." },
      { num: "03", icon: "\u21AF", title: "Anl\u0131k Geri Bildirim", desc: "Bayra\u011F\u0131 yakalad\u0131\u011F\u0131n an puan\u0131n artar, ilerlemen kaydedilir. Nerede hata yapt\u0131\u011F\u0131n\u0131 an\u0131nda g\xF6r\xFCr, eksi\u011Fini hemen kapat\u0131rs\u0131n." },
      { num: "04", icon: "\u25C8", title: "Ment\xF6r Deste\u011Fi", desc: "Tak\u0131ld\u0131\u011F\u0131n yerde alan\u0131nda \xE7al\u0131\u015Fan ger\xE7ek pentester'lardan ipucu ve geri bildirim al. Yaln\u0131z \xF6\u011Frenmek zorunda de\u011Filsin." },
      { num: "05", icon: "\u2B21", title: "Rozet & Sertifika", desc: "Tamamlad\u0131\u011F\u0131n her yol i\xE7in do\u011Frulanabilir rozetler ve sertifikalar kazan. CV'ne ve LinkedIn'ine ekleyebilece\u011Fin somut kan\u0131tlar." },
      { num: "06", icon: "\u27C1", title: "Kariyer Y\xF6nlendirme", desc: "Beceri profilin i\u015Fe al\u0131m yapan \u015Firketlere a\xE7\u0131l\u0131r. Hangi pozisyona haz\u0131r oldu\u011Funu g\xF6r\xFCr, do\u011Fru f\u0131rsatlarla e\u015Fle\u015Firsin." }
    ];
    const roadmap = [
      { n: "01", h: "Temeller & Linux", p: "Komut sat\u0131r\u0131, a\u011F temelleri ve g\xFCvenlik zihniyetiyle sa\u011Flam bir ba\u015Flang\u0131\xE7.", tag: "~2 hafta" },
      { n: "02", h: "Web & Sistem G\xFCvenli\u011Fi", p: "Ger\xE7ek zafiyetleri s\xF6m\xFCrerek SQLi, XSS ve ayr\u0131cal\u0131k y\xFCkseltmeyi \xF6\u011Fren.", tag: "~4 hafta" },
      { n: "03", h: "CTF & \u0130leri S\u0131zma Testi", p: "\xC7ok ad\u0131ml\u0131 senaryolarda pivotlama, raporlama ve metodolojiyi ustala\u015Ft\u0131r.", tag: "~6 hafta" },
      { n: "04", h: "Portf\xF6y & Kariyer", p: "Beceri profilini i\u015Fverenlere a\xE7, do\u011Fru pozisyonlarla e\u015Fle\u015F.", tag: "s\xFCrekli" }
    ];
    const testimonials = [
      { text: "\xDCniversitede teori \xF6\u011Frendim ama ilk defa YTK Academy'de ger\xE7ek bir Web API'nin middleware katman\u0131n\u0131 kodlad\u0131m. Mezun olduktan 2 ay sonra bir finans \u015Firketinde i\u015Fe ba\u015Flad\u0131m. Mentorluk olmasa bu h\u0131zda olmazd\u0131.", name: "Arda K.", role: "Backend Developer \xB7 eski \xF6\u011Frenci", av: "AK" },
      { text: "\u0130n\u015Faat m\xFChendisli\u011Finden geliyorum, kodlama bile bilmiyordum. Yol haritas\u0131 beni elimden tutup g\xF6t\xFCrd\xFC. Her kodlama odas\u0131n\u0131 \xE7\xF6zd\xFCk\xE7e \xF6zg\xFCvenim artt\u0131. \u015Eimdi C# backend geli\u015Ftirici olarak \xE7al\u0131\u015F\u0131yorum.", name: "Melis Y.", role: "C# Geli\u015Ftirici \xB7 kariyer de\u011Fi\u015Ftirdi", av: "MY" },
      { text: "Derslerde \xF6\u011Frendi\u011Fim teorik bilgileri do\u011Frudan platform \xFCzerindeki C# kodlama odalar\u0131nda test etmek geli\u015Fmemi inan\u0131lmaz h\u0131zland\u0131rd\u0131. Tak\u0131ld\u0131\u011F\u0131mda mentor deste\u011Fi ve kod ipu\xE7lar\u0131 sayesinde hatan\u0131n kayna\u011F\u0131n\u0131 kendim bulmay\u0131 \xF6\u011Frendim.", name: "Emre \xC7.", role: "Yaz\u0131l\u0131m M\xFCh. \xF6\u011Frencisi", av: "E\xC7" }
    ];
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, { navigate }), /* @__PURE__ */ React.createElement("section", { className: "relative overflow-hidden border-b border-[#0c2719]" }, /* @__PURE__ */ React.createElement("canvas", { ref: matrixRef, className: "absolute inset-0 w-full h-full z-0 opacity-[.32]" }), /* @__PURE__ */ React.createElement("div", { className: "grid-floor" }), /* @__PURE__ */ React.createElement("div", { className: "absolute top-[-12%] left-1/2 -translate-x-1/2 w-[900px] h-[560px] z-0 pointer-events-none", style: { background: "radial-gradient(ellipse at center,rgba(0,255,136,.16),transparent 62%)" } }), /* @__PURE__ */ React.createElement("div", { className: "max-w-[1280px] mx-auto px-8 relative z-[2] grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-14 items-center pt-24 pb-[104px]" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-2.5 text-[12.5px] tracking-[.12em] uppercase text-[#5cffba] border border-[#103a26] bg-[rgba(0,255,136,.04)] px-3.5 py-[7px] rounded-full mb-[26px]" }, /* @__PURE__ */ React.createElement("span", { className: "w-[7px] h-[7px] rounded-full bg-[#00ff88] shadow-[0_0_10px_#00ff88] sk-pulse" }), "Bire Bir Yaz\u0131l\u0131m Ment\xF6rl\xFC\u011F\xFC"), /* @__PURE__ */ React.createElement("h1", { className: "text-[clamp(40px,6vw,78px)] text-[#eafff5] mb-[18px] tracking-[-.025em]" }, "YTK ", /* @__PURE__ */ React.createElement("span", { className: "glitch", "data-text": "Academy" }, "Academy"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "text-[clamp(20px,3vw,38px)] text-[#00ff88]" }, "Bire Bir Yaz\u0131l\u0131m E\u011Fitimi")), /* @__PURE__ */ React.createElement("div", { className: "text-[16.5px] text-[#74998a] max-w-[560px] mb-8 leading-[1.75]" }, /* @__PURE__ */ React.createElement("p", null, "Yusuf \u0130slam Yetkin rehberli\u011Finde sunulan YTK Academy, yaz\u0131l\u0131m d\xFCnyas\u0131na ad\u0131m atmak ya da backend uzman\u0131 olmak isteyen herkes i\xE7in ki\u015Fiselle\u015Ftirilmi\u015F bir bire bir ment\xF6rl\xFCk program\u0131d\u0131r. S\u0131f\u0131rdan ba\u015Flay\u0131p modern yaz\u0131l\u0131m mimarilerine uzanan ad\u0131m ad\u0131m yol haritas\u0131yla, do\u011Frudan \xE7al\u0131\u015Fan kurumsal projeler \xFCreterek profesyonel bir portf\xF6y in\u015Fa edersiniz.")), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 flex-wrap items-center" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setShowQuiz(true), className: "font-mono text-[15px] font-bold text-[#021008] bg-[#00ff88] px-[30px] py-4 clip-btn hover:shadow-[0_0_28px_-4px_var(--glow)] hover:-translate-y-px transition-all" }, "\xDCcretsiz \xD6n G\xF6r\xFC\u015Fme Planla \u2192")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3.5 mt-[26px] text-[13px] text-[#5c8a74]" }, /* @__PURE__ */ React.createElement("div", { className: "flex" }, ["AK", "MY", "E\xC7", "+9"].map(
      (a, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "w-[30px] h-[30px] rounded-full border-[1.5px] border-[#020806] grid place-items-center text-[11px] font-bold text-[#5cffba] " + (i ? "-ml-2 " : ""), style: { background: "linear-gradient(135deg,#0a3a24,#063018)" } }, a)
    )), /* @__PURE__ */ React.createElement("span", null, onlineCount, " \xF6\u011Frenci \u015Fuan aktif \xE7al\u0131\u015Fmakta \u{1F7E2}"))), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl overflow-hidden border border-[#103a26] text-[13.5px] shadow-[0_40px_80px_-30px_rgba(0,0,0,.9),0_0_60px_-20px_var(--glow)]", style: { background: "linear-gradient(160deg,#06140d,#040d08)" } }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 px-3.5 py-3 border-b border-[#0c2719] bg-black/25" }, /* @__PURE__ */ React.createElement("span", { className: "w-[11px] h-[11px] rounded-full bg-[#ff5f57]" }), /* @__PURE__ */ React.createElement("span", { className: "w-[11px] h-[11px] rounded-full bg-[#febc2e]" }), /* @__PURE__ */ React.createElement("span", { className: "w-[11px] h-[11px] rounded-full bg-[#28c840]" }), /* @__PURE__ */ React.createElement("span", { className: "ml-2 text-xs text-[#5c8a74]" }, "yusuf@ytkacademy: ~/csharp-project")), /* @__PURE__ */ React.createElement("div", { ref: termRef, className: "p-[18px] min-h-[240px] leading-[1.85] font-mono", style: { letterSpacing: "1px", height: "340px", padding: "12px" } })))), /* @__PURE__ */ React.createElement("div", { ref: statsRef, className: "border-b border-[#0c2719]", style: { background: "linear-gradient(180deg,#04100a,#020806)" } }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1280px] mx-auto px-8 grid grid-cols-2 md:grid-cols-4" }, [
      { c: totalUsers, s: "+", l: "Aktif \xD6\u011Frenci" },
      { c: window.SK_ALL_ROOMS ? window.SK_ALL_ROOMS.length : 15, s: "+", l: "Kodlama Laboratuvar\u0131" },
      { c: 90, s: "+", l: "Uygulamal\u0131 G\xF6rev" },
      { c: 94, s: "%", l: "Tamamlama Oran\u0131" }
    ].map(
      (st, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "py-11 px-7 text-center " + (i ? "border-l border-[#0c2719]" : "") }, /* @__PURE__ */ React.createElement("div", { key: st.c, "data-count": st.c, "data-suffix": st.s, className: "font-disp font-bold text-[clamp(32px,4vw,52px)] text-[#00ff88] tracking-[-.02em] drop-shadow-[0_0_26px_rgba(0,255,136,.3)]" }, "0"), /* @__PURE__ */ React.createElement("div", { className: "text-[13px] text-[#74998a] mt-2 tracking-wide" }, st.l))
    ))), /* @__PURE__ */ React.createElement("section", { className: "py-[108px]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" }, /* @__PURE__ */ React.createElement("div", { className: "reveal" }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[13px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center gap-2.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#5c8a74] font-bold" }, "//"), " Kimler \u0130\xE7in?"), /* @__PURE__ */ React.createElement("h2", { className: "text-[clamp(30px,4vw,46px)] text-[#eafff5] my-[18px]" }, "Bu Mentorluk ", /* @__PURE__ */ React.createElement("em", { className: "not-italic text-[#00ff88]" }, "Kimlere"), " Uygun?"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-3.5 mt-6" }, [
      "Yaz\u0131l\u0131ma s\u0131f\u0131rdan ba\u015Flamak isteyenler",
      "Junior geli\u015Ftiriciler",
      "\u0130\u015F de\u011Fi\u015Ftirmek isteyenler",
      "M\xFClakatlara haz\u0131rlananlar",
      "Yaz\u0131l\u0131mda uzmanla\u015Fmak isteyenler"
    ].map((text, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, className: "flex items-center gap-3.5 p-4 rounded-xl border border-[#103a26] bg-[#04100a]/35 hover:border-[#00ff88] transition-colors group" }, /* @__PURE__ */ React.createElement("span", { className: "w-6 h-6 rounded-full bg-[#00ff88]/10 border border-[#00ff88] flex items-center justify-center text-[#00ff88] text-[11px] flex-shrink-0" }, "\u2713"), /* @__PURE__ */ React.createElement("span", { className: "font-mono text-sm text-[#cdeede]" }, text))))), /* @__PURE__ */ React.createElement("div", { className: "reveal" }, /* @__PURE__ */ React.createElement("div", { className: "sphere-wrap relative aspect-square grid place-items-center" }, /* @__PURE__ */ React.createElement("canvas", { ref: sphereRef, className: "w-full h-full" }), /* @__PURE__ */ React.createElement("span", { className: "absolute top-[6%] left-0 font-mono text-[11.5px] text-[#5cffba] border border-[#103a26] bg-[rgba(2,8,6,.85)] px-2.5 py-[5px] rounded-md backdrop-blur-sm" }, "build: succeeded \u2713"), /* @__PURE__ */ React.createElement("span", { className: "absolute bottom-[10%] -right-[4%] font-mono text-[11.5px] text-[#5cffba] border border-[#103a26] bg-[rgba(2,8,6,.85)] px-2.5 py-[5px] rounded-md backdrop-blur-sm" }, "active_devs: 380"))))), /* @__PURE__ */ React.createElement("section", { className: "py-[108px]", style: { background: "linear-gradient(180deg,#020806,#04100a)" } }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1280px] mx-auto px-8" }, /* @__PURE__ */ React.createElement("div", { className: "text-center max-w-[640px] mx-auto mb-14 reveal" }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[13px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center justify-center gap-2.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#5c8a74] font-bold" }, "//"), " 3. Neler \xD6\u011Freneceksiniz?"), /* @__PURE__ */ React.createElement("h2", { className: "text-[clamp(28px,4vw,42px)] text-[#eafff5] mt-4" }, "Neler \xD6\u011Freneceksiniz?"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] mt-4 text-[15px]" }, "Ment\xF6rl\xFCk program\u0131 boyunca C# & .NET Core backend d\xFCnyas\u0131ndan frontend, veri tabanlar\u0131 ve modern DevOps ara\xE7lar\u0131na kadar uzmanla\u015Faca\u011F\u0131n\u0131z t\xFCm konular.")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "reveal group relative overflow-hidden rounded-2xl border border-[#0c2719] p-[30px] hover:border-[#103a26] hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,255,136,.35)] transition-all flex flex-col justify-between min-h-[250px]", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("span", { className: "absolute top-0 left-0 w-full h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300", style: { background: "linear-gradient(90deg,#00ff88,transparent)" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-[42px] h-[42px] border border-[#103a26] rounded-[10px] grid place-items-center text-[#00ff88] text-xl bg-[rgba(0,255,136,.04)]" }, "\u{1F4BB}"), /* @__PURE__ */ React.createElement("h3", { className: "text-[19px] text-[#eafff5] font-disp font-bold" }, "Backend & Yaz\u0131l\u0131m")), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#74998a] leading-[1.7] mb-6" }, "G\xFC\xE7l\xFC backend sistemleri in\u015Fa etmek i\xE7in kurumsal C# & .NET teknolojileri ve temiz kod pratikleri.")), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, ["C#", ".NET", "MVC", "ASP.NET Core", "Clean Architecture"].map((t, idx) => /* @__PURE__ */ React.createElement("span", { key: idx, className: "font-mono text-[11px] text-[#00ff88] border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.05)] px-2.5 py-1 rounded-md" }, t)))), /* @__PURE__ */ React.createElement("div", { className: "reveal group relative overflow-hidden rounded-2xl border border-[#0c2719] p-[30px] hover:border-[#103a26] hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,255,136,.35)] transition-all flex flex-col justify-between min-h-[250px]", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("span", { className: "absolute top-0 left-0 w-full h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300", style: { background: "linear-gradient(90deg,#00ff88,transparent)" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-[42px] h-[42px] border border-[#103a26] rounded-[10px] grid place-items-center text-[#00ff88] text-xl bg-[rgba(0,255,136,.04)]" }, "\u{1F3A8}"), /* @__PURE__ */ React.createElement("h3", { className: "text-[19px] text-[#eafff5] font-disp font-bold" }, "Frontend & Aray\xFCz")), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#74998a] leading-[1.7] mb-6" }, "Kullan\u0131c\u0131 deneyimi y\xFCksek, h\u0131zl\u0131 ve modern web aray\xFCzleri geli\u015Ftirmek i\xE7in gerekli teknolojiler.")), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, ["HTML5", "CSS3 / Tailwind", "JavaScript (ES6+)", "React", "Next.js"].map((t, idx) => /* @__PURE__ */ React.createElement("span", { key: idx, className: "font-mono text-[11px] text-[#00ff88] border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.05)] px-2.5 py-1 rounded-md" }, t)))), /* @__PURE__ */ React.createElement("div", { className: "reveal group relative overflow-hidden rounded-2xl border border-[#0c2719] p-[30px] hover:border-[#103a26] hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,255,136,.35)] transition-all flex flex-col justify-between min-h-[250px]", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("span", { className: "absolute top-0 left-0 w-full h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300", style: { background: "linear-gradient(90deg,#00ff88,transparent)" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-[42px] h-[42px] border border-[#103a26] rounded-[10px] grid place-items-center text-[#00ff88] text-xl bg-[rgba(0,255,136,.04)]" }, "\u{1F680}"), /* @__PURE__ */ React.createElement("h3", { className: "text-[19px] text-[#eafff5] font-disp font-bold" }, "DevOps & Bulut")), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#74998a] leading-[1.7] mb-6" }, "Projeleri containerize etmek, \xF6l\xE7eklemek ve y\xFCksek performansl\u0131 veri/haf\u0131za y\xF6netimi sa\u011Flamak.")), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, ["Docker", "Kubernetes", "Redis", "SQL Server", "PostgreSQL"].map((t, idx) => /* @__PURE__ */ React.createElement("span", { key: idx, className: "font-mono text-[11px] text-[#00ff88] border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.05)] px-2.5 py-1 rounded-md" }, t)))), /* @__PURE__ */ React.createElement("div", { className: "reveal group relative overflow-hidden rounded-2xl border border-[#0c2719] p-[30px] hover:border-[#103a26] hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,255,136,.35)] transition-all flex flex-col justify-between min-h-[250px]", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("span", { className: "absolute top-0 left-0 w-full h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300", style: { background: "linear-gradient(90deg,#00ff88,transparent)" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-[42px] h-[42px] border border-[#103a26] rounded-[10px] grid place-items-center text-[#00ff88] text-xl bg-[rgba(0,255,136,.04)]" }, "\u{1F310}"), /* @__PURE__ */ React.createElement("h3", { className: "text-[19px] text-[#eafff5] font-disp font-bold" }, "Sistem Tasar\u0131m\u0131")), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#74998a] leading-[1.7] mb-6" }, "Y\xFCksek trafikli, asenkron ve servis tabanl\u0131 kurumsal mimari tasar\u0131mlar\u0131 ve entegrasyonlar.")), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, ["Microservices", "RabbitMQ", "System Design", "Event-Driven Arch"].map((t, idx) => /* @__PURE__ */ React.createElement("span", { key: idx, className: "font-mono text-[11px] text-[#00ff88] border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.05)] px-2.5 py-1 rounded-md" }, t))))))), /* @__PURE__ */ React.createElement("section", { className: "py-[108px]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1280px] mx-auto px-8" }, /* @__PURE__ */ React.createElement("div", { className: "text-center max-w-[640px] mx-auto mb-14 reveal" }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[13px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center justify-center gap-2.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#5c8a74] font-bold" }, "//"), " 4. E\u011Fitim S\xFCreci"), /* @__PURE__ */ React.createElement("h2", { className: "text-[clamp(28px,4vw,42px)] text-[#eafff5] mt-4" }, "Mentorluk S\xFCreci Nas\u0131l \u0130\u015Fliyor?"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] mt-4 text-[15px]" }, "Kay\u0131ttan m\xFClakat a\u015Famas\u0131na kadar, her ad\u0131mda yan\u0131n\u0131zda olan planl\u0131 ve disiplinli \xF6\u011Frenme s\xFCreci.")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, [
      { n: "01", h: "Tan\u0131\u015Fma G\xF6r\xFC\u015Fmesi", p: "Hedeflerinizi, mevcut durumunuzu ve beklentilerinizi de\u011Ferlendirdi\u011Fimiz 15 dakikal\u0131k \xFCcretsiz \xF6n g\xF6r\xFC\u015Fme." },
      { n: "02", h: "Seviye Analizi", p: "Yaz\u0131l\u0131m bilginizi ve algoritma yetene\u011Finizi \xF6l\xE7erek ba\u015Flang\u0131\xE7 noktan\u0131z\u0131 tam olarak belirleriz." },
      { n: "03", h: "Ki\u015Fisel Yol Haritas\u0131", p: "Hedeflerinize ve seviyenize uygun, ad\u0131m ad\u0131m ilerleyece\u011Finiz size \xF6zel e\u011Fitim plan\u0131n\u0131 \xE7\u0131kart\u0131r\u0131z." },
      { n: "04", h: "Haftal\u0131k Birebir Dersler", p: "Haftal\u0131k canl\u0131 derslerde konular\u0131 mentor e\u015Fli\u011Finde klavye ba\u015F\u0131nda interaktif olarak i\u015Fleriz." },
      { n: "05", h: "\xD6dev & Proje Geli\u015Ftirme", p: "Kurumsal mimari standartlar\u0131nda \xF6devler \xE7\xF6zer, portf\xF6y\xFCn\xFCz i\xE7in \xE7al\u0131\u015Fan canl\u0131 projeler kodlars\u0131n\u0131z." },
      { n: "06", h: "Kariyer & M\xFClakat Deste\u011Fi", p: "E\u011Fitim sonunda CV haz\u0131rlama, mockup m\xFClakatlar ve do\u011Frudan Yusuf \u0130slam Yetkin'den i\u015F referans\u0131 al\u0131rs\u0131n\u0131z." }
    ].map((step, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, className: "reveal group relative overflow-hidden rounded-2xl border border-[#0c2719] p-[30px] hover:border-[#103a26] hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,255,136,.35)] transition-all flex flex-col justify-between min-h-[220px]", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("span", { className: "absolute top-0 left-0 w-full h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300", style: { background: "linear-gradient(90deg,#00ff88,transparent)" } }), /* @__PURE__ */ React.createElement("div", { className: "absolute top-5 right-6 font-mono text-2xl font-bold text-[rgba(0,255,136,0.08)]" }, step.n), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "w-9 h-9 border border-[#103a26] rounded-lg grid place-items-center text-[#00ff88] font-mono font-bold bg-[rgba(0,255,136,.02)] mb-5" }, step.n), /* @__PURE__ */ React.createElement("h3", { className: "text-lg text-[#eafff5] font-disp font-bold mb-2.5" }, step.h), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#74998a] leading-[1.7]" }, step.p))))))), /* @__PURE__ */ React.createElement("section", { className: "py-[108px]", style: { background: "linear-gradient(180deg,#020806,#04100a)" } }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1280px] mx-auto px-8" }, /* @__PURE__ */ React.createElement("div", { className: "text-center max-w-[640px] mx-auto mb-12 reveal" }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[13px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center justify-center gap-2.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#5c8a74] font-bold" }, "//"), " Topluluk"), /* @__PURE__ */ React.createElement("h2", { className: "text-[clamp(28px,4vw,42px)] text-[#eafff5] mt-4" }, "Klavyenin Ba\u015F\u0131na Ge\xE7enler Ne Diyor?")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-[18px]" }, testimonials.map(
      (q, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "reveal bg-[#07150e] border border-[#0c2719] rounded-2xl p-[30px]", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("div", { className: "font-disp text-[54px] leading-[.4] text-[#00ff88] opacity-35 h-[26px]" }, "\u201D"), /* @__PURE__ */ React.createElement("p", { className: "text-[14.5px] text-[#cdeede] leading-[1.75] my-[14px] mb-[22px]" }, q.text), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "w-[42px] h-[42px] rounded-full grid place-items-center text-[#5cffba] font-bold text-[15px] border border-[#103a26]", style: { background: "linear-gradient(135deg,#0a3a24,#052b18)" } }, q.av), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-sm text-[#eafff5] font-medium" }, q.name), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-[#74998a]" }, q.role))))
    )))), /* @__PURE__ */ React.createElement("section", { className: "relative overflow-hidden border-y border-[#0c2719]" }, /* @__PURE__ */ React.createElement("div", { className: "grid-floor !opacity-50", style: { animation: "none" } }), /* @__PURE__ */ React.createElement("div", { className: "absolute top-[-12%] left-1/2 -translate-x-1/2 w-[900px] h-[560px] z-0 pointer-events-none opacity-70", style: { background: "radial-gradient(ellipse at center,rgba(0,255,136,.16),transparent 62%)" } }), /* @__PURE__ */ React.createElement("div", { className: "max-w-[1280px] mx-auto px-8 relative z-[2] text-center py-24 reveal" }, /* @__PURE__ */ React.createElement("h2", { className: "text-[clamp(32px,5vw,56px)] text-[#eafff5] mb-[18px]" }, "Yaz\u0131l\u0131m ", /* @__PURE__ */ React.createElement("em", { className: "not-italic text-[#00ff88] drop-shadow-[0_0_30px_rgba(0,255,136,.4)]" }, "Kariyerini"), " Ba\u015Flat."), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] max-w-[520px] mx-auto mb-[34px] text-[15.5px]" }, "Ki\u015Fiye \xF6zel e\u011Fitim program\u0131, bire bir mentorluk deste\u011Fi ve ger\xE7ek projelerle yaz\u0131l\u0131m d\xFCnyas\u0131na g\xFC\xE7l\xFC bir ad\u0131m at\u0131n. Hemen kaydolun ve yolculu\u011Funuzu ba\u015Flat\u0131n."), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 justify-center flex-wrap" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setShowQuiz(true), className: "font-mono text-[15px] font-bold text-[#021008] bg-[#00ff88] px-[30px] py-4 clip-btn hover:shadow-[0_0_28px_-4px_var(--glow)] transition-all" }, "\xDCcretsiz \xD6n G\xF6r\xFC\u015Fme Planla \u2192"), /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("pricing"), className: "font-mono text-[15px] text-[#cdeede] px-[30px] py-4 border border-[#103a26] hover:border-[#00ff88] hover:text-[#00ff88] transition-colors" }, "E\u011Fitimleri \u0130ncele")))), /* @__PURE__ */ React.createElement(Footer, { navigate }), showQuiz && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-[150] flex items-center justify-center p-4", onClick: () => setShowQuiz(false) }, /* @__PURE__ */ React.createElement("div", { className: "border border-[#103a26] rounded-2xl max-w-[500px] w-full overflow-hidden shadow-[0_0_50px_rgba(0,255,136,0.15)] flex flex-col bg-[#020806]", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { className: "bg-[#04100a] border-b border-[#103a26] px-6 py-4 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "font-disp font-bold text-xs text-[#00ff88] tracking-widest uppercase" }, "\u26A1 E\u011Fitim Program\u0131 Olu\u015Fturucu"), /* @__PURE__ */ React.createElement("button", { className: "bg-none border-none text-[#74998a] hover:text-white font-mono cursor-pointer text-sm", onClick: () => setShowQuiz(false) }, "[X]")), /* @__PURE__ */ React.createElement("div", { className: "w-full bg-[#0c2719] h-[3px]" }, /* @__PURE__ */ React.createElement("div", { className: "bg-[#00ff88] h-full transition-all duration-300", style: { width: `${quizStep / 5 * 100}%` } })), /* @__PURE__ */ React.createElement("div", { className: "p-6 md:p-8 text-left" }, quizStep === 1 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-disp font-bold text-base text-[#eafff5] mb-4" }, "// Soru 1: Seviyeniz nedir?"), ["S\u0131f\u0131rdan Ba\u015Fl\u0131yorum", "Temelim Var", "Profesyonelle\u015Fmek \u0130stiyorum"].map((opt) => /* @__PURE__ */ React.createElement("button", { key: opt, className: "w-full text-left p-4 rounded-xl border border-[#103a26] bg-transparent text-[#cdeede] font-mono text-xs cursor-pointer hover:border-[#00ff88] hover:bg-[#00ff88]/5 transition-all mb-3", onClick: () => selectQuizOption(1, opt) }, opt))), quizStep === 2 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-disp font-bold text-base text-[#eafff5] mb-4" }, "// Soru 2: Hedefiniz nedir?"), ["Yaz\u0131l\u0131mc\u0131 Olarak \u0130\u015Fe Girmek", "Kendi Projemi Yazmak", "S\u0131navlara Haz\u0131rl\u0131k"].map((opt) => /* @__PURE__ */ React.createElement("button", { key: opt, className: "w-full text-left p-4 rounded-xl border border-[#103a26] bg-transparent text-[#cdeede] font-mono text-xs cursor-pointer hover:border-[#00ff88] hover:bg-[#00ff88]/5 transition-all mb-3", onClick: () => selectQuizOption(2, opt) }, opt)), /* @__PURE__ */ React.createElement("button", { className: "bg-none border-none text-[#74998a] hover:text-[#00ff88] font-mono text-[11px] cursor-pointer mt-4", onClick: () => setQuizStep(1) }, "\u2190 Geri")), quizStep === 3 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-disp font-bold text-base text-[#eafff5] mb-4" }, "// Soru 3: Haftada ka\xE7 saat ay\u0131rabilirsiniz?"), ["2-4 Saat", "5-10 Saat", "10+ Saat"].map((opt) => /* @__PURE__ */ React.createElement("button", { key: opt, className: "w-full text-left p-4 rounded-xl border border-[#103a26] bg-transparent text-[#cdeede] font-mono text-xs cursor-pointer hover:border-[#00ff88] hover:bg-[#00ff88]/5 transition-all mb-3", onClick: () => selectQuizOption(3, opt) }, opt)), /* @__PURE__ */ React.createElement("button", { className: "bg-none border-none text-[#74998a] hover:text-[#00ff88] font-mono text-[11px] cursor-pointer mt-4", onClick: () => setQuizStep(2) }, "\u2190 Geri")), quizStep === 4 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-disp font-bold text-base text-[#eafff5] mb-4" }, "// \xD6n G\xF6r\xFC\u015Fme Bilgileri"), /* @__PURE__ */ React.createElement("form", { onSubmit: handleQuizSubmit, className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-mono text-[10px] text-[#74998a] block mb-1" }, "Ad Soyad *"), /* @__PURE__ */ React.createElement("input", { type: "text", value: quizName, onChange: (e) => setQuizName(e.target.value), required: true, placeholder: "Yusuf \u0130slam", className: "w-full bg-[#04100a] border border-[#103a26] rounded-lg px-3 py-2 text-[#cdeede] font-mono text-xs focus:border-[#00ff88] focus:outline-none" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-mono text-[10px] text-[#74998a] block mb-1" }, "Ek Not / Mesaj (Opsiyonel)"), /* @__PURE__ */ React.createElement("textarea", { value: quizNotes, onChange: (e) => setQuizNotes(e.target.value), placeholder: "Eklemek istedi\u011Finiz notlar...", rows: 2, className: "w-full bg-[#04100a] border border-[#103a26] rounded-lg px-3 py-2 text-[#cdeede] font-mono text-xs focus:border-[#00ff88] focus:outline-none resize-none" })), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "w-full font-mono font-bold text-xs text-[#021008] bg-[#00ff88] py-3 rounded-xl cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all uppercase tracking-wider" }, "\xD6n G\xF6r\xFC\u015Fme Randevusu Al \u2794")), /* @__PURE__ */ React.createElement("button", { className: "bg-none border-none text-[#74998a] hover:text-[#00ff88] font-mono text-[11px] cursor-pointer mt-4", onClick: () => setQuizStep(3) }, "\u2190 Geri")), quizStep === 5 && /* @__PURE__ */ React.createElement("div", { className: "text-center py-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 rounded-full bg-[#00ff88]/10 border border-[#00ff88] flex items-center justify-center mx-auto mb-4 text-[#00ff88] text-xl font-bold" }, "\u2713"), /* @__PURE__ */ React.createElement("h3", { className: "font-disp font-bold text-base text-[#eafff5] mb-3" }, "Sana \xD6zel C# .NET E\u011Fitim Program\u0131 \xC7\u0131kar\u0131ld\u0131!"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#74998a] mb-6 leading-relaxed" }, "Detaylar\u0131 konu\u015Fmak ve kariyer plan\u0131n\u0131z\u0131 netle\u015Ftirmek i\xE7in 15 Dk \xFCcretsiz \xF6n g\xF6r\xFC\u015Fmeniz rezerve edildi. WhatsApp \xFCzerinden g\xF6r\xFC\u015Fmeyi ba\u015Flatabilirsiniz."), /* @__PURE__ */ React.createElement("button", { className: "w-full font-mono font-bold text-xs text-[#021008] bg-[#00ff88] py-3.5 rounded-xl cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all flex items-center justify-center gap-2", onClick: triggerWhatsAppRedirect }, "\u{1F4AC} WhatsApp ile G\xF6r\xFC\u015Fmeyi Ba\u015Flat"), /* @__PURE__ */ React.createElement("button", { className: "bg-none border-none text-[#74998a] hover:text-[#00ff88] font-mono text-[11px] cursor-pointer mt-6", onClick: () => setShowQuiz(false) }, "Pencereyi Kapat"))))));
  };
  var BlogListPage = ({ navigate }) => {
    const [search, setSearch] = useState("");
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    useReveal();
    useEffect(() => {
      fetch("/api/blogs").then((res) => res.json()).then((data) => {
        if (Array.isArray(data)) {
          setBlogs(data);
        }
        setLoading(false);
      }).catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
    }, []);
    const filtered = blogs.filter(
      (b) => b.title.toLowerCase().includes(search.toLowerCase()) || b.category.toLowerCase().includes(search.toLowerCase())
    );
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, { navigate }), /* @__PURE__ */ React.createElement("section", { className: "py-20 border-b border-[#0c2719] relative overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] z-0 pointer-events-none", style: { background: "radial-gradient(ellipse at center,rgba(0,255,136,.10),transparent 62%)" } }), /* @__PURE__ */ React.createElement("div", { className: "max-w-[1280px] mx-auto px-8 relative z-[2]" }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[13px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center gap-2.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#5c8a74] font-bold" }, "//"), " Blog"), /* @__PURE__ */ React.createElement("h1", { className: "text-[clamp(36px,5vw,56px)] text-[#eafff5] my-5" }, "C# & .NET Core Backend Makaleleri"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] max-w-[600px] mb-10" }, "C# programlama, .NET Core mimarileri, Onion Architecture, Mikroservisler ve veritaban\u0131 tasar\u0131m\u0131na dair en g\xFCncel i\xE7erikler."), /* @__PURE__ */ React.createElement("div", { className: "relative max-w-[480px]" }, /* @__PURE__ */ React.createElement("input", { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Makale veya kategori ara...", className: "w-full bg-[#07150e] border border-[#103a26] rounded-lg pl-4 pr-10 py-3 text-[#cdeede] placeholder-[#3d564b] focus:border-[#00ff88] focus:outline-none transition-colors font-mono text-sm" }), /* @__PURE__ */ React.createElement("span", { className: "absolute right-4 top-1/2 -translate-y-1/2 text-[#5c8a74]" }, "\u2315")))), /* @__PURE__ */ React.createElement("section", { className: "py-20" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1280px] mx-auto px-8 grid gap-5" }, loading ? /* @__PURE__ */ React.createElement("div", { className: "py-20 text-center text-[#74998a]" }, "Makaleler y\xFCkleniyor...") : filtered.map(
      (b) => /* @__PURE__ */ React.createElement("article", { key: b.id, onClick: () => navigate("blog-detail", b), className: "reveal group cursor-pointer border border-[#0c2719] rounded-xl p-8 hover:border-[#00ff88] hover:-translate-y-1 transition-all", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-start mb-4" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs text-[#5cffba] border border-[#103a26] bg-[rgba(0,255,136,.04)] px-2.5 py-1 rounded-full" }, b.category), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-[#5c8a74]" }, b.readTime)), /* @__PURE__ */ React.createElement("h2", { className: "text-2xl text-[#eafff5] mb-3 group-hover:text-[#00ff88] transition-colors" }, b.title), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] mb-6 text-[15px]" }, b.excerpt), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center text-xs text-[#5c8a74]" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("span", null, b.author), /* @__PURE__ */ React.createElement("span", null, "\u2022"), /* @__PURE__ */ React.createElement("span", null, b.date)), /* @__PURE__ */ React.createElement("span", { className: "group-hover:text-[#00ff88] transition-colors" }, "Oku \u2192")))
    ), !loading && filtered.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-center text-[#74998a] py-10" }, "Sonu\xE7 bulunamad\u0131."))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  };
  var BlogDetailPage = ({ blog, navigate }) => {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [related, setRelated] = useState([]);
    useReveal();
    useEffect(() => {
      if (blog && blog.slug) {
        setLoading(true);
        fetch(`/api/blogs/${blog.slug}`).then((res) => {
          if (!res.ok) throw new Error("Blog not found");
          return res.json();
        }).then((data) => {
          setDetail(data);
          setLoading(false);
        }).catch((err) => {
          console.error("Error fetching blog details:", err);
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    }, [blog]);
    useEffect(() => {
      if (blog) {
        fetch("/api/blogs").then((res) => res.json()).then((data) => {
          if (Array.isArray(data)) {
            const filtered = data.filter((b) => b.slug !== blog.slug).slice(0, 2);
            setRelated(filtered);
          }
        }).catch((err) => console.error("Error fetching related blogs:", err));
      }
    }, [blog]);
    if (!blog) return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, { navigate }), /* @__PURE__ */ React.createElement("div", { className: "py-32 text-center text-[#74998a]" }, "Makale bulunamad\u0131."), /* @__PURE__ */ React.createElement(Footer, { navigate }));
    if (loading) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, { navigate }), /* @__PURE__ */ React.createElement("div", { className: "py-32 text-center text-[#74998a]" }, /* @__PURE__ */ React.createElement("div", { className: "w-10 h-10 border-4 border-[#00ff88] border-t-transparent rounded-full animate-spin mx-auto mb-4" }), "Makale y\xFCkleniyor..."), /* @__PURE__ */ React.createElement(Footer, { navigate }));
    }
    const displayBlog = detail || blog;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, { navigate }), /* @__PURE__ */ React.createElement("article", { className: "py-20" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[760px] mx-auto px-8" }, /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("blogs"), className: "text-[#00ff88] hover:text-[#5cffba] transition-colors text-sm mb-8" }, "\u2190 T\xFCm Makalelere D\xF6n"), /* @__PURE__ */ React.createElement("header", { className: "mb-12" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs text-[#5cffba] border border-[#103a26] bg-[rgba(0,255,136,.04)] px-2.5 py-1 rounded-full" }, displayBlog.category), /* @__PURE__ */ React.createElement("h1", { className: "text-[clamp(32px,5vw,52px)] text-[#eafff5] my-6" }, displayBlog.title), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4 text-sm text-[#74998a]" }, /* @__PURE__ */ React.createElement("span", null, displayBlog.author), /* @__PURE__ */ React.createElement("span", null, "\u2022"), /* @__PURE__ */ React.createElement("span", null, displayBlog.date), /* @__PURE__ */ React.createElement("span", null, "\u2022"), /* @__PURE__ */ React.createElement("span", null, displayBlog.readTime))), /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("p", { className: "text-[#cdeede] text-lg leading-relaxed" }, displayBlog.excerpt), /* @__PURE__ */ React.createElement("div", { className: "border border-[#103a26] rounded-lg p-6 bg-[#07150e] font-mono text-sm text-[#5cffba] leading-relaxed" }, "// Bu makale YTK Academy'deki kodlama odalar\u0131yla uyumludur.", /* @__PURE__ */ React.createElement("br", null), "// \xD6\u011Frendiklerini hemen uygulamak i\xE7in platformu ziyaret et."), loading ? /* @__PURE__ */ React.createElement("div", { className: "py-10 text-center text-[#74998a]" }, "\u0130\xE7erik y\xFCkleniyor...") : displayBlog.content ? /* @__PURE__ */ React.createElement("div", { className: "blog-content text-[#b8d5c8] leading-relaxed text-[16px]", dangerouslySetInnerHTML: { __html: displayBlog.content } }) : /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] leading-relaxed" }, "Bu makalenin detay i\xE7eri\u011Fi bulunmamaktad\u0131r.")), /* @__PURE__ */ React.createElement("div", { className: "border-t border-[#0c2719] mt-14 pt-12" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl text-[#eafff5] mb-8" }, "\u0130lgili Makaleler"), /* @__PURE__ */ React.createElement("div", { className: "grid gap-4" }, related.map(
      (p) => /* @__PURE__ */ React.createElement("div", { key: p.id, onClick: () => navigate("blog-detail", p), className: "cursor-pointer group bg-[#07150e] border border-[#0c2719] rounded-lg p-6 hover:border-[#00ff88] hover:bg-[#0a1d13] transition-all" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs text-[#5cffba] border border-[#103a26] bg-[rgba(0,255,136,.04)] px-2.5 py-1 rounded-full" }, p.category), /* @__PURE__ */ React.createElement("h3", { className: "text-lg text-[#eafff5] my-3 group-hover:text-[#00ff88] transition-colors" }, p.title), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-[#5c8a74] group-hover:text-[#00ff88] transition-colors" }, "Oku \u2192"))
    ), related.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm" }, "\u0130lgili ba\u015Fka makale bulunamad\u0131."))), /* @__PURE__ */ React.createElement("div", { className: "mt-12 rounded-xl border border-[#103a26] p-10 text-center", style: { background: "linear-gradient(90deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl text-[#eafff5] mb-4" }, "Bu Konuyu Pratik Yapmak \u0130ster misin?"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] mb-6 max-w-[520px] mx-auto" }, "YTK Academy'de bu makaleyle ilgili uygulamal\u0131 kodlama odalar\u0131 seni bekliyor. Hemen ba\u015Fla, taray\u0131c\u0131 \xFCzerinden kodunu yaz ve test et."), /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("rooms"), className: "font-mono text-sm font-bold text-[#021008] bg-[#00ff88] px-7 py-3 clip-btn hover:shadow-[0_0_28px_-4px_var(--glow)] transition-all" }, "Kodlama Odalar\u0131n\u0131 G\xF6r \u2192")))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  };
  var RoomsPage = ({ navigate }) => {
    const [selected, setSelected] = useState(null);
    useReveal();
    const allRooms = (window.SK_ALL_ROOMS || []).map((r) => ({ ...r }));
    const shuffled = [...allRooms].sort(() => Math.random() - 0.5);
    const dc = { "Ba\u015Flang\u0131\xE7": "text-[#5cffba] bg-[rgba(92,255,186,.1)]", "Kolay": "text-[#5cffba] bg-[rgba(92,255,186,.1)]", "Orta": "text-[#ffd166] bg-[rgba(255,209,102,.1)]", "\u0130leri": "text-[#ff8c42] bg-[rgba(255,140,66,.1)]", "Zor": "text-[#ff8c42] bg-[rgba(255,140,66,.1)]", "Uzman": "text-[#ff2e88] bg-[rgba(255,46,136,.1)]" };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, { navigate }), /* @__PURE__ */ React.createElement("section", { className: "py-20 border-b border-[#0c2719] relative overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] z-0 pointer-events-none", style: { background: "radial-gradient(ellipse at center,rgba(0,255,136,.10),transparent 62%)" } }), /* @__PURE__ */ React.createElement("div", { className: "max-w-[1280px] mx-auto px-8 relative z-[2]" }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[13px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center gap-2.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#5c8a74] font-bold" }, "//"), " Kodlama Odalar\u0131"), /* @__PURE__ */ React.createElement("h1", { className: "text-[clamp(36px,5vw,56px)] text-[#eafff5] my-5" }, "C# & .NET Core Kodlama Odalar\u0131"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] max-w-[600px]" }, allRooms.length, " adet uygulamal\u0131 kodlama odas\u0131yla s\u0131f\u0131rdan uzman seviyesine kadar \xE7\u0131kman\u0131 sa\u011Flayacak interaktif g\xF6revler. Hemen ba\u015Fla!"))), /* @__PURE__ */ React.createElement("section", { className: "py-20" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-5" }, shuffled.map(
      (r) => /* @__PURE__ */ React.createElement("div", { key: r.id, onClick: () => setSelected(r), className: "reveal group cursor-pointer border border-[#0c2719] rounded-xl p-8 hover:border-[#00ff88] hover:shadow-[0_24px_50px_-28px_rgba(0,255,136,.35)] transition-all", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between mb-4 gap-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-2" }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#5c8a74]" }, r.id.toUpperCase()), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-[#5c8a74]" }, "\xB7"), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-[#5c8a74]" }, r.cat)), /* @__PURE__ */ React.createElement("h2", { className: "text-xl text-[#eafff5] group-hover:text-[#00ff88] transition-colors mb-2" }, r.name), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#74998a]" }, r.desc)), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold px-3 py-1.5 rounded whitespace-nowrap " + (dc[r.difficulty] || dc["Orta"]) }, r.difficulty)), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between pt-4 border-t border-[#0c2719] text-xs text-[#5c8a74]" }, /* @__PURE__ */ React.createElement("span", null, "\u25C6 ", r.points, " puan"), /* @__PURE__ */ React.createElement("span", { className: "group-hover:text-[#00ff88] transition-colors" }, "Detay \u2192")))
    ))), selected && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[70] p-4", onClick: () => setSelected(null) }, /* @__PURE__ */ React.createElement("div", { className: "border border-[#103a26] rounded-xl max-w-[520px] w-full p-10 shadow-[0_0_60px_-20px_var(--glow)]", style: { background: "#020806" }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#5c8a74]" }, selected.id.toUpperCase(), " \xB7 ", selected.cat), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl text-[#eafff5] mt-2 mb-4" }, selected.name), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] mb-6" }, selected.desc), /* @__PURE__ */ React.createElement("div", { className: "space-y-3 mb-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between p-4 bg-[#07150e] border border-[#0c2719] rounded-lg" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm text-[#74998a]" }, "Zorluk Seviyesi"), /* @__PURE__ */ React.createElement("span", { className: "font-bold text-sm px-3 py-1 rounded " + (dc[selected.difficulty] || dc["Orta"]) }, selected.difficulty)), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between p-4 bg-[#07150e] border border-[#0c2719] rounded-lg" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm text-[#74998a]" }, "Kazan\u0131lacak Puan"), /* @__PURE__ */ React.createElement("span", { className: "font-bold text-[#00ff88]" }, "\u25C6 ", selected.points)), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between p-4 bg-[#07150e] border border-[#0c2719] rounded-lg" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm text-[#74998a]" }, "Kategori"), /* @__PURE__ */ React.createElement("span", { className: "font-bold text-[#eafff5]" }, selected.cat))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3" }, /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("register"), className: "flex-1 font-mono text-sm font-bold text-[#021008] bg-[#00ff88] py-3 clip-btn hover:shadow-[0_0_28px_-4px_var(--glow)] transition-all" }, "Kay\u0131t Ol & Ba\u015Fla"), /* @__PURE__ */ React.createElement("button", { onClick: () => setSelected(null), className: "flex-1 border border-[#103a26] text-[#cdeede] py-3 rounded-lg hover:border-[#00ff88] hover:text-[#00ff88] transition-colors text-sm" }, "Kapat")))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  };
  var AuthShell = ({ children }) => /* @__PURE__ */ React.createElement("section", { className: "min-h-[calc(100vh-72px)] flex items-center justify-center py-20 px-4 relative overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] z-0 pointer-events-none", style: { background: "radial-gradient(ellipse at center,rgba(0,255,136,.08),transparent 62%)" } }), /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-[420px] relative z-[2]" }, children));
  var Field = ({ label, hint, ...props }) => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-[#cdeede] mb-2" }, label), /* @__PURE__ */ React.createElement("input", { ...props, className: "w-full bg-[#07150e] border border-[#103a26] rounded-lg px-4 py-3 text-[#cdeede] placeholder-[#3d564b] focus:border-[#00ff88] focus:outline-none transition-colors font-mono text-sm" }), hint && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#5c8a74] mt-2" }, hint));
  var LoginPage = ({ navigate }) => {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);
    const handleLogin = async (userEmail, userPassword) => {
      setLoading(true);
      setErr("");
      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: userEmail, pw: userPassword })
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Giri\u015F yap\u0131lamad\u0131.");
        }
        localStorage.removeItem("sk_solved_rooms");
        localStorage.removeItem("sk_room_progress");
        localStorage.removeItem("sk_unlocked_hints");
        window.__SK_USER_FETCHED = false;
        localStorage.setItem("sk_token", data.token);
        localStorage.setItem("sk_user_name", data.user.name);
        localStorage.setItem("sk_user_points", data.user.points);
        localStorage.setItem("sk_user_solved", data.user.solved_count);
        localStorage.setItem("sk_user_level", data.user.level);
        localStorage.setItem("sk_user_rank", data.user.rank_val);
        localStorage.setItem("sk_user_badges", data.user.badges !== void 0 ? data.user.badges : 0);
        localStorage.setItem("sk_user_streak", data.user.streak !== void 0 ? data.user.streak : 1);
        localStorage.setItem("sk_name_changed", data.user.name_changed ? "1" : "0");
        localStorage.setItem("sk_user_is_admin", data.user.is_admin ? "true" : "false");
        localStorage.setItem("sk_user_is_banned", data.user.is_banned ? "true" : "false");
        window.dispatchEvent(new Event("sk_user_update"));
        navigate("dashboard");
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    };
    const submit = (e) => {
      e.preventDefault();
      if (!email || !pw) {
        setErr("T\xFCm alanlar\u0131 doldurunuz.");
        return;
      }
      handleLogin(email, pw);
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, { navigate }), /* @__PURE__ */ React.createElement(AuthShell, null, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-10" }, /* @__PURE__ */ React.createElement("span", { className: "w-[52px] h-[52px] border-[1.5px] border-[#00ff88] rounded-xl grid place-items-center text-[#00ff88] font-mono text-lg font-bold mx-auto mb-5 shadow-[0_0_24px_-4px_var(--glow)]" }, ">_"), /* @__PURE__ */ React.createElement("h1", { className: "text-4xl text-[#eafff5] mb-2" }, "Giri\u015F Yap"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm" }, "YTK Academy hesab\u0131na eri\u015Fim sa\u011Fla")), /* @__PURE__ */ React.createElement("form", { onSubmit: submit, className: "space-y-5" }, err && /* @__PURE__ */ React.createElement("div", { className: "bg-[rgba(255,46,136,.08)] border border-[#ff2e88]/50 rounded-lg p-3.5" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#ff2e88]" }, err)), /* @__PURE__ */ React.createElement(Field, { label: "E-posta Adresi", type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "seni@example.com", disabled: loading }), /* @__PURE__ */ React.createElement(Field, { label: "\u015Eifre", type: "password", value: pw, onChange: (e) => setPw(e.target.value), placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", disabled: loading }), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between text-sm" }, /* @__PURE__ */ React.createElement("label", { className: "flex items-center gap-2 text-[#74998a]" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", className: "w-4 h-4 accent-[#00ff88]" }), " Beni hat\u0131rla"), /* @__PURE__ */ React.createElement("a", { href: "#", className: "text-[#00ff88] hover:text-[#5cffba] transition-colors" }, "\u015Eifremi Unuttum?")), /* @__PURE__ */ React.createElement("button", { type: "submit", disabled: loading, className: "w-full font-mono font-bold text-[#021008] bg-[#00ff88] py-3 rounded-lg hover:shadow-[0_0_28px_-4px_var(--glow)] transition-all disabled:opacity-50" }, loading ? "L\xFCtfen bekleyin..." : "Giri\u015F Yap")), /* @__PURE__ */ React.createElement("p", { className: "text-center text-[#74998a] text-sm mt-7" }, "Hesab\u0131n yok mu? ", /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("register"), className: "text-[#00ff88] hover:text-[#5cffba] transition-colors font-medium" }, "Kay\u0131t Ol"))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  };
  var RegisterPage = ({ navigate, data }) => {
    const [f, setF] = useState({ name: "", email: "", pw: "", pw2: "", terms: false });
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);
    const ch = (e) => {
      const { name, value, type, checked } = e.target;
      setF((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
    };
    const submit = async (e) => {
      e.preventDefault();
      if (!f.name || !f.email || !f.pw || !f.pw2) return setErr("T\xFCm alanlar\u0131 doldurunuz.");
      if (f.pw !== f.pw2) return setErr("\u015Eifreler e\u015Fle\u015Fmiyor.");
      if (f.pw.length < 8) return setErr("\u015Eifre en az 8 karakter olmal\u0131d\u0131r.");
      if (!f.terms) return setErr("\u015Eartlar\u0131 ve ko\u015Fullar\u0131 kabul etmelisiniz.");
      setLoading(true);
      setErr("");
      try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: f.name, email: f.email, pw: f.pw })
        });
        const data2 = await res.json();
        if (!res.ok) {
          throw new Error(data2.error || "Kay\u0131t olunamad\u0131.");
        }
        localStorage.removeItem("sk_solved_rooms");
        localStorage.removeItem("sk_room_progress");
        localStorage.removeItem("sk_unlocked_hints");
        window.__SK_USER_FETCHED = false;
        localStorage.setItem("sk_token", data2.token);
        localStorage.setItem("sk_user_name", data2.user.name);
        localStorage.setItem("sk_user_points", data2.user.points);
        localStorage.setItem("sk_user_solved", data2.user.solved_count);
        localStorage.setItem("sk_user_level", data2.user.level);
        localStorage.setItem("sk_user_rank", data2.user.rank_val);
        localStorage.setItem("sk_user_badges", data2.user.badges !== void 0 ? data2.user.badges : 0);
        localStorage.setItem("sk_user_streak", data2.user.streak !== void 0 ? data2.user.streak : 1);
        localStorage.setItem("sk_name_changed", "0");
        localStorage.setItem("sk_user_is_admin", data2.user.is_admin ? "true" : "false");
        localStorage.setItem("sk_user_is_banned", data2.user.is_banned ? "true" : "false");
        window.dispatchEvent(new Event("sk_user_update"));
        navigate("dashboard");
      } catch (e2) {
        setErr(e2.message);
      } finally {
        setLoading(false);
      }
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, { navigate }), /* @__PURE__ */ React.createElement(AuthShell, null, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-10" }, /* @__PURE__ */ React.createElement("span", { className: "w-[52px] h-[52px] border-[1.5px] border-[#00ff88] rounded-xl grid place-items-center text-[#00ff88] font-mono text-lg font-bold mx-auto mb-5 shadow-[0_0_24px_-4px_var(--glow)]" }, ">_"), /* @__PURE__ */ React.createElement("h1", { className: "text-4xl text-[#eafff5] mb-2" }, "Kay\u0131t Ol"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm" }, "YTK Academy'ye kat\u0131l ve C# & .NET Core backend geli\u015Ftiricisi ol")), (data && data.fromFreeBasic || window.__SK_REGISTER_INFO) && /* @__PURE__ */ React.createElement("div", { className: "bg-[rgba(0,255,136,.06)] border border-[#00ff88]/30 rounded-xl p-4 mb-6 text-center text-sm text-[#00ff88] font-mono leading-relaxed shadow-[0_0_15px_rgba(0,255,136,0.05)] animate-pulse" }, "\u{1F680} ", /* @__PURE__ */ React.createElement("strong", null, window.__SK_REGISTER_INFO || "Kay\u0131t olarak platformdaki \xFCcretsiz e\u011Fitimlere eri\u015Febilirsiniz!")), /* @__PURE__ */ React.createElement("form", { onSubmit: submit, className: "space-y-4" }, err && /* @__PURE__ */ React.createElement("div", { className: "bg-[rgba(255,46,136,.08)] border border-[#ff2e88]/50 rounded-lg p-3.5" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#ff2e88]" }, err)), /* @__PURE__ */ React.createElement(Field, { label: "Ad Soyad", type: "text", name: "name", value: f.name, onChange: ch, placeholder: "Ad\u0131n\u0131 Gir", disabled: loading }), /* @__PURE__ */ React.createElement(Field, { label: "E-posta Adresi", type: "email", name: "email", value: f.email, onChange: ch, placeholder: "seni@example.com", disabled: loading }), /* @__PURE__ */ React.createElement(Field, { label: "\u015Eifre", type: "password", name: "pw", value: f.pw, onChange: ch, placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", hint: "En az 8 karakter", disabled: loading }), /* @__PURE__ */ React.createElement(Field, { label: "\u015Eifreyi Onayla", type: "password", name: "pw2", value: f.pw2, onChange: ch, placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", disabled: loading }), /* @__PURE__ */ React.createElement("label", { className: "flex items-start gap-3" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", name: "terms", checked: f.terms, onChange: ch, className: "w-4 h-4 accent-[#00ff88] mt-1", disabled: loading }), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-[#74998a]" }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => navigate("terms"), className: "text-[#00ff88] hover:text-[#5cffba]" }, "Kullan\u0131m \u015Eartlar\u0131"), " ve ", /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => navigate("privacy"), className: "text-[#00ff88] hover:text-[#5cffba]" }, "Gizlilik Politikas\u0131"), "'n\u0131 kabul ediyorum.")), /* @__PURE__ */ React.createElement("button", { type: "submit", disabled: loading, className: "w-full font-mono font-bold text-[#021008] bg-[#00ff88] py-3 rounded-lg hover:shadow-[0_0_28px_-4px_var(--glow)] transition-all disabled:opacity-50" }, loading ? "Kay\u0131t Yap\u0131l\u0131yor..." : "Kay\u0131t Ol")), /* @__PURE__ */ React.createElement("p", { className: "text-center text-[#74998a] text-sm mt-7" }, "Zaten hesab\u0131n var m\u0131? ", /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("login"), className: "text-[#00ff88] hover:text-[#5cffba] transition-colors font-medium" }, "Giri\u015F Yap"))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  };
  Object.assign(window, { SKHeader: Header, SKFooter: Footer, SKAuthShell: AuthShell, SKField: Field, SKuseReveal: useReveal });
  var PAGES = window.__SK_PAGES = window.__SK_PAGES || {};
  Object.assign(PAGES, {
    home: HomePage,
    blogs: BlogListPage,
    "blog-detail": BlogDetailPage,
    rooms: RoomsPage,
    login: LoginPage,
    register: RegisterPage,
    product: window.SKProductDetailPage || (() => null)
  });
  var LiveChat = () => {
    const [open, setOpen] = useState(false);
    const [unread, setUnread] = useState(1);
    const [typing, setTyping] = useState(false);
    const [input, setInput] = useState("");
    const [msgs, setMsgs] = useState(
      [
        { me: false, t: "Selam! \u{1F44B} Ben Eyl\xFCl, YTK Academy canl\u0131 destek ekibinden. Bire bir yaz\u0131l\u0131m ment\xF6rl\xFC\u011F\xFC ve C# & .NET Core e\u011Fitimleri hakk\u0131nda sana nas\u0131l yard\u0131mc\u0131 olabilirim?" }
      ]
    );
    const bodyRef = useRef(null);
    useEffect(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }, [msgs, typing, open]);
    const quick = ["Nas\u0131l ba\u015Flar\u0131m?", "\xDCcretler ne kadar?", "Sertifika veriyor musunuz?", "Bir kodlama odas\u0131 a\xE7\u0131lm\u0131yor"];
    const replyFor = (q) => {
      const s = q.toLowerCase();
      if (s.includes("kurucu") || s.includes("yusuf") || s.includes("yetkin")) return "YTK Academy'nin kurucusu Yusuf \u0130slam Yetkin'dir. \u{1F4BB}";
      if (s.includes("fiyat") || s.includes("\xFCcret") || s.includes("para") || s.includes("ka\xE7 tl") || s.includes("sat\u0131n al") || s.includes("\xF6de")) return "\xDC\xE7 se\xE7ene\u011Fimiz var: 15 Dk. \xDCcretsiz \xD6n G\xF6r\xFC\u015Fme (0 TL), Tek Ders Ment\xF6rl\xFCk (1.500 TL) ve 10 Saatlik \u0130leri D\xFCzey Paket (20.000 TL). \u{1F49A}";
      if (s.includes("ba\u015Fla") || s.includes("nas\u0131l")) return 'Kay\u0131t olup, Laboratuvarlar sayfas\u0131ndan diledi\u011Finiz C# kodlama odas\u0131n\u0131 se\xE7ip "Ba\u015Flat" diyerek hemen ba\u015Flayabilirsiniz! \u{1F680}';
      if (s.includes("oda") || s.includes("laboratuvar") || s.includes("makine") || s.includes("lab")) return "C# & .NET Core, Web API ve Clean Architecture kategorilerinde kurulumsuz kodlama odalar\u0131m\u0131z bulunur. \xC7\xF6zerek ilerleyebilirsiniz. \u{1F50D}";
      if (s.includes("sertifika")) return "E\u011Fitim yollar\u0131n\u0131 tamamlad\u0131\u011F\u0131n\u0131zda CV'nize ekyleyebilece\u011Finiz do\u011Frulanabilir sertifikalar kazan\u0131rs\u0131n\u0131z. \u{1F396}\uFE0F";
      if (s.includes("a\xE7\u0131lm") || s.includes("hata") || s.includes("sorun") || s.includes("\xE7al\u0131\u015Fm")) return "\xD6nce kodlama odas\u0131n\u0131 s\u0131f\u0131rlamay\u0131 deneyin. Sorun devam ederse oda ismini bize iletin. \u{1F6E0}\uFE0F";
      return "Eyl\xFCl olarak size yard\u0131mc\u0131 olmaktan mutluluk duyar\u0131m. Bilmedi\u011Fim bir \u015Fey olursa, kurucumuz Yusuf ile do\u011Frudan WhatsApp \xFCzerinden konu\u015Fabilirsiniz: https://wa.me/905389351189?text=Merhaba%20YTK%20Academy%20hakk\u0131nda%20bir%20\u015Fey%20sormak%20istiyorum \u{1F642}";
    };
    const push = async (text) => {
      if (!text.trim()) return;
      const userMsg = { me: true, t: text };
      setMsgs((m) => [...m, userMsg]);
      setInput("");
      setTyping(true);
      try {
        const res = await fetch("/api/support/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: text,
            history: [...msgs, userMsg]
          })
        });
        if (!res.ok) throw new Error("API status: " + res.status);
        const data = await res.json();
        setTyping(false);
        setMsgs((m) => [...m, { me: false, t: data.reply }]);
        if (!open) setUnread((u) => u + 1);
      } catch (err) {
        console.warn("Chatbot API error, using client fallback:", err);
        setTyping(false);
        setMsgs((m) => [...m, { me: false, t: replyFor(text) }]);
        if (!open) setUnread((u) => u + 1);
      }
    };
    const toggle = () => {
      setOpen((o) => !o);
      setUnread(0);
    };
    return /* @__PURE__ */ React.createElement("div", { className: "fixed bottom-5 right-5 z-[90] font-mono" }, open && /* @__PURE__ */ React.createElement("div", { className: "mb-3 w-[350px] max-w-[calc(100vw-40px)] rounded-2xl border border-[#103a26] overflow-hidden shadow-[0_30px_70px_-20px_#000,0_0_50px_-20px_var(--glow)] flex flex-col", style: { height: "460px", background: "linear-gradient(170deg,#06140d,#040d08)" } }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 px-4 py-3.5 border-b border-[#0c2719] bg-black/25" }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("span", { className: "w-9 h-9 rounded-lg grid place-items-center text-[#5cffba] font-bold text-xs border border-[#103a26]", style: { background: "linear-gradient(135deg,#0a3a24,#052b18)" } }, "EY"), /* @__PURE__ */ React.createElement("span", { className: "absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#00ff88] border-2 border-[#06140d] shadow-[0_0_8px_#00ff88]" })), /* @__PURE__ */ React.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm text-[#eafff5] font-medium font-disp" }, "Canl\u0131 Destek"), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-[#00ff88] flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-[#00ff88]" }), "Eyl\xFCl \xB7 \xE7evrimi\xE7i")), /* @__PURE__ */ React.createElement("button", { onClick: toggle, "aria-label": "Kapat", className: "w-7 h-7 grid place-items-center rounded-lg text-[#74998a] hover:text-[#eafff5] hover:bg-white/5 transition-colors text-lg" }, "\xD7")), /* @__PURE__ */ React.createElement("div", { ref: bodyRef, className: "flex-1 overflow-y-auto p-4 space-y-3" }, msgs.map(
      (m, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "flex " + (m.me ? "justify-end" : "justify-start") }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[82%] px-3.5 py-2.5 rounded-xl text-[13px] leading-relaxed " + (m.me ? "bg-[rgba(0,255,136,.1)] border border-[#103a26] text-[#cdeede] rounded-br-sm" : "bg-[#04100a] border border-[#0c2719] text-[#cdeede] rounded-bl-sm") }, m.t))
    ), typing && /* @__PURE__ */ React.createElement("div", { className: "flex justify-start" }, /* @__PURE__ */ React.createElement("div", { className: "px-4 py-3 rounded-xl rounded-bl-sm bg-[#04100a] border border-[#0c2719] flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-bounce", style: { animationDelay: "0ms" } }), /* @__PURE__ */ React.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-bounce", style: { animationDelay: "150ms" } }), /* @__PURE__ */ React.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-bounce", style: { animationDelay: "300ms" } }))), msgs.length <= 1 && !typing && /* @__PURE__ */ React.createElement("div", { className: "pt-1 flex flex-wrap gap-2" }, quick.map((q, i) => /* @__PURE__ */ React.createElement("button", { key: i, onClick: () => push(q), className: "text-[11px] text-[#5cffba] border border-[#103a26] px-2.5 py-1.5 rounded-full bg-[rgba(0,255,136,.03)] hover:border-[#00ff88] transition-colors" }, q)))), /* @__PURE__ */ React.createElement("div", { className: "p-3 border-t border-[#0c2719] flex gap-2" }, /* @__PURE__ */ React.createElement("input", { value: input, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && push(input), placeholder: "Mesaj\u0131n\u0131 yaz\u2026", className: "flex-1 bg-[#020806] border border-[#103a26] rounded-lg px-3.5 py-2.5 text-[#cdeede] placeholder-[#3d564b] focus:border-[#00ff88] focus:outline-none text-[13px]" }), /* @__PURE__ */ React.createElement("button", { onClick: () => push(input), "aria-label": "Mesaj G\xF6nder", className: "w-10 flex-none grid place-items-center font-bold text-[#021008] bg-[#00ff88] rounded-lg hover:shadow-[0_0_20px_-4px_var(--glow)] transition-all" }, "\u2191"))), !open && /* @__PURE__ */ React.createElement("button", { onClick: toggle, "aria-label": "Destek Sohbetini A\xE7/Kapat", className: "ml-auto flex items-center justify-center w-14 h-14 rounded-2xl bg-[#00ff88] text-[#021008] shadow-[0_10px_30px_-6px_var(--glow)] hover:scale-105 transition-transform relative" }, unread > 0 && /* @__PURE__ */ React.createElement("span", { className: "absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1.5 grid place-items-center rounded-full bg-[#ff2e88] text-white text-[11px] font-bold border-2 border-[#020806]" }, unread), /* @__PURE__ */ React.createElement("span", { className: "absolute inset-0 rounded-2xl bg-[#00ff88] animate-ping opacity-20" }), /* @__PURE__ */ React.createElement("span", { className: "text-2xl" }, "\u{1F4AC}")));
  };
  var pageTitles = {
    home: "YTK Academy | Bire Bir Yaz\u0131l\u0131m E\u011Fitimi",
    blogs: "Blog | YTK Academy \u2014 G\xFCncel C# & .NET Core Makaleleri",
    "blog-detail": "Blog Detay | YTK Academy",
    rooms: "C# & .NET Core Kodlama Odalar\u0131 | YTK Academy",
    login: "Giri\u015F Yap | YTK Academy",
    register: "Kay\u0131t Ol | YTK Academy",
    dashboard: "Kontrol Paneli | YTK Academy",
    chat: "C# & .NET Core Backend Soru Cevap & Sohbet | YTK Academy",
    leaderboard: "Liderlik S\u0131ralamas\u0131 | YTK Academy",
    admin: "Y\xF6netim Paneli | YTK Academy",
    category: "Kategori | YTK Academy",
    roomArticle: "Ders Brifingi | YTK Academy",
    profile: "Profilim | YTK Academy",
    terms: "Kullan\u0131m \u015Eartlar\u0131 | YTK Academy",
    privacy: "Gizlilik Politikas\u0131 | YTK Academy",
    tools: "Geli\u015Ftirici Ara\xE7lar\u0131 & Hesaplay\u0131c\u0131lar | YTK Academy",
    pricing: "E\u011Fitim Paketleri & Fiyatland\u0131rma | YTK Academy",
    product: "E\u011Fitim Detay\u0131 & Sat\u0131n Al | YTK Academy",
    "refund-policy": "\u0130ade ve \u0130ptal Ko\u015Fullar\u0131 | YTK Academy"
  };
  var updateSEOMeta = (p, d) => {
    let title = "YTK Academy | Bire Bir Yaz\u0131l\u0131m E\u011Fitimi";
    let desc = "YTK Academy ile C# & .NET Core backend geli\u015Ftirmeyi uygulamal\u0131 \xF6\u011Frenin. Yusuf \u0130slam Yetkin ile birebir canl\u0131 ment\xF6rl\xFCk, kurumsal mimari senaryolar\u0131 ve ad\u0131m ad\u0131m yol haritas\u0131yla yaz\u0131l\u0131m kariyerinizi ba\u015Flat\u0131n.";
    let keys = "ytk academy, bire bir yaz\u0131l\u0131m e\u011Fitimi, c# e\u011Fitimi, .net core kursu, yusuf islam yetkin, backend developer, clean architecture, mikroservis e\u011Fitimi, coding challenge";
    const slug = p === "tools" && d && d.slug;
    if (p === "home") {
      title = "YTK Academy | Bire Bir Yaz\u0131l\u0131m E\u011Fitimi";
      desc = "YTK Academy ile C# & .NET Core backend geli\u015Ftirmeyi uygulamal\u0131 \xF6\u011Frenin. Yusuf \u0130slam Yetkin ile birebir canl\u0131 ment\xF6rl\xFCk, kurumsal mimari senaryolar\u0131 ve ad\u0131m ad\u0131m yol haritas\u0131yla yaz\u0131l\u0131m kariyerinizi ba\u015Flat\u0131n.";
    } else if (p === "blogs") {
      title = "Blog | YTK Academy \u2014 G\xFCncel C# & .NET Core Makaleleri";
      desc = "G\xFCncel C# programlama pratikleri, ASP.NET Core API tasar\u0131mlar\u0131, Onion mimarisi ve mikroservis altyap\u0131lar\u0131na dair teknik blog yaz\u0131lar\u0131.";
    } else if (p === "blog-detail" && d && d.title) {
      title = d.seo_title ? d.seo_title : `${d.title} | YTK Academy`;
      desc = d.meta_description ? d.meta_description : `${d.excerpt || d.title + " hakk\u0131nda detayl\u0131 C# / .NET Core makalesi."}`;
      if (d.focus_keywords) {
        keys = d.focus_keywords;
      }
    } else if (p === "category" && d) {
      const catName = typeof d === "string" ? d : d.name || "";
      title = `${catName} | YTK Academy`;
      desc = `${catName} kategorisindeki uygulamal\u0131 yaz\u0131l\u0131m e\u011Fitim odalar\u0131. S\u0131f\u0131rdan C# ve .NET Core \xF6\u011Fren.`;
    } else if (p === "tools") {
      if (slug === "reverse-shell") {
        title = "C# Class & DTO Olu\u015Fturucu | YTK Academy";
        desc = "C# properties ve de\u011Fi\u015Fkenleri girerek Entity, DTO veya API Request s\u0131n\u0131flar\u0131n\u0131 online an\u0131nda olu\u015Fturun.";
        keys = "c# class olu\u015Fturucu, dto jenerat\xF6r\xFC, c# model generator, api request class, csharp model generator";
      } else if (slug === "encoder-decoder") {
        title = "JWT & Base64 Encoder/Decoder | YTK Academy";
        desc = "JWT (JSON Web Token) payload \xE7\xF6z\xFCn, Base64, Hex, URL formatlar\u0131nda kodlama yap\u0131n. G\xFCvenli ve taray\u0131c\u0131 tabanl\u0131.";
        keys = "jwt \xE7\xF6z\xFCc\xFC, jwt decoder, base64 \xE7evirici, url encode decode, hex d\xF6n\xFC\u015Ft\xFCr\xFCc\xFC, cyber encoder decoder";
      } else if (slug === "password-strength") {
        title = "Password Hash & Salt Test | YTK Academy";
        desc = "\u015Eifrenizin PBKDF2, BCrypt veya Argon2 hashing g\xFCc\xFCn\xFC test edin ve entropisini hesaplay\u0131n.";
        keys = "\u015Fifre hash testi, bcrypt hash test, pbkdf2 hash, \u015Fifre g\xFCc\xFC testi, \u015Fifre k\u0131rma s\xFCresi";
      } else if (slug === "subnet-calc") {
        title = "CIDR & Subnet Hesaplay\u0131c\u0131 | YTK Academy";
        desc = "IP adresinizi ve alt a\u011F maskesini (CIDR) girerek alt a\u011F aral\u0131\u011F\u0131n\u0131 ve API IP filtreleme kurallar\u0131n\u0131 analiz edin.";
        keys = "subnet hesaplay\u0131c\u0131, cidr hesaplay\u0131c\u0131, ip filtreleme hesapla, ip alt a\u011F hesaplama, network ip hesaplama";
      } else if (slug === "hash-tool") {
        title = "MD5, SHA-256 Hash Jenerat\xF6r\xFC | YTK Academy";
        desc = "Verilerinizin MD5, SHA-1, SHA-256 ve SHA-512 hash \xE7\u0131kt\u0131lar\u0131n\u0131 an\u0131nda \xFCretin ve tan\u0131mlay\u0131n.";
        keys = "md5 olu\u015Fturucu, sha256 hesaplama, hash tan\u0131mlay\u0131c\u0131, hash tespit etme, hash jenerat\xF6r\xFC, online hash tool";
      } else if (slug === "xss-generator") {
        title = "SQL \u015Eema & Script Olu\u015Fturucu | YTK Academy";
        desc = "Tablo isimleri ve kolonlar\u0131 girerek MSSQL, PostgreSQL ve MySQL CREATE TABLE scriptleri online \xFCretin.";
        keys = "sql \u015Fema olu\u015Fturucu, create table script generator, database schema generator, online sql script generator";
      } else if (slug === "sqli-generator") {
        title = "Entity Framework Model Mapper | YTK Academy";
        desc = "C# s\u0131n\u0131flar\u0131 ile DB tablolar\u0131 aras\u0131nda Fluent API mapping (EF Core) kodlar\u0131 olu\u015Fturun.";
        keys = "ef core fluent api mapper, entity framework mapping, c# db mapper generator, ef core mapping tool";
      } else if (slug === "cron-explainer") {
        title = "Cron Zamanlay\u0131c\u0131 & A\xE7\u0131klay\u0131c\u0131 | YTK Academy";
        desc = "Background task veya Hangfire planlar\u0131 i\xE7in cron ifadelerini T\xFCrk\xE7e do\u011Fal dilde analiz edin.";
        keys = "cron zamanlay\u0131c\u0131, cron job a\xE7\u0131klamas\u0131, cron ifadesi olu\u015Fturucu, crontab edit\xF6r, cron t\xFCrk\xE7e a\xE7\u0131klay\u0131c\u0131";
      } else if (slug === "base64-file") {
        title = "Base64 Dosya D\xF6n\xFC\u015Ft\xFCr\xFCc\xFC | YTK Academy";
        desc = "G\xF6rselleri ve dosyalar\u0131 taray\u0131c\u0131da yerel olarak (sunucuya g\xF6ndermeden) Base64 veri koduna d\xF6n\xFC\u015Ft\xFCr\xFCn.";
        keys = "dosyay\u0131 base64e \xE7evirme, base64 dosya d\xF6n\xFC\u015Ft\xFCr\xFCc\xFC, g\xF6rsel base64 encoder, base64 to file, base64 decode";
      } else if (slug === "dns-lookup") {
        title = "API Endpoint & Header Test | YTK Academy";
        desc = "API adreslerine HTTP istekleri (GET/POST) at\u0131n, header ve durum kodlar\u0131n\u0131 online test edin.";
        keys = "api endpoint test, api header test, postman online, http request test, status code lookup";
      } else {
        title = "Geli\u015Ftirici Ara\xE7lar\u0131 & Online Hesaplay\u0131c\u0131lar | YTK Academy";
        desc = "Tamamen taray\u0131c\u0131n\u0131zda \xE7al\u0131\u015Fan, 100% istemci tarafl\u0131 \xE7al\u0131\u015Fan, SEO uyumlu backend geli\u015Ftirici ara\xE7 kiti. DTO Olu\u015Fturucu, JWT, Subnet, SQL \u015Eema, EF Mapper ve API test ara\xE7lar\u0131.";
        keys = "backend geli\u015Ftirici ara\xE7lar\u0131, online backend ara\xE7lar, c# class generator, ef core fluent api generator, sql script generator";
      }
    } else if (p === "pricing") {
      title = "E\u011Fitim Paketleri & Fiyatland\u0131rma | YTK Academy";
      desc = "YTK Academy uygulamal\u0131 e\u011Fitim paketleri ve fiyatland\u0131rma planlar\u0131. \xDCcretsiz temel e\u011Fitimden 1'e 1 canl\u0131 ment\xF6rl\xFCk destekli e\u011Fitimlerimize kadar inceleyin.";
      keys = "ytk academy e\u011Fitimleri, yaz\u0131l\u0131m e\u011Fitim fiyatlar\u0131, c# kursu \xFCcreti, yaz\u0131l\u0131m ment\xF6rl\xFCk";
    } else if (p === "product" && d && d.id) {
      if (d.id === "free-basic") {
        title = "\xDCcretsiz Temel Yaz\u0131l\u0131m E\u011Fitimi | YTK Academy";
        desc = "YTK Academy ile C# ve OOP temellerine \xFCcretsiz ve kurulumsuz ba\u015Flay\u0131n. Temel C# laboratuvarlar\u0131.";
      } else if (d.id === "web-pentest") {
        title = "ASP.NET Core Web API & Clean Architecture Uzmanl\u0131\u011F\u0131 | YTK Academy";
        desc = "Kurumsal backend geli\u015Ftirme ve mimari konular\u0131nda uzmanla\u015F\u0131n. VIP laboratuvarlar\u0131 ve do\u011Frulanabilir sertifika.";
      } else if (d.id === "one-on-one") {
        title = "1'e 1 Canl\u0131 Ment\xF6rl\xFCk | YTK Academy";
        desc = "Yusuf \u0130slam Yetkin ile birebir canl\u0131 dersler ve \xF6zel yaz\u0131l\u0131m e\u011Fitimi.";
      }
    } else if (p === "rooms") {
      title = "C# & .NET Core Kodlama Odalar\u0131 | YTK Academy";
      desc = "YTK Academy uygulamal\u0131 yaz\u0131l\u0131m laboratuvarlar\u0131 ile C# ve .NET Core backend d\xFCnyas\u0131n\u0131 s\u0131f\u0131rdan deneyimleyin. OOP'den Clean Architecture'a kadar d\xFCzinelerce kodlama odas\u0131.";
    } else if (p === "login") {
      title = "Giri\u015F Yap | YTK Academy";
      desc = "YTK Academy hesab\u0131n\u0131za giri\u015F yap\u0131n ve C# & .NET Core backend e\u011Fitim laboratuvarlar\u0131n\u0131z\u0131 \xE7\xF6zmeye devam edin.";
    } else if (p === "register") {
      title = "Kay\u0131t Ol | YTK Academy";
      desc = "YTK Academy hesab\u0131 olu\u015Fturun, C# & .NET Core backend e\u011Fitimlerine ba\u015Flay\u0131n ve yaz\u0131l\u0131m becerilerinizi geli\u015Ftirin.";
    } else if (p === "dashboard") {
      title = "Kontrol Paneli | YTK Academy";
      desc = "YTK Academy \xF6\u011Frenim durumunuzu, \xE7\xF6zd\xFC\u011F\xFCn\xFCz odalar\u0131 ve kazand\u0131\u011F\u0131n\u0131z rozetleri takip edin.";
    } else if (p === "leaderboard") {
      title = "Liderlik S\u0131ralamas\u0131 | YTK Academy";
      desc = "YTK Academy genel s\u0131ralamas\u0131nda en y\xFCksek puan\u0131 alan \xF6\u011Frencileri g\xF6r\xFCn ve rekabete kat\u0131l\u0131n.";
    } else if (p === "admin") {
      title = "Y\xF6netim Paneli | YTK Academy";
      desc = "Y\xF6netim Paneli | YTK Academy";
    } else if (p === "category") {
      title = "Kategori | YTK Academy";
      desc = "Kategori | YTK Academy";
    } else if (p === "roomArticle") {
      title = "Ders Brifingi | YTK Academy";
      desc = "Ders Brifingi | YTK Academy";
    } else if (p === "profile") {
      title = "Profilim | YTK Academy";
      desc = "Profilim | YTK Academy";
    } else if (p === "terms") {
      title = "Kullan\u0131m \u015Eartlar\u0131 | YTK Academy";
      desc = "Kullan\u0131m \u015Eartlar\u0131 | YTK Academy";
    } else if (p === "privacy") {
      desc = "YTK Academy kullan\u0131c\u0131 gizlili\u011Fi ve veri g\xFCvenli\u011Fi politikas\u0131.";
    } else if (p === "refund-policy") {
      title = "\u0130ade ve \u0130ptal Ko\u015Fullar\u0131 | YTK Academy";
      desc = "YTK Academy dijital e\u011Fitim programlar\u0131 ve \xFCyelik paketleri iptal ve iade ko\u015Fullar\u0131.";
    } else {
      const pageTitle = pageTitles[p] || "YTK Academy";
      title = `${pageTitle}`;
    }
    document.title = title;
    let descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute("content", desc);
    let keyMeta = document.querySelector('meta[name="keywords"]');
    if (keyMeta) keyMeta.setAttribute("content", keys);
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    const currentPath = getPagePath(p, d);
    const canonicalUrl = p === "blog-detail" && d && d.canonical_url ? d.canonical_url : `https://ytkacademy.com.tr${currentPath}`;
    canonicalLink.setAttribute("href", canonicalUrl);
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", desc);
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", canonicalUrl);
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", desc);
    let twUrl = document.querySelector('meta[name="twitter:url"]');
    if (twUrl) twUrl.setAttribute("content", canonicalUrl);
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    if (["dashboard", "chat", "admin", "profile", "room", "set-password"].includes(p)) {
      robotsMeta.setAttribute("content", "noindex, nofollow");
    } else {
      robotsMeta.setAttribute("content", "index, follow");
    }
    let ldJsonScript = document.getElementById("seo-structured-data");
    if (ldJsonScript) ldJsonScript.remove();
    ldJsonScript = document.createElement("script");
    ldJsonScript.id = "seo-structured-data";
    ldJsonScript.type = "application/ld+json";
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
  var getPagePath = (p, d) => {
    if (p === "home") return "/";
    if (p === "blog-detail" && d) {
      const slug = typeof d === "string" ? d : d.slug || "";
      return `/blogs/${slug}`;
    }
    if (p === "category" && d) {
      const catName = typeof d === "string" ? d : d.name || "";
      return `/category/${encodeURIComponent(catName)}`;
    }
    if (p === "room" && d) {
      const roomId = typeof d === "string" ? d : d.id || "";
      return `/rooms/${roomId}`;
    }
    if (p === "roomArticle" && d) {
      const roomId = typeof d === "string" ? d : d.id || "";
      return `/brief/${roomId}`;
    }
    if (p === "pathway" && d) {
      const slug = typeof d === "string" ? d : d.slug || "";
      return `/pathway/${slug}`;
    }
    if (p === "doc" && d) {
      const docId = typeof d === "string" ? d : d.id || "";
      return `/docs/${docId}`;
    }
    if (p === "tools") {
      return d && d.slug ? `/tools/${d.slug}` : `/tools`;
    }
    if (p === "product" && d) {
      const id = typeof d === "string" ? d : d.id || "";
      return `/product/${id}`;
    }
    return `/${p}`;
  };
  var parseLocation = () => {
    const path = window.location.pathname;
    if (path === "/" || path === "") {
      return { page: "home", data: null };
    }
    if (path.startsWith("/blogs/")) {
      const slug = path.substring(7);
      return { page: "blog-detail", data: { slug } };
    }
    if (path.startsWith("/tools/")) {
      const slug = path.substring(7);
      return { page: "tools", data: { slug } };
    }
    if (path === "/tools") {
      return { page: "tools", data: null };
    }
    if (path === "/set-password") {
      const params = new URLSearchParams(window.location.search);
      return { page: "set-password", data: { token: params.get("token") || "" } };
    }
    if (path.startsWith("/product/")) {
      const id = path.substring(9);
      return { page: "product", data: { id } };
    }
    if (path.startsWith("/pathway/")) {
      const slug = path.substring(9);
      return { page: "pathway", data: slug };
    }
    if (path.startsWith("/docs/")) {
      const docId = path.substring(6);
      return { page: "doc", data: { id: docId } };
    }
    if (path.startsWith("/category/")) {
      const catName = decodeURIComponent(path.substring(10));
      let catObj = null;
      if (window.SK_CATEGORIES) {
        catObj = window.SK_CATEGORIES.find((c) => c.name === catName || c.slug === catName);
      }
      return { page: "category", data: catObj || { name: catName, rooms: [] } };
    }
    if (path.startsWith("/rooms/") || path.startsWith("/brief/")) {
      const roomId = path.substring(7);
      const targetPage = path.startsWith("/brief/") ? "roomArticle" : "room";
      let roomObj = null;
      if (window.SK_CATEGORIES) {
        for (const cat of window.SK_CATEGORIES) {
          const found = cat.rooms.find((r) => r.id === roomId);
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
  var App = () => {
    const [trainingPromptRoom, setTrainingPromptRoom] = useState(null);
    const getInitialState = () => {
      const parsed = parseLocation();
      const token = localStorage.getItem("sk_token");
      const protectedPages = ["dashboard", "room", "leaderboard", "chat", "category", "admin", "profile"];
      let initialPage = parsed.page;
      let initialData = parsed.data;
      if (protectedPages.includes(initialPage) && !token) {
        initialPage = "login";
        initialData = null;
      } else if ((initialPage === "rooms" || initialPage === "login" || initialPage === "register") && token) {
        initialPage = "dashboard";
        initialData = null;
      }
      return { page: initialPage, data: initialData };
    };
    const initialState = getInitialState();
    const [page, setPage] = useState(initialState.page);
    const [data, setData] = useState(initialState.data);
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
      const token = localStorage.getItem("sk_token");
      if (p === "roomArticle" && token && d && !d.forceNoPrompt && !fromPopState) {
        let roomObj = null;
        if (typeof d === "string") {
          if (window.SK_CATEGORIES) {
            for (const cat of window.SK_CATEGORIES) {
              const found = cat.rooms.find((r) => r.id === d);
              if (found) {
                roomObj = found;
                break;
              }
            }
          }
          if (!roomObj) roomObj = { id: d, name: d };
        } else {
          roomObj = d;
        }
        setTrainingPromptRoom(roomObj);
        return;
      }
      if (typeof p === "string" && p.startsWith("tools/")) {
        d = { slug: p.substring(6) };
        p = "tools";
      }
      const protectedPages = ["dashboard", "room", "leaderboard", "chat", "category", "admin", "profile"];
      if (protectedPages.includes(p) && !token) {
        p = "login";
        d = null;
      } else if ((p === "rooms" || p === "login" || p === "register") && token) {
        p = "dashboard";
        d = null;
      }
      setPage(p);
      setData(d);
      window.scrollTo(0, 0);
      updateSEOMeta(p, d);
      const pageTitle = document.title;
      const path = getPagePath(p, d);
      if (!fromPopState) {
        window.history.pushState({ page: p, data: d }, "", path);
      } else {
        if (window.location.pathname !== path) {
          window.history.replaceState({ page: p, data: d }, "", path);
        }
      }
      if (window.gtag) {
        window.gtag("config", "G-QFXKTX2HD3", {
          "page_path": path,
          "page_title": pageTitle
        });
      }
    };
    useEffect(() => {
      const initLoc = parseLocation();
      if (initLoc.page !== page) {
        navigate(initLoc.page, initLoc.data, true);
      }
      const path = getPagePath(page, data);
      window.history.replaceState({ page, data }, "", path);
      updateSEOMeta(page, data);
      if (window.gtag) {
        window.gtag("config", "G-QFXKTX2HD3", {
          "page_path": path,
          "page_title": document.title
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
      window.addEventListener("popstate", handlePopState);
      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }, []);
    const Cmp = PAGES[page] || PAGES.notfound || PAGES.home;
    return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen" }, /* @__PURE__ */ React.createElement(Cmp, { navigate, data, blog: data }), /* @__PURE__ */ React.createElement(LiveChat, null), trainingPromptRoom && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-[#020806]/85 z-[999] grid place-items-center p-4 overflow-y-auto", style: { animation: "modalFadeIn .4s cubic-bezier(0.16,1,0.3,1) both" }, onClick: () => setTrainingPromptRoom(null) }, /* @__PURE__ */ React.createElement("div", { className: "relative max-w-md w-full border border-[#103a26] bg-[#04100a] rounded-2xl shadow-[0_0_80px_rgba(0,255,136,.25)] p-8 text-center", style: { background: "linear-gradient(165deg,#07150e,#020806)", animation: "modalScaleIn .5s cubic-bezier(0.16,1,0.3,1) both" }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#00ff88] tracking-[0.2em] uppercase mb-2 block" }, "// G\xD6REV HAZIRLI\u011EI"), /* @__PURE__ */ React.createElement("h3", { className: "text-2xl font-disp font-bold text-[#eafff5] mb-4" }, trainingPromptRoom.name || trainingPromptRoom.title), /* @__PURE__ */ React.createElement("p", { className: "text-[#9fc4b5] text-sm leading-relaxed mb-8" }, "Operasyona ba\u015Flamadan \xF6nce ment\xF6r\xFCn\xFCz taraf\u0131ndan haz\u0131rlanan mini e\u011Fitimi (Ders Brifingi) okumak ister misiniz? Temel kavramlar\u0131 \xF6nceden \xF6\u011Frenmek \xE7\xF6z\xFCm\xFC kolayla\u015Ft\u0131racakt\u0131r."), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-3" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          const r = trainingPromptRoom;
          setTrainingPromptRoom(null);
          navigate("roomArticle", { ...r, forceNoPrompt: true });
        },
        className: "w-full font-mono text-sm font-bold text-[#021008] bg-[#00ff88] py-3.5 rounded-xl hover:shadow-[0_0_24px_rgba(0,255,136,0.4)] transition-all uppercase tracking-wider animate-pulse hover:animate-none"
      },
      "\u{1F393} Evet, E\u011Fitimi Al (\xD6nerilen)"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          const r = trainingPromptRoom;
          setTrainingPromptRoom(null);
          navigate("room", { ...r, cameFromArticle: false });
        },
        className: "w-full font-mono text-sm font-bold text-[#74998a] border border-[#103a26] py-3 rounded-xl hover:border-[#ffd166] hover:text-[#ffd166] transition-all uppercase tracking-wider"
      },
      "\u26A1 Hay\u0131r, Direkt Odaya Ge\xE7"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setTrainingPromptRoom(null),
        className: "text-[#5c8a74] hover:text-[#74998a] text-xs transition-colors mt-2 underline"
      },
      "\u0130ptal Et"
    )))));
  };
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
