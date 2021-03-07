import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage, RecommendationPage } from "pages";

export const ROUTES = {
  HOMEPAGE: "/",
  RECOMMENDATION: "/rekomendasi-kampus",
  JOB_VACANCY: "/lowongan-kerja",
  COMPETITIONS: "/lomba",
  SEMINAR_WORKSHOP: "/seminar-workshop",
  BEASISWA: "/beasiswa",
};

export const Routes = () => {
  const {
    HOMEPAGE,
    RECOMMENDATION,
    JOB_VACANCY,
    COMPETITIONS,
    SEMINAR_WORKSHOP,
    BEASISWA,
  } = ROUTES;

  return (
    <Router>
      <Switch>
        <Route path={HOMEPAGE} component={Homepage} exact />
        <Route path={RECOMMENDATION} component={RecommendationPage} exact />
      </Switch>
    </Router>
  );
};
