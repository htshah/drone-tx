/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
export default ({ onConnecting, onConnect, onDisconnect }) => {
  let ws = null;
  const host = 'ws://192.168.4.1';
  // var host = "wss://echo.websocket.org";

  const states = {
    nosupport: 0,
    failed: 1,
    disconnected: 2,
    connecting: 3,
    connected: 4
  };
  let state = states.disconnected;

  /**
   * Functions
   */
  function send(data) {
    ws.send(data);
  }

  function close() {
    if (ws !== null) {
      ws.close();
    }
  }

  /**
   * Websocket Events
   */
  const onOpen = () => {
    state = states.connecting;
    onConnecting();

    console.log('opened');
    state = states.connected;
    onConnect();
  };

  const onMessage = (evt) => {
    // Copy msg removing all `~`(non UTF-8 representation char)
    const msg = evt.data.split('~').join('');

    switch (msg.charAt(0)) {
      case 'B':
        const battery = parseFloat(msg.replace('B', ''));
        $('.battery-indicator .battery-level').css(
          'width',
          `${(battery * 100) / 12.6}%`
        );
        $('#battery-cell-1').html(`${msg.replace('B', '')}v`);
        break;
      case 'W':
        print('Watchdog reset');
        break;
      default:
        console.log(msg);
      // print("Message received : " + msg);
    }
  };

  const onClose = (e) => {
    console.log('closing');
    close(e);
    onDisconnect();
    console.log('closed');
  };
  function addListeners() {
    if (ws === null) return;

    ws.onopen = onOpen();

    ws.onmessage = onMessage();

    ws.onclose = onClose();
  }

  function init() {
    if (state === states.connected) return; // already connected
    console.log('opening');

    if (!('WebSocket' in window)) {
      state = states.nosupport;
    }

    // do connection
    try {
      state = states.connecting;
      ws = new WebSocket(host);

      addListeners();
    } catch (error) {
      console.error(error);
      close();
    }
  }
};
