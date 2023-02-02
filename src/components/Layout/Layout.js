import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import css from "components/Layout/Layout.module.css";

export const Layout = () => {
    return (
        <div className={css.container}>
        <div  className={css.bar}>
            <AppBar />
                <Suspense fallback={null}>
            <Outlet />
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
        </div>
    );
}