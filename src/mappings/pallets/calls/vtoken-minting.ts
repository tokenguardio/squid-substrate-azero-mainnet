import { vtokenMinting } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeVtokenMintingCallsArgs(call: Call): any {
  switch (call.name) {
    case vtokenMinting.mint.name:
      if (vtokenMinting.mint.v956.is(call)) {
        return vtokenMinting.mint.v956.decode(call);
      } else if (vtokenMinting.mint.v962.is(call)) {
        return vtokenMinting.mint.v962.decode(call);
      } else if (vtokenMinting.mint.v980.is(call)) {
        return vtokenMinting.mint.v980.decode(call);
      } else if (vtokenMinting.mint.v990.is(call)) {
        return vtokenMinting.mint.v990.decode(call);
      } else if (vtokenMinting.mint.v992.is(call)) {
        return vtokenMinting.mint.v992.decode(call);
      } else if (vtokenMinting.mint.v14000.is(call)) {
        return vtokenMinting.mint.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.redeem.name:
      if (vtokenMinting.redeem.v956.is(call)) {
        return vtokenMinting.redeem.v956.decode(call);
      } else if (vtokenMinting.redeem.v962.is(call)) {
        return vtokenMinting.redeem.v962.decode(call);
      } else if (vtokenMinting.redeem.v980.is(call)) {
        return vtokenMinting.redeem.v980.decode(call);
      } else if (vtokenMinting.redeem.v990.is(call)) {
        return vtokenMinting.redeem.v990.decode(call);
      } else if (vtokenMinting.redeem.v14000.is(call)) {
        return vtokenMinting.redeem.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.rebond.name:
      if (vtokenMinting.rebond.v956.is(call)) {
        return vtokenMinting.rebond.v956.decode(call);
      } else if (vtokenMinting.rebond.v962.is(call)) {
        return vtokenMinting.rebond.v962.decode(call);
      } else if (vtokenMinting.rebond.v980.is(call)) {
        return vtokenMinting.rebond.v980.decode(call);
      } else if (vtokenMinting.rebond.v990.is(call)) {
        return vtokenMinting.rebond.v990.decode(call);
      } else if (vtokenMinting.rebond.v14000.is(call)) {
        return vtokenMinting.rebond.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.rebondByUnlockId.name:
      if (vtokenMinting.rebondByUnlockId.v956.is(call)) {
        return vtokenMinting.rebondByUnlockId.v956.decode(call);
      } else if (vtokenMinting.rebondByUnlockId.v962.is(call)) {
        return vtokenMinting.rebondByUnlockId.v962.decode(call);
      } else if (vtokenMinting.rebondByUnlockId.v980.is(call)) {
        return vtokenMinting.rebondByUnlockId.v980.decode(call);
      } else if (vtokenMinting.rebondByUnlockId.v990.is(call)) {
        return vtokenMinting.rebondByUnlockId.v990.decode(call);
      } else if (vtokenMinting.rebondByUnlockId.v14000.is(call)) {
        return vtokenMinting.rebondByUnlockId.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.setUnlockDuration.name:
      if (vtokenMinting.setUnlockDuration.v956.is(call)) {
        return vtokenMinting.setUnlockDuration.v956.decode(call);
      } else if (vtokenMinting.setUnlockDuration.v962.is(call)) {
        return vtokenMinting.setUnlockDuration.v962.decode(call);
      } else if (vtokenMinting.setUnlockDuration.v970.is(call)) {
        return vtokenMinting.setUnlockDuration.v970.decode(call);
      } else if (vtokenMinting.setUnlockDuration.v980.is(call)) {
        return vtokenMinting.setUnlockDuration.v980.decode(call);
      } else if (vtokenMinting.setUnlockDuration.v990.is(call)) {
        return vtokenMinting.setUnlockDuration.v990.decode(call);
      } else if (vtokenMinting.setUnlockDuration.v14000.is(call)) {
        return vtokenMinting.setUnlockDuration.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.setMinimumMint.name:
      if (vtokenMinting.setMinimumMint.v956.is(call)) {
        return vtokenMinting.setMinimumMint.v956.decode(call);
      } else if (vtokenMinting.setMinimumMint.v962.is(call)) {
        return vtokenMinting.setMinimumMint.v962.decode(call);
      } else if (vtokenMinting.setMinimumMint.v980.is(call)) {
        return vtokenMinting.setMinimumMint.v980.decode(call);
      } else if (vtokenMinting.setMinimumMint.v990.is(call)) {
        return vtokenMinting.setMinimumMint.v990.decode(call);
      } else if (vtokenMinting.setMinimumMint.v14000.is(call)) {
        return vtokenMinting.setMinimumMint.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.setMinimumRedeem.name:
      if (vtokenMinting.setMinimumRedeem.v956.is(call)) {
        return vtokenMinting.setMinimumRedeem.v956.decode(call);
      } else if (vtokenMinting.setMinimumRedeem.v962.is(call)) {
        return vtokenMinting.setMinimumRedeem.v962.decode(call);
      } else if (vtokenMinting.setMinimumRedeem.v980.is(call)) {
        return vtokenMinting.setMinimumRedeem.v980.decode(call);
      } else if (vtokenMinting.setMinimumRedeem.v990.is(call)) {
        return vtokenMinting.setMinimumRedeem.v990.decode(call);
      } else if (vtokenMinting.setMinimumRedeem.v14000.is(call)) {
        return vtokenMinting.setMinimumRedeem.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.addSupportRebondToken.name:
      if (vtokenMinting.addSupportRebondToken.v956.is(call)) {
        return vtokenMinting.addSupportRebondToken.v956.decode(call);
      } else if (vtokenMinting.addSupportRebondToken.v962.is(call)) {
        return vtokenMinting.addSupportRebondToken.v962.decode(call);
      } else if (vtokenMinting.addSupportRebondToken.v980.is(call)) {
        return vtokenMinting.addSupportRebondToken.v980.decode(call);
      } else if (vtokenMinting.addSupportRebondToken.v990.is(call)) {
        return vtokenMinting.addSupportRebondToken.v990.decode(call);
      } else if (vtokenMinting.addSupportRebondToken.v14000.is(call)) {
        return vtokenMinting.addSupportRebondToken.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.removeSupportRebondToken.name:
      if (vtokenMinting.removeSupportRebondToken.v956.is(call)) {
        return vtokenMinting.removeSupportRebondToken.v956.decode(call);
      } else if (vtokenMinting.removeSupportRebondToken.v962.is(call)) {
        return vtokenMinting.removeSupportRebondToken.v962.decode(call);
      } else if (vtokenMinting.removeSupportRebondToken.v980.is(call)) {
        return vtokenMinting.removeSupportRebondToken.v980.decode(call);
      } else if (vtokenMinting.removeSupportRebondToken.v990.is(call)) {
        return vtokenMinting.removeSupportRebondToken.v990.decode(call);
      } else if (vtokenMinting.removeSupportRebondToken.v14000.is(call)) {
        return vtokenMinting.removeSupportRebondToken.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.setFees.name:
      if (vtokenMinting.setFees.v956.is(call)) {
        return vtokenMinting.setFees.v956.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.setHookIterationLimit.name:
      if (vtokenMinting.setHookIterationLimit.v956.is(call)) {
        return vtokenMinting.setHookIterationLimit.v956.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.setUnlockingTotal.name:
      if (vtokenMinting.setUnlockingTotal.v956.is(call)) {
        return vtokenMinting.setUnlockingTotal.v956.decode(call);
      } else if (vtokenMinting.setUnlockingTotal.v962.is(call)) {
        return vtokenMinting.setUnlockingTotal.v962.decode(call);
      } else if (vtokenMinting.setUnlockingTotal.v980.is(call)) {
        return vtokenMinting.setUnlockingTotal.v980.decode(call);
      } else if (vtokenMinting.setUnlockingTotal.v990.is(call)) {
        return vtokenMinting.setUnlockingTotal.v990.decode(call);
      } else if (vtokenMinting.setUnlockingTotal.v14000.is(call)) {
        return vtokenMinting.setUnlockingTotal.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.setMinTimeUnit.name:
      if (vtokenMinting.setMinTimeUnit.v956.is(call)) {
        return vtokenMinting.setMinTimeUnit.v956.decode(call);
      } else if (vtokenMinting.setMinTimeUnit.v962.is(call)) {
        return vtokenMinting.setMinTimeUnit.v962.decode(call);
      } else if (vtokenMinting.setMinTimeUnit.v970.is(call)) {
        return vtokenMinting.setMinTimeUnit.v970.decode(call);
      } else if (vtokenMinting.setMinTimeUnit.v980.is(call)) {
        return vtokenMinting.setMinTimeUnit.v980.decode(call);
      } else if (vtokenMinting.setMinTimeUnit.v990.is(call)) {
        return vtokenMinting.setMinTimeUnit.v990.decode(call);
      } else if (vtokenMinting.setMinTimeUnit.v14000.is(call)) {
        return vtokenMinting.setMinTimeUnit.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.recreateCurrencyOngoingTimeUnit.name:
      if (vtokenMinting.recreateCurrencyOngoingTimeUnit.v992.is(call)) {
        return vtokenMinting.recreateCurrencyOngoingTimeUnit.v992.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.mintWithLock.name:
      if (vtokenMinting.mintWithLock.v10000.is(call)) {
        return vtokenMinting.mintWithLock.v10000.decode(call);
      } else if (vtokenMinting.mintWithLock.v14000.is(call)) {
        return vtokenMinting.mintWithLock.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.unlockIncentiveMintedVtoken.name:
      if (vtokenMinting.unlockIncentiveMintedVtoken.v10000.is(call)) {
        return vtokenMinting.unlockIncentiveMintedVtoken.v10000.decode(call);
      } else if (vtokenMinting.unlockIncentiveMintedVtoken.v14000.is(call)) {
        return vtokenMinting.unlockIncentiveMintedVtoken.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.setIncentiveCoef.name:
      if (vtokenMinting.setIncentiveCoef.v10000.is(call)) {
        return vtokenMinting.setIncentiveCoef.v10000.decode(call);
      } else if (vtokenMinting.setIncentiveCoef.v14000.is(call)) {
        return vtokenMinting.setIncentiveCoef.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.setVtokenIncentiveLockBlocks.name:
      if (vtokenMinting.setVtokenIncentiveLockBlocks.v10000.is(call)) {
        return vtokenMinting.setVtokenIncentiveLockBlocks.v10000.decode(call);
      } else if (vtokenMinting.setVtokenIncentiveLockBlocks.v14000.is(call)) {
        return vtokenMinting.setVtokenIncentiveLockBlocks.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case vtokenMinting.setOngoingTimeUnit.name:
      if (vtokenMinting.setOngoingTimeUnit.v14000.is(call)) {
        return vtokenMinting.setOngoingTimeUnit.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    default:
      throw new UnknownCallError(call.name);
  }
}
