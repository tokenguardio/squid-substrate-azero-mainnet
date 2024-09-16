import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v115 from '../v115'
import * as v160 from '../v160'
import * as v205 from '../v205'

export const proposed =  {
    name: 'TechnicalCommittee.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v108: new EventType(
        'TechnicalCommittee.Proposed',
        sts.struct({
            account: v108.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v108.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'TechnicalCommittee.Voted',
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v108: new EventType(
        'TechnicalCommittee.Voted',
        sts.struct({
            account: v108.AccountId32,
            proposalHash: v108.H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}

export const approved =  {
    name: 'TechnicalCommittee.Approved',
    /**
     * A motion was approved by the required threshold.
     */
    v108: new EventType(
        'TechnicalCommittee.Approved',
        sts.struct({
            proposalHash: v108.H256,
        })
    ),
}

export const disapproved =  {
    name: 'TechnicalCommittee.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    v108: new EventType(
        'TechnicalCommittee.Disapproved',
        sts.struct({
            proposalHash: v108.H256,
        })
    ),
}

export const executed =  {
    name: 'TechnicalCommittee.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v108: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v108.H256,
            result: sts.result(() => sts.unit(), () => v108.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v115: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v115.H256,
            result: sts.result(() => sts.unit(), () => v115.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v160: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v160.H256,
            result: sts.result(() => sts.unit(), () => v160.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v205: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v205.H256,
            result: sts.result(() => sts.unit(), () => v205.DispatchError),
        })
    ),
}

export const memberExecuted =  {
    name: 'TechnicalCommittee.MemberExecuted',
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    v108: new EventType(
        'TechnicalCommittee.MemberExecuted',
        sts.struct({
            proposalHash: v108.H256,
            result: sts.result(() => sts.unit(), () => v108.DispatchError),
        })
    ),
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    v115: new EventType(
        'TechnicalCommittee.MemberExecuted',
        sts.struct({
            proposalHash: v115.H256,
            result: sts.result(() => sts.unit(), () => v115.DispatchError),
        })
    ),
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    v160: new EventType(
        'TechnicalCommittee.MemberExecuted',
        sts.struct({
            proposalHash: v160.H256,
            result: sts.result(() => sts.unit(), () => v160.DispatchError),
        })
    ),
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    v205: new EventType(
        'TechnicalCommittee.MemberExecuted',
        sts.struct({
            proposalHash: v205.H256,
            result: sts.result(() => sts.unit(), () => v205.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'TechnicalCommittee.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v108: new EventType(
        'TechnicalCommittee.Closed',
        sts.struct({
            proposalHash: v108.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
