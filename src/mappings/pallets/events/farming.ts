import { Event } from "../../../processor";
import { farming } from "../../../types/events";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeFarmingEventsArgs(event: Event): any {
  switch (event.name) {
    case farming.farmingPoolCreated.name:
      if (farming.farmingPoolCreated.v954.is(event)) {
        return farming.farmingPoolCreated.v954.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.farmingPoolReset.name:
      if (farming.farmingPoolReset.v954.is(event)) {
        return farming.farmingPoolReset.v954.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.farmingPoolClosed.name:
      if (farming.farmingPoolClosed.v954.is(event)) {
        return farming.farmingPoolClosed.v954.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.farmingPoolKilled.name:
      if (farming.farmingPoolKilled.v954.is(event)) {
        return farming.farmingPoolKilled.v954.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.farmingPoolEdited.name:
      if (farming.farmingPoolEdited.v954.is(event)) {
        return farming.farmingPoolEdited.v954.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.charged.name:
      if (farming.charged.v954.is(event)) {
        return farming.charged.v954.decode(event);
      } else if (farming.charged.v956.is(event)) {
        return farming.charged.v956.decode(event);
      } else if (farming.charged.v962.is(event)) {
        return farming.charged.v962.decode(event);
      } else if (farming.charged.v980.is(event)) {
        return farming.charged.v980.decode(event);
      } else if (farming.charged.v990.is(event)) {
        return farming.charged.v990.decode(event);
      } else if (farming.charged.v10000.is(event)) {
        return farming.charged.v10000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.deposited.name:
      if (farming.deposited.v954.is(event)) {
        return farming.deposited.v954.decode(event);
      } else if (farming.deposited.v14000.is(event)) {
        return farming.deposited.v14000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.withdrawn.name:
      if (farming.withdrawn.v954.is(event)) {
        return farming.withdrawn.v954.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.claimed.name:
      if (farming.claimed.v954.is(event)) {
        return farming.claimed.v954.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.withdrawClaimed.name:
      if (farming.withdrawClaimed.v954.is(event)) {
        return farming.withdrawClaimed.v954.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.gaugeWithdrawn.name:
      if (farming.gaugeWithdrawn.v954.is(event)) {
        return farming.gaugeWithdrawn.v954.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.allForceGaugeClaimed.name:
      if (farming.allForceGaugeClaimed.v954.is(event)) {
        return farming.allForceGaugeClaimed.v954.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.partiallyForceGaugeClaimed.name:
      if (farming.partiallyForceGaugeClaimed.v954.is(event)) {
        return farming.partiallyForceGaugeClaimed.v954.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.allRetired.name:
      if (farming.allRetired.v954.is(event)) {
        return farming.allRetired.v954.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.partiallyRetired.name:
      if (farming.partiallyRetired.v954.is(event)) {
        return farming.partiallyRetired.v954.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.retireLimitSet.name:
      if (farming.retireLimitSet.v954.is(event)) {
        return farming.retireLimitSet.v954.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.roundEnd.name:
      if (farming.roundEnd.v974.is(event)) {
        return farming.roundEnd.v974.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.roundStartError.name:
      if (farming.roundStartError.v974.is(event)) {
        return farming.roundStartError.v974.decode(event);
      } else if (farming.roundStartError.v978.is(event)) {
        return farming.roundStartError.v978.decode(event);
      } else if (farming.roundStartError.v990.is(event)) {
        return farming.roundStartError.v990.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.roundStart.name:
      if (farming.roundStart.v974.is(event)) {
        return farming.roundStart.v974.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.voted.name:
      if (farming.voted.v974.is(event)) {
        return farming.voted.v974.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case farming.boostCharged.name:
      if (farming.boostCharged.v974.is(event)) {
        return farming.boostCharged.v974.decode(event);
      } else if (farming.boostCharged.v980.is(event)) {
        return farming.boostCharged.v980.decode(event);
      } else if (farming.boostCharged.v990.is(event)) {
        return farming.boostCharged.v990.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
