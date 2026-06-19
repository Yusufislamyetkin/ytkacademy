/* ===========================================================================
   YTK Academy — Genişletilmiş Müfredat (C# 12 Ders + SQL 10 Ders)
   app-auth.jsx içinde COURSES sabiti yerine window.YTK_COURSES kullanılır
   =========================================================================== */

window.YTK_COURSES = {
  csharp: {
    title: "C# Programlama Temelleri",
    desc: ".NET ekosisteminde C# temelleri: veri tipleri, OOP, LINQ, async/await ve Entity Framework Core.",
    icon: "💻",
    color: "#569cd6",
    lessons: [
      {
        id: "cs-1",
        title: "Ders 1: C# Nedir ve Nasıl Çalışır?",
        content: `C# (C-Sharp), Microsoft tarafından geliştirilen modern, nesne yönelimli ve güvenli bir programlama dilidir.

### Temel Özellikleri:
* **Nesne Yönelimli (OOP):** Sınıflar, nesneler, kalıtım ve çok biçimlilik gibi prensipleri temel alır.
* **Tip Güvenli (Type-Safe):** Değişken türleri sıkı bir şekilde denetlenir ve bellek hataları önlenir.
* **Cross-Platform:** .NET 8 ile birlikte C# kodları Windows, macOS ve Linux'ta çalışır.
* **Yüksek Performans:** Modern .NET, Node.js ve Python'ı geçen benchmark sonuçları üretiyor.

### Çalışma Mantığı:
C# kodu → **MSIL** (Ara Dil) → **CLR/JIT** → Makine Kodu

### İlk C# Programı:
\`\`\`csharp
using System;

// .NET 6+ ile top-level statements
Console.WriteLine("Merhaba, YTK Academy!");
Console.WriteLine($"Bugünün tarihi: {DateTime.Now:dd.MM.yyyy}");

// Klasik yapı
namespace YtkAcademy
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Merhaba, Dünya!");
            Console.ReadLine();
        }
    }
}
\`\`\`

### Neden C# Öğrenmeliyim?
* Türkiye kurumsal yazılım pazarının büyük çoğunluğu .NET/C# kullanıyor.
* Banka, fintech, e-ticaret ve kamu yazılımları büyük ölçüde C# tabanlı.
* Yüksek maaşlı pozisyonlarda aranan ilk dillerden biri.
* Microsoft, Azure ve modern bulut mimarileriyle tam entegrasyon.`
      },
      {
        id: "cs-2",
        title: "Ders 2: Değişkenler ve Veri Tipleri",
        content: `Değişkenler, program içerisinde işlenecek verilerin geçici olarak bellekte (RAM) saklandığı isimlendirilmiş alanlardır.

### C# Temel Veri Tipleri:
* **int:** 32-bit tam sayı — \`int yas = 25;\`
* **long:** 64-bit büyük tam sayı — \`long nufus = 85_000_000;\`
* **double:** Ondalıklı sayı — \`double pi = 3.14159;\`
* **decimal:** Finansal hesaplama — \`decimal fiyat = 999.99m;\`
* **string:** Metin — \`string isim = "Yusuf";\`
* **bool:** true/false — \`bool aktifMi = true;\`
* **char:** Tek karakter — \`char cinsiyet = 'E';\`

### var ve Type Inference:
\`\`\`csharp
// Explicit tip belirtimi
int sayi = 42;
string ad = "Yusuf";

// var ile otomatik tip çıkarımı
var yas = 28;         // int olarak derlenir
var isim = "Ahmet";   // string olarak derlenir
var fiyat = 99.99;    // double olarak derlenir

// const: Değiştirilemez sabit
const double PI = 3.14159265358979;
const string SITE_URL = "https://ytkacademy.com.tr";
\`\`\`

### String İşlemleri:
\`\`\`csharp
string ad = "Yusuf";
string soyad = "Yetkin";

// String interpolation (önerilen)
string mesaj = $"Merhaba, {ad} {soyad}! Yaşın: {28}";

// Verbatim string (@ ile ters bölü sorun olmaz)
string dosyaYolu = @"C:\Users\Yusuf\Desktop\proje";

// String metodları
Console.WriteLine(ad.ToUpper());         // YUSUF
Console.WriteLine(ad.Length);            // 5
Console.WriteLine(ad.Contains("usu"));  // True
Console.WriteLine("  YTK  ".Trim());    // YTK
Console.WriteLine(ad.Replace("Y","J")); // Jusuf
\`\`\`

### Tip Dönüşümleri:
\`\`\`csharp
// Güvenli dönüşüm (TryParse - hata fırlatmaz)
if (int.TryParse("123", out int sayi))
    Console.WriteLine($"Dönüştürüldü: {sayi}");
else
    Console.WriteLine("Geçersiz sayı!");

// Convert sınıfı
string txt = "42";
int deger = Convert.ToInt32(txt);
bool aktif = Convert.ToBoolean("true");
\`\`\``
      },
      {
        id: "cs-3",
        title: "Ders 3: Karar Yapıları (if-else & switch)",
        content: `Karar yapıları, programın belirli koşullara göre farklı akışlarda ilerlemesini sağlar.

### if-else if-else:
\`\`\`csharp
int not = 78;
string harf;

if (not >= 90) harf = "AA";
else if (not >= 80) harf = "BA";
else if (not >= 70) harf = "BB";
else if (not >= 60) harf = "CB";
else if (not >= 50) harf = "CC";
else harf = "FF";

Console.WriteLine($"Harf notu: {harf}"); // BB
\`\`\`

### switch-case (Klasik):
\`\`\`csharp
string gun = "Pazartesi";

switch (gun)
{
    case "Pazartesi":
    case "Salı":
    case "Çarşamba":
    case "Perşembe":
    case "Cuma":
        Console.WriteLine("İş günü ✓");
        break;
    case "Cumartesi":
    case "Pazar":
        Console.WriteLine("Hafta sonu 🎉");
        break;
    default:
        Console.WriteLine("Geçersiz gün!");
        break;
}
\`\`\`

### switch Expression (C# 8+ - Modern):
\`\`\`csharp
string durum = gun switch
{
    "Pazartesi" or "Salı" or "Çarşamba"
    or "Perşembe" or "Cuma" => "İş günü",
    "Cumartesi" or "Pazar" => "Hafta sonu",
    _ => "Bilinmiyor"
};
\`\`\`

### Ternary ve Null Operatörler:
\`\`\`csharp
int yas = 20;
string etiket = (yas >= 18) ? "Yetişkin" : "Çocuk";

// Null coalescing ??
string? isim = null;
string gosterilecek = isim ?? "Anonim";

// Null conditional ?.
string? uzunluk = isim?.ToUpper(); // null, hata fırlatmaz
\`\`\``
      },
      {
        id: "cs-4",
        title: "Ders 4: Döngüler (for, while, foreach)",
        content: `Döngüler, bir kod bloğunun belirli bir koşul sağlandığı sürece tekrarlanmasını sağlar.

### for Döngüsü:
\`\`\`csharp
// 1'den 10'a çarpım tablosu
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine($"7 x {i} = {7 * i}");
}

// Geriye sayma
for (int i = 10; i >= 1; i--)
    Console.Write(i + " ");
// Çıktı: 10 9 8 7 6 5 4 3 2 1
\`\`\`

### while Döngüsü:
\`\`\`csharp
// Kullanıcı doğru şifreyi girene kadar sor
int deneme = 0;
const string dogru = "ytk2024";

while (deneme < 3)
{
    Console.Write("Şifreyi girin: ");
    string girilen = Console.ReadLine() ?? "";

    if (girilen == dogru)
    {
        Console.WriteLine("Giriş başarılı! ✓");
        break;
    }
    deneme++;
    Console.WriteLine($"Hatalı! Kalan hak: {3 - deneme}");
}
if (deneme == 3)
    Console.WriteLine("Hesap kilitlendi!");
\`\`\`

### foreach Döngüsü:
\`\`\`csharp
string[] ogrenciler = { "Ahmet", "Mehmet", "Ayşe", "Fatma" };

foreach (string ogrenci in ogrenciler)
{
    Console.WriteLine($"  • {ogrenci}");
}
\`\`\`

### break ve continue:
\`\`\`csharp
for (int i = 1; i <= 10; i++)
{
    if (i % 2 == 0) continue; // Çiftleri atla
    if (i == 9) break;        // 9'da dur
    Console.Write(i + " ");
}
// Çıktı: 1 3 5 7
\`\`\``
      },
      {
        id: "cs-5",
        title: "Ders 5: Metotlar (Methods)",
        content: `Metotlar, belirli bir işi yapan ve gerektiğinde çağrılan yeniden kullanılabilir kod bloklarıdır.

### Temel Metot Yapısı:
\`\`\`csharp
// [erişim belirteci] [dönüş tipi] MetotAdı([parametreler])
public static int Topla(int a, int b)
{
    return a + b;
}

// Expression body (tek satır) — C# 6+
public static int Carp(int a, int b) => a * b;
\`\`\`

### Parametre Çeşitleri:
\`\`\`csharp
// Varsayılan parametre değeri
static double KDVHesapla(double fiyat, double kdvOrani = 0.20)
    => fiyat * (1 + kdvOrani);

// İsimli parametre
KDVHesapla(fiyat: 100, kdvOrani: 0.08); // 108

// params — Değişken sayıda parametre
static int Topla(params int[] sayilar)
    => sayilar.Sum();

Topla(1, 2, 3, 4, 5); // 15
\`\`\`

### out ve ref Parametreler:
\`\`\`csharp
static void MinMax(int[] dizi, out int min, out int max)
{
    min = dizi.Min();
    max = dizi.Max();
}

int[] arr = { 3, 7, 1, 9, 4 };
MinMax(arr, out int enKucuk, out int enBuyuk);
Console.WriteLine($"Min: {enKucuk}, Max: {enBuyuk}"); // Min: 1, Max: 9
\`\`\`

### Metot Aşırı Yüklemesi (Overloading):
\`\`\`csharp
static string Formatla(int sayi) => sayi.ToString("N0");
static string Formatla(double sayi) => sayi.ToString("F2");
static string Formatla(decimal para) => para.ToString("C");

Console.WriteLine(Formatla(1000000));  // 1.000.000
Console.WriteLine(Formatla(3.14159)); // 3,14
Console.WriteLine(Formatla(999.99m)); // ₺999,99
\`\`\``
      },
      {
        id: "cs-6",
        title: "Ders 6: Sınıflar ve OOP",
        content: `Nesne Yönelimli Programlama (OOP), gerçek dünyadaki varlıkları kod olarak modelleme yaklaşımıdır.

### Sınıf Tasarımı (Gerçek Senaryo):
\`\`\`csharp
public class BankaHesabi
{
    // Private field — dışarıdan doğrudan erişilemez
    private decimal _bakiye;
    private readonly List<string> _islemGecmisi;

    // Properties
    public string HesapNo { get; private set; }
    public string SahibiAdi { get; set; }
    public decimal Bakiye => _bakiye; // Salt okunur

    // Constructor
    public BankaHesabi(string hesapNo, string sahibiAdi, decimal baslangicBakiyesi = 0)
    {
        HesapNo = hesapNo;
        SahibiAdi = sahibiAdi;
        _bakiye = baslangicBakiyesi;
        _islemGecmisi = new List<string>();
    }

    // Para yatırma
    public void ParaYatir(decimal tutar)
    {
        if (tutar <= 0) throw new ArgumentException("Tutar pozitif olmalı!");
        _bakiye += tutar;
        _islemGecmisi.Add($"+{tutar:C} yatırıldı. Bakiye: {_bakiye:C}");
    }

    // Para çekme
    public bool ParaCek(decimal tutar)
    {
        if (tutar <= 0 || tutar > _bakiye) return false;
        _bakiye -= tutar;
        _islemGecmisi.Add($"-{tutar:C} çekildi. Bakiye: {_bakiye:C}");
        return true;
    }

    public void IslemGecmisiniGoster()
    {
        foreach (var islem in _islemGecmisi)
            Console.WriteLine($"  • {islem}");
    }
}

// Kullanım
var hesap = new BankaHesabi("TR33-0001", "Yusuf Yetkin", 5000m);
hesap.ParaYatir(2500m);
hesap.ParaCek(1000m);
hesap.IslemGecmisiniGoster();
\`\`\`

### 4 Temel OOP Prensibi:
* **Encapsulation:** Veriler private, erişim property/metot üzerinden.
* **Inheritance:** Alt sınıf üst sınıfın özelliklerini miras alır.
* **Polymorphism:** Aynı metot farklı davranışlar sergileyebilir (override).
* **Abstraction:** Karmaşık detayları gizleyip sade arayüz sunmak.`
      },
      {
        id: "cs-7",
        title: "Ders 7: Koleksiyonlar (List, Dictionary, Array)",
        content: `C#'ta birden fazla veriyi bir arada tutmak için koleksiyonlar kullanılır.

### Array (Dizi) — Sabit boyutlu:
\`\`\`csharp
int[] notlar = { 85, 92, 78, 95, 88 };
double ort = notlar.Average();
int max = notlar.Max();

// 2D dizi
int[,] matris = { { 1, 2, 3 }, { 4, 5, 6 } };
Console.WriteLine(matris[1, 2]); // 6
\`\`\`

### List<T> — Dinamik liste:
\`\`\`csharp
var ogrenciler = new List<string> { "Ahmet", "Mehmet", "Ayşe" };

ogrenciler.Add("Fatma");
ogrenciler.Insert(0, "Zeynep"); // İndekse ekle
ogrenciler.Remove("Mehmet");
ogrenciler.Sort();

Console.WriteLine($"Sayı: {ogrenciler.Count}");
Console.WriteLine(string.Join(", ", ogrenciler));

// Arama
bool varMi = ogrenciler.Contains("Ahmet");
int indeks = ogrenciler.IndexOf("Ahmet");
\`\`\`

### Dictionary<TKey, TValue> — Anahtar-Değer:
\`\`\`csharp
var notSistemi = new Dictionary<string, int>
{
    ["Ahmet"] = 85,
    ["Mehmet"] = 72,
    ["Ayşe"] = 95
};

// Değer okuma
int ahmetNot = notSistemi["Ahmet"];

// Güvenli okuma
if (notSistemi.TryGetValue("Ali", out int aliNot))
    Console.WriteLine($"Ali: {aliNot}");

// Yeni kayıt ekleme/güncelleme
notSistemi["Fatma"] = 91;

// Döngü
foreach (var (isim, not) in notSistemi)
    Console.WriteLine($"{isim}: {not}");
\`\`\``
      },
      {
        id: "cs-8",
        title: "Ders 8: Kalıtım (Inheritance) ve Interface",
        content: `Kalıtım, kod tekrarını önleyerek sınıflar arasında özellik paylaşımı sağlar.

### Kalıtım Örneği:
\`\`\`csharp
// Temel sınıf
public abstract class Calisan
{
    public int Id { get; set; }
    public string Ad { get; set; }
    public decimal MaasBase { get; protected set; }

    public Calisan(int id, string ad, decimal maas)
    {
        Id = id; Ad = ad; MaasBase = maas;
    }

    // abstract: Alt sınıflar ZORUNDA override eder
    public abstract decimal NetMaasHesapla();

    // virtual: Alt sınıflar isteğe bağlı override edebilir
    public virtual string Tanitim()
        => $"Çalışan #{Id}: {Ad}";
}

// Türetilmiş sınıflar
public class Yazilimci : Calisan
{
    public string Dil { get; set; }

    public Yazilimci(int id, string ad, decimal maas, string dil)
        : base(id, ad, maas)
    {
        Dil = dil;
    }

    public override decimal NetMaasHesapla()
        => MaasBase * 0.85m + 2000m; // Vergi sonrası + teknoloji bonusu

    public override string Tanitim()
        => base.Tanitim() + $" | {Dil} Developer";
}
\`\`\`

### Interface (Arayüz) — Sözleşme:
\`\`\`csharp
public interface IOdeme
{
    string OdemeYontemi { get; }
    bool OdemeYap(decimal tutar, string aciklama);
}

public class KrediKarti : IOdeme
{
    public string OdemeYontemi => "Kredi Kartı";
    public bool OdemeYap(decimal tutar, string aciklama)
    {
        Console.WriteLine($"💳 {tutar:C} - {aciklama}");
        return true;
    }
}

// Polymorphism: Hangi implementasyon olduğu önemli değil
IOdeme odeme = new KrediKarti();
odeme.OdemeYap(299.99m, "YTK Academy Mentörlük");
\`\`\``
      },
      {
        id: "cs-9",
        title: "Ders 9: Hata Yönetimi (try-catch-finally)",
        content: `Hata yönetimi, programların beklenmedik durumlarla karşılaştığında çökmesini önler.

### try-catch-finally:
\`\`\`csharp
try
{
    Console.Write("Bölünen sayıyı girin: ");
    int a = int.Parse(Console.ReadLine()!);

    Console.Write("Bölen sayıyı girin: ");
    int b = int.Parse(Console.ReadLine()!);

    Console.WriteLine($"Sonuç: {a / b}");
}
catch (FormatException)
{
    Console.WriteLine("❌ Hata: Geçerli bir sayı girilmedi!");
}
catch (DivideByZeroException)
{
    Console.WriteLine("❌ Hata: Sıfıra bölme yapılamaz!");
}
catch (Exception ex)
{
    Console.WriteLine($"❌ Beklenmedik hata: {ex.Message}");
    // Loglama sistemi burada devreye girer
}
finally
{
    // Her zaman çalışır — kaynak temizliği için ideal
    Console.WriteLine("İşlem sonlandı. (finally)");
}
\`\`\`

### Özel Exception Sınıfı:
\`\`\`csharp
public class YetersizBakiyeException : Exception
{
    public decimal Bakiye { get; }
    public decimal IstenenTutar { get; }

    public YetersizBakiyeException(decimal bakiye, decimal istenen)
        : base($"Yetersiz bakiye! Mevcut: {bakiye:C}, İstenen: {istenen:C}")
    {
        Bakiye = bakiye;
        IstenenTutar = istenen;
    }
}

// Kullanım
public void ParaCek(decimal tutar)
{
    if (tutar > _bakiye)
        throw new YetersizBakiyeException(_bakiye, tutar);

    _bakiye -= tutar;
}
\`\`\``
      },
      {
        id: "cs-10",
        title: "Ders 10: LINQ ile Veri Sorgulama",
        content: `LINQ (Language Integrated Query), C# koleksiyonlarını SQL benzeri sözdizimi ile sorgulamanızı sağlar.

### Temel LINQ Metodları:
\`\`\`csharp
using System.Linq;

var urunler = new List<Urun>
{
    new() { Ad = "Laptop",   Fiyat = 45000, Kategori = "Elektronik", Stok = 5  },
    new() { Ad = "Mouse",    Fiyat = 350,   Kategori = "Elektronik", Stok = 50 },
    new() { Ad = "Masa",     Fiyat = 3500,  Kategori = "Mobilya",    Stok = 8  },
    new() { Ad = "Sandalye", Fiyat = 2000,  Kategori = "Mobilya",    Stok = 12 },
    new() { Ad = "Kalem",    Fiyat = 15,    Kategori = "Kirtasiye",  Stok = 200}
};

// Filtreleme
var pahalılar = urunler.Where(u => u.Fiyat > 1000).ToList();

// Sıralama
var ucuzdan = urunler.OrderBy(u => u.Fiyat).ToList();
var pahalidan = urunler.OrderByDescending(u => u.Fiyat).ToList();

// Dönüşüm
var adlar = urunler.Select(u => u.Ad).ToList();
var ozet = urunler.Select(u => new { u.Ad, u.Fiyat }).ToList();

// Tek eleman
var enPahalı = urunler.MaxBy(u => u.Fiyat);
var laptop = urunler.FirstOrDefault(u => u.Ad == "Laptop");
\`\`\`

### Gruplama ve İstatistik:
\`\`\`csharp
// Kategoriye göre grupla
var gruplama = urunler
    .GroupBy(u => u.Kategori)
    .Select(g => new
    {
        Kategori = g.Key,
        UrunSayisi = g.Count(),
        ToplamDeger = g.Sum(u => u.Fiyat * u.Stok),
        OrtalamaFiyat = g.Average(u => u.Fiyat)
    })
    .OrderByDescending(g => g.ToplamDeger);

foreach (var g in gruplama)
    Console.WriteLine($"{g.Kategori}: {g.UrunSayisi} ürün, {g.ToplamDeger:C}");
\`\`\``
      },
      {
        id: "cs-11",
        title: "Ders 11: Asenkron Programlama (async/await)",
        content: `Asenkron programlama, I/O işlemleri sırasında uygulamanın bloke olmasını önler. Web API, veritabanı ve dosya işlemleri için kritiktir.

### async/await Temelleri:
\`\`\`csharp
using System.Net.Http;
using System.Text.Json;

// Task: Sonucu beklenebilir asenkron işlem
public async Task<string> VeriGetirAsync(string url)
{
    using var client = new HttpClient();
    // await: Bekle ama thread'i bloke etme
    string json = await client.GetStringAsync(url);
    return json;
}

// Task<T>: Değer döndüren asenkron metot
public async Task<List<Urun>> UrunleriGetirAsync()
{
    using var client = new HttpClient();
    var response = await client.GetAsync("https://api.ytkacademy.com.tr/urunler");
    response.EnsureSuccessStatusCode();

    string json = await response.Content.ReadAsStringAsync();
    return JsonSerializer.Deserialize<List<Urun>>(json)!;
}
\`\`\`

### Paralel Asenkron İşlemler:
\`\`\`csharp
public async Task<(List<Urun> urunler, List<Kullanici> kullanicilar)> VeriYukleAsync()
{
    // İkisini aynı anda başlat
    var urunTask = UrunleriGetirAsync();
    var kullaniciTask = KullanicilariGetirAsync();

    // İkisinin de tamamlanmasını bekle
    await Task.WhenAll(urunTask, kullaniciTask);

    return (await urunTask, await kullaniciTask);
}
\`\`\`

### CancellationToken — İptal Desteği:
\`\`\`csharp
public async Task UzunIslemAsync(CancellationToken ct)
{
    for (int i = 0; i < 100; i++)
    {
        ct.ThrowIfCancellationRequested(); // İptal istendi mi?
        await Task.Delay(100, ct);
        Console.WriteLine($"Adım {i + 1}/100");
    }
}

// Kullanım
using var cts = new CancellationTokenSource(timeout: TimeSpan.FromSeconds(5));
await UzunIslemAsync(cts.Token);
\`\`\``
      },
      {
        id: "cs-12",
        title: "Ders 12: Entity Framework Core",
        content: `Entity Framework Core (EF Core), C# sınıfları ile veritabanı tabloları arasında köprü kuran ORM aracıdır.

### DbContext ve Entity Tanımlama:
\`\`\`csharp
using Microsoft.EntityFrameworkCore;

// Entity sınıfı → Veritabanı tablosu
public class Urun
{
    public int Id { get; set; }
    public required string Ad { get; set; }
    public decimal Fiyat { get; set; }
    public int Stok { get; set; }
    public bool AktifMi { get; set; } = true;
    public DateTime OlusturmaTarihi { get; set; } = DateTime.UtcNow;

    // İlişki: Foreign Key
    public int KategoriId { get; set; }
    public Kategori Kategori { get; set; } = null!;
}

// DbContext: Veritabanı bağlantı yöneticisi
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<Urun> Urunler => Set<Urun>();
    public DbSet<Kategori> Kategoriler => Set<Kategori>();

    protected override void OnModelCreating(ModelBuilder mb)
    {
        mb.Entity<Urun>()
          .Property(u => u.Fiyat)
          .HasPrecision(18, 2);

        mb.Entity<Urun>()
          .HasOne(u => u.Kategori)
          .WithMany(k => k.Urunler)
          .HasForeignKey(u => u.KategoriId);
    }
}
\`\`\`

### CRUD İşlemleri:
\`\`\`csharp
await using var db = new AppDbContext(options);

// CREATE
var yeniUrun = new Urun { Ad = "MacBook Pro", Fiyat = 85000m, KategoriId = 1 };
db.Urunler.Add(yeniUrun);
await db.SaveChangesAsync();

// READ — LINQ ile
var elektronikler = await db.Urunler
    .Include(u => u.Kategori)         // JOIN (eager loading)
    .Where(u => u.AktifMi && u.Stok > 0)
    .OrderByDescending(u => u.Fiyat)
    .Take(10)
    .ToListAsync();

// UPDATE
var urun = await db.Urunler.FindAsync(1);
if (urun is not null)
{
    urun.Fiyat = 79000m;
    urun.Stok -= 1;
    await db.SaveChangesAsync();
}

// DELETE
var silinecek = await db.Urunler.FindAsync(5);
if (silinecek is not null)
{
    db.Urunler.Remove(silinecek);
    await db.SaveChangesAsync();
}
\`\`\`

### Migration Komutları:
\`\`\`csharp
// Terminal (Package Manager Console veya CLI)
// dotnet ef migrations add InitialCreate
// dotnet ef database update
// dotnet ef migrations list
\`\`\``
      }
    ]
  },

  sql: {
    title: "SQL Veritabanı Temelleri",
    desc: "İlişkisel veritabanı tasarımı, DDL/DML komutları, JOIN, index, stored procedure ve transaction yönetimi.",
    icon: "🗄️",
    color: "#ffd166",
    lessons: [
      {
        id: "sql-1",
        title: "Ders 1: SQL Nedir? Temel Kavramlar",
        content: `SQL (Structured Query Language), ilişkisel veritabanlarında verileri sorgulamak, eklemek, güncellemek ve yönetmek için kullanılan standart dildir.

### Temel Kavramlar:
* **Veritabanı (Database):** Birbiriyle ilişkili verilerin düzenli saklandığı yapı.
* **Tablo (Table):** Satır ve sütun yapısında veri depolayan nesne.
* **Primary Key (PK):** Her satırı benzersiz tanımlayan sütun.
* **Foreign Key (FK):** Başka tablonun PK'sına referans veren sütun.
* **Index:** Sorgulama hızını artıran yapı.
* **Schema:** Tablolar ve nesnelerin gruplanma mantığı.

### SQL Komut Kategorileri:
* **DDL:** CREATE, ALTER, DROP — Yapı yönetimi
* **DML:** INSERT, UPDATE, DELETE — Veri yönetimi
* **DQL:** SELECT — Veri sorgulama
* **DCL:** GRANT, REVOKE — Yetki yönetimi
* **TCL:** COMMIT, ROLLBACK — Transaction yönetimi

### İlk SQL Komutları:
\`\`\`sql
-- Veritabanı oluştur
CREATE DATABASE YtkAcademy;
GO

-- Veritabanını seç
USE YtkAcademy;
GO

-- Mevcut tabloları listele
SELECT TABLE_NAME
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_TYPE = 'BASE TABLE';
\`\`\`

### Neden SQL Öğrenmeliyim?
Her yazılım geliştirici veri tabanıyla çalışır. SQL bilmeden backend geliştirici olunamaz. Türkiye'deki iş ilanlarının %90'ında SQL zorunlu veya tercih edilen beceri olarak yer alır.`
      },
      {
        id: "sql-2",
        title: "Ders 2: Tablo Oluşturma (CREATE TABLE)",
        content: `Veritabanında veri saklamak için tablo oluşturulur. Her sütunun veri tipi ve kısıtlamaları belirlenir.

### Yaygın Veri Tipleri:
* **INT / BIGINT:** Tam sayılar
* **NVARCHAR(n):** Unicode metin (Türkçe için tercih edilir)
* **DECIMAL(p,s):** Ondalıklı sayı — ör. DECIMAL(10,2) = 12345678.90
* **BIT:** 0/1 (boolean)
* **DATETIME / DATE:** Tarih ve saat
* **UNIQUEIDENTIFIER:** GUID

### Gerçek Bir E-Ticaret Şeması:
\`\`\`sql
CREATE TABLE Kategoriler (
    Id    INT IDENTITY(1,1) PRIMARY KEY,
    Ad    NVARCHAR(100) NOT NULL,
    Slug  NVARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Kullanicilar (
    Id               INT IDENTITY(1,1) PRIMARY KEY,
    Ad               NVARCHAR(50)  NOT NULL,
    Soyad            NVARCHAR(50)  NOT NULL,
    Email            NVARCHAR(100) NOT NULL UNIQUE,
    SifreHash        NVARCHAR(255) NOT NULL,
    Telefon          NVARCHAR(20)  NULL,
    AktifMi          BIT           NOT NULL DEFAULT 1,
    OlusturmaTarihi  DATETIME      NOT NULL DEFAULT GETDATE(),
    SonGirisTarihi   DATETIME      NULL
);

CREATE TABLE Urunler (
    Id               INT IDENTITY(1,1) PRIMARY KEY,
    KategoriId       INT            NOT NULL,
    Ad               NVARCHAR(200)  NOT NULL,
    Aciklama         NVARCHAR(MAX)  NULL,
    Fiyat            DECIMAL(10,2)  NOT NULL,
    StokAdedi        INT            NOT NULL DEFAULT 0,
    AktifMi          BIT            NOT NULL DEFAULT 1,
    OlusturmaTarihi  DATETIME       NOT NULL DEFAULT GETDATE(),

    CONSTRAINT FK_Urunler_Kategoriler
        FOREIGN KEY (KategoriId) REFERENCES Kategoriler(Id),
    CONSTRAINT CK_Urunler_Fiyat
        CHECK (Fiyat >= 0),
    CONSTRAINT CK_Urunler_Stok
        CHECK (StokAdedi >= 0)
);
\`\`\`

### Tablo Güncelleme ve Silme:
\`\`\`sql
-- Sütun ekle
ALTER TABLE Urunler ADD ResimUrl NVARCHAR(500) NULL;

-- Sütun tipi değiştir
ALTER TABLE Urunler ALTER COLUMN Aciklama NVARCHAR(2000);

-- Tablo sil (dikkatli!)
DROP TABLE IF EXISTS GeciciTablo;
\`\`\``
      },
      {
        id: "sql-3",
        title: "Ders 3: SELECT ve Filtreleme",
        content: `SELECT, veritabanından veri okumak için kullanılan en temel SQL komutudur.

### Temel SELECT:
\`\`\`sql
-- Tüm sütunlar (production'da kaçının, yavaş!)
SELECT * FROM Urunler;

-- Belirli sütunlar
SELECT Id, Ad, Fiyat, StokAdedi FROM Urunler;

-- Hesaplamalı sütun ve alias
SELECT
    Ad,
    Fiyat,
    Fiyat * 1.20 AS KDVliFiyat,
    StokAdedi * Fiyat AS ToplamDeger,
    GETDATE() AS SorguTarihi
FROM Urunler;
\`\`\`

### WHERE ile Filtreleme:
\`\`\`sql
-- Temel koşul
SELECT * FROM Urunler WHERE Fiyat > 1000;

-- BETWEEN
SELECT * FROM Urunler WHERE Fiyat BETWEEN 500 AND 5000;

-- IN listesi
SELECT * FROM Urunler WHERE KategoriId IN (1, 3, 5);

-- LIKE — metin arama
SELECT * FROM Urunler WHERE Ad LIKE '%laptop%';   -- içerir
SELECT * FROM Kullanicilar WHERE Email LIKE '%@gmail.com'; -- biter

-- NULL kontrolü
SELECT * FROM Kullanicilar WHERE Telefon IS NULL;

-- Birleşik koşullar
SELECT * FROM Urunler
WHERE AktifMi = 1
  AND StokAdedi > 0
  AND (Fiyat < 1000 OR KategoriId = 5);
\`\`\`

### Sıralama ve Sayfalama:
\`\`\`sql
-- Sıralama
SELECT Ad, Fiyat FROM Urunler
ORDER BY Fiyat DESC, Ad ASC;

-- TOP ile limit (SQL Server)
SELECT TOP 5 * FROM Urunler ORDER BY Fiyat DESC;

-- Sayfalama (OFFSET-FETCH)
-- 2. sayfa, sayfa başına 10 ürün
SELECT Id, Ad, Fiyat FROM Urunler
ORDER BY Id
OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;
\`\`\``
      },
      {
        id: "sql-4",
        title: "Ders 4: INSERT, UPDATE ve DELETE",
        content: `Veritabanındaki verileri eklemek, güncellemek ve silmek için DML komutları kullanılır.

### INSERT — Veri Ekleme:
\`\`\`sql
-- Tek kayıt
INSERT INTO Kategoriler (Ad, Slug)
VALUES ('Elektronik', 'elektronik');

-- Birden fazla kayıt
INSERT INTO Kategoriler (Ad, Slug) VALUES
    ('Giyim',     'giyim'),
    ('Kitap',     'kitap'),
    ('Spor',      'spor'),
    ('Mobilya',   'mobilya');

-- Son eklenen ID'yi al
INSERT INTO Urunler (KategoriId, Ad, Fiyat)
VALUES (1, 'MacBook Pro M3', 85000);
SELECT SCOPE_IDENTITY() AS YeniId; -- Sadece o işlem

-- SELECT'ten INSERT
INSERT INTO ArsivUrunler (Ad, Fiyat, SilinmeTarihi)
SELECT Ad, Fiyat, GETDATE()
FROM Urunler
WHERE AktifMi = 0;
\`\`\`

### UPDATE — Güncelleme:
\`\`\`sql
-- ⚠️ WHERE olmadan TÜM satırlar değişir!

-- Tek kayıt
UPDATE Kullanicilar
SET SonGirisTarihi = GETDATE()
WHERE Id = 42;

-- Toplu güncelleme
UPDATE Urunler
SET
    Fiyat = Fiyat * 1.10,          -- %10 zam
    GuncellemeTarihi = GETDATE()
WHERE KategoriId = 1 AND AktifMi = 1;
\`\`\`

### DELETE — Silme:
\`\`\`sql
-- ⚠️ WHERE olmadan TÜM kayıtlar silinir!

DELETE FROM Urunler WHERE Id = 99;

-- Koşullu silme
DELETE FROM Urunler
WHERE StokAdedi = 0 AND AktifMi = 0;

-- Hızlı tablo temizleme (geri alınamaz!)
TRUNCATE TABLE GeciciLog;
\`\`\`

### OUTPUT Clause — Ne Değişti?
\`\`\`sql
-- Silinen kayıtları göster
DELETE FROM Urunler
OUTPUT DELETED.Id, DELETED.Ad, DELETED.Fiyat
WHERE AktifMi = 0;
\`\`\``
      },
      {
        id: "sql-5",
        title: "Ders 5: JOIN İşlemleri",
        content: `İlişkisel veritabanlarında veriler farklı tablolarda saklanır. JOIN ile tablolar birleştirilir.

### INNER JOIN — Sadece Eşleşenler:
\`\`\`sql
SELECT
    u.Id,
    u.Ad AS UrunAdi,
    k.Ad AS Kategori,
    u.Fiyat,
    u.StokAdedi
FROM Urunler u
INNER JOIN Kategoriler k ON u.KategoriId = k.Id
WHERE u.AktifMi = 1
ORDER BY k.Ad, u.Fiyat;
\`\`\`

### LEFT JOIN — Sol Tablonun Tamamı:
\`\`\`sql
-- Siparişi olmayan müşterileri de listele
SELECT
    k.Ad + ' ' + k.Soyad AS Musteri,
    k.Email,
    COUNT(s.Id)    AS SiparisSayisi,
    SUM(s.Tutar)   AS ToplamHarcama
FROM Kullanicilar k
LEFT JOIN Siparisler s ON k.Id = s.KullaniciId
GROUP BY k.Id, k.Ad, k.Soyad, k.Email
ORDER BY ToplamHarcama DESC;
\`\`\`

### Çoklu JOIN — Sipariş Detay Raporu:
\`\`\`sql
SELECT
    s.Id AS SiparisNo,
    k.Ad + ' ' + k.Soyad AS MusteriAdi,
    u.Ad AS UrunAdi,
    kat.Ad AS Kategori,
    sd.Adet,
    sd.BirimFiyat,
    sd.Adet * sd.BirimFiyat AS SatirToplam
FROM Siparisler s
INNER JOIN Kullanicilar k  ON s.KullaniciId = k.Id
INNER JOIN SiparisDetay sd ON s.Id = sd.SiparisId
INNER JOIN Urunler u       ON sd.UrunId = u.Id
INNER JOIN Kategoriler kat ON u.KategoriId = kat.Id
WHERE s.Durum = 'Tamamlandi'
ORDER BY s.OlusturmaTarihi DESC;
\`\`\``
      },
      {
        id: "sql-6",
        title: "Ders 6: GROUP BY ve Aggregate Fonksiyonlar",
        content: `Verileri gruplamak ve istatistiksel hesaplamalar yapmak için kullanılır.

### Aggregate Fonksiyonlar:
\`\`\`sql
SELECT
    COUNT(*)          AS ToplamUrun,
    COUNT(DISTINCT KategoriId) AS FarkliKategori,
    SUM(StokAdedi)    AS ToplamStok,
    AVG(Fiyat)        AS OrtFiyat,
    MIN(Fiyat)        AS EnDusuk,
    MAX(Fiyat)        AS EnYuksek,
    SUM(Fiyat * StokAdedi) AS ToplamDeger
FROM Urunler
WHERE AktifMi = 1;
\`\`\`

### GROUP BY ile Gruplama:
\`\`\`sql
SELECT
    k.Ad AS Kategori,
    COUNT(u.Id)            AS UrunSayisi,
    AVG(u.Fiyat)           AS OrtFiyat,
    SUM(u.StokAdedi * u.Fiyat) AS ToplamDeger
FROM Kategoriler k
LEFT JOIN Urunler u ON k.Id = u.KategoriId AND u.AktifMi = 1
GROUP BY k.Id, k.Ad
ORDER BY ToplamDeger DESC;
\`\`\`

### HAVING — Grup Filtresi:
\`\`\`sql
-- 5'ten fazla sipariş veren ve 10.000 TL+ harcayan müşteriler
SELECT
    k.Ad + ' ' + k.Soyad AS Musteri,
    COUNT(s.Id)   AS SiparisSayisi,
    SUM(s.Tutar)  AS ToplamHarcama
FROM Kullanicilar k
INNER JOIN Siparisler s ON k.Id = s.KullaniciId
WHERE s.Durum = 'Tamamlandi'     -- Satır filtresi
GROUP BY k.Id, k.Ad, k.Soyad
HAVING COUNT(s.Id) > 5           -- Grup filtresi
   AND SUM(s.Tutar) > 10000
ORDER BY ToplamHarcama DESC;
\`\`\`

### Aylık Satış Raporu:
\`\`\`sql
SELECT
    YEAR(OlusturmaTarihi) AS Yil,
    MONTH(OlusturmaTarihi) AS Ay,
    FORMAT(OlusturmaTarihi, 'MMMM', 'tr-TR') AS AyAdi,
    COUNT(*) AS SiparisSayisi,
    SUM(Tutar) AS AylikCiro
FROM Siparisler
WHERE Durum = 'Tamamlandi'
GROUP BY YEAR(OlusturmaTarihi), MONTH(OlusturmaTarihi),
         FORMAT(OlusturmaTarihi, 'MMMM', 'tr-TR')
ORDER BY Yil DESC, Ay DESC;
\`\`\``
      },
      {
        id: "sql-7",
        title: "Ders 7: Alt Sorgular ve CTE",
        content: `Alt sorgular ve CTE'ler, karmaşık sorguları okunabilir yapılara dönüştürür.

### Subquery (Alt Sorgu):
\`\`\`sql
-- Ortalama fiyatın üzerindeki ürünler
SELECT Ad, Fiyat,
       (SELECT AVG(Fiyat) FROM Urunler WHERE AktifMi = 1) AS OrtFiyat
FROM Urunler
WHERE Fiyat > (SELECT AVG(Fiyat) FROM Urunler WHERE AktifMi = 1)
ORDER BY Fiyat DESC;

-- Hiç sipariş vermemiş müşteriler (NOT EXISTS — daha verimli)
SELECT Ad, Email
FROM Kullanicilar k
WHERE NOT EXISTS (
    SELECT 1 FROM Siparisler s
    WHERE s.KullaniciId = k.Id
);

-- En çok satan ürünün kategorisi
SELECT * FROM Kategoriler
WHERE Id = (
    SELECT TOP 1 u.KategoriId
    FROM SiparisDetay sd
    INNER JOIN Urunler u ON sd.UrunId = u.Id
    GROUP BY u.KategoriId
    ORDER BY SUM(sd.Adet) DESC
);
\`\`\`

### CTE (Common Table Expression):
\`\`\`sql
-- WITH ile okunabilir ara sorgu tanımla
WITH AylıkSatislar AS (
    SELECT
        KullaniciId,
        YEAR(OlusturmaTarihi)  AS Yil,
        MONTH(OlusturmaTarihi) AS Ay,
        COUNT(*) AS SiparisSayisi,
        SUM(Tutar) AS ToplamTutar
    FROM Siparisler
    WHERE Durum = 'Tamamlandi'
    GROUP BY KullaniciId, YEAR(OlusturmaTarihi), MONTH(OlusturmaTarihi)
),
VipMusteriler AS (
    SELECT KullaniciId
    FROM AylıkSatislar
    WHERE ToplamTutar > 50000
    GROUP BY KullaniciId
)
SELECT k.Ad, k.Email, 'VIP' AS Segment
FROM Kullanicilar k
INNER JOIN VipMusteriler v ON k.Id = v.KullaniciId;
\`\`\``
      },
      {
        id: "sql-8",
        title: "Ders 8: Index ve Performans",
        content: `Index'ler, büyük tablolarda sorgu hızını dramatik biçimde artırır.

### Index Nedir?
Kitabın arka sayfasındaki dizin gibi: tüm sayfaları taramak yerine doğrudan konuya atlar.

### Index Türleri ve Oluşturma:
\`\`\`sql
-- Clustered Index (tablo sıralaması — PRIMARY KEY varsayılan)
-- Her tabloda sadece 1 tane olabilir

-- Non-Clustered Index (en yaygın)
CREATE INDEX IX_Urunler_Fiyat
ON Urunler (Fiyat);

-- Composite Index (birden fazla sütun)
CREATE INDEX IX_Siparisler_Musteri_Tarih
ON Siparisler (KullaniciId, OlusturmaTarihi DESC);

-- Unique Index
CREATE UNIQUE INDEX UIX_Kullanicilar_Email
ON Kullanicilar (Email);

-- Covering Index (sık sorgulanan sütunları dahil et)
CREATE INDEX IX_Urunler_Kategori_Covering
ON Urunler (KategoriId)
INCLUDE (Ad, Fiyat, StokAdedi);
\`\`\`

### Performans Analizi:
\`\`\`sql
-- Sorgu çalışma planını gör (SSMS'de)
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

SELECT * FROM Urunler WHERE Fiyat BETWEEN 1000 AND 5000;

-- "Table Scan" kötü → Index ekle
-- "Index Seek" iyi → Hızlı çalışıyor

-- Mevcut index'leri listele
SELECT
    i.name AS IndexAdi,
    i.type_desc AS Tur,
    c.name AS Sutun
FROM sys.indexes i
JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
JOIN sys.columns c ON ic.object_id = c.object_id AND ic.column_id = c.column_id
WHERE i.object_id = OBJECT_ID('Urunler');
\`\`\`

### Index Ne Zaman Eklemeliyim?
\`\`\`sql
-- ✅ Ekle: WHERE, JOIN, ORDER BY'da sık kullanılan sütunlar
-- ✅ Ekle: Yüz binlerce kayıt içeren tablolar
-- ❌ Ekleme: Çok sık INSERT/UPDATE olan sütunlar (index güncelleme maliyeti)
-- ❌ Ekleme: Küçük tablolar (zaten hızlı)
\`\`\``
      },
      {
        id: "sql-9",
        title: "Ders 9: View ve Stored Procedure",
        content: `View ve Stored Procedure, SQL sorgularını yeniden kullanılabilir yapılara dönüştürür.

### VIEW — Sanal Tablo:
\`\`\`sql
-- View oluştur: Karmaşık JOIN'i basitleştir
CREATE VIEW vw_UrunDetay AS
SELECT
    u.Id,
    u.Ad AS UrunAdi,
    k.Ad AS Kategori,
    u.Fiyat,
    u.Fiyat * 1.20 AS KDVliFiyat,
    u.StokAdedi,
    CASE
        WHEN u.StokAdedi = 0    THEN 'Tükendi'
        WHEN u.StokAdedi < 5    THEN 'Kritik'
        WHEN u.StokAdedi < 20   THEN 'Düşük'
        ELSE 'Yeterli'
    END AS StokDurumu,
    u.OlusturmaTarihi
FROM Urunler u
INNER JOIN Kategoriler k ON u.KategoriId = k.Id
WHERE u.AktifMi = 1;
GO

-- Normal tablo gibi kullan
SELECT * FROM vw_UrunDetay WHERE Kategori = 'Elektronik';
SELECT * FROM vw_UrunDetay WHERE StokDurumu IN ('Tükendi', 'Kritik');
SELECT TOP 10 * FROM vw_UrunDetay ORDER BY Fiyat DESC;
\`\`\`

### STORED PROCEDURE — Saklı Yordam:
\`\`\`sql
-- Sayfalama destekli ürün arama
CREATE PROCEDURE sp_UrunAra
    @Kelime     NVARCHAR(200) = NULL,
    @MinFiyat   DECIMAL(10,2) = NULL,
    @MaxFiyat   DECIMAL(10,2) = NULL,
    @KategoriId INT = NULL,
    @SayfaNo    INT = 1,
    @SayfaBoyut INT = 20
AS
BEGIN
    SET NOCOUNT ON;

    -- Toplam kayıt sayısı
    SELECT COUNT(*) AS ToplamKayit
    FROM Urunler u
    WHERE u.AktifMi = 1
      AND (@Kelime IS NULL OR u.Ad LIKE '%' + @Kelime + '%')
      AND (@MinFiyat IS NULL OR u.Fiyat >= @MinFiyat)
      AND (@MaxFiyat IS NULL OR u.Fiyat <= @MaxFiyat)
      AND (@KategoriId IS NULL OR u.KategoriId = @KategoriId);

    -- Sayfalı sonuçlar
    SELECT u.Id, u.Ad, k.Ad AS Kategori, u.Fiyat, u.StokAdedi
    FROM Urunler u
    INNER JOIN Kategoriler k ON u.KategoriId = k.Id
    WHERE u.AktifMi = 1
      AND (@Kelime IS NULL OR u.Ad LIKE '%' + @Kelime + '%')
      AND (@MinFiyat IS NULL OR u.Fiyat >= @MinFiyat)
      AND (@MaxFiyat IS NULL OR u.Fiyat <= @MaxFiyat)
      AND (@KategoriId IS NULL OR u.KategoriId = @KategoriId)
    ORDER BY u.Id
    OFFSET (@SayfaNo - 1) * @SayfaBoyut ROWS
    FETCH NEXT @SayfaBoyut ROWS ONLY;
END;
GO

-- Kullanım örnekleri
EXEC sp_UrunAra @Kelime = 'laptop';
EXEC sp_UrunAra @MinFiyat = 100, @MaxFiyat = 500, @SayfaNo = 2;
\`\`\``
      },
      {
        id: "sql-10",
        title: "Ders 10: Transaction ve ACID Prensipleri",
        content: `Transaction, birden fazla SQL işleminin tek bir atomik birim olarak çalışmasını sağlar.

### ACID Prensipleri:
* **Atomicity (Bütünlük):** Ya hepsi gerçekleşir ya da hiçbiri.
* **Consistency (Tutarlılık):** İşlem öncesi ve sonrası veri geçerlilik kuralları bozulmaz.
* **Isolation (Yalıtım):** Eş zamanlı işlemler birbirini olumsuz etkilemez.
* **Durability (Kalıcılık):** COMMIT edilen işlem sistem çökmesine rağmen kalıcıdır.

### Banka Transferi Örneği:
\`\`\`sql
BEGIN TRANSACTION;

BEGIN TRY
    DECLARE @GondericiId INT = 101;
    DECLARE @AliciId     INT = 202;
    DECLARE @Tutar       DECIMAL(10,2) = 5000.00;

    -- 1. Gönderici bakiyesini düş
    UPDATE Hesaplar
    SET Bakiye = Bakiye - @Tutar,
        GuncellemeTarihi = GETDATE()
    WHERE Id = @GondericiId;

    -- 2. Yetersiz bakiye kontrolü
    IF (SELECT Bakiye FROM Hesaplar WHERE Id = @GondericiId) < 0
    BEGIN
        ;THROW 50001, 'Yetersiz bakiye! Transfer iptal edildi.', 1;
    END

    -- 3. Alıcı bakiyesine ekle
    UPDATE Hesaplar
    SET Bakiye = Bakiye + @Tutar,
        GuncellemeTarihi = GETDATE()
    WHERE Id = @AliciId;

    -- 4. Transfer kaydını oluştur
    INSERT INTO TransferGecmisi
        (GondericiId, AliciId, Tutar, OlusturmaTarihi, Durum)
    VALUES
        (@GondericiId, @AliciId, @Tutar, GETDATE(), 'Tamamlandi');

    COMMIT TRANSACTION;
    PRINT '✓ Transfer başarıyla tamamlandı.';

END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    PRINT '✗ Hata oluştu, işlem geri alındı: ' + ERROR_MESSAGE();
END CATCH;
\`\`\`

### Savepoint — Kısmi Geri Alma:
\`\`\`sql
BEGIN TRANSACTION;

INSERT INTO Log (Mesaj) VALUES ('Adım 1 tamamlandı');
SAVE TRANSACTION Adim1; -- Ara kayıt noktası

INSERT INTO Log (Mesaj) VALUES ('Adım 2 başladı');
-- Bir hata oluştu, sadece Adım 2'ye geri al
ROLLBACK TRANSACTION Adim1;

-- Adım 1 kalır, Adım 2 geri alındı
COMMIT TRANSACTION;
\`\`\``
      }
    ]
  }
};
