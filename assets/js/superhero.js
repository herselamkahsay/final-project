// -----shuperhero details or informations
var xhrRequest = new XMLHttpRequest();
const queryString = window.location.search;// what is the difference between document.location. search and window.location.search
const urlParams = new URLSearchParams (queryString);
var heroId = urlParams.get('id');
let heroObject=null;
xhrRequest.onload= function (){
    var result=JSON.parse(xhrRequest.response);
    //grabing all available data
    var names=result;
    heroObject=names;
    fillHeroData(heroObject);
    document.getElementById('heroImage').attributes.src=heroObject.image.url;
} 
xhrRequest.open('get', 'https://superheroapi.com/api.php/4382711015094904/'+heroId); // MY EXTERNAL JSON URL
xhrRequest.send();

//function to access or fill hero data
function fillHeroData(data){
    var img = document.getElementById('heroImage');
    img.setAttribute('src',data.image.url);
    document.getElementById('heroName').innerText=data.name;
    var powers = data.powerstats;
    addPowers(powers);
    var otherNames = data.biography.aliases;
    aliases(otherNames);
    biography(data.biography);
    var connections = data.connections["groupAffiliation"];
    document.getElementById('connections').innerText='connections : '+connections;
    var publisher = document.createElement('span');
    publisher.innerText = data.biography.publisher;
    publisher.style.fontFamily='sans-serf';
    publisher.style.fontSize='1.3rem';
    document.getElementById('moreInfo').appendChild(publisher);
}
/*function addPowers(powers){
    for(const [key,value] of object.entries(powers)){
        var p = document.createElement('p');
        p.innerText=`${key}:${value}`;
        p.classList.add('details')
        document.getElementById('heroDetails').appendChild(p);
    }
}*/
function biography(bio){
    console.log(bio);
    for(const [key, value]of object.entries(bio)){
        var p = document.createElement('p');
        p.innerText= `${key}: ${value}`;
        p.style.textTransform='capitalize'
        document.getElementById('occupation').appendChild(p);

    } 
}
function aliases(otherNames){
    for(let i=0;i<otherNames.length;i++){
        var span=document.createElement('span');
        if(otherNames.length==1){
            span.innerText=' ( '+ otherNames[i]+' )';
            span.style.textTransform='capitalize'
            document.getElementById('aliases').appendChild(span);
            break;
        }if(i==0){
            span.innerText=' ( '+ otherNames[i]+' , ';
        }else if (i==otherNames.length+1){
            span.innerText=otherNames[i]+' ) ';
        }else{
            span.innerText=otherNames[i]+' , ';
        }
        span.style.textTransform='capitalize'
        document.getElementById('aliases').appendChild(span);
        }
    }
    function AddPowers(powers){
        for(const [key,value] of object.entries(powers)){
            var p = document.createElement('p');
            p.innerText=`${key}:${value}`;
            p.classList.add('details')
            document.getElementById('heroDetails').appendChild(p);
        }
    }

document.getElementById('btnAddFav').addEventListener('click',addToFavourite);
function showToastMessage(added){
    var message;
    if(added){
        message="added superhero to favourites successfully"
    }
    else{
        message="superhero already added"
    }
    var elem = document.getElementById("msgContainer");
    elem.innerText=message;
    elem.style.display='block';
    setTimeout(function(){
        elem.style.display='none';
    },1300)
}

//function to add favourite
function addToFavourite(){
    let heroName = heroObject.name;
    let heroImage = heroObject.image;
    var hero = {
        id:heroId,
        name: heroName,
        image: heroImage.url
    }

//acces and push data
var storedNames = JSON.parse(localStorage.getItem("names") || "[]");
if(storedNames==null){
    var names = [];
    names.push(hero);
    window.localStorage.setItem("names", JSON.stringify(names));
    showToastMessage(true);

}
else{
    var res = containsObject(heroId,storedNames);
    console.log(res);
    if(!res){
        storedNames.push(hero);
        window.localStorage.setItem("names", JSON.stringify(storedNames));
        showToastMessage(true);
    }else{
        showToastMessage(false);
    }
}
console.log(storedNames);
}

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
    window.location.assign('favourite.html');
})
  