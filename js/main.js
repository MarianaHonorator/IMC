const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const peso = document.querySelector('#peso');
  const altura = document.querySelector('#altura');

  const dados = {
    peso: peso.value,
    altura: altura.value,
  };

  if(peso.value == 0 || altura.value == 0){
      
      alert('Campo em branco!')
      resultado.innerHTML = '';
      
    }else{
        if(isNaN(peso.value)|| isNaN(altura.value)){
            
            alert('valor invalido!')
            resultado.innerHTML = '';
            
        }else{
            
            const imc = calculoIMC(dados);
            const nivelImc = indiceIMC(imc);
            

            const msg = `seu IMC é ${imc} ${nivelImc}`
            setResultado(msg);
        }
        
    }
    
  
});

function criarTag () {
    
    const strong = document.createElement('strong');
    return strong;
}

function calculoIMC(dados) {
  const imc = dados.peso / (dados.altura ** 2);
  const imcFormat = imc.toFixed(2);
  return imcFormat;
  
}

function indiceIMC(imcFormat) {
    const nivel = ['Abaixo do peso', 'Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];

    if (imcFormat < 18.5) return nivel[0];
    if(imcFormat > 18.5 && imcFormat < 24.9) return nivel[1];
    if(imcFormat > 25 && imcFormat < 29.9) return nivel[2];
    if(imcFormat > 30 && imcFormat < 34.9) return nivel[3];
    if(imcFormat > 35 && imcFormat < 39.9) return nivel[4];
    else return nivel[5];

}

function setResultado(msg) {
const resultado = document.querySelector('#resultado');
resultado.innerHTML = '';

const tag = criarTag();
tag.innerHTML = msg;
resultado.appendChild(tag);
}


