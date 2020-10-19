let type = "nature";

YOUR_ACCESS_KEY = "B7bBK_HQ7SrjPEPn27vGSyV2beNKGVcPaT45mqxvKRw";
let imagesMarkup = '';

function clicker(headingText) {
//    document.querySelectorAll("#imagestype > a").forEach(function(el)
//    {
//        el.classList.remove("selected");
//    });
//
//    document.querySelector(`#imagestype > a.${headingText.toLowerCase()}`).classList.add("selected");

    

    document.querySelector('#header > h2').innerHTML = headingText;

    category = headingText.toLowerCase();
	type = category;
    fetcher(type);
}


async function fetcher(type)
{    imagesMarkup = "";
	 document.querySelector("#imagescontainer").innerHTML = "";
	 fetch(
    `https://api.unsplash.com/search/photos?client_id=e72d3972ba3ff93da57a4c0be4f0b7323346c136b73794e2a01226216076655b&query="${type}"`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data.results);
      let searchResults = data.results
        .map(searchResults => {
          return (imagesMarkup += `<img src="${searchResults.urls.small}">`);
        })
       document.getElementById("imagescontainer").innerHTML = imagesMarkup;
    });
}

fetcher(type);

function musicClicked(){
    clicker("Music");
}

function natureClicked(){
    clicker("Nature");
}

function tourismClicked(){
    clicker("Tourism");
}

function sportsClicked(){
    clicker("Sports");
}
function foodClicked(){
    clicker("Food");
}
