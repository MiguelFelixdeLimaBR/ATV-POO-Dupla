import Politico from "./Politico.js";

export default class Governador extends Politico{
    private estado: string;
    private qtdsecretarios: number;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        endTrabalho: string,
        remuneracao: number,
        projetos: string[],
        estado: string,
        qtdsecretarios: number
    ){
        super(nome, partido, "Estadual", "Executivo", localTrabalho, endTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.qtdsecretarios = qtdsecretarios;
    }
    

getEstado(): string {
    return this.estado;
}

setEstado(estado: string): void {
    this.estado = estado;
}

getQtdSecretarios(): number {
    return this.qtdsecretarios;
}

setQtdSecretarios(qtdsecretarios: number): void {
    this.qtdsecretarios = qtdsecretarios;
}

mandato(): void {
        console.log(
            `O governador de ${this.getEstado()} sanciona leis estaduais, veta leis estaduais, decreta estado de calamidade e envia PEC à Assembleia Legislativa.`
        );
    }

    gerirPoliciaMilitar(): string {
        return "Gerir a Polícia Militar do estado.";
    }

    administrarRodoviasEstaduais(): string {
        return "Administrar as rodovias estaduais.";
    }

    coordenarEducacao(): string {
        return "Coordenar a educação no estado.";
    }

    coordenarSaude(): string {
        return "Coordenar a saúde no estado.";
    }

    eleborarPPA(): string {
        return "Elaborar e enviar à Assembleia Legislativa o Plano Plurianual (PPA) estadual.";
    }

    eleborarLDO(): string {
        return "Elaborar e enviar à Assembleia Legislativa a Lei de Diretrizes Orçamentárias (LDO) estadual.";
    }

    eleborarLOA(): string {
        return "Elaborar e enviar à Assembleia Legislativa a proposta de Lei Orçamentária Anual (LOA) estadual.";
    }

imprimeinfo(): void {
    console.log(`Nome: ${this.getNome()}`);
    console.log(`Partido: ${this.getPartido()}`);
    console.log(`Local de Trabalho: ${this.getLocalTrabalho()}`);
    console.log(`Endereço de Trabalho: ${this.getEndTrabalho()}`);
    console.log(`Remuneração: ${this.getRemuneracao()}`);
    console.log(`Projetos: ${this.getProjetos()}`);
    console.log(`Quantidade de Secretários: ${this.getQtdSecretarios()}`);
    console.log(`Estado: ${this.getEstado()}`);
}
}