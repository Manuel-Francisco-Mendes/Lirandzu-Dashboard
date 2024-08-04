import React from 'react'
import "./cards.css"

const DashboardCard = ({title,value,subtitle}) => {
  return (
    <div className='top-card__dashboard'>
      <span className='top-card__title'>{title}</span>
      <span className='top-card__statistic'>{value}</span>
      <span className='top-card__subtitle'>{subtitle}</span>
    </div>
  )
}

export default DashboardCard