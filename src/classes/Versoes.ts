class V {
    private indice: number;
    private tituloVersao: string;
    private prefixo: string;
    private versao: string;

    constructor(indice: number, tituloVersao: string, prefixo: string, versao: string) {
        this.indice = indice;
        this.tituloVersao = tituloVersao;
        this.prefixo = prefixo;
        this.versao = versao;
    }

    public obterIndice(): number { return this.indice }
    public obterTituloVersao(): string { return this.tituloVersao }
    public obterPrefixo(): string { return this.prefixo }
    public obterVersao(): string { return this.versao }
}

class Versoes {
    private versoes: V[];

    constructor() {
        this.versoes = [
            new V(50, "Pequena modificação na forma em que mostra a versão atual",                "alpha", "0.7.7" ),
            new V(49, "Removido react-query das dependências",                                    "alpha", "0.7.6" ),
            new V(48, "Responsivo update: Atulaizado sistema de versões",                         "alpha", "0.7.5" ),
            new V(47, "Responsivo update: Atualização nas fontes",                                "alpha", "0.7.4" ),
            new V(46, "Responsivo update: Resolvido problemas no deploy",                         "alpha", "0.7.3" ),
            new V(45, "Responsivo update: Alterado cores do tema",                                "alpha", "0.7.2" ),
            new V(44, "Responsivo update: Melhorado responsividade do teclado",                   "alpha", "0.7.1" ),
            new V(43, "Responsivo update: WIP barra de rolagem no componente tela",               "alpha", "0.7.0" ),
            new V(42, "Reorganizado registro de versoes e display da versão atual automática",    "alpha", "0.6.6" ),
            new V(41, "Reorganizado sistema de enums",                                            "alpha", "0.6.5" ),
            new V(40, "Mapeado versões anteriores e inicio do contador de versões X",             "alpha", "0.6.4" ),
            new V(39, "removido 'cursor: pointer' em 'Teclado.css",                               "alpha", "0.6.3" ),
            new V(38, "Update README.md",                                                         "alpha", "0.6.2" ),
            new V(37, "Adicionado link do incide para Extensões",                                 "alpha", "0.6.1" ),
            new V(36, "Adicionado react-icons",                                                   "alpha", "0.6.0" ),
            new V(35, "Corrigido warnings",                                                       "alpha", "0.5.8" ),
            new V(34, "Ajustado alinhamento da calculadora quando a tela é muito grande (tem…",   "alpha", "0.5.7" ),
            new V(33, "Correção dos links no indice do README",                                   "alpha", "0.5.6" ),
            new V(32, "Adicionado indice ao REAME",                                               "alpha", "0.5.5" ),
            new V(31, "Correção de bugs nas imagens",                                             "alpha", "0.5.4" ),
            new V(30, "Atualizado README com instrodução ao app, como instalar, tecnologias …",   "alpha", "0.5.3" ),
            new V(29, "Atualizaçao no design",                                                    "alpha", "0.5.2" ),
            new V(28, "Adicionado cores em teclas especiais",                                     "alpha", "0.5.1" ),
            new V(27, "Implementado separador decimal (apenas virgula",                           "alpha", "0.5.0" ),
            new V(26, "Corrigito problema com o botão de divisão",                                "alpha", "0.4.1" ),
            new V(25, "Atualização no design",                                                    "alpha", "0.4.0" ),
            new V(24, "Desabilitado zoom no mobile",                                              "alpha", "0.3.14"),
            new V(23, "Atualizado nome e corde tema do aplicativo para a versão de testes",       "alpha", "0.3.13"),
            new V(22, "Arquivos 'temp' renomeados para 'enum' novamente após resolução do pr…",   "alpha", "0.3.12"),
            new V(21, "Arquivos 'enum' renomeado para 'temp' para resolver problema no deploy",   "alpha", "0.3.11"),
            new V(20, "Tentativa de resolver problema no deploy",                                 "alpha", "0.3.10"),
            new V(19, "Configurado ignorecase do git para 'false' para resolver problema no …",   "alpha", "0.3.9" ),
            new V(18, "Tentativa de resolver problema no deploy",                                 "alpha", "0.3.8" ),
            new V(17, "Tentativa de resolver problema no deploy",                                 "alpha", "0.3.7" ),
            new V(16, "Tentativa de resolver problema no deploy",                                 "alpha", "0.3.6" ),
            new V(15, "Tentativa de resolver problema no deploy",                                 "alpha", "0.3.5" ),
            new V(14, "Tentativa de resolver problema no deploy",                                 "alpha", "0.3.4" ),
            new V(13, "Tentativa de resolver problema no deploy",                                 "alpha", "0.3.3" ),
            new V(12, "Tentativa de resolver problema no deploy",                                 "alpha", "0.3.2" ),
            new V(11, "Adicionado arquivo index.ts em src/enums para tentar resolver problem…",   "alpha", "0.3.1" ),
            new V(10, "Removido contúdo referente ao react do readme",                            "alpha", "0.3.1" ),
            new V(9,  "- Implementado lógica para executar cálculos",                             "alpha", "0.3.0" ),
            new V(8,  "Atualizado design",                                                        "alpha", "0.2.0" ),
            new V(7,  "Alterado título da página",                                                "alpha", "0.1.2" ),
            new V(6,  "Adicionado arquivo .eslintrc.json para tentar resolver problema no de…",   "alpha", "0.1.1" ),
            new V(5,  "Adicionado teclado insere números e operações na expressão",               "alpha", "0.1.0" ),
            new V(4,  "Adicionado título para teste",                                             "alpha", "0.0.4" ),
            new V(3,  "Corrigido problemas no deploy",                                            "alpha", "0.0.3" ),
            new V(2,  "Projeto convertido para PWA",                                              "alpha", "0.0.2" ),
            new V(1,  "Iniciado projeto com typescript e criado componentes iniciais para teste", "alpha", "0.0.1" ),
            new V(0,  "Initialize project using Create React App",                                "alpha", "0.0.0" ),
        ]
    }

    public obterVersoes(): V[] {
        return this.versoes;
    }

    public obterVersaoAtual(): V {
        return this.versoes[0];
    }

    public obterDescricaoDeVersao() {
        const versaoAtual = this.obterVersaoAtual();
        return `${versaoAtual.obterPrefixo()}-${versaoAtual.obterVersao()}-teste`;
    }

}

export default Versoes;