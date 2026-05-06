# 🏪 Rapid Stores Platform

**Digital platform for Rapid Stores and General Dealers Ltd - Mansa, Zambia**

A modern, mobile-first e-commerce platform designed for the Zambian market, featuring WhatsApp integration, mobile money payments, and manufacturing management.

---

## 🚀 Features

### Customer-Facing
- ✅ Product catalog with categories
- ✅ Shopping cart with localStorage persistence
- ✅ WhatsApp order placement
- ✅ Mobile money payment support (MTN, Airtel, Zamtel, Lenco)
- ✅ Order tracking
- ✅ Mobile-optimized responsive design

### Admin Features
- ✅ Dashboard overview
- ✅ Product management
- ✅ Order management
- ✅ Inventory tracking
- ✅ Manufacturing module
- ✅ Voucher/discount system
- ✅ Analytics and reporting

### AI-Powered (Planned)
- 🤖 Customer support assistant
- 🤖 Sales recommendation engine
- 🤖 Inventory prediction
- 🤖 Marketing content generator

---

## 🛠️ Tech Stack

- **Frontend:** React 19 + Vite + Tailwind CSS
- **Backend:** Supabase (PostgreSQL + Auth + Storage)
- **API:** REST (with Cloudflare Workers option)
- **Payments:** MTN MoMo, Airtel Money, Zamtel, Lenco Pay
- **Communication:** WhatsApp Business API

---

## 📁 Project Structure

```
rapid-stores-platform/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.jsx
│   │   └── ProductCard.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Cart.jsx
│   │   └── ...
│   ├── context/         # React context providers
│   │   └── CartContext.jsx
│   ├── services/        # API and business logic
│   │   ├── supabase.js
│   │   ├── payment.js
│   │   └── whatsapp.js
│   ├── config.js        # App configuration
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── docs/
│   └── ARCHITECTURE.md  # System architecture documentation
├── public/              # Static assets
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for database)

### Installation

1. **Clone the repository**
   ```bash
   cd rapid-stores-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

---

## 📱 Available Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with featured products |
| `/products` | Product catalog with filters |
| `/cart` | Shopping cart |
| `/manufacturing` | Custom order requests |
| `/admin` | Admin dashboard |
| `/contact` | Contact information |

---

## 💳 Payment Integration

The platform supports major Zambian mobile money providers:

1. **MTN Mobile Money** - Yellow branding
2. **Airtel Money** - Red branding  
3. **Zamtel Kwacha** - Blue branding
4. **Lenco Pay** - Green branding

Payment flow is implemented in `src/services/payment.js`. Replace the simulated API calls with actual provider integrations.

---

## 💬 WhatsApp Integration

WhatsApp ordering is a core feature:

- Pre-filled order messages
- Product inquiry templates
- Share product functionality
- Customer support templates

Configure your business number in `src/config.js`:
```javascript
whatsapp: {
  phoneNumber: '+260970000000'
}
```

---

## 🗄️ Database Setup

Create the following tables in Supabase:

1. `users` - Customer and admin accounts
2. `products` - Product catalog
3. `orders` - Order records
4. `vouchers` - Discount codes
5. `production_orders` - Manufacturing tracking
6. `inventory_logs` - Stock changes
7. `analytics_daily` - Daily metrics

Full schema available in `docs/ARCHITECTURE.md`.

---

## 🎨 Customization

### Branding Colors

Edit `tailwind.config.js` to customize brand colors:

```javascript
colors: {
  rapid: {
    primary: '#16a34a',    // Green
    secondary: '#f59e0b',  // Amber
    dark: '#1f2937',       // Dark gray
    light: '#f3f4f6'       // Light gray
  }
}
```

### Adding Products

Products can be added via:
1. Admin dashboard (when implemented)
2. Direct database insertion
3. CSV import script (to be created)

Sample product structure:
```javascript
{
  id: 1,
  name: "Single Foam Mattress",
  price: 450,
  category: "Mattresses",
  description: "High-quality foam mattress",
  stock: 25
}
```

---

## 📊 Deployment

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Hosting Options

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   vercel deploy
   ```

2. **Netlify**
   Connect GitHub repo or drag-and-drop `dist/` folder

3. **Cloudflare Pages**
   Push to GitHub and connect to Cloudflare

---

## 🔐 Security Considerations

- Use HTTPS in production
- Enable Row-Level Security (RLS) in Supabase
- Validate all user inputs
- Implement rate limiting for APIs
- Regular security audits
- Keep dependencies updated

---

## 📈 Future Enhancements

- [ ] User authentication with phone OTP
- [ ] Real-time order tracking
- [ ] Delivery management system
- [ ] Multi-vendor marketplace
- [ ] Subscription grocery service
- [ ] Mobile app (React Native)
- [ ] AI chatbot integration
- [ ] Advanced analytics dashboard

---

## 🤝 Contributing

This project is being developed for Rapid Stores and General Dealers Ltd. For questions or contributions, please contact the development team.

---

## 📄 License

Proprietary - All rights reserved to Rapid Stores and General Dealers Ltd.

---

## 📞 Support

**Rapid Stores and General Dealers Ltd**
- 📍 Location: Mansa, Zambia
- 📞 Phone: +260 970 000 000
- 💬 WhatsApp: +260 970 000 000
- 📧 Email: info@rapidstores.co.zm

---

Built with ❤️ for Zambia 🇿🇲
