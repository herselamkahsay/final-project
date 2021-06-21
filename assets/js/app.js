document.getElementById("heroName").onkeyup = getData;

//superHero ID
let heroId = 0;
//function to get data
function getData() {

    var val = document.getElementById('heroName').value;
    var list = document.getElementById('auto-complete');
    clearList();

    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function () {

        // Success!
        var result = JSON.parse(xhrRequest.response);
        //getting all data()              
        var names = result.results;
        if (names == null) {
            clearList();
            console.log("not found");
        }
        else {
            for (var i of names) {
                var li = document.createElement('li');
                li.innerText = i.name; //property
                li.id = i.id;
                li.classList.add('list-group-item');
                li.addEventListener('click', function () {
                    heroId = this.id;
                    document.getElementById('heroName').value = this.innerText;
                    clearList();
                    document.getElementById('heroName').focus();
                    return;
                })
                var ul = document.getElementById('auto-complete').appendChild(li);

            }
        }
    }

    //XMLHTTPREQUEST

    //request.open('get', `https://superheroapi.com/api.php/4382711015094904/search/${this.state.name})` // MY EXTERNAL JSON URL
    xhrRequest.open('get', 'https://superheroapi.com/api.php/4382711015094904/search/' + val); // MY EXTERNAL JSON URL
    xhrRequest.send();

}
document.getElementById('heroName').addEventListener('keydown', function (ev) {
    if (ev.keycode == 13) {
        if (heroId == 0) {
            alert('no hero found! try from the list');

        } else {
            superHero();
        }
    }
});



//function to clear the list item from the list
function clearList() {
    var list = document.getElementById('auto-complete');
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild)
    }
}
//search button click event
document.getElementById('btn-search').addEventListener('click', showHero);
function showHero() {
    var name = document.getElementById('heroName').value;
    if (name == "") {
        alert("Enter the name");
    }
    else if (heroId == 0) {
        alert('hero not find try from the list');

    }
    else {
        window.open('superhero.html?id=' + heroId);

        //  window.open('superhero.html?id='+superHeroId, 'blank');
    }
}
document.getElementById('btn-favourite').addEventListener('click', function () {
    window.location.assign('favourite.html');
})

