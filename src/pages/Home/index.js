import React, {useState} from 'react';
import { FiPhoneCall} from 'react-icons/fi';
import { Container, Content, Background, Plano } from './styles';


function Home() {
 const [origin, setOrigin] = useState('');
 const [destiny, setDestiny] = useState('');
 const [plan, setPlan] = useState('');
 const [minute, setMinute] = useState(0);
 const [valor, setValor] = useState('');
 const [valorSemPlano, setValorSemPlano] = useState(0);
 const [preco, setPreco] = useState(0);



 function handleCalculatePlan() {
  const taxa = parseFloat(valor)

  if(plan === 'falemais30'){
    if(minute > 30){
      let resultMinute = minute - 30;
      let totalValor = (valor * resultMinute);
      let result = totalValor * 1.1;
      let semPlano = minute * valor;
      setPreco(result);
      setValorSemPlano(semPlano);

    } else {
      let semPlano = minute * valor;
      setValorSemPlano(semPlano);
    }
  } else if(plan === 'falemais60') {
    if(minute > 60){
      let resultMinute = minute - 60;
      let totalValor = (valor * resultMinute);
      let result = totalValor * 1.1;
      let semPlano = minute * valor;
      setPreco(result);
      setValorSemPlano(semPlano);

    } else {
      let semPlano = minute * valor;
      setValorSemPlano(semPlano);
    }

  } else if(plan === 'falemais120') {
    if(minute > 120){
      let resultMinute = minute - 120;
      let totalValor = (valor * resultMinute);
      let result = totalValor * 1.1;
      let semPlano = minute * valor;
      setPreco(result);
      setValorSemPlano(semPlano);

    } else {
      let semPlano = minute * valor;
      setValorSemPlano(semPlano);
    }

  }


 }

 return(
   <>
    <Container>
    <Background />
      <Content>
        <h1>Portal da Tranparência
          <FiPhoneCall size={40} />
        </h1>

        <div className="origem">
          <strong>Origem</strong>
          <select onChange={(event)=> setOrigin(event.target.value)}>
            <option value="" defaultValue>-- Digite o DDD de Origem --</option>
            <option value="11">11</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
          </select>

          {
            origin === "11" ?
            <>
          <strong>Destino</strong>
            <select onChange={(event) => setDestiny(event.target.value)}>
              <option value="">-- Digite o DDD de destino --</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
            </select>
            </>

            :origin === "16" ?
            <>
            <strong>Destino</strong>
            <select onChange={(event) => setDestiny(event.target.value)}>
              <option value="">---</option>
              <option value="11">11</option>
            </select>
            </>

            :origin === "17" ?
            <>
            <strong>Destino</strong>
            <select onChange={(event) => setDestiny(event.target.value)}>
              <option value="">---</option>
              <option value="11">11</option>
            </select>
            </>
            :origin === "18" ?
            <>
            <strong>Destino</strong>
            <select onChange={(event) => setDestiny(event.target.value)}>
              <option value="">---</option>
              <option value="11">11</option>
            </select>
            </>
            :
            <strong></strong>
          }



        </div>
        {
          origin === "11" && destiny === "16" ?

          <strong>Valor por minuto é: R$: 1,90</strong>
          :
          origin === "16" && destiny === "11" ?
          <strong>Valor por minuto é: R$: 2,90</strong>
          :
          origin === "11" && destiny === "17" ?
            <strong>Valor por minuto é: R$: 1,70</strong>
          :
          origin === "17" && destiny === "11" ?
          <strong>Valor por minuto é: R$: 2,70</strong>
          :
          origin === "11" && destiny === "18" ?
          <strong>Valor por minuto é: R$: 0,90</strong>
          :
          origin === "18" && destiny === "11" ?
          <strong>Valor por minuto é: R$: 1,90</strong>
          :
            <strong></strong>
          }

        <Plano>

          <strong id="title">Veja as vantagens de ter o plano Fale mais, calcule abaixo: </strong>
            <select onChange={(event) => setPlan(event.target.value)}>
              <option value="" defaultValue>-Selecione o Plano-</option>
              <option value="falemais30">FaleMais30</option>
              <option value="falemais60">FaleMais60</option>
              <option value="falemais120">FaleMais120</option>
            </select>

            {
              plan === "falemais30" ?
              <>
              <span>Até 30 Minutos você não paga nada</span>

              <div className="calc-plan">
                <div>
                <label>Valor do Minuto</label>
                  <input type="text" value={valor} placeholder="Valor ex: 1.25" onChange={(event) => setValor(event.target.value)}/>
                  <label>Minutos</label>
                  <input type="number" value={minute} onChange={(event) => setMinute(event.target.value)}/>
                  <button onClick={handleCalculatePlan}>Calcular</button>
                </div>
                <strong className="valores">Valor <span className="com">COM</span> plano: {preco.toFixed(2)}</strong>
                <strong className="valores">Valor <span className="sem">SEM</span> plano: {valorSemPlano.toFixed(2)}</strong>
              </div>
              </>
              :
              plan === "falemais60" ?
              <>
              <span>Até 60 Minutos você não paga nada</span>
              <div className="calc-plan">
                <div>
                <label>Valor do Minuto</label>
                  <input type="text" value={valor} placeholder="Valor ex: 1.25" onChange={(event) => setValor(event.target.value)}/>
                  <label>Minutos</label>
                  <input type="number" placeholder="Minutos" value={minute} onChange={(event) => setMinute(event.target.value)}/>
                  <button onClick={handleCalculatePlan}>Calcular</button>
                </div>
                <strong className="valores">Valor <span className="com">COM</span> plano: {preco.toFixed(2)}</strong>
                <strong className="valores">Valor <span className="sem">SEM</span> plano: {valorSemPlano.toFixed(2)}</strong>
              </div>

              </>
              :
              plan === "falemais120" ?
              <>

              <span>Até 120 Minutos você não paga nada</span>

              <div className="calc-plan">
                <div>
                  <label>Valor do Minuto</label>
                  <input type="text" value={valor} placeholder="Valor ex: 1.25" onChange={(event) => setValor(event.target.value)}/>
                  <label>Minutos</label>
                  <input type="number" placeholder="Minutos" value={minute} onChange={(event) => setMinute(event.target.value)}/>
                  <button onClick={handleCalculatePlan}>Calcular</button>
                </div>
                <strong className="valores">Valor <span className="com">COM</span> plano: {preco.toFixed(2)}</strong>
                <strong className="valores">Valor <span className="sem">SEM</span> plano: {valorSemPlano.toFixed(2)}</strong>
              </div>
              </>
              :
              <strong></strong>

            }



        </Plano>
      </Content>
    </Container>
   </>
 )
};

export default Home;
