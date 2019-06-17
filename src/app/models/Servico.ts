import { GrupoServico } from "./GrupoServico";
import { ServicoShort } from "./ServicoShort";
import { Classificacao } from "./Classificacao";

export class Servico {

    id: number;

    nome: string;
    comunicacaoAssunto: string;
    comunicacaoMensagem: string;

    grupoServico: GrupoServico;
    servicoPai: ServicoShort;


    matrizFilial: number;
    controleDePrazo: number;
    diaVencimento: number;
    diasAntecedenciaInicio: number;
    diasAntecedenciaEntrega: number;
    antePost: number;
    competencia: number;

    ativo: number;
    servicoAvulso: number;
    servicoFaturado: number;
    permiteBaixaManual: number;
    baixaCompetenciasAnteriores: number;

    // Gerar para Empresas com Situação
    isAtiva: boolean;
    isInativo: boolean;
    isSuspenso: boolean;
    isParalisado: boolean;
    isBaixada: boolean;
    isRescindida: boolean;
    isProcessoBaixa: boolean;
    isProcessoRescisao: boolean;

    comunicaCliente: boolean;
    diaUtil: boolean;
    mesJan: boolean;
    mesFev: boolean;
    mesMar: boolean;
    mesAbr: boolean;
    mesMai: boolean;
    mesJun: boolean;
    mesJul: boolean;
    mesAgo: boolean;
    mesSet: boolean;
    mesOut: boolean;
    mesNov: boolean;
    mesDez: boolean;

    controlaVencimento: boolean;

    baixaPorGuia: [any];
    perfil: any;

    constructor(build) {
        this.id = build.id;

        this.nome = build.nome;
        this.comunicacaoAssunto = build.comunicacaoAssunto;
        this.comunicacaoMensagem = build.comunicacaoMensagem;

        if (typeof build.grupoServico != "undefined" && build.grupoServico != null) {
            this.grupoServico = new GrupoServico(build.grupoServico);
        } else {
            this.grupoServico = null;
        }

        if (typeof build.servicoPai != "undefined" && build.servicoPai != null) {
            this.servicoPai = new ServicoShort(build.servicoPai);
        } else {
            this.servicoPai = null;
        }

        if (typeof build.perfil != "undefined" && build.perfil != null) {
            this.perfil = build.perfil;
        } else {
            this.perfil = null;
        }

        this.matrizFilial = build.matrizFilial;
        this.controleDePrazo = build.controleDePrazo;
        this.diaVencimento = build.diaVencimento;
        this.diasAntecedenciaInicio = build.diasAntecedenciaInicio;
        this.diasAntecedenciaEntrega = build.diasAntecedenciaEntrega;
        this.antePost = build.antePost;
        this.competencia = build.competencia;

        this.ativo = build.ativo;
        this.servicoAvulso = build.servicoAvulso;
        this.servicoFaturado = build.servicoFaturado;
        this.permiteBaixaManual = build.permiteBaixaManual;
        this.baixaCompetenciasAnteriores = build.baixaCompetenciasAnteriores;

        this.isAtiva = build.isAtiva;
        this.isInativo = build.isInativo;
        this.isSuspenso = build.isSuspenso;
        this.isParalisado = build.isParalisado;
        this.isBaixada = build.isBaixada;
        this.isRescindida = build.isRescindida;
        this.isProcessoBaixa = build.isProcessoBaixa;
        this.isProcessoRescisao = build.isProcessoRescisao;

        this.comunicaCliente = build.comunicaCliente;
        this.diaUtil = build.diaUtil;
        this.mesJan = build.mesJan;
        this.mesFev = build.mesFev;
        this.mesMar = build.mesMar;
        this.mesAbr = build.mesAbr;
        this.mesMai = build.mesMai;
        this.mesJun = build.mesJun;
        this.mesJul = build.mesJul;
        this.mesAgo = build.mesAgo;
        this.mesSet = build.mesSet;
        this.mesOut = build.mesOut;
        this.mesNov = build.mesNov;
        this.mesDez = build.mesDez;
        this.controlaVencimento = build.controlaVencimento;

        this.baixaPorGuia = build.baixaPorGuia
    }

