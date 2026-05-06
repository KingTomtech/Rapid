import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'

// Placeholder pages (to be implemented)
const Manufacturing = () => (
  <div className="min-h-screen py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Manufacturing & Custom Orders</h1>
      <p className="text-gray-600 mb-6">Request custom mattresses and foam products.</p>
      <div className="card max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Our Manufacturing Services</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✓ Custom-size foam mattresses</li>
          <li>✓ Spring mattresses (all sizes)</li>
          <li>✓ Divan bases with storage</li>
          <li>✓ Foam sheets and rolls</li>
          <li>✓ Orthopedic mattresses</li>
        </ul>
        <div className="mt-6">
          <a
            href="https://wa.me/260970000000?text=Hello,%20I%20would%20like%20to%20inquire%20about%20custom%20mattress%20manufacturing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
          >
            💬 Request Quote on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
)

const Admin = () => (
  <div className="min-h-screen py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
      <p className="text-gray-600 mb-6">Manage products, orders, and inventory.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card p-6 cursor-pointer hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-3">📦</div>
          <h3 className="font-semibold text-lg">Products</h3>
          <p className="text-sm text-gray-600">Manage catalog</p>
        </div>
        <div className="card p-6 cursor-pointer hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-3">🛒</div>
          <h3 className="font-semibold text-lg">Orders</h3>
          <p className="text-sm text-gray-600">View and manage orders</p>
        </div>
        <div className="card p-6 cursor-pointer hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-3">📊</div>
          <h3 className="font-semibold text-lg">Analytics</h3>
          <p className="text-sm text-gray-600">Sales and reports</p>
        </div>
        <div className="card p-6 cursor-pointer hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-3">👥</div>
          <h3 className="font-semibold text-lg">Customers</h3>
          <p className="text-sm text-gray-600">Customer management</p>
        </div>
        <div className="card p-6 cursor-pointer hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-3">🏭</div>
          <h3 className="font-semibold text-lg">Production</h3>
          <p className="text-sm text-gray-600">Track manufacturing</p>
        </div>
        <div className="card p-6 cursor-pointer hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-3">🎫</div>
          <h3 className="font-semibold text-lg">Vouchers</h3>
          <p className="text-sm text-gray-600">Discount codes</p>
        </div>
      </div>
    </div>
  </div>
)

const Contact = () => (
  <div className="min-h-screen py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium">📍 Location</p>
              <p className="text-gray-600">Mansa, Zambia</p>
            </div>
            <div>
              <p className="font-medium">📞 Phone</p>
              <p className="text-gray-600">+260 970 000 000</p>
            </div>
            <div>
              <p className="font-medium">💬 WhatsApp</p>
              <p className="text-gray-600">+260 970 000 000</p>
            </div>
            <div>
              <p className="font-medium">📧 Email</p>
              <p className="text-gray-600">info@rapidstores.co.zm</p>
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg" />
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded-lg" />
            <textarea placeholder="Message" rows="4" className="w-full px-4 py-2 border rounded-lg"></textarea>
            <button type="submit" className="bg-rapid-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
)

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-rapid-dark text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Rapid Stores</h3>
                <p className="text-gray-400 text-sm">
                  Your trusted partner for quality mattresses, furniture, and household essentials in Mansa, Zambia.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/" className="hover:text-white">Home</a></li>
                  <li><a href="/products" className="hover:text-white">Products</a></li>
                  <li><a href="/manufacturing" className="hover:text-white">Manufacturing</a></li>
                  <li><a href="/contact" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Payment Methods</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-400 text-xs px-2 py-1 rounded">MTN MoMo</span>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Airtel Money</span>
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Zamtel</span>
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">Lenco</span>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2024 Rapid Stores and General Dealers Ltd. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  )
}

export default App
