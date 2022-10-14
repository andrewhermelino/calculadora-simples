import { valorExisteEmEnum } from '../classes/Util';
import { EnumOperacao } from '../enums/EnumOperacao';

export class CerebroCalculadora {
    private expressao: string;
    private resultado: string;

    constructor(expressao: string = "") {
        this.expressao = expressao;
        this.resultado = "";
    }

    private obterExpressaoBaixoNivel(): string {
        let expressaoBaixoNivel = this.expressao;

        expressaoBaixoNivel = expressaoBaixoNivel.replace(EnumOperacao.MULTIPLICACAO, "*");

        if (expressaoBaixoNivel == "") {
            expressaoBaixoNivel = "0";
        }

        const ultimoCaractereExpressao = expressaoBaixoNivel[expressaoBaixoNivel.length-1];
        if (valorExisteEmEnum(ultimoCaractereExpressao, EnumOperacao)) {
            if (ultimoCaractereExpressao == EnumOperacao.MULTIPLICACAO || ultimoCaractereExpressao == EnumOperacao.DIVISAO) {
                expressaoBaixoNivel += "1";
            } else if (ultimoCaractereExpressao == EnumOperacao.ADICAO || ultimoCaractereExpressao == EnumOperacao.SUBTRACAO) {
                expressaoBaixoNivel += "0";
            }
        }

        return expressaoBaixoNivel;
    }

    private gerarResultado(): void {
        try {
            const expressao = this.obterExpressaoBaixoNivel();
            const resultado = eval(expressao);
            if (resultado != expressao) {
                this.resultado = resultado.toString();
            } else {
                this.resultado = "";
            }
        } catch (e) {
            const mostrarExceptions = false;
            if (window.location.href.includes("localhost") && mostrarExceptions) {
                console.log(
                    " >-------------------{ Exception em CerebroCalculadora.ts }-------------------< \n",
                    e,
                    "\n >--------------------------------------------------------------------------<"
                    );
            }
        }
    }

    public getResultado(): string {
        this.gerarResultado();
        return this.resultado;
    }

}