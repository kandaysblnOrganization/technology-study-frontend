import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
    return (
        <React.Suspense fallback={ <PageLoader/> }>
            <Routes>
                { Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={ path } path={ path } element={ (<div className="page-wrapper">{ element }</div>) }/>
                )) }
            </Routes>
        </React.Suspense>
    );
};

export default AppRouter;