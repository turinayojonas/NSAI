import { ArrowRight, Activity, TrendingUp, Users, Shield, Brain, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Activity,
      title: "Smart Tracking",
      description: "Simple 3-question food diary with AI-powered meal photo analysis"
    },
    {
      icon: TrendingUp,
      title: "Growth Monitoring",
      description: "Track child development with height, weight, and MUAC measurements"
    },
    {
      icon: Brain,
      title: "AI Risk Prediction",
      description: "Machine learning identifies micronutrient deficiency before symptoms appear"
    },
    {
      icon: Users,
      title: "Family-First",
      description: "Personalized meal recommendations based on local food availability"
    },
    {
      icon: Shield,
      title: "Real-Time Alerts",
      description: "Instant notifications for iron, vitamin A, and zinc deficiency risks"
    },
    {
      icon: Globe,
      title: "Data-Driven Insights",
      description: "Regional heatmaps and analytics for NGOs and government planning"
    }
  ];

  const stats = [
    { value: "100+", label: "Districts Covered" },
    { value: "50K+", label: "Children Tracked" },
    { value: "95%", label: "Accuracy Rate" },
    { value: "24/7", label: "Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center shadow-soft">
              <Activity className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              NutriSense AI
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/mobile-demo" className="text-foreground hover:text-primary transition-colors">
              Mobile App
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Fighting Hidden Hunger with AI
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
              Predict & Prevent
              <br />
              Micronutrient Deficiency
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Empowering families and governments with AI-driven nutrition insights to combat hidden hunger in developing countries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-hero hover:shadow-float transition-all">
                <Link to="/mobile-demo">
                  Try Mobile Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/5">
                <Link to="/dashboard">
                  View Dashboard
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-card shadow-card hover:shadow-float transition-shadow">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Complete Nutrition Solution</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From family meal tracking to government-level analytics, NutriSense AI provides comprehensive tools to identify and prevent hidden hunger
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-float transition-all bg-gradient-card group cursor-pointer">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-hero group-hover:scale-110 transition-all">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 text-center bg-gradient-hero shadow-float">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join NGOs, governments, and healthcare providers already using NutriSense AI to prevent malnutrition
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-card hover:bg-card/90">
                <Link to="/mobile-demo">
                  Explore Mobile App
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 NutriSense AI • Fighting Hidden Hunger with Technology</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
