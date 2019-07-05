$(document).ready(function() {
    $('#add_form').submit(function() {
        event.preventDefault()
    })
    performGetRequest1();
})


function performGetRequest1(){
    var resultElement = document.getElementById('tableResult1');
    resultElement.innerHTML = "";
    console.log("hello bro")

    axios.get('https://cors-anywhere.herokuapp.com/http://35.192.85.180/study')
     .then(function(response){
         console.log("sukses dapat data")
         response.data.forEach(studylist => {
            resultElement.innerHTML += generateSuccessTableOutput(studylist);
         })
         
     })
     .catch(function(error){
         resultElement.innerHTML = generateErrorHTMLOutput(error);
     })
}

function generateSuccessHTMLOutput(response){
    return '<h4>Result: </h4>' +
            '<h5>Data: </h5>' +
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
}

function generateSuccessTableOutput(response){
    return '<tr> <td>' + response.subject + '</td>'+
                '<td>' + response.name + '</td>'+
                '<td>' + response.description + '</td>'+
                '<td>' + response.date.substring(0,10) + '</td>' +
            '</tr>'

}

function createNewStudyList () {
    let inputSubject = $('#inputSubject').val();
    let inputName = $('#inputName').val();
    let inputDesc = $('#inputDesc').val();
    // console.log('add new', inputSubject, inputName, inputDesc)


    axios.post('https://cors-anywhere.herokuapp.com/http://35.192.85.180/study', {subject: inputSubject, name: inputName, description: inputDesc})
        .then(function(response){
            // console.log("sukses add data")
            performGetRequest1();
            $('#inputSubject').val('');
            $('#inputName').val('');
            $('#inputDesc').val('');
            document.getElementById("addNotif").innerHTML = '<p> Success</p>'
        })
        .catch(function(error){
            // console.log("error add data")
            resultElement.innerHTML = generateErrorHTMLOutput(error);
            document.getElementById('addNotif').innerHTML = '<p> Fail</p>'
        })
}
// function getText (
//     if () {
        
//     }
// )
