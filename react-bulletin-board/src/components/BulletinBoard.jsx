 import ReactPost from './ReactPost'
 function BulletinBoard({question, answer}) {
  let faq = [
    {
      question:"Vad är tre fördelar med att använda React?",
      answer: "Det finns mycket positivt med react, de tre bästa sakerna skulle jag säga är att man återanvända kod väldigt ofta(kompnenter), Allt är även mer strukturerat med react så du vet vart allt ligger i mappstrukturen och sist men inte minst är att det är ett ramverk som du kan göra väldigt mycket med men är även ganska lätt att lära sig."
    },
    {
      question:"Vad betyder Single Page Application och vad skiljer det från en vanlig webbplats?",
      answer: "En Single Page Application är en webbplats som endast använder sig av en HTML-fil. Innehållet som visas på sidan renderas av JavaScript baserat på användarens olika val. En ”vanlig” webbplats navigeras genom att via länkar hoppa till olika HTML-sidor som i sin tur visar olika innehåll."
    },
    {
      question:"Vad är tre skillnader mellan React och Angular?",
      answer: "React är ett JavaScript-bibliotek medan Angular är ett ramverk baserat på Typescript. React används/backas av Facebook och Angular av Google. React är mycket mer flexibelt än Angular och React används till mycket större utsträckning än vad Angular gör."
    },
  ]
  return (
    <div>
      <h1 className='header'>BulletinBoard</h1>  
        {faq.map((fa, index) =>
         (<ReactPost key={index} fa ={fa}/>)
         )}
    </div>
  );
}

 export default BulletinBoard