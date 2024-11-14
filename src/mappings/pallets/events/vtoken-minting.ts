import { vtokenMinting } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeVtokenMintingEventsArgs(event: Event): any {
  switch (event.name) {
    case vtokenMinting.minted.name:
      if (vtokenMinting.minted.v956.is(event)) {
        return vtokenMinting.minted.v956.decode(event);
      } else if (vtokenMinting.minted.v962.is(event)) {
        return vtokenMinting.minted.v962.decode(event);
      } else if (vtokenMinting.minted.v980.is(event)) {
        return vtokenMinting.minted.v980.decode(event);
      } else if (vtokenMinting.minted.v990.is(event)) {
        return vtokenMinting.minted.v990.decode(event);
      } else if (vtokenMinting.minted.v12001.is(event)) {
        return vtokenMinting.minted.v12001.decode(event);
      } else if (vtokenMinting.minted.v14000.is(event)) {
        return vtokenMinting.minted.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.redeemed.name:
      if (vtokenMinting.redeemed.v956.is(event)) {
        return vtokenMinting.redeemed.v956.decode(event);
      } else if (vtokenMinting.redeemed.v962.is(event)) {
        return vtokenMinting.redeemed.v962.decode(event);
      } else if (vtokenMinting.redeemed.v980.is(event)) {
        return vtokenMinting.redeemed.v980.decode(event);
      } else if (vtokenMinting.redeemed.v990.is(event)) {
        return vtokenMinting.redeemed.v990.decode(event);
      } else if (vtokenMinting.redeemed.v996.is(event)) {
        return vtokenMinting.redeemed.v996.decode(event);
      } else if (vtokenMinting.redeemed.v14000.is(event)) {
        return vtokenMinting.redeemed.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.redeemSuccess.name:
      if (vtokenMinting.redeemSuccess.v956.is(event)) {
        return vtokenMinting.redeemSuccess.v956.decode(event);
      } else if (vtokenMinting.redeemSuccess.v962.is(event)) {
        return vtokenMinting.redeemSuccess.v962.decode(event);
      } else if (vtokenMinting.redeemSuccess.v980.is(event)) {
        return vtokenMinting.redeemSuccess.v980.decode(event);
      } else if (vtokenMinting.redeemSuccess.v990.is(event)) {
        return vtokenMinting.redeemSuccess.v990.decode(event);
      } else if (vtokenMinting.redeemSuccess.v10000.is(event)) {
        return vtokenMinting.redeemSuccess.v10000.decode(event);
      } else if (vtokenMinting.redeemSuccess.v14000.is(event)) {
        return vtokenMinting.redeemSuccess.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.rebonded.name:
      if (vtokenMinting.rebonded.v956.is(event)) {
        return vtokenMinting.rebonded.v956.decode(event);
      } else if (vtokenMinting.rebonded.v962.is(event)) {
        return vtokenMinting.rebonded.v962.decode(event);
      } else if (vtokenMinting.rebonded.v980.is(event)) {
        return vtokenMinting.rebonded.v980.decode(event);
      } else if (vtokenMinting.rebonded.v990.is(event)) {
        return vtokenMinting.rebonded.v990.decode(event);
      } else if (vtokenMinting.rebonded.v14000.is(event)) {
        return vtokenMinting.rebonded.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.rebondedByUnlockId.name:
      if (vtokenMinting.rebondedByUnlockId.v956.is(event)) {
        return vtokenMinting.rebondedByUnlockId.v956.decode(event);
      } else if (vtokenMinting.rebondedByUnlockId.v962.is(event)) {
        return vtokenMinting.rebondedByUnlockId.v962.decode(event);
      } else if (vtokenMinting.rebondedByUnlockId.v980.is(event)) {
        return vtokenMinting.rebondedByUnlockId.v980.decode(event);
      } else if (vtokenMinting.rebondedByUnlockId.v990.is(event)) {
        return vtokenMinting.rebondedByUnlockId.v990.decode(event);
      } else if (vtokenMinting.rebondedByUnlockId.v996.is(event)) {
        return vtokenMinting.rebondedByUnlockId.v996.decode(event);
      } else if (vtokenMinting.rebondedByUnlockId.v14000.is(event)) {
        return vtokenMinting.rebondedByUnlockId.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.unlockDurationSet.name:
      if (vtokenMinting.unlockDurationSet.v956.is(event)) {
        return vtokenMinting.unlockDurationSet.v956.decode(event);
      } else if (vtokenMinting.unlockDurationSet.v962.is(event)) {
        return vtokenMinting.unlockDurationSet.v962.decode(event);
      } else if (vtokenMinting.unlockDurationSet.v970.is(event)) {
        return vtokenMinting.unlockDurationSet.v970.decode(event);
      } else if (vtokenMinting.unlockDurationSet.v980.is(event)) {
        return vtokenMinting.unlockDurationSet.v980.decode(event);
      } else if (vtokenMinting.unlockDurationSet.v990.is(event)) {
        return vtokenMinting.unlockDurationSet.v990.decode(event);
      } else if (vtokenMinting.unlockDurationSet.v14000.is(event)) {
        return vtokenMinting.unlockDurationSet.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.minimumMintSet.name:
      if (vtokenMinting.minimumMintSet.v956.is(event)) {
        return vtokenMinting.minimumMintSet.v956.decode(event);
      } else if (vtokenMinting.minimumMintSet.v962.is(event)) {
        return vtokenMinting.minimumMintSet.v962.decode(event);
      } else if (vtokenMinting.minimumMintSet.v980.is(event)) {
        return vtokenMinting.minimumMintSet.v980.decode(event);
      } else if (vtokenMinting.minimumMintSet.v990.is(event)) {
        return vtokenMinting.minimumMintSet.v990.decode(event);
      } else if (vtokenMinting.minimumMintSet.v14000.is(event)) {
        return vtokenMinting.minimumMintSet.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.minimumRedeemSet.name:
      if (vtokenMinting.minimumRedeemSet.v956.is(event)) {
        return vtokenMinting.minimumRedeemSet.v956.decode(event);
      } else if (vtokenMinting.minimumRedeemSet.v962.is(event)) {
        return vtokenMinting.minimumRedeemSet.v962.decode(event);
      } else if (vtokenMinting.minimumRedeemSet.v980.is(event)) {
        return vtokenMinting.minimumRedeemSet.v980.decode(event);
      } else if (vtokenMinting.minimumRedeemSet.v990.is(event)) {
        return vtokenMinting.minimumRedeemSet.v990.decode(event);
      } else if (vtokenMinting.minimumRedeemSet.v14000.is(event)) {
        return vtokenMinting.minimumRedeemSet.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.supportRebondTokenAdded.name:
      if (vtokenMinting.supportRebondTokenAdded.v956.is(event)) {
        return vtokenMinting.supportRebondTokenAdded.v956.decode(event);
      } else if (vtokenMinting.supportRebondTokenAdded.v962.is(event)) {
        return vtokenMinting.supportRebondTokenAdded.v962.decode(event);
      } else if (vtokenMinting.supportRebondTokenAdded.v980.is(event)) {
        return vtokenMinting.supportRebondTokenAdded.v980.decode(event);
      } else if (vtokenMinting.supportRebondTokenAdded.v990.is(event)) {
        return vtokenMinting.supportRebondTokenAdded.v990.decode(event);
      } else if (vtokenMinting.supportRebondTokenAdded.v14000.is(event)) {
        return vtokenMinting.supportRebondTokenAdded.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.supportRebondTokenRemoved.name:
      if (vtokenMinting.supportRebondTokenRemoved.v956.is(event)) {
        return vtokenMinting.supportRebondTokenRemoved.v956.decode(event);
      } else if (vtokenMinting.supportRebondTokenRemoved.v962.is(event)) {
        return vtokenMinting.supportRebondTokenRemoved.v962.decode(event);
      } else if (vtokenMinting.supportRebondTokenRemoved.v980.is(event)) {
        return vtokenMinting.supportRebondTokenRemoved.v980.decode(event);
      } else if (vtokenMinting.supportRebondTokenRemoved.v990.is(event)) {
        return vtokenMinting.supportRebondTokenRemoved.v990.decode(event);
      } else if (vtokenMinting.supportRebondTokenRemoved.v14000.is(event)) {
        return vtokenMinting.supportRebondTokenRemoved.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.feeSet.name:
      if (vtokenMinting.feeSet.v956.is(event)) {
        return vtokenMinting.feeSet.v956.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.hookIterationLimitSet.name:
      if (vtokenMinting.hookIterationLimitSet.v956.is(event)) {
        return vtokenMinting.hookIterationLimitSet.v956.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.unlockingTotalSet.name:
      if (vtokenMinting.unlockingTotalSet.v956.is(event)) {
        return vtokenMinting.unlockingTotalSet.v956.decode(event);
      } else if (vtokenMinting.unlockingTotalSet.v962.is(event)) {
        return vtokenMinting.unlockingTotalSet.v962.decode(event);
      } else if (vtokenMinting.unlockingTotalSet.v980.is(event)) {
        return vtokenMinting.unlockingTotalSet.v980.decode(event);
      } else if (vtokenMinting.unlockingTotalSet.v990.is(event)) {
        return vtokenMinting.unlockingTotalSet.v990.decode(event);
      } else if (vtokenMinting.unlockingTotalSet.v14000.is(event)) {
        return vtokenMinting.unlockingTotalSet.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.minTimeUnitSet.name:
      if (vtokenMinting.minTimeUnitSet.v956.is(event)) {
        return vtokenMinting.minTimeUnitSet.v956.decode(event);
      } else if (vtokenMinting.minTimeUnitSet.v962.is(event)) {
        return vtokenMinting.minTimeUnitSet.v962.decode(event);
      } else if (vtokenMinting.minTimeUnitSet.v970.is(event)) {
        return vtokenMinting.minTimeUnitSet.v970.decode(event);
      } else if (vtokenMinting.minTimeUnitSet.v980.is(event)) {
        return vtokenMinting.minTimeUnitSet.v980.decode(event);
      } else if (vtokenMinting.minTimeUnitSet.v990.is(event)) {
        return vtokenMinting.minTimeUnitSet.v990.decode(event);
      } else if (vtokenMinting.minTimeUnitSet.v14000.is(event)) {
        return vtokenMinting.minTimeUnitSet.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.fastRedeemFailed.name:
      if (vtokenMinting.fastRedeemFailed.v971.is(event)) {
        return vtokenMinting.fastRedeemFailed.v971.decode(event);
      } else if (vtokenMinting.fastRedeemFailed.v978.is(event)) {
        return vtokenMinting.fastRedeemFailed.v978.decode(event);
      } else if (vtokenMinting.fastRedeemFailed.v990.is(event)) {
        return vtokenMinting.fastRedeemFailed.v990.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.currencyTimeUnitRecreated.name:
      if (vtokenMinting.currencyTimeUnitRecreated.v992.is(event)) {
        return vtokenMinting.currencyTimeUnitRecreated.v992.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.incentivizedMinting.name:
      if (vtokenMinting.incentivizedMinting.v10000.is(event)) {
        return vtokenMinting.incentivizedMinting.v10000.decode(event);
      } else if (vtokenMinting.incentivizedMinting.v14000.is(event)) {
        return vtokenMinting.incentivizedMinting.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.vtokenIncentiveCoefSet.name:
      if (vtokenMinting.vtokenIncentiveCoefSet.v10000.is(event)) {
        return vtokenMinting.vtokenIncentiveCoefSet.v10000.decode(event);
      } else if (vtokenMinting.vtokenIncentiveCoefSet.v14000.is(event)) {
        return vtokenMinting.vtokenIncentiveCoefSet.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.vtokenIncentiveLockBlocksSet.name:
      if (vtokenMinting.vtokenIncentiveLockBlocksSet.v10000.is(event)) {
        return vtokenMinting.vtokenIncentiveLockBlocksSet.v10000.decode(event);
      } else if (vtokenMinting.vtokenIncentiveLockBlocksSet.v14000.is(event)) {
        return vtokenMinting.vtokenIncentiveLockBlocksSet.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenMinting.setOngoingTimeUnit.name:
      if (vtokenMinting.setOngoingTimeUnit.v14000.is(event)) {
        return vtokenMinting.setOngoingTimeUnit.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
