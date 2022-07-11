import '../../index.css'

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
      <div className="grid ml-40 ">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={pkg.location_img} />
        <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{pkg.location}</div>
          <p class="text-gray-700 text-base">
          <h2>Hotel: {pkg.hotel}</h2>
          <h2>Flight: {pkg.flight}</h2>
          <h2>Car Rental: {pkg.car}</h2>
          <h2>Quantity: {pkg.persons}</h2>
          </p>
        </div>
        </div>
      </div>
        </>    
    )
}