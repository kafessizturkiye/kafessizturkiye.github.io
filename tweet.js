const tweets = [
    "Migros’un hala kafes eziyetine karşı çıkmadığını görmek beni hayal kırıklığına uğrattı, umarım en yakın zamanda kafes yumurtası satmayı bırakırsınız", "Sizi 
de kafes yumurtasına hayır diyen marketler görmek istiyoruz doğru olanı yapın lütfen", "Migros kafes yumurtası satmayı ne zaman bırakacaksın lütfen bir açıkla
ma yap", "Migros’un sattığı hiçbir yumurtanın zalim kafeslerden elde edilmeyeceğini açıklamasını bekliyoruz", "Kafeslerdeki hayvan eziyetine dur diyerek doğru
 olanı yap Migros!", "Lütfen sıkışık kafeslerde işkence gören hayvanların yumurtasını satmaktan vazgeçin", "Kafes yumurtası eziyettir kafes yumurtası satmaya 
artık son verin", "Migros kafes yumurtası satmayı bırakarak endüstriyel kafeslerdeki hayvan eziyetine dur diyebilir", "Migrosun yumurtadan daha fazla kar etme
k için korkunç bir hayvan eziyetine ortak olmasını beklemezdim", "Artık şirketlerin kâr hırsı için hayvanların çektiklerinden bıktık kafes yumurtası satmaktan
 vazgeç Migros!", "Migros kalitesinde bir market neden cehennem gibi kafeslerden yumurta alıyor?", "Kafes yumurtası satmayı bırakarak milyonlarca hayvanı kafe
sten çıkarabilirsiniz neden sessiz kalıyorsunuz Migros", "Hayatı boyunca toprağa bile basamayan hayvanların yumurtalarını artık Migros’ta görmek istemiyoruz!"
, "Kafes yumurtası satarak hayvan eziyetine ortak olmayın diye imza verdim ama hala sizden ses yok", "Migros raflarında kafes eziyeti istemiyoruz, kafeslerden
 gelen yumurtaları satmayın!", "Sıkışıklıkta stresten birbirini öldüren hayvanların yumurtalarını satmaya devam mı edeceksiniz?", "Kafeslere tıkılmış hayvanla
rın görüntülerini yüreğim kaldırmıyor bu kafeslerden gelen yumurtaları satmak insanlığa sığmaz", "Hani kalite hani hayvanlara değer vermek, sattığınız yumurta
ların geldiği kafesleri gördük", "Ortak olduğunuz korkunç kafes eziyetini gördüğümden beri Migros’tan alışveriş yapmıyorum", "Her gün hayvanlara edilen türlü 
eziyetleri görmekten bıktık artık değişim istiyoruz", "Koskoca şirketsiniz hayvanlar cehennemi yaşamasın diye biraz daha az kâr etseniz ne olur mecbur musunuz
 kafes yumurtası satmaya", "Migros hayvan eziyetine dur de kafes yumurtası satma", "Migros hayvan eziyetine dur de kafes yumurtası satma", "Migros hayvan eziy
etine dur de kafes yumurtası satma", "Migros raflarında eziyet görmek istemiyoruz", "Migros raflarında eziyet görmek istemiyoruz", "Migros raflarında eziyet g
örmek istemiyoruz", "Migros raflarında eziyet görmek istemiyoruz", "Migros endüstriyel kafeslerde eziyetle üretilen yumurtaları satmaktan vazgeç!: Migros endü
striyel kafeslerde eziyetle üretilen yumurtaları satmaktan vazgeç!: Migros endüstriyel kafeslerde eziyetle üretilen yumurtaları satmaktan vazgeç!: Migrosta sa
tılan kafes yumurtaları için hayvanlar kafeslerde eziyet görüyor", "Migros kafes yumurtası satarak hayvanlara yapılan büyük bir eziyete ortak oluyor", "Migros
’un kafeslerde eziyet çeken hayvanlarla ilgili sorumluluk almasını ve kafes yumurtası satmaktan vazgeçmesini bekliyorum", "Migros bari sen yapma kafesten gele
n yumurtaları satarak hayvan eziyetinin parçası olma", "Migrosun kafes yumurtası satmayı bırakması için imza verdim ama ciddi bir açıklama yapılmıyor;Migros’u zalim kafeslerden gelen yumurtaları terk etmeye çağırıyoruz", "Tavukların dar ve sıkışık kafeslerde doğru düzgün hareket edemeden yaşaması kabul edilemez, lütfen kafes yumurtası satmaktan vazgeçin", "Tavukların kafeslerde yaşatıldıkları şartları insanlık dışı buluyorum ve Migros gibi büyük marketlerin bu kafeslerden gelen yumurtaları hala satmasına inanamıyorum", "Eziyetle üretilen kafes yumurtasını evime asla almıyorum Migros marketlerinde de artık kafes yumurtası satıldığını görmek istemiyorum", "Migros ne zaman endüstriyel kafeslerde büyük eziyetlerle üretilen yumurtaları satmaya son verecek?", "Şirketlerin açgözlülüğün yüzünden hayvanlara edilen eziyet artık bitsin!", "Sattıkları yumurtaları nasıl yerlerden aldıklarını gördüğümden beri Migros’a gitmiyorum", "Endüstriyel kafeslerdeki eziyet görüntüleri gerçekten korkunç, bu hayvanların yumurtalarını satarken hiç mi içiniz acımıyor", "Migros ne zaman kafes yumurtası satmayı bırakacak?", "Tavukların canı yokmuş gibi daha az maliyetli olsun diye onları kafese tıkarak üretilen yumurtaları artık Migrosta görmek istemiyorum", "Kalite satıyoruz diye reklam yapıp kafese tıkılmış ölü bedenler içinde yaşayan hayvanların yumurtalarını satmaya utanmıyor musunuz?", "Migrosa ucuz diye değil kaliteli diye gidiyoruz ama siz ucuza gelsin diye hayvanlara işkence ederek üretilmiş yumurtaları satıyorsunuz", "Zavallı hayvanlara yapılan korkunç kafes eziyeti dursun istiyorum Migros kafes yumurtası satmaya son ver", "Normalde Migrostan alışveriş yapardım ama kafeslerde eziyet gören hayvanların yumurtalarını satmayı bir türlü bırakmadığı için artık yapmıyorum", "Sosyal medyadan sattığınız kafes yumurtaların ne tür tesislerden geldiğini gördüm hayvanlara yazıktır yapmayın bunu", "Duyarlı vatandaşlar olarak artık hayvan eziyetinin en uç şekliyle üretilmiş yumurtaları satmayı bırakmanızı istiyoruz", "Başka büyük market zincirleri kafes yumurtası satmayı yavaş yavaş bırakabiliyor da siz neyi bekliyorsunuz hayvan eziyetine destek olmak Migrosa yakıştı mı", "Lütfen hayvanların da can olduğunu unutmayın ve kafes yumurtası satmaya son vereceğinizi bir an önce açıklayın", "Metro marketlerinin yaptığı gibi Migros’un da artık eziyetle üretilmiş yumurtaları raflarından yavaş yavaş kaldırmasını istiyoruz", "Tavukların ömür boyu kafese tıkılması kendi etrafında dönecek alanı bile zor bulması insanlığa sığmaz lütfen kafeste üretilen yumurtaları artık satmayın", "Migros kalitesinde bir marka artık kafes yumurtası satmamalı lütfen endüstriyel kafeslerdeki hayvan eziyetine karşı çıkın", "Hayvanlara eziyetle yumurtlatılmasına artık dayanamıyorum Migros kafeste işkence gören hayvanların yumurtalarını satma artık", "Hayvan eziyeti üzerinden para kazanan Migrostan alışverişi kestim", "Migros'un hala kafes eziyetine sessiz kalması beni hayal kırıklığına uğrattı, kafeslerden gelen yumurtaların satışına son verin", "Migros kafeslerdeki hayvanların çektiği korkunç acıları görmezden gelmeye son ver", "Kafes yumurtası satarak hayvan eziyetine ortak olma Migros", "Kafeslerdeki hayvanların çektikleri acıya duyarsız kalarak kafes yumurtası satmaya devam eden Migrosu kınıyorum", "Kafes yumurtası satışını durdurarak hayvanlara yapılan zulme karşı bir adım atabilirsin Migros", "Migros'un kafes yumurtası satışını durdurarak hayvan haklarına verdiği önemi görmek istiyoruz", "Kafeslerdeki tavukların yaşadığı eziyeti göz ardı etmeyin lütfen kafes yumurtası satmaya son verin", "Kafes yumurtası eziyettir Migros kafes eziyeti satmasın", "Migros'un kafes yumurtası satmayı bırakarak hayvanlara saygı göstermesini bekliyoruz", "Migrosun kafes yumurtası satmayı bırakması kafeslerde acı çeken milyonlarca hayvanın hayatını değiştirebilir", "Hayvanlara kafeslerde yaşatılanları görmezden gelme Migros, kafes yumurtası satmaya son ver", "Artık güvendiğim marketlerde kafes yumurtası satıldığını görmekten bıktım ne zaman kafes yumurtası satmayı bırakacağınızla ilgili açıklama görmek istiyorum", "Korkunç bir hayvan eziyetine karşı durmak varken neden hayvanların acısından kar etmeye devam ediyorsunuz", "Migros'un kafes yumurtası satmayı bırakması için sesimizi yükseltelim Migros Hayvan Eziyeti Satma diyelim", "Bu devirde eziyetle elde edilen kafes yumurtalarını satmaya son vermek üzere bir hedef bile açıklamamak Migros gibi bir marka için kabul edilemez", "Tavuklar da candır, acı çekerler, kafeslerde bir gün bile yere basmadan ömürlerini geçiriyorlar artık böyle üretilen yumurtaların satılmasını istemiyorum!", "Kafes yumurtası satışını durdurmak için Migros'a birlikte çağrıda bulunalım", "Kafes yumurtası üretimi demek, tavukların neredeyse tüm doğal içgüdülerinden mahrum bırakılması demektir. Migros, bu zulme ortak olmaya son vermeli", "Kafeslerde hayvanlar korkunç zulümler görür şirketlerin kafes yumurtası satarak bu zulümden kar etmesini istemiyoruz", "Hayvan eziyeti demişken ömrü boyunca güneş görmeyen, düzgün hareket edemeyen, yumurtlasın diye ömür boyu dosya kağıdı kadar alana kapatılan hayvanları da konuşalım. Migros kafeslerden gelen yumurtaları artık satma!", "150 bin imzacı, hayvanlara kafeste korkunç biçimde zulmedilerek üretilen yumurtaların Migrosta satılmasına karşı çıkıyor", "Migros kafeslerdeki milyonlarca hayvanın çığlığını duy, kafeste üretilen yumurtaları raflarından kaldır", "Migros kalitesinde bir marka nasıl tavukların üst üste sıralanmış kafeslere tıkıldığı, ölü arkadaşlarının arasında yaşadığı kafeslerden gelen yumurtaları satar?", "Neden marketlerinize iyi tavuk yazıları yazıp cehenneme benzer kafeslere tıkılmış hayvanların yumurtalarını satmaya devam ediyorsunuz", "Migrosun hayvanlar konusunda bu kadar duyarsız olmasını anlamıyorum, en azından endüstriyel kafeslerden gelen yumurtaları satmayacağınızı duyurabilirsiniz diye düşünüyorum", "Hayvanlara edilen zulmün bir sonu yok, hayvan yürüyemesin az yesin de yumurta ucuza gelsin diye ömür boyu kafese hapsediliyor ve Migros bu kafeslerden gelen yumurtaları satıyor", "Tüketiciler olabilecek en kötü koşullarda üretilen yumurtaları artık raflarda görmek istemiyor Migros ne zaman kafes yumurtası satmayı bırakacak", "Kafes yumurtası üretimi hayvanların doğal ihtiyaçlarını yok sayarak yumurta ucuza gelsin diye hayvanlara en büyük eziyetlerin edildiği bir üretim yöntemidir, Migros ve tüm marketler kafes yumurtası satmayı acilen bırakmalı", "Hayvana eziyeti görmezden gelen eziyetin en korkunç biçimi olan kafes yumurtalarını satan bir yerden alışveriş yapmak istemiyorum", "Kafes görüntüleri gerçekten korkunç bu devirde hala böyle bir zulmün kabul edilmesini anlayamıyorum bari Migros olarak böyle korkunç yerlerden gelen yumurtaları satmayın", "Migros doğru olanı yapın ve en yakın zamanda kafes yumurtası satmayı bırak", "Artık kafeslerde hayvan kalmamalı bu kadar büyük bir acıyla üretilmiş ürünleri Migrosta da görmek istemiyorum", "Hayvanlara kafeste işkence edilmesine susan markalar arasında Migros’u görmeyi beklemezdim hani kaliteye önem veriyordunuz?", "Kafes eziyetine karşı hareket büyürken sizin bu eziyete sessiz kalan markalar arasında olmanız çok üzücü Migros", "Hayvan hakları tüm hayvanları içerir, ucuza yumurtlasın diye kanadını açamadığı daracık yere hapsedilen hayvanlar için de sesimizi çıkaracağız", "Kafese tıkılan tavukların yaşadığını yüreğim kaldırmıyor sizin için yumurtadan birkaç kuruş daha kar etmek bu kadar mı önemli kafes yumurtası satmayın artık ne olur", "Sevdiğim birçok marka müşterilerini dinledi ve kafes yumurtasını reddederek hayvanların hayatını iyileştirmek için adım attı Migros neden berbat kafeslerde tutulan tavukların yumurtalarını satmaya devam ediyor", "Bunu okuyan Migros müşterileri bilsin ki Migros, hayvanlara büyük eziyetler çektirilen kafeslere karşı sesini çıkarmıyor", "Neden bu kadar insan sizi hayvanlara karşı duyarlılığa çağırırken cevap vermezsiniz ki? Kafeste üretilen yumurtaları satmaya son vermelisiniz bir an önce", "Marketlerin hayvan eziyetine karşı tutumu benim alışveriş tercihimi etkiliyor, sizin de kafes yumurtası satmayacağız açıklamanızı görene kadar alışverişi kesiyorum", "Hayvana eziyete karşıyız tavuklar da hissedebilen canlılardır yumurta için onları kafeslere hapsetmeyin lütfen", "Migrosu seven bir müşteriydim tavukların cehenneme hapsedilmesine karşı düzgün bir açıklama yapmaya direndiğini duyunca soğudum", "Migros bizi oyalama hayvanlara kafeste işkence edilmesine karşı ne yapacaksın düzgün biçimde açıkla artık", "Metro kafeste üretilen yumurtaları raflarından yavaş yavaş kaldırırken Carrefour bu konuda planını açıklarken Migros’un bahanesi nedir artık?", "Migros gibi bir markaya hayvan eziyetine ortak olmayı yakıştıramıyoruz, umarım en kısa zamanda kafes yumurtası satmaya son vereceğini açıklar", "Aylardır yapılan çağrılara rağmen kafeste korkunç şartlarda yaşayan hayvancıkları görmezden gelmeye devam eden Migros artık gözümden düştü", "Kafesten gelen yumurtayı satmayı reddederek kaç milyon hayvanın şartlarını iyileştirebilecekken neyi bekliyorsunuz", "Yazıktır günahtır, sattığınız ürünlerin sorumluluğunu alın kafeslerde rezalet şartlarda tutulan hayvanların yumurtalarını bir zahmet satmayın", "Kafeste yaşamak zorunda bırakılan tavukların yumurtalarını lütfen satmayın böyle bir eziyete ortak olmak zorunda değilsiniz", "Hayvan eziyetine dur demek için Migros da üzerine düşeni yapsın endüstriyel kafeslerde üretilen yumurtaları satmasın", "Müşterileriniz hayvanlara karşı daha duyarlı bir Migros görmek istiyor, rakip marketler gibi siz de kafeslerdeki hayvan eziyetini ciddiye alıp kafes yumurtası satmaya son verebilirsiniz", "Hayvanların acısından kar elde etmek yanlış, Migros olarak doğru olanı yapın kafes yumurtası satmayın", "Doğaya hayvanlara önem vermekle övünen bir şirketin kafeste üretilen yumurtaları satmasını anlamıyorum", "Endüstriyel kafeslerde hayvanlara yaşatılanlar kabul edilemez, Migros bir an önce kafeslerde üretilen yumurtaları satmayı bırak", "Sizi ömür boyu bir tabuta kapatsalar ne hissederdiniz? Yumurtasını sattığınız tavukların kafeslerde çektiği acıyı aklınız alıyor mu?", "Tavuklar hisseden canlılardır, kafeslerde ise hissettikleri ayaklarını acıtan ve vücutlarını yaralayan demir teller… Lütfen kafes yumurtası satmaya son verin", "Migrosta satılan kafes yumurtaları için milyonlarca kafeste eziyet görüyor!", "Hayvana eziyetin her türlüsüne karşıyım yumurta üretiminde hayvanların toprağa bile basamadığı kafeslere tıkılmasını korkunç buluyorum kafes yumurtasını marketlerden kaldırın", "Sıkışık bir kafeste, dolaşamadan, kanatlarını geremeden ölmeyi bekliyor, sırf yumurtası daha ucuza gelsin de şirketler daha zengin olsun diye"
    


];

const tweet_1 = tweets[Math.floor(Math.random() * tweets.length)]

let tweeting = "https://twitter.com/intent/tweet_1"

window.location.replace(tweeting);
