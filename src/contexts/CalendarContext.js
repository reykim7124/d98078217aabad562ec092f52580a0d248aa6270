import { createContext } from "react"

const setCalendar = () => {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu']
  const months = ['Januari', 'Februari', 'Marer', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  let now = new Date()
  let arr = [{
    day: days[now.getDay()],
    date: now.getDate(),
    month: months[now.getMonth()],
    year: now.getFullYear()
  }]

  for (let i = 1; i < 14; i++) {
    now = new Date()
    now.setDate(now.getDate() + i)
    arr.push({
      day: days[now.getDay()],
      date: now.getDate(),
      month: months[now.getMonth()],
      year: now.getFullYear()
    })
  }
  
  return arr
}

export const setToMonday = (cal) => {
  return cal[
    cal[0].day === 'Sabtu' || cal[0].day === 'Minggu' 
    ? cal.findIndex(e => e.day === 'Senin') 
    : 0
  ]
}

export const cal = setCalendar()

export const CalendarContext = createContext(setToMonday(cal))