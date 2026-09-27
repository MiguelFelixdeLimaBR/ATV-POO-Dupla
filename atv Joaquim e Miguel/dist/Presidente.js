import Politico from "./Politico.js";
export default class Presidente extends Politico {
    qtdministros;
    constructor(nome, partido, localTrabalho, endTrabalho, remuneracao, projetos, qtdministros) {
        super(nome, partido, 'Federal', 'Executivo', localTrabalho, endTrabalho, remuneracao, projetos);
        this.qtdministros = qtdministros;
    }
    getQtdMinistros() {
        return this.qtdministros;
    }
    setQtdMinistros(qtdministros) {
        this.qtdministros = qtdministros;
    }
    mandato() {
        console.log("O presidente sanciona, propõe e veta leis e edita medidas provisórias.");
    }
    nomearMinistro() {
        return "Nomear Ministros de Estado.";
    }
    exonerarMinistro() {
        return "Exonerar Ministros de Estado.";
    }
    comandarForcasArmadas() {
        return "Comandar as Forças Armadas.";
    }
    representarPais() {
        return "Representar o país em eventos internacionais.";
    }
    elaborarPPA() {
        return "Elaborar e enviar ao Congresso Nacional o Plano Plurianual (PPA) nacional.";
    }
    elaborarLDO() {
        return "Elaborar e enviar ao Congresso Nacional a Lei de Diretrizes Orçamentárias (LDO) nacional.";
    }
    elaborarLOA() {
        return "Elaborar e enviar ao Congresso Nacional a proposta de Lei Orçamentária Anual (LOA) nacional.";
    }
    imprimeinfo() {
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Partido: ${this.getPartido()}`);
        console.log(`Local de Trabalho: ${this.getLocalTrabalho()}`);
        console.log(`Endereço de Trabalho: ${this.getEndTrabalho()}`);
        console.log(`Remuneração: ${this.getRemuneracao()}`);
        console.log(`Projetos: ${this.getProjetos()}`);
        console.log(`Quantidade de Ministros: ${this.getQtdMinistros()}`);
    }
}
