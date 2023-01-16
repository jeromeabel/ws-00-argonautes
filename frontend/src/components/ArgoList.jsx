import ArgoItem from './ArgoItem'

function ArgoList( {data, setData} ) {

    return (
        <section className='my-2'>
            <div className='container w-50 mx-auto' style={{
                display: "grid",
                gridGap: "1rem",
                gridTemplateColumns: "repeat(3, 1fr)",
            }}>
                { data.map( (item) => <ArgoItem key={item._id} item={item} data={data} setData={setData} /> )}
            </div>
        </section>
    )
}

export default ArgoList