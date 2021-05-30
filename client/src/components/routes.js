// components
import Home from "./pages/mainPage/mainPage";
import ResultOfSearching from "./pages/resultOfSearching/main";
import Booking from "./pages/bookingPage/bookingPage";
import Auth from "./pages/auth/auth";
import Registration from "./pages/registration/registration";
import Payment from "./pages/payment/payment";
import Cabinet from "./pages/cabinet/cabinet";
import {AdminPanel} from "./pages/adminPanel/adminPanel";
import AddPlaneTicket from "./pages/addPlaneTicket/addPlaneTicket";

export const authRoutes = [
    {
        path: '/cabinet',
        Component: Cabinet
    }
]

export const adminRoutes = [
    {
        path: '/admin-panel',
        Component: AdminPanel
    },
    {
        path: '/admin-panel/add-plane-ticket',
        Component: AddPlaneTicket
    }
]

export const publicRoutes = [
    {
        path: '/',
        Component: Home
    },
    {
        path: '/result',
        Component: ResultOfSearching
    },
    {
        path: '/booking',
        Component: Booking
    },
    {
        path: '/login',
        Component: Auth
    },
    {
        path: '/registration',
        Component: Registration
    },
    {
        path: '/payment',
        Component: Payment
    }
]