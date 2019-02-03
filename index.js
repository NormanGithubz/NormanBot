const Discord = 
require('discord.js')
const Commando = 
require('discord.js-commando')
var tifalbot = new 
Commando.Client({
   owner: '532676682881040414'
});

tifalbot.registry.registerGroup('fun', 
'Fun');
tifalbot.registry.registerGroup('misc', 'Misc');
tifalbot.registry.registerDefaults();
tifalbot.registry.registerCommandsIn(__dirname 
+ '/commands');


tifalbot.on('ready',function(){
      console.log("Hello world!")
})

tifalbot.on('error', console.error);

tifalbot.login('NTMyNzAzOTM5MDQxNDI3NDYz.DxgkVg.0-Tb32Eolwy2akvFnTw1IXVjvFA')

