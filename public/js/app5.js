$('#app5').html(`
  <center>
  <div class="loader"></div> 
`);

setTimeout(function(){
  x();
},1000);

function x(){
$.ajax({
  url: "https://www.omdbapi.com//?i=tt1790809"

}).done(function(res){
  console.log(res);
  let html = `
    <center>
    <h1>${res.Title}</h1>
    <img src="${res.Poster}"/>
    <iframe width="560" height="445" src="https://www.youtube.com/embed/Hgeu5rhoxxY" frameborder="0" allowfullscreen></iframe>
    <h3>Plot: ${res.Plot}</h3>
    <h3>Director: ${res.Director}</h3>
    <h3>Year: ${res.Year}</h3>
    <h3>Writer: ${res.Writer}</h3>
    <h3>Actors: ${res.Actors}</h3>
    <div id="right">
    </div>
    <center>
    <table style="width: 67%">  
<td><div class="gallery">
  <a target="_blank" href="img/bg1.jpg">
  <img src="img/bg1.jpg" alt="bg1.jpg" width="500" height="450">
  </a>
  </div>
</td>
<td>
<div class="gallery">  
  <a target="_blank" href="img/bg2.jpg">
    <img src="img/bg2.jpg" alt="bg2.jpg" width="500" height="450">
  </a>
  </td>
</tr>
<tr>
<table style="width: 70%">  
<td>
<center>
<div class="gallery">
  <a target="_blank" href="img/bg3.jpg">
    <img src="img/bg3.jpg" alt="bg3.jpg" width="500" height="450">
  </a>
</td>  
</div>
<br>
<td>
<div class="gallery">
  <a target="_blank" href="img/bg4.jpg">
    <img src="img/bg4.jpg" alt="bg4.jpg" width="500" height="450">
  </a>
</td>
</tr>
</center> 
</table>
  `;
  $('#app5').html(html);

});
}