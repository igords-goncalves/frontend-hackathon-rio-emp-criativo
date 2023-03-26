import './FormRegisterSuplier.scss';
import { InputForm } from '../../components/InputForm/InputForm';
import { InputRadio } from '../../components/InputRadio/InputRadio';

export function FormRegisterSuplier () {
    return(
        <div className='boxRegister'>
            <form className='formRegisterSuplier'>
                <h1>Register</h1>
                <InputForm key='1' type='text' placeholder='Digite seu CNPJ' id='loginSuplier' label='CNPJ'/>
                <InputForm key='2' type='text' placeholder='Nome fantasia' id='company' label='Nome Fantasia'/>
                <InputForm key='3' type='password' placeholder='Digite sua senha' id='password' label='Senha'/>
                <InputForm key='4' type='password' placeholder='Digite novamente sua senha' id='repassword' label='Repita a senha'/>
                <div className='sectionInputRadio'>
                    <label>Segmento</label>
                    <div>
                        <InputRadio type='radio' name='segmento' id='movie' label='Cinema' value='movie'/>
                        <InputRadio type='radio' name='segmento' id='teatro' label='Teatro' value='teatro'/>
                        <InputRadio type='radio' name='segmento' id='show' label='Teatro' value='teatro'/>
                        <InputRadio type='radio' name='segmento' id='infantil' label='Cinema' value='movie'/>
                        <InputRadio type='radio' name='segmento' id='social' label='Teatro' value='teatro'/>
                        <InputRadio type='radio' name='segmento' id='adulto' label='Teatro' value='teatro'/>
                    </div>
                </div>
                <button>Registrar</button>
            </form>
        </div>
    )
}