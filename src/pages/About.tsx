import { ArrowLeft, Target, Lightbulb, TrendingUp, Database, Brain, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button asChild variant="ghost" size="icon">
            <Link to="/">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-xl font-bold">About NutriSense AI</h1>
            <p className="text-sm text-muted-foreground">Our mission and approach</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Problem Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <Target className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">The Hidden Hunger Crisis</h2>
            <p className="text-lg text-muted-foreground">
              Over 2 billion people suffer from micronutrient deficiency—a silent crisis affecting children's growth and cognitive development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-gradient-card shadow-card">
              <div className="text-4xl font-bold text-destructive mb-2">45%</div>
              <p className="text-sm text-muted-foreground">Children under 5 affected by stunting in developing regions</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-card shadow-card">
              <div className="text-4xl font-bold text-secondary mb-2">60%</div>
              <p className="text-sm text-muted-foreground">Iron deficiency anemia prevalence in low-income families</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-card shadow-card">
              <div className="text-4xl font-bold text-accent-foreground mb-2">$29B</div>
              <p className="text-sm text-muted-foreground">Annual economic loss from malnutrition</p>
            </Card>
          </div>
        </motion.section>

        {/* Solution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Our Solution</h2>
            <p className="text-lg text-muted-foreground">
              AI-powered early detection and prevention system designed for resource-constrained settings
            </p>
          </div>

          <Card className="p-8 bg-gradient-hero text-primary-foreground shadow-float">
            <h3 className="text-2xl font-bold mb-4">How NutriSense AI Works</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Simple Data Collection</h4>
                  <p className="text-sm text-primary-foreground/80">Families log meals via 3 quick questions or photo uploads—no complex forms</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">AI Risk Analysis</h4>
                  <p className="text-sm text-primary-foreground/80">Machine learning models predict deficiency risk using dietary patterns, growth data, and regional food availability</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Personalized Recommendations</h4>
                  <p className="text-sm text-primary-foreground/80">Low-cost meal suggestions based on local, affordable foods (e.g., "Add spinach to rice - ₦50")</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real-Time Alerts</h4>
                  <p className="text-sm text-primary-foreground/80">Families get notifications when nutrients are low; governments see heatmaps of high-risk areas</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Technology Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <Brain className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">AI & Data Pipeline</h2>
            <p className="text-lg text-muted-foreground">
              Combining multiple data sources for accurate predictions
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex items-start gap-4">
                <Database className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Data Sources</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• World Bank: Food price indices and household income data</li>
                    <li>• WorldPop: Population density and demographic patterns</li>
                    <li>• FAO: Regional crop yields and food availability</li>
                    <li>• User-generated: Meal logs, growth measurements, food photos</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex items-start gap-4">
                <Brain className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">ML Models</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Random Forest Classifier: Risk prediction (95% accuracy)</li>
                    <li>• Computer Vision: Meal photo nutrient estimation</li>
                    <li>• Time Series Forecasting: 3-month deficiency projections</li>
                    <li>• Explainable AI: Feature importance charts for transparency</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-accent-foreground flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Automated Processing</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Real-time data cleaning and validation</li>
                    <li>• Daily risk score updates for all tracked children</li>
                    <li>• Weekly regional analytics aggregation</li>
                    <li>• Automatic alert generation for high-risk cases</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* Impact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Real-World Impact</h2>
            <p className="text-lg text-muted-foreground">
              Designed for scale and sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-gradient-card shadow-card">
              <h3 className="text-lg font-bold mb-3">For Families</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Free mobile app with offline mode</li>
                <li>✓ Simple interface for low-literacy users</li>
                <li>✓ Practical, affordable meal suggestions</li>
                <li>✓ Early warning before health problems appear</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card">
              <h3 className="text-lg font-bold mb-3">For Governments & NGOs</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Resource allocation optimization</li>
                <li>✓ Evidence-based intervention planning</li>
                <li>✓ Real-time monitoring dashboards</li>
                <li>✓ Cost-effective at scale</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 text-center bg-accent/20">
            <h3 className="text-2xl font-bold mb-2">Join the Movement</h3>
            <p className="text-muted-foreground mb-6">
              Together, we can eliminate hidden hunger and give every child the nutrition they need to thrive
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-hero">
                <Link to="/mobile-demo">
                  Try the App
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/dashboard">
                  View Dashboard
                </Link>
              </Button>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
