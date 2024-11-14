import { farming } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeFarmingCallsArgs(call: Call): any {
  switch (call.name) {
    case farming.createFarmingPool.name:
      if (farming.createFarmingPool.v954.is(call)) {
        return farming.createFarmingPool.v954.decode(call);
      } else if (farming.createFarmingPool.v956.is(call)) {
        return farming.createFarmingPool.v956.decode(call);
      } else if (farming.createFarmingPool.v962.is(call)) {
        return farming.createFarmingPool.v962.decode(call);
      } else if (farming.createFarmingPool.v980.is(call)) {
        return farming.createFarmingPool.v980.decode(call);
      } else if (farming.createFarmingPool.v990.is(call)) {
        return farming.createFarmingPool.v990.decode(call);
      } else if (farming.createFarmingPool.v10000.is(call)) {
        return farming.createFarmingPool.v10000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.charge.name:
      if (farming.charge.v954.is(call)) {
        return farming.charge.v954.decode(call);
      } else if (farming.charge.v956.is(call)) {
        return farming.charge.v956.decode(call);
      } else if (farming.charge.v962.is(call)) {
        return farming.charge.v962.decode(call);
      } else if (farming.charge.v980.is(call)) {
        return farming.charge.v980.decode(call);
      } else if (farming.charge.v990.is(call)) {
        return farming.charge.v990.decode(call);
      } else if (farming.charge.v10000.is(call)) {
        return farming.charge.v10000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.deposit.name:
      if (farming.deposit.v954.is(call)) {
        return farming.deposit.v954.decode(call);
      } else if (farming.deposit.v14000.is(call)) {
        return farming.deposit.v14000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.withdraw.name:
      if (farming.withdraw.v954.is(call)) {
        return farming.withdraw.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.claim.name:
      if (farming.claim.v954.is(call)) {
        return farming.claim.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.withdrawClaim.name:
      if (farming.withdrawClaim.v954.is(call)) {
        return farming.withdrawClaim.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.forceRetirePool.name:
      if (farming.forceRetirePool.v954.is(call)) {
        return farming.forceRetirePool.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.setRetireLimit.name:
      if (farming.setRetireLimit.v954.is(call)) {
        return farming.setRetireLimit.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.closePool.name:
      if (farming.closePool.v954.is(call)) {
        return farming.closePool.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.resetPool.name:
      if (farming.resetPool.v954.is(call)) {
        return farming.resetPool.v954.decode(call);
      } else if (farming.resetPool.v956.is(call)) {
        return farming.resetPool.v956.decode(call);
      } else if (farming.resetPool.v962.is(call)) {
        return farming.resetPool.v962.decode(call);
      } else if (farming.resetPool.v980.is(call)) {
        return farming.resetPool.v980.decode(call);
      } else if (farming.resetPool.v990.is(call)) {
        return farming.resetPool.v990.decode(call);
      } else if (farming.resetPool.v10000.is(call)) {
        return farming.resetPool.v10000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.killPool.name:
      if (farming.killPool.v954.is(call)) {
        return farming.killPool.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.editPool.name:
      if (farming.editPool.v954.is(call)) {
        return farming.editPool.v954.decode(call);
      } else if (farming.editPool.v956.is(call)) {
        return farming.editPool.v956.decode(call);
      } else if (farming.editPool.v962.is(call)) {
        return farming.editPool.v962.decode(call);
      } else if (farming.editPool.v980.is(call)) {
        return farming.editPool.v980.decode(call);
      } else if (farming.editPool.v990.is(call)) {
        return farming.editPool.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.gaugeWithdraw.name:
      if (farming.gaugeWithdraw.v954.is(call)) {
        return farming.gaugeWithdraw.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.forceGaugeClaim.name:
      if (farming.forceGaugeClaim.v954.is(call)) {
        return farming.forceGaugeClaim.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.addBoostPoolWhitelist.name:
      if (farming.addBoostPoolWhitelist.v974.is(call)) {
        return farming.addBoostPoolWhitelist.v974.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.setNextRoundWhitelist.name:
      if (farming.setNextRoundWhitelist.v974.is(call)) {
        return farming.setNextRoundWhitelist.v974.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.vote.name:
      if (farming.vote.v974.is(call)) {
        return farming.vote.v974.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.startBoostRound.name:
      if (farming.startBoostRound.v974.is(call)) {
        return farming.startBoostRound.v974.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.endBoostRound.name:
      if (farming.endBoostRound.v974.is(call)) {
        return farming.endBoostRound.v974.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case farming.chargeBoost.name:
      if (farming.chargeBoost.v974.is(call)) {
        return farming.chargeBoost.v974.decode(call);
      } else if (farming.chargeBoost.v980.is(call)) {
        return farming.chargeBoost.v980.decode(call);
      } else if (farming.chargeBoost.v990.is(call)) {
        return farming.chargeBoost.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
