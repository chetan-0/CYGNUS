import brain from 'brainjs.js';

const net = new brain.recurrent.LSTM();

net.train([
  { input: 'Vote Now!', output: 'Right Wing alert!' },
  { input: '', output: 'normal' },
]);


const checkStuff = content => net.run(content);

export default checkStuff;

