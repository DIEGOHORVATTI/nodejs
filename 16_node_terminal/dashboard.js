import React, { useEffect, useState, useRef } from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'

const App = () => {
  const [count, setCount] = useState(0)
  const timer = useRef(null)
  useEffect(() => {
    timer.current = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer.current)
  }, [count])

  const dateTime = new Date().toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

  return (
    <>
      <box
        top="center"
        left="center"
        width="50%"
        height="50%"
        border={{ type: 'line' }}
        style={{
          border: { fg: 'red', color: 'yeloow' },
          color: 'yeloow',
          backgroundColor: 'red',
        }}
      >
        <text>
          {`

            Today: ${dateTime}

            Count: ${count}

            texto texto

          `}
        </text>


      </box>
    </>
  )
}

const Kapa = () => {
  return (
    <>
      <box
        top="0%"
        left="0%"
        width="20%"
        height="100%"
        border={{ type: 'line' }}
        style={{
          border: { fg: 'grenn' },
        }}
      >
        oni
      </box>
    </>
  )
}

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Developer Dashboard',
})

screen.key(['escape', 'q', 'C-c'], () => process.exit(0))

render(
  <element>
    <App />
    <Kapa />
  </element>,
  screen
)
