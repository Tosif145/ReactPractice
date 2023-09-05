

function App(){

    const cars = ["BMW","Audi","Nexa","Honda","Maruti"];
     return (
           <>
            <h1>List of Cars</h1>
            {/* passing unique key to every item in the list */}
            <ul>
                {cars.map((car,index) => <li key={index} >{car}</li>)}
            </ul>
           </>        
    )
 };




ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
