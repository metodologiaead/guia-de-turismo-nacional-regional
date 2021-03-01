/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    min-height: 100vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const InputBox = styled.div`
    position: relative;
    margin-top: 5px;
`

export const InputBoxInput = styled.input`
    width: 100%;
    padding: 15px 0;
    font-size: max(13px, 1.5vw);
    color: #5F92EB;
    border: none;
    border-bottom: 2px solid #5F92EB;
    outline: none;
    background: transparent;
`

export const Label = styled.label`
    position: absolute;
    margin-top: 5px;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 1rem;
    color: #5F92EB;
    pointer-events: none;
    transition: .5s;
     ${InputBoxInput}:focus ~ &,
     ${InputBoxInput}:valid ~ & {
        top: -18px;
        left: 0%;
        color: #5F92EB;
        font-size: 1rem;
  }
`
export const InputSubmit = styled.input`
    display: block;
    width: 172px;
    height: 53px;
    border: 2px solid #F2DD72;
    margin: 1rem 0;
    font-size: 1.5rem;
    outline: none;
    cursor: pointer;
    color: #F2DD72;
    font-weight: 700;
    text-transform: uppercase;
    background-size: 200%;
    transition: .5s;
    background: transparent;
`