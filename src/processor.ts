import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
  Trace as _Trace,
} from "@subsquid/evm-processor";
import { assertNotNull } from "@subsquid/util-internal";
import * as erc20Abi from "./abi/erc20";
import { getEnvBoolean } from "./utils/utils";

export const processor = new EvmBatchProcessor()
  .setGateway(assertNotNull(process.env.GATEWAY_URL))
  .setRpcEndpoint({
    url: assertNotNull(process.env.RPC_ENDPOINT),
    rateLimit: 10,
  })
  .setRpcDataIngestionSettings({
    disabled: getEnvBoolean(process.env.RPC_INGESTION_DISABLED, true),
  })
  .setFinalityConfirmation(
    process.env.FINALITY_CONFIRMATION
      ? Number(process.env.FINALITY_CONFIRMATION)
      : 75
  )
  .includeAllBlocks()
  .setBlockRange({
    from: process.env.BLOCK_RANGE_FROM
      ? Number(process.env.BLOCK_RANGE_FROM)
      : 0,
    to: process.env.BLOCK_RANGE_TO
      ? Number(process.env.BLOCK_RANGE_TO)
      : undefined,
  })
  .addTransaction({})
  .addLog({
    topic0: [erc20Abi.events.Transfer.topic],
  })
  .setFields({
    transaction: {
      input: true,
      value: true,
      gasUsed: true,
      contractAddress: true,
      type: true,
      status: true,
      sighash: true,
      effectiveGasPrice: true,
    },
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type Trace = _Trace<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
