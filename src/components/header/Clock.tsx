import type { FC } from 'react'

import { useEffect, useState } from 'react'
import { getFormattedTime } from '@/utils/time'
import { HeaderClock } from '@/ui'

const Clock: FC = () => {
  const [currentTime, setCurrentTime] = useState(getFormattedTime())

  useEffect(() => {
    const updateCurrentTime = (): void => {
      setCurrentTime(getFormattedTime())
    }

    const intervalId = setInterval(updateCurrentTime, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return <HeaderClock>{currentTime}</HeaderClock>
}

export default Clock
