// F U N C T I O N S

function usrChoice(array,a){
  array.push(a)
}

function generateMessage(day,date,dys){
  const message = document.getElementById('message')
  var messageToSent = "<h1>Twoja wiadomość:</h1>"

  messageToSent+="Przesyłam moją dyspozycję na okres "+date[0]+" - "+date[6]+"</br>"
  for(i=0;i<7;i++){messageToSent+=day[i]+" "+date[i]+" - "+dys[i]+"</br>"}
  messageToSent+="Michał Kowalski"

  message.innerHTML = messageToSent
}

function showSelectedDates() {
  // Tworzymy nowe obiekty dat z podanych dat początkowej i końcowej
    const start = new Date(document.getElementById('startDate').value);
    const end = new Date(document.getElementById('endDate').value);
    const tableContent = document.getElementById('table-content')
  
    // Sprawdzamy, czy daty są poprawne
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      console.log("Nieprawidłowe daty");
      return;
    }
  
    // Tworzymy tablicę, do której będą dodawane wszystkie daty z podanego okresu
    
  
    // Pętla, która dodaje wszystkie daty między datą początkową a końcową do tablicy
    while (start <= end) {
      dates.push(new Date(start));
      start.setDate(start.getDate() + 1);
    }
  
    // Wyświetlamy wszystkie daty z tablicy w tabeli
    var table = "<table><tr>"
    for(let i = 0; i<dates.length;i++){
          if(dates[i].getDate()<10&&dates[i].getMonth()<10){
            table+="<td>0"+dates[i].getDate()+"."+"0"+(dates[i].getMonth()+1)+"</td>"
            datesToMessage.push("0"+dates[i].getDate()+".0"+(dates[i].getMonth()+1))
          }
          else if(dates[i].getMonth()<10){
            table+="<td>"+dates[i].getDate()+".0"+(dates[i].getMonth()+1)+"</td>"
            datesToMessage.push(dates[i].getDate()+".0"+(dates[i].getMonth()+1))
          }
          else{
            table+="<td>"+dates[i].getDate()+"."+(dates[i].getMonth()+1)+"</td>"
            datesToMessage.push(dates[i].getDate()+"."+(dates[i].getMonth()+1))
          }
        }
        table+="<tr>"
      for(dayName=0; dayName<7; dayName++){table+="<td>"+week[dayName]+"</td>"}
      table+="</tr>"

      table+=("<tr class='shifts'>")
      for(dayName=0; dayName<7; dayName++){
      table+=("<td>")
      for(i=0;i<4;i++){table+="<button class='button-87' onclick='usrChoice(dyspo,zmiany["+i+"])' type='button' id='"+week[dayName]+"' value='"+zmiany[i]+"'>"+zmiany[i]+"</button><br>"}
      table+=("</td>")
      }
            
      table+="<td><button class='button-87' type='button' onclick='generateMessage(week, datesToMessage, dyspo)'>Generuj</button></td></tr></table>"

      tableContent.innerHTML = table
}

// A R R A Y S

var week= ['Piątek', 'Sobota', 'Niedziela', 'Poniedziałek', 'Wtorek', 'Środa','Czwartek']
var zmiany = ['1 zmiana','2 zmiana','Off','C']
var datesToMessage=[]
var dyspo=[]
var dates = [];
