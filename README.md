# rinhabackend_nodejs

This is a project written using [Express](https://expressjs.com/pt-br/), with the language Node.

The goal was to fulfill the requirements of the ["Rinha Backend - API Challenge"](https://github.com/zanfranceschi/rinha-de-backend-2024-q1).

The idea was to create a very simple set of API endpoints and run against a Gatling scenario stress-test, as per the instructions above.

You can use the "docker-compose.yml" provided to spin up the environment with the resource restrictions from the challenge and run the Gatling script against it.

When you want to run the stress test and monitor each container, you can use tmuxp to open htop to monitor the app, postgres, redis and nginx with:

    tmuxp load tmux-monitor.yaml

### Results

Click [here](https://github.com/zanfranceschi/rinha-de-backend-2024-q1) for the Gatling stress-test simulation script.

This is Gatling's results:

```
================================================================================
2024-03-04 23:47:19                                         240s elapsed
---- Requests ------------------------------------------------------------------
> Global                                                   (OK=44969  KO=14833 )
> validações                                               (OK=50     KO=73    )
> extratos                                                 (OK=1810   KO=0     )
> débitos                                                  (OK=23799  KO=14760 )
> créditos                                                 (OK=19310  KO=0     )
---- Errors --------------------------------------------------------------------
> status.find.in(200,422), but actually found 400                 14760 (99,51%)
> status.find.is(200), but actually found 400                        25 ( 0,17%)
> status.find.in(422), but actually found 200                        20 ( 0,13%)
> jmesPath(ultimas_transacoes[0].descricao).find.is(danada), but     12 ( 0,08%)
 actually found toma
> jmesPath(ultimas_transacoes[0].descricao).find.is(danada), but      8 ( 0,05%)
 actually found descricao
> jmesPath(ultimas_transacoes[0].descricao).find.is(devolve), bu      3 ( 0,02%)
t actually found toma
> jmesPath(saldo.total).find.is(0), but actually found 1              2 ( 0,01%)
> jmesPath(ultimas_transacoes[0].descricao).find.is(devolve), bu      2 ( 0,01%)
t actually found descricao
> jmesPath(saldo.total).find.is(-25), but actually found 0            1 ( 0,01%)

---- extratos ------------------------------------------------------------------
[########################################################################  ] 97%
          waiting: 50     / active: 0      / done: 1810  
---- validação concorrência transações - c -------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 25    
---- débitos -------------------------------------------------------------------
[#######################################################################-  ] 97%
          waiting: 1100   / active: 1      / done: 38559 
---- validação concorrência transações - d -------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 25    
---- validação HTTP 404 --------------------------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 1     
---- validação concorrência saldo - 0 ------------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 1     
---- validação concorrência saldo - -25 ----------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 1     
---- validações ----------------------------------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 5     
---- créditos ------------------------------------------------------------------
[#######################################################################   ] 97%
          waiting: 550    / active: 0      / done: 19310 
================================================================================


================================================================================
2024-03-04 23:47:24                                         245s elapsed
---- Requests ------------------------------------------------------------------
> Global                                                   (OK=46260  KO=15243 )
> validações                                               (OK=50     KO=73    )
> extratos                                                 (OK=1860   KO=0     )
> débitos                                                  (OK=24490  KO=15170 )
> créditos                                                 (OK=19860  KO=0     )
---- Errors --------------------------------------------------------------------
> status.find.in(200,422), but actually found 400                 15170 (99,52%)
> status.find.is(200), but actually found 400                        25 ( 0,16%)
> status.find.in(422), but actually found 200                        20 ( 0,13%)
> jmesPath(ultimas_transacoes[0].descricao).find.is(danada), but     12 ( 0,08%)
 actually found toma
> jmesPath(ultimas_transacoes[0].descricao).find.is(danada), but      8 ( 0,05%)
 actually found descricao
> jmesPath(ultimas_transacoes[0].descricao).find.is(devolve), bu      3 ( 0,02%)
t actually found toma
> jmesPath(saldo.total).find.is(0), but actually found 1              2 ( 0,01%)
> jmesPath(ultimas_transacoes[0].descricao).find.is(devolve), bu      2 ( 0,01%)
t actually found descricao
> jmesPath(saldo.total).find.is(-25), but actually found 0            1 ( 0,01%)

---- extratos ------------------------------------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 1860  
---- validação concorrência transações - c -------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 25    
---- débitos -------------------------------------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 39660 
---- validação concorrência transações - d -------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 25    
---- validação HTTP 404 --------------------------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 1     
---- validação concorrência saldo - 0 ------------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 1     
---- validação concorrência saldo - -25 ----------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 1     
---- validações ----------------------------------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 5     
---- créditos ------------------------------------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 19860 
================================================================================

Simulation RinhaBackendCrebitosSimulation completed in 245 seconds
Parsing log file(s)...
Parsing log file(s) done in 1s.
Generating reports...

================================================================================
---- Global Information --------------------------------------------------------
> request count                                      61503 (OK=46260  KO=15243 )
> min response time                                      0 (OK=0      KO=0     )
> max response time                                    216 (OK=216    KO=131   )
> mean response time                                     6 (OK=7      KO=4     )
> std deviation                                         13 (OK=14     KO=11    )
> response time 50th percentile                          2 (OK=2      KO=1     )
> response time 75th percentile                          4 (OK=4      KO=2     )
> response time 95th percentile                         24 (OK=25     KO=19    )
> response time 99th percentile                         76 (OK=80     KO=65    )
> mean requests/sec                                251.033 (OK=188.816 KO=62.216)
---- Response Time Distribution ------------------------------------------------
> t < 800 ms                                         46260 ( 75%)
> 800 ms <= t < 1200 ms                                  0 (  0%)
> t >= 1200 ms                                           0 (  0%)
> failed                                             15243 ( 25%)
---- Errors --------------------------------------------------------------------
> status.find.in(200,422), but actually found 400                 15170 (99,52%)
> status.find.is(200), but actually found 400                        25 ( 0,16%)
> status.find.in(422), but actually found 200                        20 ( 0,13%)
> jmesPath(ultimas_transacoes[0].descricao).find.is(danada), but     12 ( 0,08%)
 actually found toma
> jmesPath(ultimas_transacoes[0].descricao).find.is(danada), but      8 ( 0,05%)
 actually found descricao
> jmesPath(ultimas_transacoes[0].descricao).find.is(devolve), bu      3 ( 0,02%)
t actually found toma
> jmesPath(ultimas_transacoes[0].descricao).find.is(devolve), bu      2 ( 0,01%)
t actually found descricao
> jmesPath(saldo.total).find.is(0), but actually found 1              2 ( 0,01%)
> jmesPath(saldo.total).find.is(-25), but actually found 0            1 ( 0,01%)
================================================================================
```

![Graph 1](https://prnt.sc/K06D-d-PxMvY)

![Graph 2](https://prnt.sc/_c0saUzfFfD9)

### Setting up the project

1. Install deps `npm install`
2. Run `npm start`

### Using Docker for development

1. [Install Docker](https://docs.docker.com/engine/install/)
1. Run `docker compose up -f dev-docker-compose.yml`

To configure the container, update the `docker-compose.yml` file, and the `docker/development.dockerfile` file.