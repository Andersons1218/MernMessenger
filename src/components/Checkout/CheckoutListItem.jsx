export default function CheckoutListItem({pkg}){
    return(
        <>
        <div>
        <h1>{pkg.location}</h1>
        <h2>{pkg.persons}</h2>
        </div>
        </>    
    )
}