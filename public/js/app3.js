$('#app3').html(`
  <center>
  <div class="loader"></div> 
`);

setTimeout(function(){
  x();
},1000);

function x(){
$.ajax({
  url: "https://www.omdbapi.com//?i=tt0449088"

}).done(function(res){
  console.log(res);
  let html = `
  <center>
    <h1>${res.Title}</h1>
    <img src="${res.Poster}"/>
    <iframe width="560" height="445" src="https://www.youtube.com/embed/HKSZtp_OGHY" frameborder="0" allowfullscreen></iframe><div id="right">
   <div id="right">
    </div>
    <h3>Plot: ${res.Plot}</h3>
    <h3>Director: ${res.Director}</h3>
    <h3>Year: ${res.Year}</h3>
    <h3>Writer: ${res.Writer}</h3>
    <h3>Actors: ${res.Actors}</h3>
    <center>

    <table style="width: 67%">  
<td><div class="gallery">
  <a target="_blank" href="img/bgggg1.jpg">
  <img src="img/bgggg1.jpg" alt="bgggg1.jpg" width="500" height="450">
  </a>
  </div>
</td>
<td>
<div class="gallery">  
  <a target="_blank" href="img/bgggg2.jpg">
    <img src="img/bgggg2.jpg" alt="bgggg2.jpg" width="500" height="450">
  </a>
  </td>
</tr>
<tr>
<table style="width: 70%">  
<td>
<center>
<div class="gallery">
  <a target="_blank" href="img/bgggg3.jpg">
    <img src="img/bgggg3.jpg" alt="bgggg3.jpg" width="500" height="450">
  </a>
</td>  
</div>
<br>
<td>
<div class="gallery">
  <a target="_blank" href="img/bgggg4.jpg">
    <img src="img/bgggg4.jpg" alt="bgggg4.jpg" width="500" height="450">
  </a>
</td>
</tr>
</center> 
</table>
  `;
  $('#app3').html(html);
});
}
