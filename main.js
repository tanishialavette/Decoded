var url = "https://api.airtable.com/v0/app6WgUj7dC9IKNWd/Projects?api_key=keyS5mMq95mwxiIXd";
let body=document.querySelector("body")
var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      //console.log(xhr.status);
      //console.log(xhr.responseText.record);
      result = JSON.parse(xhr.responseText); //formatting as json
      console.log(result)
    result.records.forEach(row => {
      console.log(row.fields.Text_EducationFact)  
      let h1=document.createElement("h1")
      h1.innerHTML=row.fields.Text_EducationFact
      body.append(h1)  
      });
   }};

xhr.send();