const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false }) =>{
   if(uppercase==true){
      text= text.toUpperCase()
   }
   if(reverse == true){
      text= [...text].reverse().join('');
   }
   if(removeSpecialChars == true){
      text = text.replace(/[^a-zA-Z0-9\s]/g, '');
   }
   return text
  } 

  const textDoZmiany = "Jakis tekst do zmiany!!!!"

  const textZmieniony = processText(textDoZmiany,{uppercase:false, reverse:false ,removeSpecialChars:true})
  console.log(textZmieniony)