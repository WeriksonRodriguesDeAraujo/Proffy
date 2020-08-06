import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/landing';
import Teacherlist from './pages/TeacherList';
import Teacherform from './pages/TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/study" component={Teacherlist}/>
            <Route path="/give-classes" component={Teacherform}/>
        </BrowserRouter>
    )
}

export default Routes;