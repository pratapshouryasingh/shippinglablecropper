import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import PdfViewer from "./pages/PdfViewer";
import FlipkartCropper from './pages/FlipkartCropper';
import ECommerceCropper from "./pages/E-CommerceCropper";
import MeshooCropper from "./pages/MeshooCropper";
import JioMartCropper from "./pages/JioMartCropper";
import ContactUs from "./pages/ContactUs";
import AdminPanel from "./pages/AdminPanel";
import HistorySidebar from "./components/HistorySidebar";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./App.css";


function HomePage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
       <Helmet>
        {/* Primary Meta Tags */}
        <title>AI-Powered Cropper Tool | Free Image Crop & Resize for E-commerce</title>
        <meta 
          name="description" 
          content="Use our free AI-powered cropper tool to crop, resize, and optimize product images for Flipkart, Meesho, Amazon, and any e-commerce platform. Fast, simple, and SEO-friendly." 
        />
        <meta 
          name="keywords" 
          content="AI cropper, free crop tool, image cropper online, product image resizer, e-commerce crop tool, Flipkart image crop, Meesho image crop, Amazon image crop, SEO friendly cropper" 
        />
        <meta name="author" content="Your Brand Name" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="AI-Powered Cropper Tool | Free Image Crop & Resize" />
        <meta 
          property="og:description" 
          content="Crop, resize, and optimize product images for Flipkart, Meesho, Amazon, and more with our free AI cropper tool. Boost your e-commerce sales with perfect images." 
        />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.com/preview.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Cropper Tool | Free Image Crop & Resize" />
        <meta 
          name="twitter:description" 
          content="Optimize your e-commerce product images with our AI-powered cropper tool. Works with Flipkart, Meesho, Amazon & more." 
        />
        <meta name="twitter:image" content="https://yourdomain.com/preview.png" />

        {/* Mobile/SEO Optimizations */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>


      {/* Hero Section */}
      <div className="flex-grow max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Your PDF & E-commerce Toolkit
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Powerful tools for PDF viewing and e-commerce image cropping. 
            Streamline your workflow with our intuitive solutions.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <button
              onClick={() => navigate("/PdfViewer")}
              className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              Go to Universal File Converter
            </button>
            <button
              onClick={() => navigate("/E-CommerceCropper")}
              className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-xl border border-indigo-200 hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 极 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Go to E-commerce Editor
            </button>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-indigo-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">PDF Viewer</h3>
              <p className="text-gray-600">
                View and interact with PDF documents seamlessly in your browser with zooming, searching, and navigation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-green-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4v5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">E-commerce Cropper</h3>
              <p className="text-gray-600">
                Precise image cropping tools optimized for all major e-commerce platforms with specialized editors.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2极14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Platform Specific</h3>
              <p className="text-gray-600">
                Dedicated tools for Flipkart, Meesho, JioMart and other major e-commerce platforms with their specific requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Fast & Efficient</h3>
              <p className="text-gray-600">
                Optimized tools that help you complete your tasks faster with intuitive interfaces and smart workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Platform Showcase */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Supported Platforms</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div 
              onClick={() => navigate("/FlipkartCropper")}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center"
            >
              <div className="bg-blue-50 p-4 rounded-xl mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">F</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Flipkart</h3>
            </div>
            
            <div 
              onClick={() => navigate("/MeshooCropper")}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center"
            >
              <div className="bg-orange-50 p-4 rounded-xl mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">M</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Meesho</h3>
            </div>
            
            <div 
              onClick={() => navigate("/JioMartCropper")}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center"
            >
              <div className="bg-red-50 p-4 rounded-xl mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">J</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">JioMart</h3>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer at the bottom of the home page */}
      <Footer />
    </div>
  );
}

// Wrapper component for pages that need the footer

// Wrapper component for pages that need the footer
const PageWithFooter = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/PdfViewer" 
          element={
            <PageWithFooter>
              <PdfViewer />
            </PageWithFooter>
          } 
        />
        <Route 
          path="/E-CommerceCropper" 
          element={
            <PageWithFooter>
              <ECommerceCropper />
            </PageWithFooter>
          } 
        />
        <Route 
          path="/FlipkartCropper" 
          element={
            <PageWithFooter>
              <FlipkartCropper />
            </PageWithFooter>
          } 
        />
        <Route 
          path="/MeshooCropper" 
          element={
            <PageWithFooter>
              <MeshooCropper />
            </PageWithFooter>
          } 
        />
        <Route 
          path="/JioMartCropper" 
          element={
            <PageWithFooter>
              <JioMartCropper />
            </PageWithFooter>
          } 
        />
        <Route 
          path="/ContactUs" 
          element={
            <PageWithFooter>
              <ContactUs />
            </PageWithFooter>
          }
        />
        <Route 
          path="/AdminPanel" 
          element={
            <PageWithFooter>
              <AdminPanel />
            </PageWithFooter>
          }
        />
        
      </Routes>
      
      {/* History Sidebar - Accessible from all pages on hover */}
      <HistorySidebar />
    </>
  );
}