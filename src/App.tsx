import React from 'react';
import PaymentForm from './components/PaymentForm';
import OrderSummary from './components/OrderSummary';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Secure Checkout</h1>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <PaymentForm />
          </div>
          
          <div className="md:sticky md:top-8">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;