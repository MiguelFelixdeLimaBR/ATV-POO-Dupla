import Politico from "./Politico.js";
export default class Senador extends Politico {
    estado;
    anoEleicao;
    constructor(nome, partido, estado, anoEleicao, esfera, poder, localTrabalho, endTrabalho, remuneracao, projetos) {
        super(nome, partido, esfera, poder, localTrabalho, endTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getAnoEleicao() {
        return this.anoEleicao;
    }
    setAnoEleicao(anoEleicao) {
        this.anoEleicao = anoEleicao;
    }
    mandato() {
        console.log("O senador propõe, discute e vota leis no âmbito nacional.");
    }
    aprovarAutoridades() {
        return "Aprovar autoridades indicadas pelo Presidente da República.";
    }
    julgarCrimesResponsabilidade() {
        return "Julgar crimes de responsabilidade do Presidente da República.";
    }
    representarInteressesEstado() {
        return "Representar os interesses do estado no Senado Federal.";
    }
    imprimeinformacoes() {
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Partido: ${this.getPartido()}`);
        console.log(`Estado: ${this.getEstado()}`);
        console.log(`Ano de Eleição: ${this.getAnoEleicao()}`);
        console.log(`Esfera: ${this.getEsfera()}`);
        console.log(`Poder: ${this.getPoder()}`);
        console.log(`Local de Trabalho: ${this.getLocalTrabalho()}`);
        console.log(`Endereço do Trabalho: ${this.getEndTrabalho()}`);
        console.log(`Remuneração: ${this.getRemuneracao()}`);
        console.log(`Projetos: ${this.getProjetos().join(", ")}`);
    }
}
