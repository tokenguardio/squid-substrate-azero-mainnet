import { SubstrateBatchProcessor } from "@subsquid/substrate-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EventNorm, CallNorm } from "./model";
import {
  normalizeSystemEventsArgs,
  normalizeBalancesEventsArgs,
  // normalizeContractsEventsArgs,
  // normalizeContractsCallsArgs,
} from "./mappings";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: `https://efinity.archive.subsquid.io/graphql`,
  })
  .addEvent("*", {
    data: {
      event: true,
    },
  })
  .addCall("*", {
    data: {
      call: true,
      extrinsic: {
        success: true,
      },
    },
  });

processor.run(new TypeormDatabase(), async (ctx) => {
  let events: EventNorm[] = [];
  // let calls: CallNorm[] = [];
  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (
        item.kind === "event" &&
        !["System.ExtrinsicSuccess", "System.ExtrinsicFailed"].includes(
          item.event.name
        )
      ) {
        console.log(item.event.name);
      }
      // Check if the item is an event and if its name starts with one of the prefixes
      if (
        item.kind === "event" &&
        (item.event.name.startsWith("Balances.") ||
          item.event.name.startsWith("Contracts.") ||
          item.event.name.startsWith("System.")) &&
        !["System.ExtrinsicSuccess", "System.ExtrinsicFailed"].includes(
          item.event.name
        )
      ) {
        // Normalize the event arguments based on the prefix
        let args;
        switch (true) {
          case item.event.name.startsWith("Balances."):
            args = normalizeBalancesEventsArgs(ctx, item.event);
            break;
          // case item.event.name.startsWith("Contracts."):
          //   args = normalizeContractsEventsArgs(ctx, item.event);
          //   break;
          case item.event.name.startsWith("System."):
            args = normalizeSystemEventsArgs(ctx, item.event);
            break;
        }

        // Create a new event object and push it to the events array
        const event = new EventNorm({
          id: item.event.id,
          blockHash: block.header.hash,
          timestamp: new Date(block.header.timestamp),
          name: item.event.name,
          args,
          extrinsicSuccess: item.event.extrinsic?.success,
        });
        events.push(event);
      }
      // else if (
      //   item.kind === "call" &&
      //   item.call.name.startsWith("Contracts.")
      // ) {
      //   // Normalize the call arguments based on the prefix
      //   let args;
      //   switch (true) {
      //     case item.call.name.startsWith("Contracts."):
      //       args = normalizeContractsCallsArgs(ctx, item.call);
      //       break;
      //   }

      //   // Create a new call object and push it to the calls array
      //   const call = new CallNorm({
      //     id: item.call.id,
      //     blockHash: block.header.hash,
      //     timestamp: new Date(block.header.timestamp),
      //     name: item.call.name,
      //     args,
      //     success: item.call.success,
      //     origin: item.call.origin,
      //   });
      //   calls.push(call);
      // }
    }
  }
  await ctx.store.save(events);
  // await ctx.store.save(calls);
});
