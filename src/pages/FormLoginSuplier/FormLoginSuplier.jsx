import { InputForm } from '../../components/InputForm/InputForm'
import './FormLoginSuplier.scss'

export function FormLoginSuplier() {

    return (
        <div className='boxLogin'>
            <form className="formLogin" action="post">
                <h1>Login</h1>
                <InputForm type='text' placeholder='Digite seu CNPJ' id='loginSuplier' label='Usuário' />
                <InputForm type='password' placeholder='Digite sua senha' id='passwordSuplier' label='Senha' />
                <button>Entrar</button>
            </form>
            <div>
                <a href="#"><small>Registre-se</small></a>
                <a href="#"><small>Esqueci a senha</small></a>
            </div>
        </div>

    )
}
