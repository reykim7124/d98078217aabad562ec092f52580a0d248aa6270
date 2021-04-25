import { useContext } from 'react'
import { CalendarContext } from '../contexts/CalendarContext'
import { ThemeContext } from '../contexts/ThemeContext'
import styled from 'styled-components'

const CalendarContainer = styled.div`
  overflow-x: scroll;
  scrollbar-width: none;
  white-space: nowrap;
  display: flex;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`

const CalendarItems = styled.div`
  width: 5px;
  height: 5px;
  padding: 20px;
  border-radius: 100px;
  margin: 0 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.text};
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  &.active {
    background-color: ${props => props.text};
    color: white;
  }

  &:hover {
    cursor: pointer;
  }

  &.disabled {
    color: ${props => props.subText};
  }
`

const Calendar = () => {
  const theme = useContext(ThemeContext)
  const { now, calendar, setCurrentDate } = useContext(CalendarContext)

  return(
    <div style={{padding: '0 8px'}}>
      <CalendarContainer>
        {calendar.map((item, i) => (
          <CalendarItems 
            text={theme.text}
            subText={theme.subText}
            key={i} 
            className={
              `${item.day}` === 'Sabtu' ||
              `${item.day}` === 'Minggu'
              ? 'disabled' 
              : `${now.date} ${now.month}` === 
              `${item.date} ${item.month}` 
              ? 'active' 
              : ''
            }
            onClick={() => `${item.day}` !== 'Sabtu' &&
            `${item.day}` !== 'Minggu' ? setCurrentDate(i) : ''}
          >
            <div style={{fontSize: '0.75rem'}}>{ item.day.slice(0, 3) }</div>
            <div style={{fontWeight: 600}}>{ item.date }</div>
          </CalendarItems>
        ))}
      </CalendarContainer>
    </div>
  )
}

export default Calendar