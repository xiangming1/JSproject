//reference 1: https://stackoverflow.com/questions/6012823/how-to-make-html-table-cell-editable
//reference 2:https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-6.php 
//reference 3: https://stackoverflow.com/questions/10686888/delete-last-row-in-table
let count = 0; //count is the variable that stores how many assignment unsubmitted.
let pointer = 0; // pointer is the variable that refer to the change of the final column's header
                 // it has three states, 0,1,2, each seperately refer to the "Percent Grade",""
                 //"Letter	Grade", and "4.0 Scale"
let assignmentCount; // assignmentCount is the variable that stores how many assignment has been submitted
                     // it used in the average grade calculation.


     
  
   

// the findAvg() function calculates the average grade
// and change the color of the average grade column when the grade is below 60
// it also assign the yellow color to the cell which is not submitted.
function findAvg() {
    
    count = 0;
    var tab = document.getElementById("table");
    var rows = tab.getElementsByTagName("tr"); //getting all the rows in the table
    for(var r = 1; r< rows.length;r++){
        var sum = 0;
        var averagegrade = 0;
        assignmentCount = 0;
        var tds = rows[r].getElementsByTagName("td");// getting all the cells
        // console.log(tds);
        for(var c=2; c<tds.length-1;c++){ 
            var currentvalue = tds[c].textContent;
            if(currentvalue === "-" ){
                tds[c].setAttribute("class", "withoutGrade");
                count++;
            }
            else if(parseInt(currentvalue)<0 || parseInt(currentvalue)>100 ||isNaN(currentvalue)){
                tds[c].textContent="-";
                tds[c].setAttribute("class","withoutGrade");
            }
            else if(parseInt(currentvalue)>=0 && parseInt(currentvalue)<=100 ){
                sum += parseInt(currentvalue) // if 0<current value <100, the sum increase 
                tds[c].setAttribute("class", "tdNumAlign");
                assignmentCount++;// assignment submitted
            }
        }

        averagegrade = Math.round(sum/assignmentCount) +"%"; // calculate the average of the submitted assignment
        var lasttd = tds[tds.length-1]; // deal with the last column
        lasttd.textContent = averagegrade;
        if(parseInt(averagegrade)>=0  && parseInt(averagegrade)<60){
           lasttd.setAttribute("class","lower60");//change the color of the average grade column 
                                                  //when the grade is below 60
        }
        else
        {
            lasttd.setAttribute("class","tdNumAlign");
        }
    }
    document.getElementById("assignmentsSub").innerHTML = "Number of Assignments not Submitted: " + count;
}



// this is the function that use pointer variable to change the last column between
//"Percent Grade",",""Letter	Grade", and "4.0 Scale"
function switchcolumn() {
        switch (pointer) {
            case 0:
                pointer = 1;
                lastcolumnconvert(pointer);
                break;
            case 1:
                pointer = 2;
                lastcolumnconvert(pointer);
                break;
            case 2:
                pointer = 0;
                lastcolumnconvert(pointer);
                break;
        }
    }

