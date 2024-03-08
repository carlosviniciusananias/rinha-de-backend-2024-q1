CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  cliente_id INTEGER NOT NULL,
  nome VARCHAR(50) NOT NULL,
  limite INTEGER NOT NULL,
  valor INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE transacoes(
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER NOT NULL,
    valor INTEGER NOT NULL, 
    tipo CHAR(1) NOT NULL,
    descricao VARCHAR(10) NOT NULL,
    realizada_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_cliente_id FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

INSERT INTO clientes (cliente_id, nome, limite)
VALUES
  (1, 'o barato sai caro', 1000 * 100),
  (2, 'zan corp ltda', 800 * 100),
  (3, 'les cruders', 10000 * 100),
  (4, 'padaria joia de cocaia', 100000 * 100),
  (5, 'kid mais', 5000 * 100);