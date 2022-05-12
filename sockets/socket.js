
const { io } = require('../index')

// Socket Server
io.on('connection', client =>{
    console.log('Cliente conectado');

    client.on('disconnect',() => {
        console.log('Cliente desconectado');
    });

    client.on( 'initPassanger', ( payload ) => {
        
        client.join(payload.phone);
        console.log( 'Passanger log: ', payload.phone);

    });

    client.on( 'onPublic', ( payload ) => {
        
        client.join(payload.phone);
        console.log( 'Driver en sala privada: ', payload.phone);
        client.join(payload.zona);
        console.log( 'Driver en sala publica: ', payload.zona);
    });

    client.on( 'onPrivate', ( payload ) => {

        client.leave(payload.zona);
        console.log( 'Driver salio de la sala:', payload.zona);
    });

    client.on('service', ( payload ) => {
        // console.log( 'Mensaje: ', payload);

        io.to(payload.to).emit('service', payload);
        console.log( 'mensaje: ',  payload);
        console.log( 'Sended to room:',  payload.to);
    });
});