'use client';
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState(null);
  const [debugMode, setDebugMode] = useState(false);
  const [backgroundText, setBackgroundText] = useState("");

  useEffect(() => {
    const words = [
      "Politics", "Technology", "Science", "Sports", "Health", "World", "Finance"
    ];
    let i = 0;
    const interval = setInterval(() => {
      setBackgroundText(words[i % words.length]);
      i++;
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const fetchNews = async (search) => {
    const results = `Newsletter: Top stories about "${search}"\n\n1. Example headline about ${search}\n2. Another interesting thing about ${search}\n3. More developments around ${search}`;
    setNews(results);
  };

  const handleSearch = () => {
    fetchNews(query);
  };

  const handleDebug = () => {
    setDebugMode(true);
    fetchNews("are dogs or cats better");
  };

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      <motion.div
        className="absolute w-full h-full text-9xl font-bold text-white opacity-5 blur-xl flex items-center justify-center select-none"
        animate={{ opacity: [0.2, 0.05, 0.2] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {backgroundText}
      </motion.div>

      <Card className="z-10 w-full max-w-md bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl">
        <CardContent className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-center">Choose Your News</h1>
          <Input
            className="text-black"
            placeholder="Type your interest..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-600">Generate</Button>
          {news && (
            <div className="bg-white text-black p-4 rounded-xl mt-4 whitespace-pre-wrap">
              {news}
            </div>
          )}
        </CardContent>
      </Card>

      <Button onClick={handleDebug} className="absolute top-4 right-4 bg-red-500 hover:bg-red-600">Debug</Button>
    </div>
  );
}