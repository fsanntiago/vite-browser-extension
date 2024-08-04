import * as RadioGroup from '@radix-ui/react-radio-group'

import { Icon } from '@/components/icons'
import { RecordingModeButtonType } from '@/components/recording-mode-button-type'
import { SelectDevice } from '@/components/select-device'
import { Button } from '@/components/ui/button'

export const Popup = () => {
  return (
    <main className="bg max-h-screen w-full bg-black antialiased">
      <div className="container flex-col py-8">
        <div>
          <h1 className="text-2xl text-white">Rusty Recorder</h1>
        </div>
        <RadioGroup.Root className="flex gap-2 py-5">
          <RecordingModeButtonType iconName="PCScreen" title="Screen" />
          <RecordingModeButtonType
            iconName="PCScreenWithCam"
            title="Screen + Cam"
          />
        </RadioGroup.Root>
        <div className="py-5">
          <SelectDevice iconName="Mic" placeholder="Select a microphone" />
        </div>
        <Button className="w-full gap-2">
          <Icon iconName="RecordCircle" />
          Record
        </Button>
      </div>
    </main>
  )
}

export default Popup
