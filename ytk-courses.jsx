/* ===========================================================================
   YTK Academy — Genişletilmiş Müfredat v2
   C# 12 Ders (intro + quiz) + SQL 10 Ders
   =========================================================================== */

window.YTK_COURSES = {
  csharp: {
    title: "C# Programlama Temelleri",
    desc: ".NET ekosisteminde C# temelleri: sözdizimi, OOP, LINQ, async/await ve Entity Framework Core.",
    icon: "💻",
    color: "#569cd6",
    lessons: [
      {
        id: "cs-1",
        title: "Ders 1: C# Nedir ve Nasıl Çalışır?",
        intro: `### Neden C#?
C# (C-Sharp), Microsoft tarafından 2000 yılında .NET platformu ile birlikte tanıtılan modern, nesne yönelimli bir programlama dilidir.

### Türkiye'de Nerede Kullanılır?
Türkiye'deki büyük bankaların (Garanti, İş Bankası, Akbank), e-ticaret devlerinin (Trendyol, Hepsiburada) ve devlet kurumlarının backend sistemlerinin büyük çoğunluğu C# ve .NET üzerine kuruludur. İş ilanlarındaki "Senior Backend Developer" pozisyonlarının **%60-70'i** C# bilgisi aramaktadır.

### Bu Derste Ne Öğreneceğiz?
* C# nasıl derlenir ve çalışır (MSIL → JIT → Makine Kodu)
* İlk C# programını yazacağız
* .NET ekosistemini tanıyacağız`,
        content: `### C# Çalışma Prensibi:
Yazdığın C# kodu → **MSIL** (Ara Dil) → **CLR/JIT Compiler** → İşlemci Kodu

Bu sayede aynı kod Windows, Linux ve macOS'ta çalışır.

### İlk C# Programı:
\`\`\`csharp
// .NET 6+ Modern Sözdizimi (top-level statements)
Console.WriteLine("Merhaba, YTK Academy!");
Console.WriteLine($"Bugünün tarihi: {DateTime.Now:dd.MM.yyyy}");

// Klasik yapı (eski .NET Framework)
namespace YtkAcademy
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Merhaba, Dünya!");
            Console.ReadLine(); // Konsolu açık tutar
        }
    }
}
\`\`\`

### Temel Özellikler:
* **Nesne Yönelimli (OOP):** Sınıf, nesne, kalıtım, çok biçimlilik
* **Tip Güvenli:** Derleme zamanında tip hataları yakalanır
* **Cross-Platform:** Windows, Linux, macOS desteği
* **Yüksek Performans:** Modern .NET 8, Node.js ve Python'ı benchmark'larda geçiyor`,
        quiz: [
          { q: "C# hangi şirket tarafından geliştirilmiştir?", options: ["Apple", "Microsoft", "Google", "Oracle"], answer: 1, exp: "Microsoft, C# ve .NET platformunu 2000 yılında tanıttı." },
          { q: "C# kodu derlendikten sonra hangi ara dile çevrilir?", options: ["Bytecode", "MSIL", "Assembly", "WebAssembly"], answer: 1, exp: "MSIL (Microsoft Intermediate Language), CLR tarafından çalışma zamanında makine koduna dönüştürülür." },
          { q: "CLR içindeki bileşen hangisi MSIL'i makine koduna çevirir?", options: ["Compiler", "Linker", "JIT (Just-In-Time) Compiler", "Interpreter"], answer: 2, exp: "JIT Compiler, çalışma zamanında MSIL kodunu hedef işlemcinin makine koduna çevirir." }
        ]
      },
      {
        id: "cs-2",
        title: "Ders 2: Değişkenler ve Veri Tipleri",
        intro: `### Değişkenler Nedir?
Bir program çalışırken bellekte (RAM) geçici veriler saklar. Değişkenler bu verilere isimle erişmemizi sağlar. Kullanıcının adından bir ürünün fiyatına, stok adedinden sipariş tutarına kadar her şey değişkenlerde tutulur.

### Gerçek Dünya Örneği:
Bir e-ticaret uygulaması düşün: \`kullaniciAdi\`, \`sepetToplami\`, \`urunFiyati\`, \`stokMevcut\` — bunların hepsi değişkenlerdir. Doğru veri tipini seçmek hem bellek kullanımını hem de hesaplama hassasiyetini doğrudan etkiler.

> **Önemli:** Finansal hesaplamalarda \`double\` yerine \`decimal\` kullanın! double'ın kayan nokta hatası, bankacılık sistemlerinde ciddi sorunlara yol açabilir.`,
        content: `### C# Temel Veri Tipleri:
* **\`int\`** → 32-bit tam sayı: \`int yas = 25;\`
* **\`long\`** → 64-bit büyük tam sayı: \`long nufus = 85_000_000;\`
* **\`double\`** → Ondalıklı: \`double pi = 3.14159;\`
* **\`decimal\`** → Finansal hesaplama: \`decimal fiyat = 999.99m;\`
* **\`string\`** → Metin: \`string isim = "Yusuf";\`
* **\`bool\`** → true/false: \`bool aktifMi = true;\`
* **\`char\`** → Tek karakter: \`char cinsiyet = 'E';\`

### var ve const:
\`\`\`csharp
// var: Tip derleme zamanında otomatik belirlenir
var yas = 28;           // int olarak derlenir
var isim = "Ahmet";     // string olarak derlenir
var fiyat = 99.99m;     // decimal olarak derlenir

// const: Değiştirilemez sabit
const double PI = 3.14159265358979;
const string SITE_URL = "https://ytkacademy.com.tr";
\`\`\`

### String İşlemleri:
\`\`\`csharp
string ad = "Yusuf";
string soyad = "Yetkin";

// String interpolation — önerilen yöntem
string mesaj = $"Merhaba, {ad} {soyad}! Bugün: {DateTime.Now:dd/MM/yyyy}";

// Verbatim string (\ karakteri sorun yaratmaz)
string yol = @"C:\Users\Yusuf\Desktop\proje";

// Sık kullanılan metodlar
Console.WriteLine(ad.ToUpper());          // YUSUF
Console.WriteLine(ad.Length);             // 5
Console.WriteLine("  YTK  ".Trim());     // YTK
Console.WriteLine(ad.Contains("usu"));   // True
Console.WriteLine(ad.Replace("Y","J"));  // Jusuf
\`\`\`

### Güvenli Tip Dönüşümü:
\`\`\`csharp
// TryParse: Hata fırlatmaz, bool döndürür
if (int.TryParse("123", out int sayi))
    Console.WriteLine($"Dönüştürüldü: {sayi}");
else
    Console.WriteLine("Geçersiz sayı formatı!");

// Convert sınıfı
int deger = Convert.ToInt32("42");
bool aktif = Convert.ToBoolean("true");
\`\`\``,
        quiz: [
          { q: "Finansal hesaplamalarda (banka, e-ticaret) hangi veri tipi kullanılmalıdır?", options: ["double", "float", "decimal", "int"], answer: 2, exp: "decimal, kayan nokta hatası olmayan yüksek hassasiyetli ondalıklı tiptir. Finansal işlemler için zorunludur." },
          { q: "int.TryParse('abc', out int x) ifadesi ne döndürür?", options: ["exception fırlatır", "0 döndürür", "false döndürür", "null döndürür"], answer: 2, exp: "TryParse, dönüşüm başarısız olduğunda false döndürür ve out parametresine 0 yazar. Hata fırlatmaz." },
          { q: "var anahtar kelimesiyle tanımlanan değişkenin tipi ne zaman belirlenir?", options: ["Çalışma zamanında", "Derleme zamanında", "İlk değer atamasında", "Kullanıldığı anda"], answer: 1, exp: "var ile tanımlanan değişkenin tipi derleme zamanında sabitlenir. Runtime'da dinamik değildir." }
        ]
      },
      {
        id: "cs-3",
        title: "Ders 3: Karar Yapıları (if-else & switch)",
        intro: `### Karar Yapıları Neden Gerekli?
Bir yazılım, her zaman aynı şeyi yapmaz. "Kullanıcı giriş yaptı mı?", "Bakiye yeterli mi?", "Stok var mı?" gibi sorular kod içinde karar yapılarıyla yanıtlanır. Modern bir backend API'de yüzlerce karar noktası bulunur.

### Gerçek Dünya Örneği:
Bir ödeme sisteminde:
* Bakiye >= tutar → Ödemeyi onayla
* Kart limiti aşıldı → Reddet ve log yaz
* Şüpheli işlem → 3D Secure'a yönlendir

Her bu senaryonun kodu if-else veya switch yapılarıyla yazılır.`,
        content: `### if-else if-else:
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

### switch Expression — C# 8+ Modern Sözdizimi:
\`\`\`csharp
// Çok daha kısa ve okunabilir
string durum = gun switch
{
    "Pazartesi" or "Salı" or "Çarşamba"
    or "Perşembe" or "Cuma" => "İş günü",
    "Cumartesi" or "Pazar" => "Hafta sonu",
    _ => "Bilinmiyor" // default
};
\`\`\`

### Ternary ve Null Operatörler:
\`\`\`csharp
// Ternary: koşul ? doğruysa : yanlışsa
int yas = 20;
string etiket = (yas >= 18) ? "Yetişkin" : "Çocuk";

// Null coalescing: ?? — null ise alternatifi kullan
string? isim = null;
string gosterilecek = isim ?? "Anonim Kullanıcı";

// Null conditional: ?. — null ise işlemi atla
string? uzunluk = isim?.ToUpper(); // hata fırlatmaz, null döner
\`\`\``,
        quiz: [
          { q: "switch-case'de bir case bloğundan çıkmak için hangi keyword kullanılır?", options: ["exit", "stop", "break", "return"], answer: 2, exp: "break, switch-case bloğundan çıkarak bir sonraki case'in çalışmasını engeller." },
          { q: "string? isim = null; → isim ?? 'Anonim' ifadesinin sonucu nedir?", options: ["null", "isim", "'Anonim'", "Hata fırlatır"], answer: 2, exp: "?? operatörü sol taraf null ise sağ taraftaki değeri döndürür." },
          { q: "C# 8+ switch expression'da default durumu hangi sembolle ifade edilir?", options: ["default:", "else", "_ =>", "*"], answer: 2, exp: "_ (discard pattern), switch expression'da tüm eşleşmeyen durumları yakalamak için kullanılır." }
        ]
      },
      {
        id: "cs-4",
        title: "Ders 4: Döngüler (for, while, foreach)",
        intro: `### Döngüler Neden Gerekli?
100 ürünü ekrana yazdırmak için 100 satır kod yazmak yerine döngüyle 3 satır yeterli. Döngüler tekrarlı işlemleri otomatize eder.

### Gerçek Dünya Kullanımı:
* **E-ticaret:** Sepetteki tüm ürünlerin toplamını hesapla
* **Banka:** Tüm işlem kayıtlarını tara, şüphelileri işaretle
* **API:** Gelen veri listesini işle, veritabanına kaydet
* **Rapor:** 1000 müşteriye e-posta gönder

> **Hangisini seçeyim?** Kaç kez döneceği belli → \`for\`. Koleksiyon üzerinde gez → \`foreach\`. Koşul gerçekleşene dek → \`while\`.`,
        content: `### for Döngüsü — Sayaç tabanlı:
\`\`\`csharp
// 1'den 10'a çarpım tablosu
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine($"7 x {i} = {7 * i}");
}

// Geriye doğru sayma
for (int i = 10; i >= 1; i--)
    Console.Write(i + " ");
// Çıktı: 10 9 8 7 6 5 4 3 2 1
\`\`\`

### while Döngüsü — Koşul tabanlı:
\`\`\`csharp
int deneme = 0;
const string dogruSifre = "ytk2024";

while (deneme < 3)
{
    Console.Write("Şifreyi girin: ");
    string girilen = Console.ReadLine() ?? "";

    if (girilen == dogruSifre)
    {
        Console.WriteLine("✓ Giriş başarılı!");
        break; // Döngüden çık
    }
    deneme++;
    Console.WriteLine($"✗ Hatalı! Kalan hak: {3 - deneme}");
}

if (deneme >= 3)
    Console.WriteLine("Hesap kilitlendi!");
\`\`\`

### foreach Döngüsü — Koleksiyonlar için:
\`\`\`csharp
string[] ogrenciler = { "Ahmet", "Mehmet", "Ayşe", "Fatma" };

foreach (string ogrenci in ogrenciler)
{
    Console.WriteLine($"  • {ogrenci}");
}

// Sepet toplamı örneği
decimal[] fiyatlar = { 299.99m, 149.50m, 79.90m, 459.00m };
decimal toplam = 0;
foreach (decimal fiyat in fiyatlar)
    toplam += fiyat;

Console.WriteLine($"Sepet Toplamı: {toplam:C}");
\`\`\`

### break ve continue:
\`\`\`csharp
// continue: Bu adımı atla, devam et
// break: Döngüden tamamen çık
for (int i = 1; i <= 10; i++)
{
    if (i % 2 == 0) continue; // Çiftleri atla
    if (i == 9) break;        // 9'da dur
    Console.Write(i + " ");
}
// Çıktı: 1 3 5 7
\`\`\``,
        quiz: [
          { q: "Bir koleksiyon üzerindeki tüm elemanları gezmek için en uygun döngü hangisidir?", options: ["for", "while", "do-while", "foreach"], answer: 3, exp: "foreach, IEnumerable arayüzünü uygulayan herhangi bir koleksiyonu (List, Array, Dictionary) gezmek için tasarlanmıştır." },
          { q: "continue keyword'ü döngüde ne yapar?", options: ["Döngüyü sonlandırır", "Mevcut adımı atlayıp bir sonrakine geçer", "Döngüyü başa sarar", "Programı sonlandırır"], answer: 1, exp: "continue, gerideki kodu atlayarak döngünün bir sonraki iterasyonuna geçer." },
          { q: "for (int i=0; i<5; i++) döngüsü kaç kez çalışır?", options: ["4", "5", "6", "0"], answer: 1, exp: "i=0,1,2,3,4 → 5 iterasyon. i=5 olduğunda i<5 koşulu false olur." }
        ]
      },
      {
        id: "cs-5",
        title: "Ders 5: Metotlar (Methods)",
        intro: `### Metotlar Neden Gerekli?
"Aynı kodu defalarca yazmak" — yazılım dünyasının en büyük günahlarından biridir (DRY: Don't Repeat Yourself). Metotlar kodu tekrar kullanılabilir parçalara böler.

### Gerçek Dünya Kullanımı:
\`KDVHesapla()\`, \`SifreDogrula()\`, \`EmailGonder()\`, \`RaporOlustur()\` — bunlar birer metot. Büyük bir projedeki binlerce metot; her biri tek bir sorumluluğu yerine getirir (Single Responsibility Principle).

> İyi yazılmış bir metot, adını okuyunca ne yaptığını anlatır. \`x()\` değil, \`SepetToplaminıHesapla()\` yazın.`,
        content: `### Temel Metot Sözdizimi:
\`\`\`csharp
// [erişim] [dönüş tipi] MetotAdı([parametreler])
public static int Topla(int a, int b)
{
    return a + b;
}

// Expression body — tek satır (C# 6+)
public static int Carp(int a, int b) => a * b;
\`\`\`

### Parametre Çeşitleri:
\`\`\`csharp
// Varsayılan (default) parametre
static double KDVHesapla(double fiyat, double oran = 0.20)
    => fiyat * (1 + oran);

KDVHesapla(100);          // 120 (varsayılan %20)
KDVHesapla(100, 0.08);    // 108 (%8 KDV)
KDVHesapla(fiyat: 100, oran: 0.10); // İsimli parametre

// params — Değişken sayıda parametre
static int Topla(params int[] sayilar)
{
    int toplam = 0;
    foreach (int s in sayilar) toplam += s;
    return toplam;
}

Topla(1, 2, 3);       // 6
Topla(10, 20, 30, 40); // 100
\`\`\`

### out Parametresi — Birden Fazla Değer Döndür:
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

### Method Overloading (Aşırı Yükleme):
\`\`\`csharp
// Aynı isim, farklı parametre imzası
static string Formatla(int sayi)    => sayi.ToString("N0");
static string Formatla(double sayi) => sayi.ToString("F2");
static string Formatla(decimal para) => para.ToString("C");

Console.WriteLine(Formatla(1000000));  // 1.000.000
Console.WriteLine(Formatla(3.14159));  // 3,14
Console.WriteLine(Formatla(999.99m)); // ₺999,99
\`\`\``,
        quiz: [
          { q: "void dönüş tipi ne anlama gelir?", options: ["Metot hata fırlatabilir", "Metot geriye bir değer döndürmez", "Metot asenkrondur", "Metot sadece static olabilir"], answer: 1, exp: "void, metodun geriye herhangi bir değer döndürmediğini belirtir. Yan etkiler için kullanılır (log, ekrana yaz, kaydet)." },
          { q: "Aynı isimde, farklı parametreli birden fazla metot tanımlamak ne olarak adlandırılır?", options: ["Method Overriding", "Method Hiding", "Method Overloading", "Method Chaining"], answer: 2, exp: "Method Overloading (Aşırı Yükleme), derleyici parametre tipine göre doğru metodu seçer." },
          { q: "static void Yaz(params string[] kelimeler) metoduna kaç argüman gönderilebilir?", options: ["Sadece 1", "Sadece 3", "0 veya daha fazla", "Maksimum 5"], answer: 2, exp: "params ile tanımlanan parametre sıfır veya daha fazla argüman alabilir." }
        ]
      },
      {
        id: "cs-6",
        title: "Ders 6: Sınıflar ve OOP",
        intro: `### OOP Neden Gerekli?
Gerçek dünyadaki "Müşteri", "Sipariş", "Ürün", "Banka Hesabı" gibi kavramları koda yansıtmak için nesne yönelimli programlama kullanılır. Sınıflar bu kavramların şablonudur.

### Gerçek Dünya Örneği:
Bir e-ticaret sisteminde \`Urun\` sınıfı; ürünün adını, fiyatını, stoğunu tutar ve satış yapma, stok güncelleme gibi işlemleri yönetir. Bu sınıftan binlerce "Urun nesnesi" oluşturulabilir.

### 4 Temel OOP Prensibi:
* **Encapsulation:** Veriyi dışarıdan koruma (private field + public property)
* **Inheritance:** Miras alma (BankaHesabi → VadeliHesap)
* **Polymorphism:** Aynı metot, farklı davranış (override)
* **Abstraction:** Karmaşıklığı gizle, sade arayüz sun`,
        content: `### Sınıf Tasarımı — Banka Hesabı Örneği:
\`\`\`csharp
public class BankaHesabi
{
    // Private field — dışarıdan doğrudan erişilemez
    private decimal _bakiye;
    private readonly List<string> _islemGecmisi = new();

    // Properties — kontrollü erişim
    public string HesapNo { get; private set; }
    public string SahibiAdi { get; set; }
    public decimal Bakiye => _bakiye; // Sadece okunabilir

    // Constructor — nesne oluşturulduğunda çalışır
    public BankaHesabi(string hesapNo, string sahibi, decimal baslangic = 0)
    {
        HesapNo = hesapNo;
        SahibiAdi = sahibi;
        _bakiye = baslangic;
    }

    // Para yatırma metodu
    public void ParaYatir(decimal tutar)
    {
        if (tutar <= 0) throw new ArgumentException("Tutar pozitif olmalı!");
        _bakiye += tutar;
        _islemGecmisi.Add($"+{tutar:C} yatırıldı → Bakiye: {_bakiye:C}");
    }

    // Para çekme — başarı durumunu bool olarak döndürür
    public bool ParaCek(decimal tutar)
    {
        if (tutar <= 0 || tutar > _bakiye) return false;
        _bakiye -= tutar;
        _islemGecmisi.Add($"-{tutar:C} çekildi → Bakiye: {_bakiye:C}");
        return true;
    }

    public void IslemleriGoster()
    {
        Console.WriteLine($"=== {HesapNo} İşlem Geçmişi ===");
        foreach (var islem in _islemGecmisi)
            Console.WriteLine("  " + islem);
    }
}
\`\`\`

### Nesne Oluşturma ve Kullanım:
\`\`\`csharp
// new ile nesne oluştur
var hesap = new BankaHesabi("TR33-0001", "Yusuf Yetkin", 5000m);

hesap.ParaYatir(2500m);
hesap.ParaCek(1000m);
bool sonuc = hesap.ParaCek(99999m); // false döner (yetersiz bakiye)

Console.WriteLine($"Bakiye: {hesap.Bakiye:C}");
hesap.IslemleriGoster();
\`\`\``,
        quiz: [
          { q: "OOP'de Encapsulation (Kapsülleme) ne anlama gelir?", options: ["Sınıfı başka bir sınıftan türetmek", "Veriyi dış erişimden koruyup kontrollü erişim sağlamak", "Aynı metodun farklı davranış sergilemesi", "Soyut sınıf tanımlamak"], answer: 1, exp: "Encapsulation: private field + public property/metot ile veriyi dışarıdan koruma prensibidir." },
          { q: "Constructor (yapıcı metot) ne zaman çağrılır?", options: ["Nesne silindiğinde", "Metot her çağrıldığında", "Nesne oluşturulduğunda (new)", "Program başladığında"], answer: 2, exp: "Constructor, 'new' keyword'ü ile nesne oluşturulduğu anda otomatik çağrılır." },
          { q: "public decimal Bakiye => _bakiye; ifadesi ne anlama gelir?", options: ["_bakiye değişkenine public erişim", "Bakiye'ye hem okuma hem yazma izni var", "Bakiye sadece okunabilir (getter-only property)", "Bakiye statik bir değişkendir"], answer: 2, exp: "=> ile tanımlanan expression-body property sadece get içerir, set yoktur. Dışarıdan değiştirilemez." }
        ]
      },
      {
        id: "cs-7",
        title: "Ders 7: Koleksiyonlar (List, Dictionary, Array)",
        intro: `### Koleksiyonlar Neden Gerekli?
Tek bir veri için değişken yeterlidir. Ama "tüm siparişler", "bütün kullanıcılar", "aktif ürünler" gibi veri setleri için koleksiyon kullanılır.

### Gerçek Dünya Kullanımı:
* **API Response:** \`List<Urun>\` döndür
* **Cache:** \`Dictionary<string, object>\` ile anahtar-değer önbellekleme
* **Benzersiz veri:** \`HashSet<int>\` ile duplicate'siz ID listesi
* **Sıralı veri:** \`Queue<SiparisTalebi>\` ile işlem kuyruğu

> **Ne zaman hangisi?** Sıralı liste → \`List\`. Hızlı arama → \`Dictionary\`. Sabit boyut → \`Array\`. Benzersiz → \`HashSet\`.`,
        content: `### Array — Sabit Boyutlu Dizi:
\`\`\`csharp
// Tanımlama
int[] notlar = { 85, 92, 78, 95, 88 };

// LINQ ile istatistik
double ortalama = notlar.Average();  // 87.6
int en_yuksek = notlar.Max();        // 95
int en_dusuk = notlar.Min();         // 78

// 2D dizi (matris)
int[,] matris = { { 1, 2, 3 }, { 4, 5, 6 } };
Console.WriteLine(matris[1, 2]); // 6
\`\`\`

### List<T> — Dinamik Liste:
\`\`\`csharp
var urunler = new List<string> { "Laptop", "Mouse", "Klavye" };

// Ekleme
urunler.Add("Monitör");
urunler.Insert(0, "Kulaklık"); // İndekse ekle

// Silme
urunler.Remove("Mouse");
urunler.RemoveAt(0); // İndekse göre sil

// Arama
bool varMi = urunler.Contains("Laptop");     // true
int indeks = urunler.IndexOf("Klavye");      // 0 (şu an)

// Sıralama
urunler.Sort();
Console.WriteLine(string.Join(", ", urunler));
Console.WriteLine($"Toplam: {urunler.Count} ürün");
\`\`\`

### Dictionary<TKey, TValue> — Anahtar-Değer:
\`\`\`csharp
// Kullanıcı puanları
var puan = new Dictionary<string, int>
{
    ["Ahmet"] = 850,
    ["Mehmet"] = 720,
    ["Ayşe"]  = 950
};

// Okuma
int ahmetPuan = puan["Ahmet"]; // 850

// Güvenli okuma (KeyNotFoundException önle)
if (puan.TryGetValue("Ali", out int aliPuan))
    Console.WriteLine($"Ali: {aliPuan}");
else
    Console.WriteLine("Ali bulunamadı.");

// Ekleme / güncelleme
puan["Fatma"] = 880;

// Döngü
foreach (var (isim, p) in puan)
    Console.WriteLine($"{isim}: {p} puan");
\`\`\``,
        quiz: [
          { q: "List<T> ile Array arasındaki temel fark nedir?", options: ["List daha yavaştır", "List dinamik boyutlu, Array sabit boyutludur", "Array tip güvenlidir, List değildir", "List sadece string saklar"], answer: 1, exp: "Array oluşturulurken boyutu sabittir. List dinamik olarak büyüyüp küçülebilir (Add/Remove)." },
          { q: "Dictionary'de mevcut olmayan bir Key'e [] ile erişildiğinde ne olur?", options: ["null döner", "0 döner", "KeyNotFoundException fırlatır", "false döner"], answer: 2, exp: "Güvenli erişim için TryGetValue kullanılmalıdır." },
          { q: "urunler.Contains('Laptop') ifadesi ne döndürür?", options: ["int (indeks)", "string (değer)", "bool", "List<string>"], answer: 2, exp: "Contains, elemanın listede olup olmadığını bool (true/false) olarak döndürür." }
        ]
      },
      {
        id: "cs-8",
        title: "Ders 8: Kalıtım (Inheritance) ve Interface",
        intro: `### Kalıtım Neden Gerekli?
"Yazılımcı da bir Çalışandır" — bu cümle kalıtımı özetler. Ortak özellikleri tekrar yazmak yerine üst sınıftan miras alınır. Bu hem kod tekrarını önler hem de sistemin genişlemesini kolaylaştırır.

### Interface Neden Gerekli?
"Kredi kartıyla ödeme de, PayPal ile ödeme de birer ödemedir." Her ödeme yöntemi farklı çalışsa da aynı \`OdemeYap()\` metoduna sahip olmalı. Interface bu sözleşmeyi tanımlar.

### Gerçek Dünya:
* **Repository Pattern:** \`IUrunRepository\` → \`SqlUrunRepository\`, \`MongoUrunRepository\`
* **Strategy Pattern:** \`IFiyatHesaplama\` → \`IndirimliHesap\`, \`NormalHesap\`
* **Dependency Injection:** ASP.NET Core'un temeli interface'lere dayanır`,
        content: `### Kalıtım Örneği:
\`\`\`csharp
// Temel sınıf (Base Class)
public abstract class Calisan
{
    public int Id { get; set; }
    public string Ad { get; set; }
    public decimal MaasBase { get; protected set; }

    public Calisan(int id, string ad, decimal maas)
    {
        Id = id; Ad = ad; MaasBase = maas;
    }

    // abstract: Alt sınıflar MUTLAKA override eder
    public abstract decimal NetMaas();

    // virtual: Alt sınıflar isteğe bağlı override eder
    public virtual string Ozet() => $"#{Id} {Ad}";
}

// Türetilmiş sınıflar
public class Yazilimci : Calisan
{
    public string Dil { get; set; }

    public Yazilimci(int id, string ad, decimal maas, string dil)
        : base(id, ad, maas) // Üst sınıf constructor'ı çağır
    {
        Dil = dil;
    }

    public override decimal NetMaas()
        => MaasBase * 0.85m + 2000m; // Vergi sonrası + teknoloji bonusu

    public override string Ozet()
        => base.Ozet() + $" | {Dil} Developer";
}
\`\`\`

### Interface — Sözleşme Tanımlama:
\`\`\`csharp
// Interface sadece kural koyar, kod yazmaz
public interface IOdeme
{
    string OdemeYontemi { get; }
    bool OdemeYap(decimal tutar, string aciklama);
}

// Her ödeme yöntemi aynı sözleşmeyi uygular
public class KrediKarti : IOdeme
{
    public string OdemeYontemi => "Kredi Kartı";

    public bool OdemeYap(decimal tutar, string aciklama)
    {
        Console.WriteLine($"💳 {tutar:C} → {aciklama}");
        return true; // banka onayı simüle
    }
}

// Polymorphism: Hangi implementasyon olduğu önemli değil
IOdeme odeme = new KrediKarti();
odeme.OdemeYap(299.99m, "YTK Academy Mentörlük");
\`\`\``,
        quiz: [
          { q: "abstract keyword ile işaretlenen bir metot ne anlama gelir?", options: ["Metot çalışma zamanında yüklenir", "Alt sınıflar bu metodu MUTLAKA override etmek zorundadır", "Metot sadece static olabilir", "Metot private tanımlanmıştır"], answer: 1, exp: "abstract metot, temel sınıfta gövde (body) içermez. Tüm türetilmiş sınıflar onu override etmek zorundadır." },
          { q: "Interface ile Abstract Class arasındaki temel fark nedir?", options: ["Interface metod gövdesi içerebilir, Abstract Class içeremez", "Interface sadece sözleşme tanımlar (implementasyon yok), Abstract Class kısmen implemente edebilir", "Interface'den miras alınamaz", "Abstract Class'tan birden fazla miras alınabilir"], answer: 1, exp: "C# 8+'dan önce interface'de sadece imza vardı. Abstract class hem soyut hem de somut metotlar içerebilir. Bir sınıf birden fazla interface'i uygulayabilir." },
          { q: "base() keyword'ü ne için kullanılır?", options: ["Üst sınıfın static metodunu çağırmak için", "Türetilmiş sınıfta üst sınıfın constructor'ını veya üyelerini çağırmak için", "Interface metodunu çağırmak için", "Mevcut sınıfın başka constructor'ını çağırmak için"], answer: 1, exp: "base(), türetilmiş sınıfın constructor'ında üst sınıfın constructor'ını çağırmak için kullanılır." }
        ]
      },
      {
        id: "cs-9",
        title: "Ders 9: Hata Yönetimi (try-catch-finally)",
        intro: `### Hata Yönetimi Neden Kritik?
Hiçbir program hatasız çalışmaz. Kullanıcı yanlış format girebilir, ağ bağlantısı kesilebilir, disk dolabilir, veritabanı cevap vermeyebilir. Bu durumlarda programın çökmesi değil, zarif bir hata yönetimi yapması beklenir.

### Gerçek Dünya:
* Üretim ortamında yakalanmayan exception → servis çöküşü → gelir kaybı
* İyi hata yönetimi: hatayı logla, kullanıcıya uygun mesaj göster, sistemi ayakta tut
* .NET uygulamalarında **Serilog** veya **NLog** ile merkezi loglama yapılır

> **Altın Kural:** Asla boş catch bloğu bırakma! Hatayı yutmak debugging'i imkansız kılar.`,
        content: `### try-catch-finally Yapısı:
\`\`\`csharp
try
{
    Console.Write("Bölünen: ");
    int a = int.Parse(Console.ReadLine()!);

    Console.Write("Bölen: ");
    int b = int.Parse(Console.ReadLine()!);

    Console.WriteLine($"Sonuç: {a / b}");
}
catch (FormatException ex)
{
    // Sayı olmayan giriş
    Console.WriteLine($"❌ Geçersiz sayı: {ex.Message}");
}
catch (DivideByZeroException)
{
    // Sıfıra bölme
    Console.WriteLine("❌ Sıfıra bölme yapılamaz!");
}
catch (Exception ex) // Tüm diğer hatalar
{
    Console.WriteLine($"❌ Beklenmedik hata: {ex.Message}");
    // Gerçek projede: logger.Error(ex, "Bölme işlemi başarısız");
}
finally
{
    // HER DURUMDA çalışır — kaynak temizliği için ideal
    Console.WriteLine("İşlem tamamlandı. (finally bloğu)");
}
\`\`\`

### Özel Exception Sınıfı:
\`\`\`csharp
// Domain'e özgü exception tanımla
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

// Çağıran tarafta yakalanır
try { hesap.ParaCek(99999m); }
catch (YetersizBakiyeException ex)
{
    Console.WriteLine(ex.Message);
    Console.WriteLine($"Eksiği: {ex.IstenenTutar - ex.Bakiye:C}");
}
\`\`\``,
        quiz: [
          { q: "finally bloğu ne zaman çalışır?", options: ["Sadece hata olmadığında", "Sadece exception fırlatıldığında", "Her durumda — hata olsa da olmasa da", "Sadece return çağrıldığında"], answer: 2, exp: "finally bloğu, try başarılı da olsa, catch devreye girse de her zaman çalışır. Kaynak temizliği (connection close) için idealdir." },
          { q: "Boş catch bloğu (catch {}) kullanmak neden kötü bir pratiktir?", options: ["Derleme hatası verir", "Hatayı yutarak debug'ı imkansız kılar", "Performansı düşürür", "Sadece FormatException'ı yakalar"], answer: 1, exp: "Boş catch bloğu hatayı sessizce yutarak sistemde neyin yanlış gittiğini anlamayı engeller." },
          { q: "throw new ArgumentException('...') ifadesi ne yapar?", options: ["Programı sonlandırır", "Bir hata mesajı yazdırır", "ArgumentException türünde bir exception fırlatır", "catch bloğuna atlar"], answer: 2, exp: "throw, exception nesnesini oluşturup fırlatır. En yakın uygun catch bloğu tarafından yakalanır." }
        ]
      },
      {
        id: "cs-10",
        title: "Ders 10: LINQ ile Veri Sorgulama",
        intro: `### LINQ Nedir?
LINQ (Language Integrated Query), C# içinde koleksiyonları SQL benzeri sözdizimi ile sorgulamayı sağlar. Veri filtreleme, sıralama, gruplama ve dönüşüm işlemleri tek satıra sığar.

### Gerçek Dünya Kullanımı:
* "Fiyatı 1000 TL'den yüksek aktif ürünleri getir" → \`.Where().OrderBy()\`
* "Her kategorideki ürün sayısı" → \`.GroupBy().Count()\`
* "En pahalı 10 ürün" → \`.OrderByDescending().Take(10)\`
* Entity Framework Core, LINQ'yu SQL'e çevirir — veritabanı sorgularını C# ile yazarsın

> **LINQ, EF Core'un dilidir.** Bunu öğrenmek, veritabanı sorgularını C# ile yazmayı öğrenmek demektir.`,
        content: `### Temel LINQ Metodları:
\`\`\`csharp
using System.Linq;

var urunler = new List<Urun>
{
    new() { Ad = "Laptop",   Fiyat = 45000, Kategori = "Elektronik", Stok = 5  },
    new() { Ad = "Mouse",    Fiyat = 350,   Kategori = "Elektronik", Stok = 50 },
    new() { Ad = "Masa",     Fiyat = 3500,  Kategori = "Mobilya",    Stok = 8  },
    new() { Ad = "Sandalye", Fiyat = 2000,  Kategori = "Mobilya",    Stok = 12 },
    new() { Ad = "Kalem",    Fiyat = 15,    Kategori = "Kırtasiye",  Stok = 200}
};

// Where — Filtreleme
var pahalılar = urunler.Where(u => u.Fiyat > 1000).ToList();

// OrderBy / OrderByDescending — Sıralama
var ucuzdan = urunler.OrderBy(u => u.Fiyat).ToList();
var pahalidan = urunler.OrderByDescending(u => u.Fiyat).Take(3).ToList();

// Select — Projeksiyon (tip dönüşümü)
var adlar = urunler.Select(u => u.Ad).ToList();
var ozet = urunler.Select(u => new { u.Ad, u.Fiyat }).ToList();

// Tek eleman
var enPahalı = urunler.MaxBy(u => u.Fiyat);
var laptop = urunler.FirstOrDefault(u => u.Ad == "Laptop");
\`\`\`

### Aggregate Fonksiyonlar:
\`\`\`csharp
decimal toplamDeger = urunler.Sum(u => u.Fiyat * u.Stok);
double ortFiyat = urunler.Average(u => (double)u.Fiyat);
int toplam = urunler.Count(u => u.Stok > 0);
bool hepsiFiyatlı = urunler.All(u => u.Fiyat > 0);
bool biriPahalı = urunler.Any(u => u.Fiyat > 40000);
\`\`\`

### GroupBy — Gruplama:
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
    Console.WriteLine($"{g.Kategori}: {g.Adet} ürün, {g.ToplamDeger:C}");
\`\`\``,
        quiz: [
          { q: "LINQ'da Where() metodu ne yapar?", options: ["Sıralama yapar", "Belirtilen koşula göre filtreler", "Yeni bir nesne listesi oluşturur", "Gruplayarak saydırır"], answer: 1, exp: "Where(), koleksiyonu filtreler; koşulu true olanları yeni bir IEnumerable olarak döndürür." },
          { q: ".FirstOrDefault() metodu ne zaman null döndürür?", options: ["Liste boş olduğunda", "Koşula uyan eleman bulunamadığında", "Her zaman null döndürür", "A ve B şıkları"], answer: 3, exp: "FirstOrDefault, koşula uyan eleman bulunamazsa veya liste boşsa default değeri (referans tiplerde null) döndürür." },
          { q: "urunler.Count(u => u.Stok > 0) ne döndürür?", options: ["Ürün listesi", "En yüksek stok değeri", "Stoğu 0'dan büyük olan ürün sayısı", "Toplam stok adedi"], answer: 2, exp: "Count(predicate), verilen koşulu sağlayan eleman sayısını int olarak döndürür." }
        ]
      },
      {
        id: "cs-11",
        title: "Ders 11: Asenkron Programlama (async/await)",
        intro: `### Asenkron Programlama Neden Gerekli?
Bir restoran hayal et: Garson müşteriden siparişi alıp mutfaktan yemek çıkana kadar orada beklese diğer masalara gidemez. Asenkron programlama tam da budur — bir işlem beklerken diğer işler yapılabilir.

### Gerçek Dünya:
* **API çağrısı:** 200ms süren HTTP isteği sırasında thread bloke olmamalı
* **Veritabanı sorgusu:** EF Core'un tüm metodları async'tir (\`.ToListAsync()\`)
* **Dosya okuma:** Büyük dosyalar async okunur
* **Web sunucusu:** ASP.NET Core, async ile aynı anda binlerce isteği işler

> **Kural:** I/O işlemi yapıyorsan (ağ, disk, DB), async kullan. CPU işlemi yapıyorsan (hesaplama), async gerekmez.`,
        content: `### async/await Temelleri:
\`\`\`csharp
using System.Net.Http;
using System.Text.Json;

// Task<T>: Değer döndüren asenkron metot
public async Task<string> VeriGetirAsync(string url)
{
    using var client = new HttpClient();
    
    // await: İşlemi bekle ama thread'i BLOKE ETME
    string json = await client.GetStringAsync(url);
    return json;
}

// void yerine Task döndür (hata yakalanabilir olsun)
public async Task KaydetAsync(string veri)
{
    await File.WriteAllTextAsync("veri.txt", veri);
    Console.WriteLine("✓ Kaydedildi");
}
\`\`\`

### Paralel Asenkron İşlemler:
\`\`\`csharp
public async Task<(string urunler, string kullanicilar)> VeriYukleAsync()
{
    // İkisini AYNI ANDA başlat (sırayla değil!)
    Task<string> urunTask = VeriGetirAsync("/api/urunler");
    Task<string> kullaniciTask = VeriGetirAsync("/api/kullanicilar");

    // Her ikisi bitene kadar bekle
    await Task.WhenAll(urunTask, kullaniciTask);

    return (await urunTask, await kullaniciTask);
}

// Sadece birini bekle (en hızlısı yeterli)
Task<string> sonuc = await Task.WhenAny(urunTask, kullaniciTask);
\`\`\`

### CancellationToken — İptal Desteği:
\`\`\`csharp
public async Task RaporUretAsync(CancellationToken ct)
{
    for (int i = 0; i < 100; i++)
    {
        ct.ThrowIfCancellationRequested(); // İptal istendi mi?
        await Task.Delay(100, ct);         // Bekleme (iptal edilebilir)
        Console.WriteLine($"Adım {i + 1}/100 tamamlandı");
    }
}

// 5 saniye sonra otomatik iptal
using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(5));
await RaporUretAsync(cts.Token);
\`\`\``,
        quiz: [
          { q: "async metot hangi dönüş tiplerini kullanabilir?", options: ["Sadece void", "void, Task veya Task<T>", "Sadece Task", "Herhangi bir tip"], answer: 1, exp: "async metodlar void, Task veya Task<T> döndürebilir. void sadece event handler'lar için önerilir." },
          { q: "await keyword'ü bir async işlem beklerken ne yapar?", options: ["Thread'i bloke eder ve bekler", "Thread'i serbest bırakır, işlem tamamlanınca devam eder", "Yeni bir Thread başlatır", "İşlemi iptal eder"], answer: 1, exp: "await, mevcut thread'i bloke etmeden işlemin tamamlanmasını bekler. Thread başka işlere atanabilir." },
          { q: "Task.WhenAll() ne zaman kullanılır?", options: ["Sadece en hızlı tamamlanan Task'ı beklemek için", "Birden fazla async işlemi paralel başlatıp hepsinin tamamlanmasını beklemek için", "Task'ı iptal etmek için", "Senkron metodu async'e çevirmek için"], answer: 1, exp: "Task.WhenAll(), tüm Task'lar tamamlandığında devam eder. Paralel API çağrıları için idealdir." }
        ]
      },
      {
        id: "cs-12",
        title: "Ders 12: Entity Framework Core",
        intro: `### ORM Nedir ve Neden Kullanılır?
SQL yazmak yerine C# nesneleri üzerinden veritabanı işlemi yapmak istiyorsan ORM (Object-Relational Mapping) kullanırsın. EF Core, .NET'in resmi ORM aracıdır.

### Gerçek Dünya:
* Türkiye'deki kurumsal .NET projelerinin büyük çoğunluğu EF Core kullanıyor
* \`db.Urunler.Where(u => u.Fiyat > 100).ToListAsync()\` → EF Core bunu SQL'e çevirir
* Code-First yaklaşımı: C# sınıfı yaz → migration → veritabanı otomatik oluşur

> **Bu ders sonunda:** Basit bir CRUD API'nin veritabanı katmanını yazabileceksin. Bu, gerçek projelerde kullanılan yapının ta kendisidir.`,
        content: `### Entity ve DbContext Tanımlama:
\`\`\`csharp
using Microsoft.EntityFrameworkCore;

// Entity → Veritabanı tablosu
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
        // Precision: decimal için zorunlu
        mb.Entity<Urun>()
          .Property(u => u.Fiyat)
          .HasPrecision(18, 2);
    }
}
\`\`\`

### CRUD İşlemleri:
\`\`\`csharp
await using var db = new AppDbContext(options);

// CREATE — Yeni kayıt ekle
var yeniUrun = new Urun { Ad = "MacBook Pro", Fiyat = 85000m, KategoriId = 1 };
db.Urunler.Add(yeniUrun);
await db.SaveChangesAsync(); // SQL: INSERT INTO...

// READ — LINQ ile sorgula
var aktifler = await db.Urunler
    .Include(u => u.Kategori)          // SQL JOIN
    .Where(u => u.AktifMi && u.Stok > 0)
    .OrderByDescending(u => u.Fiyat)
    .Take(10)
    .ToListAsync();

// UPDATE — Güncelle
var urun = await db.Urunler.FindAsync(1);
if (urun is not null)
{
    urun.Fiyat = 79000m;
    urun.Stok -= 1;
    await db.SaveChangesAsync(); // SQL: UPDATE...
}

// DELETE — Sil
var silinecek = await db.Urunler.FindAsync(5);
if (silinecek is not null)
{
    db.Urunler.Remove(silinecek);
    await db.SaveChangesAsync(); // SQL: DELETE...
}
\`\`\`

### Migration Komutları (Terminalde çalıştırılır):
\`\`\`csharp
// dotnet ef migrations add InitialCreate
// dotnet ef database update
// dotnet ef migrations list
// dotnet ef database drop (dikkatli!)
\`\`\``,
        quiz: [
          { q: "EF Core'da ORM açılımı nedir?", options: ["Object Resource Manager", "Object-Relational Mapping", "Ordered Record Model", "Optional Request Module"], answer: 1, exp: "ORM: Object-Relational Mapping. C# nesnelerini ilişkisel veritabanı tablolarına eşler." },
          { q: "db.SaveChangesAsync() ne zaman çağrılmalıdır?", options: ["Her LINQ sorgusundan sonra", "Sadece DELETE işlemlerinde", "Add, Update veya Remove sonrasında değişiklikleri veritabanına yazmak için", "DbContext oluşturulduğunda"], answer: 2, exp: "SaveChangesAsync, bellekteki değişiklikleri (INSERT/UPDATE/DELETE) bir transaction içinde veritabanına gönderir." },
          { q: ".Include(u => u.Kategori) EF Core'da ne işe yarar?", options: ["Kategori tablosunu oluşturur", "Kategorileri filtreler", "SQL JOIN yaparak ilişkili tabloyu yükler (eager loading)", "Kategori alanını şifreler"], answer: 2, exp: "Include, EF Core'a SQL JOIN ekletir. Aksi hâlde navigation property null gelir (lazy loading kapalıysa)." }
        ]
      }
    ]
  },

  sql: {
    title: "SQL Veritabanı Temelleri",
    desc: "İlişkisel veritabanı tasarımı, DDL/DML komutları, JOIN, index, stored procedure ve transaction yönetimi.",
    icon: "🗄️",
    color: "#ffd166",
    lessons: [
      { id: "sql-1", title: "Ders 1: SQL Nedir? Temel Kavramlar", content: `SQL (Structured Query Language), ilişkisel veritabanlarında veri yönetmek için kullanılan standart dildir.\n\n### Temel Kavramlar:\n* **Veritabanı:** Birbiriyle ilişkili verilerin düzenli saklandığı yapı.\n* **Tablo:** Satır ve sütun yapısında veri depolayan nesne.\n* **Primary Key (PK):** Her satırı benzersiz tanımlayan sütun.\n* **Foreign Key (FK):** Başka tablonun PK'sına referans veren sütun.\n\n### SQL Komut Kategorileri:\n* **DDL:** CREATE, ALTER, DROP — Yapı yönetimi\n* **DML:** INSERT, UPDATE, DELETE — Veri yönetimi\n* **DQL:** SELECT — Veri sorgulama\n* **TCL:** COMMIT, ROLLBACK — Transaction yönetimi\n\n### İlk SQL Komutları:\n\`\`\`sql\nCREATE DATABASE YtkAcademy;\nUSE YtkAcademy;\n\nSELECT TABLE_NAME\nFROM INFORMATION_SCHEMA.TABLES\nWHERE TABLE_TYPE = 'BASE TABLE';\n\`\`\`` },
      { id: "sql-2", title: "Ders 2: Tablo Oluşturma (CREATE TABLE)", content: `### Gerçek Bir E-Ticaret Şeması:\n\`\`\`sql\nCREATE TABLE Kullanicilar (\n    Id               INT IDENTITY(1,1) PRIMARY KEY,\n    Ad               NVARCHAR(50)  NOT NULL,\n    Soyad            NVARCHAR(50)  NOT NULL,\n    Email            NVARCHAR(100) NOT NULL UNIQUE,\n    SifreHash        NVARCHAR(255) NOT NULL,\n    AktifMi          BIT           NOT NULL DEFAULT 1,\n    OlusturmaTarihi  DATETIME      NOT NULL DEFAULT GETDATE()\n);\n\nCREATE TABLE Urunler (\n    Id         INT IDENTITY(1,1) PRIMARY KEY,\n    KategoriId INT           NOT NULL,\n    Ad         NVARCHAR(200) NOT NULL,\n    Fiyat      DECIMAL(10,2) NOT NULL,\n    StokAdedi  INT           NOT NULL DEFAULT 0,\n    AktifMi    BIT           NOT NULL DEFAULT 1,\n\n    CONSTRAINT FK_Urunler_Kategoriler\n        FOREIGN KEY (KategoriId) REFERENCES Kategoriler(Id),\n    CONSTRAINT CK_Urunler_Fiyat CHECK (Fiyat >= 0)\n);\n\`\`\`` },
      { id: "sql-3", title: "Ders 3: SELECT ve Filtreleme", content: `### Temel SELECT:\n\`\`\`sql\nSELECT Id, Ad, Fiyat FROM Urunler;\n\nSELECT Ad, Fiyat * 1.20 AS KDVliFiyat FROM Urunler;\n\`\`\`\n\n### WHERE ile Filtreleme:\n\`\`\`sql\nSELECT * FROM Urunler WHERE Fiyat > 1000;\n\nSELECT * FROM Urunler\nWHERE Fiyat BETWEEN 500 AND 5000\n  AND AktifMi = 1 AND StokAdedi > 0;\n\nSELECT * FROM Urunler WHERE Ad LIKE '%laptop%';\n\nSELECT * FROM Kullanicilar WHERE Telefon IS NULL;\n\`\`\`\n\n### Sıralama ve Sayfalama:\n\`\`\`sql\nSELECT Ad, Fiyat FROM Urunler\nORDER BY Fiyat DESC;\n\nSELECT TOP 5 * FROM Urunler ORDER BY Fiyat DESC;\n\n-- Sayfalama: 2. sayfa, 10'ar kayıt\nSELECT * FROM Urunler\nORDER BY Id\nOFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;\n\`\`\`` },
      { id: "sql-4", title: "Ders 4: INSERT, UPDATE ve DELETE", content: `### INSERT:\n\`\`\`sql\nINSERT INTO Kategoriler (Ad, Slug) VALUES\n    ('Elektronik', 'elektronik'),\n    ('Mobilya', 'mobilya');\n\`\`\`\n\n### UPDATE:\n\`\`\`sql\n-- ⚠️ WHERE olmadan TÜM satırlar değişir!\nUPDATE Urunler\nSET Fiyat = Fiyat * 1.10, GuncellemeTarihi = GETDATE()\nWHERE KategoriId = 1 AND AktifMi = 1;\n\`\`\`\n\n### DELETE:\n\`\`\`sql\n-- ⚠️ WHERE olmadan TÜM kayıtlar silinir!\nDELETE FROM Urunler WHERE StokAdedi = 0 AND AktifMi = 0;\n\nTRUNCATE TABLE GeciciLog; -- Hızlı tablo temizleme\n\`\`\`` },
      { id: "sql-5", title: "Ders 5: JOIN İşlemleri", content: `### INNER JOIN — Sadece Eşleşenler:\n\`\`\`sql\nSELECT u.Ad, k.Ad AS Kategori, u.Fiyat\nFROM Urunler u\nINNER JOIN Kategoriler k ON u.KategoriId = k.Id\nWHERE u.AktifMi = 1;\n\`\`\`\n\n### LEFT JOIN — Sol Tablonun Tamamı:\n\`\`\`sql\nSELECT k.Ad, COUNT(s.Id) AS SiparisSayisi\nFROM Kullanicilar k\nLEFT JOIN Siparisler s ON k.Id = s.KullaniciId\nGROUP BY k.Id, k.Ad;\n\`\`\`\n\n### Çoklu JOIN:\n\`\`\`sql\nSELECT s.Id, k.Ad AS Musteri, u.Ad AS Urun, sd.Adet\nFROM Siparisler s\nINNER JOIN Kullanicilar k ON s.KullaniciId = k.Id\nINNER JOIN SiparisDetay sd ON s.Id = sd.SiparisId\nINNER JOIN Urunler u ON sd.UrunId = u.Id\nWHERE s.Durum = 'Tamamlandi';\n\`\`\`` },
      { id: "sql-6", title: "Ders 6: GROUP BY ve Aggregate Fonksiyonlar", content: `### Aggregate Fonksiyonlar:\n\`\`\`sql\nSELECT\n    COUNT(*) AS ToplamUrun,\n    SUM(StokAdedi) AS ToplamStok,\n    AVG(Fiyat) AS OrtFiyat,\n    MIN(Fiyat) AS EnDusuk,\n    MAX(Fiyat) AS EnYuksek\nFROM Urunler WHERE AktifMi = 1;\n\`\`\`\n\n### GROUP BY:\n\`\`\`sql\nSELECT k.Ad AS Kategori, COUNT(u.Id) AS UrunSayisi,\n       AVG(u.Fiyat) AS OrtFiyat\nFROM Kategoriler k\nLEFT JOIN Urunler u ON k.Id = u.KategoriId\nGROUP BY k.Id, k.Ad\nORDER BY OrtFiyat DESC;\n\`\`\`\n\n### HAVING — Grup Filtresi:\n\`\`\`sql\nSELECT KullaniciId, COUNT(*) AS Adet, SUM(Tutar) AS Toplam\nFROM Siparisler\nWHERE Durum = 'Tamamlandi'\nGROUP BY KullaniciId\nHAVING SUM(Tutar) > 10000;\n\`\`\`` },
      { id: "sql-7", title: "Ders 7: Alt Sorgular ve CTE", content: `### Subquery:\n\`\`\`sql\n-- Ortalama üzerindeki ürünler\nSELECT Ad, Fiyat FROM Urunler\nWHERE Fiyat > (SELECT AVG(Fiyat) FROM Urunler WHERE AktifMi = 1);\n\n-- Sipariş vermemiş müşteriler\nSELECT Ad, Email FROM Kullanicilar k\nWHERE NOT EXISTS (\n    SELECT 1 FROM Siparisler s WHERE s.KullaniciId = k.Id\n);\n\`\`\`\n\n### CTE:\n\`\`\`sql\nWITH AylıkSatislar AS (\n    SELECT KullaniciId, YEAR(OlusturmaTarihi) AS Yil,\n           MONTH(OlusturmaTarihi) AS Ay, SUM(Tutar) AS Toplam\n    FROM Siparisler WHERE Durum = 'Tamamlandi'\n    GROUP BY KullaniciId, YEAR(OlusturmaTarihi), MONTH(OlusturmaTarihi)\n)\nSELECT * FROM AylıkSatislar WHERE Toplam > 50000;\n\`\`\`` },
      { id: "sql-8", title: "Ders 8: Index ve Performans", content: `### Index Türleri:\n\`\`\`sql\nCREATE INDEX IX_Urunler_Fiyat ON Urunler (Fiyat);\n\nCREATE INDEX IX_Siparisler_Musteri_Tarih\nON Siparisler (KullaniciId, OlusturmaTarihi DESC);\n\nCREATE UNIQUE INDEX UIX_Email ON Kullanicilar (Email);\n\nCREATE INDEX IX_Covering\nON Urunler (KategoriId) INCLUDE (Ad, Fiyat, StokAdedi);\n\`\`\`\n\n### Performans Analizi:\n\`\`\`sql\nSET STATISTICS IO ON;\nSET STATISTICS TIME ON;\n\nSELECT * FROM Urunler WHERE Fiyat BETWEEN 1000 AND 5000;\n-- 'Index Seek' = iyi. 'Table Scan' = yavaş, index gerekiyor.\n\`\`\`` },
      { id: "sql-9", title: "Ders 9: View ve Stored Procedure", content: `### VIEW:\n\`\`\`sql\nCREATE VIEW vw_UrunDetay AS\nSELECT u.Id, u.Ad, k.Ad AS Kategori, u.Fiyat,\n       CASE WHEN u.StokAdedi = 0 THEN 'Tükendi'\n            WHEN u.StokAdedi < 5 THEN 'Kritik'\n            ELSE 'Yeterli' END AS StokDurumu\nFROM Urunler u\nINNER JOIN Kategoriler k ON u.KategoriId = k.Id\nWHERE u.AktifMi = 1;\n\nSELECT * FROM vw_UrunDetay WHERE Kategori = 'Elektronik';\n\`\`\`\n\n### STORED PROCEDURE:\n\`\`\`sql\nCREATE PROCEDURE sp_UrunAra\n    @Kelime     NVARCHAR(200) = NULL,\n    @MaxFiyat   DECIMAL(10,2) = NULL,\n    @SayfaNo    INT = 1,\n    @SayfaBoyut INT = 20\nAS\nBEGIN\n    SET NOCOUNT ON;\n    SELECT u.Id, u.Ad, k.Ad AS Kategori, u.Fiyat\n    FROM Urunler u\n    INNER JOIN Kategoriler k ON u.KategoriId = k.Id\n    WHERE u.AktifMi = 1\n      AND (@Kelime IS NULL OR u.Ad LIKE '%' + @Kelime + '%')\n      AND (@MaxFiyat IS NULL OR u.Fiyat <= @MaxFiyat)\n    ORDER BY u.Id\n    OFFSET (@SayfaNo - 1) * @SayfaBoyut ROWS\n    FETCH NEXT @SayfaBoyut ROWS ONLY;\nEND;\n\nEXEC sp_UrunAra @Kelime = 'laptop', @MaxFiyat = 50000;\n\`\`\`` },
      { id: "sql-10", title: "Ders 10: Transaction ve ACID", content: `### ACID Prensipleri:\n* **Atomicity:** Ya hepsi gerçekleşir ya da hiçbiri.\n* **Consistency:** Veri tutarlılığı korunur.\n* **Isolation:** Eş zamanlı işlemler birbirini bozmaz.\n* **Durability:** COMMIT edilen veri kalıcıdır.\n\n### Banka Transferi Örneği:\n\`\`\`sql\nBEGIN TRANSACTION;\n\nBEGIN TRY\n    UPDATE Hesaplar SET Bakiye = Bakiye - 5000\n    WHERE Id = 101;\n\n    IF (SELECT Bakiye FROM Hesaplar WHERE Id = 101) < 0\n        THROW 50001, 'Yetersiz bakiye!', 1;\n\n    UPDATE Hesaplar SET Bakiye = Bakiye + 5000\n    WHERE Id = 202;\n\n    INSERT INTO Transferler (GondericiId, AliciId, Tutar)\n    VALUES (101, 202, 5000);\n\n    COMMIT TRANSACTION;\nEND TRY\nBEGIN CATCH\n    ROLLBACK TRANSACTION;\n    PRINT 'Hata: ' + ERROR_MESSAGE();\nEND CATCH;\n\`\`\`` }
    ]
  },
  netcore: {
    title: ".NET Core Backend Geliştirme",
    desc: ".NET CLI, ASP.NET Core Web API, Dependency Injection, Middleware yapısı ve App Configuration yönetimi.",
    icon: "⚙️",
    color: "#00ff88",
    lessons: [
      {
        id: "net-1",
        title: "Ders 1: .NET Core Nedir ve CLI Kullanımı",
        intro: `### .NET Core Nedir?
.NET Core (modern adıyla .NET), Microsoft tarafından geliştirilen, açık kaynak kodlu ve çapraz platform (cross-platform) destekli yüksek performanslı bir yazılım geliştirme platformudur.

### Bu Derste Ne Öğreneceğiz?
* .NET SDK ve Runtime arasındaki farkları
* .NET CLI (Command Line Interface) komutlarını kullanmayı
* Komut satırından proje oluşturma, derleme ve çalıştırmayı`,
        content: `### .NET SDK vs Runtime:
* **.NET SDK (Software Development Kit):** Uygulama geliştirmek için gereken tüm araçları, derleyiciyi (Roslyn) ve CLI araçlarını içerir. Runtime'ı da kapsar.
* **.NET Runtime:** Derlenmiş olan .NET uygulamalarını çalıştırmak için gereken minimum ortamdır (CLR ve temel sınıflar).

### Sık Kullanılan CLI Komutları:
* \`dotnet --version\` : Yüklü .NET SDK sürümünü gösterir.
* \`dotnet new <proje-tipi>\` : Yeni bir proje şablonu oluşturur. (Örn: \`dotnet new webapi\`, \`dotnet new console\`)
* \`dotnet build\` : Projeyi ve bağımlılıklarını derler.
* \`dotnet run\` : Projeyi derler ve hemen çalıştırır.
* \`dotnet watch\` : Kodda yapılan değişiklikleri izler ve projeyi otomatik olarak yeniden derleyip başlatır (Hot Reload).

### İlk Console Projesini Oluşturma ve Çalıştırma:
\`\`\`bash
# 1. Klasör oluştur ve içine gir
mkdir YtkConsoleApp
cd YtkConsoleApp

# 2. Yeni console uygulaması oluştur
dotnet new console

# 3. Uygulamayı çalıştır
dotnet run
\`\`\``,
        quiz: [
          { q: "Yeni bir .NET projesi oluşturmak için hangi CLI komutu kullanılır?", options: ["dotnet new", "dotnet build", "dotnet run", "dotnet watch"], answer: 0, exp: "dotnet new komutu, belirtilen şablona göre yeni bir .NET projesi oluşturur." },
          { q: "Kod değişikliklerini izleyip uygulamayı otomatik olarak yeniden başlatan (Hot Reload) komut hangisidir?", options: ["dotnet run", "dotnet watch", "dotnet test", "dotnet clean"], answer: 1, exp: "dotnet watch komutu, dosya değişikliklerini izler ve projeyi yeniden derleyip günceller." },
          { q: ".NET SDK ve Runtime arasındaki temel fark nedir?", options: ["SDK sadece derleme ve geliştirme araçlarını içerir, Runtime ise uygulamayı çalıştırmak içindir", "SDK sadece Windows'ta çalışır", "Runtime sadece mobil cihazlar içindir", "Aralarında hiçbir fark yoktur"], answer: 0, exp: "Geliştiriciler kod yazmak ve derlemek için SDK'ya ihtiyaç duyarlar, son kullanıcılar uygulamayı çalıştırmak için sadece Runtime'a ihtiyaç duyarlar." }
        ]
      },
      {
        id: "net-2",
        title: "Ders 2: ASP.NET Core MVC ve Web API Temelleri",
        intro: `### Web API Nedir?
Modern web mimarisinde backend, frontend'e veya mobil uygulamalara JSON formatında veri sağlayan servislerden (API) oluşur. ASP.NET Core Web API, bu servisleri geliştirmek için en popüler framework'lerden biridir.

### Bu Derste Ne Öğreneceğiz?
* Controller yapısını ve özniteliklerini (attributes)
* Routing (Yönlendirme) mekanizmasını
* HTTP Get, Post, Put, Delete metotlarını yönetmeyi`,
        content: `### Controller ve ApiController:
Web API projelerinde istemciden gelen istekleri karşılayan sınıflara **Controller** denir. Bir sınıfın API Controller olduğunu belirtmek için \`[ApiController]\` attribute'u eklenir.

### Basit Bir API Controller Örneği:
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
            return BadRequest("Ürün adı boş olamaz.");

        Products.Add(newProduct);
        return StatusCode(210, $"{newProduct} başarıyla eklendi.");
    }
}
\`\`\``,
        quiz: [
          { q: "API Controller sınıflarında HTTP GET isteklerini karşılamak için hangi attribute kullanılır?", options: ["[HttpPost]", "[HttpGet]", "[HttpPut]", "[HttpDelete]"], answer: 1, exp: "[HttpGet] attribute'u, ilgili metodun HTTP GET isteklerine yanıt vereceğini belirtir." },
          { q: "ASP.NET Core'da MVC desenindeki 'V' harfi neyi temsil eder?", options: ["Model", "View", "Controller", "Velocity"], answer: 1, exp: "View, kullanıcıya gösterilen arayüz (HTML/CSS) katmanını temsil eder." },
          { q: "Bir sınıfın API denetleyicisi olduğunu ve otomatik model doğrulama gibi özellikleri etkinleştirdiğini belirtmek için hangi attribute kullanılır?", options: ["[Controller]", "[ApiController]", "[Route]", "[WebAPI]"], answer: 1, exp: "[ApiController] attribute'u API denetleyicileri için model doğrulama, HTTP kaynak eşleme gibi özellikleri otomatikleştirir." }
        ]
      },
      {
        id: "net-3",
        title: "Ders 3: Bağımlılık Enjeksiyonu (Dependency Injection)",
        intro: `### Bağımlılık Enjeksiyonu Nedir?
Dependency Injection (DI), sınıfların birbirine olan bağımlılıklarını gevşetmek (loose coupling) için kullanılan bir tasarım desenidir. ASP.NET Core, yerleşik bir DI konteynerine sahiptir.

### Bu Derste Ne Öğreneceğiz?
* DI prensibini ve faydalarını
* Transient, Scoped ve Singleton servis ömürlerini
* Servisleri IoC Container'a kaydetmeyi ve enjekte etmeyi`,
        content: `### Servis Ömürleri (Service Lifetimes):
ASP.NET Core'da servislerin ömrü 3 farklı şekilde tanımlanabilir:

1. **Transient (Geçici):** Servis her istendiğinde (her enjeksiyonda) yeni bir örnek (instance) oluşturulur. Kısa ömürlü, stateless servisler için idealdir.
2. **Scoped (İstek Bazlı):** Her HTTP isteği (request) için tek bir örnek oluşturulur. İstek boyunca aynı nesne kullanılır, istek bittiğinde nesne yok edilir. Veritabanı bağlantıları (DbContext) varsayılan olarak Scoped'tır.
3. **Singleton (Tekil):** Uygulama ömrü boyunca sadece bir kez örnek oluşturulur ve tüm istekler aynı örneği paylaşır. Caching servisleri gibi durum koruyan (stateful) yapılar için uygundur.

### Program.cs İçinde Servis Kaydı:
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

    // Bağımlılığın constructor üzerinden enjekte edilmesi
    public ProductService(IProductRepository repository)
    {
        _repository = repository;
    }
}
\`\`\``,
        quiz: [
          { q: "Her HTTP isteğinde (request) yeni bir örneği oluşturulan ve istek sonlandığında yok edilen servis ömrü hangisidir?", options: ["Transient", "Scoped", "Singleton", "Static"], answer: 1, exp: "Scoped servisler HTTP istek döngüsü boyunca bir kez oluşturulur ve o istek altındaki tüm bileşenlerce paylaşılır." },
          { q: "Uygulama çalışmaya başladıktan sonra sadece tek bir örneği oluşturulan ve tüm uygulama boyunca paylaşılan servis ömrü hangisidir?", options: ["Transient", "Scoped", "Singleton", "Temporary"], answer: 2, exp: "Singleton servislerin tek bir örneği (instance) tüm uygulama boyunca paylaşılır." },
          { q: "Her talep edildiğinde (her enjekte edildiğinde) her zaman yeni bir örnek oluşturan servis ömrü hangisidir?", options: ["Transient", "Scoped", "Singleton", "Constant"], answer: 0, exp: "Transient servisler her enjeksiyonda yeni bir instance oluşturur; durum (state) saklamazlar." }
        ]
      },
      {
        id: "net-4",
        title: "Ders 4: Middleware ve Pipeline Mimarisi",
        intro: `### Middleware Nedir?
Middleware (Ara Yazılım), HTTP istek ve yanıt hattına (pipeline) entegre edilen, gelen istekleri işleyen veya giden yanıtları değiştiren kod bileşenleridir.

### Bu Derste Ne Öğreneceğiz?
* HTTP istek ve yanıt akışını (Request/Response Pipeline)
* Middleware yapısını ve sıralamasını
* Özel (custom) middleware yazmayı`,
        content: `### Pipeline ve Middleware Çalışma Mantığı:
Gelen her HTTP isteği, sırayla middleware bileşenlerinden geçer. Her middleware isteği işleyebilir, değiştirebilir ve bir sonraki middleware'e aktarabilir (\`next()\`). Ya da isteği sonlandırıp geri döndürebilir (short-circuit).

### Program.cs İçindeki Standart Pipeline Sıralaması:
\`\`\`csharp
var app = builder.Build();

// Middleware bileşenleri sırayla eklenir:
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();

// En son controller eşleştirmesi yapılır
app.MapControllers();

app.Run();
\`\`\`

### Özel Middleware Tanımlama (Inline):
\`\`\`csharp
app.Use(async (context, next) =>
{
    // İstek gelirken yapılacak işlemler (Request)
    Console.WriteLine($"Gelen İstek Yolu: {context.Request.Path}");

    await next.Invoke(); // Bir sonraki middleware'e geç

    // Yanıt dönerken yapılacak işlemler (Response)
    Console.WriteLine($"Giden Yanıt Durumu: {context.Response.StatusCode}");
});
\`\`\``,
        quiz: [
          { q: "HTTP istek hattında (pipeline) işlemleri sırayla yürüten ve araya giren kod bileşenlerine ne ad verilir?", options: ["Controller", "Middleware", "Service", "Helper"], answer: 1, exp: "Middleware, istek/yanıt hattındaki her bir ara katman kod bileşenidir." },
          { q: "HTTP pipeline'ını sonlandıran (kendisinden sonraki middleware'i çağırmayan) metot hangisidir?", options: ["Use", "Run", "Map", "Next"], answer: 1, exp: "Run metodu pipeline'ı sonlandırır ve genellikle terminal middleware olarak adlandırılır." },
          { q: "Belirli bir URL yoluna göre pipeline'ı dallandırmak (route etmek) için hangi metot kullanılır?", options: ["Use", "Run", "Map", "Next"], answer: 2, exp: "Map metodu, belirtilen path eşleştiğinde pipeline'ı ayrı bir dala yönlendirir." }
        ]
      },
      {
        id: "net-5",
        title: "Ders 5: Yapılandırma ve Ortam Yönetimi",
        intro: `### Yapılandırma Nedir?
Uygulamalarımızın çalışması için gereken veritabanı bağlantı adresleri, API anahtarları veya çalışma ortamı (Development/Production) bilgileri kod içine gömülmek yerine yapılandırma dosyalarında tutulur.

### Bu Derste Ne Öğreneceğiz?
* appsettings.json dosyası ve hiyerarşik yapılandırma verilerini okumayı
* Çalışma ortamlarını (Environments) yönetmeyi
* Güvenli veri saklama (User Secrets) yöntemlerini`,
        content: `### appsettings.json ve IConfiguration:
ASP.NET Core projelerinde varsayılan ayarlar \`appsettings.json\` dosyasında saklanır. Bu değerleri okumak için \`IConfiguration\` servisi kullanılır.

### Örnek appsettings.json:
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

### C# İçinden Değer Okuma:
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

### Ortam Yönetimi (Environment Control):
ASP.NET Core, \`ASPNETCORE_ENVIRONMENT\` ortam değişkenini okuyarak uygulamanın hangi ortamda çalıştığını belirler:
* \`Development\` (Geliştirme)
* \`Staging\` (Test/Geçiş)
* \`Production\` (Canlı Ortam)

\`\`\`csharp
if (builder.Environment.IsDevelopment())
{
    // Sadece geliştirme ortamında çalışan kodlar (Örn: Hata detay sayfası)
    Console.WriteLine("Geliştirici modundayız.");
}
\`\`\``,
        quiz: [
          { q: "ASP.NET Core projelerinde varsayılan yapılandırma (configuration) verileri hangi dosyada saklanır?", options: ["web.config", "appsettings.json", "package.json", "settings.xml"], answer: 1, exp: "appsettings.json dosyası, ASP.NET Core uygulamalarındaki varsayılan yapılandırma sağlayıcısıdır." },
          { q: "Geliştirme ortamında (Development) olup olmadığımızı kontrol etmek için kullanılan metot hangisidir?", options: ["IsDevelopment()", "IsProduction()", "IsStaging()", "IsLocal()"], answer: 0, exp: "builder.Environment.IsDevelopment() metodu uygulamanın geliştirme ortamında olup olmadığını kontrol eder." },
          { q: "Yerel geliştirme ortamında şifre ve bağlantı cümleleri gibi hassas verileri kod dışında güvenli saklamak için kullanılan araç hangisidir?", options: ["AppSettings", "Secret Manager (User Secrets)", "WebConfig", "GitCrypt"], answer: 1, exp: "User Secrets (Secret Manager), geliştirme sırasında hassas verilerin proje dizini dışında saklanmasını sağlar." }
        ]
      }
    ]
  }
};
