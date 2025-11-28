import { ArrowLeft, Camera, TrendingUp, Apple, AlertTriangle, CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MobileDemo = () => {
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
            <h1 className="text-xl font-bold">Mobile App Demo</h1>
            <p className="text-sm text-muted-foreground">Family-facing nutrition tracker</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Simple. Visual. Actionable.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed for low-literacy users with clear icons, progress indicators, and local language support
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Phone Screen 1: Home Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card rounded-3xl shadow-float p-4 max-w-sm mx-auto border-8 border-foreground/10">
              <div className="bg-background rounded-2xl p-6 min-h-[600px]">
                {/* Status Bar */}
                <div className="flex justify-between items-center mb-6 text-xs text-muted-foreground">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-primary/20"></div>
                    <div className="w-4 h-4 rounded-full bg-primary/40"></div>
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                </div>

                {/* Welcome Section */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1">Hello, Amina 👋</h3>
                  <p className="text-sm text-muted-foreground">Your child's nutrition at a glance</p>
                </div>

                {/* Risk Score Card */}
                <Card className="p-4 mb-4 bg-gradient-card shadow-soft">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Hidden Hunger Risk</span>
                    <Badge className="bg-secondary text-secondary-foreground">Medium</Badge>
                  </div>
                  <div className="text-4xl font-bold mb-2 text-secondary">47%</div>
                  <Progress value={47} className="h-2 mb-2" />
                  <p className="text-xs text-muted-foreground">Lower risk by tracking meals daily</p>
                </Card>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <Card className="p-4 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                    <Camera className="w-8 h-8 text-primary mb-2" />
                    <span className="text-sm font-medium">Log Meal</span>
                  </Card>
                  <Card className="p-4 bg-accent/20 hover:bg-accent/30 transition-colors cursor-pointer">
                    <TrendingUp className="w-8 h-8 text-accent-foreground mb-2" />
                    <span className="text-sm font-medium">Growth Track</span>
                  </Card>
                </div>

                {/* Today's Alert */}
                <Card className="p-4 bg-secondary/10 border-l-4 border-secondary">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium mb-1">Iron Intake Low</p>
                      <p className="text-xs text-muted-foreground">Add spinach or beans today</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="text-center mt-4">
              <Badge variant="outline">Home Screen</Badge>
            </div>
          </motion.div>

          {/* Phone Screen 2: Risk Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card rounded-3xl shadow-float p-4 max-w-sm mx-auto border-8 border-foreground/10">
              <div className="bg-background rounded-2xl p-6 min-h-[600px]">
                {/* Status Bar */}
                <div className="flex justify-between items-center mb-6 text-xs text-muted-foreground">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-primary/20"></div>
                    <div className="w-4 h-4 rounded-full bg-primary/40"></div>
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1">Nutrition Score</h3>
                  <p className="text-sm text-muted-foreground">This week's analysis</p>
                </div>

                {/* Nutrients Status */}
                <div className="space-y-4 mb-6">
                  <Card className="p-4 bg-gradient-card">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                          <AlertTriangle className="w-4 h-4 text-destructive" />
                        </div>
                        <span className="font-medium">Iron</span>
                      </div>
                      <Badge variant="destructive">Low</Badge>
                    </div>
                    <Progress value={35} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">35% of daily need • Add dark leafy greens</p>
                  </Card>

                  <Card className="p-4 bg-gradient-card">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                          <AlertTriangle className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="font-medium">Vitamin A</span>
                      </div>
                      <Badge className="bg-secondary text-secondary-foreground">Medium</Badge>
                    </div>
                    <Progress value={58} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">58% of daily need • Include carrots or pumpkin</p>
                  </Card>

                  <Card className="p-4 bg-gradient-card">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium">Zinc</span>
                      </div>
                      <Badge className="bg-primary text-primary-foreground">Good</Badge>
                    </div>
                    <Progress value={82} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">82% of daily need • Keep it up!</p>
                  </Card>
                </div>

                {/* Recommended Meal */}
                <Card className="p-4 bg-accent/20">
                  <div className="flex items-start gap-3">
                    <Apple className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium mb-1">Today's Meal Idea</p>
                      <p className="text-xs text-muted-foreground">Rice with spinach & beans (₦200)</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="text-center mt-4">
              <Badge variant="outline">Nutrition Details</Badge>
            </div>
          </motion.div>

          {/* Phone Screen 3: Growth Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-card rounded-3xl shadow-float p-4 max-w-sm mx-auto border-8 border-foreground/10">
              <div className="bg-background rounded-2xl p-6 min-h-[600px]">
                {/* Status Bar */}
                <div className="flex justify-between items-center mb-6 text-xs text-muted-foreground">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-primary/20"></div>
                    <div className="w-4 h-4 rounded-full bg-primary/40"></div>
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1">Growth Tracker</h3>
                  <p className="text-sm text-muted-foreground">Fatima • 3 years 4 months</p>
                </div>

                {/* Current Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <Card className="p-3 text-center bg-gradient-card">
                    <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-lg font-bold">92cm</div>
                    <div className="text-xs text-muted-foreground">Height</div>
                  </Card>
                  <Card className="p-3 text-center bg-gradient-card">
                    <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-lg font-bold">14kg</div>
                    <div className="text-xs text-muted-foreground">Weight</div>
                  </Card>
                  <Card className="p-3 text-center bg-gradient-card">
                    <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-lg font-bold">15cm</div>
                    <div className="text-xs text-muted-foreground">MUAC</div>
                  </Card>
                </div>

                {/* Growth Chart Placeholder */}
                <Card className="p-4 mb-4 bg-muted/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Weight Progress</span>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="h-32 flex items-end justify-around gap-2">
                    <div className="w-full bg-primary/20 rounded-t" style={{ height: '40%' }}></div>
                    <div className="w-full bg-primary/30 rounded-t" style={{ height: '55%' }}></div>
                    <div className="w-full bg-primary/40 rounded-t" style={{ height: '60%' }}></div>
                    <div className="w-full bg-primary/50 rounded-t" style={{ height: '70%' }}></div>
                    <div className="w-full bg-primary rounded-t" style={{ height: '78%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                  </div>
                </Card>

                {/* Status Badge */}
                <Card className="p-4 bg-primary/5 border-l-4 border-primary">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium mb-1">Healthy Growth Rate</p>
                      <p className="text-xs text-muted-foreground">Keep up the good nutrition!</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="text-center mt-4">
              <Badge variant="outline">Growth Tracking</Badge>
            </div>
          </motion.div>

          {/* Phone Screen 4: Food Diary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-card rounded-3xl shadow-float p-4 max-w-sm mx-auto border-8 border-foreground/10">
              <div className="bg-background rounded-2xl p-6 min-h-[600px]">
                {/* Status Bar */}
                <div className="flex justify-between items-center mb-6 text-xs text-muted-foreground">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-primary/20"></div>
                    <div className="w-4 h-4 rounded-full bg-primary/40"></div>
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1">Food Diary</h3>
                  <p className="text-sm text-muted-foreground">Log today's meals</p>
                </div>

                {/* Quick Questions */}
                <div className="space-y-4 mb-6">
                  <Card className="p-4 bg-gradient-card">
                    <p className="text-sm font-medium mb-3">1. What did your child eat for breakfast?</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="justify-start h-auto py-3">
                        <span className="text-lg mr-2">🥖</span>
                        <span className="text-sm">Bread</span>
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-3">
                        <span className="text-lg mr-2">🍚</span>
                        <span className="text-sm">Rice</span>
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-3">
                        <span className="text-lg mr-2">🥣</span>
                        <span className="text-sm">Porridge</span>
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-3 bg-primary/10 border-primary">
                        <span className="text-lg mr-2">🥚</span>
                        <span className="text-sm">Eggs</span>
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-4 bg-gradient-card">
                    <p className="text-sm font-medium mb-3">2. Any vegetables today?</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="justify-start h-auto py-3 bg-primary/10 border-primary">
                        <span className="text-lg mr-2">✓</span>
                        <span className="text-sm">Yes</span>
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-3">
                        <span className="text-lg mr-2">✗</span>
                        <span className="text-sm">No</span>
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-4 bg-gradient-card">
                    <p className="text-sm font-medium mb-3">3. Upload meal photo (optional)</p>
                    <Button variant="outline" className="w-full justify-center h-24 border-dashed">
                      <div className="text-center">
                        <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <span className="text-sm text-muted-foreground">Take Photo</span>
                      </div>
                    </Button>
                  </Card>
                </div>

                {/* Submit Button */}
                <Button className="w-full bg-gradient-hero">
                  Save Meal Log
                </Button>
              </div>
            </div>
            <div className="text-center mt-4">
              <Badge variant="outline">Food Diary</Badge>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MobileDemo;
