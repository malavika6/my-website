function formvalidation(){
    let submission;

    var name = document.getElementById('Name').value.trim();
    var Email = document.getElementById('Email').value.trim();
    var phone = document.getElementById('Phone').value.trim();
    var msg = document.getElementById('Message').value.trim();


    if(name ==="" || Email ==="" || phone ==="" || msg ==="")
    {
        submission=false;
        
        alert('Please fill all fields');
        
    }
    else if(!/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+).([a-z]+)?$/.test(Email)){
        alert('Please enter a valid Email adress');

    
        submission=flase;
    }
    else if(!/^\d+$/.test(phone)){
        alert('Please enter a valid Phone number');

        submission=false;
    }
    
    return submission;
}