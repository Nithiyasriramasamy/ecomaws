# 🔐 Environment Variables Setup

## ⚠️ Important Security Notice
**Never upload .env files to GitHub!** They contain sensitive information like database passwords.

## 🔧 How to Set Up Environment Variables

### Step 1: Create Your .env File
1. Navigate to the `backend` folder
2. Copy `.env.example` to `.env`:
   ```bash
   cp backend/.env.example backend/.env
   ```

### Step 2: Get MongoDB Atlas Connection String
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Login to your account
3. Go to your cluster
4. Click "Connect" → "Connect your application"
5. Copy the connection string

### Step 3: Update .env File
Replace the placeholder in `backend/.env`:
```
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
PORT=5000
```

### Step 4: Verify Setup
- ✅ `.env` file exists in backend folder
- ✅ `.env` is listed in `.gitignore`
- ✅ MongoDB connection string is correct
- ✅ Never commit .env to Git

## 🚀 For Production Deployment
When deploying to services like:
- **Heroku**: Add environment variables in dashboard
- **Vercel**: Add in project settings
- **Netlify**: Add in site settings
- **AWS**: Use environment variables or AWS Secrets Manager

## 🔒 Security Best Practices
1. **Never** commit .env files
2. **Always** use .env.example for templates
3. **Rotate** credentials regularly
4. **Use** different credentials for dev/prod
5. **Enable** IP whitelisting in MongoDB Atlas