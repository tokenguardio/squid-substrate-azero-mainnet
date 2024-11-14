import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v970 from '../v970'
import * as v971 from '../v971'
import * as v978 from '../v978'
import * as v980 from '../v980'
import * as v990 from '../v990'
import * as v992 from '../v992'
import * as v996 from '../v996'
import * as v10000 from '../v10000'
import * as v12001 from '../v12001'
import * as v14000 from '../v14000'

export const minted =  {
    name: 'VtokenMinting.Minted',
    v956: new EventType(
        'VtokenMinting.Minted',
        sts.struct({
            address: v956.AccountId32,
            tokenId: v956.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v962: new EventType(
        'VtokenMinting.Minted',
        sts.struct({
            address: v962.AccountId32,
            tokenId: v962.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v980: new EventType(
        'VtokenMinting.Minted',
        sts.struct({
            address: v980.AccountId32,
            tokenId: v980.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
            remark: sts.bytes(),
        })
    ),
    v990: new EventType(
        'VtokenMinting.Minted',
        sts.struct({
            address: v990.AccountId32,
            tokenId: v990.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
            remark: sts.bytes(),
        })
    ),
    v12001: new EventType(
        'VtokenMinting.Minted',
        sts.struct({
            address: v12001.AccountId32,
            tokenId: v12001.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
            remark: sts.bytes(),
            channelId: sts.option(() => sts.number()),
        })
    ),
    /**
     * Vtoken minted successfully.
     */
    v14000: new EventType(
        'VtokenMinting.Minted',
        sts.struct({
            /**
             * The minter account.
             */
            minter: v14000.AccountId32,
            /**
             * The currency id minted.
             */
            currencyId: v14000.CurrencyId,
            /**
             * The currency amount minted.
             */
            currencyAmount: sts.bigint(),
            /**
             * The v_currency amount minted.
             */
            vCurrencyAmount: sts.bigint(),
            /**
             * The mint fee.
             */
            mintFee: sts.bigint(),
            /**
             * The remark of minting.
             */
            remark: sts.bytes(),
            /**
             * The channel id of minting.
             */
            channelId: sts.option(() => sts.number()),
        })
    ),
}

export const redeemed =  {
    name: 'VtokenMinting.Redeemed',
    v956: new EventType(
        'VtokenMinting.Redeemed',
        sts.struct({
            address: v956.AccountId32,
            tokenId: v956.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v962: new EventType(
        'VtokenMinting.Redeemed',
        sts.struct({
            address: v962.AccountId32,
            tokenId: v962.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v980: new EventType(
        'VtokenMinting.Redeemed',
        sts.struct({
            address: v980.AccountId32,
            tokenId: v980.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v990: new EventType(
        'VtokenMinting.Redeemed',
        sts.struct({
            address: v990.AccountId32,
            tokenId: v990.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v996: new EventType(
        'VtokenMinting.Redeemed',
        sts.struct({
            address: v996.AccountId32,
            tokenId: v996.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
            unlockId: sts.number(),
        })
    ),
    /**
     * 	Vtoken redeemed successfully.
     */
    v14000: new EventType(
        'VtokenMinting.Redeemed',
        sts.struct({
            /**
             * The redeemer account.
             */
            redeemer: v14000.AccountId32,
            /**
             * The currency id redeemed.
             */
            currencyId: v14000.CurrencyId,
            /**
             * Will be received currency amount.
             */
            currencyAmount: sts.bigint(),
            /**
             * The v_currency amount redeemed.
             */
            vCurrencyAmount: sts.bigint(),
            /**
             * The redeem fee.
             */
            redeemFee: sts.bigint(),
            /**
             * The unlock_id of redeeming.
             */
            unlockId: sts.number(),
        })
    ),
}

export const redeemSuccess =  {
    name: 'VtokenMinting.RedeemSuccess',
    v956: new EventType(
        'VtokenMinting.RedeemSuccess',
        sts.struct({
            unlockId: sts.number(),
            tokenId: v956.CurrencyId,
            to: v956.AccountId32,
            tokenAmount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'VtokenMinting.RedeemSuccess',
        sts.struct({
            unlockId: sts.number(),
            tokenId: v962.CurrencyId,
            to: v962.AccountId32,
            tokenAmount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'VtokenMinting.RedeemSuccess',
        sts.struct({
            unlockId: sts.number(),
            tokenId: v980.CurrencyId,
            to: v980.AccountId32,
            tokenAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'VtokenMinting.RedeemSuccess',
        sts.struct({
            unlockId: sts.number(),
            tokenId: v990.CurrencyId,
            to: v990.AccountId32,
            tokenAmount: sts.bigint(),
        })
    ),
    v10000: new EventType(
        'VtokenMinting.RedeemSuccess',
        sts.struct({
            unlockId: sts.number(),
            tokenId: v10000.CurrencyId,
            to: v10000.RedeemTo,
            tokenAmount: sts.bigint(),
        })
    ),
    /**
     * Process redeem successfully.
     */
    v14000: new EventType(
        'VtokenMinting.RedeemSuccess',
        sts.struct({
            /**
             * The redeemer account.
             */
            redeemer: v14000.AccountId32,
            /**
             * The unlock_id redeemed.
             */
            unlockId: sts.number(),
            /**
             * The currency id redeemed.
             */
            currencyId: v14000.CurrencyId,
            /**
             * Will transfer to this account.
             */
            to: v14000.RedeemTo,
            /**
             * The redeem amount.
             */
            currencyAmount: sts.bigint(),
        })
    ),
}

export const rebonded =  {
    name: 'VtokenMinting.Rebonded',
    v956: new EventType(
        'VtokenMinting.Rebonded',
        sts.struct({
            address: v956.AccountId32,
            tokenId: v956.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v962: new EventType(
        'VtokenMinting.Rebonded',
        sts.struct({
            address: v962.AccountId32,
            tokenId: v962.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v980: new EventType(
        'VtokenMinting.Rebonded',
        sts.struct({
            address: v980.AccountId32,
            tokenId: v980.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v990: new EventType(
        'VtokenMinting.Rebonded',
        sts.struct({
            address: v990.AccountId32,
            tokenId: v990.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    /**
     * Vtoken rebonded successfully.
     */
    v14000: new EventType(
        'VtokenMinting.Rebonded',
        sts.struct({
            /**
             * The rebonder account.
             */
            rebonder: v14000.AccountId32,
            /**
             * The currency id rebonded.
             */
            currencyId: v14000.CurrencyId,
            /**
             * The currency amount rebonded.
             */
            currencyAmount: sts.bigint(),
            /**
             * The v_currency amount rebonded.
             */
            vCurrencyAmount: sts.bigint(),
            /**
             * Mint fee
             */
            fee: sts.bigint(),
        })
    ),
}

export const rebondedByUnlockId =  {
    name: 'VtokenMinting.RebondedByUnlockId',
    v956: new EventType(
        'VtokenMinting.RebondedByUnlockId',
        sts.struct({
            address: v956.AccountId32,
            tokenId: v956.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v962: new EventType(
        'VtokenMinting.RebondedByUnlockId',
        sts.struct({
            address: v962.AccountId32,
            tokenId: v962.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v980: new EventType(
        'VtokenMinting.RebondedByUnlockId',
        sts.struct({
            address: v980.AccountId32,
            tokenId: v980.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v990: new EventType(
        'VtokenMinting.RebondedByUnlockId',
        sts.struct({
            address: v990.AccountId32,
            tokenId: v990.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v996: new EventType(
        'VtokenMinting.RebondedByUnlockId',
        sts.struct({
            address: v996.AccountId32,
            tokenId: v996.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
            unlockId: sts.number(),
        })
    ),
    /**
     * Vtoken rebonded by unlock_id successfully.
     */
    v14000: new EventType(
        'VtokenMinting.RebondedByUnlockId',
        sts.struct({
            /**
             * The rebonder account.
             */
            rebonder: v14000.AccountId32,
            /**
             * The currency id rebonded.
             */
            currencyId: v14000.CurrencyId,
            /**
             * The currency amount rebonded.
             */
            currencyAmount: sts.bigint(),
            /**
             * The v_currency amount rebonded.
             */
            vCurrencyAmount: sts.bigint(),
            /**
             * Mint fee
             */
            fee: sts.bigint(),
            /**
             * The unlock_id rebonded.
             */
            unlockId: sts.number(),
        })
    ),
}

export const unlockDurationSet =  {
    name: 'VtokenMinting.UnlockDurationSet',
    v956: new EventType(
        'VtokenMinting.UnlockDurationSet',
        sts.struct({
            tokenId: v956.CurrencyId,
            unlockDuration: v956.TimeUnit,
        })
    ),
    v962: new EventType(
        'VtokenMinting.UnlockDurationSet',
        sts.struct({
            tokenId: v962.CurrencyId,
            unlockDuration: v962.TimeUnit,
        })
    ),
    v970: new EventType(
        'VtokenMinting.UnlockDurationSet',
        sts.struct({
            tokenId: v970.CurrencyId,
            unlockDuration: v970.TimeUnit,
        })
    ),
    v980: new EventType(
        'VtokenMinting.UnlockDurationSet',
        sts.struct({
            tokenId: v980.CurrencyId,
            unlockDuration: v980.TimeUnit,
        })
    ),
    v990: new EventType(
        'VtokenMinting.UnlockDurationSet',
        sts.struct({
            tokenId: v990.CurrencyId,
            unlockDuration: v990.TimeUnit,
        })
    ),
    /**
     * Set unlock duration.
     */
    v14000: new EventType(
        'VtokenMinting.UnlockDurationSet',
        sts.struct({
            /**
             * The currency id set unlock duration.
             */
            currencyId: v14000.CurrencyId,
            /**
             * The unlock duration set.
             */
            unlockDuration: v14000.TimeUnit,
        })
    ),
}

export const minimumMintSet =  {
    name: 'VtokenMinting.MinimumMintSet',
    v956: new EventType(
        'VtokenMinting.MinimumMintSet',
        sts.struct({
            tokenId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'VtokenMinting.MinimumMintSet',
        sts.struct({
            tokenId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'VtokenMinting.MinimumMintSet',
        sts.struct({
            tokenId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'VtokenMinting.MinimumMintSet',
        sts.struct({
            tokenId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * Set minimum mint amount.
     */
    v14000: new EventType(
        'VtokenMinting.MinimumMintSet',
        sts.struct({
            /**
             * The currency id set minimum mint amount.
             */
            currencyId: v14000.CurrencyId,
            /**
             * The minimum mint amount set.
             */
            minimumAmount: sts.bigint(),
        })
    ),
}

export const minimumRedeemSet =  {
    name: 'VtokenMinting.MinimumRedeemSet',
    v956: new EventType(
        'VtokenMinting.MinimumRedeemSet',
        sts.struct({
            tokenId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'VtokenMinting.MinimumRedeemSet',
        sts.struct({
            tokenId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'VtokenMinting.MinimumRedeemSet',
        sts.struct({
            tokenId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'VtokenMinting.MinimumRedeemSet',
        sts.struct({
            tokenId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * Set minimum redeem amount.
     */
    v14000: new EventType(
        'VtokenMinting.MinimumRedeemSet',
        sts.struct({
            /**
             * The currency id set minimum redeem amount.
             */
            currencyId: v14000.CurrencyId,
            /**
             * The minimum redeem amount set.
             */
            minimumAmount: sts.bigint(),
        })
    ),
}

export const supportRebondTokenAdded =  {
    name: 'VtokenMinting.SupportRebondTokenAdded',
    v956: new EventType(
        'VtokenMinting.SupportRebondTokenAdded',
        sts.struct({
            tokenId: v956.CurrencyId,
        })
    ),
    v962: new EventType(
        'VtokenMinting.SupportRebondTokenAdded',
        sts.struct({
            tokenId: v962.CurrencyId,
        })
    ),
    v980: new EventType(
        'VtokenMinting.SupportRebondTokenAdded',
        sts.struct({
            tokenId: v980.CurrencyId,
        })
    ),
    v990: new EventType(
        'VtokenMinting.SupportRebondTokenAdded',
        sts.struct({
            tokenId: v990.CurrencyId,
        })
    ),
    /**
     * Support rebond token added.
     */
    v14000: new EventType(
        'VtokenMinting.SupportRebondTokenAdded',
        sts.struct({
            /**
             * The currency id support rebond.
             */
            currencyId: v14000.CurrencyId,
        })
    ),
}

export const supportRebondTokenRemoved =  {
    name: 'VtokenMinting.SupportRebondTokenRemoved',
    v956: new EventType(
        'VtokenMinting.SupportRebondTokenRemoved',
        sts.struct({
            tokenId: v956.CurrencyId,
        })
    ),
    v962: new EventType(
        'VtokenMinting.SupportRebondTokenRemoved',
        sts.struct({
            tokenId: v962.CurrencyId,
        })
    ),
    v980: new EventType(
        'VtokenMinting.SupportRebondTokenRemoved',
        sts.struct({
            tokenId: v980.CurrencyId,
        })
    ),
    v990: new EventType(
        'VtokenMinting.SupportRebondTokenRemoved',
        sts.struct({
            tokenId: v990.CurrencyId,
        })
    ),
    /**
     * Support rebond token removed.
     */
    v14000: new EventType(
        'VtokenMinting.SupportRebondTokenRemoved',
        sts.struct({
            /**
             * The currency id remove support rebond.
             */
            currencyId: v14000.CurrencyId,
        })
    ),
}

export const feeSet =  {
    name: 'VtokenMinting.FeeSet',
    /**
     * Several fees has been set.
     */
    v956: new EventType(
        'VtokenMinting.FeeSet',
        sts.struct({
            mintFee: v956.Permill,
            redeemFee: v956.Permill,
        })
    ),
}

export const hookIterationLimitSet =  {
    name: 'VtokenMinting.HookIterationLimitSet',
    v956: new EventType(
        'VtokenMinting.HookIterationLimitSet',
        sts.struct({
            limit: sts.number(),
        })
    ),
}

export const unlockingTotalSet =  {
    name: 'VtokenMinting.UnlockingTotalSet',
    v956: new EventType(
        'VtokenMinting.UnlockingTotalSet',
        sts.struct({
            tokenId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'VtokenMinting.UnlockingTotalSet',
        sts.struct({
            tokenId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'VtokenMinting.UnlockingTotalSet',
        sts.struct({
            tokenId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'VtokenMinting.UnlockingTotalSet',
        sts.struct({
            tokenId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * Set unlock total amount.
     */
    v14000: new EventType(
        'VtokenMinting.UnlockingTotalSet',
        sts.struct({
            /**
             * The currency id set unlock total amount.
             */
            currencyId: v14000.CurrencyId,
            /**
             * The unlock total amount set.
             */
            currencyAmount: sts.bigint(),
        })
    ),
}

export const minTimeUnitSet =  {
    name: 'VtokenMinting.MinTimeUnitSet',
    v956: new EventType(
        'VtokenMinting.MinTimeUnitSet',
        sts.struct({
            tokenId: v956.CurrencyId,
            timeUnit: v956.TimeUnit,
        })
    ),
    v962: new EventType(
        'VtokenMinting.MinTimeUnitSet',
        sts.struct({
            tokenId: v962.CurrencyId,
            timeUnit: v962.TimeUnit,
        })
    ),
    v970: new EventType(
        'VtokenMinting.MinTimeUnitSet',
        sts.struct({
            tokenId: v970.CurrencyId,
            timeUnit: v970.TimeUnit,
        })
    ),
    v980: new EventType(
        'VtokenMinting.MinTimeUnitSet',
        sts.struct({
            tokenId: v980.CurrencyId,
            timeUnit: v980.TimeUnit,
        })
    ),
    v990: new EventType(
        'VtokenMinting.MinTimeUnitSet',
        sts.struct({
            tokenId: v990.CurrencyId,
            timeUnit: v990.TimeUnit,
        })
    ),
    /**
     * Set minimum time unit.
     */
    v14000: new EventType(
        'VtokenMinting.MinTimeUnitSet',
        sts.struct({
            /**
             * The currency id set minimum time unit.
             */
            currencyId: v14000.CurrencyId,
            /**
             * The minimum time unit set.
             */
            timeUnit: v14000.TimeUnit,
        })
    ),
}

export const fastRedeemFailed =  {
    name: 'VtokenMinting.FastRedeemFailed',
    v971: new EventType(
        'VtokenMinting.FastRedeemFailed',
        sts.struct({
            err: v971.DispatchError,
        })
    ),
    v978: new EventType(
        'VtokenMinting.FastRedeemFailed',
        sts.struct({
            err: v978.DispatchError,
        })
    ),
    v990: new EventType(
        'VtokenMinting.FastRedeemFailed',
        sts.struct({
            err: v990.DispatchError,
        })
    ),
}

export const currencyTimeUnitRecreated =  {
    name: 'VtokenMinting.CurrencyTimeUnitRecreated',
    v992: new EventType(
        'VtokenMinting.CurrencyTimeUnitRecreated',
        sts.struct({
            tokenId: v992.CurrencyId,
            timeUnit: v992.TimeUnit,
        })
    ),
}

export const incentivizedMinting =  {
    name: 'VtokenMinting.IncentivizedMinting',
    v10000: new EventType(
        'VtokenMinting.IncentivizedMinting',
        sts.struct({
            address: v10000.AccountId32,
            tokenId: v10000.CurrencyId,
            tokenAmount: sts.bigint(),
            lockedVtokenAmount: sts.bigint(),
            incentiveVtokenAmount: sts.bigint(),
        })
    ),
    /**
     * Incentivized minting.
     */
    v14000: new EventType(
        'VtokenMinting.IncentivizedMinting',
        sts.struct({
            address: v14000.AccountId32,
            currencyId: v14000.CurrencyId,
            currencyAmount: sts.bigint(),
            lockedVtokenAmount: sts.bigint(),
            incentiveVtokenAmount: sts.bigint(),
        })
    ),
}

export const vtokenIncentiveCoefSet =  {
    name: 'VtokenMinting.VtokenIncentiveCoefSet',
    v10000: new EventType(
        'VtokenMinting.VtokenIncentiveCoefSet',
        sts.struct({
            vtokenId: v10000.CurrencyId,
            coefficient: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * Incentive coefficient set.
     */
    v14000: new EventType(
        'VtokenMinting.VtokenIncentiveCoefSet',
        sts.struct({
            vCurrencyId: v14000.CurrencyId,
            coefficient: sts.option(() => sts.bigint()),
        })
    ),
}

export const vtokenIncentiveLockBlocksSet =  {
    name: 'VtokenMinting.VtokenIncentiveLockBlocksSet',
    v10000: new EventType(
        'VtokenMinting.VtokenIncentiveLockBlocksSet',
        sts.struct({
            vtokenId: v10000.CurrencyId,
            blocks: sts.option(() => sts.number()),
        })
    ),
    /**
     * Incentive lock blocks set.
     */
    v14000: new EventType(
        'VtokenMinting.VtokenIncentiveLockBlocksSet',
        sts.struct({
            vCurrencyId: v14000.CurrencyId,
            blocks: sts.option(() => sts.number()),
        })
    ),
}

export const setOngoingTimeUnit =  {
    name: 'VtokenMinting.SetOngoingTimeUnit',
    /**
     * Set ongoing time unit.
     */
    v14000: new EventType(
        'VtokenMinting.SetOngoingTimeUnit',
        sts.struct({
            /**
             * The currency id set ongoing time unit.
             */
            currencyId: v14000.CurrencyId,
            /**
             * The ongoing time unit set.
             */
            timeUnit: v14000.TimeUnit,
        })
    ),
}
