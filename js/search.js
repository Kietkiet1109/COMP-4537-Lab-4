function requestDefinition(){
    const xhr = new XMLHttpRequest();
    const word = document.getElementById("word").value
    const param = "/?word="+ word;
 
    document.getElementById("result").textContent = ""
    xhr.open("GET", endpoint + param, true)
    xhr.send()

    xhr.onreadystatechange = () =>{
        if (xhr.readyState === 4){
            const JSONObj = JSON.parse(xhr.response)
            let response = "";
            if(xhr.status == 200){
                if (JSONObj["word"] == undefined){
                    response = `${requestNum} ${JSONObj["requestNumber"]}<br>${JSONObj["message"]}`
                } else {
                    response = `${requestNum} ${JSONObj["requestNumber"]}<br>${JSONObj["word"]}: ${JSONObj["definition"]}`
                }
                document.getElementById("result").innerHTML = response
            } 
            else {
                response = `${requestNum} ${JSONObj["requestNumber"]}<br>${JSONObj["message"]}`
                document.getElementById("result").innerHTML = response
            } 
        } else{
            document.getElementById("result").innerHTML = serverErrorMessage;
        }
    }
}
