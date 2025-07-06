import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';

function App() {
  return (
    <>
      <Helmet>
        <title>Coming Soon</title>
        <meta name="description" content="Something amazing is coming soon. Stay tuned for updates!" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden font-serif">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black text-custom-text mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            COMING SOON
          </motion.h1>
          
          <motion.div
            className="w-32 h-1 bg-custom-text mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          
          <motion.p
            className="text-xl md:text-2xl text-custom-text mt-8 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Something amazing is on the way
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-12"
          >
            <a href="https://preorder.lawvriksh.com/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="relative overflow-hidden border-2 border-transparent font-serif tracking-wider text-lg text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-[length:200%_200%] golden-gradient-slow hover:text-white hover:from-yellow-600 hover:via-yellow-700 hover:to-yellow-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Participate in Beta Testing
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default App;