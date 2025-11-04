// Background Image Configuration
// Replace the imageUrl with your desired background image

export const backgroundConfig = {
  // Main hero background image - Abstract Digital Grid
  heroBackground: {
    // Abstract digital grid background with glowing blue particles
    imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80',
    
    // Animation settings optimized for digital grid effect
    overlayOpacity: 0.3,        // Lower overlay to show the beautiful grid
    animationDuration: 30,      // Slower animation for elegant effect
    scaleRange: [1, 1.02, 1],   // Subtle scaling to maintain grid integrity
    opacityRange: [0.6, 0.8, 0.6] // Higher opacity to showcase the digital effect
  },
  
  // Alternative background options (uncomment to use)
  alternatives: {
    // Current Digital Grid (active)
    digitalGrid: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80',
    
    // Alternative Digital Grid - Blue Particles
    digitalParticles: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80',
    
    // Abstract Circuit Board
    circuitBoard: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80',
    
    // Neural Network Pattern
    neuralNetwork: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80',
    
    // Data Visualization
    dataViz: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80'
  }
};

// Instructions:
// 1. To use your own image, replace the imageUrl above with your image URL
// 2. Make sure your image is high resolution (at least 1920x1080)
// 3. For best results, use images with good contrast for text readability
// 4. You can adjust the animation settings above to customize the effect
