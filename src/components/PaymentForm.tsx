import React, { useState } from 'react';
import { CreditCard, Lock, Calendar, AlertCircle } from 'lucide-react';

interface FormData {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

const PaymentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Processing payment:', formData);
  };

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <div className="relative">
          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            maxLength={19}
            placeholder="1234 5678 9012 3456"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.cardNumber}
            onChange={(e) => setFormData({
              ...formData,
              cardNumber: formatCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))
            })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Card Holder Name</label>
        <input
          type="text"
          placeholder="JOHN DOE"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={formData.cardHolder}
          onChange={(e) => setFormData({ ...formData, cardHolder: e.target.value.toUpperCase() })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="MM/YY"
              maxLength={5}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.expiryDate}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 2) {
                  value = value.slice(0, 2) + '/' + value.slice(2);
                }
                setFormData({ ...formData, expiryDate: value });
              }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="password"
              placeholder="123"
              maxLength={3}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.cvv}
              onChange={(e) => setFormData({ ...formData, cvv: e.target.value.replace(/\D/g, '') })}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Lock className="h-4 w-4" />
        <span>Your payment information is secure and encrypted</span>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;