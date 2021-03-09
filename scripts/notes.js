//When the page first loads.
$(document).ready( function() {
    console.log("Ready!");
    var ctx = document.getElementById("notestext");
    var txta = sessionStorage.getItem("notesarea");
    document.getElementById("notestext").innerHTML = txta;

    var sessionID1 = sessionStorage.getItem("notesID"); 

    //console.log(sessionID1)
    //console.log(document.getElementById("sessionID").value)
    document.getElementById("notesessionID").value = sessionID1;
    console.log(document.getElementById("notesessionID").value)
    
});

function printNotes(){
    window.print();
}
