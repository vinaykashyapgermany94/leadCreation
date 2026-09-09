console.log('Yay!! I can access the js file');



let inputEntries = document.addEventListener('change', (evt)=>{
    console.log('evt.target.id :'+evt.target.id);
    console.log('evt.target.value :'+evt.target.value);

    if(evt.target.id == "first_name")
    {
        let firstNameValue = evt.target.value;
        if(firstNameValue == '')
        {
            console.log('firstNameElement :'+firstNameElement);
        }//end of if(firstNameValue == '')    
    }//end of if(evt.target.id == "first_name")    
});

let submitEvent = document.addEventListener('submit',(evt)=>{

    let formElement = document.getElementById('webToLeadForm');
    let isValid = true
    evt.preventDefault();
    let firstNameElement = document.querySelector('#first_name');
    let lastNameElement = document.querySelector('#last_name');
    let emailElement = document.querySelector('#email');
    let startDateElement = document.querySelector('.start_date');

    let firstNameErrorDivElement = document.getElementById('firstNameValidation');
    let lastNameValidationElement = document.getElementById('lastNameValidation');    
    let emailValidationElement = document.getElementById('emailValidation');

    console.log('firstNameElement :'+firstNameElement.value);
    console.log('lastNameElement :'+lastNameElement.value);

    if(firstNameElement.value == '')
    {
        isValid = false;
        let firstNameErrorElement = document.createElement('p');
        firstNameErrorElement.innerText = 'First Name is empty. Please enter a value';
        if(firstNameErrorDivElement.firstChild != undefined)
        {
            firstNameErrorDivElement.replaceChild(firstNameErrorElement,firstNameErrorDivElement.firstChild);
        }   
        else
        {
            firstNameErrorDivElement.appendChild(firstNameErrorElement);
        }     
    }//end of if(firstNameElement.value == '') 
    else
    {
        if(firstNameErrorDivElement.firstChild != undefined)
        {
            firstNameErrorDivElement.removeChild(firstNameErrorDivElement.firstChild);
        }
    }      

    if(lastNameElement.value == '')
    {
        isValid = false;
        let lastNameErrorElement = document.createElement('p');
        lastNameErrorElement.innerText = 'Last Name is empty. Please enter a value';

        if(lastNameValidationElement.firstChild != undefined)
        {
            lastNameValidationElement.replaceChild(lastNameErrorElement, lastNameValidationElement.firstChild);
        }   
        else
        {
            lastNameValidationElement.appendChild(lastNameErrorElement);
        }          
    }//end of if(lastNameElement.value == '')  
    else
    {
        if(lastNameValidationElement.firstChild != undefined)
        {
            lastNameValidationElement.removeChild(lastNameValidationElement.firstChild);
        }        
    }     

    if(emailElement.value != '')
    {
        let emailValue = emailElement.value;
        if(emailValue.indexOf('@') == -1 && emailValue.indexOf('.') == -1)
        {
            isValid = false;

            let emailErrorElement = document.createElement('p');
            emailErrorElement.innerText = 'Please enter a valid email address.';

            if(emailValidationElement.firstChild != undefined)
            {
                emailValidationElement.replaceChild(emailErrorElement, emailValidationElement.firstChild);
            }    
            else
            {
                emailValidationElement.appendChild(emailErrorElement);
            }         
        }//end of if(emailValue.indexOf('@') == -1 && emailValue.indexOf('.') == -1)  
    }//end of if(emailElement.value.indexOf('@') == -1 && emailElement.value.indexOf('.') == -1 && emailElement.value != '')    
    else
    {
        if(emailValidationElement.firstChild != undefined)
        {
            emailValidationElement.removeChild(emailValidationElement.firstChild);
        }        
    }    
    
    if(startDateElement.value == '')
    {
        const currentDate = Date();
        const currentDateWithLocale = new Date(currentDate.toLocaleString("de-DE"));
        console.log('currentDateWithLocale :'+currentDateWithLocale);

        startDateElement.value = currentDateWithLocale.toISOString().split('T')[0];
    }//end of if(startDateElement.value == '')
    else
    {
        let dateValue = startDateElement.value;
        const currentDateWithLocale = new Date(dateValue.toLocaleString("de-DE"));
        console.log('currentDateWithLocale :'+currentDateWithLocale);
        startDateElement.value = currentDateWithLocale.toISOString().split('T')[0];
    }    
    
    if(isValid)
    {
        formElement.submit();
    }//end of if(isValid)  
});//end of submitEvent