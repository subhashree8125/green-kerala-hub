import { useState } from "react";
import { Search, Plus, ChevronRight, Cloud, TrendingUp, Camera } from "lucide-react";
import heroImage from "@/assets/kerala-farming-hero.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const navigate = useNavigate();

  const searchCards = [
    {
      title: "Tractor & Equipments",
      description: "Tractors, drones, harvesters, tillers, sprayers",
      icon: "🚜",
      path: "/equipments",
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Community",
      description: "Connect with fellow farmers, share experiences",
      icon: "👥",
      path: "/community",
      color: "bg-accent-bright/10 text-accent-bright"
    },
    {
      title: "Government Schemes",
      description: "Kerala government schemes and subsidies",
      icon: "🏛️",
      path: "/schemes",
      color: "bg-secondary-bright/10 text-secondary-bright"
    },
    {
      title: "Weather",
      description: "Detailed forecast and crop price trends",
      icon: "🌤️",
      path: "/weather",
      color: "bg-accent/10 text-accent-foreground"
    },
    {
      title: "Soil Health",
      description: "Soil analysis and treatment suggestions",
      icon: "🌱",
      path: "/soil",
      color: "bg-primary-light/10 text-primary-light"
    }
  ];

  const userCrops = [
    { name: "Tomato", area: "2 acres", yield: "Good", image: "🍅" },
    { name: "Rice", area: "5 acres", yield: "Excellent", image: "🌾" },
    { name: "Pepper", area: "1 acre", yield: "Average", image: "🌶️" },
  ];

  const cropCareSteps = [
    { day: 1, task: "Soil Preparation", completed: true },
    { day: 2, task: "Seed Sowing", completed: true },
    { day: 3, task: "Initial Watering", completed: true },
    { day: 4, task: "Pest Inspection", completed: false, active: true },
    { day: 5, task: "Fertilizer Application", completed: false, locked: true },
    { day: 6, task: "Growth Monitoring", completed: false, locked: true },
    { day: 7, task: "Harvest Planning", completed: false, locked: true },
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Welcome Quote */}
      <div className="text-center space-y-4">
        <div className="relative rounded-2xl overflow-hidden shadow-card">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${heroImage})`,
            }}
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative p-8 text-primary-foreground">
            <h2 className="text-2xl font-bold mb-2">
              "The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways."
            </h2>
            <p className="text-primary-foreground/80">— John F. Kennedy</p>
          </div>
        </div>
        
        {/* Search Section */}
        <div className="space-y-4">
          <Button
            onClick={() => setSearchExpanded(!searchExpanded)}
            className="w-full max-w-md mx-auto flex items-center gap-3 bg-card border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground shadow-card transition-all duration-300"
            size="lg"
          >
            <Search className="h-5 w-5" />
            <span className="font-medium">Search Krishi Services</span>
          </Button>
          
          {searchExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto animate-slide-up">
              {searchCards.map((card, index) => (
                <Card
                  key={index}
                  className="cursor-pointer hover:shadow-float transition-all duration-300 hover:scale-105 bg-card-gradient border-border/50"
                  onClick={() => navigate(card.path)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl ${card.color}`}>
                      {card.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-muted-foreground text-sm">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Weather & Price Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card-gradient shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5 text-accent-bright" />
              Today's Weather
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold">28°C</p>
                <p className="text-muted-foreground">Partly Cloudy</p>
                <p className="text-sm text-muted-foreground">Humidity: 75% | Wind: 12 km/h</p>
              </div>
              <div className="text-6xl">⛅</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card-gradient shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-secondary-bright" />
              Market Prices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select crop" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tomato">Tomato</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                  <SelectItem value="pepper">Pepper</SelectItem>
                </SelectContent>
              </Select>
              <div className="grid grid-cols-4 gap-2 text-sm">
                <div className="text-center">
                  <p className="text-muted-foreground">2 days ago</p>
                  <p className="font-semibold">₹25/kg</p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">Yesterday</p>
                  <p className="font-semibold">₹28/kg</p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">Today</p>
                  <p className="font-semibold text-primary">₹30/kg</p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">Tomorrow</p>
                  <p className="font-semibold text-secondary-bright">₹32/kg</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Your Crops */}
      <Card className="bg-card-gradient shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Your Crops</CardTitle>
            <Button size="sm" className="bg-primary hover:bg-primary-dark shadow-soft">
              <Plus className="h-4 w-4 mr-2" />
              Add Crop
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {userCrops.map((crop, index) => (
              <Card key={index} className="min-w-[200px] bg-accent/5 border-accent/20">
                <CardContent className="p-4 text-center">
                  <div className="text-4xl mb-2">{crop.image}</div>
                  <h4 className="font-semibold">{crop.name}</h4>
                  <p className="text-sm text-muted-foreground">{crop.area}</p>
                  <Badge variant="secondary" className="mt-2">
                    {crop.yield}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 7-Day Crop Care */}
      <Card className="bg-card-gradient shadow-card">
        <CardHeader>
          <CardTitle>7-Day Crop Care</CardTitle>
          <p className="text-muted-foreground">Complete daily tasks to unlock the next step</p>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {cropCareSteps.map((step) => (
              <Card 
                key={step.day} 
                className={`min-w-[160px] transition-all duration-300 ${
                  step.completed 
                    ? "bg-primary/10 border-primary/20" 
                    : step.active 
                    ? "bg-secondary/10 border-secondary/20 ring-2 ring-secondary-bright" 
                    : step.locked 
                    ? "bg-muted/20 border-muted opacity-50" 
                    : "bg-card"
                }`}
              >
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-background shadow-soft">
                    {step.completed ? (
                      <span className="text-2xl">✅</span>
                    ) : step.active ? (
                      <Camera className="h-6 w-6 text-secondary-bright" />
                    ) : step.locked ? (
                      <span className="text-2xl">🔒</span>
                    ) : (
                      <span className="text-lg font-bold">{step.day}</span>
                    )}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Day {step.day}</h4>
                  <p className="text-xs text-muted-foreground">{step.task}</p>
                  {step.active && (
                    <Button size="sm" className="mt-3 bg-secondary-bright hover:bg-secondary-bright/80">
                      Upload Photo
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;