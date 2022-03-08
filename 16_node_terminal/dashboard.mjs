import blessed from 'blessed'
import contrib from 'blessed-contrib'
import chalk from 'chalk'

const screen = blessed.screen()
const markdown = contrib.markdown()
screen.append(markdown)


function page1(screen) {
  var grid = new contrib.grid({ rows: 4, cols: 4, screen: screen })

  var line = grid.set(1, 0, 2, 2, contrib.line, {
    style: { line: 'yellow', text: 'green', baseline: 'black' },
    xLabelPadding: 3,
    xPadding: 5,
    label: 'label',
    text: 'ola'
  })

  var box_2 = blessed.box({
    top: 'center',
    left: 'center',
    width: '50%',
    height: '50%',
    content: 'Hello {bold}world{/bold}!',
    tags: true,
    border: {
      type: 'line'
    },
    style: {
      fg: 'white',
      bg: 'magenta',
      border: {
        fg: '#ffffff'
      },
      hover: {
        bg: 'red'
      }
    }
  })


  var box = blessed.box({
    content:
      '1',
    top: '80%',
    left: '10%',
  })

  markdown.setOptions({ firstHeading: chalk.red.italic })
  markdown.setMarkdown(
    '# Hello \n This is **markdown** printed in the `terminal` 11'
  )

  screen.append(markdown)
  screen.append(line)
  screen.append(box)
  screen.append(box_2)

}

function page2(screen) {
  var box = blessed.box({
    content:
      '2',
    top: '80%',
    left: '10%',
  })

  screen.append(box)
}

// eslint-disable-next-line no-unused-vars
screen.key(['escape', 'q', 'C-c'], function (ch, key) {
  return process.exit(0)
})

var carousel = new contrib.carousel([page1, page2], {
  screen: screen,
  controlKeys: true,
})
carousel.start()