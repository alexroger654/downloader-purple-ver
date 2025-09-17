'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Play, 
  Zap, 
  Shield, 
  Clock, 
  Star,
  ChevronDown,
  Check,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Music,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const platforms = [
  { 
    name: 'Facebook', 
    icon: Facebook, 
    gradient: 'from-blue-500 via-blue-600 to-indigo-700',
    bgGradient: 'from-blue-500/20 to-indigo-600/20',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-400',
    hoverGlow: 'hover:shadow-blue-500/50'
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    gradient: 'from-pink-500 via-purple-500 to-orange-500',
    bgGradient: 'from-pink-500/20 to-purple-600/20',
    borderColor: 'border-pink-500',
    textColor: 'text-pink-400',
    hoverGlow: 'hover:shadow-pink-500/50'
  },
  { 
    name: 'Twitter/X', 
    icon: Twitter, 
    gradient: 'from-gray-700 via-gray-800 to-black',
    bgGradient: 'from-gray-700/20 to-black/20',
    borderColor: 'border-gray-600',
    textColor: 'text-gray-300',
    hoverGlow: 'hover:shadow-gray-500/50'
  },
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    gradient: 'from-blue-600 via-blue-700 to-blue-800',
    bgGradient: 'from-blue-600/20 to-blue-800/20',
    borderColor: 'border-blue-600',
    textColor: 'text-blue-400',
    hoverGlow: 'hover:shadow-blue-600/50'
  },
  { 
    name: 'TikTok', 
    icon: Music, 
    gradient: 'from-red-500 via-pink-500 to-purple-600',
    bgGradient: 'from-red-500/20 to-purple-600/20',
    borderColor: 'border-red-500',
    textColor: 'text-red-400',
    hoverGlow: 'hover:shadow-red-500/50'
  },
];

const qualityOptions = [
  { quality: '4K', size: '~500MB', recommended: true },
  { quality: '1080p', size: '~200MB', recommended: false },
  { quality: '720p', size: '~100MB', recommended: false },
  { quality: '480p', size: '~50MB', recommended: false },
];

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Download videos in seconds with our optimized servers',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'No malware, no ads, completely safe downloads',
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    icon: Clock,
    title: 'No Registration',
    description: 'Start downloading immediately, no sign-up required',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Download,
    title: 'Multiple Formats',
    description: 'Support for MP4, MP3, and various quality options',
    gradient: 'from-purple-400 to-pink-500'
  }
];

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Content Creator',
    avatar: 'AC',
    rating: 5,
    text: 'Downloadify is a game-changer! I can quickly save my content from different platforms. The quality options are perfect for my workflow.',
    gradient: 'from-pink-500 to-purple-600'
  },
  {
    name: 'Maya Rodriguez',
    role: 'Social Media Manager',
    avatar: 'MR',
    rating: 5,
    text: 'Super fast and reliable. I use it daily to download client content for repurposing. The interface is so clean and intuitive!',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Jordan Kim',
    role: 'Digital Marketer',
    avatar: 'JK',
    rating: 5,
    text: 'Finally, a downloader that actually works! No sketchy ads or malware. Just paste the link and get your video instantly.',
    gradient: 'from-green-500 to-teal-600'
  }
];

const faqs = [
  {
    question: 'Is Downloadify free to use?',
    answer: 'Yes! Downloadify is completely free with no hidden charges or subscription fees.'
  },
  {
    question: 'What video quality can I download?',
    answer: 'We support multiple qualities from 480p to 4K, depending on the original video quality.'
  },
  {
    question: 'Do I need to create an account?',
    answer: 'No registration required! Just paste your link and start downloading immediately.'
  },
  {
    question: 'Is it safe to use?',
    answer: 'Absolutely! We prioritize your security with no malware, ads, or data collection.'
  }
];

