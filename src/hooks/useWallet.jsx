import { useState } from "react";
import { accounts as mockAccounts } from "../mocks/mockAccount";
import { transactions as mockTransactions } from "../mocks/mockTransactions";

const ACCOUNTS_KEY = 'accounts';
const TRANSACTIONS_KEY = 'transactions';

export const useWallet = () => {
    const [accounts, setAccounts] = useState(() => {
        const savedAccounts = localStorage.getItem(ACCOUNTS_KEY);
        if (savedAccounts) {
            try {
                return JSON.parse(savedAccounts);
            } catch {

            } 
        }

        return mockAccounts;
    });

    const [transactions, setTransactions] = useState(() => {
        const savedTransactions = localStorage.getItem(TRANSACTIONS_KEY);
        if (savedTransactions) {
            try {
                return JSON.parse(savedTransactions);
            } catch {

            }
        }

        return mockTransactions;
    });

    const topUpAccount = (data) => {
        const { amount, currency } = data;
        setAccounts((prev) => {
            const updatedAccounts = prev.map((account) => 
                account.currency === currency
                    ? {...account, amount: account.amount + Number(amount)}
                    : account   
            );

            localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(updatedAccounts));

            return updatedAccounts;
        });

        addTransaction({type: 'replenishment', data});
    };

    const addTransaction = (info) => {
        const { type } = info;
        const date = formatDate(new Date());

        if (type === 'replenishment') {
            const { data } = info;
            const { amount, currency } = data;
            const detailAmount = `+${amount} ${currency}`;
            const newTransactions = {
                id: Date.now(),
                type: 'Пополнение',
                detail: detailAmount,
                amount: detailAmount,
                date: date,
            };

            setTransactions((prev) => {
                const updatedTransactions = [newTransactions, ...prev];

                localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(updatedTransactions));

                return updatedTransactions;
            });
        }
    };

    const formatDate = (date) => {
        const d = new Date(date);

        const day = String(d.getDate()).padStart(2, "0");
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const year = d.getFullYear();

        const hours = String(d.getHours()).padStart(2, "0");
        const minutes = String(d.getMinutes()).padStart(2, "0");

        return `${day}.${month}.${year}, ${hours}:${minutes}`;
    };

    return {
        accounts,
        transactions,
        topUpAccount,
    }
};