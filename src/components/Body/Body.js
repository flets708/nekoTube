import React from 'react'

export default function Body(props) {
    return (
        <div className='container-fluid'>
            <h4 className="mt-2 font-weight-bold" style={{color:'#666'}}>「{props.newTerm}」の検索結果：</h4>
            <div className='row'>
                {props.children}
            </div>
        </div>
    )
}
