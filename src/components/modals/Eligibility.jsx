import React from "react";
import CloseBttn from "../buttons/CloseBttn";
import Button from "../buttons/Button";
import ColorLabel from "../ColorLabel";
import LargeBadge from "../badges/LargeBadge";

export default function Eligibity({loan}) {
    const loans = Object.keys(loan).length > 0 ? loan.transactions.reduce((sum, item) => {
        const tenure = item.tenure * 12;
        const loanAmount = parseFloat(item.motorcycle?.price || 0) - parseFloat(item.downpayment || 0);
        const monthlyRate = item.motorcycle.interest / 12 / 100;
        const emi = monthlyRate === 0 ? loanAmount / tenure
            : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
        
        return sum + Math.round(emi * 100) / 100;
    }, 0) : 0;

    const ndi = parseFloat(loan.rate) - (parseFloat(loan.rent) + parseFloat(loan.amortization) + parseFloat(loan.bills) + parseFloat(loan.living_exp) + parseFloat(loan.education_exp) + parseFloat(loan.transportation));
    const dti = ((parseFloat(loan.rent) + parseFloat(loan.amortization) + loans) / parseFloat(loan.rate)) * 100;

    function empStability() {
        const inc = parseFloat(loan.rate) >= 15000;
        const year = loan.yrs_in_service >= 1;

        return inc && year ? 'green' : (inc || year ? 'yellow' : 'red');
    }

    function debtStability() {
        if(dti <= 35) return 'green';
        else if(dti > 35 && dti < 46) return 'yellow';
        else return 'red';
    }

    function ndiStability() {
        const bool = loans / ndi;

        if(bool <= 0.3)return 'green';
        else if(bool > 0.3 && bool < 0.41)return 'yellow';
        else return 'red';
    }

    function assessDecision() {
        const counts = { green: 0, red: 0, yellow: 0 };

        for (let val of [empStability(), debtStability(), ndiStability()]) {
            counts[val]++;
        }

        const { green, red, yellow } = counts;

        if (green === 3) return "eligible";
        if (green === 2 && yellow === 1) return "passed";
        if (green === 1 && yellow === 2) return "passed";
        if (yellow === 3) return "review";
        if (red === 1 && yellow === 2) return "not_eligible";
        if (red === 2 && yellow === 1) return "not_eligible";
        if (red === 3) return "reject";
        else return "review";
    }

    return (
        <div id="eligibleModal" className="overflow-y-auto hidden overflow-x-hidden fixed bg-gray-400 dark:bg-gray-700 bg-opacity-60 dark:bg-opacity-60 top-0 right-0 left-0 z-50 flex items-center justify-center w-full md:inset-0 h-[calc(100%-1rem)] md:h-full">
            <div className="relative p-4 w-full max-w-3xl h-full md:h-auto">
                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-10 sm:py-8 border border-gray-500">
                    <div className="flex justify-between items-center pb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Eligibility Results</h3>
                        <CloseBttn id="eligibleModal" />
                    </div>
                    <section>
                        <table className="w-full">
                            <thead className="border-b border-gray-400">
                                <th className="py-2">Category</th>
                                <th className="py-2">Data</th>
                                <th className="py-2">Threshold</th>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-400">
                                    <td className="py-4 flex space-x-3 items-center mr-3">
                                        <ColorLabel style={empStability()} />
                                        <h3 className="text-md font-semibold text-gray-900 dark:text-white">Employment Stability</h3>
                                    </td>
                                    <td className="py-4">
                                        <div className="grid grid-cols-2 gap-x-6">
                                            <span className="text-sm text-gray-600">Income Source:</span>
                                            <span className="font-semibold text-md text-gray-700">{loan.income ? loan.income.charAt(0).toUpperCase() + loan.income.slice(1) : ''}</span>
                                            <span className="text-sm text-gray-600">Years in service:</span>
                                            <span className="font-semibold text-md text-gray-700">{loan.yrs_in_service} years</span>
                                            <span className="text-sm text-gray-600">Monthly Income:</span>
                                            <span className="font-semibold text-md text-rose-700">₱{parseFloat(loan.rate).toLocaleString()}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 flex justify-center">
                                        <div className="flex flex-col space-y-3">
                                            <span className="font-semibold text-rose-700 whitespace-nowrap">Income &ge; ₱15,000.00</span>
                                            <span className="font-semibold text-rose-700 whitespace-nowrap">&ge;1 year in job/business</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-400">
                                    <td className="py-4 flex space-x-3 items-center mr-3">
                                        <ColorLabel style={debtStability()} />
                                        <h3 className="text-md font-semibold text-gray-900 dark:text-white">Existing Debts and Loans</h3>
                                    </td>
                                    <td className="py-4">
                                        <div className="grid grid-cols-2 gap-x-6">
                                            <span className="text-sm text-gray-600 whitespace-nowrap">Monthly Rent:</span>
                                            <span className="font-semibold text-md text-gray-700">₱{parseFloat(loan.rent).toLocaleString()}</span>
                                            <span className="text-sm text-gray-600 whitespace-nowrap">Amortization:</span>
                                            <span className="font-semibold text-md text-gray-700">₱{parseFloat(loan.amortization).toLocaleString()}</span>
                                            <span className="text-sm text-gray-600 whitespace-nowrap">Total EMI:</span>
                                            <span className="font-semibold text-md text-gray-700">₱{loans.toLocaleString()}</span>
                                            <span className="text-md font-bold mt-2 text-gray-600">DTI Ratio:</span>
                                            <span className="text-rose-700 font-bold mt-2">{dti.toFixed(2)}%</span>
                                        </div>
                                    </td>
                                    <td className="py-4 flex justify-center">
                                        <span className="font-semibold text-rose-700 whitespace-nowrap">DTI &le; 35%</span>
                                    </td>
                                </tr>
                                 <tr className="border-b border-gray-400">
                                    <td className="py-4 flex space-x-3 items-center mr-3">
                                        <ColorLabel style={ndiStability()} />
                                        <h3 className="text-md font-semibold text-gray-900 dark:text-white">Net Disposable Income</h3>
                                    </td>
                                    <td className="py-4">
                                        <div className="grid grid-cols-2 gap-x-6">
                                            <span className="text-sm text-gray-600 whitespace-nowrap">Net Income:</span>
                                            <span className="font-semibold text-md text-gray-700">₱{parseFloat(loan.rate).toLocaleString()}</span>
                                            <span className="text-md font-bold mt-2 text-gray-600">NDI:</span>
                                            <span className="text-rose-700 font-bold mt-2">₱{ndi.toLocaleString()}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 flex justify-center">
                                        <span className="font-semibold text-rose-700 whitespace-nowrap">Total EMI &le; 30% of NDI</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex sm:space-x-4 mb-4">
                            <span className="flex items-center">
                                <ColorLabel size={3} style="green" />
                                <span className="text-sm text-gray-700">Passed</span>
                            </span>
                            <span className="flex items-center">
                                <ColorLabel size={3} style="yellow" />
                                <span className="text-sm text-gray-700">Partial</span>
                            </span>
                            <span className="flex items-center">
                                <ColorLabel size={3} style="red" />
                                <span className="text-sm text-gray-700">Failed</span>
                            </span>
                        </div>
                        <LargeBadge type={assessDecision()} />
                        <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <Button text="Close" onclick={() => document.getElementById('eligibleModal').style.display = 'none'} />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}