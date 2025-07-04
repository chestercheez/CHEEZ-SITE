# Deployment Guide

## 🚀 Quick Deploy Options

### Vercel (Recommended)
1. **Connect Repository**
   - Push code to GitHub/GitLab
   - Connect repository to Vercel
   - Vercel will auto-detect Next.js

2. **Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard
   - No additional configuration needed for this project

3. **Deploy**
   - Vercel will automatically build and deploy
   - Custom domain can be added in settings

### Netlify
1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 or higher

2. **Deploy**
   - Connect repository to Netlify
   - Configure build settings
   - Deploy automatically

### Static Export (Alternative)
1. **Configure Next.js**
   ```javascript
   // next.config.js
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy**
   - Upload `out/` directory to any static hosting
   - Works with GitHub Pages, AWS S3, etc.

## 🔧 Production Checklist

### Before Deployment
- [ ] All images are optimized and in `/public`
- [ ] Environment variables are configured
- [ ] SEO metadata is complete
- [ ] Performance is optimized
- [ ] Mobile responsiveness tested

### Post-Deployment
- [ ] Test all links and functionality
- [ ] Verify images load correctly
- [ ] Check mobile experience
- [ ] Validate SEO metadata
- [ ] Test performance scores

## 🌐 Domain & SSL

### Custom Domain
1. **Add Domain**
   - Configure in hosting platform
   - Update DNS records
   - Wait for propagation

2. **SSL Certificate**
   - Most platforms auto-provision SSL
   - Verify HTTPS redirects work

## 📊 Performance Optimization

### Build Optimization
- Images are automatically optimized by Next.js
- CSS is purged of unused styles
- JavaScript is code-split automatically

### Monitoring
- Set up performance monitoring
- Monitor Core Web Vitals
- Track user engagement metrics

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm start
```

## 🛠️ Troubleshooting

### Common Issues
1. **Build Failures**
   - Check Node.js version (18+)
   - Verify all dependencies installed
   - Check for TypeScript errors

2. **Image Loading Issues**
   - Ensure images are in `/public` directory
   - Check image paths in code
   - Verify Next.js Image component usage

3. **Styling Issues**
   - Confirm Tailwind CSS is configured
   - Check PostCSS configuration
   - Verify custom CSS classes

### Support
- Check Next.js documentation
- Review Tailwind CSS guides
- Consult hosting platform docs 