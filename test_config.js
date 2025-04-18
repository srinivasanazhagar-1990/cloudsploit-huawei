try {
    const config = require('./config.js');
    console.log('Config loaded successfully:', config);
} catch (e) {
    console.error('Error loading config:', e);
}
