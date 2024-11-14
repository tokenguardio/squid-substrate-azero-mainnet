import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v954 from '../v954'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v974 from '../v974'
import * as v980 from '../v980'
import * as v990 from '../v990'
import * as v10000 from '../v10000'

export const createFarmingPool =  {
    name: 'Farming.create_farming_pool',
    v954: new CallType(
        'Farming.create_farming_pool',
        sts.struct({
            tokensProportion: sts.array(() => sts.tuple(() => [v954.CurrencyId, v954.Perbill])),
            basicRewards: sts.array(() => sts.tuple(() => [v954.CurrencyId, sts.bigint()])),
            gaugeInit: sts.option(() => sts.tuple(() => [v954.CurrencyId, sts.number(), sts.array(() => sts.tuple(() => [v954.CurrencyId, sts.bigint()]))])),
            minDepositToStart: sts.bigint(),
            afterBlockToStart: sts.number(),
            withdrawLimitTime: sts.number(),
            claimLimitTime: sts.number(),
            withdrawLimitCount: sts.number(),
        })
    ),
    v956: new CallType(
        'Farming.create_farming_pool',
        sts.struct({
            tokensProportion: sts.array(() => sts.tuple(() => [v956.CurrencyId, v956.Perbill])),
            basicRewards: sts.array(() => sts.tuple(() => [v956.CurrencyId, sts.bigint()])),
            gaugeInit: sts.option(() => sts.tuple(() => [v956.CurrencyId, sts.number(), sts.array(() => sts.tuple(() => [v956.CurrencyId, sts.bigint()]))])),
            minDepositToStart: sts.bigint(),
            afterBlockToStart: sts.number(),
            withdrawLimitTime: sts.number(),
            claimLimitTime: sts.number(),
            withdrawLimitCount: sts.number(),
        })
    ),
    v962: new CallType(
        'Farming.create_farming_pool',
        sts.struct({
            tokensProportion: sts.array(() => sts.tuple(() => [v962.CurrencyId, v962.Perbill])),
            basicRewards: sts.array(() => sts.tuple(() => [v962.CurrencyId, sts.bigint()])),
            gaugeInit: sts.option(() => sts.tuple(() => [v962.CurrencyId, sts.number(), sts.array(() => sts.tuple(() => [v962.CurrencyId, sts.bigint()]))])),
            minDepositToStart: sts.bigint(),
            afterBlockToStart: sts.number(),
            withdrawLimitTime: sts.number(),
            claimLimitTime: sts.number(),
            withdrawLimitCount: sts.number(),
        })
    ),
    v980: new CallType(
        'Farming.create_farming_pool',
        sts.struct({
            tokensProportion: sts.array(() => sts.tuple(() => [v980.CurrencyId, v980.Perbill])),
            basicRewards: sts.array(() => sts.tuple(() => [v980.CurrencyId, sts.bigint()])),
            gaugeInit: sts.option(() => sts.tuple(() => [v980.CurrencyId, sts.number(), sts.array(() => sts.tuple(() => [v980.CurrencyId, sts.bigint()]))])),
            minDepositToStart: sts.bigint(),
            afterBlockToStart: sts.number(),
            withdrawLimitTime: sts.number(),
            claimLimitTime: sts.number(),
            withdrawLimitCount: sts.number(),
        })
    ),
    /**
     * See [`Pallet::create_farming_pool`].
     */
    v990: new CallType(
        'Farming.create_farming_pool',
        sts.struct({
            tokensProportion: sts.array(() => sts.tuple(() => [v990.CurrencyId, v990.Perbill])),
            basicRewards: sts.array(() => sts.tuple(() => [v990.CurrencyId, sts.bigint()])),
            gaugeInit: sts.option(() => sts.tuple(() => [v990.CurrencyId, sts.number(), sts.array(() => sts.tuple(() => [v990.CurrencyId, sts.bigint()]))])),
            minDepositToStart: sts.bigint(),
            afterBlockToStart: sts.number(),
            withdrawLimitTime: sts.number(),
            claimLimitTime: sts.number(),
            withdrawLimitCount: sts.number(),
        })
    ),
    /**
     * See [`Pallet::create_farming_pool`].
     */
    v10000: new CallType(
        'Farming.create_farming_pool',
        sts.struct({
            tokensProportion: sts.array(() => sts.tuple(() => [v10000.CurrencyId, v10000.Perbill])),
            basicRewards: sts.array(() => sts.tuple(() => [v10000.CurrencyId, sts.bigint()])),
            gaugeInit: sts.option(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [v10000.CurrencyId, sts.bigint()]))])),
            minDepositToStart: sts.bigint(),
            afterBlockToStart: sts.number(),
            withdrawLimitTime: sts.number(),
            claimLimitTime: sts.number(),
            withdrawLimitCount: sts.number(),
        })
    ),
}

