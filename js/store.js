function sendDefinition(){
    const xhr = new XMLHttpRequest();
    const word = document.getElementById("word").value
    const definition = document.getElementById("definition").value
    if(word != "" && isNaN(word) && definition != "" && isNaN(definition)){
        document.getElementById("error").textContent = ""
        xhr.open("POST", "", true)
        xhr.setRequestHeader("Content-Type", "application/json")
        
        xhr.onreadystatechange = () =>{
            if (xhr.readyState === 4){
                if(xhr.status == 200){
                    const JSONObj = JSON.parse(xhr.response)
                    let custom_response = requestNum + JSONObj["numRequests"] + space + JSONObj["message"].replace("Word", word);
                    document.getElementById("definition").value = JSONObj["message"].replace("Word", word)
                    document.getElementById("error").textContent = custom_response 
                }
            } 
        }
      
        xhr.send(JSON.stringify({
            word: word,
            definition: definition
        }))

    } else {
        if(word == "" || definition == "") {
            document.getElementById("error").textContent = emptyStringErrorMessage
        }
        else {
            document.getElementById("error").textContent = numberErrorMessage
        }
    }   
}
