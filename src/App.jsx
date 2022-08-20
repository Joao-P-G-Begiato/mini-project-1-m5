import { useState } from 'react'
import './App.css'
import {Button, Label, Input, InputRadio, CardContainer, ButtonProduct} from "./components/components"

function App() {
  const [nameOfClass, setNameOfClass] = useState("hidden")
  const [label, setLabel] = useState("Mais Produtos Aqui !")
    
  return (
    <>
    <header>
      <h3>uma seleção de produtos</h3>
      <h1>especial para você</h1>
      <h4>
        Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
      </h4>
      <nav>
        <Button label="Conheça a Linx" />
        <Button label="Ajude o algorítimo" />
        <Button label="Seus produtos" />
        <Button label="Compartilhe" />
      </nav>
    </header>
    <main>
        <div className='sec1'>
          <section className='text1'>
            <h3>Ajude o Algoritmo </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. 
              Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. 
              Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. 
              Cras et erat ut tellus vulputate tincidunt. 
              Aenean lacinia euismod augue vel egestas. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              Vestibulum vel urna tortor. 
              Vivamus et arcu non felis tristique eleifend.<br></br><br></br> 
              Morbi eu condimentum urna. 
              Curabitur eu magna eget turpis condimentum ultrices. 
              Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. 
              Etiam ultricies a ante vehicula pharetra. 
              Quisque ut neque mattis, consequat velit ut, ultrices orci. 
              Nulla varius elementum erat vel pharetra.
              Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
          </section>
          <form>
            <Label label="Seu Nome" nameInput="nome" id="nameUser"  />
            <Input nameInput="nome" type="text" className="textInput"/>
            <Label label="E-mail" nameInput="E-mail" />
            <Input nameInput="E-mail" type="text" className="textInput"/>
            <Label label="CPF" nameInput="CPF" />
            <Input nameInput="CPF" type="text" className="textInput"/>
            <div>
              <InputRadio nameInput="gender" type="radio" value="Masculino"/>
              <Label label="Masculino" nameInput="gender" />
              <InputRadio nameInput="gender" type="radio" />
              <Label label="Feminino" nameInput="gender"/>
            </div>
            <Button label="Enviar" />
          </form>
        </div>
        <section className='lineback'>
          <br></br>
          <br></br>
          <hr></hr>
          <h3 className='titleRelative'>Sua Seleção Especial</h3>
        </section>
        <CardContainer url="https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1" className="CardContainer"/>
        <CardContainer url="https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=2" className={nameOfClass}/>
        <section className='buttonSec'>
          <ButtonProduct className="buttonProduct" label={label} callback={()=>{
            if(nameOfClass == "hidden"){
              setNameOfClass("CardContainer")
              setLabel("Ver Menos Produtos")
            }else{
              setNameOfClass("hidden")
              setLabel("Mais Produtos Aqui !")
            }
            }}/>
        </section>
        
      </main>
    </>
  )
}

export default App
