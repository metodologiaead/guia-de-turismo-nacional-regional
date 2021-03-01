/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import MaskedInput from 'react-text-mask'
import { Container, InputBox, InputBoxInput, Label, InputSubmit } from '../styles/SubscribeLayout'


const Subscribe = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhonenumber,] = useState("");

    const handleSubmit = (evt) => {

        evt.preventDefault();
        var xhr = new XMLHttpRequest();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/7458896/eb339c66-9139-4caf-890d-4adcc0589f1d'
        var data = {
            "fields": [
                {
                    "name": "email",
                    "value": email
                },
                {
                    "name": "firstname",
                    "value": name
                },
                { 
                    "name": "phone",
                    "value": phone
                },
            ],
            "context": {
                "pageUri": "https://transacoes-imobiliarias.metodologiaead.com.br",
                "pageName": "Técnico em Transações Imobiliarias"
            },
        }
        console.log(data)
        var final_data = JSON.stringify(data)

        xhr.open('POST', url);
        // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert(xhr.responseText); // Returns a 200 response if the submission is successful.
            } else if (xhr.readyState === 4 && xhr.status === 403) {
                alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.     
            } else if (xhr.readyState === 4 && xhr.status === 404) {
                alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found    
            }
        }
        // Sends the request 
        xhr.send(final_data)

        
    }

    return (
        <Container >
        <form onSubmit={handleSubmit}>
            <InputBox>
                <InputBoxInput 
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                required
                />
                <Label>Nome Completo</Label>
            </InputBox>
            <InputBox>
                <MaskedInput mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                type="tel"
                value={phone}
                onChange={e => setPhonenumber(e.target.value)}
                required
                render={(ref, props) => (
                    <InputBoxInput ref={ref} {...props} />
                  )}
                />
                <Label>Telefone</Label>
            </InputBox>
            <InputBox>
                <InputBoxInput 
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                />
                <Label>Email</Label>
            </InputBox>
            <InputSubmit 
            type="submit" 
            value="Enviar"
            />
        </form>
        </Container>
    );
}

export default Subscribe