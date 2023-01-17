function Error( {message} ){
    return (
        <div className="container mx-auto text-center">
          <div className="alert alert-danger d-flex p-4 fs-5 align-items-center" role="alert">
            <p>
              <i className="bi bi-exclamation-triangle-fill me-4"></i>
              { `Désolé, il y a problème lors de la récupération des données : ${message}` }
            </p>
          </div>
        </div>
    )
}

export default Error;