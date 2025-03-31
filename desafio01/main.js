const form = document.querySelector('form')
let dolarInput = document.querySelector('#dolar')
let resposta = document.querySelector('p')
let euro


form.addEventListener('submit', e => {
    e.preventDefault()
    let dolar = parseFloat(dolarInput.value)
    euro = dolar * 0.9243

    dolar = dolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    euro = euro.toLocaleString('de-AT', { style: 'currency', currency: 'EUR' });


    resposta.textContent = `O valor de ${dolar} convertido fica ${euro} euro`
})