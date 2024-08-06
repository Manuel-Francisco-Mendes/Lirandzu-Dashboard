import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DashboardCard from '../components/cards/DashboardCard'
import NewUsersChart from '../components/charts/DashboardChartNewUser'
import { ViewColumn } from '@mui/icons-material'

const Dashboard = () => {

  const topDashboardCards = [{
    title: "Usuários Activos",
    statistic: "5000",
    subtitle: "Total"
  }, {
    title: "Usuários Inativos",
    statistic: "122",
    subtitle: "Usuários"
  }, {
    title: "Pacote Grátis",
    statistic: "308",
    subtitle: "Usuários"
  }, {
    title: "Pacote Pagos",
    statistic: "192",
    subtitle: "Usuários"
  }]

  return (
    <div>
      <Row className='w-100 m-0 p-0'>
        {topDashboardCards.map((card, index) => (
          <Col md={12} lg={6} xl={3} key={index}>
            <DashboardCard title={card.title} value={card.statistic} subtitle={card.subtitle} />
          </Col>
        ))}
      </Row>

      <Row className='w-100 m-0 p-0 mt-3'> {/* Adicionando margem superior para espaçamento */}
        <Col md={12}>
        <div style={{ height: `${23}px` }}>
        <NewUsersChart />
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
