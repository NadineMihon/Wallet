import { useEffect, useState } from "react";
import { accounts as mockAccounts } from "../mocks/mockAccount";
import { transactions as mockTransactions } from "../mocks/mockTransactions";

const ACCOUNTS_KEY = 'accounts';
const TRANSACTIONS_KEY = 'transactions';
const RATES_KEY = 'rates';

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

    const [rates, setRates] = useState(() => {
        const savedRates = localStorage.getItem(RATES_KEY);
        if (savedRates) {
            try {
                return JSON.parse(savedRates);
            } catch {

            }
        }

        return null;
    });

    useEffect(() => {
        const savedRates = localStorage.getItem(RATES_KEY);

        if (!savedRates) {
            fetchFreshRates();
        } else {
            const data = JSON.parse(savedRates);
            const d = new Date(data.date);
            const ratesDay = d.getDate();

            const now = new Date();
            const nowDay = now.getDate();

            if (ratesDay !== nowDay) {
                fetchFreshRates();
            }
        }
    }, []);

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

    const getAmountTo = (formValues, setFormValues) => {
       const { amountFrom, currencyFrom, currencyTo } = formValues; 

        const currentAmountTo = Number(amountFrom) * (rates.rates[currencyFrom]/ rates.rates[currencyTo]);

        setFormValues({ ...formValues, amountTo: floorTo2(currentAmountTo) });
    };

    const fetchFreshRates = async () => {
        const requiredCurrencies = ['EUR', 'USD', 'CNY'];
        try {
            const response = await fetch(`https://www.cbr-xml-daily.com/daily_json.js`);
            const data = await response.json();

            const newRates = { RUB: 1 };

            const currencies = Object.values(data.Valute).filter((valute) => {
                return requiredCurrencies.includes(valute.CharCode);
            });

            currencies.forEach((valute) => {
                const ratePerOne = valute.Value / valute.Nominal;
                newRates[valute.CharCode] = ratePerOne;
            });

            const currentRates = {
                date: new Date(),
                base_currency: "RUB",
                rates: newRates    
            };

            setRates(currentRates);

            localStorage.setItem(RATES_KEY, JSON.stringify(currentRates));

        } catch (e) {
            console.log(e)
        }
    };

    const exchangeCurrency = (data) => {
        const { amountFrom, currencyFrom, currencyTo, amountTo } = data;
        setAccounts((prev) => {
            const updatedAccounts = prev.map((account) => {
                if (account.currency === currencyFrom) {
                    return {...account, amount: account.amount - Number(amountFrom)};
                } else if (account.currency === currencyTo ) {
                    return {...account, amount: account.amount + Number(amountTo)};  
                } else {
                    return account;
                }
            });

            localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(updatedAccounts));

            return updatedAccounts;
        });

        addTransaction({type: 'exchange', data});
    };

    const addTransaction = (info) => {
        const { type, data } = info;

        const date = formatDate(new Date());

        if (type === 'replenishment') {
            const { amount, currency } = data;
            const detailAmount = `+${amount} ${currency}`;
            const newTransaction = {
                id: Date.now(),
                type: 'Пополнение',
                detail: detailAmount,
                amount: detailAmount,
                date: date,
            };

            setTransactions((prev) => {
                const updatedTransactions = [newTransaction, ...prev];

                localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(updatedTransactions));

                return updatedTransactions;
            });
        }

        if (type === 'exchange') {
            const { amountFrom, amountTo, currencyFrom, currencyTo } = data;
            const currentAmount = `+${amountTo} ${currencyTo}`;
            const currentDetail = `${amountFrom} ${currencyFrom} → ${amountTo} ${currencyTo}`;
            const newTransaction = {
                id: Date.now(),
                type: 'Обмен',
                detail: currentDetail,
                amount: currentAmount,
                date: date,
            };

            setTransactions((prev) => {
                const updatedTransactions = [newTransaction, ...prev];

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

    const floorTo2 = (value) => {
        return Math.floor(value * 100) / 100;
    };

    return {
        accounts,
        transactions,
        topUpAccount,
        getAmountTo,
        exchangeCurrency,
    }
};