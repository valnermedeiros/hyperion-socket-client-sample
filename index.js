const fetch = require("node-fetch")
const HyperionSocketClient = require('@eosrio/hyperion-stream-client').default;
const client = new HyperionSocketClient('http://wax.eosrio.io/', { async: true, fetch });
 
client.onConnect = () => {
  client.streamActions({
    contract: 'atomicassets',
    action: 'burnasset',
    account: '',
    start_from: '2020-03-15T00:00:00.000Z',
    read_until: 0,
    filters: [],
  });
}
 
// see 3 for handling data
client.onData = async (data, ack) => {
    console.log(data); // process incoming data, replace with your code
    ack(); // ACK when done
}
 
client.connect(() => {
  console.log('connected!');
});