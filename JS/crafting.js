function aken(evt, toode) {
    // Määrab muutujad
    var i, tabcontent, tablinks;
  
    // Otsib kõik "tabcontent" klassid üles ja peidab need
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Otsib kõik "tablinks" klassi elemendid ja eemaldab klassi "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Näitab vajaminevat tab'i ja lisab selle nupule "active" klassi
    document.getElementById(toode).style.display = "block";
    evt.currentTarget.className += " active";
} 

//  https://www.w3schools.com/howto/howto_js_tabs.asp