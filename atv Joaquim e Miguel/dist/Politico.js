export default class Politico {
    nome;
    partido;
    esfera;
    poder;
    localTrabalho;
    endTrabalho;
    remuneracao;
    projetos;
    constructor(nome, partido, esfera, poder, localTrabalho, endTrabalho, remuneracao, projetos) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.endTrabalho = endTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getPartido() {
        return this.partido;
    }
    setPartido(partido) {
        this.partido = partido;
    }
    getEsfera() {
        return this.esfera;
    }
    setEsfera(esfera) {
        this.esfera = esfera;
    }
    getPoder() {
        return this.poder;
    }
    setPoder(poder) {
        this.poder = poder;
    }
    getLocalTrabalho() {
        return this.localTrabalho;
    }
    setLocalTrabalho(localTrabalho) {
        this.localTrabalho = localTrabalho;
    }
    getEndTrabalho() {
        return this.endTrabalho;
    }
    setEndTrabalho(endTrabalho) {
        this.endTrabalho = endTrabalho;
    }
    getRemuneracao() {
        return this.remuneracao;
    }
    setRemuneracao(remuneracao) {
        this.remuneracao = remuneracao;
    }
    getProjetos() {
        return this.projetos;
    }
    setProjetos(projetos) {
        this.projetos = projetos;
    }
}
