import Card from "../components/Card";
import '../assets/styles/dashboard.scss'
import accountWallet from '../assets/icons/account_balance_wallet.svg'

const Dashboard = () => {
  const cards = [
    {
      icon: accountWallet,
      price: '$2,000',
      label: 'Today Collection'
    },
     {
      icon: accountWallet,
      price: '$2,000',
      label: 'Today Collection'
    },
     {
      icon: accountWallet,
      price: '$2,000',
      label: 'Today Collection'
    },
     {
      icon:  accountWallet,
      price: '$2,000',
      label: 'Today Collection'
    }
  ]
  return (
    <div className="cards">
      {cards.map((ele) => (
        <Card icon={ele.icon} price={ele.price} label={ele.label} />
      ))}

    </div>
  )
}
export default Dashboard;