import { SerialPort } from 'serialport'
import { ReadlineParser } from '@serialport/parser-readline'
import axios from 'axios'

const port = new SerialPort({
  path: 'COM7',
  baudRate: 9600,
})

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

console.log('Listening for RFID scans...')

let lastTag = null
let lastTime = 0

parser.on('data', async (data) => {
  const tag = data
    .replace("UID:", "")    
    .trim()                  
    .replace(/\s+/g, "")     
    .toUpperCase() 
    
  if (!tag) return

  // De-duplicate rapid repeats (same tag within 1s)
  const now = Date.now()
  if (tag === lastTag && now - lastTime < 1000) return
  lastTag = tag
  lastTime = now

  console.log('RFID', tag)

  try {
    await axios.post('http://localhost:5000/rfid/add-item', {
      rfidTag: tag,
      counterId: `COUNTER_1`
    })
    console.log('→ sent to backend')
  } 
  catch (e) {
    console.error('API error:', e.response?.data || e.message)
  }
})