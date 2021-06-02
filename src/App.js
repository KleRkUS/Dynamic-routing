import React, {useEffect, useState} from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import {codes} from "./utils/widgetCodes";
import model from "./utils/componentRoutes";
import AppBar from "./components/AppBar";

const render = async (model) => {
  let filtered = model.filter((route) => codes.indexOf(route.code) !== -1);
  let mapped = [];

  for await (const route of filtered) {
    const index = filtered.indexOf(route)
    await renderRoutes(route, index).then(CustomRoute => {
      mapped.push(CustomRoute)
    });
    // console.log(mapped, route);
  }

  return mapped;
}

const renderRoutes = async (componentRoute, key) => {
  // console.log("FFF" + JSON.stringify(componentRoute))
  const Component = componentRoute.component;

  return new Promise(async (resolve) => {
    if (componentRoute.children && componentRoute.children.length !== 0) {
      await render(componentRoute.children).then(mapped => {
        console.log(componentRoute.code)
        const InnerRouter = () =>

          <BrowserRouter>
            <Switch>
              {mapped.map((elem, index) => {
                const CustomRoute = elem;
                return <CustomRoute key={index}/>
              })}
              <Route
                path="/"
                component={Component}
              />
            </Switch>
          </BrowserRouter>

        resolve(InnerRouter);
      });
    } else {
      console.log(componentRoute.code+" AAA")
      // console.log("AAA");
      const InnerRouter = () =>
        <Route
          path={`/${componentRoute.code.toLowerCase()}`}
          component={Component}
        />
        resolve(InnerRouter);
    }
  }).then(InnerRouter => {
    return () => (
      <InnerRouter/>
    );
  })
}

const AppMain = () => (
  <React.Fragment>
    <AppBar/>

    {model.map(elem => {
      if (codes.indexOf(elem)) {
        return(
          <div key={elem.code}>
            <Link to={elem.code.toLowerCase()}>
              {elem.code}
            </Link>
          </div>
        )
      } else {
        return <></>
      }
    })}

  </React.Fragment>
)

function App() {
  const [routes, setRoutes] = useState(null);

  useEffect(() => {

    render(model).then(mapped => {
      console.log(mapped)
      setRoutes(mapped);
    })

  }, [])

  if (routes === null) return null;

  //.map((route, index) => {
  //           const CustomRoute = route;
  //           return <CustomRoute key={index}/>
  //         })}

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => {
          const CustomRoute = route;
          // console.log(<CustomRoute/>);
          return <CustomRoute key={index}/>
        })}
        <Route
          path="/"
          render={(props) => (
            <AppMain/>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
