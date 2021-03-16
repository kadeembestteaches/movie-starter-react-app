import {useState} from 'react'

const Registration = () => {


    return (
        <div>
            <form>
                <div className="formControl">
                    <label for="title">Title</label>
                    <input type="text" id="title"/>
                </div>

                <div className="formControl">
                    <label for="poster">Poster</label>
                    <input type="text" id="poster"/>
                </div>

                <div className="formControl">
                    <label for="description">Description</label>
                    <textarea id="description"></textarea>
                </div>

                <div className="formControl">
                    <label for="dateReleased">Date Released</label>
                    <input type="text" id="dateReleased"/>
                </div>               
            </form>
        </div>
    )
}

export default Registration
