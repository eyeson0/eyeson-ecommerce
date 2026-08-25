# EYESON - Quick Start Guide

## 🚀 Fastest Way to Start

### Option 1: Automatic Setup (Recommended)

**On Mac/Linux:**
```bash
chmod +x setup.sh dev.sh
./setup.sh
./dev.sh
```

**On Windows:**
```bash
setup.bat
dev.bat
```

### Option 2: Manual Setup

**Step 1: Install Dependencies**
```bash
npm install
cd frontend && npm install && cd ..
cd backend && npm install && cd ..
cd admin && npm install && cd ..
```

**Step 2: Setup Environment**
```bash
cp .env.example .env
# Edit .env file with your settings
```

**Step 3: Setup Database (if using PostgreSQL)**
```bash
cd backend
npx prisma migrate dev
cd ..
```

**Step 4: Start Servers**
```bash
npm run dev
```

### Option 3: Using Docker (Easiest)

**Prerequisites:** Docker and Docker Compose installed

```bash
docker-compose up
```

This automatically:
- ✅ Creates PostgreSQL database
- ✅ Installs all dependencies
- ✅ Runs database migrations
- ✅ Starts all three servers

---

## 🌐 Access Your Application

Once running, open in your browser:

| App | URL | Purpose |
|-----|-----|----------|
| **Frontend** | http://localhost:5173 | Customer website |
| **Backend** | http://localhost:3000 | API server |
| **Admin** | http://localhost:5174 | Admin dashboard |

---

## 📝 Environment Variables

Edit `.env` file with these minimum values:

```env
# Database
DATABASE_URL=postgresql://eyeson:eyeson_password@localhost:5432/eyeson_db

# JWT
JWT_SECRET=your_secret_key_here
JWT_EXPIRY=7d

# Server
PORT=3000
NODE_ENV=development
```

---

## 🐛 Troubleshooting

### Issue: "Cannot connect to database"
**Solution:**
1. Make sure PostgreSQL is running
2. Check DATABASE_URL in .env
3. Try: `createdb eyeson_db` (if using psql)

### Issue: "Port 5173 already in use"
**Solution:** Change in frontend/vite.config.ts
```ts
server: {
  port: 5175, // Change this
}
```

### Issue: "npm command not found"
**Solution:** Install Node.js from https://nodejs.org/

---

## 📚 Project Structure

```
eyeson-ecommerce/
├── frontend/          # React customer website
├── backend/           # Express API server
├── admin/             # Admin dashboard
├── docker-compose.yml # Docker setup
├── setup.sh/.bat      # Quick setup
├── dev.sh/.bat        # Start development
└── .env.example       # Environment template
```

---

## 🎯 What to Do Next

1. **Test the Website**
   - Go to http://localhost:5173
   - Click "ENTER EYESON"
   - Explore the welcome animation

2. **Test the Admin Dashboard**
   - Go to http://localhost:5174
   - Explore order and product management

3. **Check API**
   - Go to http://localhost:3000/health
   - Should show: `{"status":"ok","message":"EYESON API is running"}`

4. **Next Development Steps**
   - See DEVELOPMENT.md for detailed guides
   - See API.md for endpoint documentation
   - See DEPLOYMENT.md for production setup

---

## 💡 Tips

- **Keep terminal open** - All three servers run together
- **Hot reload** - Changes update automatically in dev mode
- **Check logs** - Terminal shows errors and requests
- **Use .env** - Never commit real credentials
- **Database** - Use `npx prisma studio` to view/edit data

---

## 🆘 Need Help?

- Check README.md for full documentation
- Review DEPLOYMENT.md for production
- Check GitHub Issues for solutions
- Email: support@eyeson.com

---

**Ready to build something LIMITLESS?** 🚀
