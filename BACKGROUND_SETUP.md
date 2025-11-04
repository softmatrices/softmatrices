# 🖼️ Animated Background Image Setup

## How to Change the Background Image

### Quick Setup

1. **Open the configuration file**:
   ```
   src/config/background.ts
   ```

2. **Replace the image URL**:
   ```typescript
   export const backgroundConfig = {
     heroBackground: {
       // Replace this URL with your image URL
       imageUrl: 'YOUR_IMAGE_URL_HERE',
       // ... other settings
     }
   };
   ```

### Image Requirements

- **Resolution**: At least 1920x1080 pixels (higher is better)
- **Format**: JPG, PNG, or WebP
- **Size**: Optimize for web (under 2MB recommended)
- **Content**: Choose images with good contrast for text readability

### Recommended Image Sources

1. **Unsplash** (Free): https://unsplash.com/
2. **Pexels** (Free): https://www.pexels.com/
3. **Pixabay** (Free): https://pixabay.com/
4. **Shutterstock** (Paid): https://www.shutterstock.com/

### Example Image URLs

```typescript
// Tech/Abstract
imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80'

// Business/Office
imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80'

// Abstract/Geometric
imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80'
```

### Animation Customization

You can also customize the animation effects:

```typescript
heroBackground: {
  imageUrl: 'YOUR_IMAGE_URL',
  overlayOpacity: 0.7,        // 0-1, higher = more overlay
  animationDuration: 25,      // seconds for full cycle
  scaleRange: [1, 1.05, 1],   // [min, max, min] scale
  opacityRange: [0.4, 0.6, 0.4] // [min, max, min] opacity
}
```

### Using Your Own Image

1. **Upload your image** to a hosting service (Imgur, Cloudinary, etc.)
2. **Get the direct URL** to your image
3. **Replace the imageUrl** in the config file
4. **Save and refresh** your browser

### Troubleshooting

- **Image not loading**: Check if the URL is accessible and doesn't require authentication
- **Poor text readability**: Increase `overlayOpacity` value
- **Animation too fast/slow**: Adjust `animationDuration` value
- **Image quality issues**: Use higher resolution images

### Performance Tips

- Use optimized images (WebP format when possible)
- Keep file sizes under 2MB
- Use CDN-hosted images for better performance
- Consider using multiple image sizes for different screen resolutions
