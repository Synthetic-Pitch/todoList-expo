const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// 🔧 Add support for .mjs files
config.resolver.sourceExts.push("mjs");

// If you're using NativeWind with a global CSS
module.exports = withNativeWind(config, { input: './global.css' });
