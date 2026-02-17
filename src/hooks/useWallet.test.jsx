import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useWallet } from "./useWallet";

describe('Checking the operation of useWallet', () => {
    test('Successful account replenishment', async () => {
        const { result } = renderHook(() => useWallet());

        const testReplenishment = { amount: '200', currency: 'RUB' };

        const oldAccount = result.current.accounts.find((account) => account.currency === testReplenishment.currency);
        const oldAmount = oldAccount?.amount ?? 0;

        await act(async () => {
            await result.current.topUpAccount(testReplenishment);
        });

        const newAccount = result.current.accounts.find((account) => account.currency === testReplenishment.currency);
        const newAmount = newAccount?.amount ?? 0;

        const testAmount = Number(oldAmount) + Number(testReplenishment.amount);

        expect(newAmount).toBe(testAmount);
    });
});