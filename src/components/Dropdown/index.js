import './Dropdown.css'

const Dropdown = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.valor} onChange={event => props.onChange(event.target.value)}>
                <option value="">Selecione um time...</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown