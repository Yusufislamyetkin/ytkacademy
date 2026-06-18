-- ========================================================================
-- YTK Academy — Blog İçerikleri
-- Supabase Dashboard > SQL Editor'da çalıştırın
-- Önce mevcut blog içeriklerini temizler, sonra yenilerini ekler
-- ========================================================================

-- 1. Mevcut tüm blog içeriklerini temizle
DELETE FROM blogs;

-- 2. Yeni blog içeriklerini ekle

INSERT INTO blogs (
  title, slug, excerpt, content,
  category, author, read_time,
  seo_title, meta_description, focus_keywords, canonical_url
) VALUES

-- ── BLOG 1 ──────────────────────────────────────────────────────────────
(
  '.NET Core Türkiye''de Neden Bu Kadar Popüler?',
  'dotnet-core-turkiyede-neden-populer',
  'Microsoft''un açık kaynaklı platformu .NET Core, Türkiye''deki yazılım ekiplerinin ilk tercihi haline geliyor. Peki bu yükselişin arkasında ne var?',
  '## .NET Core Türkiye''de Neden Bu Kadar Popüler?

Türkiye''deki yazılım sektörüne baktığınızda dikkat çekici bir tablo görürsünüz: iş ilanlarının büyük çoğunluğunda ".NET", "C#" veya "ASP.NET Core" ifadesi yer alır. Bu tesadüf değil — Türkiye, .NET ekosisteminin dünya genelinde en yoğun kullanıldığı ülkeler arasında yer alıyor. Peki bu tablonun ardında ne var?

### Köklü Bir Kurumsal Altyapı

Türkiye''deki bankacılık, sigortacılık, e-ticaret ve kamu sektörü; 2000''li yıllardan bu yana .NET teknoloji yığınına yatırım yapmış durumda. Bu kurumlar onlarca yıllık .NET kültürünü ve insan kaynağını büyütmüş, bu da yeni projelerde de aynı ekosistemi tercih etmelerine yol açmış.

### Microsoft''un Açık Kaynak Dönüşümü

2016''da .NET Core''un açık kaynak olarak duyurulması, platformun Linux ve macOS desteği kazanması Türk geliştiriciler arasında ciddi bir ilgi uyandırdı. Artık hem Windows sunucularında hem de Linux tabanlı bulut altyapılarında aynı kodla çalışmak mümkün. Bu esneklik, büyük kurumsal projelerde maliyetleri düşürürken geliştirici deneyimini de iyileştirdi.

### İş Piyasasındaki Gerçeklik

LinkedIn''de bugün Türkiye''de açık .NET geliştirici pozisyonlarına bakıldığında binlerce ilan görülüyor. Bankalar, fintech şirketleri, e-ticaret devleri ve yazılım evleri C# ve ASP.NET Core bilen geliştiricilere ciddi maaşlar teklif ediyor.

### YTK Academy''de .NET Öğrenmek

İşte bu yüzden YTK Academy''de mentörlük programımızın merkezine .NET Core ve C#''ı yerleştirdik. Öğrencilerimiz teorik bilginin ötesinde; Entity Framework, mikroservis mimarisi ve gerçek kurumsal projelerde kullanılan desenlerle kariyer hazır hale geliyor.',
  '.NET & C#',
  'Yusuf İslam Yetkin',
  '4 dk okuma',
  '.NET Core Türkiye''de Neden Popüler? | YTK Academy Blog',
  'Türkiye''de .NET Core''un bu kadar yaygın olmasının gerçek sebeplerini keşfedin. Kurumsal altyapı, açık kaynak dönüşümü ve iş piyasası analizi.',
  '.NET Core, C#, ASP.NET Core, Türkiye yazılım, backend geliştirme',
  'https://ytkacademy.com.tr/blogs/dotnet-core-turkiyede-neden-populer'
),

