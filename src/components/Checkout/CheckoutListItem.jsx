<<<<<<< HEAD
export default function CheckoutListItem({pkg, setCheckout}){
    
 
    
=======
export default function CheckoutListItem({pkg, setCheckout, checkout}){

    //creat fuction to remove package from checkout
    const removepkg = () => {
        setCheckout(current =>
          current.filter(pkgs => {
            // 👇️ remove object that has id equal to 2
            return pkgs !== pkg;
          }),
        );
      };

>>>>>>> 937047475a50efa741b1c90beca034e2816a7fd1
    return(
        <>
        <div style={{'background': `url(${pkg.location_img}) no-repeat center center`, 'WebkitBackgroundSize': '300px'}}className="card-banner">       
        <h1>{pkg.location}</h1>
        <h2>Hotel: {pkg.hotel}</h2>
        <h2>Flight: {pkg.flight}</h2>
        <h2>Car Rental: {pkg.car}</h2>
        <h2>Quantity: {pkg.persons}</h2>
        <button onClick={removepkg}>Remove</button>
        </div>
        </>    
    )
}