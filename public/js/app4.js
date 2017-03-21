$('#app4').html(`
  <center>
  <div class="loader"></div> 
`);

setTimeout(function(){
  x();
},1000);

function x(){
$.ajax({
  url: "https://www.omdbapi.com//?i=tt1298650"

}).done(function(res){
  console.log(res);
  let html = `
  <center>
    <h1>${res.Title}</h1>
    <img src="${res.Poster}"/>
    <iframe width="560" height="445" src="https://www.youtube.com/embed/QQ_1ZZSNFuQ" frameborder="0" allowfullscreen></iframe><div id="right">
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
  <a target="_blank" href="img/bggggg1.jpg">
  <img src="img/bggggg1.jpg" alt="bggggg1.jpg" width="500" height="450">
  </a>
  </div>
</td>
<td>
<div class="gallery">  
  <a target="_blank" href="img/bggggg2.jpg">
    <img src="img/bggggg2.jpg" alt="bggggg2.jpg" width="500" height="450">
  </a>
  </td>
</tr>
<tr>
<table style="width: 70%">  
<td>
<center>
<div class="gallery">
  <a target="_blank" href="img/bggggg3.jpg">
    <img src="img/bggggg3.jpg" alt="bggggg3.jpg" width="500" height="450">
  </a>
</td>  
</div>
<br>
<td>
<div class="gallery">
  <a target="_blank" href="img/bggggg4.jpg">
    <img src="img/bggggg4.jpg" alt="bggggg4.jpg" width="500" height="450">
  </a>
</td>
</tr>
</center> 
</table>
  `;
  $('#app4').html(html);
});
}