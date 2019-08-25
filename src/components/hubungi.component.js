import React from 'react'

export default function HubungiPage() {
    return (
        <div>
            <h1>Pertubuhan IKRAM Malaysia (IKRAM)</h1>
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Subject:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
