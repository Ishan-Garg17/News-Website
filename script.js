console.log("Hello World");

const api_key = '80feb5800c3c4b9e8ef1f02b88ddb55d'

//GET REQUEST
 xhr = new XMLHttpRequest();

 xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`,true);

 xhr.onload =function(){
     object = JSON.parse(this.responseText)
     array=object.articles;
     var string ="";
     console.log(array);
     container = document.getElementById('container');
     array.forEach(element => {
         string += `<div class="card my-5">
         <img
           src=${element.urlToImage}
           class="card-img-top"
           alt="image not present"
         />
         <div class="card-body">
           <h5 class="card-title">${element.title}</h5>
           <p class="card-text">
             ${element.content}
           </p>
           <a href="${element.url}" class="btn btn-primary read">Read More</a>
         </div>
       </div>`
     });
     container.innerHTML = string;
 }
 xhr.send();


