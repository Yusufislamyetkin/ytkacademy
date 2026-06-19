(()=>{window.YTK_COURSES={csharp:{title:"C# Programlama Temelleri",desc:".NET ekosisteminde C# temelleri: veri tipleri, OOP, LINQ, async/await ve Entity Framework Core.",icon:"\u{1F4BB}",color:"#569cd6",lessons:[{id:"cs-1",title:"Ders 1: C# Nedir ve Nas\u0131l \xC7al\u0131\u015F\u0131r?",content:`C# (C-Sharp), Microsoft taraf\u0131ndan geli\u015Ftirilen modern, nesne y\xF6nelimli ve g\xFCvenli bir programlama dilidir.

### Temel \xD6zellikleri:
* **Nesne Y\xF6nelimli (OOP):** S\u0131n\u0131flar, nesneler, kal\u0131t\u0131m ve \xE7ok bi\xE7imlilik gibi prensipleri temel al\u0131r.
* **Tip G\xFCvenli (Type-Safe):** De\u011Fi\u015Fken t\xFCrleri s\u0131k\u0131 bir \u015Fekilde denetlenir ve bellek hatalar\u0131 \xF6nlenir.
* **Cross-Platform:** .NET 8 ile birlikte C# kodlar\u0131 Windows, macOS ve Linux'ta \xE7al\u0131\u015F\u0131r.
* **Y\xFCksek Performans:** Modern .NET, Node.js ve Python'\u0131 ge\xE7en benchmark sonu\xE7lar\u0131 \xFCretiyor.

### \xC7al\u0131\u015Fma Mant\u0131\u011F\u0131:
C# kodu \u2192 **MSIL** (Ara Dil) \u2192 **CLR/JIT** \u2192 Makine Kodu

### \u0130lk C# Program\u0131:
\`\`\`csharp
using System;

// .NET 6+ ile top-level statements
Console.WriteLine("Merhaba, YTK Academy!");
Console.WriteLine($"Bug\xFCn\xFCn tarihi: {DateTime.Now:dd.MM.yyyy}");

// Klasik yap\u0131
namespace YtkAcademy
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Merhaba, D\xFCnya!");
            Console.ReadLine();
        }
    }
}
\`\`\`

### Neden C# \xD6\u011Frenmeliyim?
* T\xFCrkiye kurumsal yaz\u0131l\u0131m pazar\u0131n\u0131n b\xFCy\xFCk \xE7o\u011Funlu\u011Fu .NET/C# kullan\u0131yor.
* Banka, fintech, e-ticaret ve kamu yaz\u0131l\u0131mlar\u0131 b\xFCy\xFCk \xF6l\xE7\xFCde C# tabanl\u0131.
* Y\xFCksek maa\u015Fl\u0131 pozisyonlarda aranan ilk dillerden biri.
* Microsoft, Azure ve modern bulut mimarileriyle tam entegrasyon.`},{id:"cs-2",title:"Ders 2: De\u011Fi\u015Fkenler ve Veri Tipleri",content:`De\u011Fi\u015Fkenler, program i\xE7erisinde i\u015Flenecek verilerin ge\xE7ici olarak bellekte (RAM) sakland\u0131\u011F\u0131 isimlendirilmi\u015F alanlard\u0131r.

### C# Temel Veri Tipleri:
* **int:** 32-bit tam say\u0131 \u2014 \`int yas = 25;\`
* **long:** 64-bit b\xFCy\xFCk tam say\u0131 \u2014 \`long nufus = 85_000_000;\`
* **double:** Ondal\u0131kl\u0131 say\u0131 \u2014 \`double pi = 3.14159;\`
* **decimal:** Finansal hesaplama \u2014 \`decimal fiyat = 999.99m;\`
* **string:** Metin \u2014 \`string isim = "Yusuf";\`
* **bool:** true/false \u2014 \`bool aktifMi = true;\`
* **char:** Tek karakter \u2014 \`char cinsiyet = 'E';\`

### var ve Type Inference:
\`\`\`csharp
// Explicit tip belirtimi
int sayi = 42;
string ad = "Yusuf";

// var ile otomatik tip \xE7\u0131kar\u0131m\u0131
var yas = 28;         // int olarak derlenir
var isim = "Ahmet";   // string olarak derlenir
var fiyat = 99.99;    // double olarak derlenir

// const: De\u011Fi\u015Ftirilemez sabit
const double PI = 3.14159265358979;
const string SITE_URL = "https://ytkacademy.com.tr";
\`\`\`

### String \u0130\u015Flemleri:
\`\`\`csharp
string ad = "Yusuf";
string soyad = "Yetkin";

// String interpolation (\xF6nerilen)
string mesaj = $"Merhaba, {ad} {soyad}! Ya\u015F\u0131n: {28}";

// Verbatim string (@ ile ters b\xF6l\xFC sorun olmaz)
string dosyaYolu = @"C:UsersYusufDesktopproje";

// String metodlar\u0131
Console.WriteLine(ad.ToUpper());         // YUSUF
Console.WriteLine(ad.Length);            // 5
Console.WriteLine(ad.Contains("usu"));  // True
Console.WriteLine("  YTK  ".Trim());    // YTK
Console.WriteLine(ad.Replace("Y","J")); // Jusuf
\`\`\`

### Tip D\xF6n\xFC\u015F\xFCmleri:
\`\`\`csharp
// G\xFCvenli d\xF6n\xFC\u015F\xFCm (TryParse - hata f\u0131rlatmaz)
if (int.TryParse("123", out int sayi))
    Console.WriteLine($"D\xF6n\xFC\u015Ft\xFCr\xFCld\xFC: {sayi}");
else
    Console.WriteLine("Ge\xE7ersiz say\u0131!");

// Convert s\u0131n\u0131f\u0131
string txt = "42";
int deger = Convert.ToInt32(txt);
bool aktif = Convert.ToBoolean("true");
\`\`\``},{id:"cs-3",title:"Ders 3: Karar Yap\u0131lar\u0131 (if-else & switch)",content:`Karar yap\u0131lar\u0131, program\u0131n belirli ko\u015Fullara g\xF6re farkl\u0131 ak\u0131\u015Flarda ilerlemesini sa\u011Flar.

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
    case "Sal\u0131":
    case "\xC7ar\u015Famba":
    case "Per\u015Fembe":
    case "Cuma":
        Console.WriteLine("\u0130\u015F g\xFCn\xFC \u2713");
        break;
    case "Cumartesi":
    case "Pazar":
        Console.WriteLine("Hafta sonu \u{1F389}");
        break;
    default:
        Console.WriteLine("Ge\xE7ersiz g\xFCn!");
        break;
}
\`\`\`

### switch Expression (C# 8+ - Modern):
\`\`\`csharp
string durum = gun switch
{
    "Pazartesi" or "Sal\u0131" or "\xC7ar\u015Famba"
    or "Per\u015Fembe" or "Cuma" => "\u0130\u015F g\xFCn\xFC",
    "Cumartesi" or "Pazar" => "Hafta sonu",
    _ => "Bilinmiyor"
};
\`\`\`

### Ternary ve Null Operat\xF6rler:
\`\`\`csharp
int yas = 20;
string etiket = (yas >= 18) ? "Yeti\u015Fkin" : "\xC7ocuk";

// Null coalescing ??
string? isim = null;
string gosterilecek = isim ?? "Anonim";

// Null conditional ?.
string? uzunluk = isim?.ToUpper(); // null, hata f\u0131rlatmaz
\`\`\``},{id:"cs-4",title:"Ders 4: D\xF6ng\xFCler (for, while, foreach)",content:`D\xF6ng\xFCler, bir kod blo\u011Funun belirli bir ko\u015Ful sa\u011Fland\u0131\u011F\u0131 s\xFCrece tekrarlanmas\u0131n\u0131 sa\u011Flar.

### for D\xF6ng\xFCs\xFC:
\`\`\`csharp
// 1'den 10'a \xE7arp\u0131m tablosu
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine($"7 x {i} = {7 * i}");
}

// Geriye sayma
for (int i = 10; i >= 1; i--)
    Console.Write(i + " ");
// \xC7\u0131kt\u0131: 10 9 8 7 6 5 4 3 2 1
\`\`\`

### while D\xF6ng\xFCs\xFC:
\`\`\`csharp
// Kullan\u0131c\u0131 do\u011Fru \u015Fifreyi girene kadar sor
int deneme = 0;
const string dogru = "ytk2024";

while (deneme < 3)
{
    Console.Write("\u015Eifreyi girin: ");
    string girilen = Console.ReadLine() ?? "";

    if (girilen == dogru)
    {
        Console.WriteLine("Giri\u015F ba\u015Far\u0131l\u0131! \u2713");
        break;
    }
    deneme++;
    Console.WriteLine($"Hatal\u0131! Kalan hak: {3 - deneme}");
}
if (deneme == 3)
    Console.WriteLine("Hesap kilitlendi!");
\`\`\`

### foreach D\xF6ng\xFCs\xFC:
\`\`\`csharp
string[] ogrenciler = { "Ahmet", "Mehmet", "Ay\u015Fe", "Fatma" };

foreach (string ogrenci in ogrenciler)
{
    Console.WriteLine($"  \u2022 {ogrenci}");
}
\`\`\`

### break ve continue:
\`\`\`csharp
for (int i = 1; i <= 10; i++)
{
    if (i % 2 == 0) continue; // \xC7iftleri atla
    if (i == 9) break;        // 9'da dur
    Console.Write(i + " ");
}
// \xC7\u0131kt\u0131: 1 3 5 7
\`\`\``},{id:"cs-5",title:"Ders 5: Metotlar (Methods)",content:`Metotlar, belirli bir i\u015Fi yapan ve gerekti\u011Finde \xE7a\u011Fr\u0131lan yeniden kullan\u0131labilir kod bloklar\u0131d\u0131r.

### Temel Metot Yap\u0131s\u0131:
\`\`\`csharp
// [eri\u015Fim belirteci] [d\xF6n\xFC\u015F tipi] MetotAd\u0131([parametreler])
public static int Topla(int a, int b)
{
    return a + b;
}

// Expression body (tek sat\u0131r) \u2014 C# 6+
public static int Carp(int a, int b) => a * b;
\`\`\`

### Parametre \xC7e\u015Fitleri:
\`\`\`csharp
// Varsay\u0131lan parametre de\u011Feri
static double KDVHesapla(double fiyat, double kdvOrani = 0.20)
    => fiyat * (1 + kdvOrani);

// \u0130simli parametre
KDVHesapla(fiyat: 100, kdvOrani: 0.08); // 108

// params \u2014 De\u011Fi\u015Fken say\u0131da parametre
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

### Metot A\u015F\u0131r\u0131 Y\xFCklemesi (Overloading):
\`\`\`csharp
static string Formatla(int sayi) => sayi.ToString("N0");
static string Formatla(double sayi) => sayi.ToString("F2");
static string Formatla(decimal para) => para.ToString("C");

Console.WriteLine(Formatla(1000000));  // 1.000.000
Console.WriteLine(Formatla(3.14159)); // 3,14
Console.WriteLine(Formatla(999.99m)); // \u20BA999,99
\`\`\``},{id:"cs-6",title:"Ders 6: S\u0131n\u0131flar ve OOP",content:`Nesne Y\xF6nelimli Programlama (OOP), ger\xE7ek d\xFCnyadaki varl\u0131klar\u0131 kod olarak modelleme yakla\u015F\u0131m\u0131d\u0131r.

### S\u0131n\u0131f Tasar\u0131m\u0131 (Ger\xE7ek Senaryo):
\`\`\`csharp
public class BankaHesabi
{
    // Private field \u2014 d\u0131\u015Far\u0131dan do\u011Frudan eri\u015Filemez
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

    // Para yat\u0131rma
    public void ParaYatir(decimal tutar)
    {
        if (tutar <= 0) throw new ArgumentException("Tutar pozitif olmal\u0131!");
        _bakiye += tutar;
        _islemGecmisi.Add($"+{tutar:C} yat\u0131r\u0131ld\u0131. Bakiye: {_bakiye:C}");
    }

    // Para \xE7ekme
    public bool ParaCek(decimal tutar)
    {
        if (tutar <= 0 || tutar > _bakiye) return false;
        _bakiye -= tutar;
        _islemGecmisi.Add($"-{tutar:C} \xE7ekildi. Bakiye: {_bakiye:C}");
        return true;
    }

    public void IslemGecmisiniGoster()
    {
        foreach (var islem in _islemGecmisi)
            Console.WriteLine($"  \u2022 {islem}");
    }
}

// Kullan\u0131m
var hesap = new BankaHesabi("TR33-0001", "Yusuf Yetkin", 5000m);
hesap.ParaYatir(2500m);
hesap.ParaCek(1000m);
hesap.IslemGecmisiniGoster();
\`\`\`

### 4 Temel OOP Prensibi:
* **Encapsulation:** Veriler private, eri\u015Fim property/metot \xFCzerinden.
* **Inheritance:** Alt s\u0131n\u0131f \xFCst s\u0131n\u0131f\u0131n \xF6zelliklerini miras al\u0131r.
* **Polymorphism:** Ayn\u0131 metot farkl\u0131 davran\u0131\u015Flar sergileyebilir (override).
* **Abstraction:** Karma\u015F\u0131k detaylar\u0131 gizleyip sade aray\xFCz sunmak.`},{id:"cs-7",title:"Ders 7: Koleksiyonlar (List, Dictionary, Array)",content:`C#'ta birden fazla veriyi bir arada tutmak i\xE7in koleksiyonlar kullan\u0131l\u0131r.

### Array (Dizi) \u2014 Sabit boyutlu:
\`\`\`csharp
int[] notlar = { 85, 92, 78, 95, 88 };
double ort = notlar.Average();
int max = notlar.Max();

// 2D dizi
int[,] matris = { { 1, 2, 3 }, { 4, 5, 6 } };
Console.WriteLine(matris[1, 2]); // 6
\`\`\`

### List<T> \u2014 Dinamik liste:
\`\`\`csharp
var ogrenciler = new List<string> { "Ahmet", "Mehmet", "Ay\u015Fe" };

ogrenciler.Add("Fatma");
ogrenciler.Insert(0, "Zeynep"); // \u0130ndekse ekle
ogrenciler.Remove("Mehmet");
ogrenciler.Sort();

Console.WriteLine($"Say\u0131: {ogrenciler.Count}");
Console.WriteLine(string.Join(", ", ogrenciler));

// Arama
bool varMi = ogrenciler.Contains("Ahmet");
int indeks = ogrenciler.IndexOf("Ahmet");
\`\`\`

### Dictionary<TKey, TValue> \u2014 Anahtar-De\u011Fer:
\`\`\`csharp
var notSistemi = new Dictionary<string, int>
{
    ["Ahmet"] = 85,
    ["Mehmet"] = 72,
    ["Ay\u015Fe"] = 95
};

// De\u011Fer okuma
int ahmetNot = notSistemi["Ahmet"];

// G\xFCvenli okuma
if (notSistemi.TryGetValue("Ali", out int aliNot))
    Console.WriteLine($"Ali: {aliNot}");

// Yeni kay\u0131t ekleme/g\xFCncelleme
notSistemi["Fatma"] = 91;

// D\xF6ng\xFC
foreach (var (isim, not) in notSistemi)
    Console.WriteLine($"{isim}: {not}");
\`\`\``},{id:"cs-8",title:"Ders 8: Kal\u0131t\u0131m (Inheritance) ve Interface",content:`Kal\u0131t\u0131m, kod tekrar\u0131n\u0131 \xF6nleyerek s\u0131n\u0131flar aras\u0131nda \xF6zellik payla\u015F\u0131m\u0131 sa\u011Flar.

### Kal\u0131t\u0131m \xD6rne\u011Fi:
\`\`\`csharp
// Temel s\u0131n\u0131f
public abstract class Calisan
{
    public int Id { get; set; }
    public string Ad { get; set; }
    public decimal MaasBase { get; protected set; }

    public Calisan(int id, string ad, decimal maas)
    {
        Id = id; Ad = ad; MaasBase = maas;
    }

    // abstract: Alt s\u0131n\u0131flar ZORUNDA override eder
    public abstract decimal NetMaasHesapla();

    // virtual: Alt s\u0131n\u0131flar iste\u011Fe ba\u011Fl\u0131 override edebilir
    public virtual string Tanitim()
        => $"\xC7al\u0131\u015Fan #{Id}: {Ad}";
}

// T\xFCretilmi\u015F s\u0131n\u0131flar
public class Yazilimci : Calisan
{
    public string Dil { get; set; }

    public Yazilimci(int id, string ad, decimal maas, string dil)
        : base(id, ad, maas)
    {
        Dil = dil;
    }

    public override decimal NetMaasHesapla()
        => MaasBase * 0.85m + 2000m; // Vergi sonras\u0131 + teknoloji bonusu

    public override string Tanitim()
        => base.Tanitim() + $" | {Dil} Developer";
}
\`\`\`

### Interface (Aray\xFCz) \u2014 S\xF6zle\u015Fme:
\`\`\`csharp
public interface IOdeme
{
    string OdemeYontemi { get; }
    bool OdemeYap(decimal tutar, string aciklama);
}

public class KrediKarti : IOdeme
{
    public string OdemeYontemi => "Kredi Kart\u0131";
    public bool OdemeYap(decimal tutar, string aciklama)
    {
        Console.WriteLine($"\u{1F4B3} {tutar:C} - {aciklama}");
        return true;
    }
}

// Polymorphism: Hangi implementasyon oldu\u011Fu \xF6nemli de\u011Fil
IOdeme odeme = new KrediKarti();
odeme.OdemeYap(299.99m, "YTK Academy Ment\xF6rl\xFCk");
\`\`\``},{id:"cs-9",title:"Ders 9: Hata Y\xF6netimi (try-catch-finally)",content:`Hata y\xF6netimi, programlar\u0131n beklenmedik durumlarla kar\u015F\u0131la\u015Ft\u0131\u011F\u0131nda \xE7\xF6kmesini \xF6nler.

### try-catch-finally:
\`\`\`csharp
try
{
    Console.Write("B\xF6l\xFCnen say\u0131y\u0131 girin: ");
    int a = int.Parse(Console.ReadLine()!);

    Console.Write("B\xF6len say\u0131y\u0131 girin: ");
    int b = int.Parse(Console.ReadLine()!);

    Console.WriteLine($"Sonu\xE7: {a / b}");
}
catch (FormatException)
{
    Console.WriteLine("\u274C Hata: Ge\xE7erli bir say\u0131 girilmedi!");
}
catch (DivideByZeroException)
{
    Console.WriteLine("\u274C Hata: S\u0131f\u0131ra b\xF6lme yap\u0131lamaz!");
}
catch (Exception ex)
{
    Console.WriteLine($"\u274C Beklenmedik hata: {ex.Message}");
    // Loglama sistemi burada devreye girer
}
finally
{
    // Her zaman \xE7al\u0131\u015F\u0131r \u2014 kaynak temizli\u011Fi i\xE7in ideal
    Console.WriteLine("\u0130\u015Flem sonland\u0131. (finally)");
}
\`\`\`

### \xD6zel Exception S\u0131n\u0131f\u0131:
\`\`\`csharp
public class YetersizBakiyeException : Exception
{
    public decimal Bakiye { get; }
    public decimal IstenenTutar { get; }

    public YetersizBakiyeException(decimal bakiye, decimal istenen)
        : base($"Yetersiz bakiye! Mevcut: {bakiye:C}, \u0130stenen: {istenen:C}")
    {
        Bakiye = bakiye;
        IstenenTutar = istenen;
    }
}

// Kullan\u0131m
public void ParaCek(decimal tutar)
{
    if (tutar > _bakiye)
        throw new YetersizBakiyeException(_bakiye, tutar);

    _bakiye -= tutar;
}
\`\`\``},{id:"cs-10",title:"Ders 10: LINQ ile Veri Sorgulama",content:`LINQ (Language Integrated Query), C# koleksiyonlar\u0131n\u0131 SQL benzeri s\xF6zdizimi ile sorgulaman\u0131z\u0131 sa\u011Flar.

### Temel LINQ Metodlar\u0131:
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
var pahal\u0131lar = urunler.Where(u => u.Fiyat > 1000).ToList();

// S\u0131ralama
var ucuzdan = urunler.OrderBy(u => u.Fiyat).ToList();
var pahalidan = urunler.OrderByDescending(u => u.Fiyat).ToList();

// D\xF6n\xFC\u015F\xFCm
var adlar = urunler.Select(u => u.Ad).ToList();
var ozet = urunler.Select(u => new { u.Ad, u.Fiyat }).ToList();

// Tek eleman
var enPahal\u0131 = urunler.MaxBy(u => u.Fiyat);
var laptop = urunler.FirstOrDefault(u => u.Ad == "Laptop");
\`\`\`

### Gruplama ve \u0130statistik:
\`\`\`csharp
// Kategoriye g\xF6re grupla
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
    Console.WriteLine($"{g.Kategori}: {g.UrunSayisi} \xFCr\xFCn, {g.ToplamDeger:C}");
\`\`\``},{id:"cs-11",title:"Ders 11: Asenkron Programlama (async/await)",content:`Asenkron programlama, I/O i\u015Flemleri s\u0131ras\u0131nda uygulaman\u0131n bloke olmas\u0131n\u0131 \xF6nler. Web API, veritaban\u0131 ve dosya i\u015Flemleri i\xE7in kritiktir.

### async/await Temelleri:
\`\`\`csharp
using System.Net.Http;
using System.Text.Json;

// Task: Sonucu beklenebilir asenkron i\u015Flem
public async Task<string> VeriGetirAsync(string url)
{
    using var client = new HttpClient();
    // await: Bekle ama thread'i bloke etme
    string json = await client.GetStringAsync(url);
    return json;
}

// Task<T>: De\u011Fer d\xF6nd\xFCren asenkron metot
public async Task<List<Urun>> UrunleriGetirAsync()
{
    using var client = new HttpClient();
    var response = await client.GetAsync("https://api.ytkacademy.com.tr/urunler");
    response.EnsureSuccessStatusCode();

    string json = await response.Content.ReadAsStringAsync();
    return JsonSerializer.Deserialize<List<Urun>>(json)!;
}
\`\`\`

### Paralel Asenkron \u0130\u015Flemler:
\`\`\`csharp
public async Task<(List<Urun> urunler, List<Kullanici> kullanicilar)> VeriYukleAsync()
{
    // \u0130kisini ayn\u0131 anda ba\u015Flat
    var urunTask = UrunleriGetirAsync();
    var kullaniciTask = KullanicilariGetirAsync();

    // \u0130kisinin de tamamlanmas\u0131n\u0131 bekle
    await Task.WhenAll(urunTask, kullaniciTask);

    return (await urunTask, await kullaniciTask);
}
\`\`\`

### CancellationToken \u2014 \u0130ptal Deste\u011Fi:
\`\`\`csharp
public async Task UzunIslemAsync(CancellationToken ct)
{
    for (int i = 0; i < 100; i++)
    {
        ct.ThrowIfCancellationRequested(); // \u0130ptal istendi mi?
        await Task.Delay(100, ct);
        Console.WriteLine($"Ad\u0131m {i + 1}/100");
    }
}

// Kullan\u0131m
using var cts = new CancellationTokenSource(timeout: TimeSpan.FromSeconds(5));
await UzunIslemAsync(cts.Token);
\`\`\``},{id:"cs-12",title:"Ders 12: Entity Framework Core",content:`Entity Framework Core (EF Core), C# s\u0131n\u0131flar\u0131 ile veritaban\u0131 tablolar\u0131 aras\u0131nda k\xF6pr\xFC kuran ORM arac\u0131d\u0131r.

### DbContext ve Entity Tan\u0131mlama:
\`\`\`csharp
using Microsoft.EntityFrameworkCore;

// Entity s\u0131n\u0131f\u0131 \u2192 Veritaban\u0131 tablosu
public class Urun
{
    public int Id { get; set; }
    public required string Ad { get; set; }
    public decimal Fiyat { get; set; }
    public int Stok { get; set; }
    public bool AktifMi { get; set; } = true;
    public DateTime OlusturmaTarihi { get; set; } = DateTime.UtcNow;

    // \u0130li\u015Fki: Foreign Key
    public int KategoriId { get; set; }
    public Kategori Kategori { get; set; } = null!;
}

// DbContext: Veritaban\u0131 ba\u011Flant\u0131 y\xF6neticisi
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

### CRUD \u0130\u015Flemleri:
\`\`\`csharp
await using var db = new AppDbContext(options);

// CREATE
var yeniUrun = new Urun { Ad = "MacBook Pro", Fiyat = 85000m, KategoriId = 1 };
db.Urunler.Add(yeniUrun);
await db.SaveChangesAsync();

// READ \u2014 LINQ ile
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

### Migration Komutlar\u0131:
\`\`\`csharp
// Terminal (Package Manager Console veya CLI)
// dotnet ef migrations add InitialCreate
// dotnet ef database update
// dotnet ef migrations list
\`\`\``}]},sql:{title:"SQL Veritaban\u0131 Temelleri",desc:"\u0130li\u015Fkisel veritaban\u0131 tasar\u0131m\u0131, DDL/DML komutlar\u0131, JOIN, index, stored procedure ve transaction y\xF6netimi.",icon:"\u{1F5C4}\uFE0F",color:"#ffd166",lessons:[{id:"sql-1",title:"Ders 1: SQL Nedir? Temel Kavramlar",content:`SQL (Structured Query Language), ili\u015Fkisel veritabanlar\u0131nda verileri sorgulamak, eklemek, g\xFCncellemek ve y\xF6netmek i\xE7in kullan\u0131lan standart dildir.

### Temel Kavramlar:
* **Veritaban\u0131 (Database):** Birbiriyle ili\u015Fkili verilerin d\xFCzenli sakland\u0131\u011F\u0131 yap\u0131.
* **Tablo (Table):** Sat\u0131r ve s\xFCtun yap\u0131s\u0131nda veri depolayan nesne.
* **Primary Key (PK):** Her sat\u0131r\u0131 benzersiz tan\u0131mlayan s\xFCtun.
* **Foreign Key (FK):** Ba\u015Fka tablonun PK's\u0131na referans veren s\xFCtun.
* **Index:** Sorgulama h\u0131z\u0131n\u0131 art\u0131ran yap\u0131.
* **Schema:** Tablolar ve nesnelerin gruplanma mant\u0131\u011F\u0131.

### SQL Komut Kategorileri:
* **DDL:** CREATE, ALTER, DROP \u2014 Yap\u0131 y\xF6netimi
* **DML:** INSERT, UPDATE, DELETE \u2014 Veri y\xF6netimi
* **DQL:** SELECT \u2014 Veri sorgulama
* **DCL:** GRANT, REVOKE \u2014 Yetki y\xF6netimi
* **TCL:** COMMIT, ROLLBACK \u2014 Transaction y\xF6netimi

### \u0130lk SQL Komutlar\u0131:
\`\`\`sql
-- Veritaban\u0131 olu\u015Ftur
CREATE DATABASE YtkAcademy;
GO

-- Veritaban\u0131n\u0131 se\xE7
USE YtkAcademy;
GO

-- Mevcut tablolar\u0131 listele
SELECT TABLE_NAME
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_TYPE = 'BASE TABLE';
\`\`\`

### Neden SQL \xD6\u011Frenmeliyim?
Her yaz\u0131l\u0131m geli\u015Ftirici veri taban\u0131yla \xE7al\u0131\u015F\u0131r. SQL bilmeden backend geli\u015Ftirici olunamaz. T\xFCrkiye'deki i\u015F ilanlar\u0131n\u0131n %90'\u0131nda SQL zorunlu veya tercih edilen beceri olarak yer al\u0131r.`},{id:"sql-2",title:"Ders 2: Tablo Olu\u015Fturma (CREATE TABLE)",content:`Veritaban\u0131nda veri saklamak i\xE7in tablo olu\u015Fturulur. Her s\xFCtunun veri tipi ve k\u0131s\u0131tlamalar\u0131 belirlenir.

### Yayg\u0131n Veri Tipleri:
* **INT / BIGINT:** Tam say\u0131lar
* **NVARCHAR(n):** Unicode metin (T\xFCrk\xE7e i\xE7in tercih edilir)
* **DECIMAL(p,s):** Ondal\u0131kl\u0131 say\u0131 \u2014 \xF6r. DECIMAL(10,2) = 12345678.90
* **BIT:** 0/1 (boolean)
* **DATETIME / DATE:** Tarih ve saat
* **UNIQUEIDENTIFIER:** GUID

### Ger\xE7ek Bir E-Ticaret \u015Eemas\u0131:
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

### Tablo G\xFCncelleme ve Silme:
\`\`\`sql
-- S\xFCtun ekle
ALTER TABLE Urunler ADD ResimUrl NVARCHAR(500) NULL;

-- S\xFCtun tipi de\u011Fi\u015Ftir
ALTER TABLE Urunler ALTER COLUMN Aciklama NVARCHAR(2000);

-- Tablo sil (dikkatli!)
DROP TABLE IF EXISTS GeciciTablo;
\`\`\``},{id:"sql-3",title:"Ders 3: SELECT ve Filtreleme",content:`SELECT, veritaban\u0131ndan veri okumak i\xE7in kullan\u0131lan en temel SQL komutudur.

### Temel SELECT:
\`\`\`sql
-- T\xFCm s\xFCtunlar (production'da ka\xE7\u0131n\u0131n, yava\u015F!)
SELECT * FROM Urunler;

-- Belirli s\xFCtunlar
SELECT Id, Ad, Fiyat, StokAdedi FROM Urunler;

-- Hesaplamal\u0131 s\xFCtun ve alias
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
-- Temel ko\u015Ful
SELECT * FROM Urunler WHERE Fiyat > 1000;

-- BETWEEN
SELECT * FROM Urunler WHERE Fiyat BETWEEN 500 AND 5000;

-- IN listesi
SELECT * FROM Urunler WHERE KategoriId IN (1, 3, 5);

-- LIKE \u2014 metin arama
SELECT * FROM Urunler WHERE Ad LIKE '%laptop%';   -- i\xE7erir
SELECT * FROM Kullanicilar WHERE Email LIKE '%@gmail.com'; -- biter

-- NULL kontrol\xFC
SELECT * FROM Kullanicilar WHERE Telefon IS NULL;

-- Birle\u015Fik ko\u015Fullar
SELECT * FROM Urunler
WHERE AktifMi = 1
  AND StokAdedi > 0
  AND (Fiyat < 1000 OR KategoriId = 5);
\`\`\`

### S\u0131ralama ve Sayfalama:
\`\`\`sql
-- S\u0131ralama
SELECT Ad, Fiyat FROM Urunler
ORDER BY Fiyat DESC, Ad ASC;

-- TOP ile limit (SQL Server)
SELECT TOP 5 * FROM Urunler ORDER BY Fiyat DESC;

-- Sayfalama (OFFSET-FETCH)
-- 2. sayfa, sayfa ba\u015F\u0131na 10 \xFCr\xFCn
SELECT Id, Ad, Fiyat FROM Urunler
ORDER BY Id
OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;
\`\`\``},{id:"sql-4",title:"Ders 4: INSERT, UPDATE ve DELETE",content:`Veritaban\u0131ndaki verileri eklemek, g\xFCncellemek ve silmek i\xE7in DML komutlar\u0131 kullan\u0131l\u0131r.

### INSERT \u2014 Veri Ekleme:
\`\`\`sql
-- Tek kay\u0131t
INSERT INTO Kategoriler (Ad, Slug)
VALUES ('Elektronik', 'elektronik');

-- Birden fazla kay\u0131t
INSERT INTO Kategoriler (Ad, Slug) VALUES
    ('Giyim',     'giyim'),
    ('Kitap',     'kitap'),
    ('Spor',      'spor'),
    ('Mobilya',   'mobilya');

-- Son eklenen ID'yi al
INSERT INTO Urunler (KategoriId, Ad, Fiyat)
VALUES (1, 'MacBook Pro M3', 85000);
SELECT SCOPE_IDENTITY() AS YeniId; -- Sadece o i\u015Flem

-- SELECT'ten INSERT
INSERT INTO ArsivUrunler (Ad, Fiyat, SilinmeTarihi)
SELECT Ad, Fiyat, GETDATE()
FROM Urunler
WHERE AktifMi = 0;
\`\`\`

### UPDATE \u2014 G\xFCncelleme:
\`\`\`sql
-- \u26A0\uFE0F WHERE olmadan T\xDCM sat\u0131rlar de\u011Fi\u015Fir!

-- Tek kay\u0131t
UPDATE Kullanicilar
SET SonGirisTarihi = GETDATE()
WHERE Id = 42;

-- Toplu g\xFCncelleme
UPDATE Urunler
SET
    Fiyat = Fiyat * 1.10,          -- %10 zam
    GuncellemeTarihi = GETDATE()
WHERE KategoriId = 1 AND AktifMi = 1;
\`\`\`

### DELETE \u2014 Silme:
\`\`\`sql
-- \u26A0\uFE0F WHERE olmadan T\xDCM kay\u0131tlar silinir!

DELETE FROM Urunler WHERE Id = 99;

-- Ko\u015Fullu silme
DELETE FROM Urunler
WHERE StokAdedi = 0 AND AktifMi = 0;

-- H\u0131zl\u0131 tablo temizleme (geri al\u0131namaz!)
TRUNCATE TABLE GeciciLog;
\`\`\`

### OUTPUT Clause \u2014 Ne De\u011Fi\u015Fti?
\`\`\`sql
-- Silinen kay\u0131tlar\u0131 g\xF6ster
DELETE FROM Urunler
OUTPUT DELETED.Id, DELETED.Ad, DELETED.Fiyat
WHERE AktifMi = 0;
\`\`\``},{id:"sql-5",title:"Ders 5: JOIN \u0130\u015Flemleri",content:`\u0130li\u015Fkisel veritabanlar\u0131nda veriler farkl\u0131 tablolarda saklan\u0131r. JOIN ile tablolar birle\u015Ftirilir.

### INNER JOIN \u2014 Sadece E\u015Fle\u015Fenler:
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

### LEFT JOIN \u2014 Sol Tablonun Tamam\u0131:
\`\`\`sql
-- Sipari\u015Fi olmayan m\xFC\u015Fterileri de listele
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

### \xC7oklu JOIN \u2014 Sipari\u015F Detay Raporu:
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
\`\`\``},{id:"sql-6",title:"Ders 6: GROUP BY ve Aggregate Fonksiyonlar",content:`Verileri gruplamak ve istatistiksel hesaplamalar yapmak i\xE7in kullan\u0131l\u0131r.

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

### HAVING \u2014 Grup Filtresi:
\`\`\`sql
-- 5'ten fazla sipari\u015F veren ve 10.000 TL+ harcayan m\xFC\u015Fteriler
SELECT
    k.Ad + ' ' + k.Soyad AS Musteri,
    COUNT(s.Id)   AS SiparisSayisi,
    SUM(s.Tutar)  AS ToplamHarcama
FROM Kullanicilar k
INNER JOIN Siparisler s ON k.Id = s.KullaniciId
WHERE s.Durum = 'Tamamlandi'     -- Sat\u0131r filtresi
GROUP BY k.Id, k.Ad, k.Soyad
HAVING COUNT(s.Id) > 5           -- Grup filtresi
   AND SUM(s.Tutar) > 10000
ORDER BY ToplamHarcama DESC;
\`\`\`

### Ayl\u0131k Sat\u0131\u015F Raporu:
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
\`\`\``},{id:"sql-7",title:"Ders 7: Alt Sorgular ve CTE",content:`Alt sorgular ve CTE'ler, karma\u015F\u0131k sorgular\u0131 okunabilir yap\u0131lara d\xF6n\xFC\u015Ft\xFCr\xFCr.

### Subquery (Alt Sorgu):
\`\`\`sql
-- Ortalama fiyat\u0131n \xFCzerindeki \xFCr\xFCnler
SELECT Ad, Fiyat,
       (SELECT AVG(Fiyat) FROM Urunler WHERE AktifMi = 1) AS OrtFiyat
FROM Urunler
WHERE Fiyat > (SELECT AVG(Fiyat) FROM Urunler WHERE AktifMi = 1)
ORDER BY Fiyat DESC;

-- Hi\xE7 sipari\u015F vermemi\u015F m\xFC\u015Fteriler (NOT EXISTS \u2014 daha verimli)
SELECT Ad, Email
FROM Kullanicilar k
WHERE NOT EXISTS (
    SELECT 1 FROM Siparisler s
    WHERE s.KullaniciId = k.Id
);

-- En \xE7ok satan \xFCr\xFCn\xFCn kategorisi
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
-- WITH ile okunabilir ara sorgu tan\u0131mla
WITH Ayl\u0131kSatislar AS (
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
    FROM Ayl\u0131kSatislar
    WHERE ToplamTutar > 50000
    GROUP BY KullaniciId
)
SELECT k.Ad, k.Email, 'VIP' AS Segment
FROM Kullanicilar k
INNER JOIN VipMusteriler v ON k.Id = v.KullaniciId;
\`\`\``},{id:"sql-8",title:"Ders 8: Index ve Performans",content:`Index'ler, b\xFCy\xFCk tablolarda sorgu h\u0131z\u0131n\u0131 dramatik bi\xE7imde art\u0131r\u0131r.

### Index Nedir?
Kitab\u0131n arka sayfas\u0131ndaki dizin gibi: t\xFCm sayfalar\u0131 taramak yerine do\u011Frudan konuya atlar.

### Index T\xFCrleri ve Olu\u015Fturma:
\`\`\`sql
-- Clustered Index (tablo s\u0131ralamas\u0131 \u2014 PRIMARY KEY varsay\u0131lan)
-- Her tabloda sadece 1 tane olabilir

-- Non-Clustered Index (en yayg\u0131n)
CREATE INDEX IX_Urunler_Fiyat
ON Urunler (Fiyat);

-- Composite Index (birden fazla s\xFCtun)
CREATE INDEX IX_Siparisler_Musteri_Tarih
ON Siparisler (KullaniciId, OlusturmaTarihi DESC);

-- Unique Index
CREATE UNIQUE INDEX UIX_Kullanicilar_Email
ON Kullanicilar (Email);

-- Covering Index (s\u0131k sorgulanan s\xFCtunlar\u0131 dahil et)
CREATE INDEX IX_Urunler_Kategori_Covering
ON Urunler (KategoriId)
INCLUDE (Ad, Fiyat, StokAdedi);
\`\`\`

### Performans Analizi:
\`\`\`sql
-- Sorgu \xE7al\u0131\u015Fma plan\u0131n\u0131 g\xF6r (SSMS'de)
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

SELECT * FROM Urunler WHERE Fiyat BETWEEN 1000 AND 5000;

-- "Table Scan" k\xF6t\xFC \u2192 Index ekle
-- "Index Seek" iyi \u2192 H\u0131zl\u0131 \xE7al\u0131\u015F\u0131yor

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
-- \u2705 Ekle: WHERE, JOIN, ORDER BY'da s\u0131k kullan\u0131lan s\xFCtunlar
-- \u2705 Ekle: Y\xFCz binlerce kay\u0131t i\xE7eren tablolar
-- \u274C Ekleme: \xC7ok s\u0131k INSERT/UPDATE olan s\xFCtunlar (index g\xFCncelleme maliyeti)
-- \u274C Ekleme: K\xFC\xE7\xFCk tablolar (zaten h\u0131zl\u0131)
\`\`\``},{id:"sql-9",title:"Ders 9: View ve Stored Procedure",content:`View ve Stored Procedure, SQL sorgular\u0131n\u0131 yeniden kullan\u0131labilir yap\u0131lara d\xF6n\xFC\u015Ft\xFCr\xFCr.

### VIEW \u2014 Sanal Tablo:
\`\`\`sql
-- View olu\u015Ftur: Karma\u015F\u0131k JOIN'i basitle\u015Ftir
CREATE VIEW vw_UrunDetay AS
SELECT
    u.Id,
    u.Ad AS UrunAdi,
    k.Ad AS Kategori,
    u.Fiyat,
    u.Fiyat * 1.20 AS KDVliFiyat,
    u.StokAdedi,
    CASE
        WHEN u.StokAdedi = 0    THEN 'T\xFCkendi'
        WHEN u.StokAdedi < 5    THEN 'Kritik'
        WHEN u.StokAdedi < 20   THEN 'D\xFC\u015F\xFCk'
        ELSE 'Yeterli'
    END AS StokDurumu,
    u.OlusturmaTarihi
FROM Urunler u
INNER JOIN Kategoriler k ON u.KategoriId = k.Id
WHERE u.AktifMi = 1;
GO

-- Normal tablo gibi kullan
SELECT * FROM vw_UrunDetay WHERE Kategori = 'Elektronik';
SELECT * FROM vw_UrunDetay WHERE StokDurumu IN ('T\xFCkendi', 'Kritik');
SELECT TOP 10 * FROM vw_UrunDetay ORDER BY Fiyat DESC;
\`\`\`

### STORED PROCEDURE \u2014 Sakl\u0131 Yordam:
\`\`\`sql
-- Sayfalama destekli \xFCr\xFCn arama
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

    -- Toplam kay\u0131t say\u0131s\u0131
    SELECT COUNT(*) AS ToplamKayit
    FROM Urunler u
    WHERE u.AktifMi = 1
      AND (@Kelime IS NULL OR u.Ad LIKE '%' + @Kelime + '%')
      AND (@MinFiyat IS NULL OR u.Fiyat >= @MinFiyat)
      AND (@MaxFiyat IS NULL OR u.Fiyat <= @MaxFiyat)
      AND (@KategoriId IS NULL OR u.KategoriId = @KategoriId);

    -- Sayfal\u0131 sonu\xE7lar
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

-- Kullan\u0131m \xF6rnekleri
EXEC sp_UrunAra @Kelime = 'laptop';
EXEC sp_UrunAra @MinFiyat = 100, @MaxFiyat = 500, @SayfaNo = 2;
\`\`\``},{id:"sql-10",title:"Ders 10: Transaction ve ACID Prensipleri",content:`Transaction, birden fazla SQL i\u015Fleminin tek bir atomik birim olarak \xE7al\u0131\u015Fmas\u0131n\u0131 sa\u011Flar.

### ACID Prensipleri:
* **Atomicity (B\xFCt\xFCnl\xFCk):** Ya hepsi ger\xE7ekle\u015Fir ya da hi\xE7biri.
* **Consistency (Tutarl\u0131l\u0131k):** \u0130\u015Flem \xF6ncesi ve sonras\u0131 veri ge\xE7erlilik kurallar\u0131 bozulmaz.
* **Isolation (Yal\u0131t\u0131m):** E\u015F zamanl\u0131 i\u015Flemler birbirini olumsuz etkilemez.
* **Durability (Kal\u0131c\u0131l\u0131k):** COMMIT edilen i\u015Flem sistem \xE7\xF6kmesine ra\u011Fmen kal\u0131c\u0131d\u0131r.

### Banka Transferi \xD6rne\u011Fi:
\`\`\`sql
BEGIN TRANSACTION;

BEGIN TRY
    DECLARE @GondericiId INT = 101;
    DECLARE @AliciId     INT = 202;
    DECLARE @Tutar       DECIMAL(10,2) = 5000.00;

    -- 1. G\xF6nderici bakiyesini d\xFC\u015F
    UPDATE Hesaplar
    SET Bakiye = Bakiye - @Tutar,
        GuncellemeTarihi = GETDATE()
    WHERE Id = @GondericiId;

    -- 2. Yetersiz bakiye kontrol\xFC
    IF (SELECT Bakiye FROM Hesaplar WHERE Id = @GondericiId) < 0
    BEGIN
        ;THROW 50001, 'Yetersiz bakiye! Transfer iptal edildi.', 1;
    END

    -- 3. Al\u0131c\u0131 bakiyesine ekle
    UPDATE Hesaplar
    SET Bakiye = Bakiye + @Tutar,
        GuncellemeTarihi = GETDATE()
    WHERE Id = @AliciId;

    -- 4. Transfer kayd\u0131n\u0131 olu\u015Ftur
    INSERT INTO TransferGecmisi
        (GondericiId, AliciId, Tutar, OlusturmaTarihi, Durum)
    VALUES
        (@GondericiId, @AliciId, @Tutar, GETDATE(), 'Tamamlandi');

    COMMIT TRANSACTION;
    PRINT '\u2713 Transfer ba\u015Far\u0131yla tamamland\u0131.';

END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    PRINT '\u2717 Hata olu\u015Ftu, i\u015Flem geri al\u0131nd\u0131: ' + ERROR_MESSAGE();
END CATCH;
\`\`\`

### Savepoint \u2014 K\u0131smi Geri Alma:
\`\`\`sql
BEGIN TRANSACTION;

INSERT INTO Log (Mesaj) VALUES ('Ad\u0131m 1 tamamland\u0131');
SAVE TRANSACTION Adim1; -- Ara kay\u0131t noktas\u0131

INSERT INTO Log (Mesaj) VALUES ('Ad\u0131m 2 ba\u015Flad\u0131');
-- Bir hata olu\u015Ftu, sadece Ad\u0131m 2'ye geri al
ROLLBACK TRANSACTION Adim1;

-- Ad\u0131m 1 kal\u0131r, Ad\u0131m 2 geri al\u0131nd\u0131
COMMIT TRANSACTION;
\`\`\``}]}};})();
