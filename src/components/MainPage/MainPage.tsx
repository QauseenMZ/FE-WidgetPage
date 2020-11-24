import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WidgetList from '../WidgetList/WidgetList';
import AddWidget from '../AddWidget/AddWidget';
import { pathURLs } from '../../utils/routes.utils';

const MainPage = () => {
  return (
    <Switch>
      {/* Widget List View */}
      <Route exact path={pathURLs.defaultRoot}
        render={() => <WidgetList />}
      />

      <Route exact path={pathURLs.add}
        render={() => <AddWidget />}
      />
    </Switch>
  )
}

export default MainPage;
