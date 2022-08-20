import { useEffect } from "react"
import { useState } from "react"
import { consumeApi } from "../service/Request.js"

export function Button(props){
    return (
    <button>
        {props.label}
    </button>
    )
}

export function ButtonProduct(props){
    return (
    <button className={props.className} onClick={props.callback} >
        {props.label}
    </button>
    )
}

export function Input(props){
    const name = props.nameInput


    return(
        <input className={props.className} id={props.id} type={props.type} name={name}></input>
    )
}

export function InputRadio(props){
    const name = props.nameInput
    return(
        <input className={props.className} id={props.id} type="radio" name={name} value={props.valor}></input>
    )
}

export function Label(props){
    const text= props.label
    const name = props.nameInput
    return <label htmlFor={name}>{text}</label>
}

export function Card(props){
    return (
        <div className="card">
            <img className="productImg" src={props.src}></img>
            <p className="productName">{props.pname}</p>
            <p className="productDescr">{props.descr}</p>
            <p className="productDescr">R${props.preco},00</p>
            <p className="precoDesc"><b>R${props.desc},00</b></p>
            <p className="productDescr">{props.qtde}x de R${props.parcela},00</p>
            <Button label="comprar"/>
        </div>
        
    )
}

export function CardContainer (props){
    const [apiInfo, setApiInfo] = useState([])
    
    useEffect(()=>{
        consumeApi("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1")
        .then((resp)=>{
            setApiInfo([...resp.products])
        })
    }, [])
    
    return (
    <div className={props.className}>
        {apiInfo.map((card)=> (
            <Card 
            key = {card.id}
            src = {card.image}
            preco = {card.oldPrice}
            desc = {card.price}
            descr = {card.description}
            parcela = {card.installments.value}
            qtde = {card.installments.count}
            pname = {card.name}
            />
        ))}
        
    </div>
    )
}

