import { ArrowLeft, MapPin, TrendingUp, AlertTriangle, Users, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const riskAreas = [
    { district: "Kano North", risk: 78, children: 2340, trend: "up" },
    { district: "Sokoto Central", risk: 72, children: 1890, trend: "up" },
    { district: "Kaduna West", risk: 65, children: 2100, trend: "down" },
    { district: "Zamfara South", risk: 61, children: 1650, trend: "stable" }
  ];

  const nutrients = [
    { name: "Iron Deficiency", affected: 45, color: "destructive" },
    { name: "Vitamin A", affected: 38, color: "secondary" },
    { name: "Zinc", affected: 29, color: "accent" }
  ];

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
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">Real-time nutrition analytics</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* KPI Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-4 gap-4 mb-8"
        >
          <Card className="p-6 bg-gradient-card shadow-card">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-primary" />
              <Badge className="bg-primary/10 text-primary">Active</Badge>
            </div>
            <div className="text-3xl font-bold mb-1">52,341</div>
            <div className="text-sm text-muted-foreground">Children Tracked</div>
            <div className="flex items-center gap-1 mt-2 text-xs text-primary">
              <TrendingUp className="w-3 h-3" />
              <span>+12% this month</span>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <Badge variant="destructive">High</Badge>
            </div>
            <div className="text-3xl font-bold mb-1">8,234</div>
            <div className="text-sm text-muted-foreground">High Risk Cases</div>
            <div className="flex items-center gap-1 mt-2 text-xs text-destructive">
              <TrendingUp className="w-3 h-3" />
              <span>+5% this week</span>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-8 h-8 text-secondary" />
              <Badge className="bg-secondary/10 text-secondary">Medium</Badge>
            </div>
            <div className="text-3xl font-bold mb-1">15,892</div>
            <div className="text-sm text-muted-foreground">Medium Risk</div>
            <div className="flex items-center gap-1 mt-2 text-xs text-primary">
              <TrendingUp className="w-3 h-3 rotate-180" />
              <span>-3% this week</span>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card">
            <div className="flex items-center justify-between mb-2">
              <MapPin className="w-8 h-8 text-accent-foreground" />
              <Badge className="bg-accent/20 text-accent-foreground">Coverage</Badge>
            </div>
            <div className="text-3xl font-bold mb-1">142</div>
            <div className="text-sm text-muted-foreground">Districts Covered</div>
            <div className="flex items-center gap-1 mt-2 text-xs text-primary">
              <TrendingUp className="w-3 h-3" />
              <span>+8 new areas</span>
            </div>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Risk Heatmap */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">High-Risk Districts</h3>
                  <p className="text-sm text-muted-foreground">Areas requiring immediate intervention</p>
                </div>
                <MapPin className="w-6 h-6 text-primary" />
              </div>

              <div className="space-y-4">
                {riskAreas.map((area, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          area.risk > 70 ? 'bg-destructive/10' : 'bg-secondary/10'
                        }`}>
                          <MapPin className={`w-5 h-5 ${
                            area.risk > 70 ? 'text-destructive' : 'text-secondary'
                          }`} />
                        </div>
                        <div>
                          <div className="font-semibold">{area.district}</div>
                          <div className="text-xs text-muted-foreground">{area.children} children</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${
                          area.risk > 70 ? 'text-destructive' : 'text-secondary'
                        }`}>
                          {area.risk}%
                        </div>
                        <div className="text-xs text-muted-foreground">risk</div>
                      </div>
                    </div>
                    <Progress 
                      value={area.risk} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>

              <Button className="w-full mt-4 bg-gradient-hero">
                View Full Heatmap
              </Button>
            </Card>
          </motion.div>

          {/* Nutrient Deficiency Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">Deficiency Analysis</h3>
                  <p className="text-sm text-muted-foreground">Most common micronutrient gaps</p>
                </div>
                <Activity className="w-6 h-6 text-primary" />
              </div>

              <div className="space-y-6">
                {nutrients.map((nutrient, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{nutrient.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">{nutrient.affected}%</span>
                        <Badge variant={nutrient.color as any}>Alert</Badge>
                      </div>
                    </div>
                    <Progress value={nutrient.affected} className="h-3 mb-1" />
                    <p className="text-xs text-muted-foreground">
                      Affecting ~{Math.round(52341 * nutrient.affected / 100).toLocaleString()} children
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-accent/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium mb-1">Recommended Action</p>
                    <p className="text-xs text-muted-foreground">
                      Focus fortification programs on iron-rich foods in high-risk districts. Deploy mobile nutrition clinics to Kano North and Sokoto Central within 2 weeks.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Predictive Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">AI Risk Prediction</h3>
                  <p className="text-sm text-muted-foreground">Next 3-month forecast</p>
                </div>
                <Badge className="bg-primary/10 text-primary">ML Model: 95% Accuracy</Badge>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-destructive/5 rounded-lg border-2 border-destructive/20">
                  <AlertTriangle className="w-8 h-8 text-destructive mb-3" />
                  <div className="text-3xl font-bold mb-1 text-destructive">+2,340</div>
                  <p className="text-sm text-muted-foreground mb-3">Predicted new high-risk cases</p>
                  <p className="text-xs text-muted-foreground">If current trends continue without intervention</p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border-2 border-primary/20">
                  <TrendingUp className="w-8 h-8 text-primary mb-3" />
                  <div className="text-3xl font-bold mb-1 text-primary">68%</div>
                  <p className="text-sm text-muted-foreground mb-3">Cases preventable with action</p>
                  <p className="text-xs text-muted-foreground">Targeted meal programs in 4 districts</p>
                </div>

                <div className="p-4 bg-secondary/5 rounded-lg border-2 border-secondary/20">
                  <Activity className="w-8 h-8 text-secondary mb-3" />
                  <div className="text-3xl font-bold mb-1 text-secondary">₦4.2M</div>
                  <p className="text-sm text-muted-foreground mb-3">Estimated intervention cost</p>
                  <p className="text-xs text-muted-foreground">Fortified foods + health worker training</p>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <Button className="flex-1 bg-gradient-hero">
                  Generate Intervention Plan
                </Button>
                <Button variant="outline" className="flex-1">
                  Export Report
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
