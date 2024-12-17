import React from 'react'

const genderCheckBox = () => {
    return (

        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Gender Check Box</span>
                <input type="checkbox" defaultChecked className="checkbox" />
            </label>
        </div>

    )
}

export default genderCheckBox