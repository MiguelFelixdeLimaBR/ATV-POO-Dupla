import Politico from "./Politico.js";

export default class DeputadoFederal extends Politico {
    private bancada : string;
    private estado: string;

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        localTrabalho: string,
        endTrabalho: string,
        remuneracao: number,
        projetos: string[],
        bancada: string,
        estado: string
    ) {
        super(nome, partido, esfera, poder, localTrabalho, endTrabalho, remuneracao, projetos);
        this.bancada = bancada;
        this.estado = estado;
    }


getBancada(): string {
    return this.bancada;
}

setBancada(bancada: string): void {
    this.bancada = bancada;
}

getEstado(): string {
    return this.estado;
}

setEstado(estado: string): void {
    this.estado = estado;
}

mandato(): void {
        console.log(
            "O deputado federal propõe, discute e vota leis, além de fiscalizar o Executivo."
        );
    }

    votarPEC(): string {
        return "Votar em Propostas de Emenda à Constituição (PECs).";
    }

    criarCPInacional(): string {
        return "Criar Comissões Parlamentares de Inquérito (CPIs) nacionais.";
    }

    votarPPA(): string {
        return "Votar o Plano Plurianual (PPA) nacional.";
    }

    votarLDO(): string {
        return "Votar a Lei de Diretrizes Orçamentárias (LDO) nacional.";
    }

    votarLOA(): string {
        return "Votar a Lei Orçamentária Anual (LOA) nacional.";
    }

    proporLeiComplementar(): string {
        return "Propor leis complementares.";
    }

imprimeInfo(): void {
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