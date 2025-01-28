import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Github, GitMerge, Mail, MessageSquare, Users } from "lucide-react"

export default function DevOpsProfileCard() {
  return (
    <Card className="w-[350px] bg-white dark:bg-gray-800">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Alex Johnson" />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">Alex Johnson</h2>
          <p className="text-sm text-muted-foreground">Senior DevOps Engineer</p>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-wrap gap-2">
          <Badge>Kubernetes</Badge>
          <Badge>Docker</Badge>
          <Badge>CI/CD</Badge>
          <Badge>AWS</Badge>
          <Badge>Terraform</Badge>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Recent Activity</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li className="flex items-center">
              <GitMerge className="mr-2 h-4 w-4" />
              Merged 3 pull requests this week
            </li>
            <li className="flex items-center">
              <MessageSquare className="mr-2 h-4 w-4" />
              Resolved 5 DevOps tickets
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-2">Team</h3>
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            <span className="text-sm text-muted-foreground">Cloud Infrastructure Team</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="icon">
          <Mail className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Github className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

