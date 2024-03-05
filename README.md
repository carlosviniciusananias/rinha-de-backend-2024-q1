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
---- Global Information --------------------------------------------------------
> request count                                      61503 (OK=61448  KO=55    )
> min response time                                      0 (OK=0      KO=1     )
> max response time                                   1040 (OK=1040   KO=381   )
> mean response time                                    30 (OK=30     KO=105   )
> std deviation                                        100 (OK=100    KO=115   )
> response time 50th percentile                          3 (OK=3      KO=62    )
> response time 75th percentile                         21 (OK=21     KO=156   )
> response time 95th percentile                         94 (OK=94     KO=344   )
> response time 99th percentile                        640 (OK=640    KO=363   )
> mean requests/sec                                251.033 (OK=250.808 KO=0.224 )
---- Response Time Distribution ------------------------------------------------
> t < 800 ms                                         61303 (100%)
> 800 ms <= t < 1200 ms                                145 (  0%)
> t >= 1200 ms                                           0 (  0%)
> failed                                                55 (  0%)
---- Errors --------------------------------------------------------------------
> status.find.in(422), but actually found 200                        20 (36,36%)
> jmesPath(ultimas_transacoes[0].descricao).find.is(danada), but     12 (21,82%)
 actually found toma
> jmesPath(ultimas_transacoes[0].descricao).find.is(danada), but      8 (14,55%)
 actually found descricao
> jmesPath(ultimas_transacoes[0].descricao).find.is(devolve), bu      3 ( 5,45%)
t actually found toma
> j.u.NoSuchElementException: No attribute named 'limite' is def      3 ( 5,45%)
ined
> jmesPath(saldo.total).find.is(0), but actually found 35995          2 ( 3,64%)
> jmesPath(ultimas_transacoes[0].descricao).find.is(devolve), bu      2 ( 3,64%)
t actually found descricao
> jmesPath(saldo.total).find.is(0), but actually found 2358           1 ( 1,82%)
> jmesPath(saldo.total).find.is(0), but actually found 1327           1 ( 1,82%)
> jmesPath(saldo.total).find.is(0), but actually found 2525           1 ( 1,82%)
> jmesPath(saldo.total).find.is(0), but actually found 12800          1 ( 1,82%)
> jmesPath(saldo.total).find.is(-25), but actually found 35994        1 ( 1,82%)
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