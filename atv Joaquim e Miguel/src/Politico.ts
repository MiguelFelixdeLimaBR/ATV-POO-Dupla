export abstract class Politico {
    nome: string;
    partido: string;
    esfera: string;
    poder: string;
    localTrabalho: string;
    endTrabalho: string;
    remuneracao: number;
    projetos: string[];
	
    constructor(nome: string, partido: string, esfera: string, poder: string, localTrabalho: string, endTrabalho: string, remuneracao: number, projetos: string[]) {
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
    setNome(nome: string) {
        this.nome = nome;
    }
    getPartido() {
        return this.partido;
    }
    setPartido(partido: string) {
        this.partido = partido;
    }
    getEsfera() {
        return this.esfera;
    }
    setEsfera(esfera: string) {
        this.esfera = esfera;
    }
    getPoder() {
        return this.poder;
    }
    setPoder(poder: string) {
        this.poder = poder;
    }
    getLocalTrabalho() {
        return this.localTrabalho;
    }
    setLocalTrabalho(localTrabalho: string) {
        this.localTrabalho = localTrabalho;
    }
    getEndTrabalho() {
        return this.endTrabalho;
    }
    setEndTrabalho(endTrabalho: string) {
        this.endTrabalho = endTrabalho;
    }
    getRemuneracao() {
        return this.remuneracao;
    }
    setRemuneracao(remuneracao: number) {
        this.remuneracao = remuneracao;
    }
    getProjetos() {
        return this.projetos;
    }
    setProjetos(projetos: string[]) {
        this.projetos = projetos;
    }
}
