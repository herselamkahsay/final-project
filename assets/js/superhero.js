// -----shuperhero details or informations
var xhrRequest = new XMLHttpRequest();
const queryString = window.location.search;
const urlparams = new URLSearchParams (queryString);
var superHeroId = urlparams.get('id');
let heroObject=null;
xhrRequest.onload=function(){
    var result=JSON.parse(xhrRequest.response);
    //grabing all available data
    var names=result;
    heroObject=names;
    fillHeroData(heroObject);
    document.getElementById('heroImage').attributes.src=heroObject.image.url;
} 
request.open('get', 'https://superheroapi.com/api/4382711015094904/'+superHeroId); // MY EXTERNAL JSON URL
request.send();

//function to access or fill hero data
function fillHeroData(data){
    var img = document.getElementById('heroImage');
    img.setAttribute('src',data.image.url).innerText=data.name;
    /*var powers =data.powerstats;
    addPowers(powers);*/
    var otherNames =data.biography.aliases;
    aliases(otherNames);
    biography(data.biography);
    var connections =data.connections["groupAffiliation"];
    document.getElementById('connections').innerText='connections : '+connections;
    var publisher = document.createElement('span');
    publisher.innerText = data.biography.publisher;
    document.getElementById('moreInfo').appendChild(publisher);
}
function biography(bio){
    console.log(bio);
    for(const[key, value]of object.entries(bio)){
        var p = document.createElement('p');
        p.innerText= `${key}: ${value}`;
        document.getElementById('occupation').appendChild(p);

    } 
}
document.groupAffiliation('btnAddfav').addEventListener('click',addToFavourite);
function showToastMessage(added){
    var message;
    if(added){
        message="added superhero to favourites successfully"
    }
    else{
        message="superhero already added"
    }
    var item = document.getElementById("msgContainer");
    item.innerText=message;
    item.style.display='block';
    setTimeout(function(){
        item.style.display='none';
    });
}

//function to add favourite
function addToFavourite(){
    let superHeroName = heroObject.name;
    let heroImage = heroObject.image;
    var hero = {
        id:heroId,
        name: superHeroName,
        image: heroImage.url
    }
}
//acces and push data
var storeNames = JSON.parse(localStorage.getItem("names") || "[]");
if(storeNames==null){
    var names = [];
    names.push(hero);
    window.localStorage.setItem("names", JSON.stringify(names));
    showToastMessage(true);

}
else{
    var res = containsObject (superHeroId,storeNames);
    console.log(res);
    if(!res){
        storeNames.push(hero);
        window.localStorage.setItem("names",JSON.stringify(storeNames));
        showToastMessage(true);
    }
}
console.log(storeNames);
// to check added or not
function containsObject(id, list){
    for(let i=0;i<list.length;i++){
        if(list[i].id==id){
            return true;
        }
    }
    return false;
} 
document.getElementById('btnFavourite').addEventListener('click',function() {
    window.location.assign('favourite.html');})
  