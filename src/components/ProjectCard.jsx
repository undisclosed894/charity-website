import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, Users } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image.url}
          alt={project.image.alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {project.status && (
          <Badge className="absolute top-3 right-3 bg-charity-green">
            {project.status}
          </Badge>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="heading-sm">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {project.location && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{project.location}</span>
          </div>
        )}
        {project.date && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{project.date}</span>
          </div>
        )}
        {project.beneficiaries && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{project.beneficiaries} Begünstigte</span>
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button variant="outline" className="w-full">
          Mehr erfahren
        </Button>
      </CardFooter>
    </Card>
  )
}