//this is the grade converter for the last column
function lastcolumnconvert(pointer){
     if(pointer ===1){
        var tab = document.getElementById("table");
        var heading = tab.getElementsByTagName("th");
        var lastcolumnheading = heading[heading.length-1];
        lastcolumnheading.textContent = "Average[Letter]";
        var rows = tab.getElementsByTagName("tr");
        for(var r = 1; r< rows.length;r++){
            var tds = rows[r].getElementsByTagName("td");
            var lasttd = tds[tds.length-1];
            var convertmark = parseInt(lasttd.textContent);
            // I hard code the part for the grade coverter
            // in short, {'A' : 93, 'A-' :  90, 'B+' :  87, 'B' :  83, 
            //'B-' :  80, 'C+' :  77, 'C' :  73, 'C-' :  70, 'D+' :  67, 'D' :  63, 'D-' :  60}
        
            if(convertmark>92 && convertmark<101 ){
                lasttd.textContent = "A";
            }
            else if (convertmark>89 && convertmark<93 ){
                lasttd.textContent = "A-";
            }
            else if(convertmark>85 && convertmark<91){
                lasttd.textContent = "B+";
            }
            else if(convertmark>82 && convertmark<87){
                lasttd.textContent = "B";
            }
            else if(convertmark>76 && convertmark<80){
                lasttd.textContent = "B-";
            }
            else if(convertmark>69 && convertmark<73){
                lasttd.textContent = "C+";
            }
            else if(convertmark>66 && convertmark<70){
                lasttd.textContent = "C";
            }
            else if(convertmark>62 && convertmark<67){
                lasttd.textContent = "C-";
            }
            else if(convertmark>59 && convertmark<63){
                lasttd.textContent = "D";
            }
            else if(convertmark>59 && convertmark<63){
                lasttd.textContent = "D+";
            }
            else if(convertmark>59 && convertmark<63){
                lasttd.textContent = "D-";
            }
            else{
                lasttd.textContent = "F";
            }
        }
     }
     else if(pointer===2){
        var tab = document.getElementById("table");
        var heading = tab.getElementsByTagName("th");
        var lastcolumnheading = heading[heading.length-1];
        lastcolumnheading.textContent = "Average[4.0]";
        var rows = tab.getElementsByTagName("tr");
        for(var r = 1; r< rows.length;r++){
            var tds = rows[r].getElementsByTagName("td");
            var lasttd = tds[tds.length-1];
            var convertmark = parseInt(lasttd.textContent);
            //it is the same as Average[Letter]
            if(convertmark>92 && convertmark<101 ){
                lasttd.textContent = 4.0;
            }
            else if (convertmark>89 && convertmark<93 ){
                lasttd.textContent = 3.7;
            }
            else if(convertmark>85 && convertmark<91){
                lasttd.textContent = 3.3;
            }
            else if(convertmark>82 && convertmark<87){
                lasttd.textContent = 3.0;
            }
            else if(convertmark>76 && convertmark<80){
                lasttd.textContent = 2.7;
            }
            else if(convertmark>69 && convertmark<73){
                lasttd.textContent = 2.3;
            }
            else if(convertmark>66 && convertmark<70){
                lasttd.textContent = 2.0;
            }
            else if(convertmark>62 && convertmark<67){
                lasttd.textContent = 1.7;
            }
            else if(convertmark>59 && convertmark<63){
                lasttd.textContent = 1.3;
            }
            else if(convertmark>59 && convertmark<63){
                lasttd.textContent = 1.0;
            }
            else if(convertmark>59 && convertmark<63){
                lasttd.textContent = 0.7;
            }
            else{
                lasttd.textContent = 0.0;
            }
        }
     }
     else if (pointer ===0){
        var tab = document.getElementById("table");
        var heading = tab.getElementsByTagName("th");
        var lastcolumnheading = heading[heading.length-1];
        lastcolumnheading.textContent = "Average [%]";
        findAvg();
     }
}


//*add row to the table  */
function addRow() {
    var tab = document.getElementById('table');
    let tr = tab.insertRow(-1);
    var heading = tab.getElementsByTagName("th");
    let numCols = heading.length;
    for (var col = 0; col < numCols; col++) {
        var tabCell = tr.insertCell(-1); // insert at end of row
        if (col === 0) {
            tabCell.innerHTML = `<td>Colin Baker</td>` ;
        } else if (col === 1){
            tabCell.innerHTML = `<td>143157680</td>`;
        }else if (col === numCols-1){
            tabCell.innerHTML = `<td class="finalmark" align="right"></td>`
        }
        else {
            tabCell.outerHTML =  `<td class="assignments" align="center" contenteditable="true" onkeyup="findAvg()"onfocus="this.textContent=''">-</td>`;
        };
    }
    

}
// add Column to the table
function addColumn() {
    
    var tab = document.getElementById('table');
    var rows = tab.getElementsByTagName("tr");
    rows[0].insertCell(7).outerHTML=`<th contenteditable="true"><h3>Assignment</h3></th>`;

    for(var r = 1; r< rows.length;r++){
        rows[r].insertCell(7).outerHTML = `<td class= "assignments" align="center" contenteditable="true" onkeyup="findAvg()"onfocus="this.textContent=''">-</td>`;
    }
 

}

// delete last row from the tble
function deleterow() {
        var table = document.getElementById('table');
        var rowCount = table.rows.length;
        table.deleteRow(rowCount -1);
    
}