    static get Builder() {
        class Builder {
            id: number;

            nome: string;
            comunicacaoAssunto: string;
            comunicacaoMensagem: string;

            grupoServico: GrupoServico;
            servicoPai: ServicoShort;

            matrizFilial: number;
            controleDePrazo: number;
            diaVencimento: number;
            diasAntecedenciaInicio: number;
            diasAntecedenciaEntrega: number;
            antePost: number;
            competencia: number;

            ativo: number;
            servicoAvulso: number;
            servicoFaturado: number;
            permiteBaixaManual: number;
            baixaCompetenciasAnteriores: number;

            isAtiva: boolean;
            isInativo: boolean;
            isSuspenso: boolean;
            isParalisado: boolean;
            isBaixada: boolean;
            isRescindida: boolean;
            isProcessoBaixa: boolean;
            isProcessoRescisao: boolean;

            comunicaCliente: boolean;
            diaUtil: boolean;
            mesJan: boolean;
            mesFev: boolean;
            mesMar: boolean;
            mesAbr: boolean;
            mesMai: boolean;
            mesJun: boolean;
            mesJul: boolean;
            mesAgo: boolean;
            mesSet: boolean;
            mesOut: boolean;
            mesNov: boolean;
            mesDez: boolean;
            controlaVencimento: boolean;

            baixaPorGuia: [any];
            perfil: any;

            constructor(id) {
                this.id = id
            }

            public withNome(nome: string) {
                this.nome = nome;
                return this;
            }

            public withComunicacaoAssunto(comunicacaoAssunto: string) {
                this.comunicacaoAssunto = comunicacaoAssunto;
                return this;
            }

            public withComunicacaoMensagem(comunicacaoMensagem: string) {
                this.comunicacaoMensagem = comunicacaoMensagem;
                return this;
            }

            public withGrupoServico(grupoServico: any) {
                if (typeof grupoServico != "undefined" && grupoServico != null) {
                    this.grupoServico = new GrupoServico(grupoServico);
                } else {
                    this.grupoServico = null;
                }
                return this;
            }

            public withServicoPai(servicoPai: any) {
                if (typeof servicoPai != "undefined" && servicoPai != null) {
                    this.servicoPai = new ServicoShort(servicoPai);
                } else {
                    this.servicoPai = null;
                }
                return this;
            }

            public withPerfil(perfil: any) {
                if (typeof perfil != "undefined" && perfil != null) {
                    this.perfil = perfil;
                } else {
                    this.perfil = null;
                }
                return this;
            }

            public withMatrizFilial(matrizFilial: number) {
                this.matrizFilial = matrizFilial;
                return this;
            }

            public withControleDePrazo(controleDePrazo: number) {
                this.controleDePrazo = controleDePrazo;
                return this;
            }

            public withDiaVencimento(diaVencimento: number) {
                this.diaVencimento = diaVencimento;
                return this;
            }

            public withDiasAntecedenciaInicio(diasAntecedenciaInicio: number) {
                this.diasAntecedenciaInicio = diasAntecedenciaInicio;
                return this;
            }

            public withDiasAntecedenciaEntrega(diasAntecedenciaEntrega: number) {
                this.diasAntecedenciaEntrega = diasAntecedenciaEntrega;
                return this;
            }

            public withAntePost(antePost: number) {
                this.antePost = antePost;
                return this;
            }

            public withCompetencia(competencia: number) {
                this.competencia = competencia;
                return this;
            }

            public withAtivo(ativo: number) {
                this.ativo = ativo;
                return this;
            }

            public withServicoAvulso(servicoAvulso: number) {
                this.servicoAvulso = servicoAvulso;
                return this;
            }

            public withServicoFaturado(servicoFaturado: number) {
                this.servicoFaturado = servicoFaturado;
                return this;
            }

            public withPermiteBaixaManual(permiteBaixaManual: number) {
                this.permiteBaixaManual = permiteBaixaManual;
                return this;
            }

            public withBaixaCompetenciasAnteriores(baixaCompetenciasAnteriores: number) {
                this.baixaCompetenciasAnteriores = baixaCompetenciasAnteriores;
                return this;
            }

            public withIsAtiva(isAtiva: boolean) {
                this.isAtiva = isAtiva;
                return this;
            }

            public withIsInativo(isInativo: boolean) {
                this.isInativo = isInativo;
                return this;
            }

            public withIsSuspenso(isSuspenso: boolean) {
                this.isSuspenso = isSuspenso;
                return this;
            }
            public withIsParalisado(isParalisado: boolean) {
                this.isParalisado = isParalisado;
                return this;
            }

            public withIsBaixada(isBaixada: boolean) {
                this.isBaixada = isBaixada;
                return this;
            }
            public withIsRescindida(isRescindida: boolean) {
                this.isRescindida = isRescindida;
                return this;
            }

            public withIsProcessoBaixa(isProcessoBaixa: boolean) {
                this.isProcessoBaixa = isProcessoBaixa;
                return this;
            }

            public withIsProcessoRescisao(isProcessoRescisao: boolean) {
                this.isProcessoRescisao = isProcessoRescisao;
                return this;
            }

            public withComunicaCliente(comunicaCliente: boolean) {
                this.comunicaCliente = comunicaCliente;
                return this;
            }

            public withDiaUtil(diaUtil: boolean) {
                this.diaUtil = diaUtil;
                return this;
            }

            public withMesJan(mesJan: boolean) {
                this.mesJan = mesJan;
                return this;
            }

            public withMesFev(mesFev: boolean) {
                this.mesFev = mesFev;
                return this;
            }

            public withMesMar(mesMar: boolean) {
                this.mesMar = mesMar;
                return this;
            }

            public withMesAbr(mesAbr: boolean) {
                this.mesAbr = mesAbr;
                return this;
            }

            public withMesMai(mesMai: boolean) {
                this.mesMai = mesMai;
                return this;
            }

            public withMesJun(mesJun: boolean) {
                this.mesJun = mesJun;
                return this;
            }

            public withMesJul(mesJul: boolean) {
                this.mesJul = mesJul;
                return this;
            }

            public withMesAgo(mesAgo: boolean) {
                this.mesAgo = mesAgo;
                return this;
            }

            public withMesSet(mesSet: boolean) {
                this.mesSet = mesSet;
                return this;
            }

            public withMesOut(mesOut: boolean) {
                this.mesOut = mesOut;
                return this;
            }

            public withMesNov(mesNov: boolean) {
                this.mesNov = mesNov;
                return this;
            }

            public withMesDez(mesDez: boolean) {
                this.mesDez = mesDez;
                return this;
            }

            public withControlaVencimento(controlaVencimento: boolean) {
                this.controlaVencimento = controlaVencimento;
                return this;
            }

            public withBaixaPorGuia(baixaPorGuia: any) {
                if (typeof baixaPorGuia != "undefined" && baixaPorGuia != null) {
                    this.baixaPorGuia = baixaPorGuia
                } else {
                    this.baixaPorGuia = null;
                }
                return this;
            }

            build() {
                return new Servico(this);
            }
        }
        return Builder;
    }
}



