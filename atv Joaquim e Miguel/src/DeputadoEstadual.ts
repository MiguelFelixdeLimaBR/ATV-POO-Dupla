import Politico from "./Politico.js";

export default class DeputadoEstadual extends Politico {
    private comissoes: string[]
    private estado: string;

    constructor(
        nome: string,
        partido: string,
        estado: string,
        localTrabalho: string,
        endTrabalho: string,
        remuneracao: number,
        projetos: string[],
        comissoes: string[]
    ) {
        super(nome, partido, "Estadual", "Legislativo", localTrabalho, endTrabalho, remuneracao, projetos);
        this.comissoes = comissoes;
        this.estado = estado;
    }

getcomissoes(): string {
    return this.comissoes.join(", ");
}

setcomissoes(comissoes: string[]): void {
    this.comissoes = comissoes;
}

getEstado(): string {
    return this.estado;
}

setEstado(estado: string): void {
    this.estado = estado;
}

mandato(): void {
        console.log("O deputado estadual propõe, discute e vota leis no âmbito estadual.");
    }

votarPPA(): string {
    return "O deputado estadual vota o Plano Plurianual (PPA) do estado.";
}

votarLOA(): string {
    return "O deputado estadual vota a Lei Orçamentária Anual (LOA) do estado.";
}

votarLDO(): string {   
    return "O deputado estadual vota a Lei de Diretrizes Orçamentárias (LDO) do estado.";
}

proporEmendaConstituicao(): string {
    return "O deputado estadual pode propor emendas à Constituição do estado.";
}

criarCPI(): string {
    return "O deputado estadual pode criar Comissões Parlamentares de Inquérito (CPI) para investigar assuntos de interesse público no estado.";
}

imprimirInformacoes(): void {
    console.log(`Nome: ${this.getNome()}`);
    console.log(`Partido: ${this.getPartido()}`);
    console.log(`Estado: ${this.getEstado()}`);
    console.log(`Local de Trabalho: ${this.getLocalTrabalho()}`);
    console.log(`Endereço de Trabalho: ${this.getEndTrabalho()}`);
    console.log(`Remuneração: R$ ${this.getRemuneracao().toFixed(2)}`);
    console.log(`Projetos: ${this.getProjetos().join(", ")}`);
    console.log(`Comissões: ${this.getcomissoes()}`);
}
}





   




        
   