function change(){
    console.log("btn clicked ");
}
function change(){
    
// step 1
var xhttp = new XMLHttpRequest();
// step 2
xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
// step 3
xhttp.send();
//step 4
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText)
        var data =JSON.parse( this.responseText)
        let val ="";
        for (let i=0; i<data.length;i++) {
            val +=`
            <tr>
            <td>${data[i].name}</td>
            <td>${data[i].username}</td>
            <td>${data[i].address.city}</td>
            </tr>`
            document.getElementById('td').innerHTML=val
            
        }
    }
}
}