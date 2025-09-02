"use client";

import { useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Trophy, Target, Zap } from "lucide-react";
import Link from "next/link";

export function ProblemSolvingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const platforms = [
    {
      name: "LeetCode",
      username: "aryan31457",
      rating: "1,500+",
      problemsSolved: "800+",
      badge: "Expert",
      badgeColor: "bg-yellow-500",
      link: "https://leetcode.com/aryan31457/",
      description: "Algorithm and Data Structure problems",
      icon: "🧮"
    },
    {
      name: "CodeChef",
      username: "aryan31457",
      rating: "3-Star",
      problemsSolved: "200+",
      badge: "3★",
      badgeColor: "bg-purple-500",
      link: "https://www.codechef.com/users/aryan31457",
      description: "Competitive Programming contests",
      icon: "🏆"
    },
    {
      name: "Codeforces",
      username: "Aryan_31457",
      rating: "1,200+",
      problemsSolved: "200+",
      badge: "Pupil",
      badgeColor: "bg-blue-500",
      link: "https://codeforces.com/profile/Aryan_31457",
      description: "Competitive Programming platform",
      icon: "⚡"
    },
    {
      name: "Codolio",
      username: "aryan31457",
      rating: "95%",
      problemsSolved: "1500+",
      badge: "Pro",
      badgeColor: "bg-green-500",
      link: "https://codolio.com/profile/Aryan31457",
      description: "Coding practice ",
      icon: "📚"
    }
  ];

  const stats = [
    { label: "Total Problems Solved", value: "1,500+", icon: <Target className="h-5 w-5" /> },
    { label: "Contests Participated", value: "10+", icon: <Trophy className="h-5 w-5" /> },
    { label: "Total active days", value: "400+ days", icon: <Zap className="h-5 w-5" /> }
  ];

  return (
    <section id="problem-solving" className="py-20 bg-muted/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Problem Solving & Competitive Programming
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about solving algorithmic challenges and participating in competitive programming contests. 
            Here are my profiles across various coding platforms.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="text-center p-6">
                <CardContent className="flex flex-col items-center space-y-3">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Coding Platforms */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{platform.icon}</span>
                      <h3 className="font-semibold">{platform.name}</h3>
                    </div>
                    <Badge className={`${platform.badgeColor} text-white`}>
                      {platform.badge}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Username:</span>
                      <span className="font-medium">{platform.username}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Rating:</span>
                      <span className="font-medium text-primary">{platform.rating}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Solved:</span>
                      <span className="font-medium">{platform.problemsSolved}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-4">
                    {platform.description}
                  </p>
                  
                  <Link 
                    href={platform.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    View Profile
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">My Problem-Solving Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I started my competitive programming journey during my college years and have been consistently 
                solving problems across multiple platforms. My approach focuses on understanding algorithms, 
                data structures, and developing efficient solutions. I regularly participate in contests and 
                enjoy tackling challenging problems that push my analytical thinking skills.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">Algorithms</Badge>
                <Badge variant="secondary">Data Structures</Badge>
                <Badge variant="secondary">Dynamic Programming</Badge>
                <Badge variant="secondary">Graph Theory</Badge>
                <Badge variant="secondary">Number Theory</Badge>
                <Badge variant="secondary">Greedy Algorithms</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
