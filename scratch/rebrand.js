const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

// Helper to replace content in file
function replaceInFile(relativeFilePath, replacements) {
  const filePath = path.join(projectRoot, relativeFilePath);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  let originalLen = content.length;

  for (const [target, replacement] of replacements) {
    if (target instanceof RegExp) {
      content = content.replace(target, replacement);
    } else {
      content = content.split(target).join(replacement);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Rebranded ${relativeFilePath}: size ${originalLen} -> ${content.length}`);
}

// 1. Robots.txt replacements
replaceInFile('robots.txt', [
  ['https://www.siberkampus.org/sitemap.xml', 'https://ytkacademy.com.tr/sitemap.xml']
]);

// 2. Sitemap.xml replacements
replaceInFile('sitemap.xml', [
  [/https:\/\/www\.siberkampus\.org/g, 'https://ytkacademy.com.tr'],
  ['doc-kali-setup', 'doc-dotnet-setup'],
  ['doc-http-basics', 'doc-oop-basics'],
  ['doc-devtools', 'doc-onion-architecture'],
  ['doc-burp-proxy', 'doc-web-api'],
  ['doc-shells', 'doc-ef-core'],
  ['doc-pentest-methodology', 'doc-microservices'],
  ['doc-recon-tools', 'doc-devops-logging'],
  ['category/web-exploitation', 'category/csharp-oop'],
  ['category/network-pentest', 'category/dotnet-api'],
  ['pathway/web-pentest', 'pathway/dotnet-backend']
]);

// Brand name and domain replacements (keeping green intact)
const brandReplacements = [
  ['Siber Kampüs Akademi', 'YTK Academy'],
  ['Siber Kampüs', 'YTK Academy'],
  ['Siber Kampüslü', 'YTK Academy Öğrencisi'],
  ['siberkampus.org', 'ytkacademy.com.tr'],
  ['siberkampus.com', 'ytkacademy.com.tr'],
  ['sitemap.xml', 'ytkacademy.com.tr'],
  ['siberkampus', 'ytkacademy'],
  ['destek@siberkampus.org', 'yusufislamyetkin@hotmail.com'],
  ['destek@siberkampus.com', 'yusufislamyetkin@hotmail.com'],
  ['Evliya Çelebi Mah. Şener Sok. No:11 Tuzla/İstanbul', 'Kadıköy, İstanbul'],
  ['Evliya Çelebi Mah. Şener Sok. No:11\n            Tuzla/İstanbul', 'Kadıköy, İstanbul'],
  ['Evliya Çelebi Mah. Şener Sok. No:11\n  Tuzla/İstanbul', 'Kadıköy, İstanbul'],
  ['root@siberkampus', 'yusuf@ytkacademy']
];

// 3. Rebrand app.jsx
const appReplacements = [
  ...brandReplacements,
  
  // Header logo
  ['Siber Kampüs<b className="text-[#00ff88]">Akademi</b>', 'YTK <b className="text-[#00ff88]">Academy</b>'],
  
  // Terminal Typing (dotnet commands using tech green #00ff88)
  [`      const lines = [
      { t: '$ ', c: '#00ff88', x: 'nmap -sV target.lab', d: 55 },
      { t: '', c: '#74998a', x: '  PORT     STATE  SERVICE', d: 8 },
      { t: '', c: '#74998a', x: '  22/tcp   open   ssh', d: 8 },
      { t: '', c: '#74998a', x: '  80/tcp   open   http', d: 8 },
      { t: '$ ', c: '#00ff88', x: 'sqlmap -u "/login" --dump', d: 50 },
      { t: '', c: '#ffd166', x: '  [!] injectable parameter found', d: 8 },
      { t: '', c: '#00ff88', x: '  [+] admin hash extracted', d: 8 },
      { t: '$ ', c: '#00ff88', x: 'cat /root/flag.txt', d: 55 },
      { t: '', c: '#00ff88', x: '  FLAG{s1ber_kampus_pwn3d}', d: 8 },
      { t: '$ ', c: '#00ff88', x: '_', d: 0, cur: true }];`,
   `      const lines = [
      { t: '$ ', c: '#00ff88', x: 'dotnet new webapi -o YtkApi', d: 55 },
      { t: '', c: '#74998a', x: '  Creating project template: ASP.NET Core Web API...', d: 8 },
      { t: '$ ', c: '#00ff88', x: 'dotnet build', d: 50 },
      { t: '', c: '#00ff88', x: '  Build succeeded. 0 Warning(s) 0 Error(s)', d: 8 },
      { t: '$ ', c: '#00ff88', x: 'dotnet run', d: 55 },
      { t: '', c: '#74998a', x: '  Hosting environment: Production', d: 8 },
      { t: '', c: '#74998a', x: '  Now listening on: https://localhost:5001', d: 8 },
      { t: '$ ', c: '#00ff88', x: '_', d: 0, cur: true }];`],

  // Testimonials
  [`"Üniversitede teori öğrendim ama ilk defa siberkampus'ta gerçek bir sistemi ele geçirdim. 3 ay sonra ilk SOC analisti işime başladım. Laboratuvarlar olmasa bu hızda olmazdı."`,
   `"Üniversitede teori öğrendim ama ilk defa YTK Academy'de gerçek bir Web API'nin middleware katmanını kodladım. Mezun olduktan 2 ay sonra bir finans şirketinde işe başladım. Mentorluk olmasa bu hızda olmazdı."`],
  [`'Muhasebeden geliyorum, kod bile bilmiyordum. Yol haritası beni elimden tutup götürdü. Her CTF görevini çözdükçe özgüvenim arttı. Şimdi pentester olarak çalışıyorum.'`,
   `"İnşaat mühendisliğinden geliyorum, kodlama bile bilmiyordum. Yol haritası beni elimden tutup götürdü. Her kodlama odasını çözdükçe özgüvenim arttı. Şimdi C# backend geliştirici olarak çalışıyorum."`],
  [`"Kurulumla uğraşmadan tarayıcıdan her şeye erişebilmek inanılmaz. Gece 2'de laboratuvar açıp bayrak avlıyorum. Bağımlılık yapıyor ama en iyi türden."`,
   `"Derslerde öğrendiğim teorik bilgileri doğrudan platform üzerindeki C# kodlama odalarında test etmek gelişmemi inanılmaz hızlandırdı. Takıldığımda mentor desteği ve kod ipuçları sayesinde hatanın kaynağını kendim bulmayı öğrendim."`],
  
  // Hero Section
  ['Birebir siber güvenlik eğitimi', 'Birebir C# & .NET Core Backend Eğitimi'],
  ['data-text="Siber Güvenlik">Siber Güvenlik', 'data-text="C# & .NET Backend">C# & .NET Backend'],
  ['Uzmanı Ol, Sektörde Yerini Al', 'Geliştiricisi Ol, Sektörde Yerini Al'],
  ['Siber güvenlikte "level" atlamaya hazır mısın?', 'C# & .NET Core dünyasında "level" atlamaya hazır mısın?'],
  ['enjektör', 'derleyici'],
  ['mezun siber güvenlik kariyerine başladı', 'mezun backend geliştirici kariyerine başladı'],

  // WhatsApp Message
  ['Merhaba Siber Kampüs Eğitimi Bire Bir eğitim için bilgi almak istiyorum', 'Merhaba YTK Academy C# .NET Core Bire Bir mentorluk eğitimi hakkında bilgi almak istiyorum'],

  // Outcomes
  ['Siber Kampüs onaylı', 'YTK Academy onaylı'],
  ['Sızma testi raporları, zafiyet analizleri ve uygulama çıktılarından derlenen somut portföy.', 'Onion Architecture ile yazılmış, mikroservis ve Dockerize edilmiş somut GitHub projeleri.'],
  ['Birlikte çalıştığın güvenlik uzmanından, iş başvurularında fark yaratacak kişisel referans mektubu.', "Birlikte çalıştığın Yusuf İslam Yetkin\\'den, iş başvurularında fark yaratacak kişisel referans desteği."],
  ['teknik dökümanlar, saldırı rehberleri ve vaka incelemeleri.', 'kurumsal proje şablonları, kütüphaneler ve mimari desenler.'],
  ['Gerçek sistemlerde deneyim kazanarak sektörde güvenle iş yapabilecek seviyeye ulaşırsın.', 'Gerçek backend senaryolarında deneyim kazanarak kurumsal sistemlerde güvenle kod yazabilecek seviyeye ulaşırsın.'],
  ['Siber güvenlik CV\'ni hazırlamana, teknik mülakatlara hazırlanmana ve kariyer yolunu planlamana destek.', 'Backend yazılımcı CV\'ni hazırlamana, teknik mülakatlara hazırlanmana ve kariyer yolunu planlamana destek.'],

  // Footer tools columns titles
  ['Güvenlik Araçları I', 'Geliştirici Araçları I'],
  ['Güvenlik Araçları II', 'Geliştirici Araçları II'],
  ['Reverse Shell Oluşturucu', 'C# Model & DTO Oluşturucu'],
  ['Encoder/Decoder', 'JWT & Base64 Çözücü'],
  ['Parola Güvenliği', 'Password Hash & Salt Test'],
  ['Subnet Hesaplayıcı', 'CIDR & Subnet Hesaplayıcı'],
  ['Hash Oluşturucu & Tan', 'MD5, SHA-256 Jeneratörü'],
  ['XSS Payload Oluşturucu', 'SQL Şema Oluşturucu'],
  ['SQLi Payload Oluşturucu', 'EF Model Mapper'],
  ['Cron Zamanlayıcı', 'Cron Zamanlayıcı & Açıklayıcı'],
  ['Base64 Dosya/Görsel', 'Base64 Dosya Dönüştürücü'],
  ['DNS Güvenlik Sorgulama', 'API Endpoint & Header Test'],

  // App titles
  ['Siber Güvenlik Laboratuvarları', 'C# & .NET Core Kodlama Görevleri'],
  ['Siber Güvenlik Makaleleri', 'Yazılım & Backend Geliştirme Makaleleri'],
  ['Siber Güvenlik Soru Cevap & Sohbet', 'Yazılım Soru Cevap & Sohbet'],
  ['Siber Güvenlik Araçları & Hesaplayıcılar', 'Geliştirici Araçları & Online Hesaplayıcılar'],
  ['Siber Güvenlik Araçları & Online Hesaplayıcılar', 'Geliştirici Araçları & Online Hesaplayıcılar'],
  ['Online Siber Güvenlik Araçları', 'Online Geliştirici Araçları & Yardımcılar'],
  ['Siber Güvenlik Uzmanı Ol', 'C# & .NET Core Backend Geliştiricisi Ol'],

  // SEO
  ['Siber güvenliği uygulamalı öğren.', 'C# & .NET Core ile kurumsal backend yazılım geliştirmeyi öğren.'],
  ['Uygulamalı eğitimler, gerçek senaryolar ve adım adım rehberlerle siber güvenlik kariyerine ilk adımını at.', 'Uygulamalı eğitimler, Onion Architecture, mikroservisler ve adım adım rehberlerle backend yazılımcı kariyerine başla.'],
  ['siber kampüs, siber güvenlik eğitimi, uygulamalı siber güvenlik', 'ytk academy, backend eğitimi, c# net core eğitimi, yazılım eğitimi, yusuf islam yetkin, c# oop, clean architecture, mikroservis eğitimi'],
  ['Defansif güvenlik, sızma testi ve siber güvenliğin derinlerine inen yazılar.', 'C#, .NET Core, Onion Architecture, Microservices ve kurumsal sistem tasarımları.'],
  
  // Products
  ['1\'e 1 Canlı Siber Güvenlik Eğitimi', '1\'e 1 Canlı C# & .NET Core Backend Eğitimi'],
  ['Sektörden uzman mentörler eşliğinde birebir canlı dersler ve özel sızma testi eğitimi.', 'Yusuf İslam Yetkin eşliğinde birebir canlı dersler ve kurumsal backend yazılım eğitimi.'],
  ['birebir canlı siber güvenlik eğitim paketleri', 'birebir canlı C# & .NET Core backend mentorluk eğitim paketleri']
];
replaceInFile('app.jsx', appReplacements);

// 4. Rebrand app-pages.jsx
const pagesReplacements = [
  ...brandReplacements,
  ['Sertifika geçerli mi?', 'Eğitim sertifikası veriliyor mu?'],
  ['Siber Kampüs Akademi, siber güvenliği izlenecek bir ders değil, oynanacak bir oyun haline getirmek için kuruldu. Amacımız net: Türkiye\'de yeni nesil siber güvenlik uzmanlarını, gerçek sistemleri ele geçirerek öğrenebilecekleri bir kampüste yetiştirmek.',
   'YTK Academy, yazılım geliştirmeyi sadece izlenecek bir video değil, bizzat satırlarca kod yazıp hata ayıklayarak öğrenilecek uygulamalı bir serüven haline getirmek için kuruldu. Amacımız net: Türkiye\'de yeni nesil C# & .NET Core backend geliştiricilerini ve enterprise yazılım mimarlarını yetiştirmek.'],
  ['Siber Kampüs Akademi, "siber güvenliğe nereden başlasam?" sorusuna takılıp kalmış öğrencilerin hayal kırıklığından doğdu. Dağınık videolar, kurması saatler süren sanal makineler ve gerçek pratikten kopuk teori... Biz bunu kırmak istedik.',
   'YTK Academy, "backend yazılıma nereden başlasam?" veya "C# öğrendim ama kurumsal projelerde nasıl mimari kuracağım?" sorusuna takılıp kalmış öğrencilerin ve kariyer değiştirenlerin ihtiyaçlarından doğdu. Dağınık videolar ve gerçek pratikten kopuk teori yerine sizi doğrudan projelerin içine çekiyoruz.'],
  ['Siber Kampüs Akademi onaylı bir başarı sertifikası', 'YTK Academy onaylı bir başarı sertifikası'],
  ['Siber Kampüs Akademi, birebir canlı siber güvenlik eğitimi, eğitmenle özel danışma (VIP sohbet) ve VIP teknik kaynak arşivi sunan bir dijital öğrenme platformudur. Tüm içerik yalnızca yasal, etik öğrenme amacıyla sağlanır.',
   'YTK Academy, birebir canlı C# & .NET Core backend eğitimi, eğitmenle özel danışma (VIP sohbet) ve VIP teknik kod arşivi sunan bir dijital öğrenme platformudur.'],
  ['1\\\'e 1 Canlı Siber Güvenlik Eğitimi', '1\\\'e 1 Canlı C# & .NET Core Backend Eğitimi'],
  ['1\\\'e 1 Canlı Eğitim Teslimatı', '1\\\'e 1 Canlı Eğitim Teslimatı'],
  ['Siber Kampüs Onaylı Sertifika', 'YTK Academy Onaylı Sertifika'],
  ['Siber güvenlik CV\'si hazırlamadan önce', 'Backend yazılımcı CV\'si hazırlamadan önce'],
  ['Siber güvenlik temelleri sağlam kurulmadan ilerlenmez. Seninle Linux\'tan başlayıp ~10-12 hafta içinde ilk gerçek sızma testini gerçekleştirir seviyeye getiririz.',
   'Backend programlama temelleri sağlam kurulmadan ilerlenmez. Seninle C# OOP\'den başlayıp ~10-12 hafta içinde ilk enterprise Web API projesini tasarlayıp ayağa kaldırır seviyeye getiririz.'],
  ['Siber güvenlik bilgin analiz edilir', 'Yazılım ve backend bilgin analiz edilir'],
  ['Siber güvenlik alanında kendini nerede görüyorsun?', 'Yazılım ve backend alanında kendini nerede görüyorsun?'],
  
  // Certificate descriptions
  ['Bu sertifika sahibi, Siber Kampüs Akademi bünyesindeki uygulamalı Web Güvenliği eğitimini başarıyla tamamlamıştır. Eğitim sürecinde SQL Injection, Cross-Site Scripting (XSS), CSRF ve Dosya Yükleme Açıklıkları (File Upload Bypass) gibi kritik zafiyetlerin tespiti, sömürülmesi ve kapatılması konularında pratik yetkinlik kazanarak, ilgili tüm hacking laboratuvarlarını ve CTF görevlerini çözmüştür.',
   'Bu sertifika sahibi, YTK Academy bünyesindeki C# & OOP Temelleri eğitimini başarıyla tamamlamıştır. Sınıflar, nesneler, kapsülleme, kalıtım, arayüzler ve SOLID prensipleri konularında pratik yetkinlik kazanarak, platformdaki tüm ilgili kodlama challenge ve test görevlerini tamamlamıştır.'],
  ['Bu sertifika sahibi, Siber Kampüs Akademi bünyesindeki Linux Sistem Güvenliği ve Ayrıcalık Yükseltme eğitimini başarıyla tamamlamıştır. Eğitim sürecinde SUID/SGID haklarının kötüye kullanımı, Cron Job zafiyetleri, PATH suistimalleri, Linux Kernel Exploitleri ve sistem sıkılaştırma (Hardening) konularında pratik yetkinlik kazanarak, ilgili tüm hacking laboratuvarlarını ve CTF görevlerini çözmüştür.',
   'Bu sertifika sahibi, YTK Academy bünyesindeki ASP.NET Core Web API & Advanced Middleware Architecture eğitimini başarıyla tamamlamıştır. RESTful endpoint tasarımı, custom middleware, model binding/validation ve exception handling kurguları konularında pratik yetkinlik kazanarak, ilgili tüm kodlama görevlerini başarıyla tamamlamıştır.'],
  ['Bu sertifika sahibi, Siber Kampüs Akademi bünyesindeki kurumsal Ağ Sızma Testleri eğitimini başarıyla tamamlamıştır. Eğitim sürecinde Nmap ile gelişmiş keşif, ARP Zehirlemesi, SMB zafiyetleri and Active Directory ortamlarında bilgi toplama ve sömürü faaliyetleri yürüterek pratik yetkinlik kazanmış, ilgili tüm hacking laboratuvarlarını ve CTF görevlerini çözmüştür.',
   'Bu sertifika sahibi, YTK Academy bünyesindeki Enterprise Microservices & Event-Driven Architecture (RabbitMQ, MassTransit, Redis) eğitimini başarıyla tamamlamıştır. Asenkron mesaj kuyrukları yönetimi ve mikroservis tasarımları konularında pratik yetkinlik kazanarak, ilgili tüm enterprise coding challenge görevlerini tamamlamıştır.'],
  ['Bu sertifika sahibi, Siber Kampüs Akademi bünyesindeki İleri CTF ve Red Team Metodolojileri eğitimini başarıyla tamamlamıştır. Eğitim sürecinde çok adımlı sızma senaryoları, ağlar arası pivotlama ve tünelleme, custom backdoor yazımı ve anti-debug korumalarını atlatma konularında pratik yetkinlik kazanarak, ilgili tüm hacking laboratuvarlarını ve CTF görevlerini çözmüştür.',
   'Bu sertifika sahibi, YTK Academy bünyesindeki Advanced DevOps, Dockerization, and Observability (OpenTelemetry, Serilog, CI/CD) eğitimini başarıyla tamamlamıştır. Docker konteynerleştirme, structured logging (Serilog), CI/CD boru hatları ve gözlemlenebilirlik (OpenTelemetry) konularında pratik yetkinlik kazanarak, platformdaki tüm final aşamalarını tamamlamıştır.'],
    
  // SVGs logo
  ['siber<tspan fill="#00ff88">kampus</tspan>', 'ytk<tspan fill="#00ff88">academy</tspan>'],
  ['ctx.fillText(\'siber\'', 'ctx.fillText(\'ytk\''],
  ['pdf.save(\'siberkampus-sertifika-\'', 'pdf.save(\'ytkacademy-sertifika-\''],
  
  // Tools names & descriptions inside toolsList
  ['name: \'Reverse Shell Oluşturucu\', desc: \'IP ve port bilgilerini girerek Bash, Python, PHP ve PowerShell reverse shell komutlarını saniyeler içinde oluşturun.\'',
   'name: \'C# Class & DTO Oluşturucu\', desc: \'C# properties ve değişkenleri girerek Entity, DTO veya API Request sınıflarını anında oluşturun.\''],
  ['name: \'Cyber Encoder/Decoder\', desc: \'Base64, Hex, Binary, URL ve HTML formatlarında metin şifreleme ve kod çözme işlemlerini gerçekleştirin.\'',
   'name: \'JWT & Base64 Encoder/Decoder\', desc: \'JWT (JSON Web Token) payload çözün, Base64, Hex, URL formatlarında kodlama yapın.\''],
  ['name: \'Parola Entropi & Güvenlik\', desc: \'Şifrenizin brute force (kaba kuvvet) kırılma süresini hesaplayın ve kriptografik güvenli parolalar üretin.\'',
   'name: \'Password Hash & Salt Test\', desc: \'Şifrenizin PBKDF2, BCrypt veya Argon2 hashing gücünü test edin ve entropisini hesaplayın.\''],
  ['name: \'CIDR & Subnet Hesaplayıcı\', desc: \'IP adresinizi ve alt ağ maskesini (CIDR) girerek alt ağ aralığını, ağ adresini, yayım adresini ve binary karşılığını analiz edin.\'',
   'name: \'CIDR & Subnet Hesaplayıcı\', desc: \'IP adresinizi ve alt ağ maskesini (CIDR) girerek alt ağ aralığını ve API IP filtreleme kurallarını analiz edin.\''],
  ['name: \'Hash Oluşturucu & Tanımlayıcı\', desc: \'Verilerinizin MD5, SHA-1, SHA-256 ve SHA-512 hash çıktılarını üretin ve bilinmeyen hash tiplerini otomatik tanımlayın.\'',
   'name: \'MD5, SHA-256 Hash Jeneratörü\', desc: \'Verilerinizin MD5, SHA-1, SHA-256 ve SHA-512 hash çıktılarını anında üretin ve tanımlayın.\''],
  ['name: \'XSS Payload Oluşturucu\', desc: \'HTML, SVG, Attribute ve filtre atlatma (WAF bypass) XSS saldırı kodlarını dinamik olarak üretin.\'',
   'name: \'SQL Şema & Script Oluşturucu\', desc: \'Tablo isimleri ve kolonları girerek MSSQL, PostgreSQL ve MySQL CREATE TABLE scriptleri üretin.\''],
  ['name: \'SQL Injection Jeneratörü\', desc: \'DBMS türüne göre Union, Boolean, Time ve Auth bypass SQL Injection şablonlarını parametrik olarak oluşturun.\'',
   'name: \'Entity Framework Model Mapper\', desc: \'C# sınıfları ile DB tabloları arasında Fluent API mapping (EF Core) kodları oluşturun.\''],
  ['name: \'Cron Zamanlayıcı & Açıklayıcı\', desc: \'Cron zaman ifadelerini Türkçe doğal dilde analiz edin veya görsel kontrollerle sıfırdan cron ifadesi oluşturun.\'',
   'name: \'Cron Zamanlayıcı & Açıklayıcı\', desc: \'Background task veya Hangfire planları için cron ifadelerini Türkçe doğal dilde analiz edin.\''],
  ['name: \'Base64 Dosya Dönüştürücü\', desc: \'Görselleri ve dosyaları tarayıcıda yerel olarak (sunucuya göndermeden) Base64 veri koduna dönüştürün.\'',
   'name: \'Base64 Dosya Dönüştürücü\', desc: \'Görselleri ve dosyaları tarayıcıda yerel olarak (sunucuya göndermeden) Base64 veri koduna dönüştürün.\''],
  ['name: \'DNS & SPF DMARC Analizörü\', desc: \'Cloudflare DoH üzerinden alan adlarının A, MX, TXT, SPF ve DMARC kayıtlarını sorgulayın ve e-posta güvenlik risklerini raporlayın.\'',
   'name: \'API Endpoint & Header Test\', desc: \'API adreslerine HTTP istekleri (GET/POST) atın, header ve durum kodlarını test edin.\''],
  
  // Legal disclaimer
  ['Bu platformda sunulan tüm siber güvenlik araçları; yalnızca eğitim, siber güvenlik farkındalığı oluşturma ve yetkili sızma testi (penetrasyon) çalışmaları amacıyla geliştirilmiştir. Bu araçların izinsiz veya yasa dışı sistemlerde kullanılmasından doğabilecek tüm cezai ve hukuki sorumluluk tamamen kullanıcıya aittir. <code>siberkampus.com</code> hiçbir kötü niyetli kullanımda sorumluluk kabul etmez.',
   'Bu platformda sunulan tüm yazılım geliştirme araçları ve kod jeneratörleri; yalnızca eğitim, backend geliştirme pratikleri ve verimlilik amacıyla sunulmaktadır. Geliştirilen sistemlerin güvenliğinden ve kod kullanımlarından doğabilecek sorumluluklar tamamen kullanıcıya aittir. YTK Academy hiçbir kötü niyetli kullanımda sorumluluk kabul etmez.'],

  // Specific inside tool views (header)
  ['<h1>🔌 Reverse Shell Oluşturucu</h1>', '<h1>🔌 C# Class & DTO Oluşturucu</h1>'],
  ['Hedef makinede çalıştırılmak üzere dinamik ve etkileşimli reverse shell komut şablonları üretin.', 'Properties girerek C# Entity sınıfları ve DTO modelleri üretin.'],
  
  // DNS analyzer rebrand title
  ['<h1>📡 DNS & SPF DMARC Analizörü</h1>', '<h1>📡 API Endpoint & Header Test</h1>'],
  ['Cloudflare DNS JSON API kullanarak alan adlarının DNS, SPF ve DMARC kayıtlarını analiz edin.', 'API adreslerine HTTP istekleri atıp yanıt durumlarını analiz edin.']
];
replaceInFile('app-pages.jsx', pagesReplacements);

// 5. Rebrand app-auth.jsx
const authReplacements = [
  ...brandReplacements,
  ['siberkampus — Authenticated app pages', 'ytkacademy — Authenticated app pages'],
  ['siber<b className="text-[#00ff88]">kampus</b>', 'ytk<b className="text-[#00ff88]">academy</b>'],
  ['Siber Mentör', 'Yusuf İslam Yetkin'],
  ['Hoş geldin VIP Siber Hacking Öğrencim! 👑', 'Hoş geldin VIP C# & .NET Core Backend Geliştirici Öğrencim! 👑'],
  ['Bire Bir Online Siber Güvenlik Eğitimi ile siber güvenlik kariyerini en üst seviyeye taşımaya hazır mısın?',
   'Yusuf İslam Yetkin ile Bire Bir Canlı C# & .NET Core Backend Eğitimi ile yazılım kariyerini en üst seviyeye taşımaya hazır mısın?'],
  ['Siber Kampüs Akademi eğitim programının bir parçasıdır.', 'YTK Academy eğitim programının bir parçasıdır.'],
  ['Merhaba Siber Kampüslü! 👋', 'Merhaba YTK Academy Öğrencisi! 👋'],
  
  // flags replacements
  ['siberkampus{sql_basic_bypass_success}', 'ytkacademy{prepared_statements_security}'],
  ['siberkampus{reflected_xss_cookie_stolen}', 'ytkacademy{razor_html_encoding_ok}'],
  ['siberkampus{union_based_sqli_data_dumped}', 'ytkacademy{ef_core_parameterized_query}'],
  ['siberkampus{stored_xss_session_hijacked}', 'ytkacademy{html_sanitizer_installed}'],
  ['siberkampus{csrf_admin_password_changed}', 'ytkacademy{antiforgery_token_validated}'],
  ['siberkampus{blind_sqli_db_hash_extracted}', 'ytkacademy{db_indexing_optimized}'],
  ['siberkampus{file_upload_bypass_webshell}', 'ytkacademy{file_upload_validation_ok}'],
  ['siberkampus{ssrf_internal_metadata_exposed}', 'ytkacademy{http_client_factory_safe}'],
  ['siberkampus{jwt_none_alg_bypass}', 'ytkacademy{jwt_signing_key_verified}'],
  ['siberkampus{default_credentials_router_admin}', 'ytkacademy{appsettings_default_db_pass}'],
  ['siberkampus{command_injection_shell_execution}', 'ytkacademy{command_parameter_validation}'],
  ['siberkampus{html_comments_developer_secrets}', 'ytkacademy{csharp_todo_notes_found}'],
  ['siberkampus{path_traversal_etc_passwd}', 'ytkacademy{file_path_sanitize_ok}'],
  ['siberkampus{cookie_tampering_role_admin}', 'ytkacademy{jwt_claims_role_tampered}'],
  ['siberkampus{log_poisoning_rce}', 'ytkacademy{structured_logging_serilog}'],
  ['siberkampus{bola_profile_leak}', 'ytkacademy{claim_authorization_checked}'],
  ['siberkampus{nosql_login_bypass}', 'ytkacademy{mongodb_filter_builder_safe}'],
  ['siberkampus{idor_admin_privilege}', 'ytkacademy{api_mass_assignment_success}'],
  ['siberkampus{nmap_ftp_anonymous_login}', 'ytkacademy{healthcheck_api_monitoring}'],

  // also checks with single quotes
  ["'siberkampus{sql_basic_bypass_success}'", "'ytkacademy{prepared_statements_security}'"],
  ["'siberkampus{reflected_xss_cookie_stolen}'", "'ytkacademy{razor_html_encoding_ok}'"],
  ["'siberkampus{union_based_sqli_data_dumped}'", "'ytkacademy{ef_core_parameterized_query}'"],
  ["'siberkampus{stored_xss_session_hijacked}'", "'ytkacademy{html_sanitizer_installed}'"],
  ["'siberkampus{csrf_admin_password_changed}'", "'ytkacademy{antiforgery_token_validated}'"],
  ["'siberkampus{blind_sqli_db_hash_extracted}'", "'ytkacademy{db_indexing_optimized}'"],
  ["'siberkampus{file_upload_bypass_webshell}'", "'ytkacademy{file_upload_validation_ok}'"],
  ["'siberkampus{ssrf_internal_metadata_exposed}'", "'ytkacademy{http_client_factory_safe}'"],
  ["'siberkampus{jwt_none_alg_bypass}'", "'ytkacademy{jwt_signing_key_verified}'"],
  ["'siberkampus{default_credentials_router_admin}'", "'ytkacademy{appsettings_default_db_pass}'"],
  ["'siberkampus{command_injection_shell_execution}'", "'ytkacademy{command_parameter_validation}'"],
  ["'siberkampus{html_comments_developer_secrets}'", "'ytkacademy{csharp_todo_notes_found}'"],
  ["'siberkampus{path_traversal_etc_passwd}'", "'ytkacademy{file_path_sanitize_ok}'"],
  ["'siberkampus{cookie_tampering_role_admin}'", "'ytkacademy{jwt_claims_role_tampered}'"],
  ["'siberkampus{log_poisoning_rce}'", "'ytkacademy{structured_logging_serilog}'"],
  ["'siberkampus{bola_profile_leak}'", "'ytkacademy{claim_authorization_checked}'"],
  ["'siberkampus{nosql_login_bypass}'", "'ytkacademy{mongodb_filter_builder_safe}'"],
  ["'siberkampus{idor_admin_privilege}'", "'ytkacademy{api_mass_assignment_success}'"],
  ["'siberkampus{nmap_ftp_anonymous_login}'", "'ytkacademy{healthcheck_api_monitoring}'"],
  
  // sub domains
  ['admin@siberkampus.lab', 'admin@ytkacademy.lab'],
  ['editor@siberkampus.lab', 'editor@ytkacademy.lab'],
  ['test@siberkampus.lab', 'test@ytkacademy.lab'],
  
  // user avatar and details inside simulation briefings
  ['Harika bir siber güvenlik platformu!', 'Harika bir yazılım eğitim platformu!']
];
replaceInFile('app-auth.jsx', authReplacements);

console.log('Rebranding complete!');
