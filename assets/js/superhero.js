// -----shuperhero details or informations
var xhrRequest = new XMLHttpRequest();
const queryString = window.location.search;
const urlparams = new URLSearchParams (queryString);
var heroId = urlparams.get('id');

