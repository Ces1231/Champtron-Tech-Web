import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Network } from "lucide-react"
import { InfrastructureGraphic } from "./infrastructure-graphic"

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Advanced IT Solutions for
            <span className="text-blue-600 block">Modern Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Champtron Systems LLC delivers cutting-edge automation, networking, infrastructure as code, and AI solutions
            to transform your business operations in Sanford, FL and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">View Services</a>
            </Button>
          </div>
        </div>

        {/* Custom Infrastructure Graphic */}
        <div className="mt-12">
          <InfrastructureGraphic />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Automation Excellence</h3>
            <p className="text-gray-600">Streamline operations with intelligent automation solutions</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Network className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Network Infrastructure</h3>
            <p className="text-gray-600">Robust networking solutions for seamless connectivity</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Zero Trust Security</h3>
            <p className="text-gray-600">Advanced security architecture with continuous verification</p>
          </div>
        </div>
      </div>
    </section>
  )
}
