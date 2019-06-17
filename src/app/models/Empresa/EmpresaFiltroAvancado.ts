import { Classificacao } from "../Classificacao";
import { RegimeTributario } from "../RegimeTributario";
import { Cnae } from "../Cnae";
import { DepartamentoShort } from "../DepartamentoShort";
import { UsuarioShort } from "../UsuarioShort";

export class EmpresaFiltroAvancado {
   codigoERP: string;
   codigosERP: Array<string>;

   razaoSocial: string;
   cnpj: string;

   matriz: boolean;

   situacao: number;

   classificacao: Array<any>;

   regimeTributario: Array<any>;

   cnaePrincipal: Array<any>;

   departamento: DepartamentoShort;

   responsavel: UsuarioShort;

   caracteristicas: Array<any>;

   constructor(build) {
      this.codigoERP = build.codigoERP;
      if (typeof build.codigosERP != null && build.codigosERP != "undefined") {
         this.codigosERP = build.codigosERP;
       } else {
         this.codigosERP = null;
       }   

      this.razaoSocial = build.razaoSocial;
      this.cnpj = build.cnpj;

      this.matriz = build.matriz;

      this.situacao = build.situacao;

      if (typeof build.classificacao != null && build.classificacao != "undefined") {
         this.classificacao = build.classificacao;
      } else {
         this.classificacao = null;
      }

      if (typeof build.regimeTributario != null && build.regimeTributario != "undefined") {
         this.regimeTributario = build.regimeTributario;
      } else {
         this.regimeTributario = null;
      }

      if (typeof build.cnaePrincipal != null && build.cnaePrincipal != "undefined") {
         this.cnaePrincipal = build.cnaePrincipal;
      } else {
         this.cnaePrincipal = null;
      }

      if (typeof build.departamento != null && build.departamento != "undefined") {
         this.departamento = new DepartamentoShort(build.departamento);
      } else {
         this.departamento = null;
      }

      if (typeof build.responsavel != null && build.responsavel != "undefined") {
         this.responsavel = new UsuarioShort(build.responsavel);
      } else {
         this.responsavel = null;
      }
      
      if (typeof build.caracteristicas != null && build.caracteristicas != "undefined") {
         this.caracteristicas = build.caracteristicas;
      } else {
         this.caracteristicas = null;
      }
   }

   static get Builder() {
      class Builder {
         codigoERP: string;
         codigosERP: Array<string>;

         razaoSocial: string;
         cnpj: string;

         matriz: boolean;

         situacao: number;

         classificacao: Array<any>;

         regimeTributario: Array<any>;

         cnaePrincipal: Array<any>;

         departamento: DepartamentoShort;

         responsavel: UsuarioShort;
         
         caracteristicas: Array<any>;

         constructor() { }

         withCodigoERP(codigoERP: string) {
            this.codigoERP = codigoERP;
            return this;
         }

         withCodigosERP(codigosERP: Array<string>) {
            if (typeof codigosERP != null && typeof codigosERP != "undefined") {
              this.codigosERP = codigosERP;
            } else {
              this.codigosERP = null;
            }
            return this;
          }

         withRazaoSocial(razaoSocial: string) {
            this.razaoSocial = razaoSocial;
            return this;
         }

         withCnpj(cnpj: string) {
            this.cnpj = cnpj;
            return this;
         }

         withMatriz(matriz: boolean) {
            this.matriz = matriz;
            return this;
         }

         withSituacao(situacao: number) {
            this.situacao = situacao;
            return this;
         }

         withClassificacao(classificacao: any) {
            if (typeof classificacao != null && classificacao != "undefined") {
               this.classificacao = classificacao;
            } else {
               this.classificacao = null;
            }
            return this;
         }

         withRegimeTributario(regimeTributario: any) {
            if (typeof regimeTributario != null && regimeTributario != "undefined") {
               this.regimeTributario = regimeTributario;
            } else {
               this.regimeTributario = null;
            }
            return this;
         }

         withCnaePrincipal(cnaePrincipal: any) {
            if (typeof cnaePrincipal != null && cnaePrincipal != "undefined") {
               this.cnaePrincipal = cnaePrincipal;
            } else {
               this.cnaePrincipal = null;
            }
            return this;
         }

         withDepartamento(departamento: any) {
            if (typeof departamento != null && departamento != "undefined") {
               this.departamento = new DepartamentoShort(departamento);
            } else {
               this.departamento = null;
            }
            return this;
         }

         withResponsavel(responsavel: any) {
            if (typeof responsavel != null && responsavel != "undefined") {
               this.responsavel = new UsuarioShort(responsavel);
            } else {
               this.responsavel = null;
            }
            return this;
         }
         
         withCaracteristicas(caracteristicas: any) {
            if (typeof caracteristicas != null && caracteristicas != "undefined") {
               this.caracteristicas = caracteristicas;
            } else {
               this.caracteristicas = null;
            }
            return this;
         }

         build() {
            return new EmpresaFiltroAvancado(this);
         }
      }
      return Builder;
   }
}