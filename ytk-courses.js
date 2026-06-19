(()=>{window.YTK_COURSES={csharp:{title:"C# Programlama Temelleri",desc:".NET ekosisteminde C# temelleri: s\xF6zdizimi, OOP, LINQ, async/await ve Entity Framework Core.",icon:"\u{1F4BB}",color:"#569cd6",lessons:[{id:"cs-1",title:"Ders 1: C# Nedir ve Nas\u0131l \xC7al\u0131\u015F\u0131r?",intro:`### Neden C#?
C# (C-Sharp), Microsoft taraf\u0131ndan 2000 y\u0131l\u0131nda .NET platformu ile birlikte tan\u0131t\u0131lan modern, nesne y\xF6nelimli bir programlama dilidir.

### T\xFCrkiye'de Nerede Kullan\u0131l\u0131r?
T\xFCrkiye'deki b\xFCy\xFCk bankalar\u0131n (Garanti, \u0130\u015F Bankas\u0131, Akbank), e-ticaret devlerinin (Trendyol, Hepsiburada) ve devlet kurumlar\u0131n\u0131n backend sistemlerinin b\xFCy\xFCk \xE7o\u011Funlu\u011Fu C# ve .NET \xFCzerine kuruludur. \u0130\u015F ilanlar\u0131ndaki "Senior Backend Developer" pozisyonlar\u0131n\u0131n **%60-70'i** C# bilgisi aramaktad\u0131r.

### Bu Derste Ne \xD6\u011Frenece\u011Fiz?
* C# nas\u0131l derlenir ve \xE7al\u0131\u015F\u0131r (MSIL \u2192 JIT \u2192 Makine Kodu)
* \u0130lk C# program\u0131n\u0131 yazaca\u011F\u0131z
* .NET ekosistemini tan\u0131yaca\u011F\u0131z`,content:`### C# \xC7al\u0131\u015Fma Prensibi:
Yazd\u0131\u011F\u0131n C# kodu \u2192 **MSIL** (Ara Dil) \u2192 **CLR/JIT Compiler** \u2192 \u0130\u015Flemci Kodu

Bu sayede ayn\u0131 kod Windows, Linux ve macOS'ta \xE7al\u0131\u015F\u0131r.

### \u0130lk C# Program\u0131:
\`\`\`csharp
// .NET 6+ Modern S\xF6zdizimi (top-level statements)
Console.WriteLine("Merhaba, YTK Academy!");
Console.WriteLine($"Bug\xFCn\xFCn tarihi: {DateTime.Now:dd.MM.yyyy}");

// Klasik yap\u0131 (eski .NET Framework)
namespace YtkAcademy
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Merhaba, D\xFCnya!");
            Console.ReadLine(); // Konsolu a\xE7\u0131k tutar
        }
    }
}
\`\`\`

### Temel \xD6zellikler:
* **Nesne Y\xF6nelimli (OOP):** S\u0131n\u0131f, nesne, kal\u0131t\u0131m, \xE7ok bi\xE7imlilik
* **Tip G\xFCvenli:** Derleme zaman\u0131nda tip hatalar\u0131 yakalan\u0131r
* **Cross-Platform:** Windows, Linux, macOS deste\u011Fi
* **Y\xFCksek Performans:** Modern .NET 8, Node.js ve Python'\u0131 benchmark'larda ge\xE7iyor`,quiz:[{q:"C# hangi \u015Firket taraf\u0131ndan geli\u015Ftirilmi\u015Ftir?",options:["Apple","Microsoft","Google","Oracle"],answer:1,exp:"Microsoft, C# ve .NET platformunu 2000 y\u0131l\u0131nda tan\u0131tt\u0131."},{q:"C# kodu derlendikten sonra hangi ara dile \xE7evrilir?",options:["Bytecode","MSIL","Assembly","WebAssembly"],answer:1,exp:"MSIL (Microsoft Intermediate Language), CLR taraf\u0131ndan \xE7al\u0131\u015Fma zaman\u0131nda makine koduna d\xF6n\xFC\u015Ft\xFCr\xFCl\xFCr."},{q:"CLR i\xE7indeki bile\u015Fen hangisi MSIL'i makine koduna \xE7evirir?",options:["Compiler","Linker","JIT (Just-In-Time) Compiler","Interpreter"],answer:2,exp:"JIT Compiler, \xE7al\u0131\u015Fma zaman\u0131nda MSIL kodunu hedef i\u015Flemcinin makine koduna \xE7evirir."}]},{id:"cs-2",title:"Ders 2: De\u011Fi\u015Fkenler ve Veri Tipleri",intro:"### De\u011Fi\u015Fkenler Nedir?\nBir program \xE7al\u0131\u015F\u0131rken bellekte (RAM) ge\xE7ici veriler saklar. De\u011Fi\u015Fkenler bu verilere isimle eri\u015Fmemizi sa\u011Flar. Kullan\u0131c\u0131n\u0131n ad\u0131ndan bir \xFCr\xFCn\xFCn fiyat\u0131na, stok adedinden sipari\u015F tutar\u0131na kadar her \u015Fey de\u011Fi\u015Fkenlerde tutulur.\n\n### Ger\xE7ek D\xFCnya \xD6rne\u011Fi:\nBir e-ticaret uygulamas\u0131 d\xFC\u015F\xFCn: `kullaniciAdi`, `sepetToplami`, `urunFiyati`, `stokMevcut` \u2014 bunlar\u0131n hepsi de\u011Fi\u015Fkenlerdir. Do\u011Fru veri tipini se\xE7mek hem bellek kullan\u0131m\u0131n\u0131 hem de hesaplama hassasiyetini do\u011Frudan etkiler.\n\n> **\xD6nemli:** Finansal hesaplamalarda `double` yerine `decimal` kullan\u0131n! double'\u0131n kayan nokta hatas\u0131, bankac\u0131l\u0131k sistemlerinde ciddi sorunlara yol a\xE7abilir.",content:`### C# Temel Veri Tipleri:
* **\`int\`** \u2192 32-bit tam say\u0131: \`int yas = 25;\`
* **\`long\`** \u2192 64-bit b\xFCy\xFCk tam say\u0131: \`long nufus = 85_000_000;\`
* **\`double\`** \u2192 Ondal\u0131kl\u0131: \`double pi = 3.14159;\`
* **\`decimal\`** \u2192 Finansal hesaplama: \`decimal fiyat = 999.99m;\`
* **\`string\`** \u2192 Metin: \`string isim = "Yusuf";\`
* **\`bool\`** \u2192 true/false: \`bool aktifMi = true;\`
* **\`char\`** \u2192 Tek karakter: \`char cinsiyet = 'E';\`

### var ve const:
\`\`\`csharp
// var: Tip derleme zaman\u0131nda otomatik belirlenir
var yas = 28;           // int olarak derlenir
var isim = "Ahmet";     // string olarak derlenir
var fiyat = 99.99m;     // decimal olarak derlenir

// const: De\u011Fi\u015Ftirilemez sabit
const double PI = 3.14159265358979;
const string SITE_URL = "https://ytkacademy.com.tr";
\`\`\`

### String \u0130\u015Flemleri:
\`\`\`csharp
string ad = "Yusuf";
string soyad = "Yetkin";

// String interpolation \u2014 \xF6nerilen y\xF6ntem
string mesaj = $"Merhaba, {ad} {soyad}! Bug\xFCn: {DateTime.Now:dd/MM/yyyy}";

// Verbatim string ( karakteri sorun yaratmaz)
string yol = @"C:UsersYusufDesktopproje";

// S\u0131k kullan\u0131lan metodlar
Console.WriteLine(ad.ToUpper());          // YUSUF
Console.WriteLine(ad.Length);             // 5
Console.WriteLine("  YTK  ".Trim());     // YTK
Console.WriteLine(ad.Contains("usu"));   // True
Console.WriteLine(ad.Replace("Y","J"));  // Jusuf
\`\`\`

### G\xFCvenli Tip D\xF6n\xFC\u015F\xFCm\xFC:
\`\`\`csharp
// TryParse: Hata f\u0131rlatmaz, bool d\xF6nd\xFCr\xFCr
if (int.TryParse("123", out int sayi))
    Console.WriteLine($"D\xF6n\xFC\u015Ft\xFCr\xFCld\xFC: {sayi}");
else
    Console.WriteLine("Ge\xE7ersiz say\u0131 format\u0131!");

// Convert s\u0131n\u0131f\u0131
int deger = Convert.ToInt32("42");
bool aktif = Convert.ToBoolean("true");
\`\`\``,quiz:[{q:"Finansal hesaplamalarda (banka, e-ticaret) hangi veri tipi kullan\u0131lmal\u0131d\u0131r?",options:["double","float","decimal","int"],answer:2,exp:"decimal, kayan nokta hatas\u0131 olmayan y\xFCksek hassasiyetli ondal\u0131kl\u0131 tiptir. Finansal i\u015Flemler i\xE7in zorunludur."},{q:"int.TryParse('abc', out int x) ifadesi ne d\xF6nd\xFCr\xFCr?",options:["exception f\u0131rlat\u0131r","0 d\xF6nd\xFCr\xFCr","false d\xF6nd\xFCr\xFCr","null d\xF6nd\xFCr\xFCr"],answer:2,exp:"TryParse, d\xF6n\xFC\u015F\xFCm ba\u015Far\u0131s\u0131z oldu\u011Funda false d\xF6nd\xFCr\xFCr ve out parametresine 0 yazar. Hata f\u0131rlatmaz."},{q:"var anahtar kelimesiyle tan\u0131mlanan de\u011Fi\u015Fkenin tipi ne zaman belirlenir?",options:["\xC7al\u0131\u015Fma zaman\u0131nda","Derleme zaman\u0131nda","\u0130lk de\u011Fer atamas\u0131nda","Kullan\u0131ld\u0131\u011F\u0131 anda"],answer:1,exp:"var ile tan\u0131mlanan de\u011Fi\u015Fkenin tipi derleme zaman\u0131nda sabitlenir. Runtime'da dinamik de\u011Fildir."}]},{id:"cs-3",title:"Ders 3: Karar Yap\u0131lar\u0131 (if-else & switch)",intro:`### Karar Yap\u0131lar\u0131 Neden Gerekli?
Bir yaz\u0131l\u0131m, her zaman ayn\u0131 \u015Feyi yapmaz. "Kullan\u0131c\u0131 giri\u015F yapt\u0131 m\u0131?", "Bakiye yeterli mi?", "Stok var m\u0131?" gibi sorular kod i\xE7inde karar yap\u0131lar\u0131yla yan\u0131tlan\u0131r. Modern bir backend API'de y\xFCzlerce karar noktas\u0131 bulunur.

### Ger\xE7ek D\xFCnya \xD6rne\u011Fi:
Bir \xF6deme sisteminde:
* Bakiye >= tutar \u2192 \xD6demeyi onayla
* Kart limiti a\u015F\u0131ld\u0131 \u2192 Reddet ve log yaz
* \u015E\xFCpheli i\u015Flem \u2192 3D Secure'a y\xF6nlendir

Her bu senaryonun kodu if-else veya switch yap\u0131lar\u0131yla yaz\u0131l\u0131r.`,content:`### if-else if-else:
\`\`\`csharp
int not = 78;
string harf;

if (not >= 90)      harf = "AA";
else if (not >= 80) harf = "BA";
else if (not >= 70) harf = "BB";
else if (not >= 60) harf = "CB";
else if (not >= 50) harf = "CC";
else                harf = "FF";

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

### switch Expression \u2014 C# 8+ Modern S\xF6zdizimi:
\`\`\`csharp
// \xC7ok daha k\u0131sa ve okunabilir
string durum = gun switch
{
    "Pazartesi" or "Sal\u0131" or "\xC7ar\u015Famba"
    or "Per\u015Fembe" or "Cuma" => "\u0130\u015F g\xFCn\xFC",
    "Cumartesi" or "Pazar" => "Hafta sonu",
    _ => "Bilinmiyor" // default
};
\`\`\`

### Ternary ve Null Operat\xF6rler:
\`\`\`csharp
// Ternary: ko\u015Ful ? do\u011Fruysa : yanl\u0131\u015Fsa
int yas = 20;
string etiket = (yas >= 18) ? "Yeti\u015Fkin" : "\xC7ocuk";

// Null coalescing: ?? \u2014 null ise alternatifi kullan
string? isim = null;
string gosterilecek = isim ?? "Anonim Kullan\u0131c\u0131";

// Null conditional: ?. \u2014 null ise i\u015Flemi atla
string? uzunluk = isim?.ToUpper(); // hata f\u0131rlatmaz, null d\xF6ner
\`\`\``,quiz:[{q:"switch-case'de bir case blo\u011Fundan \xE7\u0131kmak i\xE7in hangi keyword kullan\u0131l\u0131r?",options:["exit","stop","break","return"],answer:2,exp:"break, switch-case blo\u011Fundan \xE7\u0131karak bir sonraki case'in \xE7al\u0131\u015Fmas\u0131n\u0131 engeller."},{q:"string? isim = null; \u2192 isim ?? 'Anonim' ifadesinin sonucu nedir?",options:["null","isim","'Anonim'","Hata f\u0131rlat\u0131r"],answer:2,exp:"?? operat\xF6r\xFC sol taraf null ise sa\u011F taraftaki de\u011Feri d\xF6nd\xFCr\xFCr."},{q:"C# 8+ switch expression'da default durumu hangi sembolle ifade edilir?",options:["default:","else","_ =>","*"],answer:2,exp:"_ (discard pattern), switch expression'da t\xFCm e\u015Fle\u015Fmeyen durumlar\u0131 yakalamak i\xE7in kullan\u0131l\u0131r."}]},{id:"cs-4",title:"Ders 4: D\xF6ng\xFCler (for, while, foreach)",intro:`### D\xF6ng\xFCler Neden Gerekli?
100 \xFCr\xFCn\xFC ekrana yazd\u0131rmak i\xE7in 100 sat\u0131r kod yazmak yerine d\xF6ng\xFCyle 3 sat\u0131r yeterli. D\xF6ng\xFCler tekrarl\u0131 i\u015Flemleri otomatize eder.

### Ger\xE7ek D\xFCnya Kullan\u0131m\u0131:
* **E-ticaret:** Sepetteki t\xFCm \xFCr\xFCnlerin toplam\u0131n\u0131 hesapla
* **Banka:** T\xFCm i\u015Flem kay\u0131tlar\u0131n\u0131 tara, \u015F\xFCphelileri i\u015Faretle
* **API:** Gelen veri listesini i\u015Fle, veritaban\u0131na kaydet
* **Rapor:** 1000 m\xFC\u015Fteriye e-posta g\xF6nder

> **Hangisini se\xE7eyim?** Ka\xE7 kez d\xF6nece\u011Fi belli \u2192 \`for\`. Koleksiyon \xFCzerinde gez \u2192 \`foreach\`. Ko\u015Ful ger\xE7ekle\u015Fene dek \u2192 \`while\`.`,content:`### for D\xF6ng\xFCs\xFC \u2014 Saya\xE7 tabanl\u0131:
\`\`\`csharp
// 1'den 10'a \xE7arp\u0131m tablosu
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine($"7 x {i} = {7 * i}");
}

// Geriye do\u011Fru sayma
for (int i = 10; i >= 1; i--)
    Console.Write(i + " ");
// \xC7\u0131kt\u0131: 10 9 8 7 6 5 4 3 2 1
\`\`\`

### while D\xF6ng\xFCs\xFC \u2014 Ko\u015Ful tabanl\u0131:
\`\`\`csharp
int deneme = 0;
const string dogruSifre = "ytk2024";

while (deneme < 3)
{
    Console.Write("\u015Eifreyi girin: ");
    string girilen = Console.ReadLine() ?? "";

    if (girilen == dogruSifre)
    {
        Console.WriteLine("\u2713 Giri\u015F ba\u015Far\u0131l\u0131!");
        break; // D\xF6ng\xFCden \xE7\u0131k
    }
    deneme++;
    Console.WriteLine($"\u2717 Hatal\u0131! Kalan hak: {3 - deneme}");
}

if (deneme >= 3)
    Console.WriteLine("Hesap kilitlendi!");
\`\`\`

### foreach D\xF6ng\xFCs\xFC \u2014 Koleksiyonlar i\xE7in:
\`\`\`csharp
string[] ogrenciler = { "Ahmet", "Mehmet", "Ay\u015Fe", "Fatma" };

foreach (string ogrenci in ogrenciler)
{
    Console.WriteLine($"  \u2022 {ogrenci}");
}

// Sepet toplam\u0131 \xF6rne\u011Fi
decimal[] fiyatlar = { 299.99m, 149.50m, 79.90m, 459.00m };
decimal toplam = 0;
foreach (decimal fiyat in fiyatlar)
    toplam += fiyat;

Console.WriteLine($"Sepet Toplam\u0131: {toplam:C}");
\`\`\`

### break ve continue:
\`\`\`csharp
// continue: Bu ad\u0131m\u0131 atla, devam et
// break: D\xF6ng\xFCden tamamen \xE7\u0131k
for (int i = 1; i <= 10; i++)
{
    if (i % 2 == 0) continue; // \xC7iftleri atla
    if (i == 9) break;        // 9'da dur
    Console.Write(i + " ");
}
// \xC7\u0131kt\u0131: 1 3 5 7
\`\`\``,quiz:[{q:"Bir koleksiyon \xFCzerindeki t\xFCm elemanlar\u0131 gezmek i\xE7in en uygun d\xF6ng\xFC hangisidir?",options:["for","while","do-while","foreach"],answer:3,exp:"foreach, IEnumerable aray\xFCz\xFCn\xFC uygulayan herhangi bir koleksiyonu (List, Array, Dictionary) gezmek i\xE7in tasarlanm\u0131\u015Ft\u0131r."},{q:"continue keyword'\xFC d\xF6ng\xFCde ne yapar?",options:["D\xF6ng\xFCy\xFC sonland\u0131r\u0131r","Mevcut ad\u0131m\u0131 atlay\u0131p bir sonrakine ge\xE7er","D\xF6ng\xFCy\xFC ba\u015Fa sarar","Program\u0131 sonland\u0131r\u0131r"],answer:1,exp:"continue, gerideki kodu atlayarak d\xF6ng\xFCn\xFCn bir sonraki iterasyonuna ge\xE7er."},{q:"for (int i=0; i<5; i++) d\xF6ng\xFCs\xFC ka\xE7 kez \xE7al\u0131\u015F\u0131r?",options:["4","5","6","0"],answer:1,exp:"i=0,1,2,3,4 \u2192 5 iterasyon. i=5 oldu\u011Funda i<5 ko\u015Fulu false olur."}]},{id:"cs-5",title:"Ders 5: Metotlar (Methods)",intro:'### Metotlar Neden Gerekli?\n"Ayn\u0131 kodu defalarca yazmak" \u2014 yaz\u0131l\u0131m d\xFCnyas\u0131n\u0131n en b\xFCy\xFCk g\xFCnahlar\u0131ndan biridir (DRY: Don\'t Repeat Yourself). Metotlar kodu tekrar kullan\u0131labilir par\xE7alara b\xF6ler.\n\n### Ger\xE7ek D\xFCnya Kullan\u0131m\u0131:\n`KDVHesapla()`, `SifreDogrula()`, `EmailGonder()`, `RaporOlustur()` \u2014 bunlar birer metot. B\xFCy\xFCk bir projedeki binlerce metot; her biri tek bir sorumlulu\u011Fu yerine getirir (Single Responsibility Principle).\n\n> \u0130yi yaz\u0131lm\u0131\u015F bir metot, ad\u0131n\u0131 okuyunca ne yapt\u0131\u011F\u0131n\u0131 anlat\u0131r. `x()` de\u011Fil, `SepetToplamin\u0131Hesapla()` yaz\u0131n.',content:`### Temel Metot S\xF6zdizimi:
\`\`\`csharp
// [eri\u015Fim] [d\xF6n\xFC\u015F tipi] MetotAd\u0131([parametreler])
public static int Topla(int a, int b)
{
    return a + b;
}

// Expression body \u2014 tek sat\u0131r (C# 6+)
public static int Carp(int a, int b) => a * b;
\`\`\`

### Parametre \xC7e\u015Fitleri:
\`\`\`csharp
// Varsay\u0131lan (default) parametre
static double KDVHesapla(double fiyat, double oran = 0.20)
    => fiyat * (1 + oran);

KDVHesapla(100);          // 120 (varsay\u0131lan %20)
KDVHesapla(100, 0.08);    // 108 (%8 KDV)
KDVHesapla(fiyat: 100, oran: 0.10); // \u0130simli parametre

// params \u2014 De\u011Fi\u015Fken say\u0131da parametre
static int Topla(params int[] sayilar)
{
    int toplam = 0;
    foreach (int s in sayilar) toplam += s;
    return toplam;
}

Topla(1, 2, 3);       // 6
Topla(10, 20, 30, 40); // 100
\`\`\`

### out Parametresi \u2014 Birden Fazla De\u011Fer D\xF6nd\xFCr:
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

### Method Overloading (A\u015F\u0131r\u0131 Y\xFCkleme):
\`\`\`csharp
// Ayn\u0131 isim, farkl\u0131 parametre imzas\u0131
static string Formatla(int sayi)    => sayi.ToString("N0");
static string Formatla(double sayi) => sayi.ToString("F2");
static string Formatla(decimal para) => para.ToString("C");

Console.WriteLine(Formatla(1000000));  // 1.000.000
Console.WriteLine(Formatla(3.14159));  // 3,14
Console.WriteLine(Formatla(999.99m)); // \u20BA999,99
\`\`\``,quiz:[{q:"void d\xF6n\xFC\u015F tipi ne anlama gelir?",options:["Metot hata f\u0131rlatabilir","Metot geriye bir de\u011Fer d\xF6nd\xFCrmez","Metot asenkrondur","Metot sadece static olabilir"],answer:1,exp:"void, metodun geriye herhangi bir de\u011Fer d\xF6nd\xFCrmedi\u011Fini belirtir. Yan etkiler i\xE7in kullan\u0131l\u0131r (log, ekrana yaz, kaydet)."},{q:"Ayn\u0131 isimde, farkl\u0131 parametreli birden fazla metot tan\u0131mlamak ne olarak adland\u0131r\u0131l\u0131r?",options:["Method Overriding","Method Hiding","Method Overloading","Method Chaining"],answer:2,exp:"Method Overloading (A\u015F\u0131r\u0131 Y\xFCkleme), derleyici parametre tipine g\xF6re do\u011Fru metodu se\xE7er."},{q:"static void Yaz(params string[] kelimeler) metoduna ka\xE7 arg\xFCman g\xF6nderilebilir?",options:["Sadece 1","Sadece 3","0 veya daha fazla","Maksimum 5"],answer:2,exp:"params ile tan\u0131mlanan parametre s\u0131f\u0131r veya daha fazla arg\xFCman alabilir."}]},{id:"cs-6",title:"Ders 6: S\u0131n\u0131flar ve OOP",intro:`### OOP Neden Gerekli?
Ger\xE7ek d\xFCnyadaki "M\xFC\u015Fteri", "Sipari\u015F", "\xDCr\xFCn", "Banka Hesab\u0131" gibi kavramlar\u0131 koda yans\u0131tmak i\xE7in nesne y\xF6nelimli programlama kullan\u0131l\u0131r. S\u0131n\u0131flar bu kavramlar\u0131n \u015Fablonudur.

### Ger\xE7ek D\xFCnya \xD6rne\u011Fi:
Bir e-ticaret sisteminde \`Urun\` s\u0131n\u0131f\u0131; \xFCr\xFCn\xFCn ad\u0131n\u0131, fiyat\u0131n\u0131, sto\u011Funu tutar ve sat\u0131\u015F yapma, stok g\xFCncelleme gibi i\u015Flemleri y\xF6netir. Bu s\u0131n\u0131ftan binlerce "Urun nesnesi" olu\u015Fturulabilir.

### 4 Temel OOP Prensibi:
* **Encapsulation:** Veriyi d\u0131\u015Far\u0131dan koruma (private field + public property)
* **Inheritance:** Miras alma (BankaHesabi \u2192 VadeliHesap)
* **Polymorphism:** Ayn\u0131 metot, farkl\u0131 davran\u0131\u015F (override)
* **Abstraction:** Karma\u015F\u0131kl\u0131\u011F\u0131 gizle, sade aray\xFCz sun`,content:`### S\u0131n\u0131f Tasar\u0131m\u0131 \u2014 Banka Hesab\u0131 \xD6rne\u011Fi:
\`\`\`csharp
public class BankaHesabi
{
    // Private field \u2014 d\u0131\u015Far\u0131dan do\u011Frudan eri\u015Filemez
    private decimal _bakiye;
    private readonly List<string> _islemGecmisi = new();

    // Properties \u2014 kontroll\xFC eri\u015Fim
    public string HesapNo { get; private set; }
    public string SahibiAdi { get; set; }
    public decimal Bakiye => _bakiye; // Sadece okunabilir

    // Constructor \u2014 nesne olu\u015Fturuldu\u011Funda \xE7al\u0131\u015F\u0131r
    public BankaHesabi(string hesapNo, string sahibi, decimal baslangic = 0)
    {
        HesapNo = hesapNo;
        SahibiAdi = sahibi;
        _bakiye = baslangic;
    }

    // Para yat\u0131rma metodu
    public void ParaYatir(decimal tutar)
    {
        if (tutar <= 0) throw new ArgumentException("Tutar pozitif olmal\u0131!");
        _bakiye += tutar;
        _islemGecmisi.Add($"+{tutar:C} yat\u0131r\u0131ld\u0131 \u2192 Bakiye: {_bakiye:C}");
    }

    // Para \xE7ekme \u2014 ba\u015Far\u0131 durumunu bool olarak d\xF6nd\xFCr\xFCr
    public bool ParaCek(decimal tutar)
    {
        if (tutar <= 0 || tutar > _bakiye) return false;
        _bakiye -= tutar;
        _islemGecmisi.Add($"-{tutar:C} \xE7ekildi \u2192 Bakiye: {_bakiye:C}");
        return true;
    }

    public void IslemleriGoster()
    {
        Console.WriteLine($"=== {HesapNo} \u0130\u015Flem Ge\xE7mi\u015Fi ===");
        foreach (var islem in _islemGecmisi)
            Console.WriteLine("  " + islem);
    }
}
\`\`\`

### Nesne Olu\u015Fturma ve Kullan\u0131m:
\`\`\`csharp
// new ile nesne olu\u015Ftur
var hesap = new BankaHesabi("TR33-0001", "Yusuf Yetkin", 5000m);

hesap.ParaYatir(2500m);
hesap.ParaCek(1000m);
bool sonuc = hesap.ParaCek(99999m); // false d\xF6ner (yetersiz bakiye)

Console.WriteLine($"Bakiye: {hesap.Bakiye:C}");
hesap.IslemleriGoster();
\`\`\``,quiz:[{q:"OOP'de Encapsulation (Kaps\xFClleme) ne anlama gelir?",options:["S\u0131n\u0131f\u0131 ba\u015Fka bir s\u0131n\u0131ftan t\xFCretmek","Veriyi d\u0131\u015F eri\u015Fimden koruyup kontroll\xFC eri\u015Fim sa\u011Flamak","Ayn\u0131 metodun farkl\u0131 davran\u0131\u015F sergilemesi","Soyut s\u0131n\u0131f tan\u0131mlamak"],answer:1,exp:"Encapsulation: private field + public property/metot ile veriyi d\u0131\u015Far\u0131dan koruma prensibidir."},{q:"Constructor (yap\u0131c\u0131 metot) ne zaman \xE7a\u011Fr\u0131l\u0131r?",options:["Nesne silindi\u011Finde","Metot her \xE7a\u011Fr\u0131ld\u0131\u011F\u0131nda","Nesne olu\u015Fturuldu\u011Funda (new)","Program ba\u015Flad\u0131\u011F\u0131nda"],answer:2,exp:"Constructor, 'new' keyword'\xFC ile nesne olu\u015Fturuldu\u011Fu anda otomatik \xE7a\u011Fr\u0131l\u0131r."},{q:"public decimal Bakiye => _bakiye; ifadesi ne anlama gelir?",options:["_bakiye de\u011Fi\u015Fkenine public eri\u015Fim","Bakiye'ye hem okuma hem yazma izni var","Bakiye sadece okunabilir (getter-only property)","Bakiye statik bir de\u011Fi\u015Fkendir"],answer:2,exp:"=> ile tan\u0131mlanan expression-body property sadece get i\xE7erir, set yoktur. D\u0131\u015Far\u0131dan de\u011Fi\u015Ftirilemez."}]},{id:"cs-7",title:"Ders 7: Koleksiyonlar (List, Dictionary, Array)",intro:'### Koleksiyonlar Neden Gerekli?\nTek bir veri i\xE7in de\u011Fi\u015Fken yeterlidir. Ama "t\xFCm sipari\u015Fler", "b\xFCt\xFCn kullan\u0131c\u0131lar", "aktif \xFCr\xFCnler" gibi veri setleri i\xE7in koleksiyon kullan\u0131l\u0131r.\n\n### Ger\xE7ek D\xFCnya Kullan\u0131m\u0131:\n* **API Response:** `List<Urun>` d\xF6nd\xFCr\n* **Cache:** `Dictionary<string, object>` ile anahtar-de\u011Fer \xF6nbellekleme\n* **Benzersiz veri:** `HashSet<int>` ile duplicate\'siz ID listesi\n* **S\u0131ral\u0131 veri:** `Queue<SiparisTalebi>` ile i\u015Flem kuyru\u011Fu\n\n> **Ne zaman hangisi?** S\u0131ral\u0131 liste \u2192 `List`. H\u0131zl\u0131 arama \u2192 `Dictionary`. Sabit boyut \u2192 `Array`. Benzersiz \u2192 `HashSet`.',content:`### Array \u2014 Sabit Boyutlu Dizi:
\`\`\`csharp
// Tan\u0131mlama
int[] notlar = { 85, 92, 78, 95, 88 };

// LINQ ile istatistik
double ortalama = notlar.Average();  // 87.6
int en_yuksek = notlar.Max();        // 95
int en_dusuk = notlar.Min();         // 78

// 2D dizi (matris)
int[,] matris = { { 1, 2, 3 }, { 4, 5, 6 } };
Console.WriteLine(matris[1, 2]); // 6
\`\`\`

### List<T> \u2014 Dinamik Liste:
\`\`\`csharp
var urunler = new List<string> { "Laptop", "Mouse", "Klavye" };

// Ekleme
urunler.Add("Monit\xF6r");
urunler.Insert(0, "Kulakl\u0131k"); // \u0130ndekse ekle

// Silme
urunler.Remove("Mouse");
urunler.RemoveAt(0); // \u0130ndekse g\xF6re sil

// Arama
bool varMi = urunler.Contains("Laptop");     // true
int indeks = urunler.IndexOf("Klavye");      // 0 (\u015Fu an)

// S\u0131ralama
urunler.Sort();
Console.WriteLine(string.Join(", ", urunler));
Console.WriteLine($"Toplam: {urunler.Count} \xFCr\xFCn");
\`\`\`

### Dictionary<TKey, TValue> \u2014 Anahtar-De\u011Fer:
\`\`\`csharp
// Kullan\u0131c\u0131 puanlar\u0131
var puan = new Dictionary<string, int>
{
    ["Ahmet"] = 850,
    ["Mehmet"] = 720,
    ["Ay\u015Fe"]  = 950
};

// Okuma
int ahmetPuan = puan["Ahmet"]; // 850

// G\xFCvenli okuma (KeyNotFoundException \xF6nle)
if (puan.TryGetValue("Ali", out int aliPuan))
    Console.WriteLine($"Ali: {aliPuan}");
else
    Console.WriteLine("Ali bulunamad\u0131.");

// Ekleme / g\xFCncelleme
puan["Fatma"] = 880;

// D\xF6ng\xFC
foreach (var (isim, p) in puan)
    Console.WriteLine($"{isim}: {p} puan");
\`\`\``,quiz:[{q:"List<T> ile Array aras\u0131ndaki temel fark nedir?",options:["List daha yava\u015Ft\u0131r","List dinamik boyutlu, Array sabit boyutludur","Array tip g\xFCvenlidir, List de\u011Fildir","List sadece string saklar"],answer:1,exp:"Array olu\u015Fturulurken boyutu sabittir. List dinamik olarak b\xFCy\xFCy\xFCp k\xFC\xE7\xFClebilir (Add/Remove)."},{q:"Dictionary'de mevcut olmayan bir Key'e [] ile eri\u015Fildi\u011Finde ne olur?",options:["null d\xF6ner","0 d\xF6ner","KeyNotFoundException f\u0131rlat\u0131r","false d\xF6ner"],answer:2,exp:"G\xFCvenli eri\u015Fim i\xE7in TryGetValue kullan\u0131lmal\u0131d\u0131r."},{q:"urunler.Contains('Laptop') ifadesi ne d\xF6nd\xFCr\xFCr?",options:["int (indeks)","string (de\u011Fer)","bool","List<string>"],answer:2,exp:"Contains, eleman\u0131n listede olup olmad\u0131\u011F\u0131n\u0131 bool (true/false) olarak d\xF6nd\xFCr\xFCr."}]},{id:"cs-8",title:"Ders 8: Kal\u0131t\u0131m (Inheritance) ve Interface",intro:'### Kal\u0131t\u0131m Neden Gerekli?\n"Yaz\u0131l\u0131mc\u0131 da bir \xC7al\u0131\u015Fand\u0131r" \u2014 bu c\xFCmle kal\u0131t\u0131m\u0131 \xF6zetler. Ortak \xF6zellikleri tekrar yazmak yerine \xFCst s\u0131n\u0131ftan miras al\u0131n\u0131r. Bu hem kod tekrar\u0131n\u0131 \xF6nler hem de sistemin geni\u015Flemesini kolayla\u015Ft\u0131r\u0131r.\n\n### Interface Neden Gerekli?\n"Kredi kart\u0131yla \xF6deme de, PayPal ile \xF6deme de birer \xF6demedir." Her \xF6deme y\xF6ntemi farkl\u0131 \xE7al\u0131\u015Fsa da ayn\u0131 `OdemeYap()` metoduna sahip olmal\u0131. Interface bu s\xF6zle\u015Fmeyi tan\u0131mlar.\n\n### Ger\xE7ek D\xFCnya:\n* **Repository Pattern:** `IUrunRepository` \u2192 `SqlUrunRepository`, `MongoUrunRepository`\n* **Strategy Pattern:** `IFiyatHesaplama` \u2192 `IndirimliHesap`, `NormalHesap`\n* **Dependency Injection:** ASP.NET Core\'un temeli interface\'lere dayan\u0131r',content:`### Kal\u0131t\u0131m \xD6rne\u011Fi:
\`\`\`csharp
// Temel s\u0131n\u0131f (Base Class)
public abstract class Calisan
{
    public int Id { get; set; }
    public string Ad { get; set; }
    public decimal MaasBase { get; protected set; }

    public Calisan(int id, string ad, decimal maas)
    {
        Id = id; Ad = ad; MaasBase = maas;
    }

    // abstract: Alt s\u0131n\u0131flar MUTLAKA override eder
    public abstract decimal NetMaas();

    // virtual: Alt s\u0131n\u0131flar iste\u011Fe ba\u011Fl\u0131 override eder
    public virtual string Ozet() => $"#{Id} {Ad}";
}

// T\xFCretilmi\u015F s\u0131n\u0131flar
public class Yazilimci : Calisan
{
    public string Dil { get; set; }

    public Yazilimci(int id, string ad, decimal maas, string dil)
        : base(id, ad, maas) // \xDCst s\u0131n\u0131f constructor'\u0131 \xE7a\u011F\u0131r
    {
        Dil = dil;
    }

    public override decimal NetMaas()
        => MaasBase * 0.85m + 2000m; // Vergi sonras\u0131 + teknoloji bonusu

    public override string Ozet()
        => base.Ozet() + $" | {Dil} Developer";
}
\`\`\`

### Interface \u2014 S\xF6zle\u015Fme Tan\u0131mlama:
\`\`\`csharp
// Interface sadece kural koyar, kod yazmaz
public interface IOdeme
{
    string OdemeYontemi { get; }
    bool OdemeYap(decimal tutar, string aciklama);
}

// Her \xF6deme y\xF6ntemi ayn\u0131 s\xF6zle\u015Fmeyi uygular
public class KrediKarti : IOdeme
{
    public string OdemeYontemi => "Kredi Kart\u0131";

    public bool OdemeYap(decimal tutar, string aciklama)
    {
        Console.WriteLine($"\u{1F4B3} {tutar:C} \u2192 {aciklama}");
        return true; // banka onay\u0131 sim\xFCle
    }
}

// Polymorphism: Hangi implementasyon oldu\u011Fu \xF6nemli de\u011Fil
IOdeme odeme = new KrediKarti();
odeme.OdemeYap(299.99m, "YTK Academy Ment\xF6rl\xFCk");
\`\`\``,quiz:[{q:"abstract keyword ile i\u015Faretlenen bir metot ne anlama gelir?",options:["Metot \xE7al\u0131\u015Fma zaman\u0131nda y\xFCklenir","Alt s\u0131n\u0131flar bu metodu MUTLAKA override etmek zorundad\u0131r","Metot sadece static olabilir","Metot private tan\u0131mlanm\u0131\u015Ft\u0131r"],answer:1,exp:"abstract metot, temel s\u0131n\u0131fta g\xF6vde (body) i\xE7ermez. T\xFCm t\xFCretilmi\u015F s\u0131n\u0131flar onu override etmek zorundad\u0131r."},{q:"Interface ile Abstract Class aras\u0131ndaki temel fark nedir?",options:["Interface metod g\xF6vdesi i\xE7erebilir, Abstract Class i\xE7eremez","Interface sadece s\xF6zle\u015Fme tan\u0131mlar (implementasyon yok), Abstract Class k\u0131smen implemente edebilir","Interface'den miras al\u0131namaz","Abstract Class'tan birden fazla miras al\u0131nabilir"],answer:1,exp:"C# 8+'dan \xF6nce interface'de sadece imza vard\u0131. Abstract class hem soyut hem de somut metotlar i\xE7erebilir. Bir s\u0131n\u0131f birden fazla interface'i uygulayabilir."},{q:"base() keyword'\xFC ne i\xE7in kullan\u0131l\u0131r?",options:["\xDCst s\u0131n\u0131f\u0131n static metodunu \xE7a\u011F\u0131rmak i\xE7in","T\xFCretilmi\u015F s\u0131n\u0131fta \xFCst s\u0131n\u0131f\u0131n constructor'\u0131n\u0131 veya \xFCyelerini \xE7a\u011F\u0131rmak i\xE7in","Interface metodunu \xE7a\u011F\u0131rmak i\xE7in","Mevcut s\u0131n\u0131f\u0131n ba\u015Fka constructor'\u0131n\u0131 \xE7a\u011F\u0131rmak i\xE7in"],answer:1,exp:"base(), t\xFCretilmi\u015F s\u0131n\u0131f\u0131n constructor'\u0131nda \xFCst s\u0131n\u0131f\u0131n constructor'\u0131n\u0131 \xE7a\u011F\u0131rmak i\xE7in kullan\u0131l\u0131r."}]},{id:"cs-9",title:"Ders 9: Hata Y\xF6netimi (try-catch-finally)",intro:`### Hata Y\xF6netimi Neden Kritik?
Hi\xE7bir program hatas\u0131z \xE7al\u0131\u015Fmaz. Kullan\u0131c\u0131 yanl\u0131\u015F format girebilir, a\u011F ba\u011Flant\u0131s\u0131 kesilebilir, disk dolabilir, veritaban\u0131 cevap vermeyebilir. Bu durumlarda program\u0131n \xE7\xF6kmesi de\u011Fil, zarif bir hata y\xF6netimi yapmas\u0131 beklenir.

### Ger\xE7ek D\xFCnya:
* \xDCretim ortam\u0131nda yakalanmayan exception \u2192 servis \xE7\xF6k\xFC\u015F\xFC \u2192 gelir kayb\u0131
* \u0130yi hata y\xF6netimi: hatay\u0131 logla, kullan\u0131c\u0131ya uygun mesaj g\xF6ster, sistemi ayakta tut
* .NET uygulamalar\u0131nda **Serilog** veya **NLog** ile merkezi loglama yap\u0131l\u0131r

> **Alt\u0131n Kural:** Asla bo\u015F catch blo\u011Fu b\u0131rakma! Hatay\u0131 yutmak debugging'i imkans\u0131z k\u0131lar.`,content:`### try-catch-finally Yap\u0131s\u0131:
\`\`\`csharp
try
{
    Console.Write("B\xF6l\xFCnen: ");
    int a = int.Parse(Console.ReadLine()!);

    Console.Write("B\xF6len: ");
    int b = int.Parse(Console.ReadLine()!);

    Console.WriteLine($"Sonu\xE7: {a / b}");
}
catch (FormatException ex)
{
    // Say\u0131 olmayan giri\u015F
    Console.WriteLine($"\u274C Ge\xE7ersiz say\u0131: {ex.Message}");
}
catch (DivideByZeroException)
{
    // S\u0131f\u0131ra b\xF6lme
    Console.WriteLine("\u274C S\u0131f\u0131ra b\xF6lme yap\u0131lamaz!");
}
catch (Exception ex) // T\xFCm di\u011Fer hatalar
{
    Console.WriteLine($"\u274C Beklenmedik hata: {ex.Message}");
    // Ger\xE7ek projede: logger.Error(ex, "B\xF6lme i\u015Flemi ba\u015Far\u0131s\u0131z");
}
finally
{
    // HER DURUMDA \xE7al\u0131\u015F\u0131r \u2014 kaynak temizli\u011Fi i\xE7in ideal
    Console.WriteLine("\u0130\u015Flem tamamland\u0131. (finally blo\u011Fu)");
}
\`\`\`

### \xD6zel Exception S\u0131n\u0131f\u0131:
\`\`\`csharp
// Domain'e \xF6zg\xFC exception tan\u0131mla
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

// \xC7a\u011F\u0131ran tarafta yakalan\u0131r
try { hesap.ParaCek(99999m); }
catch (YetersizBakiyeException ex)
{
    Console.WriteLine(ex.Message);
    Console.WriteLine($"Eksi\u011Fi: {ex.IstenenTutar - ex.Bakiye:C}");
}
\`\`\``,quiz:[{q:"finally blo\u011Fu ne zaman \xE7al\u0131\u015F\u0131r?",options:["Sadece hata olmad\u0131\u011F\u0131nda","Sadece exception f\u0131rlat\u0131ld\u0131\u011F\u0131nda","Her durumda \u2014 hata olsa da olmasa da","Sadece return \xE7a\u011Fr\u0131ld\u0131\u011F\u0131nda"],answer:2,exp:"finally blo\u011Fu, try ba\u015Far\u0131l\u0131 da olsa, catch devreye girse de her zaman \xE7al\u0131\u015F\u0131r. Kaynak temizli\u011Fi (connection close) i\xE7in idealdir."},{q:"Bo\u015F catch blo\u011Fu (catch {}) kullanmak neden k\xF6t\xFC bir pratiktir?",options:["Derleme hatas\u0131 verir","Hatay\u0131 yutarak debug'\u0131 imkans\u0131z k\u0131lar","Performans\u0131 d\xFC\u015F\xFCr\xFCr","Sadece FormatException'\u0131 yakalar"],answer:1,exp:"Bo\u015F catch blo\u011Fu hatay\u0131 sessizce yutarak sistemde neyin yanl\u0131\u015F gitti\u011Fini anlamay\u0131 engeller."},{q:"throw new ArgumentException('...') ifadesi ne yapar?",options:["Program\u0131 sonland\u0131r\u0131r","Bir hata mesaj\u0131 yazd\u0131r\u0131r","ArgumentException t\xFCr\xFCnde bir exception f\u0131rlat\u0131r","catch blo\u011Funa atlar"],answer:2,exp:"throw, exception nesnesini olu\u015Fturup f\u0131rlat\u0131r. En yak\u0131n uygun catch blo\u011Fu taraf\u0131ndan yakalan\u0131r."}]},{id:"cs-10",title:"Ders 10: LINQ ile Veri Sorgulama",intro:`### LINQ Nedir?
LINQ (Language Integrated Query), C# i\xE7inde koleksiyonlar\u0131 SQL benzeri s\xF6zdizimi ile sorgulamay\u0131 sa\u011Flar. Veri filtreleme, s\u0131ralama, gruplama ve d\xF6n\xFC\u015F\xFCm i\u015Flemleri tek sat\u0131ra s\u0131\u011Far.

### Ger\xE7ek D\xFCnya Kullan\u0131m\u0131:
* "Fiyat\u0131 1000 TL'den y\xFCksek aktif \xFCr\xFCnleri getir" \u2192 \`.Where().OrderBy()\`
* "Her kategorideki \xFCr\xFCn say\u0131s\u0131" \u2192 \`.GroupBy().Count()\`
* "En pahal\u0131 10 \xFCr\xFCn" \u2192 \`.OrderByDescending().Take(10)\`
* Entity Framework Core, LINQ'yu SQL'e \xE7evirir \u2014 veritaban\u0131 sorgular\u0131n\u0131 C# ile yazars\u0131n

> **LINQ, EF Core'un dilidir.** Bunu \xF6\u011Frenmek, veritaban\u0131 sorgular\u0131n\u0131 C# ile yazmay\u0131 \xF6\u011Frenmek demektir.`,content:`### Temel LINQ Metodlar\u0131:
\`\`\`csharp
using System.Linq;

var urunler = new List<Urun>
{
    new() { Ad = "Laptop",   Fiyat = 45000, Kategori = "Elektronik", Stok = 5  },
    new() { Ad = "Mouse",    Fiyat = 350,   Kategori = "Elektronik", Stok = 50 },
    new() { Ad = "Masa",     Fiyat = 3500,  Kategori = "Mobilya",    Stok = 8  },
    new() { Ad = "Sandalye", Fiyat = 2000,  Kategori = "Mobilya",    Stok = 12 },
    new() { Ad = "Kalem",    Fiyat = 15,    Kategori = "K\u0131rtasiye",  Stok = 200}
};

// Where \u2014 Filtreleme
var pahal\u0131lar = urunler.Where(u => u.Fiyat > 1000).ToList();

// OrderBy / OrderByDescending \u2014 S\u0131ralama
var ucuzdan = urunler.OrderBy(u => u.Fiyat).ToList();
var pahalidan = urunler.OrderByDescending(u => u.Fiyat).Take(3).ToList();

// Select \u2014 Projeksiyon (tip d\xF6n\xFC\u015F\xFCm\xFC)
var adlar = urunler.Select(u => u.Ad).ToList();
var ozet = urunler.Select(u => new { u.Ad, u.Fiyat }).ToList();

// Tek eleman
var enPahal\u0131 = urunler.MaxBy(u => u.Fiyat);
var laptop = urunler.FirstOrDefault(u => u.Ad == "Laptop");
\`\`\`

### Aggregate Fonksiyonlar:
\`\`\`csharp
decimal toplamDeger = urunler.Sum(u => u.Fiyat * u.Stok);
double ortFiyat = urunler.Average(u => (double)u.Fiyat);
int toplam = urunler.Count(u => u.Stok > 0);
bool hepsiFiyatl\u0131 = urunler.All(u => u.Fiyat > 0);
bool biriPahal\u0131 = urunler.Any(u => u.Fiyat > 40000);
\`\`\`

### GroupBy \u2014 Gruplama:
\`\`\`csharp
var gruplar = urunler
    .GroupBy(u => u.Kategori)
    .Select(g => new
    {
        Kategori = g.Key,
        Adet = g.Count(),
        ToplamDeger = g.Sum(u => u.Fiyat * u.Stok),
        OrtFiyat = g.Average(u => (double)u.Fiyat)
    })
    .OrderByDescending(g => g.ToplamDeger);

foreach (var g in gruplar)
    Console.WriteLine($"{g.Kategori}: {g.Adet} \xFCr\xFCn, {g.ToplamDeger:C}");
\`\`\``,quiz:[{q:"LINQ'da Where() metodu ne yapar?",options:["S\u0131ralama yapar","Belirtilen ko\u015Fula g\xF6re filtreler","Yeni bir nesne listesi olu\u015Fturur","Gruplayarak sayd\u0131r\u0131r"],answer:1,exp:"Where(), koleksiyonu filtreler; ko\u015Fulu true olanlar\u0131 yeni bir IEnumerable olarak d\xF6nd\xFCr\xFCr."},{q:".FirstOrDefault() metodu ne zaman null d\xF6nd\xFCr\xFCr?",options:["Liste bo\u015F oldu\u011Funda","Ko\u015Fula uyan eleman bulunamad\u0131\u011F\u0131nda","Her zaman null d\xF6nd\xFCr\xFCr","A ve B \u015F\u0131klar\u0131"],answer:3,exp:"FirstOrDefault, ko\u015Fula uyan eleman bulunamazsa veya liste bo\u015Fsa default de\u011Feri (referans tiplerde null) d\xF6nd\xFCr\xFCr."},{q:"urunler.Count(u => u.Stok > 0) ne d\xF6nd\xFCr\xFCr?",options:["\xDCr\xFCn listesi","En y\xFCksek stok de\u011Feri","Sto\u011Fu 0'dan b\xFCy\xFCk olan \xFCr\xFCn say\u0131s\u0131","Toplam stok adedi"],answer:2,exp:"Count(predicate), verilen ko\u015Fulu sa\u011Flayan eleman say\u0131s\u0131n\u0131 int olarak d\xF6nd\xFCr\xFCr."}]},{id:"cs-11",title:"Ders 11: Asenkron Programlama (async/await)",intro:`### Asenkron Programlama Neden Gerekli?
Bir restoran hayal et: Garson m\xFC\u015Fteriden sipari\u015Fi al\u0131p mutfaktan yemek \xE7\u0131kana kadar orada beklese di\u011Fer masalara gidemez. Asenkron programlama tam da budur \u2014 bir i\u015Flem beklerken di\u011Fer i\u015Fler yap\u0131labilir.

### Ger\xE7ek D\xFCnya:
* **API \xE7a\u011Fr\u0131s\u0131:** 200ms s\xFCren HTTP iste\u011Fi s\u0131ras\u0131nda thread bloke olmamal\u0131
* **Veritaban\u0131 sorgusu:** EF Core'un t\xFCm metodlar\u0131 async'tir (\`.ToListAsync()\`)
* **Dosya okuma:** B\xFCy\xFCk dosyalar async okunur
* **Web sunucusu:** ASP.NET Core, async ile ayn\u0131 anda binlerce iste\u011Fi i\u015Fler

> **Kural:** I/O i\u015Flemi yap\u0131yorsan (a\u011F, disk, DB), async kullan. CPU i\u015Flemi yap\u0131yorsan (hesaplama), async gerekmez.`,content:`### async/await Temelleri:
\`\`\`csharp
using System.Net.Http;
using System.Text.Json;

// Task<T>: De\u011Fer d\xF6nd\xFCren asenkron metot
public async Task<string> VeriGetirAsync(string url)
{
    using var client = new HttpClient();
    
    // await: \u0130\u015Flemi bekle ama thread'i BLOKE ETME
    string json = await client.GetStringAsync(url);
    return json;
}

// void yerine Task d\xF6nd\xFCr (hata yakalanabilir olsun)
public async Task KaydetAsync(string veri)
{
    await File.WriteAllTextAsync("veri.txt", veri);
    Console.WriteLine("\u2713 Kaydedildi");
}
\`\`\`

### Paralel Asenkron \u0130\u015Flemler:
\`\`\`csharp
public async Task<(string urunler, string kullanicilar)> VeriYukleAsync()
{
    // \u0130kisini AYNI ANDA ba\u015Flat (s\u0131rayla de\u011Fil!)
    Task<string> urunTask = VeriGetirAsync("/api/urunler");
    Task<string> kullaniciTask = VeriGetirAsync("/api/kullanicilar");

    // Her ikisi bitene kadar bekle
    await Task.WhenAll(urunTask, kullaniciTask);

    return (await urunTask, await kullaniciTask);
}

// Sadece birini bekle (en h\u0131zl\u0131s\u0131 yeterli)
Task<string> sonuc = await Task.WhenAny(urunTask, kullaniciTask);
\`\`\`

### CancellationToken \u2014 \u0130ptal Deste\u011Fi:
\`\`\`csharp
public async Task RaporUretAsync(CancellationToken ct)
{
    for (int i = 0; i < 100; i++)
    {
        ct.ThrowIfCancellationRequested(); // \u0130ptal istendi mi?
        await Task.Delay(100, ct);         // Bekleme (iptal edilebilir)
        Console.WriteLine($"Ad\u0131m {i + 1}/100 tamamland\u0131");
    }
}

// 5 saniye sonra otomatik iptal
using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(5));
await RaporUretAsync(cts.Token);
\`\`\``,quiz:[{q:"async metot hangi d\xF6n\xFC\u015F tiplerini kullanabilir?",options:["Sadece void","void, Task veya Task<T>","Sadece Task","Herhangi bir tip"],answer:1,exp:"async metodlar void, Task veya Task<T> d\xF6nd\xFCrebilir. void sadece event handler'lar i\xE7in \xF6nerilir."},{q:"await keyword'\xFC bir async i\u015Flem beklerken ne yapar?",options:["Thread'i bloke eder ve bekler","Thread'i serbest b\u0131rak\u0131r, i\u015Flem tamamlan\u0131nca devam eder","Yeni bir Thread ba\u015Flat\u0131r","\u0130\u015Flemi iptal eder"],answer:1,exp:"await, mevcut thread'i bloke etmeden i\u015Flemin tamamlanmas\u0131n\u0131 bekler. Thread ba\u015Fka i\u015Flere atanabilir."},{q:"Task.WhenAll() ne zaman kullan\u0131l\u0131r?",options:["Sadece en h\u0131zl\u0131 tamamlanan Task'\u0131 beklemek i\xE7in","Birden fazla async i\u015Flemi paralel ba\u015Flat\u0131p hepsinin tamamlanmas\u0131n\u0131 beklemek i\xE7in","Task'\u0131 iptal etmek i\xE7in","Senkron metodu async'e \xE7evirmek i\xE7in"],answer:1,exp:"Task.WhenAll(), t\xFCm Task'lar tamamland\u0131\u011F\u0131nda devam eder. Paralel API \xE7a\u011Fr\u0131lar\u0131 i\xE7in idealdir."}]},{id:"cs-12",title:"Ders 12: Entity Framework Core",intro:`### ORM Nedir ve Neden Kullan\u0131l\u0131r?
SQL yazmak yerine C# nesneleri \xFCzerinden veritaban\u0131 i\u015Flemi yapmak istiyorsan ORM (Object-Relational Mapping) kullan\u0131rs\u0131n. EF Core, .NET'in resmi ORM arac\u0131d\u0131r.

### Ger\xE7ek D\xFCnya:
* T\xFCrkiye'deki kurumsal .NET projelerinin b\xFCy\xFCk \xE7o\u011Funlu\u011Fu EF Core kullan\u0131yor
* \`db.Urunler.Where(u => u.Fiyat > 100).ToListAsync()\` \u2192 EF Core bunu SQL'e \xE7evirir
* Code-First yakla\u015F\u0131m\u0131: C# s\u0131n\u0131f\u0131 yaz \u2192 migration \u2192 veritaban\u0131 otomatik olu\u015Fur

> **Bu ders sonunda:** Basit bir CRUD API'nin veritaban\u0131 katman\u0131n\u0131 yazabileceksin. Bu, ger\xE7ek projelerde kullan\u0131lan yap\u0131n\u0131n ta kendisidir.`,content:`### Entity ve DbContext Tan\u0131mlama:
\`\`\`csharp
using Microsoft.EntityFrameworkCore;

// Entity \u2192 Veritaban\u0131 tablosu
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
        // Precision: decimal i\xE7in zorunlu
        mb.Entity<Urun>()
          .Property(u => u.Fiyat)
          .HasPrecision(18, 2);
    }
}
\`\`\`

### CRUD \u0130\u015Flemleri:
\`\`\`csharp
await using var db = new AppDbContext(options);

// CREATE \u2014 Yeni kay\u0131t ekle
var yeniUrun = new Urun { Ad = "MacBook Pro", Fiyat = 85000m, KategoriId = 1 };
db.Urunler.Add(yeniUrun);
await db.SaveChangesAsync(); // SQL: INSERT INTO...

// READ \u2014 LINQ ile sorgula
var aktifler = await db.Urunler
    .Include(u => u.Kategori)          // SQL JOIN
    .Where(u => u.AktifMi && u.Stok > 0)
    .OrderByDescending(u => u.Fiyat)
    .Take(10)
    .ToListAsync();

// UPDATE \u2014 G\xFCncelle
var urun = await db.Urunler.FindAsync(1);
if (urun is not null)
{
    urun.Fiyat = 79000m;
    urun.Stok -= 1;
    await db.SaveChangesAsync(); // SQL: UPDATE...
}

// DELETE \u2014 Sil
var silinecek = await db.Urunler.FindAsync(5);
if (silinecek is not null)
{
    db.Urunler.Remove(silinecek);
    await db.SaveChangesAsync(); // SQL: DELETE...
}
\`\`\`

### Migration Komutlar\u0131 (Terminalde \xE7al\u0131\u015Ft\u0131r\u0131l\u0131r):
\`\`\`csharp
// dotnet ef migrations add InitialCreate
// dotnet ef database update
// dotnet ef migrations list
// dotnet ef database drop (dikkatli!)
\`\`\``,quiz:[{q:"EF Core'da ORM a\xE7\u0131l\u0131m\u0131 nedir?",options:["Object Resource Manager","Object-Relational Mapping","Ordered Record Model","Optional Request Module"],answer:1,exp:"ORM: Object-Relational Mapping. C# nesnelerini ili\u015Fkisel veritaban\u0131 tablolar\u0131na e\u015Fler."},{q:"db.SaveChangesAsync() ne zaman \xE7a\u011Fr\u0131lmal\u0131d\u0131r?",options:["Her LINQ sorgusundan sonra","Sadece DELETE i\u015Flemlerinde","Add, Update veya Remove sonras\u0131nda de\u011Fi\u015Fiklikleri veritaban\u0131na yazmak i\xE7in","DbContext olu\u015Fturuldu\u011Funda"],answer:2,exp:"SaveChangesAsync, bellekteki de\u011Fi\u015Fiklikleri (INSERT/UPDATE/DELETE) bir transaction i\xE7inde veritaban\u0131na g\xF6nderir."},{q:".Include(u => u.Kategori) EF Core'da ne i\u015Fe yarar?",options:["Kategori tablosunu olu\u015Fturur","Kategorileri filtreler","SQL JOIN yaparak ili\u015Fkili tabloyu y\xFCkler (eager loading)","Kategori alan\u0131n\u0131 \u015Fifreler"],answer:2,exp:"Include, EF Core'a SQL JOIN ekletir. Aksi h\xE2lde navigation property null gelir (lazy loading kapal\u0131ysa)."}]}]},sql:{title:"SQL Veritaban\u0131 Temelleri",desc:"\u0130li\u015Fkisel veritaban\u0131 tasar\u0131m\u0131, DDL/DML komutlar\u0131, JOIN, index, stored procedure ve transaction y\xF6netimi.",icon:"\u{1F5C4}\uFE0F",color:"#ffd166",lessons:[{id:"sql-1",title:"Ders 1: SQL Nedir? Temel Kavramlar",content:`SQL (Structured Query Language), ili\u015Fkisel veritabanlar\u0131nda veri y\xF6netmek i\xE7in kullan\u0131lan standart dildir.

### Temel Kavramlar:
* **Veritaban\u0131:** Birbiriyle ili\u015Fkili verilerin d\xFCzenli sakland\u0131\u011F\u0131 yap\u0131.
* **Tablo:** Sat\u0131r ve s\xFCtun yap\u0131s\u0131nda veri depolayan nesne.
* **Primary Key (PK):** Her sat\u0131r\u0131 benzersiz tan\u0131mlayan s\xFCtun.
* **Foreign Key (FK):** Ba\u015Fka tablonun PK's\u0131na referans veren s\xFCtun.

### SQL Komut Kategorileri:
* **DDL:** CREATE, ALTER, DROP \u2014 Yap\u0131 y\xF6netimi
* **DML:** INSERT, UPDATE, DELETE \u2014 Veri y\xF6netimi
* **DQL:** SELECT \u2014 Veri sorgulama
* **TCL:** COMMIT, ROLLBACK \u2014 Transaction y\xF6netimi

### \u0130lk SQL Komutlar\u0131:
\`\`\`sql
CREATE DATABASE YtkAcademy;
USE YtkAcademy;

SELECT TABLE_NAME
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_TYPE = 'BASE TABLE';
\`\`\``},{id:"sql-2",title:"Ders 2: Tablo Olu\u015Fturma (CREATE TABLE)",content:`### Ger\xE7ek Bir E-Ticaret \u015Eemas\u0131:
\`\`\`sql
CREATE TABLE Kullanicilar (
    Id               INT IDENTITY(1,1) PRIMARY KEY,
    Ad               NVARCHAR(50)  NOT NULL,
    Soyad            NVARCHAR(50)  NOT NULL,
    Email            NVARCHAR(100) NOT NULL UNIQUE,
    SifreHash        NVARCHAR(255) NOT NULL,
    AktifMi          BIT           NOT NULL DEFAULT 1,
    OlusturmaTarihi  DATETIME      NOT NULL DEFAULT GETDATE()
);

CREATE TABLE Urunler (
    Id         INT IDENTITY(1,1) PRIMARY KEY,
    KategoriId INT           NOT NULL,
    Ad         NVARCHAR(200) NOT NULL,
    Fiyat      DECIMAL(10,2) NOT NULL,
    StokAdedi  INT           NOT NULL DEFAULT 0,
    AktifMi    BIT           NOT NULL DEFAULT 1,

    CONSTRAINT FK_Urunler_Kategoriler
        FOREIGN KEY (KategoriId) REFERENCES Kategoriler(Id),
    CONSTRAINT CK_Urunler_Fiyat CHECK (Fiyat >= 0)
);
\`\`\``},{id:"sql-3",title:"Ders 3: SELECT ve Filtreleme",content:`### Temel SELECT:
\`\`\`sql
SELECT Id, Ad, Fiyat FROM Urunler;

SELECT Ad, Fiyat * 1.20 AS KDVliFiyat FROM Urunler;
\`\`\`

### WHERE ile Filtreleme:
\`\`\`sql
SELECT * FROM Urunler WHERE Fiyat > 1000;

SELECT * FROM Urunler
WHERE Fiyat BETWEEN 500 AND 5000
  AND AktifMi = 1 AND StokAdedi > 0;

SELECT * FROM Urunler WHERE Ad LIKE '%laptop%';

SELECT * FROM Kullanicilar WHERE Telefon IS NULL;
\`\`\`

### S\u0131ralama ve Sayfalama:
\`\`\`sql
SELECT Ad, Fiyat FROM Urunler
ORDER BY Fiyat DESC;

SELECT TOP 5 * FROM Urunler ORDER BY Fiyat DESC;

-- Sayfalama: 2. sayfa, 10'ar kay\u0131t
SELECT * FROM Urunler
ORDER BY Id
OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;
\`\`\``},{id:"sql-4",title:"Ders 4: INSERT, UPDATE ve DELETE",content:`### INSERT:
\`\`\`sql
INSERT INTO Kategoriler (Ad, Slug) VALUES
    ('Elektronik', 'elektronik'),
    ('Mobilya', 'mobilya');
\`\`\`

### UPDATE:
\`\`\`sql
-- \u26A0\uFE0F WHERE olmadan T\xDCM sat\u0131rlar de\u011Fi\u015Fir!
UPDATE Urunler
SET Fiyat = Fiyat * 1.10, GuncellemeTarihi = GETDATE()
WHERE KategoriId = 1 AND AktifMi = 1;
\`\`\`

### DELETE:
\`\`\`sql
-- \u26A0\uFE0F WHERE olmadan T\xDCM kay\u0131tlar silinir!
DELETE FROM Urunler WHERE StokAdedi = 0 AND AktifMi = 0;

TRUNCATE TABLE GeciciLog; -- H\u0131zl\u0131 tablo temizleme
\`\`\``},{id:"sql-5",title:"Ders 5: JOIN \u0130\u015Flemleri",content:`### INNER JOIN \u2014 Sadece E\u015Fle\u015Fenler:
\`\`\`sql
SELECT u.Ad, k.Ad AS Kategori, u.Fiyat
FROM Urunler u
INNER JOIN Kategoriler k ON u.KategoriId = k.Id
WHERE u.AktifMi = 1;
\`\`\`

### LEFT JOIN \u2014 Sol Tablonun Tamam\u0131:
\`\`\`sql
SELECT k.Ad, COUNT(s.Id) AS SiparisSayisi
FROM Kullanicilar k
LEFT JOIN Siparisler s ON k.Id = s.KullaniciId
GROUP BY k.Id, k.Ad;
\`\`\`

### \xC7oklu JOIN:
\`\`\`sql
SELECT s.Id, k.Ad AS Musteri, u.Ad AS Urun, sd.Adet
FROM Siparisler s
INNER JOIN Kullanicilar k ON s.KullaniciId = k.Id
INNER JOIN SiparisDetay sd ON s.Id = sd.SiparisId
INNER JOIN Urunler u ON sd.UrunId = u.Id
WHERE s.Durum = 'Tamamlandi';
\`\`\``},{id:"sql-6",title:"Ders 6: GROUP BY ve Aggregate Fonksiyonlar",content:`### Aggregate Fonksiyonlar:
\`\`\`sql
SELECT
    COUNT(*) AS ToplamUrun,
    SUM(StokAdedi) AS ToplamStok,
    AVG(Fiyat) AS OrtFiyat,
    MIN(Fiyat) AS EnDusuk,
    MAX(Fiyat) AS EnYuksek
FROM Urunler WHERE AktifMi = 1;
\`\`\`

### GROUP BY:
\`\`\`sql
SELECT k.Ad AS Kategori, COUNT(u.Id) AS UrunSayisi,
       AVG(u.Fiyat) AS OrtFiyat
FROM Kategoriler k
LEFT JOIN Urunler u ON k.Id = u.KategoriId
GROUP BY k.Id, k.Ad
ORDER BY OrtFiyat DESC;
\`\`\`

### HAVING \u2014 Grup Filtresi:
\`\`\`sql
SELECT KullaniciId, COUNT(*) AS Adet, SUM(Tutar) AS Toplam
FROM Siparisler
WHERE Durum = 'Tamamlandi'
GROUP BY KullaniciId
HAVING SUM(Tutar) > 10000;
\`\`\``},{id:"sql-7",title:"Ders 7: Alt Sorgular ve CTE",content:`### Subquery:
\`\`\`sql
-- Ortalama \xFCzerindeki \xFCr\xFCnler
SELECT Ad, Fiyat FROM Urunler
WHERE Fiyat > (SELECT AVG(Fiyat) FROM Urunler WHERE AktifMi = 1);

-- Sipari\u015F vermemi\u015F m\xFC\u015Fteriler
SELECT Ad, Email FROM Kullanicilar k
WHERE NOT EXISTS (
    SELECT 1 FROM Siparisler s WHERE s.KullaniciId = k.Id
);
\`\`\`

### CTE:
\`\`\`sql
WITH Ayl\u0131kSatislar AS (
    SELECT KullaniciId, YEAR(OlusturmaTarihi) AS Yil,
           MONTH(OlusturmaTarihi) AS Ay, SUM(Tutar) AS Toplam
    FROM Siparisler WHERE Durum = 'Tamamlandi'
    GROUP BY KullaniciId, YEAR(OlusturmaTarihi), MONTH(OlusturmaTarihi)
)
SELECT * FROM Ayl\u0131kSatislar WHERE Toplam > 50000;
\`\`\``},{id:"sql-8",title:"Ders 8: Index ve Performans",content:`### Index T\xFCrleri:
\`\`\`sql
CREATE INDEX IX_Urunler_Fiyat ON Urunler (Fiyat);

CREATE INDEX IX_Siparisler_Musteri_Tarih
ON Siparisler (KullaniciId, OlusturmaTarihi DESC);

CREATE UNIQUE INDEX UIX_Email ON Kullanicilar (Email);

CREATE INDEX IX_Covering
ON Urunler (KategoriId) INCLUDE (Ad, Fiyat, StokAdedi);
\`\`\`

### Performans Analizi:
\`\`\`sql
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

SELECT * FROM Urunler WHERE Fiyat BETWEEN 1000 AND 5000;
-- 'Index Seek' = iyi. 'Table Scan' = yava\u015F, index gerekiyor.
\`\`\``},{id:"sql-9",title:"Ders 9: View ve Stored Procedure",content:`### VIEW:
\`\`\`sql
CREATE VIEW vw_UrunDetay AS
SELECT u.Id, u.Ad, k.Ad AS Kategori, u.Fiyat,
       CASE WHEN u.StokAdedi = 0 THEN 'T\xFCkendi'
            WHEN u.StokAdedi < 5 THEN 'Kritik'
            ELSE 'Yeterli' END AS StokDurumu
FROM Urunler u
INNER JOIN Kategoriler k ON u.KategoriId = k.Id
WHERE u.AktifMi = 1;

SELECT * FROM vw_UrunDetay WHERE Kategori = 'Elektronik';
\`\`\`

### STORED PROCEDURE:
\`\`\`sql
CREATE PROCEDURE sp_UrunAra
    @Kelime     NVARCHAR(200) = NULL,
    @MaxFiyat   DECIMAL(10,2) = NULL,
    @SayfaNo    INT = 1,
    @SayfaBoyut INT = 20
AS
BEGIN
    SET NOCOUNT ON;
    SELECT u.Id, u.Ad, k.Ad AS Kategori, u.Fiyat
    FROM Urunler u
    INNER JOIN Kategoriler k ON u.KategoriId = k.Id
    WHERE u.AktifMi = 1
      AND (@Kelime IS NULL OR u.Ad LIKE '%' + @Kelime + '%')
      AND (@MaxFiyat IS NULL OR u.Fiyat <= @MaxFiyat)
    ORDER BY u.Id
    OFFSET (@SayfaNo - 1) * @SayfaBoyut ROWS
    FETCH NEXT @SayfaBoyut ROWS ONLY;
END;

EXEC sp_UrunAra @Kelime = 'laptop', @MaxFiyat = 50000;
\`\`\``},{id:"sql-10",title:"Ders 10: Transaction ve ACID",content:`### ACID Prensipleri:
* **Atomicity:** Ya hepsi ger\xE7ekle\u015Fir ya da hi\xE7biri.
* **Consistency:** Veri tutarl\u0131l\u0131\u011F\u0131 korunur.
* **Isolation:** E\u015F zamanl\u0131 i\u015Flemler birbirini bozmaz.
* **Durability:** COMMIT edilen veri kal\u0131c\u0131d\u0131r.

### Banka Transferi \xD6rne\u011Fi:
\`\`\`sql
BEGIN TRANSACTION;

BEGIN TRY
    UPDATE Hesaplar SET Bakiye = Bakiye - 5000
    WHERE Id = 101;

    IF (SELECT Bakiye FROM Hesaplar WHERE Id = 101) < 0
        THROW 50001, 'Yetersiz bakiye!', 1;

    UPDATE Hesaplar SET Bakiye = Bakiye + 5000
    WHERE Id = 202;

    INSERT INTO Transferler (GondericiId, AliciId, Tutar)
    VALUES (101, 202, 5000);

    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    PRINT 'Hata: ' + ERROR_MESSAGE();
END CATCH;
\`\`\``}]},netcore:{title:".NET Core Backend Geli\u015Ftirme",desc:".NET CLI, ASP.NET Core Web API, Dependency Injection, Middleware yap\u0131s\u0131 ve App Configuration y\xF6netimi.",icon:"\u2699\uFE0F",color:"#00ff88",lessons:[{id:"net-1",title:"Ders 1: .NET Core Nedir ve CLI Kullan\u0131m\u0131",intro:`### .NET Core Nedir?
.NET Core (modern ad\u0131yla .NET), Microsoft taraf\u0131ndan geli\u015Ftirilen, a\xE7\u0131k kaynak kodlu ve \xE7apraz platform (cross-platform) destekli y\xFCksek performansl\u0131 bir yaz\u0131l\u0131m geli\u015Ftirme platformudur.

### Bu Derste Ne \xD6\u011Frenece\u011Fiz?
* .NET SDK ve Runtime aras\u0131ndaki farklar\u0131
* .NET CLI (Command Line Interface) komutlar\u0131n\u0131 kullanmay\u0131
* Komut sat\u0131r\u0131ndan proje olu\u015Fturma, derleme ve \xE7al\u0131\u015Ft\u0131rmay\u0131`,content:`### .NET SDK vs Runtime:
* **.NET SDK (Software Development Kit):** Uygulama geli\u015Ftirmek i\xE7in gereken t\xFCm ara\xE7lar\u0131, derleyiciyi (Roslyn) ve CLI ara\xE7lar\u0131n\u0131 i\xE7erir. Runtime'\u0131 da kapsar.
* **.NET Runtime:** Derlenmi\u015F olan .NET uygulamalar\u0131n\u0131 \xE7al\u0131\u015Ft\u0131rmak i\xE7in gereken minimum ortamd\u0131r (CLR ve temel s\u0131n\u0131flar).

### S\u0131k Kullan\u0131lan CLI Komutlar\u0131:
* \`dotnet --version\` : Y\xFCkl\xFC .NET SDK s\xFCr\xFCm\xFCn\xFC g\xF6sterir.
* \`dotnet new <proje-tipi>\` : Yeni bir proje \u015Fablonu olu\u015Fturur. (\xD6rn: \`dotnet new webapi\`, \`dotnet new console\`)
* \`dotnet build\` : Projeyi ve ba\u011F\u0131ml\u0131l\u0131klar\u0131n\u0131 derler.
* \`dotnet run\` : Projeyi derler ve hemen \xE7al\u0131\u015Ft\u0131r\u0131r.
* \`dotnet watch\` : Kodda yap\u0131lan de\u011Fi\u015Fiklikleri izler ve projeyi otomatik olarak yeniden derleyip ba\u015Flat\u0131r (Hot Reload).

### \u0130lk Console Projesini Olu\u015Fturma ve \xC7al\u0131\u015Ft\u0131rma:
\`\`\`bash
# 1. Klas\xF6r olu\u015Ftur ve i\xE7ine gir
mkdir YtkConsoleApp
cd YtkConsoleApp

# 2. Yeni console uygulamas\u0131 olu\u015Ftur
dotnet new console

# 3. Uygulamay\u0131 \xE7al\u0131\u015Ft\u0131r
dotnet run
\`\`\``,quiz:[{q:"Yeni bir .NET projesi olu\u015Fturmak i\xE7in hangi CLI komutu kullan\u0131l\u0131r?",options:["dotnet new","dotnet build","dotnet run","dotnet watch"],answer:0,exp:"dotnet new komutu, belirtilen \u015Fablona g\xF6re yeni bir .NET projesi olu\u015Fturur."},{q:"Kod de\u011Fi\u015Fikliklerini izleyip uygulamay\u0131 otomatik olarak yeniden ba\u015Flatan (Hot Reload) komut hangisidir?",options:["dotnet run","dotnet watch","dotnet test","dotnet clean"],answer:1,exp:"dotnet watch komutu, dosya de\u011Fi\u015Fikliklerini izler ve projeyi yeniden derleyip g\xFCnceller."},{q:".NET SDK ve Runtime aras\u0131ndaki temel fark nedir?",options:["SDK sadece derleme ve geli\u015Ftirme ara\xE7lar\u0131n\u0131 i\xE7erir, Runtime ise uygulamay\u0131 \xE7al\u0131\u015Ft\u0131rmak i\xE7indir","SDK sadece Windows'ta \xE7al\u0131\u015F\u0131r","Runtime sadece mobil cihazlar i\xE7indir","Aralar\u0131nda hi\xE7bir fark yoktur"],answer:0,exp:"Geli\u015Ftiriciler kod yazmak ve derlemek i\xE7in SDK'ya ihtiya\xE7 duyarlar, son kullan\u0131c\u0131lar uygulamay\u0131 \xE7al\u0131\u015Ft\u0131rmak i\xE7in sadece Runtime'a ihtiya\xE7 duyarlar."}]},{id:"net-2",title:"Ders 2: ASP.NET Core MVC ve Web API Temelleri",intro:`### Web API Nedir?
Modern web mimarisinde backend, frontend'e veya mobil uygulamalara JSON format\u0131nda veri sa\u011Flayan servislerden (API) olu\u015Fur. ASP.NET Core Web API, bu servisleri geli\u015Ftirmek i\xE7in en pop\xFCler framework'lerden biridir.

### Bu Derste Ne \xD6\u011Frenece\u011Fiz?
* Controller yap\u0131s\u0131n\u0131 ve \xF6zniteliklerini (attributes)
* Routing (Y\xF6nlendirme) mekanizmas\u0131n\u0131
* HTTP Get, Post, Put, Delete metotlar\u0131n\u0131 y\xF6netmeyi`,content:`### Controller ve ApiController:
Web API projelerinde istemciden gelen istekleri kar\u015F\u0131layan s\u0131n\u0131flara **Controller** denir. Bir s\u0131n\u0131f\u0131n API Controller oldu\u011Funu belirtmek i\xE7in \`[ApiController]\` attribute'u eklenir.

### Basit Bir API Controller \xD6rne\u011Fi:
\`\`\`csharp
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")] // api/products
public class ProductsController : ControllerBase
{
    private static readonly List<string> Products = new() { "Laptop", "Mouse", "Keyboard" };

    // GET api/products
    [HttpGet]
    public ActionResult<IEnumerable<string>> Get()
    {
        return Ok(Products);
    }

    // POST api/products
    [HttpPost]
    public IActionResult Post([FromBody] string newProduct)
    {
        if (string.IsNullOrEmpty(newProduct))
            return BadRequest("\xDCr\xFCn ad\u0131 bo\u015F olamaz.");

        Products.Add(newProduct);
        return StatusCode(210, $"{newProduct} ba\u015Far\u0131yla eklendi.");
    }
}
\`\`\``,quiz:[{q:"API Controller s\u0131n\u0131flar\u0131nda HTTP GET isteklerini kar\u015F\u0131lamak i\xE7in hangi attribute kullan\u0131l\u0131r?",options:["[HttpPost]","[HttpGet]","[HttpPut]","[HttpDelete]"],answer:1,exp:"[HttpGet] attribute'u, ilgili metodun HTTP GET isteklerine yan\u0131t verece\u011Fini belirtir."},{q:"ASP.NET Core'da MVC desenindeki 'V' harfi neyi temsil eder?",options:["Model","View","Controller","Velocity"],answer:1,exp:"View, kullan\u0131c\u0131ya g\xF6sterilen aray\xFCz (HTML/CSS) katman\u0131n\u0131 temsil eder."},{q:"Bir s\u0131n\u0131f\u0131n API denetleyicisi oldu\u011Funu ve otomatik model do\u011Frulama gibi \xF6zellikleri etkinle\u015Ftirdi\u011Fini belirtmek i\xE7in hangi attribute kullan\u0131l\u0131r?",options:["[Controller]","[ApiController]","[Route]","[WebAPI]"],answer:1,exp:"[ApiController] attribute'u API denetleyicileri i\xE7in model do\u011Frulama, HTTP kaynak e\u015Fleme gibi \xF6zellikleri otomatikle\u015Ftirir."}]},{id:"net-3",title:"Ders 3: Ba\u011F\u0131ml\u0131l\u0131k Enjeksiyonu (Dependency Injection)",intro:`### Ba\u011F\u0131ml\u0131l\u0131k Enjeksiyonu Nedir?
Dependency Injection (DI), s\u0131n\u0131flar\u0131n birbirine olan ba\u011F\u0131ml\u0131l\u0131klar\u0131n\u0131 gev\u015Fetmek (loose coupling) i\xE7in kullan\u0131lan bir tasar\u0131m desenidir. ASP.NET Core, yerle\u015Fik bir DI konteynerine sahiptir.

### Bu Derste Ne \xD6\u011Frenece\u011Fiz?
* DI prensibini ve faydalar\u0131n\u0131
* Transient, Scoped ve Singleton servis \xF6m\xFCrlerini
* Servisleri IoC Container'a kaydetmeyi ve enjekte etmeyi`,content:`### Servis \xD6m\xFCrleri (Service Lifetimes):
ASP.NET Core'da servislerin \xF6mr\xFC 3 farkl\u0131 \u015Fekilde tan\u0131mlanabilir:

1. **Transient (Ge\xE7ici):** Servis her istendi\u011Finde (her enjeksiyonda) yeni bir \xF6rnek (instance) olu\u015Fturulur. K\u0131sa \xF6m\xFCrl\xFC, stateless servisler i\xE7in idealdir.
2. **Scoped (\u0130stek Bazl\u0131):** Her HTTP iste\u011Fi (request) i\xE7in tek bir \xF6rnek olu\u015Fturulur. \u0130stek boyunca ayn\u0131 nesne kullan\u0131l\u0131r, istek bitti\u011Finde nesne yok edilir. Veritaban\u0131 ba\u011Flant\u0131lar\u0131 (DbContext) varsay\u0131lan olarak Scoped't\u0131r.
3. **Singleton (Tekil):** Uygulama \xF6mr\xFC boyunca sadece bir kez \xF6rnek olu\u015Fturulur ve t\xFCm istekler ayn\u0131 \xF6rne\u011Fi payla\u015F\u0131r. Caching servisleri gibi durum koruyan (stateful) yap\u0131lar i\xE7in uygundur.

### Program.cs \u0130\xE7inde Servis Kayd\u0131:
\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);

// Servislerin IoC konteynerine kaydedilmesi:
builder.Services.AddTransient<IEmailService, EmailService>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddSingleton<ICacheService, CacheService>();
\`\`\`

### Constructor Injection ile Enjeksiyon:
\`\`\`csharp
public class ProductService
{
    private readonly IProductRepository _repository;

    // Ba\u011F\u0131ml\u0131l\u0131\u011F\u0131n constructor \xFCzerinden enjekte edilmesi
    public ProductService(IProductRepository repository)
    {
        _repository = repository;
    }
}
\`\`\``,quiz:[{q:"Her HTTP iste\u011Finde (request) yeni bir \xF6rne\u011Fi olu\u015Fturulan ve istek sonland\u0131\u011F\u0131nda yok edilen servis \xF6mr\xFC hangisidir?",options:["Transient","Scoped","Singleton","Static"],answer:1,exp:"Scoped servisler HTTP istek d\xF6ng\xFCs\xFC boyunca bir kez olu\u015Fturulur ve o istek alt\u0131ndaki t\xFCm bile\u015Fenlerce payla\u015F\u0131l\u0131r."},{q:"Uygulama \xE7al\u0131\u015Fmaya ba\u015Flad\u0131ktan sonra sadece tek bir \xF6rne\u011Fi olu\u015Fturulan ve t\xFCm uygulama boyunca payla\u015F\u0131lan servis \xF6mr\xFC hangisidir?",options:["Transient","Scoped","Singleton","Temporary"],answer:2,exp:"Singleton servislerin tek bir \xF6rne\u011Fi (instance) t\xFCm uygulama boyunca payla\u015F\u0131l\u0131r."},{q:"Her talep edildi\u011Finde (her enjekte edildi\u011Finde) her zaman yeni bir \xF6rnek olu\u015Fturan servis \xF6mr\xFC hangisidir?",options:["Transient","Scoped","Singleton","Constant"],answer:0,exp:"Transient servisler her enjeksiyonda yeni bir instance olu\u015Fturur; durum (state) saklamazlar."}]},{id:"net-4",title:"Ders 4: Middleware ve Pipeline Mimarisi",intro:`### Middleware Nedir?
Middleware (Ara Yaz\u0131l\u0131m), HTTP istek ve yan\u0131t hatt\u0131na (pipeline) entegre edilen, gelen istekleri i\u015Fleyen veya giden yan\u0131tlar\u0131 de\u011Fi\u015Ftiren kod bile\u015Fenleridir.

### Bu Derste Ne \xD6\u011Frenece\u011Fiz?
* HTTP istek ve yan\u0131t ak\u0131\u015F\u0131n\u0131 (Request/Response Pipeline)
* Middleware yap\u0131s\u0131n\u0131 ve s\u0131ralamas\u0131n\u0131
* \xD6zel (custom) middleware yazmay\u0131`,content:`### Pipeline ve Middleware \xC7al\u0131\u015Fma Mant\u0131\u011F\u0131:
Gelen her HTTP iste\u011Fi, s\u0131rayla middleware bile\u015Fenlerinden ge\xE7er. Her middleware iste\u011Fi i\u015Fleyebilir, de\u011Fi\u015Ftirebilir ve bir sonraki middleware'e aktarabilir (\`next()\`). Ya da iste\u011Fi sonland\u0131r\u0131p geri d\xF6nd\xFCrebilir (short-circuit).

### Program.cs \u0130\xE7indeki Standart Pipeline S\u0131ralamas\u0131:
\`\`\`csharp
var app = builder.Build();

// Middleware bile\u015Fenleri s\u0131rayla eklenir:
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();

// En son controller e\u015Fle\u015Ftirmesi yap\u0131l\u0131r
app.MapControllers();

app.Run();
\`\`\`

### \xD6zel Middleware Tan\u0131mlama (Inline):
\`\`\`csharp
app.Use(async (context, next) =>
{
    // \u0130stek gelirken yap\u0131lacak i\u015Flemler (Request)
    Console.WriteLine($"Gelen \u0130stek Yolu: {context.Request.Path}");

    await next.Invoke(); // Bir sonraki middleware'e ge\xE7

    // Yan\u0131t d\xF6nerken yap\u0131lacak i\u015Flemler (Response)
    Console.WriteLine($"Giden Yan\u0131t Durumu: {context.Response.StatusCode}");
});
\`\`\``,quiz:[{q:"HTTP istek hatt\u0131nda (pipeline) i\u015Flemleri s\u0131rayla y\xFCr\xFCten ve araya giren kod bile\u015Fenlerine ne ad verilir?",options:["Controller","Middleware","Service","Helper"],answer:1,exp:"Middleware, istek/yan\u0131t hatt\u0131ndaki her bir ara katman kod bile\u015Fenidir."},{q:"HTTP pipeline'\u0131n\u0131 sonland\u0131ran (kendisinden sonraki middleware'i \xE7a\u011F\u0131rmayan) metot hangisidir?",options:["Use","Run","Map","Next"],answer:1,exp:"Run metodu pipeline'\u0131 sonland\u0131r\u0131r ve genellikle terminal middleware olarak adland\u0131r\u0131l\u0131r."},{q:"Belirli bir URL yoluna g\xF6re pipeline'\u0131 dalland\u0131rmak (route etmek) i\xE7in hangi metot kullan\u0131l\u0131r?",options:["Use","Run","Map","Next"],answer:2,exp:"Map metodu, belirtilen path e\u015Fle\u015Fti\u011Finde pipeline'\u0131 ayr\u0131 bir dala y\xF6nlendirir."}]},{id:"net-5",title:"Ders 5: Yap\u0131land\u0131rma ve Ortam Y\xF6netimi",intro:`### Yap\u0131land\u0131rma Nedir?
Uygulamalar\u0131m\u0131z\u0131n \xE7al\u0131\u015Fmas\u0131 i\xE7in gereken veritaban\u0131 ba\u011Flant\u0131 adresleri, API anahtarlar\u0131 veya \xE7al\u0131\u015Fma ortam\u0131 (Development/Production) bilgileri kod i\xE7ine g\xF6m\xFClmek yerine yap\u0131land\u0131rma dosyalar\u0131nda tutulur.

### Bu Derste Ne \xD6\u011Frenece\u011Fiz?
* appsettings.json dosyas\u0131 ve hiyerar\u015Fik yap\u0131land\u0131rma verilerini okumay\u0131
* \xC7al\u0131\u015Fma ortamlar\u0131n\u0131 (Environments) y\xF6netmeyi
* G\xFCvenli veri saklama (User Secrets) y\xF6ntemlerini`,content:`### appsettings.json ve IConfiguration:
ASP.NET Core projelerinde varsay\u0131lan ayarlar \`appsettings.json\` dosyas\u0131nda saklan\u0131r. Bu de\u011Ferleri okumak i\xE7in \`IConfiguration\` servisi kullan\u0131l\u0131r.

### \xD6rnek appsettings.json:
\`\`\`json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information"
    }
  },
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=YtkDb;User Id=sa;Password=secret;"
  }
}
\`\`\`

### C# \u0130\xE7inden De\u011Fer Okuma:
\`\`\`csharp
public class HomeController : ControllerBase
{
    private readonly IConfiguration _config;

    public HomeController(IConfiguration config)
    {
        _config = config;
    }

    [HttpGet("conn")]
    public IActionResult GetConn()
    {
        string connStr = _config.GetConnectionString("DefaultConnection");
        return Ok(connStr);
    }
}
\`\`\`

### Ortam Y\xF6netimi (Environment Control):
ASP.NET Core, \`ASPNETCORE_ENVIRONMENT\` ortam de\u011Fi\u015Fkenini okuyarak uygulaman\u0131n hangi ortamda \xE7al\u0131\u015Ft\u0131\u011F\u0131n\u0131 belirler:
* \`Development\` (Geli\u015Ftirme)
* \`Staging\` (Test/Ge\xE7i\u015F)
* \`Production\` (Canl\u0131 Ortam)

\`\`\`csharp
if (builder.Environment.IsDevelopment())
{
    // Sadece geli\u015Ftirme ortam\u0131nda \xE7al\u0131\u015Fan kodlar (\xD6rn: Hata detay sayfas\u0131)
    Console.WriteLine("Geli\u015Ftirici modunday\u0131z.");
}
\`\`\``,quiz:[{q:"ASP.NET Core projelerinde varsay\u0131lan yap\u0131land\u0131rma (configuration) verileri hangi dosyada saklan\u0131r?",options:["web.config","appsettings.json","package.json","settings.xml"],answer:1,exp:"appsettings.json dosyas\u0131, ASP.NET Core uygulamalar\u0131ndaki varsay\u0131lan yap\u0131land\u0131rma sa\u011Flay\u0131c\u0131s\u0131d\u0131r."},{q:"Geli\u015Ftirme ortam\u0131nda (Development) olup olmad\u0131\u011F\u0131m\u0131z\u0131 kontrol etmek i\xE7in kullan\u0131lan metot hangisidir?",options:["IsDevelopment()","IsProduction()","IsStaging()","IsLocal()"],answer:0,exp:"builder.Environment.IsDevelopment() metodu uygulaman\u0131n geli\u015Ftirme ortam\u0131nda olup olmad\u0131\u011F\u0131n\u0131 kontrol eder."},{q:"Yerel geli\u015Ftirme ortam\u0131nda \u015Fifre ve ba\u011Flant\u0131 c\xFCmleleri gibi hassas verileri kod d\u0131\u015F\u0131nda g\xFCvenli saklamak i\xE7in kullan\u0131lan ara\xE7 hangisidir?",options:["AppSettings","Secret Manager (User Secrets)","WebConfig","GitCrypt"],answer:1,exp:"User Secrets (Secret Manager), geli\u015Ftirme s\u0131ras\u0131nda hassas verilerin proje dizini d\u0131\u015F\u0131nda saklanmas\u0131n\u0131 sa\u011Flar."}]}]}};})();
