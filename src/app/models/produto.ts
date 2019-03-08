export class Produto {
  nome: string;
  preco: string;
  unidadeMedida: string;

  quantidade: number;

  pericivel: boolean;

  dataValidade: Date;
  dataFabricacao: Date;

  constructor(build) {
    this.nome = build.nome;
    this.preco = build.preco;
    this.unidadeMedida = build.unidadeMedida;

    this.quantidade = build.quantidade;

    this.pericivel = build.pericivel;

    if (build.dataValidade !== new Date(0) && build.dataValidade != null) {
      this.dataValidade = build.dataValidade;
    } else {
      this.dataValidade = null;
    }

    if (build.dataFabricacao !== new Date(0) && build.dataFabricacao != null) {
      this.dataFabricacao = build.dataFabricacao;
    } else {
      this.dataFabricacao = null;
    }
  }

  static get Builder() {

    class Builder {
      nome: string;
      preco: string;
      unidadeMedida: string;

      quantidade: number;

      pericivel: boolean;

      dataValidade: Date;
      dataFabricacao: Date;

      withNome(nome: string) {
        this.nome = nome;
        return this;
      }

      withPreco(preco: string) {
        this.preco = preco;
        return this;
      }

      withUnidadeMedida(unidadeMedida: string) {
        this.unidadeMedida = unidadeMedida;
        return this;
      }

      withQuantidade(quantidade: number) {
        this.quantidade = quantidade;
        return this;
      }

      withPericivel(pericivel: boolean) {
        this.pericivel = pericivel;
        return this;
      }

      withDataValidade(dataValidade: Date) {
        if (dataValidade !== new Date(0) && dataValidade != null) {
          this.dataValidade = dataValidade;
        } else {
          this.dataValidade = null;
        }
        return this;
      }

      withDataFabricacao(dataFabricacao: Date) {
        if (dataFabricacao !== new Date(0) && dataFabricacao != null) {
          this.dataFabricacao = dataFabricacao;
        } else {
          this.dataFabricacao = null;
        }
        return this;
      }

      build() {
        return new Produto(this);
      }
    }
    return Builder;
  }
}
