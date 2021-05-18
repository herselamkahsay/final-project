fetch('https://superheroapi.com/api.php/4382711015094904/search/')
.then(res=> res.json())
.then(data=>console.log(data))
getData=document.getElementById("superHeroName")
function getData(){
    var val = document.getElementById('superHeroName').value;
    var list = document.getElementById('autoComplete').value;
    if(val=names){

    }
}



var ul = document.getElementById('superHeroName');
const url = 'https://superheroapi.com/api.php/4382711015094904/search/';

fetch('https://superheroapi.com/api/4382711015094904/search/')
var data = JSON.parse(request.response);
//getting all dat()            
var names = data.results;
if(names == null){
    clearList();
    console.log("not found");
}
else {
    for(var i of names){
        var li = document.createElement('li');
        li.innerText = i.name; //property
        li.id = i.id;
        li.classList.add('listGroupItem');
        li.addEventListener('click', function() {
            superHeroId=this.id;
            document.getElementById('superHeroName').value=this.innerText;
            clearList();
            document.getElementById('superHeroName').focus();
            return;
        })
        var ul = document.getElementById('autoComplete').appendChild(ul);

    }
}

//request.open('get', `https://superheroapi.com/api/4382711015094904/search/${this.superHeroId.val}`) // MY EXTERNAL JSON URL
//request.send();
    


    //function to clear the list item from the list
    function clearList(){
        const list=document.getElementById('autoComplete');
        while(list.hasChildNodes()) {
            list.removeChild(list.firstChild)
        }
    }
//search button click event
        document.getElementById('btnSearch').addEventListener('click',showHero);
        function showHero(){
          var name= document.getElementById('btnSearch').value;
            if(name="") {
                alert("Enter the name");
            }
            else if(heroId==0) {
                alert('hero not find try from the list');

            }
            else {
                window.open('superhero.html?id='+heroId,'blank');
            }
        }