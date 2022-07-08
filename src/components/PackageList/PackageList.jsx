import PackageListItem from "../PackageListItem/PackageListItem";


export default function PackageList({packages, setUserPackage}) {
  // console.log(`here are the packages from pacakage list ${packages[0]._id}`)
  
  return (
    <>
    <main>
      <div className="font-display font-light flex flex-col items-start">
        <h1 className="text-2xl" >Destinations you can travel to now </h1>
        <h2 className="text-sm">Popular destinations from the around the World</h2>
      </div>
    { packages.map(pkg => {
      return <PackageListItem key={pkg._id} pkg={pkg} setUserPackage={setUserPackage} />
    })}
    </main>
      </>
  )
}


  