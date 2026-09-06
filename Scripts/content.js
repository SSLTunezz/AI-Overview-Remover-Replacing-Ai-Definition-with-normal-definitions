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
                           const p1 = data.word;
                           const p2 = data.entries[0].senses[0].definition;
                           const p3 = data.entries[0].senses[0].examples;
                           div.innerText = `Word: ${p1}\nDefinition: ${p2}\nExample: ${p3}`;
                       })

                }

            if(loadfunction) loadfunction(event);
}



    }
    }

)();