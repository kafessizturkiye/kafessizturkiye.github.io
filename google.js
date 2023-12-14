'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();

const path = require('path');

app.get('/', async function(req, res) {
    
    const links= ["https://maps.app.goo.gl/fmAAFytrsfZZgZia6", "https://maps.app.goo.gl/ss76aTfvRWdjApMe6", "https://maps.app.goo.gl/7PFeWwcaPVtTggnA6",
  "https://maps.app.goo.gl/Rp8TdLSJakzfwaZW8", "https://maps.app.goo.gl/QdzEPY2ZsgihyyCc9", "https://maps.app.goo.gl/33h4wJh3hPcM9rDA7", 
  "https://maps.app.goo.gl/ktTU3tDtrKJPAc419", "https://maps.app.goo.gl/fsDBw4VJLTXTWmK6A", "https://maps.app.goo.gl/c328NPRd9sUfX42Z9",
  "https://maps.app.goo.gl/MK3nzcRdzu7ukxrC9", "https://maps.app.goo.gl/a72Utejz5Mjnnpe3A", "https://maps.app.goo.gl/RgcQqXKs9g7nERCK6", 
  "https://maps.app.goo.gl/sPdit4i84ZvuUXU49", "https://maps.app.goo.gl/sPdit4i84ZvuUXU49", "https://maps.app.goo.gl/2WCZ4G3efsqfe5zU6",
  "https://maps.app.goo.gl/xmHTh2D9RPnMxx518", "https://maps.app.goo.gl/33h4wJh3hPcM9rDA7","https://maps.app.goo.gl/QdzEPY2ZsgihyyCc9"]
const link = links[Math.floor(Math.random() * links.length)]

    let open = link
    res.redirect(open)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
}) 

////\r\nte
