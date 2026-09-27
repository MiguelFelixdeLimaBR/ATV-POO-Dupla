import Politico from "./Politico.js";

export default class Presidente extends Politico{
    private qtdministros: number;


    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        endTrabalho: string,
        remuneracao: number,
        projetos: string[],
        qtdministros: number
    ){
        super(nome, partido, 'Federal', 'Executivo', localTrabalho, endTrabalho, remuneracao, projetos);
        this.qtdministros = qtdministros;
    }

getQtdMinistros(): number {
    return this.qtdministros;
}

setQtdMinistros(qtdministros: number): void {
    this.qtdministros = qtdministros;
}

mandato(): void {
        console.log(
            "O presidente sanciona, propõe e veta leis e edita medidas provisórias."
        );
    }

    nomearMinistro(): string {
        return "Nomear Ministros de Estado.";
    }

    exonerarMinistro(): string {
        return "Exonerar Ministros de Estado.";
    }

    comandarForcasArmadas(): string {
        return "Comandar as Forças Armadas.";
    }

    representarPais(): string {
        return "Representar o país em eventos internacionais.";
    }

    elaborarPPA(): string {
        return "Elaborar e enviar ao Congresso Nacional o Plano Plurianual (PPA) nacional.";
    }

    elaborarLDO(): string {
        return "Elaborar e enviar ao Congresso Nacional a Lei de Diretrizes Orçamentárias (LDO) nacional.";
    }

    elaborarLOA(): string {
        return "Elaborar e enviar ao Congresso Nacional a proposta de Lei Orçamentária Anual (LOA) nacional.";
    }


imprimeinfo(): void {
    console.log(`Nome: ${this.getNome()}`);
    console.log(`Partido: ${this.getPartido()}`);
    console.log(`Local de Trabalho: ${this.getLocalTrabalho()}`);
    console.log(`Endereço de Trabalho: ${this.getEndTrabalho()}`);
    console.log(`Remuneração: ${this.getRemuneracao()}`);
    console.log(`Projetos: ${this.getProjetos()}`);
    console.log(`Quantidade de Ministros: ${this.getQtdMinistros()}`);  
}
}  