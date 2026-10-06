var div=document.createElement("div");
var loadfunction = window.onload;
const url = new URL(window.location.href);
const word = url.searchParams.get('q')?.replace("definition", "").trim();


(function() {                                   //creates a function
   // const url = new URL(window.location.href); //defines a constant called url to be the current link of your Google page

    if (url.pathname === '/search') { //this checks if your url is an inquiry url, marked by /search. We don't need to change anything if it isn't
        const udm = url.searchParams.get ('udm'); //this asks if there is an udm=14 present

        if (udm === null) { //this says, if it is not present then...
            url.searchParams.set('udm', '14'); //this sets it to udm 14, which is basically old google
            window.location.replace(url.toString()); //this replaced the url
        }


        window.onload = function(event){
            div.style.whiteSpace = "pre-wrap"
                    if (url.searchParams.get('q')?.includes("definition")) {
                   document.getElementById("center_col").prepend(div);
                   fetch('https://freedictionaryapi.com/api/v1/entries/en/' + word)
                       .then(response => response.json())
                       .then(data => {
                           const p1 = data.word
                           const p2 = data.entries[0].senses[0].definition;
                           const p3 = data.entries[0].senses[0].examples;
                           const p4 = data.entries[0].partOfSpeech;
                           const p42 = data.entries[0].quotes ;


                           div.innerHTML =  `<div id="Dictionary Box" >
<p> <a class="word-title"> Dictionary  <a> </a> 
 Information used from <a href="https://freedictionaryapi.com/"> freedictionaryapi.com </a>
 <p class="main-word">${p1.charAt(0).toUpperCase() + p1.slice(1)} </p>
<p class="interjection"> ${p4.charAt(0).toUpperCase()+p4.slice(1)}  </p>
 Definition: ${p2}
 </p>
 </div>`;
                       })

                }

            if(loadfunction) loadfunction(event);
}



    }
    }

)();