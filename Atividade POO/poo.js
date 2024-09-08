class Funcionarios{
    #nome
    #telefone
    #cargo
    #salario
    constructor(nome, telefone, cargo, salario){
        this.#nome = nome
        this.#telefone = telefone
        this.#cargo = cargo
        this.#salario = salario
    }

    set alteracaoSalarial(novoSalario) {
        if (novoSalario < this.#salario) {
            this.#salario = novoSalario
            console.log(`Houve uma diminuição do salário do funcionário para R$${this.#salario}`)
        } else if (novoSalario > this.#salario) {
            this.#salario = novoSalario
            console.log(`Seu salário com o aumento ficou: R$${this.#salario}`)
        } else {
            this.#salario = novoSalario
            console.log(`O salário permanece o mesmo: R$${this.#salario}`)
        }
        this.#salario = novoSalario
    }

    get nomeFuncionario () {
        return this.#nome
    }

    get telefoneFuncionario () {
        return this.#telefone
    }

    get cargoFuncionario () {
        return this.#cargo
    }

    get salarioFuncionario() {
        return this.#salario
    }
}

class Engenheiro extends Funcionarios{
    #atividadeEngenheiro

    constructor(nome, telefone, cargo, salario, atividadeEngenheiro){
    super(nome, telefone, cargo, salario)
        this.#atividadeEngenheiro = atividadeEngenheiro
    }

    get atividadeEngenheiro(){
        return this.#atividadeEngenheiro
    }

    funcaoSalario() {
        console.log(`O ${this.nomeFuncionario} recebe um salario de: ${this.salarioFuncionario}`)
    }

    funcaoAtividade(){
        console.log(`O ${this.nomeFuncionario}, que tem o cargo de ${this.cargoFuncionario}, exerce as atividades: ${this.#atividadeEngenheiro}`)
    }
}

class Designer extends Funcionarios{
    #atividadeDesigner
    constructor(nome, telefone, cargo, salario, atividadeDesigner){
    super(nome, telefone, cargo, salario)
    this.#atividadeDesigner = atividadeDesigner
    }

    get atividadeDesigner () {
        return this.#atividadeDesigner
    }

    funcaoSalario() {
        console.log(`O ${this.nomeFuncionario} recebe um salario de: ${this.salarioFuncionario}`)
    }

    funcaoAtividade(){
        console.log(`O ${this.nomeFuncionario}, que tem o cargo de ${this.cargoFuncionario}, exerce as atividades: ${this.#atividadeDesigner}`)
    }
}

const engenheiro = new Engenheiro("Antônio", 81996693129, "Engenheiro", 5000, ["Planejamento e Projeto", " Desenvolvimento e Implementação", " Gestão de Projetos", " Manutenção e Monitoramento", " Consultoria Técnica", " Comunicação e Documentação"])
engenheiro.funcaoSalario()
engenheiro.funcaoAtividade()
engenheiro.alteracaoSalarial = 6000

console.log("-------------")

const designer = new Designer("Rodrigo", 81987431036, "Designer", 3000, ["Criação de logotipos, identidades visuais e materiais de marca", " Design de peças para mídias sociais e marketing digital", " Manipulação e tratamento de imagens", " Criação de ilustrações e elementos gráficos"])
designer.funcaoSalario()
designer.funcaoAtividade()
designer.alteracaoSalarial = 7000