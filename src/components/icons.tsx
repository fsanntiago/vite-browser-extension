import { type LucideProps } from 'lucide-react'

type Icon = (props: LucideProps) => React.ReactNode
export type IconName =
  | 'PCScreenWithCam'
  | 'PCScreen'
  | 'RecordCircle'
  | 'Mic'
  | 'WebCam'

export const iconComponent: Record<IconName, Icon> = {
  Mic: (props) => (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 7V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M20 11C20 15.4183 16.4183 19 12 19M12 19C7.58172 19 4 15.4183 4 11M12 19V22M12 22H15M12 22H9"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  WebCam: (props) => (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10C2 6.49335 2 4.74003 2.90796 3.55992C3.07418 3.34388 3.25989 3.14579 3.46243 2.96849C4.56878 2 6.21252 2 9.5 2H14.5C17.7875 2 19.4312 2 20.5376 2.96849C20.7401 3.14579 20.9258 3.34388 21.092 3.55992C22 4.74003 22 6.49335 22 10C22 13.5066 22 15.26 21.092 16.4401C20.9258 16.6561 20.7401 16.8542 20.5376 17.0315C19.4312 18 17.7875 18 14.5 18H9.5C6.21252 18 4.56878 18 3.46243 17.0315C3.25989 16.8542 3.07418 16.6561 2.90796 16.4401C2 15.26 2 13.5066 2 10Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M17 22L12.8333 18M7 22L11.1667 18"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18V23"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5Z"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  ),
  RecordCircle: (props) => (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="white"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  PCScreen: (props) => (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C22 14.9188 22 13.2792 22 10C22 6.72077 22 5.08116 21.1862 3.91891C20.8851 3.48891 20.5111 3.1149 20.0811 2.81382C18.9188 2 17.2792 2 14 2Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11 15H13"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 22L14.1845 21.5811C13.4733 20.6369 13.2969 19.1944 13.7468 18M9.5 22L9.8155 21.5811C10.5267 20.6369 10.7031 19.1944 10.2532 18"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 22H17"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  PCScreenWithCam: (props) => (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 15H13"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 18V22" stroke="white" strokeWidth="1.5" />
      <path
        d="M8 22H16"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 2.00098C6.37454 2.00933 4.9565 2.08726 3.91891 2.81379C3.48891 3.11488 3.1149 3.48888 2.81382 3.91888C2 5.08113 2 6.72074 2 9.99997C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C21.9127 15.0435 21.9906 13.6254 21.999 11"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19.5 4.14631L19.563 4.10086C20.6208 3.3371 21.1498 2.95522 21.5749 3.13961C22 3.324 22 3.9353 22 5.15791V5.84209C22 7.0647 22 7.676 21.5749 7.86039C21.1498 8.04478 20.6208 7.6629 19.563 6.89914L19.5 6.85369M15.5 9H16C17.6499 9 18.4749 9 18.9874 8.55151C19.5 8.10301 19.5 7.38118 19.5 5.9375V5.0625C19.5 3.61882 19.5 2.89699 18.9874 2.44849C18.4749 2 17.6499 2 16 2H15.5C13.8501 2 13.0251 2 12.5126 2.44849C12 2.89699 12 3.61882 12 5.0625V5.9375C12 7.38118 12 8.10301 12.5126 8.55151C13.0251 9 13.8501 9 15.5 9Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
}

type IconProps = { iconName: IconName } & LucideProps

export const Icon = ({ iconName, ...props }: IconProps) => {
  const IconComponent = iconComponent[iconName]

  return <IconComponent {...props} />
}
