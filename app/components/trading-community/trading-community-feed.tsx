"use client"

import {
    Award,
    BarChart3,
    Bell,
    Bookmark,
    CheckCircle,
    Filter,
    Flag,
    Heart,
    ImageIcon,
    MessageCircle,
    MoreHorizontal,
    Plus,
    Search,
    Send,
    Share2,
    TrendingUp,
    UserPlus,
    Users,
} from "lucide-react"
import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { DropdownMenu, DropdownMenuContent } from "../ui/dropdown-menu"
// import { Input } from "@../ui/input"
import { Textarea } from "../ui/textarea"
// import { Badge } from "@../ui/badge"
// import { Avatar, AvatarFallback, AvatarImage } from "@../ui/avatar"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@../ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
import {
    // 
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
// import { Separator } from "@/components/ui/separator"

// Mock data for community posts
const communityPosts = [
    {
        id: 1,
        user: {
            name: "Alex Chen",
            username: "@alextrader",
            avatar: "/placeholder.svg?height=40&width=40",
            verified: true,
            rank: "Diamond Trader",
            followers: 2847,
            following: 156,
            totalReturn: 34.7,
        },
        content:
            "Just closed my NVDA position with a 15% gain! 🚀 The AI sector is absolutely on fire right now. My technical analysis from last week played out perfectly - the breakout above $850 was the signal I was waiting for.",
        timestamp: "2 hours ago",
        likes: 127,
        comments: 23,
        shares: 8,
        isLiked: false,
        isBookmarked: true,
        tags: ["NVDA", "AI", "TechnicalAnalysis"],
        tradingData: {
            symbol: "NVDA",
            action: "SELL",
            quantity: 50,
            entryPrice: 740.5,
            exitPrice: 851.25,
            profit: 5537.5,
            profitPercent: 15.0,
        },
    },
    {
        id: 2,
        user: {
            name: "Sarah Martinez",
            username: "@sarahstocks",
            avatar: "/placeholder.svg?height=40&width=40",
            verified: false,
            rank: "Gold Trader",
            followers: 892,
            following: 234,
            totalReturn: 18.3,
        },
        content:
            "Market volatility is creating some amazing opportunities right now. I'm seeing strong support levels in the tech sector. What's everyone's take on the current market sentiment? 📊",
        timestamp: "4 hours ago",
        likes: 89,
        comments: 34,
        shares: 12,
        isLiked: true,
        isBookmarked: false,
        tags: ["MarketAnalysis", "Tech", "Volatility"],
    },
    {
        id: 3,
        user: {
            name: "Mike Johnson",
            username: "@mikethebull",
            avatar: "/placeholder.svg?height=40&width=40",
            verified: true,
            rank: "Platinum Trader",
            followers: 5234,
            following: 89,
            totalReturn: 67.2,
        },
        content:
            "🔥 TRADE ALERT: Just entered a position in renewable energy stocks. The sector is undervalued and I'm expecting a major catalyst next month. Risk management is key - only risking 2% of my portfolio on this play.",
        timestamp: "6 hours ago",
        likes: 203,
        comments: 45,
        shares: 28,
        isLiked: false,
        isBookmarked: true,
        tags: ["RenewableEnergy", "TradeAlert", "RiskManagement"],
        tradingData: {
            symbol: "ICLN",
            action: "BUY",
            quantity: 200,
            entryPrice: 23.45,
            targetPrice: 28.5,
            stopLoss: 21.8,
            riskReward: 3.1,
        },
    },
]

const topTraders = [
    {
        name: "Emma Wilson",
        username: "@emmawins",
        avatar: "/placeholder.svg?height=32&width=32",
        rank: 1,
        return: 89.4,
        badge: "🏆",
    },
    {
        name: "David Kim",
        username: "@davidk",
        avatar: "/placeholder.svg?height=32&width=32",
        rank: 2,
        return: 76.8,
        badge: "🥈",
    },
    {
        name: "Lisa Rodriguez",
        username: "@lisatrader",
        avatar: "/placeholder.svg?height=32&width=32",
        rank: 3,
        return: 68.3,
        badge: "🥉",
    },
]

const trendingTopics = [
    { tag: "NVDA", posts: 234 },
    { tag: "AI", posts: 189 },
    { tag: "TechnicalAnalysis", posts: 156 },
    { tag: "Earnings", posts: 134 },
    { tag: "Options", posts: 98 },
]

function PostCard({ post }: { post: (typeof communityPosts)[0] }) {
    const [isLiked, setIsLiked] = useState(post.isLiked)
    const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked)
    const [showComments, setShowComments] = useState(false)
    const [likes, setLikes] = useState(post.likes)

    const handleLike = () => {
        setIsLiked(!isLiked)
        setLikes(isLiked ? likes - 1 : likes + 1)
    }

    const getRankColor = (rank: string) => {
        switch (rank) {
            case "Diamond Trader":
                return "text-blue-600"
            case "Platinum Trader":
                return "text-purple-600"
            case "Gold Trader":
                return "text-yellow-600"
            default:
                return "text-gray-600"
        }
    }

    return (
        <Card className="mb-4">
            <CardContent className="p-6">
                {/* User Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={post.user.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold">{post.user.name}</span>
                                {post.user.verified && <CheckCircle className="h-4 w-4 text-blue-500" />}
                                <span className="text-sm text-muted-foreground">{post.user.username}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span className={getRankColor(post.user.rank)}>{post.user.rank}</span>
                                <span>•</span>
                                <span>{post.timestamp}</span>
                                <span>•</span>
                                <span className="text-green-600">+{post.user.totalReturn}% total return</span>
                            </div>
                        </div>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <UserPlus className="mr-2 h-4 w-4" />
                                Follow {post.user.name}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Bookmark className="mr-2 h-4 w-4" />
                                Save Post
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                                <Flag className="mr-2 h-4 w-4" />
                                Report Post
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Post Content */}
                <div className="mb-4">
                    <p className="text-sm leading-relaxed mb-3">{post.content}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                                #{tag}
                            </Badge>
                        ))}
                    </div>

                    {/* Trading Data Card */}
                    {post.tradingData && (
                        <Card className="bg-muted/50 border-l-4 border-l-green-500">
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <BarChart3 className="h-4 w-4" />
                                        <span className="font-semibold">{post.tradingData.symbol}</span>
                                        <Badge variant={post.tradingData.action === "BUY" ? "default" : "destructive"}>
                                            {post.tradingData.action}
                                        </Badge>
                                    </div>
                                    {post.tradingData.profit && (
                                        <div className="text-right">
                                            <div className="text-green-600 font-semibold">+${post.tradingData.profit.toLocaleString()}</div>
                                            <div className="text-xs text-muted-foreground">+{post.tradingData.profitPercent}%</div>
                                        </div>
                                    )}
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-xs">
                                    <div>
                                        <span className="text-muted-foreground">Quantity: </span>
                                        <span>{post.tradingData.quantity}</span>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground">Entry: </span>
                                        <span>${post.tradingData.entryPrice}</span>
                                    </div>
                                    {post.tradingData.exitPrice && (
                                        <div>
                                            <span className="text-muted-foreground">Exit: </span>
                                            <span>${post.tradingData.exitPrice}</span>
                                        </div>
                                    )}
                                    {post.tradingData.targetPrice && (
                                        <div>
                                            <span className="text-muted-foreground">Target: </span>
                                            <span>${post.tradingData.targetPrice}</span>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex items-center gap-6">
                        <Button variant="ghost" size="sm" onClick={handleLike} className={`gap-2 ${isLiked ? "text-red-500" : ""}`}>
                            <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                            {likes}
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => setShowComments(!showComments)} className="gap-2">
                            <MessageCircle className="h-4 w-4" />
                            {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                            <Share2 className="h-4 w-4" />
                            {post.shares}
                        </Button>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        className={isBookmarked ? "text-blue-500" : ""}
                    >
                        <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
                    </Button>
                </div>

                {/* Comments Section */}
                {showComments && (
                    <div className="mt-4 pt-4 border-t space-y-3">
                        <div className="flex gap-3">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                <AvatarFallback>YU</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <Input placeholder="Write a comment..." className="mb-2" />
                                <Button size="sm">
                                    <Send className="h-3 w-3 mr-1" />
                                    Reply
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

function CreatePostDialog() {
    const [postContent, setPostContent] = useState("")
    const [selectedTags, setSelectedTags] = useState<string[]>([])

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full mb-6">
                    <Plus className="h-4 w-4 mr-2" />
                    Share Your Trade
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Share with the Community</DialogTitle>
                    <DialogDescription>
                        Share your trading insights, analysis, or ask questions to the community.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    <Textarea
                        placeholder="What's your trading insight today?"
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        className="min-h-[100px]"
                    />
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                            <ImageIcon className="h-4 w-4 mr-1" />
                            Add Image
                        </Button>
                        <Button variant="outline" size="sm">
                            <BarChart3 className="h-4 w-4 mr-1" />
                            Add Trade
                        </Button>
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-2 block">Tags</label>
                        <Input placeholder="Add tags (e.g., AAPL, TechnicalAnalysis)" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Share Post</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export function TradingCommunityFeed() {
    const [activeTab, setActiveTab] = useState("feed")

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="grid gap-6 lg:grid-cols-4">
                {/* Main Feed */}
                <div className="lg:col-span-3">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold mb-2">Trading Community</h1>
                        <p className="text-muted-foreground">Connect with traders, share insights, and learn from the community</p>
                    </div>

                    <CreatePostDialog />

                    <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="feed">Feed</TabsTrigger>
                            <TabsTrigger value="following">Following</TabsTrigger>
                            <TabsTrigger value="trending">Trending</TabsTrigger>
                            <TabsTrigger value="alerts">Alerts</TabsTrigger>
                        </TabsList>

                        <div className="flex items-center gap-4 mt-4 mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input placeholder="Search posts, users, or symbols..." className="pl-10" />
                            </div>
                            <Button variant="outline" size="icon">
                                <Filter className="h-4 w-4" />
                            </Button>
                        </div>

                        <TabsContent value="feed" className="space-y-4">
                            {communityPosts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </TabsContent>

                        <TabsContent value="following" className="space-y-4">
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                    <h3 className="font-semibold mb-2">Follow traders to see their posts</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Discover and follow successful traders to get their insights in your feed.
                                    </p>
                                    <Button>Discover Traders</Button>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="trending" className="space-y-4">
                            {communityPosts
                                .filter((post) => post.likes > 100)
                                .map((post) => (
                                    <PostCard key={post.id} post={post} />
                                ))}
                        </TabsContent>

                        <TabsContent value="alerts" className="space-y-4">
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <Bell className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                    <h3 className="font-semibold mb-2">No new alerts</h3>
                                    <p className="text-muted-foreground">
                                        You'll see notifications about your posts and interactions here.
                                    </p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Top Traders */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Award className="h-5 w-5" />
                                Top Traders
                            </CardTitle>
                            <CardDescription>This month's best performers</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {topTraders.map((trader) => (
                                <div key={trader.rank} className="flex items-center gap-3">
                                    <div className="text-lg">{trader.badge}</div>
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={trader.avatar || "/placeholder.svg"} />
                                        <AvatarFallback>{trader.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="font-semibold text-sm">{trader.name}</div>
                                        <div className="text-xs text-muted-foreground">{trader.username}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-green-600 font-semibold text-sm">+{trader.return}%</div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Trending Topics */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <TrendingUp className="h-5 w-5" />
                                Trending Topics
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {trendingTopics.map((topic) => (
                                <div key={topic.tag} className="flex items-center justify-between">
                                    <Badge variant="outline">#{topic.tag}</Badge>
                                    <span className="text-sm text-muted-foreground">{topic.posts} posts</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Community Stats */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Community Stats</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Active Traders</span>
                                <span className="font-semibold">12,847</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Posts Today</span>
                                <span className="font-semibold">1,234</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Total Trades Shared</span>
                                <span className="font-semibold">45,678</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Avg. Community Return</span>
                                <span className="font-semibold text-green-600">+23.4%</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}