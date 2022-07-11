export default function CheckoutListItem({pkg, setCheckout, checkout}){

    //creat fuction to remove package from checkout
    const removepkg = () => {
        setCheckout(current =>
          current.filter(pkgs => {
            // returns all pkgs that are not pkg.
            return pkgs !== pkg;
          }),
        );
      };

    return(
        <>
        <div>     
        <h1>{pkg.location}</h1>
        <h2>Hotel: {pkg.hotel}</h2>
        <h2>Flight: {pkg.flight}</h2>
        <h2>Car Rental: {pkg.car}</h2>
        <h2>Quantity: {pkg.persons}</h2>
        <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={removepkg}>Remove</button>
        </div>
        </>    
    )
}