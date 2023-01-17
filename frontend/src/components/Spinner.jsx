function Spinner(){
    return (
        <div style={{ height:"300px", display:"grid", placeItems: "center" }}>
            <div className="spinner-border text-primary fs-5" style={{ width: "100px", height: "100px" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>  
        </div>
    )
}

export default Spinner