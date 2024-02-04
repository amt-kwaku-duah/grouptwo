
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Login from "./pages/Login";
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path:"/",
        element: <Login />,
        children: [
          {
            index: true,
            // element: < Overview/>,
          },
          {
            path: "/drugList",
            // element: < PharmacyTable/>,
            // loader: DrugsLoaderData
          },
          {
            path: "/add-drug",
          //  element: <PharmDrug/>,
          //  action: actionData,
           
         },
          // {
          //   path: "/edit-post",
          //   element: <Edit />,
          //   action: PatchAction,
          // },
        ],
      },
      
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
     
    </>
  );
}

export default App;



{/* <div className="container">
        <ColumnLeft/>
        <ColRight/>
      </div> */}
