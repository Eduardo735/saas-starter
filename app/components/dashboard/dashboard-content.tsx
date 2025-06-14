import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { ArrowDown, ArrowUp, BarChart3, Calendar, FileText, Home, Settings, Users } from "lucide-react"
import { DashboardCharts } from "./dashboard-charts"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import TradingFeed from "../feed/feed"
import TradingLiveSetup from "../trading-setup/trading-setup"
import TradingCommunity from "../trading-community/trading-community"
import TradingDashboard from "../trading-position-card/trading-dashboard"

interface DashboardContentProps {
  activeItem: string
}

export function DashboardContent({ activeItem }: DashboardContentProps) {
  const renderContent = () => {
    switch (activeItem) {
      case "social":
        return <TradingFeed />
      case "setups":
        return <TradingDashboard />
      case "reports":
        return <TradingCommunity />
      case "community":
        return <TradingCommunity />
      case "academy":
        return <TradingCommunity />
      default:
        return <TradingDashboard />
    }
  }

  return <main className="flex-1 overflow-y-auto p-6">{renderContent()}</main>
}

function DashboardView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to your dashboard overview.</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                  <span>+12.5% from last week</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <Home className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                  <span>+3 new this week</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                  <span>-2 completed today</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>Monthly revenue and user growth</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <DashboardCharts />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest updates from your team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-4">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={`/placeholder.svg?height=36&width=36&text=${i}`} alt={`User ${i}`} />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">User {i} completed a task</p>
                        <p className="text-xs text-muted-foreground">
                          {i} hour{i !== 1 ? "s" : ""} ago
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Content</CardTitle>
              <CardDescription>Detailed analytics will be displayed here</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center border-2 border-dashed rounded-lg">
              <p className="text-muted-foreground">Analytics content will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports Content</CardTitle>
              <CardDescription>Detailed reports will be displayed here</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center border-2 border-dashed rounded-lg">
              <p className="text-muted-foreground">Reports content will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function AnalyticsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">View detailed analytics for your projects.</p>
      </div>
      <Card className="h-[600px] flex items-center justify-center">
        <div className="text-center">
          <BarChart3 className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">Analytics Dashboard</h3>
          <p className="mt-2 text-sm text-muted-foreground">Detailed analytics content will be displayed here</p>
        </div>
      </Card>
    </div>
  )
}

function ProjectsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">Manage your active projects.</p>
      </div>
      <Card className="h-[600px] flex items-center justify-center">
        <div className="text-center">
          <Home className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">Projects Dashboard</h3>
          <p className="mt-2 text-sm text-muted-foreground">Your projects will be displayed here</p>
        </div>
      </Card>
    </div>
  )
}

function TeamView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Team</h1>
        <p className="text-muted-foreground">Manage your team members.</p>
      </div>
      <Card className="h-[600px] flex items-center justify-center">
        <div className="text-center">
          <Users className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">Team Management</h3>
          <p className="mt-2 text-sm text-muted-foreground">Team members will be displayed here</p>
        </div>
      </Card>
    </div>
  )
}

function CalendarView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        <p className="text-muted-foreground">View and manage your schedule.</p>
      </div>
      <Card className="h-[600px] flex items-center justify-center">
        <div className="text-center">
          <Calendar className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">Calendar View</h3>
          <p className="mt-2 text-sm text-muted-foreground">Your calendar will be displayed here</p>
        </div>
      </Card>
    </div>
  )
}

function DocumentsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
        <p className="text-muted-foreground">Access and manage your documents.</p>
      </div>
      <Card className="h-[600px] flex items-center justify-center">
        <div className="text-center">
          <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">Document Library</h3>
          <p className="mt-2 text-sm text-muted-foreground">Your documents will be displayed here</p>
        </div>
      </Card>
    </div>
  )
}

function SettingsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings.</p>
      </div>
      <Card className="h-[600px] flex items-center justify-center">
        <div className="text-center">
          <Settings className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">Settings Panel</h3>
          <p className="mt-2 text-sm text-muted-foreground">Account settings will be displayed here</p>
        </div>
      </Card>
    </div>
  )
}



