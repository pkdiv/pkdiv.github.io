"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSidebar } from "@/lib/sidebar-context";

export default function NotFound() {
  const [pathname, setPathname] = useState("/unknown");
  const { setHideSidebar } = useSidebar();
  
  useEffect(() => {
    setPathname(window.location.pathname);
    setHideSidebar(true);
    return () => setHideSidebar(false);
  }, [setHideSidebar]);
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl mx-auto"
      >
        {/* Terminal Window */}
        <motion.div
          className="rounded-xl overflow-hidden border border-border shadow-2xl"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {/* Title Bar */}
          <div className="bg-muted/80 backdrop-blur-sm px-4 py-3 flex items-center justify-center border-b border-border">
            <span className="text-sm text-muted-foreground font-mono">404 — page not found</span>
          </div>

          {/* Terminal Content */}
          <div className="bg-background/90 backdrop-blur-sm p-6 md:p-8 font-mono text-sm md:text-base">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-muted-foreground mb-4">
                <span className="text-accent">~</span> $ <span className="text-foreground">curl -I {pathname}</span>
              </p>
              
              <div className="mb-4 pl-4 border-l-2 border-accent/30">
                <p className="text-red-400 mb-1">HTTP/1.1 <span className="font-bold">404</span> Not Found</p>
                <p className="text-muted-foreground">Content-Type: text/html</p>
                <p className="text-muted-foreground">X-Error: page-not-found</p>
              </div>

              <p className="text-muted-foreground mb-4">
                <span className="text-accent">~</span> $ <span className="text-foreground">find / -name &quot;page&quot; 2&gt;/dev/null</span>
              </p>
              <p className="text-red-400 mb-4 pl-4">find: &apos;/page/you/wanted&apos;: No such file or directory</p>

              <p className="text-muted-foreground mb-2">
                <span className="text-accent">~</span> $ <span className="text-foreground">echo $?</span>
              </p>
              <p className="text-yellow-400 mb-4 pl-4">1</p>

              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <p className="text-foreground mb-2">
                  <span className="text-accent">#</span> Oops! The page you&apos;re looking for doesn&apos;t exist.
                </p>
                <p className="text-muted-foreground">
                  <span className="text-accent">#</span> It might have been moved, deleted, or never existed.
                </p>
              </div>

              <p className="text-muted-foreground">
                <span className="text-accent">~</span> $ <span className="animate-pulse">_</span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border font-medium hover:bg-muted transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            cd -
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
