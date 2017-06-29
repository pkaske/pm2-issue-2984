'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

console.log('NODE_APP_INSTANCE:', process.env.NODE_APP_INSTANCE, ', PM_ID:', process.env.pm_id);

const port = 9990 + parseInt(process.env.NODE_APP_INSTANCE, 10);

server.connection({ port, host: 'localhost' });

server.start((err) => {

    if (err) {
        throw err;
    }

    console.log(`Server (PM_ID: ${process.env.pm_id}) running at port: ${port}`);
});