import PackageListItem from "../PackageListItem/PackageListItem";

export default function PackageList({packages , handleAddToOrder}) {
  const packages = packages.map(packages =>
    <PackageListItem 
      key={packages._id}
      packages={packages}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main>
      {/* {packages} */}
    </main>
  )
}


  