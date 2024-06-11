import styled from 'styled-components'

export const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const AuthInContanier = styled.form`
  width: 60%;
  height: 100%;
  background-color: #fff6eb;
  border: 1px solid #ff5500;
  padding: 3rem;
  border-radius: 10px;
`

export const AuthText = styled.h1`
  margin: 1rem;
  font-size: 3rem;
  color: #ff7530;
  font-weight: bold;
`

export const AuthInput = styled.input`
  width: 80%;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid lightgray;
`

export const LoginBtn = styled.button`
  width: 82%;
  margin-top: 1.5rem;
  padding: 0.5rem;
  color: white;
  background-color: #ff913c;
  border: none;
  cursor: pointer;
`

export const SignBtn = styled.button`
  width: 82%;
  margin: 1rem;
  padding: 0.5rem;
  color: white;
  background-color: #ff7700;
  border: none;
  cursor: pointer;
`
