import moment from 'moment'
import React from 'react'
import Card from '../components/card'

interface Props {
    matches? : Match[],
    date : string,
}

const DateTitle = ({date} : Props) => {
  const day = moment(date).format("dddd")
  const _date = moment(date).format("Do MMM YYYY")

  return (
    <div className='text-[#182339]'>
      <span className='font-bold text-3xl'>{day}</span>
      <span className='text-2xl'>, {_date}</span>
    </div>
  )
}

export default function SectionRow({matches, date} : Props) {
  return (
    <div className='my-[40px]'>
      <DateTitle date={date} /> 
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
        {matches?.map((match, index) => (
          <Card key={index} match={match} />
        ))}
      </div>
    </div>  
  )
}
