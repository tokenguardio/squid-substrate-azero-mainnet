import {sts, Result, Option, Bytes, BitSequence} from './support'

export const TimeUnit: sts.Type<TimeUnit> = sts.closedEnum(() => {
    return  {
        Era: sts.number(),
        Hour: sts.number(),
        Kblock: sts.number(),
        Round: sts.number(),
        SlashingSpan: sts.number(),
    }
})

export type TimeUnit = TimeUnit_Era | TimeUnit_Hour | TimeUnit_Kblock | TimeUnit_Round | TimeUnit_SlashingSpan

export interface TimeUnit_Era {
    __kind: 'Era'
    value: number
}

export interface TimeUnit_Hour {
    __kind: 'Hour'
    value: number
}

export interface TimeUnit_Kblock {
    __kind: 'Kblock'
    value: number
}

export interface TimeUnit_Round {
    __kind: 'Round'
    value: number
}

export interface TimeUnit_SlashingSpan {
    __kind: 'SlashingSpan'
    value: number
}

export const RedeemTo: sts.Type<RedeemTo> = sts.closedEnum(() => {
    return  {
        Astar: AccountId32,
        Hydradx: AccountId32,
        Interlay: AccountId32,
        Manta: AccountId32,
        Moonbeam: H160,
        Native: AccountId32,
    }
})

export const H160 = sts.bytes()

export type RedeemTo = RedeemTo_Astar | RedeemTo_Hydradx | RedeemTo_Interlay | RedeemTo_Manta | RedeemTo_Moonbeam | RedeemTo_Native

export interface RedeemTo_Astar {
    __kind: 'Astar'
    value: AccountId32
}

export interface RedeemTo_Hydradx {
    __kind: 'Hydradx'
    value: AccountId32
}

export interface RedeemTo_Interlay {
    __kind: 'Interlay'
    value: AccountId32
}

export interface RedeemTo_Manta {
    __kind: 'Manta'
    value: AccountId32
}

export interface RedeemTo_Moonbeam {
    __kind: 'Moonbeam'
    value: H160
}

export interface RedeemTo_Native {
    __kind: 'Native'
    value: AccountId32
}

export type H160 = Bytes

export type AccountId32 = Bytes

export const CurrencyId: sts.Type<CurrencyId> = sts.closedEnum(() => {
    return  {
        BLP: sts.number(),
        ForeignAsset: sts.number(),
        LPToken: sts.tuple(() => [TokenSymbol, sts.number(), TokenSymbol, sts.number()]),
        Lend: sts.number(),
        Native: TokenSymbol,
        Stable: TokenSymbol,
        StableLpToken: sts.number(),
        Token: TokenSymbol,
        Token2: sts.number(),
        VSBond: sts.tuple(() => [TokenSymbol, sts.number(), sts.number(), sts.number()]),
        VSBond2: sts.tuple(() => [sts.number(), sts.number(), sts.number(), sts.number()]),
        VSToken: TokenSymbol,
        VSToken2: sts.number(),
        VToken: TokenSymbol,
        VToken2: sts.number(),
    }
})

export const TokenSymbol: sts.Type<TokenSymbol> = sts.closedEnum(() => {
    return  {
        ASG: sts.unit(),
        BNC: sts.unit(),
        DOT: sts.unit(),
        ETH: sts.unit(),
        KAR: sts.unit(),
        KSM: sts.unit(),
        KUSD: sts.unit(),
        MOVR: sts.unit(),
        PHA: sts.unit(),
        RMRK: sts.unit(),
        ZLK: sts.unit(),
    }
})

export type TokenSymbol = TokenSymbol_ASG | TokenSymbol_BNC | TokenSymbol_DOT | TokenSymbol_ETH | TokenSymbol_KAR | TokenSymbol_KSM | TokenSymbol_KUSD | TokenSymbol_MOVR | TokenSymbol_PHA | TokenSymbol_RMRK | TokenSymbol_ZLK

export interface TokenSymbol_ASG {
    __kind: 'ASG'
}

export interface TokenSymbol_BNC {
    __kind: 'BNC'
}

export interface TokenSymbol_DOT {
    __kind: 'DOT'
}

export interface TokenSymbol_ETH {
    __kind: 'ETH'
}

export interface TokenSymbol_KAR {
    __kind: 'KAR'
}

export interface TokenSymbol_KSM {
    __kind: 'KSM'
}

export interface TokenSymbol_KUSD {
    __kind: 'KUSD'
}

export interface TokenSymbol_MOVR {
    __kind: 'MOVR'
}

export interface TokenSymbol_PHA {
    __kind: 'PHA'
}

export interface TokenSymbol_RMRK {
    __kind: 'RMRK'
}

export interface TokenSymbol_ZLK {
    __kind: 'ZLK'
}

export type CurrencyId = CurrencyId_BLP | CurrencyId_ForeignAsset | CurrencyId_LPToken | CurrencyId_Lend | CurrencyId_Native | CurrencyId_Stable | CurrencyId_StableLpToken | CurrencyId_Token | CurrencyId_Token2 | CurrencyId_VSBond | CurrencyId_VSBond2 | CurrencyId_VSToken | CurrencyId_VSToken2 | CurrencyId_VToken | CurrencyId_VToken2

export interface CurrencyId_BLP {
    __kind: 'BLP'
    value: number
}

export interface CurrencyId_ForeignAsset {
    __kind: 'ForeignAsset'
    value: number
}

export interface CurrencyId_LPToken {
    __kind: 'LPToken'
    value: [TokenSymbol, number, TokenSymbol, number]
}

export interface CurrencyId_Lend {
    __kind: 'Lend'
    value: number
}

export interface CurrencyId_Native {
    __kind: 'Native'
    value: TokenSymbol
}

export interface CurrencyId_Stable {
    __kind: 'Stable'
    value: TokenSymbol
}

export interface CurrencyId_StableLpToken {
    __kind: 'StableLpToken'
    value: number
}

export interface CurrencyId_Token {
    __kind: 'Token'
    value: TokenSymbol
}

export interface CurrencyId_Token2 {
    __kind: 'Token2'
    value: number
}

export interface CurrencyId_VSBond {
    __kind: 'VSBond'
    value: [TokenSymbol, number, number, number]
}

export interface CurrencyId_VSBond2 {
    __kind: 'VSBond2'
    value: [number, number, number, number]
}

export interface CurrencyId_VSToken {
    __kind: 'VSToken'
    value: TokenSymbol
}

export interface CurrencyId_VSToken2 {
    __kind: 'VSToken2'
    value: number
}

export interface CurrencyId_VToken {
    __kind: 'VToken'
    value: TokenSymbol
}

export interface CurrencyId_VToken2 {
    __kind: 'VToken2'
    value: number
}

export const AccountId32 = sts.bytes()
