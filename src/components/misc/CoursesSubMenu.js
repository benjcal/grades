import React from 'react'
import store from 'store/store'
import { observer } from 'mobx-react'

const SecondaryMenu = () => {
    return (
        <div className="secondary-menu">
            <div className="title">{store.courses.get(store.currentCourse).name}</div>

            <div className="item active">
                <div className="name">Students</div>
                <div className="total">{store.enrolledStudents(store.currentCourse).length}</div>
            </div>

            <div className="item">
                <div className="name">Activities</div>
                <div className="total">{store.listActivities(store.currentCourse).length}</div>
            </div>
        </div>
    )
}

export default observer(SecondaryMenu)