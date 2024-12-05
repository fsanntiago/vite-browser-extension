import * as RadioGroup from '@radix-ui/react-radio-group'

import { Icon } from '@/components/icons'
import { RecordingModeButtonType } from '@/components/recording-mode-button-type'
import { SelectDevice } from '@/components/select-device'
import { ToggleTheme } from '@/components/toggle-theme'
import { Button } from '@/components/ui/button'

export const Popup = () => {
  const handleCamera = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    chrome.tabs.sendMessage(tab.id, { action: 'toggleCamera' })
  }

  return (
    <main className="grid bg-background p-4 text-muted antialiased">
      <ToggleTheme />
      <h1 className="text-2xl text-white">Rusty Recorder</h1>
      {/* <RadioGroup.Root className="flex gap-2 py-5">
        <RecordingModeButtonType iconName="PCScreen" title="Screen" />
        <RecordingModeButtonType
          iconName="PCScreenWithCam"
          title="Screen + Cam"
        />
      </RadioGroup.Root>
      <div className="py-5">
        <SelectDevice iconName="Mic" placeholder="Select a microphone" />
      </div>
      <Button
        className="w-full gap-2"
        onClick={async () => await handleCamera()}
      >
        <Icon iconName="RecordCircle" />
        Record
      </Button> */}
    </main>
  )
}

export default Popup
