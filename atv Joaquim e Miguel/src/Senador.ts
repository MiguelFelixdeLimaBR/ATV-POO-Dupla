import Politico from "./Politico.js";

export default class Senador extends Politico {
  private estado: string;
  private anoEleicao: number;

    constructor(
        nome: string,
        partido: string,
        estado: string,
        anoEleicao: number,
        esfera: string,
        poder: string,
        localTrabalho: string,
        endTrabalho: string,
        remuneracao: number,
        projetos: string[],
    ) {
        super(nome, partido, esfera, poder, localTrabalho, endTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }

getEstado(): string {
    return this.estado;
}

setEstado(estado: string): void {
    this.estado = estado;
}

getAnoEleicao(): number {
    return this.anoEleicao;
}

setAnoEleicao(anoEleicao: number): void {
    this.anoEleicao = anoEleicao;
}

mandato(): void {
        console.log("O senador propõe, discute e vota leis no âmbito nacional.");
    }

    aprovarAutoridades(): string {
        return "Aprovar autoridades indicadas pelo Presidente da República.";
    }

    julgarCrimesResponsabilidade(): string {
        return "Julgar crimes de responsabilidade do Presidente da República.";
    }

    representarInteressesEstado(): string {
        return "Representar os interesses do estado no Senado Federal.";
    }

imprimeinformacoes(): void {
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