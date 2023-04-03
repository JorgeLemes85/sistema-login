import styled from "styled-components"

export const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 100vh;
  background-color: lightblue;
`
export const From = styled.form `
display: flex;
padding: 3rem;
flex-direction: column;
justify-content: center;
background-color: #201d1d;
border-radius: 5px;
width: 100%;
max-width: 450px;
gap: 30px 0px;

h1{
    color: white;
    font-size: 2rem;
    font-weight: light;
}

p {
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
}

a {
    color: white;
    font-size: 1rem;
}
`