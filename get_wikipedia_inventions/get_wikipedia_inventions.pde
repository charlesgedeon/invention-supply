import http.requests.*;

String[] category = {};
String[] inventions = {};
String[] all_inventions = {};
int counter = 0;
public void setup() 
{
  size(400, 400);
  smooth();

  getCategory("Category:Inventions_by_country");
  getCategory("Category:Machines");

  getPagesOfList("Category:Ancient_inventions");

  for (int i = 0; i <category.length; i++) {
    getPagesOfList(category[i]);
    println("Categories: "+category.length+" | "+i);
  }
  for ( int j = 6; j < inventions.length; j++) {
    getParagraph(inventions[j]);
    println("Inventions: "+inventions.length+" | "+j);
  }
  saveStrings("data/inventions.txt", all_inventions);
  exit();
}

void getCategory(String title) {
  String link = "https://en.wikipedia.org/w/api.php?format=json&action=query&cmlimit=max&list=categorymembers&cmtitle="+title;
  GetRequest get = new GetRequest(link);
  get.send();
  JSONObject json = parseJSONObject(get.getContent());
  json = json.getJSONObject("query");
  JSONArray country_list = json.getJSONArray("categorymembers");

  for (int i = 2; i < country_list.size(); i++) {
    json  = country_list.getJSONObject(i); 
    String country = json.getString("title");
    country = country.replaceAll(" ", "_");
    category = append(category, country);
  }
}


void getPagesOfList(String category) {
  try {
    String link = "https://en.wikipedia.org/w/api.php?format=json&action=query&cmlimit=max&list=categorymembers&cmtitle="+category;
    GetRequest get = new GetRequest(link);
    get.send();
    JSONObject json = parseJSONObject(get.getContent());
    json = json.getJSONObject("query");
    JSONArray invention_list = json.getJSONArray("categorymembers");

    for (int i = 0; i < invention_list.size(); i++) {
      json  = invention_list.getJSONObject(i); 
      String invention = json.getString("title");
      invention = invention.replaceAll(" ", "_");
      inventions = append(inventions, invention);
      counter++;
    }
  }
  catch(Exception e) {
  }
}

void getParagraph(String title) {
  try {
    String link = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+title;
    GetRequest get = new GetRequest(link);
    get.send();
    JSONObject json = parseJSONObject(get.getContent());
    json = json.getJSONObject("query").getJSONObject("pages");
    String[] id = split(json.toString(), '"');
    json = json.getJSONObject(id[1]);
    String headline = json.getString("title");
    String extract = json.getString("extract");
    all_inventions = append(all_inventions, "##"+headline);
    all_inventions = append(all_inventions, extract);
    all_inventions = append(all_inventions, " ");
  }
  catch(Exception e) {
  }
}