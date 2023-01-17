function Error( { messageFr, messageAuto } ){
    return (
        <div className="container mx-auto text-center mt-4">
          <div className="alert alert-danger d-flex p-3 fs-5 align-items-center" role="alert">
            <p>
              <i className="bi bi-exclamation-triangle-fill me-4"></i>
              { `${messageFr} : ${messageAuto}` }
            </p>
          </div>
        </div>
    )
}

export default Error;