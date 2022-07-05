import PackageDetail from "../../components/PackageDetail/PackageDetail"
import PackageList from "../../components/PackageList/PackageList"


export default function BookingPage({Packages}){
    return(
        <main className="NewOrderPage">
        <aside>  
        <PackageList />
        </aside>
        <PackageDetail Packages={Packages}/>
        
      </main>
    )
}