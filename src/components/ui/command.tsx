"use client"

import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// Create type augmentation for CommandPrimitive to recognize its properties
type CommandPrimitiveType = React.FC<React.ComponentProps<typeof CommandPrimitive>> & {
  Input: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>
  List: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>
  Empty: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>
  Group: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>
  Separator: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>
  Item: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & { 
    onselect?: (event: any) => void;
    value?: string;
  } & React.RefAttributes<HTMLDivElement>>
}

// Cast CommandPrimitive to our augmented type
const CommandWithProps = CommandPrimitive as CommandPrimitiveType

// Use a more specific type for the ref to avoid issues
const Command = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName || "Command"

type CommandDialogProps = DialogProps & {
  children: React.ReactNode
}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 dark:[&_[cmdk-group-heading]]:text-neutral-400">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

// Fix type issues by using HTMLInputElement for Input
const CommandInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<typeof CommandWithProps.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandWithProps.Input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400",
        className
      )}
      {...props}
    />
  </div>
))
CommandInput.displayName = "CommandInput"

// Fix type issues by using HTMLDivElement for List
const CommandList = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CommandWithProps.List>
>(({ className, ...props }, ref) => (
  <CommandWithProps.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))
CommandList.displayName = "CommandList"

// Fix type issues by using HTMLDivElement for Empty
const CommandEmpty = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CommandWithProps.Empty>
>((props, ref) => (
  <CommandWithProps.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))
CommandEmpty.displayName = "CommandEmpty"

// Fix type issues by using HTMLDivElement for Group
const CommandGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CommandWithProps.Group>
>(({ className, ...props }, ref) => (
  <CommandWithProps.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-neutral-950 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-500 dark:text-neutral-50 dark:[&_[cmdk-group-heading]]:text-neutral-400",
      className
    )}
    {...props}
  />
))
CommandGroup.displayName = "CommandGroup"

// Fix type issues by using HTMLDivElement for Separator
const CommandSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CommandWithProps.Separator>
>(({ className, ...props }, ref) => (
  <CommandWithProps.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-neutral-200 dark:bg-neutral-800", className)}
    {...props}
  />
))
CommandSeparator.displayName = "CommandSeparator"

// Fix type issues by using HTMLDivElement for Item and properly typing onSelect
const CommandItem = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<typeof CommandWithProps.Item>, "onSelect"> & {
    onSelect?: (value: string) => void;
  }
>(({ className, onSelect, ...props }, ref) => {
  const { value } = props as { value?: string };
  
  // Create a prop object that includes our custom lowercase onselect
  const itemProps = {
    ...props,
    onselect: (event: any) => {
      if (props.onselect) {
        props.onselect(event);
      }
      if (onSelect && value) {
        onSelect(value);
      }
    }
  };
  
  return (
    <CommandWithProps.Item
      ref={ref}
      {...itemProps}
      className={cn(
        "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-neutral-100 data-[selected=true]:text-neutral-900 data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:data-[selected=true]:bg-neutral-800 dark:data-[selected=true]:text-neutral-50",
        className
      )}
    />
  );
})
CommandItem.displayName = "CommandItem"

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-neutral-500 dark:text-neutral-400",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
