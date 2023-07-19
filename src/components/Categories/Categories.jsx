import React from 'react'
import './categories.css'
import {Link} from 'react-router-dom'

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
          <div className="row">
            <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
            <button>
              <Link to={"/"} className='link'>Sale</Link>  
            </button>
          </div>
          <div className="row">
          <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
            <button>
              <Link to={"/"} className='link'>Sale</Link>  
            </button>
          </div>
        </div>

        <div className="col">
          <div className="row">
          <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
            <button>
              <Link to={"/"} className='link'>Sale</Link>  
            </button>
          </div>
        </div>

        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
              <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
            <button>
              <Link to={"/"} className='link'>Sale</Link>  
            </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
              <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
            <button>
              <Link to={"/"} className='link'>Sale</Link>  
            </button>
              </div>
            </div>
          </div>
          <div className="row">
          <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
            <button>
              <Link to={"/"} className='link'>Sale</Link>  
            </button>
          </div>
        </div>
    </div>
  )
}

export default Categories