$('#app1').html(`
  <center>
  <div class="loader"></div> 
`);

setTimeout(function(){
  x();
},1000);

function x(){
$.ajax({
  url: "https://www.omdbapi.com//?i=tt0325980"
}).done(function(res){
  console.log(res);
  let html = `
  <center>
    <h1>${res.Title}</h1>
    <img src="${res.Poster}"/>
    <iframe width="560" height="445" src="https://www.youtube.com/embed/naQr0uTrH_s" frameborder="0" allowfullscreen></iframe>
    </div>
    <div id="right">
    <h3>Plot: ${res.Plot}</h3>
    <h3>Director: ${res.Director}</h3>
    <h3>Year: ${res.Year}</h3>
    <h3>Writer: ${res.Writer}</h3>
    <h3>Actors: ${res.Actors}</h3>
<center>

<table style="width: 67%">  
<td><div class="gallery">
  <a target="_blank" href="img/bgg1.jpg">
  <img src="img/bgg1.jpg" alt="bgg1.jpg" width="500" height="450">
  </a>
  </div>
</td>
<td>
<div class="gallery">  
  <a target="_blank" href="img/bgg2.jpg">
    <img src="img/bgg2.jpg" alt="bgg2.jpg" width="500" height="450">
  </a>
  </td>
</tr>
<tr>
<table style="width: 70%">  
<td>
<center>
<div class="gallery">
  <a target="_blank" href="img/bgg3.jpg">
    <img src="img/bgg3.jpg" alt="bgg3.jpg" width="500" height="450">
  </a>
</td>  
</div>
<br>
<td>
<div class="gallery">
  <a target="_blank" href="img/bgg4.jpg">
    <img src="img/bgg4.jpg" alt="bgg4.jpg" width="500" height="450">
  </a>
</td>
</tr>
</center> 
</table>
  `;
  $('#app1').html(html);
});
}