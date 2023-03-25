import './InputRadio.scss';

export function InputRadio(props) {
    return(
        <div className='inputRadio'>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="radio" name={props.name} id={props.id} value={props.value}/>
        </div>
    )
}