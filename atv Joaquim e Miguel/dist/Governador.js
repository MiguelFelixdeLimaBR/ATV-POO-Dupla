import Politico from "./Politico.js";
export default class Governador extends Politico {
    estado;
    qtdsecretarios;
    constructor(nome, partido, localTrabalho, endTrabalho, remuneracao, projetos, estado, qtdsecretarios) {
        super(nome, partido, "Estadual", "Executivo", localTrabalho, endTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.qtdsecretarios = qtdsecretarios;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getQtdSecretarios() {
        return this.qtdsecretarios;
    }
    setQtdSecretarios(qtdsecretarios) {
        this.qtdsecretarios = qtdsecretarios;
    }
    mandato() {
        console.log(`O governador de ${this.getEstado()} sanciona leis estaduais, veta leis estaduais, decreta estado de calamidade e envia PEC à Assembleia Legislativa.`);
    }
    gerirPoliciaMilitar() {
        return "Gerir a Polícia Militar do estado.";
    }
    administrarRodoviasEstaduais() {
        return "Administrar as rodovias estaduais.";
    }
    coordenarEducacao() {
        return "Coordenar a educação no estado.";
    }
    coordenarSaude() {
        return "Coordenar a saúde no estado.";
    }
    eleborarPPA() {
        return "Elaborar e enviar à Assembleia Legislativa o Plano Plurianual (PPA) estadual.";
    }
    eleborarLDO() {
        return "Elaborar e enviar à Assembleia Legislativa a Lei de Diretrizes Orçamentárias (LDO) estadual.";
    }
    eleborarLOA() {
        return "Elaborar e enviar à Assembleia Legislativa a proposta de Lei Orçamentária Anual (LOA) estadual.";
    }
    imprimeinfo() {
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
