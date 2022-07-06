import PackageListItem from "../PackageListItem/PackageListItem";


export default function PackageList({packages}) {
  // console.log(`here are the packages from pacakage list ${packages[0]._id}`)
  
  return (
    <>
    <main>
    { packages.map(pkg => {
      return <PackageListItem key={pkg._id} pkg={pkg} />
    })}
    </main>
      </>
  )
}


  