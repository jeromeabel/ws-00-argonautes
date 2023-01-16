import axios from 'axios';

function ArgoItem({item, data, setData}) {

  // Delete
  async function deleteArgonaute(e, name) {
    e.preventDefault();
    axios.delete(`http://localhost:3000/api/remove/${name}`)
    .then(response => {
        const newData = data.filter( (it) => it._id !== item._id );
        setData(newData);
    });
  }

    return (
        <div 
            className="p-4 fs-5 rounded bg-light d-flex justify-content-between align-items-center">
            {item.name}
            <button 
                className="btn btn-lg fs-3 text-danger"  
                onClick={ (e) => deleteArgonaute(e, item.name) }>
                    <i className="bi bi-x-circle "></i>
            </button>
        </div>
    )
}

export default ArgoItem;