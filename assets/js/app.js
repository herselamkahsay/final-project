 document.getElementById("superHeroName").onkeyup=getData;

//superHero ID
let superHeroId=0;
//function to get data
function getData() {

    var val = document.getElementById('superHeroName').value;
    var list = document.getElementById('autoComplete');
    clearList();

   var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function() {
      
        // Success!
            var result = JSON.parse(xhrRequest.response);
            //getting all dat()              
            var names = result.results;
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
        }

//XMLHTTPREQUEST

//request.open('get', `https://superheroapi.com/api.php/4382711015094904/search/${this.state.name})` // MY EXTERNAL JSON URL
request.open('get', 'https://superheroapi.com/api.php/4382711015094904/search/'+ val); // MY EXTERNAL JSON URL
request.send();

    }



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
            else if(superHeroId==0) {
                alert('hero not find try from the list');

            }
            else {
                window.open('superhero.html?id='+superHeroId,'blank');
            }
        }
//document.getElementById('btnFavourite').addEventListener('click',function() {
   // window.location.assign('favourite.html');})

