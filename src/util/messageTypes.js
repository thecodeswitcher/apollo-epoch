const sendMessageTypes = {
  epoch: { initializeConnection: 'initializeConnection', sayHello: 'sayHello' },
  contentScript: {
    epochReceived: 'messageReceivedEpoch',
    messageReceived: 'messageReceived',
    messingAround: 'justMessin',
  },
  background: { cache: 'returningData' },
};

export default sendMessageTypes;