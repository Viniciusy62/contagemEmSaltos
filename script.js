
const contar = document.querySelector('#contar')
const limpar = document.querySelector('#limpar')
const resultado = document.querySelector('#resultado')

function clicar() {
  const valorInicial = Number(document.querySelector('#valorInicial').value)
  const valorFinal = Number(document.querySelector('#valorFinal').value)
  const passoSalto = Number(document.querySelector('#passoSalto').value)
  
  let conjunto = []

  if(valorInicial <= 0 || valorFinal <= 0 || passoSalto <= 0) {
      resultado.innerText = `Insira valores válidos maiores que 1 nos campos disponíveis`
  } else if(valorInicial <= 0) {
      alert("Consideraremos 'Início' com valor = 1")
      for(let i = 1; i <= valorFinal; i += passoSalto) {
      conjunto.push(`👉${i}`)
    }
      resultado.innerText = `Essa é a sequência: ${conjunto}`
  } else if(valorFinal <= valorInicial) {
      resultado.innerText = `Insira  um valor válido para "Fim", maior que "Início"`
  } else if(passoSalto <= 0) {
      resultado.innerText = `Insira  um valor válido para "Passo"`
  } else {
      for(let i = valorInicial; i <= valorFinal; i += passoSalto) {
      conjunto.push(`⭕${i}`)
  }
  resultado.innerText = `Essa é a sequência:\n🟢${conjunto}🔴`
}
}
  

/*
function limpar() {
  return valorInicial.value = 0
}
*/

contar.addEventListener('click', clicar)
limpar.addEventListener('click', limpar)