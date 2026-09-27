import Politico from "./Politico.js";
export default class DeputadoEstadual extends Politico {
    comissoes;
    estado;
    constructor(nome, partido, estado, localTrabalho, endTrabalho, remuneracao, projetos, comissoes) {
        super(nome, partido, "Estadual", "Legislativo", localTrabalho, endTrabalho, remuneracao, projetos);
        this.comissoes = comissoes;
        this.estado = estado;
    }
    getcomissoes() {
        return this.comissoes.join(", ");
    }
    setcomissoes(comissoes) {
        this.comissoes = comissoes;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    mandato() {
        console.log("O deputado estadual propõe, discute e vota leis no âmbito estadual.");
    }
    votarPPA() {
        return "O deputado estadual vota o Plano Plurianual (PPA) do estado.";
    }
    votarLOA() {
        return "O deputado estadual vota a Lei Orçamentária Anual (LOA) do estado.";
    }
    votarLDO() {
        return "O deputado estadual vota a Lei de Diretrizes Orçamentárias (LDO) do estado.";
    }
    proporEmendaConstituicao() {
        return "O deputado estadual pode propor emendas à Constituição do estado.";
    }
    criarCPI() {
        return "O deputado estadual pode criar Comissões Parlamentares de Inquérito (CPI) para investigar assuntos de interesse público no estado.";
    }
    imprimirInformacoes() {
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
