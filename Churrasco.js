function Calcular() {
    const bebados = Number (document.getElementById('bebados').value);
    const normais = Number (document.getElementById('normais').value);
    const criança = Number (document.getElementById('criança').value);

    const meatQuantity = (bebados + normais) * 400 + criança * 200;
    const sideDishQuantity = (bebados + normais + criança) * 200;
    const beerQuantity = bebados * 2;
    const sodaQuantity = (bebados + normais + criança) * 500;
    const waterQuantity = (bebados + normais + criança) * 400;

    alert(`Para seu churrasco, voçe vai precisar de:\n
    ${meatQuantity}g de carne
    ${sideDishQuantity}g de acompanhamentos
    ${beerQuantity}1 de cerveja
    ${sodaQuantity}ml de refrigerente
    ${waterQuantity}ml de aguá
    `);
}