"use client"

import * as React from "react"
import {Select as SelectPrimitive} from "@base-ui/react/select"
import {Check, ChevronDown, ChevronUp} from "lucide-react"

import {cn} from "@/lib/utils"

const SelectPortalContainerContext = React.createContext(null)

function Select({children, ...props}) {
  const [portalContainer, setPortalContainer] = React.useState(null)
  const contextValue = React.useMemo(
    () => ({portalContainer, setPortalContainer}),
    [portalContainer],
  )

  return (
    <SelectPortalContainerContext.Provider value={contextValue}>
      <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>
    </SelectPortalContainerContext.Provider>
  )
}

function SelectValue({className, ...props}) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("flex flex-1 text-left", className)}
      {...props}
    />
  )
}

function SelectTrigger({className, children, ref, ...props}) {
  const portalContext = React.useContext(SelectPortalContainerContext)
  const setPortalContainer = portalContext?.setPortalContainer
  const setTriggerRef = React.useCallback(
    (node) => {
      // A body-level portal sits behind native top-layer dialogs and outside
      // library dialog focus traps, so keep the menu inside its owning popup.
      const ownerDialog =
        node?.closest("dialog, [role='dialog'], [aria-modal='true']") ?? null

      setPortalContainer?.((current) =>
        current === ownerDialog ? current : ownerDialog,
      )

      if (typeof ref === "function") {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
    },
    [ref, setPortalContainer],
  )

  return (
    <SelectPrimitive.Trigger
      ref={setTriggerRef}
      data-slot="select-trigger"
      className={cn(
        "group flex min-h-12 w-full items-center justify-between gap-3 rounded-xl border border-[#d8d4cc] bg-white px-4 text-[0.95rem] text-[#1b2433] outline-none transition select-none data-placeholder:text-[#7a808b] hover:border-[var(--campaign-accent)] focus-visible:border-[var(--campaign-accent)] focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--campaign-accent)_12%,transparent)] disabled:cursor-not-allowed disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={<ChevronDown className="size-4 text-[var(--campaign-accent-dark)] transition-transform duration-200 group-data-open:rotate-180" />}
      />
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  campaign = "construction",
  portalContainer,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  ...props
}) {
  const selectPortalContext = React.useContext(SelectPortalContainerContext)
  const palette =
    campaign === "finance"
      ? {
          "--select-accent": "#007f16",
          "--select-soft": "#eaf8ed",
          "--select-shadow": "rgba(0, 127, 22, 0.2)",
        }
      : {
          "--select-accent": "#d83f00",
          "--select-soft": "#fff0ea",
          "--select-shadow": "rgba(216, 63, 0, 0.2)",
        }

  return (
    <SelectPrimitive.Portal
      container={
        portalContainer ?? selectPortalContext?.portalContainer ?? undefined
      }
    >
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        className="isolate z-[100]"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(
            "relative max-h-(--available-height) w-(--anchor-width) min-w-48 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-xl bg-white p-1.5 text-[#1b2433] shadow-[0_18px_48px_var(--select-shadow)] ring-1 ring-[#1b2433]/10 duration-150 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className,
          )}
          style={palette}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

function SelectItem({className, children, ...props}) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex min-h-10 w-full cursor-default items-center rounded-lg py-2 pr-9 pl-3 text-sm font-medium outline-none select-none data-highlighted:bg-[var(--select-soft)] data-highlighted:text-[var(--select-accent)] data-selected:text-[var(--select-accent)] data-disabled:pointer-events-none data-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="flex flex-1 whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute right-3 flex size-4 items-center justify-center text-[var(--select-accent)]">
        <Check className="size-4 stroke-[2.5]" aria-hidden="true" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

function SelectScrollUpButton({className, ...props}) {
  return (
    <SelectPrimitive.ScrollUpArrow
      className={cn(
        "sticky top-0 z-10 flex w-full items-center justify-center bg-white py-1 text-[var(--select-accent)]",
        className,
      )}
      {...props}
    >
      <ChevronUp className="size-4" aria-hidden="true" />
    </SelectPrimitive.ScrollUpArrow>
  )
}

function SelectScrollDownButton({className, ...props}) {
  return (
    <SelectPrimitive.ScrollDownArrow
      className={cn(
        "sticky bottom-0 z-10 flex w-full items-center justify-center bg-white py-1 text-[var(--select-accent)]",
        className,
      )}
      {...props}
    >
      <ChevronDown className="size-4" aria-hidden="true" />
    </SelectPrimitive.ScrollDownArrow>
  )
}

export {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
}
