import React from 'react'
import { useCart } from '../context/CartContext'
import whatsappService from '../services/whatsapp'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product, 1)
  }

  const handleWhatsAppInquiry = () => {
    const message = whatsappService.generateInquiryMessage(product)
    whatsappService.openChat(message)
  }

  const handleShareProduct = () => {
    whatsappService.shareProduct(product)
  }

  return (
    <div className="card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-6xl">📦</span>
          </div>
        )}
        
        {/* Stock Badge */}
        {product.stock <= 0 ? (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Out of Stock
          </span>
        ) : product.stock < 10 ? (
          <span className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded">
            Low Stock
          </span>
        ) : null}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <span className="text-xs text-rapid-primary font-semibold uppercase tracking-wide">
          {product.category}
        </span>
        
        <h3 className="text-lg font-bold text-gray-800 mt-1 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-rapid-primary">
            ZMW {product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ZMW {product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <button
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
            className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-colors ${
              product.stock > 0
                ? 'bg-rapid-primary text-white hover:bg-green-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
          
          <button
            onClick={handleWhatsAppInquiry}
            className="py-2 px-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            title="Inquire via WhatsApp"
          >
            💬
          </button>
          
          <button
            onClick={handleShareProduct}
            className="py-2 px-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            title="Share on WhatsApp"
          >
            📤
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
