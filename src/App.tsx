import React, { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Gallery = lazy(() => import("pages/Gallery"));
const Details = lazy(() => import("pages/Details"));

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>loading</p>}>
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route path="/:fruitName" component={Details} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
