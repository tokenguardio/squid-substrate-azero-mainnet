import {
  normalizeBalancesEventsArgs,
  normalizeFarmingEventsArgs,
  normalizeLendMarketEventsArgs,
  normalizeLeverageStakingEventsArgs,
  normalizeVtokenMintingEventsArgs,
  normalizeVtokenVotingEventsArgs,
  normalizeZenlinkProtocolEventsArgs,
} from "./events";
import {
  normalizeBalancesCallsArgs,
  normalizeFarmingCallsArgs,
  normalizeLendMarketCallsArgs,
  normalizeLeverageStakingCallsArgs,
  normalizeStablePoolCallsArgs,
  normalizeVtokenMintingCallsArgs,
  normalizeVtokenVotingCallsArgs,
  normalizeZenlinkProtocolCallsArgs,
} from "./calls";
import { Event, Call } from "./../../processor";
import {
  wrapCallNormalizationWithFormatting,
  wrapEventNormalizationWithFormatting,
} from "../addresses/mapAddresses";

function wrapHandlers<T>(
  handlers: { [key: string]: (input: T) => any },
  wrapper: (normalizer: (input: T) => any) => (input: T) => any
) {
  const wrappedHandlers: { [key: string]: (input: T) => any } = {};
  Object.keys(handlers).forEach((key) => {
    wrappedHandlers[key] = wrapper(handlers[key]);
  });
  return wrappedHandlers;
}

export const eventNormalizationHandlers: {
  [key: string]: (event: Event) => any;
} = wrapHandlers(
  {
    Balances: normalizeBalancesEventsArgs,
    Farming: normalizeFarmingEventsArgs,
    LendMarket: normalizeLendMarketEventsArgs,
    LeverageStaking: normalizeLeverageStakingEventsArgs,
    VtokenMinting: normalizeVtokenMintingEventsArgs,
    VtokenVoting: normalizeVtokenVotingEventsArgs,
    ZenlinkProtocol: normalizeZenlinkProtocolEventsArgs,
  },
  wrapEventNormalizationWithFormatting
);

export const callNormalizationHandlers: { [key: string]: (call: Call) => any } =
  wrapHandlers(
    {
      Balances: normalizeBalancesCallsArgs,
      Farming: normalizeFarmingCallsArgs,
      LendMarket: normalizeLendMarketCallsArgs,
      LeverageStaking: normalizeLeverageStakingCallsArgs,
      VtokenMinting: normalizeVtokenMintingCallsArgs,
      VtokenVoting: normalizeVtokenVotingCallsArgs,
      StablePool: normalizeStablePoolCallsArgs,
      ZenlinkProtocol: normalizeZenlinkProtocolCallsArgs,
    },
    wrapCallNormalizationWithFormatting
  );
