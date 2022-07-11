export default function CheckoutTotal({addToProf, checkout}){
  
    

    return (
        <div>
        <div>
            <h1 className="font-bold text-xl mb-2">Total </h1>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={addToProf}> Submit Order</button>
        </div>
        </div>    
    )
}