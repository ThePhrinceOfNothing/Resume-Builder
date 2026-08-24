import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[60px] w-full rounded-xl bg-neo px-3 py-2 text-base shadow-neo-concave-sm transition-shadow placeholder:text-slate-400 focus-visible:outline-none focus-visible:shadow-neo-concave disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
