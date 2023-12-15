/* server.js - Express server*/
'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();

const path = require('path');

app.get('/', async function(req, res) {
    
    const links= ['https://twitter.com/intent/tweet?text=Kafes yumurtası satmaya son verin! @Migros_Turkiye',
'https://twitter.com/intent/tweet?text=https://kafessizturkiye.com/migrosdurde sitesini gördünüz mü? Neden henüz kafes yumurtasını terk etmediniz?',
'https://twitter.com/intent/tweet?text=Zalim kafeslerden gelen yumurtaları satmayı bırakın',
'https://twitter.com/intent/tweet?text=Kafes yumurtasını reddediyoruz lütfen müşterilerinizi ciddiye alın',
'https://twitter.com/intent/tweet?text=Artık kafeslerde hayvan kalmamalı Migros’ta acıyla üretilmiş kafes yumurtalarının satılmasını istemiyorum',
'https://twitter.com/intent/tweet?text=Üst üste kafese tıkılmış tavuklardan gelen yumurtaları satmayı bırakın',
'https://twitter.com/intent/tweet?text=Milyonlarca hayvanı kafeslerden kurtarma şansınız varken neden duruyorsunuz? https://kafessizturkiye.com/migrosdurde',
'https://twitter.com/intent/tweet?text=Kafes zulmüne karşı ses çıkarın kafes yumurtası satmayın',
'https://twitter.com/intent/tweet?text=Hayvanlara kafeslerde acı çektirilmesine karşı sessiz kalmayın https://kafessizturkiye.com/migrosdurde',
'https://twitter.com/intent/tweet?text=Kafeslerdeki tavuklar rezalet haldeyken biz nasıl kafes yumurtası satan Migros’tan alışveriş yapalım?']
const link = links[Math.floor(Math.random() * links.length)]

    let open = link
    res.redirect(open)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
}) 

////\r\nte