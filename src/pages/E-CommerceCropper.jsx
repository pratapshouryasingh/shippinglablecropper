import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const ECommerceCropper = () => {
  const navigate = useNavigate();
  const [activePlatform, setActivePlatform] = useState(null);

  const platforms = [
    {
      id: "flipkart",
      name: "Flipkart",
      logo: "F",
      color: "blue",
      description: "Specialized tool for cropping and optimizing Flipkart product labels and images. Perfect for sellers who need to process bulk orders efficiently.",
      features: [
        "Automated label cropping",
        "SKU-based sorting",
        "Courier-wise organization",
        "Invoice management",
        "Batch processing",
        "PDF to image conversion"
      ],
      route: "/FlipkartCropper"
    },
    {
      id: "meesho",
      name: "Meesho",
      logo: "M",
      color: "orange",
      description: "Optimized tool for Meesho product image requirements and label formatting. Designed for resellers and small businesses.",
      features: [
        "Background removal",
        "Size standardization",
        "Quality optimization",
        "Bulk processing",
        "Format conversion",
        "Quick preview"
      ],
      route: "/MeshooCropper"
    },
    {
      id: "jiomart",
      name: "JioMart",
      logo: "J",
      color: "red",
      description: "Comprehensive tool for JioMart product image preparation and label cropping. Ideal for grocery and retail products.",
      features: [
        "Multi-format support",
        "Auto-rotation correction",
        "Quality enhancement",
        "Metadata preservation",
        "Quick export",
        "Barcode recognition"
      ],
      route: "/JioMartCropper"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case "blue":
        return "bg-blue-500 hover:bg-blue-600 text-white";
      case "orange":
        return "bg-orange-500 hover:bg-orange-600 text-white";
      case "red":
        return "bg-red-500 hover:bg-red-600 text-white";
      default:
        return "bg-gray-500 hover:bg-gray-600 text-white";
    }
  };

  const getBorderColor = (color) => {
    switch (color) {
      case "blue":
        return "border-blue-200";
      case "orange":
        return "border-orange-200";
      case "red":
        return "border-red-200";
      default:
        return "border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            E-Commerce Cropping Tools
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional tools designed specifically for different e-commerce platforms. 
            Optimize your product images and labels with platform-specific features.
          </p>
        </motion.div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${getBorderColor(platform.color)}`}
            >
              <div className="p-6">
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${getColorClasses(platform.color)} rounded-lg flex items-center justify-center text-lg font-bold`}>
                      {platform.logo}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{platform.name}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm">{platform.description}</p>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => navigate(platform.route)}
                  className={`w-full ${getColorClasses(platform.color)} py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Use {platform.name} Tool
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Use Our Tools?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Save Time</h3>
              <p className="text-gray-600 text-sm">Process hundreds of images in minutes instead of hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 极 0110.618 3.04A12.02 12.02 0 0121 12c0 5.591-3.824 10.29-9 11.622-5.176-1.332-9-6.03-9-11.622 0-1.042.133-2.052.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Platform Optimized</h3>
              <p className="text-gray-600 text-sm">Each tool is specifically designed for platform requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm10-4a2 2 0 11-4 0 2 2 0 014 0zM4 6a2 2 0 100 4h16a2 2 0 100-4H4z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Bulk Processing</h3>
              <p className="text-gray-600 text-sm">Handle large volumes of images efficiently</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Choose the tool that matches your e-commerce platform and start optimizing your product images today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/PdfViewer")}
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300"
            >
              Try PDF Viewer
            </button>
            <button
              onClick={() => navigate("/ContactUs")}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ECommerceCropper;