export const charge =  {
    name: 'Farming.charge',
    v954: new CallType(
        'Farming.charge',
        sts.struct({
            pid: sts.number(),
            rewards: sts.array(() => sts.tuple(() => [v954.CurrencyId, sts.bigint()])),
        })
    ),
    v956: new CallType(
        'Farming.charge',
        sts.struct({
            pid: sts.number(),
            rewards: sts.array(() => sts.tuple(() => [v956.CurrencyId, sts.bigint()])),
        })
    ),
    v962: new CallType(
        'Farming.charge',
        sts.struct({
            pid: sts.number(),
            rewards: sts.array(() => sts.tuple(() => [v962.CurrencyId, sts.bigint()])),
        })
    ),
    v980: new CallType(
        'Farming.charge',
        sts.struct({
            pid: sts.number(),
            rewards: sts.array(() => sts.tuple(() => [v980.CurrencyId, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::charge`].
     */
    v990: new CallType(
        'Farming.charge',
        sts.struct({
            pid: sts.number(),
            rewards: sts.array(() => sts.tuple(() => [v990.CurrencyId, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::charge`].
     */
    v10000: new CallType(
        'Farming.charge',
        sts.struct({
            pid: sts.number(),
            rewards: sts.array(() => sts.tuple(() => [v10000.CurrencyId, sts.bigint()])),
            ifGauge: sts.boolean(),
        })
    ),
}

export const deposit =  {
    name: 'Farming.deposit',
    v954: new CallType(
        'Farming.deposit',
        sts.struct({
            pid: sts.number(),
            addValue: sts.bigint(),
            gaugeInfo: sts.option(() => sts.tuple(() => [sts.bigint(), sts.number()])),
        })
    ),
    /**
     * Deposit the pool.
     * 
     * Mint the share to the exchanger and transfer the tokens to the pool. The state of the
     * pool should be `Ongoing` or `Charged`. The current block number should be greater than
     * or equal to the field `after_block_to_start` if the state of the pool is `Charged`.
     * 
     * - `pid`: The pool id.
     * - `add_value`: The value to deposit.
     */
    v14000: new CallType(
        'Farming.deposit',
        sts.struct({
            pid: sts.number(),
            addValue: sts.bigint(),
        })
    ),
}

export const withdraw =  {
    name: 'Farming.withdraw',
    v954: new CallType(
        'Farming.withdraw',
        sts.struct({
            pid: sts.number(),
            removeValue: sts.option(() => sts.bigint()),
        })
    ),
}

export const claim =  {
    name: 'Farming.claim',
    v954: new CallType(
        'Farming.claim',
        sts.struct({
            pid: sts.number(),
        })
    ),
}

export const withdrawClaim =  {
    name: 'Farming.withdraw_claim',
    v954: new CallType(
        'Farming.withdraw_claim',
        sts.struct({
            pid: sts.number(),
        })
    ),
}

export const forceRetirePool =  {
    name: 'Farming.force_retire_pool',
    v954: new CallType(
        'Farming.force_retire_pool',
        sts.struct({
            pid: sts.number(),
        })
    ),
}

export const setRetireLimit =  {
    name: 'Farming.set_retire_limit',
    v954: new CallType(
        'Farming.set_retire_limit',
        sts.struct({
            limit: sts.number(),
        })
    ),
}

export const closePool =  {
    name: 'Farming.close_pool',
    v954: new CallType(
        'Farming.close_pool',
        sts.struct({
            pid: sts.number(),
        })
    ),
}

export const resetPool =  {
    name: 'Farming.reset_pool',
    v954: new CallType(
        'Farming.reset_pool',
        sts.struct({
            pid: sts.number(),
            basicRewards: sts.option(() => sts.array(() => sts.tuple(() => [v954.CurrencyId, sts.bigint()]))),
            minDepositToStart: sts.option(() => sts.bigint()),
            afterBlockToStart: sts.option(() => sts.number()),
            withdrawLimitTime: sts.option(() => sts.number()),
            claimLimitTime: sts.option(() => sts.number()),
            withdrawLimitCount: sts.option(() => sts.number()),
            gaugeInit: sts.option(() => sts.tuple(() => [v954.CurrencyId, sts.number(), sts.array(() => sts.tuple(() => [v954.CurrencyId, sts.bigint()]))])),
        })
    ),
    v956: new CallType(
        'Farming.reset_pool',
        sts.struct({
            pid: sts.number(),
            basicRewards: sts.option(() => sts.array(() => sts.tuple(() => [v956.CurrencyId, sts.bigint()]))),
            minDepositToStart: sts.option(() => sts.bigint()),
            afterBlockToStart: sts.option(() => sts.number()),
            withdrawLimitTime: sts.option(() => sts.number()),
            claimLimitTime: sts.option(() => sts.number()),
            withdrawLimitCount: sts.option(() => sts.number()),
            gaugeInit: sts.option(() => sts.tuple(() => [v956.CurrencyId, sts.number(), sts.array(() => sts.tuple(() => [v956.CurrencyId, sts.bigint()]))])),
        })
    ),
    v962: new CallType(
        'Farming.reset_pool',
        sts.struct({
            pid: sts.number(),
            basicRewards: sts.option(() => sts.array(() => sts.tuple(() => [v962.CurrencyId, sts.bigint()]))),
            minDepositToStart: sts.option(() => sts.bigint()),
            afterBlockToStart: sts.option(() => sts.number()),
            withdrawLimitTime: sts.option(() => sts.number()),
            claimLimitTime: sts.option(() => sts.number()),
            withdrawLimitCount: sts.option(() => sts.number()),
            gaugeInit: sts.option(() => sts.tuple(() => [v962.CurrencyId, sts.number(), sts.array(() => sts.tuple(() => [v962.CurrencyId, sts.bigint()]))])),
        })
    ),
    v980: new CallType(
        'Farming.reset_pool',
        sts.struct({
            pid: sts.number(),
            basicRewards: sts.option(() => sts.array(() => sts.tuple(() => [v980.CurrencyId, sts.bigint()]))),
            minDepositToStart: sts.option(() => sts.bigint()),
            afterBlockToStart: sts.option(() => sts.number()),
            withdrawLimitTime: sts.option(() => sts.number()),
            claimLimitTime: sts.option(() => sts.number()),
            withdrawLimitCount: sts.option(() => sts.number()),
            gaugeInit: sts.option(() => sts.tuple(() => [v980.CurrencyId, sts.number(), sts.array(() => sts.tuple(() => [v980.CurrencyId, sts.bigint()]))])),
        })
    ),
    /**
     * See [`Pallet::reset_pool`].
     */
    v990: new CallType(
        'Farming.reset_pool',
        sts.struct({
            pid: sts.number(),
            basicRewards: sts.option(() => sts.array(() => sts.tuple(() => [v990.CurrencyId, sts.bigint()]))),
            minDepositToStart: sts.option(() => sts.bigint()),
            afterBlockToStart: sts.option(() => sts.number()),
            withdrawLimitTime: sts.option(() => sts.number()),
            claimLimitTime: sts.option(() => sts.number()),
            withdrawLimitCount: sts.option(() => sts.number()),
            gaugeInit: sts.option(() => sts.tuple(() => [v990.CurrencyId, sts.number(), sts.array(() => sts.tuple(() => [v990.CurrencyId, sts.bigint()]))])),
        })
    ),
    /**
     * See [`Pallet::reset_pool`].
     */
    v10000: new CallType(
        'Farming.reset_pool',
        sts.struct({
            pid: sts.number(),
            basicRewards: sts.option(() => sts.array(() => sts.tuple(() => [v10000.CurrencyId, sts.bigint()]))),
            minDepositToStart: sts.option(() => sts.bigint()),
            afterBlockToStart: sts.option(() => sts.number()),
            withdrawLimitTime: sts.option(() => sts.number()),
            claimLimitTime: sts.option(() => sts.number()),
            withdrawLimitCount: sts.option(() => sts.number()),
            gaugeInit: sts.option(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [v10000.CurrencyId, sts.bigint()]))])),
        })
    ),
}

export const killPool =  {
    name: 'Farming.kill_pool',
    v954: new CallType(
        'Farming.kill_pool',
        sts.struct({
            pid: sts.number(),
        })
    ),
}

export const editPool =  {
    name: 'Farming.edit_pool',
    v954: new CallType(
        'Farming.edit_pool',
        sts.struct({
            pid: sts.number(),
            basicRewards: sts.option(() => sts.array(() => sts.tuple(() => [v954.CurrencyId, sts.bigint()]))),
            withdrawLimitTime: sts.option(() => sts.number()),
            claimLimitTime: sts.option(() => sts.number()),
            gaugeBasicRewards: sts.option(() => sts.array(() => sts.tuple(() => [v954.CurrencyId, sts.bigint()]))),
            withdrawLimitCount: sts.option(() => sts.number()),
        })
    ),
    v956: new CallType(
        'Farming.edit_pool',
        sts.struct({
            pid: sts.number(),
            basicRewards: sts.option(() => sts.array(() => sts.tuple(() => [v956.CurrencyId, sts.bigint()]))),
            withdrawLimitTime: sts.option(() => sts.number()),
            claimLimitTime: sts.option(() => sts.number()),
            gaugeBasicRewards: sts.option(() => sts.array(() => sts.tuple(() => [v956.CurrencyId, sts.bigint()]))),
            withdrawLimitCount: sts.option(() => sts.number()),
        })
    ),
    v962: new CallType(
        'Farming.edit_pool',
        sts.struct({
            pid: sts.number(),
            basicRewards: sts.option(() => sts.array(() => sts.tuple(() => [v962.CurrencyId, sts.bigint()]))),
            withdrawLimitTime: sts.option(() => sts.number()),
            claimLimitTime: sts.option(() => sts.number()),
            gaugeBasicRewards: sts.option(() => sts.array(() => sts.tuple(() => [v962.CurrencyId, sts.bigint()]))),
            withdrawLimitCount: sts.option(() => sts.number()),
        })
    ),
    v980: new CallType(
        'Farming.edit_pool',
        sts.struct({
            pid: sts.number(),
            basicRewards: sts.option(() => sts.array(() => sts.tuple(() => [v980.CurrencyId, sts.bigint()]))),
            withdrawLimitTime: sts.option(() => sts.number()),
            claimLimitTime: sts.option(() => sts.number()),
            gaugeBasicRewards: sts.option(() => sts.array(() => sts.tuple(() => [v980.CurrencyId, sts.bigint()]))),
            withdrawLimitCount: sts.option(() => sts.number()),
        })
    ),
    /**
     * See [`Pallet::edit_pool`].
     */
    v990: new CallType(
        'Farming.edit_pool',
        sts.struct({
            pid: sts.number(),
            basicRewards: sts.option(() => sts.array(() => sts.tuple(() => [v990.CurrencyId, sts.bigint()]))),
            withdrawLimitTime: sts.option(() => sts.number()),
            claimLimitTime: sts.option(() => sts.number()),
            gaugeBasicRewards: sts.option(() => sts.array(() => sts.tuple(() => [v990.CurrencyId, sts.bigint()]))),
            withdrawLimitCount: sts.option(() => sts.number()),
        })
    ),
}

export const gaugeWithdraw =  {
    name: 'Farming.gauge_withdraw',
    v954: new CallType(
        'Farming.gauge_withdraw',
        sts.struct({
            gid: sts.number(),
        })
    ),
}

export const forceGaugeClaim =  {
    name: 'Farming.force_gauge_claim',
    v954: new CallType(
        'Farming.force_gauge_claim',
        sts.struct({
            gid: sts.number(),
        })
    ),
}

export const addBoostPoolWhitelist =  {
    name: 'Farming.add_boost_pool_whitelist',
    v974: new CallType(
        'Farming.add_boost_pool_whitelist',
        sts.struct({
            whitelist: sts.array(() => sts.number()),
        })
    ),
}

export const setNextRoundWhitelist =  {
    name: 'Farming.set_next_round_whitelist',
    v974: new CallType(
        'Farming.set_next_round_whitelist',
        sts.struct({
            whitelist: sts.array(() => sts.number()),
        })
    ),
}

export const vote =  {
    name: 'Farming.vote',
    v974: new CallType(
        'Farming.vote',
        sts.struct({
            voteList: sts.array(() => sts.tuple(() => [sts.number(), v974.Percent])),
        })
    ),
}

export const startBoostRound =  {
    name: 'Farming.start_boost_round',
    v974: new CallType(
        'Farming.start_boost_round',
        sts.struct({
            roundLength: sts.number(),
        })
    ),
}

export const endBoostRound =  {
    name: 'Farming.end_boost_round',
    v974: new CallType(
        'Farming.end_boost_round',
        sts.unit()
    ),
}

export const chargeBoost =  {
    name: 'Farming.charge_boost',
    v974: new CallType(
        'Farming.charge_boost',
        sts.struct({
            rewards: sts.array(() => sts.tuple(() => [v974.CurrencyId, sts.bigint()])),
        })
    ),
    v980: new CallType(
        'Farming.charge_boost',
        sts.struct({
            rewards: sts.array(() => sts.tuple(() => [v980.CurrencyId, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::charge_boost`].
     */
    v990: new CallType(
        'Farming.charge_boost',
        sts.struct({
            rewards: sts.array(() => sts.tuple(() => [v990.CurrencyId, sts.bigint()])),
        })
    ),
}
