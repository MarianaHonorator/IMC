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
        
        calculoIMC(dados);
    }
      
  }

  
});

//imc = peso/altura**2

function calculoIMC(dados) {
  const resultado = document.querySelector('#resultado');
  const imc = dados.peso / (dados.altura ** 2);
  const imcFormat = imc.toFixed(2);
  console.log(imc);
  if (imcFormat < 18.5) {
    resultado.innerHTML = `<p><strong>seu IMC é ${imcFormat} - Abaixo do peso! </strong></p>`;
  }else{
    if(imcFormat > 18.5 && imcFormat < 24.9){

        resultado.innerHTML = `<p><strong>seu IMC é ${imcFormat} - peso normal!</strong></p>`;

    }else{
        if(imcFormat > 25 && imcFormat < 29.9){
            resultado.innerHTML = `<p><strong>seu IMC é ${imcFormat} - sobrepeso!</strong></p>`;
            resultado.style.background = 'red';
        }else{
            if(imcFormat > 30 && imcFormat < 34.9){
                resultado.innerHTML = `<p><strong>seu IMC é ${imcFormat} - obesidade grau 1!</strong></p>`;
                resultado.style.background = 'red';
            }else{
                if(imcFormat > 35 && imcFormat < 39.9){
                    resultado.innerHTML = `<p><strong> seu IMC é ${imcFormat} obesidade grau 2!</strong></p>`;
                    resultado.style.background = 'red';

                }else{
                    resultado.innerHTML = `<p><strong> seu IMC é ${imcFormat} obesidade grau !</strong></p>`;
                    resultado.style.background = 'red';
                }
            }
        }
    }
  }
}
