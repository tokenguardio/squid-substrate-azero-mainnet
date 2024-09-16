import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v962 from '../v962'
import * as v980 from '../v980'
import * as v990 from '../v990'
import * as v13000 from '../v13000'

export const createDistribution =  {
    name: 'FeeShare.create_distribution',
    v962: new CallType(
        'FeeShare.create_distribution',
        sts.struct({
            tokenType: sts.array(() => v962.CurrencyId),
            tokensProportion: sts.array(() => sts.tuple(() => [v962.AccountId32, v962.Perbill])),
            ifAuto: sts.boolean(),
        })
    ),
    v980: new CallType(
        'FeeShare.create_distribution',
        sts.struct({
            tokenType: sts.array(() => v980.CurrencyId),
            tokensProportion: sts.array(() => sts.tuple(() => [v980.AccountId32, v980.Perbill])),
            ifAuto: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::create_distribution`].
     */
    v990: new CallType(
        'FeeShare.create_distribution',
        sts.struct({
            tokenType: sts.array(() => v990.CurrencyId),
            tokensProportion: sts.array(() => sts.tuple(() => [v990.AccountId32, v990.Perbill])),
            ifAuto: sts.boolean(),
        })
    ),
}

export const editDistribution =  {
    name: 'FeeShare.edit_distribution',
    v962: new CallType(
        'FeeShare.edit_distribution',
        sts.struct({
            distributionId: sts.number(),
            tokenType: sts.option(() => sts.array(() => v962.CurrencyId)),
            tokensProportion: sts.option(() => sts.array(() => sts.tuple(() => [v962.AccountId32, v962.Perbill]))),
            ifAuto: sts.option(() => sts.boolean()),
        })
    ),
    v980: new CallType(
        'FeeShare.edit_distribution',
        sts.struct({
            distributionId: sts.number(),
            tokenType: sts.option(() => sts.array(() => v980.CurrencyId)),
            tokensProportion: sts.option(() => sts.array(() => sts.tuple(() => [v980.AccountId32, v980.Perbill]))),
            ifAuto: sts.option(() => sts.boolean()),
        })
    ),
    /**
     * See [`Pallet::edit_distribution`].
     */
    v990: new CallType(
        'FeeShare.edit_distribution',
        sts.struct({
            distributionId: sts.number(),
            tokenType: sts.option(() => sts.array(() => v990.CurrencyId)),
            tokensProportion: sts.option(() => sts.array(() => sts.tuple(() => [v990.AccountId32, v990.Perbill]))),
            ifAuto: sts.option(() => sts.boolean()),
        })
    ),
}

export const setEraLength =  {
    name: 'FeeShare.set_era_length',
    v962: new CallType(
        'FeeShare.set_era_length',
        sts.struct({
            eraLength: sts.number(),
        })
    ),
}

export const executeDistribute =  {
    name: 'FeeShare.execute_distribute',
    v962: new CallType(
        'FeeShare.execute_distribute',
        sts.struct({
            distributionId: sts.number(),
        })
    ),
}

export const deleteDistribution =  {
    name: 'FeeShare.delete_distribution',
    v962: new CallType(
        'FeeShare.delete_distribution',
        sts.struct({
            distributionId: sts.number(),
        })
    ),
}

export const setUsdConfig =  {
    name: 'FeeShare.set_usd_config',
    /**
     * USD Standard Accumulation Logic Configuration, can be overridden by the governance
     * 
     * - `distribution_id`: Distribution ID
     * - `target_value`: Target's USD based value
     * - `interval`: The interval of the cumulative clearing operation
     * - `target_account_id`: When the cumulative dollar value falls below the target_value,
     *   the funds will be transferred to the target_account_id
     */
    v13000: new CallType(
        'FeeShare.set_usd_config',
        sts.struct({
            distributionId: sts.number(),
            targetValue: sts.bigint(),
            interval: sts.number(),
            targetAccountId: v13000.AccountId32,
        })
    ),
}
