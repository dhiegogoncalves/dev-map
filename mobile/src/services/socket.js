import socketio from 'socket.io-client';

import getEnvVars from '../../environment';
const { apiUrl } = getEnvVars();

const socket = socketio(apiUrl, {
  autoConnect: false
});

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

function subscribeToNewDevs(subcribeFunction) {
  socket.on('new-dev', subcribeFunction);
}

export { connect, disconnect, subscribeToNewDevs };
