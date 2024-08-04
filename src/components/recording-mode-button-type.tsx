import * as RadioGroup from '@radix-ui/react-radio-group'

import { Icon, IconName } from './icons'

export interface RecordingModeButtonTypeProps {
  iconName: IconName
  title: string
}

export function RecordingModeButtonType({
  iconName,
  title,
}: RecordingModeButtonTypeProps) {
  return (
    <RadioGroup.Item
      value={title}
      className="flex gap-2 rounded p-1 data-[state=checked]:bg-primary/30 data-[state=checked]:text-primary"
    >
      <Icon iconName={iconName} className="h-4 w-4" />
      <span className="font-bold">{title}</span>
    </RadioGroup.Item>
  )
}
