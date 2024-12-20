/* eslint-disable react-hooks/exhaustive-deps */
import './NewTab.css'

import { useEffect, useState } from 'react'

export const NewTab = () => {
  const getTime = () => {
    const date = new Date()
    // const hour = String(date.getHours()).padStart(2, '0');
    const hour = padLeft(String(date.getHours()), 2)
    // const minute = String(date.getMinutes()).padStart(2, '0');
    const minute = padLeft(String(date.getMinutes()), 2)
    return `${hour}:${minute}`
  }

  const padLeft = (
    result: string,
    length: number,
    character: string = '0',
  ): string => {
    for (let i = result.length; i < length; ++i) {
      result = character + result
    }
    return result
  }

  const [time, setTime] = useState(getTime())
  const link =
    'https://github.com/nandanito/browser-extension-template-bun-vite-react'

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <section>
      <span />
      <h1>{time}</h1>
      <a href={link} target="_blank" rel="noreferrer">
        generated by create-chrome-ext
      </a>
    </section>
  )
}

export default NewTab
