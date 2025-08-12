'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, Home, DollarSign, TrendingUp, Phone, Mail, Download } from 'lucide-react';

export default function MortgageCalculatorPage() {
  const [formData, setFormData] = useState({
    homePrice: 1000000,
    downPayment: 200000,
    downPaymentPercent: 20,
    loanAmount: 800000,
    interestRate: 6.5,
    loanTerm: 30,
    propertyTax: 8000,
    insurance: 2400,
    hoa: 300,
    creditScore: 750
  });

  const [monthlyPayment, setMonthlyPayment] = useState({
    principal: 0,
    interest: 0,
    tax: 0,
    insurance: 0,
    hoa: 0,
    total: 0
  });

  const [amortization, setAmortization] = useState<Array<{
    year: number;
    principal: number;
    interest: number;
    balance: number;
  }>>([]);

  useEffect(() => {
    calculateMortgage();
  }, [formData]);

  const calculateMortgage = () => {
    const { homePrice, downPayment, interestRate, loanTerm, propertyTax, insurance, hoa } = formData;
    const loanAmount = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    // Monthly mortgage payment (P&I)
    const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                     (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    // Monthly tax and insurance
    const monthlyTax = propertyTax / 12;
    const monthlyInsurance = insurance / 12;

    // Total monthly payment
    const total = monthlyPI + monthlyTax + monthlyInsurance + hoa;

    setMonthlyPayment({
      principal: monthlyPI,
      interest: 0, // Will be calculated in amortization
      tax: monthlyTax,
      insurance: monthlyInsurance,
      hoa: hoa,
      total: total
    });

    // Calculate amortization schedule
    calculateAmortization(loanAmount, monthlyRate, numberOfPayments);
  };

  const calculateAmortization = (principal: number, monthlyRate: number, numberOfPayments: number) => {
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    let balance = principal;
    const schedule = [];

    for (let year = 1; year <= Math.min(formData.loanTerm, 30); year++) {
      let yearlyPrincipal = 0;
      let yearlyInterest = 0;

      for (let month = 1; month <= 12; month++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        
        yearlyPrincipal += principalPayment;
        yearlyInterest += interestPayment;
        balance -= principalPayment;
      }

      schedule.push({
        year,
        principal: yearlyPrincipal,
        interest: yearlyInterest,
        balance: Math.max(0, balance)
      });
    }

    setAmortization(schedule);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let numValue = parseFloat(value);

    if (name === 'downPaymentPercent') {
      numValue = parseFloat(value);
      const newDownPayment = (formData.homePrice * numValue) / 100;
      setFormData(prev => ({
        ...prev,
        downPaymentPercent: numValue,
        downPayment: newDownPayment,
        loanAmount: formData.homePrice - newDownPayment
      }));
    } else if (name === 'downPayment') {
      numValue = parseFloat(value);
      const newPercent = (numValue / formData.homePrice) * 100;
      setFormData(prev => ({
        ...prev,
        downPayment: numValue,
        downPaymentPercent: newPercent,
        loanAmount: formData.homePrice - numValue
      }));
    } else if (name === 'homePrice') {
      numValue = parseFloat(value);
      const newDownPayment = (numValue * formData.downPaymentPercent) / 100;
      setFormData(prev => ({
        ...prev,
        homePrice: numValue,
        downPayment: newDownPayment,
        loanAmount: numValue - newDownPayment
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: numValue
      }));
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-amber-100 p-4">
              <Calculator className="h-12 w-12 text-amber-600" />
            </div>
          </div>
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
            Mortgage Calculator
          </h1>
          <p className="mx-auto max-w-4xl text-xl text-gray-600">
            Calculate your monthly mortgage payment for Summerlin West properties. 
            Get accurate estimates including principal, interest, taxes, and insurance.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Calculator Form */}
            <div className="space-y-8">
              <div className="rounded-xl bg-white p-8 shadow-xl">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Mortgage Payment Calculator
                </h2>
                
                <form className="space-y-6">
                  {/* Home Price */}
                  <div>
                    <label htmlFor="homePrice" className="block text-sm font-medium text-gray-700 mb-2">
                      Home Price *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">$</span>
                      <input
                        type="number"
                        id="homePrice"
                        name="homePrice"
                        value={formData.homePrice}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 pl-8 pr-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        placeholder="1000000"
                        min="100000"
                        max="10000000"
                        step="10000"
                      />
                    </div>
                  </div>

                  {/* Down Payment */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700 mb-2">
                        Down Payment ($)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-500">$</span>
                        <input
                          type="number"
                          id="downPayment"
                          name="downPayment"
                          value={formData.downPayment}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 pl-8 pr-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                          placeholder="200000"
                          min="0"
                          max={formData.homePrice}
                          step="10000"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="downPaymentPercent" className="block text-sm font-medium text-gray-700 mb-2">
                        Down Payment (%)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          id="downPaymentPercent"
                          name="downPaymentPercent"
                          value={formData.downPaymentPercent}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 pr-8 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                          placeholder="20"
                          min="3.5"
                          max="100"
                          step="0.5"
                        />
                        <span className="absolute right-3 top-3 text-gray-500">%</span>
                      </div>
                    </div>
                  </div>

                  {/* Loan Amount Display */}
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="text-sm text-gray-600 mb-1">Loan Amount</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatCurrency(formData.loanAmount)}
                    </div>
                  </div>

                  {/* Interest Rate & Term */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-2">
                        Interest Rate (%)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          id="interestRate"
                          name="interestRate"
                          value={formData.interestRate}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 pr-8 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                          placeholder="6.5"
                          min="2"
                          max="15"
                          step="0.125"
                        />
                        <span className="absolute right-3 top-3 text-gray-500">%</span>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700 mb-2">
                        Loan Term (Years)
                      </label>
                      <select
                        id="loanTerm"
                        name="loanTerm"
                        value={formData.loanTerm}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                      >
                        <option value={15}>15 Years</option>
                        <option value={20}>20 Years</option>
                        <option value={30}>30 Years</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Costs */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Additional Monthly Costs</h3>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="propertyTax" className="block text-sm font-medium text-gray-700 mb-2">
                          Property Tax (Annual)
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-gray-500">$</span>
                          <input
                            type="number"
                            id="propertyTax"
                            name="propertyTax"
                            value={formData.propertyTax}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 pl-8 pr-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                            placeholder="8000"
                            min="0"
                            max="50000"
                            step="100"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-2">
                          Insurance (Annual)
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-gray-500">$</span>
                          <input
                            type="number"
                            id="insurance"
                            name="insurance"
                            value={formData.insurance}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 pl-8 pr-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                            placeholder="2400"
                            min="0"
                            max="20000"
                            step="100"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="hoa" className="block text-sm font-medium text-gray-700 mb-2">
                          HOA (Monthly)
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-gray-500">$</span>
                          <input
                            type="number"
                            id="hoa"
                            name="hoa"
                            value={formData.hoa}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 pl-8 pr-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                            placeholder="300"
                            min="0"
                            max="2000"
                            step="25"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Contact CTA */}
              <div className="rounded-xl bg-amber-50 p-8 text-center">
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Need Help with Your Mortgage?
                </h3>
                <p className="mb-6 text-gray-600">
                  Our team can help you find the best mortgage rates and lenders for Summerlin West properties.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">(702) 555-0100</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">info@summerlinwesthomes.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results & Amortization */}
            <div className="space-y-8">
              {/* Monthly Payment Summary */}
              <div className="rounded-xl bg-white p-8 shadow-xl">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Your Monthly Payment
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Principal & Interest</span>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(monthlyPayment.principal)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Property Tax</span>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(monthlyPayment.tax)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Insurance</span>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(monthlyPayment.insurance)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">HOA</span>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(monthlyPayment.hoa)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-t-2 border-amber-500">
                    <span className="text-lg font-semibold text-gray-900">Total Monthly Payment</span>
                    <span className="text-2xl font-bold text-amber-600">
                      {formatCurrency(monthlyPayment.total)}
                    </span>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <div className="text-sm text-gray-600 mb-1">Total Interest Paid</div>
                    <div className="text-lg font-bold text-gray-900">
                      {formatCurrency(amortization.reduce((sum, year) => sum + year.interest, 0))}
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <div className="text-sm text-gray-600 mb-1">Total Cost</div>
                    <div className="text-lg font-bold text-gray-900">
                      {formatCurrency(formData.homePrice + amortization.reduce((sum, year) => sum + year.interest, 0))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Amortization Schedule */}
              <div className="rounded-xl bg-white p-8 shadow-xl">
                <h3 className="mb-6 text-xl font-bold text-gray-900">
                  Amortization Schedule
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 font-semibold text-gray-700">Year</th>
                        <th className="text-right py-2 font-semibold text-gray-700">Principal</th>
                        <th className="text-right py-2 font-semibold text-gray-700">Interest</th>
                        <th className="text-right py-2 font-semibold text-gray-700">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {amortization.slice(0, 10).map((year) => (
                        <tr key={year.year} className="border-b border-gray-100">
                          <td className="py-2 font-medium text-gray-900">{year.year}</td>
                          <td className="py-2 text-right text-gray-700">
                            {formatCurrency(year.principal)}
                          </td>
                          <td className="py-2 text-right text-gray-700">
                            {formatCurrency(year.interest)}
                          </td>
                          <td className="py-2 text-right font-medium text-gray-900">
                            {formatCurrency(year.balance)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 text-center">
                  <button className="inline-flex items-center space-x-2 rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 transition-colors">
                    <Download className="h-4 w-4" />
                    <span>Download Full Schedule</span>
                  </button>
                </div>
              </div>

              {/* Market Insights */}
              <div className="rounded-xl bg-amber-50 p-8">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Summerlin West Market Insights
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Average Home Price</span>
                    <span className="font-semibold text-gray-900">$1,247,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Average Down Payment</span>
                    <span className="font-semibold text-gray-900">$249,400 (20%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Current Interest Rates</span>
                    <span className="font-semibold text-gray-900">6.5% - 7.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Property Tax Rate</span>
                    <span className="font-semibold text-gray-900">0.64%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
