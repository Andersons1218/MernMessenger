export default function CheckoutTotal({addToProf, checkout}){
    
    return (
        <>
        <aside>
            <ul>
                <li>Package One</li>
                <li>Package Two</li>
                <li>Package Three</li>
                <li>Package Four</li>
            </ul>
            <button onClick={addToProf}> Submit Order</button>
        </aside>
        </>    
    )
}