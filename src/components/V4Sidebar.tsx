import { useState } from "react"
import { Home, Layers, Users, Mail, FileText, Award } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "HOME", url: "/v4", icon: Home },
  { title: "PROJECTS", url: "/v4/projects", icon: Layers },
  { title: "STUDIO", url: "/v4/studio", icon: Users },
  { title: "AWARDS", url: "/v4/awards", icon: Award },
  { title: "JOURNAL", url: "/v4/journal", icon: FileText },
  { title: "CONTACT", url: "/v4/contact", icon: Mail },
]

export function V4Sidebar() {
  const { state } = useSidebar()
  const collapsed = state === "collapsed"
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path
  const isExpanded = navigationItems.some((item) => isActive(item.url))
  
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `transition-all duration-200 ${isActive 
      ? "bg-[hsl(var(--v4-terracotta))] text-white font-medium" 
      : "hover:bg-[hsl(var(--v4-terracotta))]/10 text-[hsl(var(--v4-charcoal))]"
    }`

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} bg-white border-r border-[hsl(var(--v4-charcoal))]/10 transition-all duration-300`}
      collapsible="icon"
    >
      <div className="p-6 border-b border-[hsl(var(--v4-charcoal))]/10">
        {!collapsed ? (
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/35ae7eeb-a93a-45fb-b51f-5f1c2433c7e8.png" 
              alt="Akkad" 
              className="h-8 w-auto"
            />
            <div className="text-[hsl(var(--v4-charcoal))] font-bold text-lg tracking-wide">
              AKKAD
            </div>
          </div>
        ) : (
          <img 
            src="/lovable-uploads/35ae7eeb-a93a-45fb-b51f-5f1c2433c7e8.png" 
            alt="Akkad" 
            className="h-8 w-8 mx-auto"
          />
        )}
      </div>

      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className={`text-[hsl(var(--v4-charcoal))]/60 text-xs font-semibold tracking-widest uppercase mb-4 ${collapsed ? 'text-center' : ''}`}>
            {collapsed ? "—" : "NAVIGATION"}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon className={`${collapsed ? 'mx-auto' : 'mr-3'} h-5 w-5`} />
                      {!collapsed && (
                        <span className="font-medium tracking-wide text-sm">
                          {item.title}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mt-12 p-4 bg-[hsl(var(--v4-charcoal))]/5 rounded-lg">
            <div className="text-[hsl(var(--v4-charcoal))]/80 text-xs font-medium tracking-wide uppercase mb-2">
              LATEST PROJECT
            </div>
            <div className="text-[hsl(var(--v4-charcoal))] text-sm font-semibold mb-1">
              Al Noor Cultural Center
            </div>
            <div className="text-[hsl(var(--v4-charcoal))]/60 text-xs">
              Abu Dhabi, UAE
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  )
}