export default function Home() {
  const [url, setUrl] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState('1080p');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handlePlatformSelect = (platformName: string) => {
    setSelectedPlatform(platformName);
    setShowResults(false);
  };

  const handleAnalyze = async () => {
    if (!url.trim() || !selectedPlatform) return;
    
    setIsAnalyzing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const handleDownload = () => {
    // Simulate download
    console.log(`Downloading ${selectedQuality} quality video from ${selectedPlatform}...`);
  };

  const selectedPlatformData = platforms.find(p => p.name === selectedPlatform);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-green-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(34,197,94,0.1),transparent_50%)]" />
        
        {/* Animated floating orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/25"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(236,72,153,0.3)",
                  "0 0 40px rgba(168,85,247,0.4)",
                  "0 0 20px rgba(236,72,153,0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Download className="w-7 h-7 text-white" />
            </motion.div>
            <span className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Downloadify
            </span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['How it works', 'Features', 'FAQ', 'Testimonials'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-300 hover:text-pink-400 transition-all duration-300 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Download Videos from
            <motion.span 
              className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block mt-2"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Anywhere
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Fast, secure, and free video downloader supporting all major social platforms. 
            Choose your platform, paste the link, and download in your preferred quality!
          </motion.p>

          {/* Platform Selection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Choose Your Platform
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePlatformSelect(platform.name)}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                    selectedPlatform === platform.name
                      ? `${platform.borderColor} bg-gradient-to-br ${platform.bgGradient} shadow-2xl ${platform.hoverGlow} shadow-lg`
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${platform.gradient} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                    <platform.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className={`font-semibold text-sm ${selectedPlatform === platform.name ? platform.textColor : 'text-gray-300'}`}>
                    {platform.name}
                  </h4>
                  {selectedPlatform === platform.name && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center"
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* URL Input */}
          <AnimatePresence>
            {selectedPlatform && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <div className={`flex flex-col sm:flex-row gap-4 p-3 bg-gradient-to-r ${selectedPlatformData?.bgGradient} backdrop-blur-sm rounded-2xl border-2 ${selectedPlatformData?.borderColor} shadow-xl`}>
                  <Input
                    type="url"
                    placeholder={`Paste your ${selectedPlatform} video URL here...`}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-1 bg-gray-900/80 border-none text-white placeholder-gray-400 text-lg focus:ring-0 rounded-xl"
                  />
                  <Button
                    onClick={handleAnalyze}
                    disabled={!url.trim() || isAnalyzing}
                    className={`bg-gradient-to-r ${selectedPlatformData?.gradient} hover:shadow-lg ${selectedPlatformData?.hoverGlow} text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50`}
                  >
                    {isAnalyzing ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Zap className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      'Analyze Video'
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Section */}
          <AnimatePresence>
            {showResults && selectedPlatformData && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="mt-12 max-w-2xl mx-auto"
              >
                <Card className={`bg-gradient-to-br ${selectedPlatformData.bgGradient} backdrop-blur-sm border-2 ${selectedPlatformData.borderColor} shadow-2xl`}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${selectedPlatformData.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Play className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-semibold text-white">Video Ready!</h3>
                        <p className={`${selectedPlatformData.textColor}`}>Choose your preferred quality</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      {qualityOptions.map((option) => (
                        <motion.div
                          key={option.quality}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedQuality(option.quality)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            selectedQuality === option.quality
                              ? `${selectedPlatformData.borderColor} bg-gradient-to-br ${selectedPlatformData.bgGradient}`
                              : 'border-gray-600 hover:border-gray-500 bg-gray-800/50'
                          }`}
                        >
                          <div className="text-center">
                            <div className="font-semibold text-white">{option.quality}</div>
                            <div className="text-sm text-gray-400">{option.size}</div>
                            {option.recommended && (
                              <Badge className={`mt-2 bg-gradient-to-r ${selectedPlatformData.gradient} text-white`}>
                                Recommended
                              </Badge>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <Button
                      onClick={handleDownload}
                      className={`w-full bg-gradient-to-r ${selectedPlatformData.gradient} hover:shadow-lg ${selectedPlatformData.hoverGlow} text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300`}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Get Video ({selectedQuality})
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 px-6 py-20 bg-gradient-to-r from-gray-800/30 via-purple-900/10 to-pink-900/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Download any video in just three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Choose Platform', description: 'Select your preferred social media platform from our supported list', gradient: 'from-pink-500 to-purple-600' },
              { step: '02', title: 'Paste & Analyze', description: 'Copy your video link and click analyze to fetch all available options', gradient: 'from-purple-500 to-blue-600' },
              { step: '03', title: 'Download', description: 'Choose your preferred quality and download instantly to your device', gradient: 'from-blue-500 to-cyan-600' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center group"
              >
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                  whileHover={{
                    boxShadow: "0 0 30px rgba(236,72,153,0.4)"
                  }}
                >
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-pink-400 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-300 text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need for seamless video downloading
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 text-center group hover:border-pink-500/50 transition-all duration-300"
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                  whileHover={{
                    boxShadow: "0 0 25px rgba(236,72,153,0.3)"
                  }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-pink-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 px-6 py-20 bg-gradient-to-r from-gray-800/30 via-blue-900/10 to-purple-900/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-pink-500/50 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-pink-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-300">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Users <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied users who trust Downloadify
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg`}
                    whileHover={{
                      boxShadow: "0 0 20px rgba(236,72,153,0.4)"
                    }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 bg-gradient-to-r from-gray-900 via-purple-900/20 to-pink-900/20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(236,72,153,0.3)",
                  "0 0 40px rgba(168,85,247,0.4)",
                  "0 0 20px rgba(236,72,153,0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Download className="w-7 h-7 text-white" />
            </motion.div>
            <span className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Downloadify
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            Fast, secure, and free video downloads from all major platforms
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Downloadify. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}