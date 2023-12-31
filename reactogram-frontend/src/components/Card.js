import React from 'react'
import './Card.css'
import moreAction from '../imgs/more-action.PNG'

const Card = () => {
  return (
    // <div className='row'>
        // <div>  {/* className="col-4"     */}
        <div>
            <div className="card shadow-sm">
                <div className="card-body px-2">
                    <div className="row">
                        <div className="col-6 d-flex ">
                            <img className='profile-pic p-2 ' alt='Profile Pic' src='https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D' />
                            <div className="mt-2">
                                <p className="fs-6 fw-bold">Title</p>
                                <p className='location'>Description</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <img className="float-end fs-3 p-2 mt-2" src={moreAction} alt='more action'/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <img style={{borderRadius:'15px'}} src="https://images.unsplash.com/photo-1567596900894-00ff726f8de7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" alt="Post Pic" className="img-fluid p-2" />
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col-6 d-flex">
                            <i class="ps-2 fs-4 fa-regular fa-heart"></i>
                            <i class="ps-3 fs-4 fa-regular fa-comment"></i>
                            <i class="ps-3 fs-4 fa-solid fa-location-arrow"></i>
                        </div>
                        <div className="col-6">
                            <span className="pe-2 fs-6 fw-bold float-end">
                                200 likes
                            </span>
                        </div>
                    </div>

                    <div className="row">
                            <div className="col-12">
                                <span className="p-2 text-muted">
                                    2 Hours Ago
                                </span>
                            </div>
                    </div>

                    </div>
                </div>
            </div>
        // </div>
    // </div>
  )
}

export default Card