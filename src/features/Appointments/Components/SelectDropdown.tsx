import React from "react";
import {Check, ChevronDown} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "../../../components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput, 
  CommandItem,
  CommandList,
} from "../../../components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";


interface SelectDropdownProps {
    Data: { label: string; value: string }[];
    Type: string;
  }
  
  const SelectDropdown: React.FC<SelectDropdownProps> = ({ Data, Type }) => {

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
      return (
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
                variant="outline"
            role="combobox"
            aria-expanded={open}
            className="lg:w-[150px] sm:[78vw] xs:[78vw] justify-between px-2  text-center"
          >
            {value
              ? Data.find((Data) => Data.value === value)?.label
              : Type}<ChevronDown />
         
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search Data..." className="h-9" />
            <CommandList>
              <CommandEmpty>No {Type} found.</CommandEmpty>
              <CommandGroup>
                {Data.map((Data) => (
                  <CommandItem
                    key={Data.value}
                    value={Data.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    {Data.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === Data.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>)
  
};

export default SelectDropdown;
