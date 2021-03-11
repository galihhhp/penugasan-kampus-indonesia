import { Route, Switch } from "react-router-dom";
import {
  Homepage,
  RecommendationPage,
  JobVacancy,
  SeminarWorkshop,
  Competition,
  Scholarship,
  Cart,
  BlogDetail,
  Blog,
  NotFound,
} from "pages";

export const ROUTES = {
  HOMEPAGE: "/",
  RECOMMENDATION: "/rekomendasi-kampus",
  JOB_VACANCY: "/lowongan-kerja",
  COMPETITIONS: "/lomba",
  SEMINAR_WORKSHOP: "/seminar-workshop",
  SCHOLARSHIP: "/beasiswa",
  CART: "/keranjang",
  UTBK: "/utbk",
  BLOG: "/blog",
  BLOG_DETAIL: "/blog/:id",
};

export const Routes = () => {
  const {
    HOMEPAGE,
    RECOMMENDATION,
    JOB_VACANCY,
    COMPETITIONS,
    SEMINAR_WORKSHOP,
    SCHOLARSHIP,
    CART,
    BLOG,
    BLOG_DETAIL,
  } = ROUTES;

  return (
    <Switch>
      <Route path={HOMEPAGE} component={Homepage} exact />
      <Route path={RECOMMENDATION} component={RecommendationPage} exact />
      <Route path={JOB_VACANCY} component={JobVacancy} exact />
      <Route path={SEMINAR_WORKSHOP} component={SeminarWorkshop} exact />
      <Route path={COMPETITIONS} component={Competition} exact />
      <Route path={SCHOLARSHIP} component={Scholarship} exact />
      <Route path={CART} component={Cart} exact />
      <Route path={BLOG} component={Blog} exact />
      <Route path={BLOG_DETAIL} component={BlogDetail} exact />
      <Route component={NotFound} />
    </Switch>
  );
};
