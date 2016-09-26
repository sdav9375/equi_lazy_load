var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var records = JSON.parse(xhr.responseText);
    var news = records['news'];

    // for (i=0; i < news.length; i ++) {
    //   console.log(news[i]['title']);
    //
    // };


    // for (var prop in news) {
    //   console.log(prop + ": " + news[prop]);
    // }

    // console.log(records['news']);
    var statusHTML = '<ul>';
    for (var i=0; i< news.length; i += 1) {
      statusHTML += '<li>';
      statusHTML += '<div class="newsitem b-lazy"><h3 class="title">' + news[i].title + '</h3>';
      statusHTML += '<h4>' + news[i].published + '</h4></div>';
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('headlines').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'http://www.stellarbiotechnologies.com/media/press-releases/json');
xhr.send();
