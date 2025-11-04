# 🚀 GoDaddy Deployment Guide - SoftMatrices Website

## 📁 **Files Ready for Upload**

Your website has been built and is ready for deployment. Here are the files you need to upload:

### **Root Directory Files:**
- `index.html` (86,187 bytes) - Main website file
- `favicon.svg` (646 bytes) - Website icon
- `og-image.svg` (1,840 bytes) - Social media preview image

### **_astro/ Directory (5 files):**
- `App.KwxNtFzt.js` (172,739 bytes) - Main application code
- `client.DuhdvTyE.js` (178,585 bytes) - Client-side code
- `index.CMFzYXQQ.js` (7,789 bytes) - Index page code
- `index.DPQ-2xuj.css` (81,799 bytes) - All styles
- `page.DTIbhfSr.js` (2,176 bytes) - Page components

**Total Size:** ~525 KB (very lightweight!)

## 🎯 **Step-by-Step GoDaddy Deployment**

### **Step 1: Access GoDaddy Control Panel**
1. Log into your GoDaddy account
2. Go to "My Products"
3. Find your domain and click "Manage"
4. Look for "File Manager" or "Hosting"

### **Step 2: Find Your Website Directory**
Look for one of these folders:
- `public_html` (most common)
- `www`
- `htdocs`
- Your domain name folder

### **Step 3: Upload Files**

#### **Method A: File Manager Upload**
1. **Compress your files:**
   ```bash
   # In your project directory
   cd dist
   zip -r softmatrices-website.zip .
   ```

2. **Upload via GoDaddy File Manager:**
   - Go to File Manager
   - Navigate to `public_html`
   - Upload `softmatrices-website.zip`
   - Extract the ZIP file
   - Delete the ZIP file after extraction

#### **Method B: FTP Upload (Recommended)**
1. **Get FTP credentials from GoDaddy:**
   - Host: Usually `ftp.yourdomain.com` or IP address
   - Username: Your hosting username
   - Password: Your hosting password
   - Port: 21 (default)

2. **Use FileZilla or similar FTP client:**
   - Connect using your credentials
   - Navigate to `public_html` folder
   - Upload ALL contents from your `dist` folder
   - Make sure to upload the `_astro` folder as well

### **Step 4: Set File Permissions**
After upload, set these permissions:
- **Files:** 644
- **Folders:** 755
- **index.html:** 644

### **Step 5: Test Your Website**
1. Visit your domain in a browser
2. Check that all animations work
3. Test dark/light mode toggle
4. Verify mobile responsiveness
5. Check contact form functionality

## 🔧 **Troubleshooting**

### **If website doesn't load:**
1. Check that `index.html` is in the root directory
2. Verify all `_astro` files are uploaded
3. Check file permissions
4. Clear browser cache

### **If animations don't work:**
1. Ensure all JavaScript files are uploaded
2. Check browser console for errors
3. Verify CSS files are present

### **If styling is broken:**
1. Check that `index.DPQ-2xuj.css` is uploaded
2. Verify file permissions
3. Clear browser cache

## 📱 **Mobile Testing**
Test your website on:
- Desktop browsers (Chrome, Firefox, Safari)
- Mobile devices (iOS Safari, Android Chrome)
- Different screen sizes

## 🚀 **Performance Tips**
Your website is already optimized:
- ✅ **Compressed assets** (gzipped)
- ✅ **Minified code**
- ✅ **Optimized images**
- ✅ **Fast loading** (~525 KB total)

## 📞 **GoDaddy Support**
If you need help:
- **GoDaddy Support:** 1-480-505-8877
- **Live Chat:** Available in your account
- **Help Center:** help.godaddy.com

## ✅ **Deployment Checklist**
- [ ] All files uploaded to `public_html`
- [ ] `_astro` folder uploaded completely
- [ ] File permissions set correctly
- [ ] Website loads at your domain
- [ ] All animations working
- [ ] Dark/light mode functional
- [ ] Mobile responsive
- [ ] Contact form working

## 🎉 **You're Ready to Go Live!**

Your SoftMatrices website is now ready for the world to see with:
- **Premium DigitalOcean-inspired design**
- **Smooth animations and interactions**
- **Dark/light mode toggle**
- **Animated number counters**
- **Professional contact form**
- **Mobile-responsive design**

**Total deployment time:** 15-30 minutes
**Website size:** ~525 KB (super fast!)

Good luck with your deployment! 🚀✨
