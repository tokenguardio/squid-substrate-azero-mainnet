import {sts, Result, Option, Bytes, BitSequence} from './support'

export const Perbill = sts.number()

export const MultiAddress: sts.Type<MultiAddress> = sts.closedEnum(() => {
    return  {
        Address20: sts.bytes(),
        Address32: sts.bytes(),
        Id: AccountId32,
        Index: sts.number(),
        Raw: sts.bytes(),
    }
})

export type MultiAddress = MultiAddress_Address20 | MultiAddress_Address32 | MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw

export interface MultiAddress_Address20 {
    __kind: 'Address20'
    value: Bytes
}

export interface MultiAddress_Address32 {
    __kind: 'Address32'
    value: Bytes
}

export interface MultiAddress_Id {
    __kind: 'Id'
    value: AccountId32
}

export interface MultiAddress_Index {
    __kind: 'Index'
    value: number
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Bytes
}

export type AccountId32 = Bytes

export const CurrencyId: sts.Type<CurrencyId> = sts.closedEnum(() => {
    return  {
        ForeignAsset: sts.number(),
        LPToken: sts.tuple(() => [TokenSymbol, sts.number(), TokenSymbol, sts.number()]),
        Native: TokenSymbol,
        Stable: TokenSymbol,
        Token: TokenSymbol,
        VSBond: sts.tuple(() => [TokenSymbol, sts.number(), sts.number(), sts.number()]),
        VSToken: TokenSymbol,
        VToken: TokenSymbol,
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

export type CurrencyId = CurrencyId_ForeignAsset | CurrencyId_LPToken | CurrencyId_Native | CurrencyId_Stable | CurrencyId_Token | CurrencyId_VSBond | CurrencyId_VSToken | CurrencyId_VToken

export interface CurrencyId_ForeignAsset {
    __kind: 'ForeignAsset'
    value: number
}

export interface CurrencyId_LPToken {
    __kind: 'LPToken'
    value: [TokenSymbol, number, TokenSymbol, number]
}

export interface CurrencyId_Native {
    __kind: 'Native'
    value: TokenSymbol
}

export interface CurrencyId_Stable {
    __kind: 'Stable'
    value: TokenSymbol
}

export interface CurrencyId_Token {
    __kind: 'Token'
    value: TokenSymbol
}

export interface CurrencyId_VSBond {
    __kind: 'VSBond'
    value: [TokenSymbol, number, number, number]
}

export interface CurrencyId_VSToken {
    __kind: 'VSToken'
    value: TokenSymbol
}

export interface CurrencyId_VToken {
    __kind: 'VToken'
    value: TokenSymbol
}

export const Id = sts.number()

export const AccountId32 = sts.bytes()

export const AssetId: sts.Type<AssetId> = sts.struct(() => {
    return  {
        chainId: sts.number(),
        assetType: sts.number(),
        assetIndex: sts.bigint(),
    }
})

export interface AssetId {
    chainId: number
    assetType: number
    assetIndex: bigint
}
