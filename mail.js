const addresses = [
    "info@larissahotels.com",
    "deluxebelek@titanic.com.tr",
    "info@sentidobellazure.com", 
    "mado@mado.com.tr", 
    "info@bigchefs.com.tr", 
    "info@tavukdunyasi.com", 
    "ir@ulker.com", 
    "info@pinar.com.tr", 
    "info@getir.com", 
    "iletisim@migros.com.tr",
    "destek@trendyol.com",  
    "info@yemeksepeti.com",  
    "musteri.hizmetleri@istegelsin.com", 
    "kalite@sardunya.com", 
    "info@mekasyemek.com", 
    "info@aplus.web.tr"];

const address_1 = addresses[Math.floor(Math.random() * addresses.length)]

let mail = `mailto:${address_1}`

window.location.replace(mail);
