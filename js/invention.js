var inventionData;

$.ajax("https://github.com/charlesgedeon/invention-supply/blob/master/get_wikipedia_inventions/data/inventions.json", {
  type: "GET",
  dataType: "json",
  success: function(data) {
    inventionData = data;
  },
  error: function(req, status, err) {
    console.error("Something went wrong! Status: %s (%s)", status, err);
  }
});
for(var i = 0; i < inventionData.length; i++) {
    console.log(inventionData[i]);
    $('.invention-title').append(inventionData[i].head + '<br />');
}
for(var i = 0; i < inventionData.length; i++) {
    console.log(inventionData[i]);
    $('.invention-content').append(inventionData[i].text + '<br />');
}
