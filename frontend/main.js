window.addEventListener('DOMContentLoaded', (event => {
    getVisitCount();
}))
const functionApiUrl = 'https://getresumecounter-hf.azurewebsites.net/api/GetResumeCounter?code=bONyzJU6NN07QHt2i0VJl78ncJAQlwlO9FFgYFcQwbAgAzFuDyG__g=='
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30; 
    fetch(functionApiUrl).then(response =>{
        return response.json()
    }).then(response =>{
        console.log("Website called function API.")
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error)
    });
    return count
}