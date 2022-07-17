function talk(){  
  var know = {
    "Hi" : "Hello There! This is NexBot, Type !help for list of commands." ,
   "Who are you" : "Hello, NexBot Here! I am a prototype so i may have some mistakes.",  
   "How are you" : "Good :)",  
   "What can i do for you" : "Please Give us A Follow & Like.",  
   "Your followers" : "I have alot, I don't see why you would want to know this.",  
   "ok" : "Thank You So Much ",  
   "Bye" : "Okay! Will meet soon..",
   "!help" : "You can type 'Hi' 'Who are you' 'How are you' 'What can i do for you' 'Your followers' 'ok' 'Bye'",
   "!admin" : "NexBot is handled by @ad.zeroday",
   "!secret" : "<a href='secret.html'> Click on me and translate. </a>"
  };  
  var user = document.getElementById('userBox').value;  
   document.getElementById('chatLog').innerHTML = user + "<br>";  
  if (user in know) {  
   document.getElementById('chatLog').innerHTML = know[user] + "<br>";  
  }else{  
   document.getElementById('chatLog').innerHTML = "As a GenZ, I would like to announce, *drumroll* i don't know this. <br>";  
  }  
 }