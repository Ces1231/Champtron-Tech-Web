import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, MapPin } from "lucide-react"
import Image from "next/image"

export function About() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      number: "50+",
      label: "Projects Completed",
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      number: "99%",
      label: "Client Satisfaction",
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      number: "24/7",
      label: "Support Available",
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-600" />,
      number: "Local",
      label: "Sanford, FL Based",
    },
  ]

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Champtron Systems LLC</h2>
            <p className="text-lg text-gray-600 mb-6">
              Based in Sanford, Florida, Champtron Systems LLC is a leading provider of innovative IT solutions. We
              specialize in automation, networking, infrastructure as code, and AI technologies that help businesses
              optimize their operations and stay competitive in today's digital landscape.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experienced professionals is dedicated to delivering customized solutions that meet your
              specific business requirements. We pride ourselves on our technical expertise, customer service, and
              commitment to helping our clients achieve their technology goals.
            </p>

            {/* Team/Office Image */}
            <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-lg mb-6">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional IT team collaborating on technology solutions in modern office environment"
                fill
                className="object-cover"
                crossOrigin="anonymous"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Expert team with years of industry experience</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Cutting-edge technology solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Personalized customer support</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Local presence in Central Florida</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
