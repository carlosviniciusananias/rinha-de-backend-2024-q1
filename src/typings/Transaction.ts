import { Client } from "./Client";

export interface Transaction extends Client {
  tipo: string;
  descricao: string;
  realizada_em: Date;
}
