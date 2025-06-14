import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Button } from "@/app/components/ui/button"
// import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import {
    ArrowDown,
    ArrowUp,
    BarChart3,
    BookmarkPlus,
    MessageSquare,
    MoreHorizontal,
    Repeat2,
    Share2,
    ThumbsUp,
} from "lucide-react"

export default function TradingFeed() {
    return (
        <div className="flex justify-center">
            <div className="container max-w-3xl py-6">
                <header className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">TradeFeed</h1>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" disabled>
                            New Post
                        </Button>
                        {/* <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar> */}
                    </div>
                </header>

                <div className="mb-6">
                    <Tabs defaultValue="following" className="w-full">
                        <TabsList className="w-full">
                            <TabsTrigger value="following" className="flex-1">
                                Following
                            </TabsTrigger>
                            <TabsTrigger value="trending" className="flex-1">
                                Trending
                            </TabsTrigger>
                            <TabsTrigger value="stocks" className="flex-1">
                                Stocks
                            </TabsTrigger>
                            <TabsTrigger value="crypto" className="flex-1">
                                Crypto
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="following" className="mt-4">
                            <div className="space-y-4">
                                {/* Post 1 */}
                                <TradingPost
                                    username="Sarah Chen"
                                    handle="@sarahtrader"
                                    avatar="/placeholder.svg?height=40&width=40"
                                    time="2h ago"
                                    content="Just closed my $AAPL position with a 12% gain! The earnings report exceeded expectations, and I think there's still room for growth in the coming quarter."
                                    symbol="AAPL"
                                    action="SELL"
                                    price="$198.45"
                                    change="+2.3%"
                                    isPositive={true}
                                    likes={42}
                                    comments={8}
                                    shares={3}
                                />

                                {/* Post 2 */}
                                <TradingPost
                                    username="Mark Wilson"
                                    handle="@markw"
                                    avatar="/placeholder.svg?height=40&width=40"
                                    time="4h ago"
                                    content="Opened a new position in $ETH today. With the upcoming protocol upgrade and increased institutional interest, I'm bullish for Q3. What do you all think?"
                                    symbol="ETH"
                                    action="BUY"
                                    price="$3,245.78"
                                    change="+5.7%"
                                    isPositive={true}
                                    likes={31}
                                    comments={12}
                                    shares={5}
                                />

                                {/* Post 3 */}
                                <TradingPost
                                    username="Alex Johnson"
                                    handle="@alexj"
                                    avatar="/placeholder.svg?height=40&width=40"
                                    time="6h ago"
                                    content="Shorting $TSLA after the disappointing vehicle delivery numbers. Technical indicators suggest we might see a pullback to support levels around $180."
                                    symbol="TSLA"
                                    action="SHORT"
                                    price="$217.33"
                                    change="-1.8%"
                                    isPositive={false}
                                    likes={18}
                                    comments={23}
                                    shares={2}
                                />

                                <TradingPost
                                    username="Alex Johnson"
                                    handle="@alexj"
                                    avatar="/placeholder.svg?height=40&width=40"
                                    time="6h ago"
                                    content="Shorting $TSLA after the disappointing vehicle delivery numbers. Technical indicators suggest we might see a pullback to support levels around $180."
                                    symbol="TSLA"
                                    action="SHORT"
                                    price="$217.33"
                                    change="-1.8%"
                                    isPositive={false}
                                    likes={18}
                                    comments={23}
                                    shares={2}
                                />

                                <TradingPost
                                    username="Alex Johnson"
                                    handle="@alexj"
                                    avatar="/placeholder.svg?height=40&width=40"
                                    time="6h ago"
                                    content="Shorting $TSLA after the disappointing vehicle delivery numbers. Technical indicators suggest we might see a pullback to support levels around $180."
                                    symbol="TSLA"
                                    action="SHORT"
                                    price="$217.33"
                                    change="-1.8%"
                                    isPositive={false}
                                    likes={18}
                                    comments={23}
                                    shares={2}
                                />

                                <TradingPost
                                    username="Alex Johnson"
                                    handle="@alexj"
                                    avatar="/placeholder.svg?height=40&width=40"
                                    time="6h ago"
                                    content="Shorting $TSLA after the disappointing vehicle delivery numbers. Technical indicators suggest we might see a pullback to support levels around $180."
                                    symbol="TSLA"
                                    action="SHORT"
                                    price="$217.33"
                                    change="-1.8%"
                                    isPositive={false}
                                    likes={18}
                                    comments={23}
                                    shares={2}
                                />

                                <TradingPost
                                    username="Alex Johnson"
                                    handle="@alexj"
                                    avatar="/placeholder.svg?height=40&width=40"
                                    time="6h ago"
                                    content="Shorting $TSLA after the disappointing vehicle delivery numbers. Technical indicators suggest we might see a pullback to support levels around $180."
                                    symbol="TSLA"
                                    action="SHORT"
                                    price="$217.33"
                                    change="-1.8%"
                                    isPositive={false}
                                    likes={18}
                                    comments={23}
                                    shares={2}
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="trending">
                            <div className="p-8 text-center text-muted-foreground">Trending content will appear here</div>
                        </TabsContent>
                        <TabsContent value="stocks">
                            <div className="p-8 text-center text-muted-foreground">Stocks content will appear here</div>
                        </TabsContent>
                        <TabsContent value="crypto">
                            <div className="p-8 text-center text-muted-foreground">Crypto content will appear here</div>
                        </TabsContent>
                    </Tabs>
                </div>

                <div className="relative">
                    <Input placeholder="What's happening in the markets?" className="pr-20" />
                    <Button size="sm" className="absolute right-1 top-1">
                        Post
                    </Button>
                </div>
            </div>
        </div>
    )
}

interface TradingPostProps {
    username: string
    handle: string
    avatar: string
    time: string
    content: string
    symbol: string
    action: "BUY" | "SELL" | "SHORT" | "HOLD"
    price: string
    change: string
    isPositive: boolean
    likes: number
    comments: number
    shares: number
}

function TradingPost({
    username,
    handle,
    avatar,
    time,
    content,
    symbol,
    action,
    price,
    change,
    isPositive,
    likes,
    comments,
    shares,
}: TradingPostProps) {
    return (
        <Card>
            <CardHeader className="pb-3">
                <div className="flex justify-between">
                    <div className="flex gap-3">
                        <Avatar>
                            <AvatarImage src={avatar || "/placeholder.svg"} alt={username} />
                            <AvatarFallback>{username.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="font-semibold">{username}</div>
                            <div className="text-sm text-muted-foreground">{handle}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{time}</span>
                        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="pb-3">
                <p className="mb-3">{content}</p>
                <div className="bg-muted p-3 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <BarChart3 className="h-4 w-4" />
                        </div>
                        <div>
                            <div className="font-medium">{symbol}</div>
                            <div className="text-xs text-muted-foreground">{action}</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="font-medium">{price}</div>
                        <div className={`text-xs flex items-center ${isPositive ? "text-green-500" : "text-red-500"}`}>
                            {isPositive ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                            {change}
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex justify-between w-full text-muted-foreground">
                    <Button variant="ghost" size="sm" className="gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="text-xs">{likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span className="text-xs">{comments}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                        <Repeat2 className="h-4 w-4" />
                        <span className="text-xs">{shares}</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                        <BookmarkPlus className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
