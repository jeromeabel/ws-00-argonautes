import ArgoItem from './ArgoItem'

function ArgoList( {data, setData} ) {

    return (
        <section className='my-5'>
            <div className='container' style={{ maxWidth:"1000px" }}>
                <div className='d-flex align-items-center'>
                    <h2>Membres de l'équipage  ⛵ </h2>
                    <span className="badge rounded-pill border text-bg-light ms-4 fs-6">{data.length} / 50</span>
                </div> 
                <div className='container mt-4' style={{
                    display: "grid",
                    gridGap: "1rem",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    }}>
                    { data.map( (item) => 
                        <ArgoItem 
                            key={item._id} 
                            item={item} 
                            data={data} 
                            setData={setData} 
                            /> )}
                </div>
            </div>
        </section>
    )
}

export default ArgoList