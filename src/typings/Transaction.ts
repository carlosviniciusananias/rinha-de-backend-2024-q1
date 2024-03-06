import { Client } from "./Client";

export interface Transaction extends Client {
  tipo: string;
  valor: number;
  descricao: string;
  realizada_em: Date;
}