-- ── BLOG 2 ──────────────────────────────────────────────────────────────
(
  'Yazılım Geliştirme Neden Dünyanın En Yükselen Kariyeri?',
  'yazilim-gelistirme-dunya-yukselen-kariyer',
  'Yapay zeka, bulut bilişim ve dijital dönüşüm dalgası — tüm bu trendlerin ortasında neden her sektör yazılım geliştiriciye muhtaç?',
  '## Yazılım Geliştirme Neden Dünyanın En Yükselen Kariyeri?

Dünya Ekonomik Forumu''nun 2024 raporuna göre önümüzdeki 5 yılda en hızlı büyüyecek meslekler listesinin zirvesinde yazılım geliştirme yer alıyor. Bu bir sürpriz değil — ancak gerçekten anlayabilmek için rakamların ötesine bakmak gerekiyor.

### Her Şey Yazılıma Dönüşüyor

Bankalar artık teknoloji şirketi gibi çalışıyor. Üretim tesisleri IoT sensörleri ve yazılım sistemleriyle yönetiliyor. Tarım sektörü bile yapay zeka destekli verim tahmin sistemleri kullanıyor. "Yazılım yiyor dünyayı" sözü artık metafor değil, gerçek.

Bu dönüşüm şu anlama geliyor: Hangi sektörde çalışırsanız çalışın, dijital sistemleri anlayan ve geliştirebilen insanlara ihtiyaç var.

### Coğrafyadan Bağımsız Çalışma

Pandemi sonrası uzaktan çalışma modelinin kalıcılaşmasıyla birlikte yazılım geliştiriciler dünyanın herhangi bir yerinden çalışarak küresel şirketlerle sözleşme yapabilir hale geldi. Türkiye''den bir geliştirici, Silicon Valley maaşlarıyla Avrupa veya Amerika''daki firmalara hizmet verebiliyor.

### Yapay Zeka Yazılımcıyı Silmez, Güçlendirir

"ChatGPT programcıları işsiz bırakacak" söylemleri gerçeği yansıtmıyor. Yapay zeka araçları deneyimli bir yazılımcının üretkenliğini katlıyor; ancak hangi soruyu sormak gerektiğini, üretilen kodun doğru olup olmadığını anlamak hâlâ insan uzmanlığı gerektiriyor.

### Türkiye''den Dünyaya Açılan Kapı

YTK Academy''deki bire bir mentörlük programı tam da bu fırsatı değerlendirmek için tasarlandı. Öğrencilerimiz sıfırdan başlayıp 6-12 ay içinde hem yerli hem global iş piyasasında rekabet edebilecek düzeye ulaşıyor.',
  'Kariyer & Teknoloji',
  'Yusuf İslam Yetkin',
  '5 dk okuma',
  'Yazılım Geliştirme Neden Dünyanın En Yükselen Kariyeri? | YTK Academy',
  'Dijital dönüşüm, yapay zeka ve uzaktan çalışma trendleri yazılım kariyerini neden bu denli değerli kılıyor? YTK Academy blog''da detaylı analiz.',
  'yazılım kariyeri, yazılım geliştirme, backend geliştirici, uzaktan çalışma, yapay zeka',
  'https://ytkacademy.com.tr/blogs/yazilim-gelistirme-dunya-yukselen-kariyer'
),

-- ── BLOG 3 ──────────────────────────────────────────────────────────────
(
  'Bire Bir Mentörlük Neden Bootcamp''ten Daha Etkili?',
  'bire-bir-mentorluk-neden-bootcampten-etkili',
  'Binlerce dolar harcanan bootcamp''ler ve online kurslar neden çoğu zaman iş garantisi veremiyor? Cevap öğrenme modelinde saklı.',
  '## Bire Bir Mentörlük Neden Bootcamp''ten Daha Etkili?

Son yıllarda yazılım öğrenmek isteyenler için iki büyük seçenek ön plana çıktı: yoğun bootcamp programları ve online kurs platformları. Her ikisi de milyarlarca dolarlık bir sektör haline geldi. Ancak iş piyasasındaki tabloya bakıldığında ilginç bir paradoks ortaya çıkıyor: mezunların önemli bir kısmı iş bulmakta zorlanıyor.

### Kitleden Biri Olmak vs. Biri Tarafından Yetiştirilmek

Bootcamp''lerde 20-50 kişilik sınıflarda benzer müfredat işlenir. Herkes aynı projeyi yapar, aynı hataları yapar ve iş başvurularında aynı portföyle yarışır. Piyasada "bootcamp mezunu" etiketi artık sıradan bir referans haline geldi.

Bire bir mentörlükte ise tablo tamamen farklı. Öğrencinin mevcut seviyesi, öğrenme hızı ve kariyer hedefi doğrultusunda kişiselleştirilmiş bir yol haritası oluşturulur. Takıldığı nokta gerçek zamanlı çözülür.

### Gerçek Proje Deneyimi

YTK Academy''de öğrencilerimiz, mülakatlar yerine "real-world" projelerin üzerinde çalışır: e-ticaret backend''i, mikroservis mimarisi, JWT kimlik doğrulama, EF Core ile veritabanı yönetimi... Bu projeler hem GitHub portföyüne eklenir hem de mülakatlarda somut konuşma konusu olur.

### Hız Farkı

Yanlış anlaşılan bir kavramı, bir forum yazısı yerine o konuya hâkim bir mentörle 10 dakikada netleştirmek; haftalarca sürecek bir tıkanmayı anında aşmak demektir. Bu zaman avantajı, öğrenme sürecini %40-60 oranında kısaltıyor.

Eğer yazılımda gerçekten ilerlemeyi hedefliyorsanız, kalabalığın içinde kaybolmak yerine size özel bir yolculuğu tercih etmeniz gerekiyor.',
  'Eğitim & Mentörlük',
  'Yusuf İslam Yetkin',
  '4 dk okuma',
  'Bire Bir Mentörlük Neden Bootcamp''ten Daha Etkili? | YTK Academy',
  'Bootcamp ve online kursların neden yetersiz kaldığını ve bire bir yazılım mentörlüğünün öğrenme sürecini nasıl hızlandırdığını keşfedin.',
  'yazılım mentörlüğü, bootcamp alternatifi, yazılım öğrenmek, bire bir eğitim, YTK Academy',
  'https://ytkacademy.com.tr/blogs/bire-bir-mentorluk-neden-bootcampten-etkili'
);

-- Kontrol sorgusu
SELECT id, title, slug, author, read_time FROM blogs ORDER BY id;
