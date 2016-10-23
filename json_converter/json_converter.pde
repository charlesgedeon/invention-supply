
JSONArray values;
int id_count;

void setup() {
  
  values = new JSONArray();
  
  for (int n=1; n<2000; n++) {
    String lines[] = loadStrings("data/inventions"+n+".txt");
    String collection = join(lines, "");
    collection = collection + "## ";
    
    String[] split = split(collection, "##");

    for (int i=0; i<split.length-1; i++) {
  
      if (split[i].length() > 2 && split[i].length() < 40) {
        if (split[i+1].length() > 20) {  
          id_count++;
          println(id_count);     
         
          JSONObject json = new JSONObject();
          
          json = new JSONObject();
          json.setInt("id",id_count);
          json.setString("head", split[i]);
          json.setString("text", split[i+1]);
          json.setInt("num", 0);
          
          values.setJSONObject(id_count, json);
        }
      }
    }
     saveJSONArray(values, "json/invention"+n+".json");
  }
 
}