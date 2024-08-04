import { Icon, IconName } from './icons'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

interface SelectDeviceProps {
  iconName: IconName
  placeholder: string
}

export function SelectDevice({ iconName, placeholder }: SelectDeviceProps) {
  return (
    <Select>
      <SelectTrigger className="border-0 bg-transparent">
        <div className="flex gap-2">
          <Icon iconName={iconName} />
          <SelectValue placeholder={placeholder} />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="oi">Teste1</SelectItem>
        <SelectItem value="Teste2">Teste2</SelectItem>
      </SelectContent>
    </Select>
  )
}
