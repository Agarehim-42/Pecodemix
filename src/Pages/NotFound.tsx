import React from 'react'

const NotFound: React.FC = () => {
    return (


<div className="Notfound py-5 ">
<div className='container'>
    <div className="row">
        <div className=" Error-left-side col-12 col-md-6 d-flex flex-column justify-content-center ">
        <h1 className='Erorh1'>Page is not found 404 ERROR</h1>
        </div>

        <div className="Error-right-side col-12 col-md-6 d-flex flex-column justify-content-center ">
        <img className='kosmonaft w-100' src="/assets/images/pages/NotFound404.svg" alt="" />
        </div>
    </div>
</div>
</div>
    )
}

export default NotFound