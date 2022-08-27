const express = require('express');
const next = require('next');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express()

        server.all('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(PORT, () => {
            console.log(`> Ready on http://localhost:${PORT}`)
        })
    })
    .catch(ex =>  {
        console.error(ex.stack);
        process.exit(1)
});