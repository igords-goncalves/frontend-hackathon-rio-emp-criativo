import { useState } from 'react';
import './InputForm.scss';

export function InputForm(props) {
    const [errorMsg, setErrorMsg] = useState('')
    
    function createErrorMsg(regex,value) {
        if(!regex.test(value)) {
            setErrorMsg('*Preencha o campo corretamente')  
          } else {
              setErrorMsg('') 
          }
    }

    function validation (event) {
        const elementID = event.target.id;
        const inputValue = event.target.value;
        
        switch (elementID) {
            case 'loginSuplier':
                const CNPJregex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
                
                createErrorMsg(CNPJregex,inputValue)
                break;
            case 'company':
                const companyRegex = /[a-zA-Z]/;

                createErrorMsg(companyRegex,inputValue)
                break;
            case 'password':
                const passwordRegex = /[a-zA-Z0-9]/;
                createErrorMsg(passwordRegex,inputValue)
                break;
            case 'repassword':
                const password = document.getElementById('password').value;

                if(password !== inputValue) {
                    setErrorMsg('*As senhas não são iguais')
                }
                if(inputValue.trim() == '') {
                    setErrorMsg('*Preencha o campo vazio')
                }
                break;
        
            default:
                break;
        }
    }
    
    return(

        
        <div className='inputBox'>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} onBlur={validation} placeholder={props.placeholder} id={props.id} required/>
            <p>{errorMsg}</p>
        </div>
    )       
}       