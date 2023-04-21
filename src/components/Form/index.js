import './Form.css'
import InputText from '../InputText'
import Dropdown from '../Dropdown'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onCreateColaborador({
            nome, cargo, imagem, time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText label="Nome" placeholder="Digite o seu nome" valor={nome} onChange={valor => setNome(valor)} />
                <InputText label="Cargo" placeholder="Digite o seu cargo" valor={cargo} onChange={valor => setCargo(valor)} />
                <InputText label="Imagem" placeholder="Digite o endereço da sua imagem" valor={imagem} onChange={valor => setImagem(valor)} />
                <Dropdown label="Time" itens={props.times} valor={time} onChange={valor => setTime(valor)} />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form