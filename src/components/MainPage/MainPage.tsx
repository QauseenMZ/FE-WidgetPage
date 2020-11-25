import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WidgetList from '../WidgetList/WidgetList';
import AddWidget from '../AddWidget/AddWidget';
import { pathURLs } from '../../utils/routes.utils';

const MainPage = () => {
  return (
    <div style={{marginTop: '10%'}}>
      <Switch>
        {/* Widget List View */}
        <Route exact path={pathURLs.defaultRoot}
          render={() => <WidgetList />}
        />

        <Route exact path={pathURLs.add}
          render={() => <AddWidget />}
        />
      </Switch>
    </div>
  )
}

export default MainPage;
