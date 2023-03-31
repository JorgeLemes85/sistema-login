import React from 'react'
import { Container, From } from './styles'

const Login = () => {
  return (
    <Container>
        <From>
            <h1>Faça o seu Login 👋</h1>

            <div>
                <p>Não possui conta?</p>
                <a>Cadastrar</a>
            </div>
        </From>
    </Container>
  )
}

export default Login
