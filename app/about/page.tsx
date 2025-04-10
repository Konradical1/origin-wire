import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Code2, Lightbulb, Users, Target, Rocket, Heart } from "lucide-react"
import Link from "next/link"

const values = [
  {
    title: "Innovation",
    description: "We stay at the forefront of technology to deliver cutting-edge solutions",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients to ensure their vision becomes reality",
    icon: Users,
  },
  {
    title: "Quality",
    description: "We maintain the highest standards in everything we create",
    icon: Target,
  },
  {
    title: "Growth",
    description: "We help businesses scale and achieve their full potential",
    icon: Rocket,
  },
  {
    title: "Passion",
    description: "We love what we do and it shows in our work",
    icon: Heart,
  },
  {
    title: "Expertise",
    description: "Our team brings years of experience across various technologies",
    icon: Code2,
  },
]

const team = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    image: "/placeholder-user.jpg",
    bio: "With over 15 years of experience in web development and digital strategy",
    skills: ["Leadership", "Strategy", "Technology"],
  },
  {
    name: "Sarah Johnson",
    role: "Lead Designer",
    image: "/placeholder-user.jpg",
    bio: "Award-winning designer with a passion for creating beautiful user experiences",
    skills: ["UI/UX", "Design Systems", "Animation"],
  },
  {
    name: "Michael Chen",
    role: "Technical Lead",
    image: "/placeholder-user.jpg",
    bio: "Full-stack developer specializing in scalable web applications",
    skills: ["Architecture", "Development", "DevOps"],
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    image: "/placeholder-user.jpg",
    bio: "Certified project manager with a track record of successful deliveries",
    skills: ["Project Management", "Agile", "Client Relations"],
  },
]

export default function AboutPage() {
  return (
    <div className="container py-24">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          About OriginWire
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          We're a team of passionate developers, designers, and digital strategists dedicated to creating exceptional digital experiences
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center">Our Values</h2>
        <div className="mx-auto mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-bold tracking-tighter text-center">Our Team</h2>
        <div className="mx-auto mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold tracking-tighter">Ready to Work Together?</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Let's create something amazing for your business
        </p>
        <Button asChild className="mt-8" size="lg">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  )
} 