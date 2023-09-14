[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/subsquid/squid-evm-template)

# Minimal EVM squid

This is a starter template of a squid indexer for EVM networks (Ethereum, Polygon, BSC, etc.). See [Squid SDK docs](https://docs.subsquid.io/) for a complete reference.

To extract EVM logs and transactions by a topic or a contract address, use `EvmBatchProcessor.addLog()` and `EvmBatchProcessor.addTransaction()` methods of the `EvmBatchProcessor` instance defined in `src/processor.ts`.

The requested data is transformed in batches by a single handler provided to the `processor.run()` method.

For a full list of supported networks and config options,
check the [`EvmBatchProcessor` overview](https://docs.subsquid.io/develop-a-squid/evm-processor/) and the [configuration page](https://docs.subsquid.io/develop-a-squid/evm-processor/configuration/).

For a step-by-step migration guide from TheGraph, see [the dedicated docs page](https://docs.subsquid.io/migrate/migrate-subgraph/).

Dependencies: Node.js, Docker.

## Quickstart

```bash
# 0. Install @subsquid/cli a.k.a. the sqd command globally
npm i -g @subsquid/cli

# 1. Retrieve the template
sqd init my_squid_name -t evm
cd my_squid_name

# 2. Install dependencies
npm ci

# 3. Start a Postgres database container and detach
sqd up

# 4. Build and start the processor
sqd process

# 5. The command above will block the terminal
#    being busy with fetching the chain data,
#    transforming and storing it in the target database.
#
#    To start the graphql server open the separate terminal
#    and run
sqd serve
```

A GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).

## Dev flow

### 1. Define database schema

Start development by defining the schema of the target database via `schema.graphql`.
Schema definition consists of regular graphql type declarations annotated with custom directives.
Full description of `schema.graphql` dialect is available [here](https://docs.subsquid.io/basics/schema-file).

### 2. Generate TypeORM classes

Mapping developers use TypeORM [EntityManager](https://typeorm.io/#/working-with-entity-manager)
to interact with target database during data processing. All necessary entity classes are
generated by the squid framework from `schema.graphql`. This is done by running `sqd codegen`
command.

### 3. Generate database migrations

All database changes are applied through migration files located at `db/migrations`.
`squid-typeorm-migration(1)` tool provides several commands to drive the process.

```bash
## drop create the database
sqd down
sqd up

## replace any old schemas with a new one made from the entities
sqd migration:generate
```

See [docs on database migrations](https://docs.subsquid.io/basics/db-migrations) for more details.

### 4. Import ABI contract and generate interfaces to decode events

It is necessary to import the respective ABI definition to decode EVM logs. One way to generate a type-safe facade class to decode EVM logs is by placing the relevant JSON ABIs to `./abi`, then using `squid-evm-typegen(1)` via an `sqd` script:

```bash
sqd typegen
```

See more details on the [`squid-evm-typegen` doc page](https://docs.subsquid.io/evm-indexing/squid-evm-typegen).

## Project conventions

Squid tools assume a certain [project layout](https://docs.subsquid.io/basics/squid-structure):

- All compiled js files must reside in `lib` and all TypeScript sources in `src`.
  The layout of `lib` must reflect `src`.
- All TypeORM classes must be exported by `src/model/index.ts` (`lib/model` module).
- Database schema must be defined in `schema.graphql`.
- Database migrations must reside in `db/migrations` and must be plain js files.
- `sqd(1)` and `squid-*(1)` executables consult `.env` file for environment variables.
