import AdminLayout from "../layouts/Admin";
import StatCard from "../components/StatCard";
import PageTitle from "../components/PageTitle";
import WelcomeCard from "../components/WelcomeCard";
import RecentCard from "../components/RecentCard";




import {
  FaUsers,
  FaMoneyBill,
  FaExchangeAlt
} from "react-icons/fa";

function Dashboard() {

  return(

    <AdminLayout>

      <PageTitle />
      <WelcomeCard />


      <div style={styles.grid}>

        <StatCard
          title="Total Users"
          value="0"
          icon={<FaUsers />}
          color="#5B3DF5"
          />

        <StatCard
          title="Total Sales"
          value="0"
          icon={<FaMoneyBill />}
          color="#22c55e"
          />


      </div>
      <RecentCard
        transactions={[]}
        />
    </AdminLayout>

  )
}

const styles = {


  grid: {
    display: "grid",
    gridTemplateColumns:
    "repeat(2, 1fr)",
    gap: "20px",
    marginTop: "30px"
  }

}

export default Dashboard;