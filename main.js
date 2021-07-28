var name_of_people=[];


function submit(){

    var GuestName=document.getElementById("newGuestName").value;

    name_of_people.push(GuestName);
   
    document.getElementById("display_guestlist").innerHTML=name_of_people;
   
    console.log(name_of_people);
    console.log(name_of_people.length);

}
function show(){

    var show_name_of_people=[];
    
   
       for(var i=0;i<name_of_people.length;i++)
    {
        show_name_of_people.push("<h4> " +name_of_people[i] + "</h4>");
        console.log(show_name_of_people[i]);
    }   
    
    document.getElementById("show_guestlist").innerHTML= show_name_of_people.join(" ");

}

function sorting(){
    name_of_people.sort();
    console.log(name_of_people);
    
   
    var sorted_guestList = [];

    for(var i=0;i<name_of_people.length;i++)
    {
        sorted_guestList.push("<h4> " +name_of_people[i] + "</h4>");
        console.log(sorted_guestList[i]);
    }   
    
    document.getElementById("display_sorted_guestlist").innerHTML= sorted_guestList.join(" ");

}

function search(){
 var s=document.getElementById("search_input").value;
 var found=0;
 var j;
 for(j=0;j<=name_of_people.length;j++){
        if(s==name_of_people[j]){
            found=found+1;
        }
    }

    document.getElementById("namesFound").innerHTML="name found " +found+"time/s"; 
    console.log("name found " +found+"time/s");
}