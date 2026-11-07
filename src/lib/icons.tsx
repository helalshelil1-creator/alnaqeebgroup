import {
  Zap, Settings, Wind, Flame, Gauge, Cctv, Wrench,
  ShieldCheck, HardHat, Handshake, Lightbulb,
  Building2, Home, Factory, HeartPulse, GraduationCap, Hotel, Landmark, Construction,
  Building, Users, CalendarClock,
  type LucideIcon,
} from 'lucide-react'

const registry: Record<string, LucideIcon> = {
  Zap, Settings, Wind, Flame, Gauge, Cctv, Wrench,
  ShieldCheck, HardHat, Handshake, Lightbulb,
  Building2, Home, Factory, HeartPulse, GraduationCap, Hotel, Landmark, Construction,
  Building, Users, CalendarClock,
}

export function Icon({ name, className, size }: { name: string; className?: string; size?: number }) {
  const Cmp = registry[name] ?? Zap
  return <Cmp className={className} size={size} strokeWidth={2} aria-hidden="true" />
}

export default Icon
