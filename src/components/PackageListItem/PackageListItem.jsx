
export default function PackageListItem({pkg}) {
  console.log(pkg)
    return (
      <>
     <h1>{pkg.location}</h1>
     <h2>{pkg.hotel}</h2>
     </>
    );
  }