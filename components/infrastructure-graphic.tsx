"use client"

import { Monitor, Server, Wifi, Shield, Activity, Database } from "lucide-react"

export function InfrastructureGraphic() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-lg overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="border border-blue-400/30"></div>
          ))}
        </div>
      </div>

      {/* Central Control Hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Main Control Center */}
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-blue-300/50">
            <Monitor className="h-10 w-10 text-white" />
          </div>

          {/* Pulsing Ring Animation */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75"></div>
          <div className="absolute inset-0 rounded-full border border-cyan-300 animate-pulse"></div>
        </div>
      </div>

      {/* Connected Systems - Positioned around the center */}
      {/* Server Infrastructure */}
      <div className="absolute top-16 left-16">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
            <Server className="h-8 w-8 text-white" />
          </div>
          <div className="text-xs text-green-400 font-medium">Servers</div>
        </div>
        {/* Connection Line */}
        <svg className="absolute top-8 left-16 w-32 h-32 pointer-events-none">
          <line x1="0" y1="0" x2="80" y2="80" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>

      {/* Network Infrastructure */}
      <div className="absolute top-16 right-16">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center shadow-lg">
            <Wifi className="h-8 w-8 text-white" />
          </div>
          <div className="text-xs text-purple-400 font-medium">Network</div>
        </div>
        {/* Connection Line */}
        <svg className="absolute top-8 right-16 w-32 h-32 pointer-events-none">
          <line x1="16" y1="0" x2="-64" y2="80" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>

      {/* Security Systems */}
      <div className="absolute bottom-16 left-16">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <div className="text-xs text-red-400 font-medium">Security</div>
        </div>
        {/* Connection Line */}
        <svg className="absolute bottom-8 left-16 w-32 h-32 pointer-events-none">
          <line x1="0" y1="16" x2="80" y2="-64" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>

      {/* Database Systems */}
      <div className="absolute bottom-16 right-16">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
            <Database className="h-8 w-8 text-white" />
          </div>
          <div className="text-xs text-yellow-400 font-medium">Database</div>
        </div>
        {/* Connection Line */}
        <svg className="absolute bottom-8 right-16 w-32 h-32 pointer-events-none">
          <line x1="16" y1="16" x2="-64" y2="-64" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>

      {/* Monitoring Systems */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div className="text-xs text-cyan-400 font-medium">Monitor</div>
        </div>
        {/* Connection Line */}
        <svg className="absolute top-7 left-14 w-24 h-8 pointer-events-none">
          <line x1="0" y1="0" x2="60" y2="0" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>

      {/* Analytics Systems */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div className="text-xs text-indigo-400 font-medium">Analytics</div>
        </div>
        {/* Connection Line */}
        <svg className="absolute top-7 right-14 w-24 h-8 pointer-events-none">
          <line x1="24" y1="0" x2="-36" y2="0" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>

      {/* Data Flow Indicators */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Status Indicators */}
      <div className="absolute bottom-4 left-4">
        <div className="flex space-x-2">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400">Online</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-blue-400">Monitoring</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-yellow-400">Processing</span>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="absolute bottom-4 right-4">
        <div className="text-right">
          <div className="text-xs text-gray-300">System Performance</div>
          <div className="text-lg font-bold text-green-400">99.9%</div>
        </div>
      </div>

      {/* Title Overlay */}
      <div className="absolute top-4 left-4">
        <div className="text-white">
          <h3 className="text-lg font-bold mb-1">State-of-the-Art IT Infrastructure</h3>
          <p className="text-sm text-gray-300">
            Advanced monitoring and control systems for enterprise-level operations
          </p>
        </div>
      </div>
    </div>
  )
}
