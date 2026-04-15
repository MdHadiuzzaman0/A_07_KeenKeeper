import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from "react-router";
// import Home from './Home.jsx';
import Root from './Root.jsx';
// import Timeline from './Timeline.jsx';
// import Stats from './Stats.jsx';
// import MotherProvider from './MotherProvider.jsx';
// import FriendDetails from './FriendDetails.jsx';

const friendsPromise = fetch('/data.json').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root, 
    children: [
      // { index: true, Component: Home },
      // { path: "timeline", Component: Timeline },
      // { path: "stats", Component: Stats },
      // {
      //   path: "friend/:friendId",
      //   loader: () => friendsPromise,
      //   element: 
      //     <Suspense fallback={<div>Loading...</div>}>
      //       <FriendDetails />
      //     </Suspense>
        
      // }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MotherProvider> */}
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    {/* </MotherProvider> */}
  </StrictMode>,
)