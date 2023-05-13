function Calcular() {
    const bebados = Number (document.getElementById('bebados').value);
    const normais = Number (document.getElementById('normais').value);
    const criança = Number (document.getElementById('criança').value);

    const QuantidadeCarne = (bebados + normais) * 0.400 + criança * 0.200;
    const QuantidadeAcompanhamentos = (bebados + normais + criança) * 0.200;
    const QuantidadeCerveja = bebados * 2;
    const QuantidadeRefrigerante = (bebados + normais + criança) * 0.500;
    const QuantidadeAgua = (bebados + normais + criança) * 0.400;

    alert(`Quantidade nescessária:\n
    ${QuantidadeCarne}Kg de carne
    ${QuantidadeAcompanhamentos}Kg de acompanhamentos
    ${QuantidadeCerveja}L de cerveja
    ${QuantidadeRefrigerante}L de refrigerente
    ${QuantidadeAgua}L de aguá
    `);
}