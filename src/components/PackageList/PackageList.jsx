import PackageListItem from "../PackageListItem/PackageListItem";

export default function PackageList() {
  const packages = packages.map(item =>
    <PackageListItem 
      key={packages._id}
      packages={packages}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main>
      {packages}
    </main>
  )
}


  