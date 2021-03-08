import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Homepage,
  RecommendationPage,
  JobVacancy,
  SeminarWorkshop,
} from "pages";

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
        <Route path={JOB_VACANCY} component={JobVacancy} exact />
        <Route path={SEMINAR_WORKSHOP} component={SeminarWorkshop} exact />
      </Switch>
    </Router>
  );
};
