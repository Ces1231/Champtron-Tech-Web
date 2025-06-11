import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Network, Settings, Cloud, Database, Shield, Lock } from "lucide-react"
import Image from "next/image"

export function Services() {
  const services = [
    {
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      title: "IT Automation",
      description:
        "Streamline your IT operations with custom automation solutions that reduce manual tasks and improve efficiency.",
      features: ["Process Automation", "Workflow Optimization", "System Integration", "Task Scheduling"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Modern IT automation dashboard with analytics and monitoring tools",
    },
    {
      icon: <Network className="h-8 w-8 text-green-600" />,
      title: "Network Solutions",
      description:
        "Design, implement, and maintain robust network infrastructures that ensure reliable connectivity and security.",
      features: ["Network Design", "Security Implementation", "Performance Monitoring", "Troubleshooting"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Professional server room with network equipment and cable management",
    },
    {
      icon: <Cloud className="h-8 w-8 text-purple-600" />,
      title: "Infrastructure as Code",
      description:
        "Manage and provision your infrastructure through code for consistent, scalable, and version-controlled deployments.",
      features: ["Terraform", "Ansible", "CloudFormation", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Code editor showing infrastructure as code scripts and configuration files",
    },
    {
      icon: <Lock className="h-8 w-8 text-cyan-600" />,
      title: "Zero Trust Solutions",
      description:
        "Implement comprehensive Zero Trust security architecture that verifies every user and device before granting access to your systems.",
      features: ["Identity Verification", "Device Authentication", "Micro-segmentation", "Continuous Monitoring"],
      image:
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Zero Trust security architecture with multi-layered authentication and access controls",
    },
    {
      icon: <Bot className="h-8 w-8 text-orange-600" />,
      title: "AI Solutions",
      description:
        "Integrate artificial intelligence and machine learning capabilities to enhance your business processes and decision-making.",
      features: ["Machine Learning", "Data Analytics", "Chatbots", "Predictive Modeling"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "AI and machine learning analytics dashboard with data visualizations",
    },
    {
      icon: <Database className="h-8 w-8 text-red-600" />,
      title: "Data Management",
      description:
        "Comprehensive data solutions including migration, backup, recovery, and optimization for your critical business data.",
      features: ["Data Migration", "Backup Solutions", "Database Optimization", "Disaster Recovery"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Database management interface showing data analytics and performance metrics",
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Cybersecurity",
      description:
        "Protect your business with comprehensive security solutions including threat detection, prevention, and response.",
      features: ["Security Audits", "Threat Detection", "Compliance", "Incident Response"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Cybersecurity monitoring dashboard with threat detection and security analytics",
    },
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
