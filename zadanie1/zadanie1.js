const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) =>{
   if(uppercase==true){
      text.toUpperCase()
   }
   if(reverse == true){
      text= [...text].reverse().join('')
   }
   if(removeSpecialChars == true){
      text = text.replace(,"")
   }
   return text
  } 

  const textDoZmiany = "Jakis tekst do zmiany!!!!"

  const textZmieniony = processText(textDoZmiany,{uppercase:true, reverse:false,removeSpecialChars:true})
  console.log(textZmieniony)