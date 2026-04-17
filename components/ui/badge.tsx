import * as React from "react"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline"
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-emerald-600 text-white",
    outline: "border border-emerald-500 text-emerald-400"
  }

  return (
    <div
      ref={ref}
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]} ${className || ''}`}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }
