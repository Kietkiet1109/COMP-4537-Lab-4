function sendDefinition() {
    const xhr = new XMLHttpRequest();
    const word = document.getElementById("word").value
    const definition = document.getElementById("definition").value
    
    document.getElementById("result").textContent = ""
    xhr.open("POST", endpoint, true)
    xhr.setRequestHeader("Content-Type", "application/json")
    
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            const JSONObj = JSON.parse(xhr.response)
            let response = ""
            if(xhr.status == 200){
                response = `${requestNum} ${JSONObj["requestNumber"]}<br>${JSONObj["message"]} ${JSONObj["word"]}`
            } 
            else if(xhr.status == 400) {
                response = `${requestNum} ${JSONObj["requestNumber"]}<br>${JSONObj["message"]}`
            } 
            else if(xhr.status == 409) {
                response = `${requestNum} ${JSONObj["requestNumber"]}<br>${JSONObj["message"]}`
            }
            document.getElementById("result").innerHTML = response  
        }
        else {
            document.getElementById("result").innerHTML = serverErrorMessage
        } 
    }
    
    xhr.send(JSON.stringify({
        word: word,
        definition: definition
    }))
}
