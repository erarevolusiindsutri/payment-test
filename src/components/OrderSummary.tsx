import React from 'react';
import { ShoppingCart, CreditCard } from 'lucide-react';

const OrderSummary: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <ShoppingCart className="h-5 w-5" />
        Order Summary
      </h2>
      
      <div className="space-y-3">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>$99.00</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span>$9.90</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="h-px bg-gray-200 my-2"></div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>$108.90</span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-start gap-2">
        <CreditCard className="h-5 w-5 text-blue-600 mt-0.5" />
        <p className="text-sm text-blue-700">
          Your card will be charged $108.90. The charge will appear as "Store Purchase" on your statement.
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;