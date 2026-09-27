import Politico from "./Politico.js";
export default class DeputadoFederal extends Politico {
    bancada;
    estado;
    constructor(nome, partido, esfera, poder, localTrabalho, endTrabalho, remuneracao, projetos, bancada, estado) {
        super(nome, partido, esfera, poder, localTrabalho, endTrabalho, remuneracao, projetos);
        this.bancada = bancada;
        this.estado = estado;
    }
    getBancada() {
        return this.bancada;
    }
    setBancada(bancada) {
        this.bancada = bancada;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    mandato() {
        console.log("O deputado federal propõe, discute e vota leis, além de fiscalizar o Executivo.");
    }
    votarPEC() {
        return "Votar em Propostas de Emenda à Constituição (PECs).";
    }
    criarCPInacional() {
        return "Criar Comissões Parlamentares de Inquérito (CPIs) nacionais.";
    }
    votarPPA() {
        return "Votar o Plano Plurianual (PPA) nacional.";
    }
    votarLDO() {
        return "Votar a Lei de Diretrizes Orçamentárias (LDO) nacional.";
    }
    votarLOA() {
        return "Votar a Lei Orçamentária Anual (LOA) nacional.";
    }
    proporLeiComplementar() {
        return "Propor leis complementares.";
    }
    imprimeInfo() {
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Partido: ${this.getPartido()}`);
        console.log(`Estado: ${this.getEstado()}`);
        console.log(`Esfera: ${this.getEsfera()}`);
        console.log(`Poder: ${this.getPoder()}`);
        console.log(`Local de Trabalho: ${this.getLocalTrabalho()}`);
        console.log(`Endereço de Trabalho: ${this.getEndTrabalho()}`);
        console.log(`Remuneração: ${this.getRemuneracao()}`);
        console.log(`Projetos: ${this.getProjetos().join(', ')}`);
        console.log(`Bancada: ${this.getBancada()}`);
    }
}
