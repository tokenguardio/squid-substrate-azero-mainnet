import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v244 from '../v244'

export const processingFailed =  {
    name: 'MessageQueue.ProcessingFailed',
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    v244: new EventType(
        'MessageQueue.ProcessingFailed',
        sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: v244.H256,
            /**
             * The queue of the message.
             */
            origin: v244.AggregateMessageOrigin,
            /**
             * The error that occurred.
             * 
             * This error is pretty opaque. More fine-grained errors need to be emitted as events
             * by the `MessageProcessor`.
             */
            error: v244.ProcessMessageError,
        })
    ),
}

export const processed =  {
    name: 'MessageQueue.Processed',
    /**
     * Message is processed.
     */
    v244: new EventType(
        'MessageQueue.Processed',
        sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: v244.H256,
            /**
             * The queue of the message.
             */
            origin: v244.AggregateMessageOrigin,
            /**
             * How much weight was used to process the message.
             */
            weightUsed: v244.Weight,
            /**
             * Whether the message was processed.
             * 
             * Note that this does not mean that the underlying `MessageProcessor` was internally
             * successful. It *solely* means that the MQ pallet will treat this as a success
             * condition and discard the message. Any internal error needs to be emitted as events
             * by the `MessageProcessor`.
             */
            success: sts.boolean(),
        })
    ),
}

export const overweightEnqueued =  {
    name: 'MessageQueue.OverweightEnqueued',
    /**
     * Message placed in overweight queue.
     */
    v244: new EventType(
        'MessageQueue.OverweightEnqueued',
        sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: sts.bytes(),
            /**
             * The queue of the message.
             */
            origin: v244.AggregateMessageOrigin,
            /**
             * The page of the message.
             */
            pageIndex: sts.number(),
            /**
             * The index of the message within the page.
             */
            messageIndex: sts.number(),
        })
    ),
}

export const pageReaped =  {
    name: 'MessageQueue.PageReaped',
    /**
     * This page was reaped.
     */
    v244: new EventType(
        'MessageQueue.PageReaped',
        sts.struct({
            /**
             * The queue of the page.
             */
            origin: v244.AggregateMessageOrigin,
            /**
             * The index of the page.
             */
            index: sts.number(),
        })
    ),
}
