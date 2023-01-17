import API from '../utils/api';

function ArgoItem({item, data, setData}) {

  // Delete
    async function deleteArgonaute(e, name) {
        e.preventDefault();
        API.delete(`/remove/${name}`)
        .then(response => {
            const newData = data.filter( (it) => it._id !== item._id );
            setData(newData);
        });
    }

    return (
        <div 
            className="px-4 py-1 fs-5 border rounded bg-light d-flex justify-content-between align-items-center">
            {item.name}
            <button 
                className="btn btn-lg fs-2 text-danger"  
                onClick={ (e) => deleteArgonaute(e, item.name) }>
                    <i className="bi bi-x-circle-fill"></i>
            </button>
        </div>
    )
}

export default ArgoItem;