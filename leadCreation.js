console.log('Yay!! I can access the js file');
let captchaFlag = false;
let inputEntries = document.addEventListener('change', (evt)=>{
    console.log('evt.target.id :'+evt.target.id);
    console.log('evt.target.value :'+evt.target.value);

    let firstNameErrorDivElement = document.getElementById('firstNameValidation');
    let lastNameValidationElement = document.getElementById('lastNameValidation');    
    let emailValidationElement = document.getElementById('emailValidation');
    let captchaValidationElement = document.getElementById('captchaValidation');

    if(evt.target.id == "first_name")
    {
        let firstNameValue = evt.target.value;
        if(firstNameValue != '')
        {
            if(firstNameErrorDivElement.firstChild != undefined)
            {
                firstNameErrorDivElement.removeChild(firstNameErrorDivElement.firstChild);
            }
        }//end of if(firstNameValue == '')    
    }//end of if(evt.target.id == "first_name")    

    if(evt.target.id == "last_name")
    {
        let lastNameValue = evt.target.value;
        if(lastNameValue != '')
        {
            if(lastNameValidationElement.firstChild != undefined)
            {
                lastNameValidationElement.removeChild(lastNameValidationElement.firstChild);
            }
        }//end of if(firstNameValue == '')    
    }//end of if(evt.target.id == "first_name") 

    if(evt.target.id == "email")
    {
        let emailValue = evt.target.value;
        if(emailValue != '')
        {
            if(emailValue.indexOf('@') != -1 && emailValue.indexOf('.') != -1)
            {
                if(emailValidationElement.firstChild != undefined)
                {
                    emailValidationElement.removeChild(emailValidationElement.firstChild);
                }
            }    
        }//end of if(firstNameValue == '')    
    }//end of if(evt.target.id == "first_name") 

    if(captchaFlag == true)
    {
        if(captchaValidationElement.firstChild != undefined)
        {
            captchaValidationElement.removeChild(captchaValidationElement.firstChild);
        }
    }    
});

let submitEvent = document.addEventListener('submit',(evt)=>{

    let formElement = document.getElementById('webToLeadForm');
    let isValid = true
    evt.preventDefault();
    let firstNameElement = document.querySelector('#first_name');
    let lastNameElement = document.querySelector('#last_name');
    let emailElement = document.querySelector('#email');
    let startDateElement = document.querySelector('.start_date');
    let germanStartDateElement = document.querySelector('.germanFormattedDate');

    let firstNameErrorDivElement = document.getElementById('firstNameValidation');
    let lastNameValidationElement = document.getElementById('lastNameValidation');    
    let emailValidationElement = document.getElementById('emailValidation');
    let captchaValidationElement = document.getElementById('captchaValidation');

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
        if(emailValue.indexOf('@') == -1 || emailValue.indexOf('.') == -1)
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
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const isoDate = `${year}-${month}-${day}`;
        const germanDate = `${day}-${month}-${year}`;

        console.log('isoDate :' +isoDate);
        console.log('germanDate :' +germanDate);
        startDateElement.value = isoDate;
        germanStartDateElement.value = germanDate;
    }//end of if(startDateElement.value == '')
    else
    {
        const currentDate = new Date(startDateElement.value);

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const germanDate = `${day}-${month}-${year}`;  
        console.log('germanDate :' +germanDate); 
        germanStartDateElement.value = germanDate;     
    }    
    
    if(captchaFlag == false)
    {
        let captchaErrorElement = document.createElement('p');
        captchaErrorElement.innerText = 'Please make sure to select the captcha before submitting the form';

        if(captchaValidationElement.firstChild != undefined)
        {
            captchaValidationElement.replaceChild(captchaErrorElement, captchaValidationElement.firstChild);
        }    
        else
        {
            captchaValidationElement.appendChild(captchaErrorElement);
        }
    } 
    else
    {
        if(captchaValidationElement.firstChild != undefined)
        {
            captchaValidationElement.removeChild(captchaValidationElement.firstChild);
        }
    }       
    
    if(isValid)
    {
        formElement.submit();
    }//end of if(isValid)   
});//end of submitEvent

function setCaptchaFlag()
{
    captchaFlag = true;
}