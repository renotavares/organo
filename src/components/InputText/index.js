import './InputText.css'

const InputText = (props) => {

    const onWrite = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input value={props.valor} onChange={onWrite} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputText