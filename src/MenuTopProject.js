import React from 'react';

function MenuTopProject(props) {
return <div>
<div>
<nav className="hebrew col-12 navbar navbar-expand-md bg-dark navbar-dark">
    <div className="container">
      <a className="navbar-brand ng-binding" href="#!/">מחברת המתכונים  של חמו</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse row" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item" ng-show="connected">
            <a className="nav-link" href="#!/my-profile" nobr="">הפרופיל שלי</a>
          </li>
          <li className="nav-item" ng-show="connected">
            {/* itay: set state to new recipe */}
            <a onClick={() => { props.onClickMe()}} className="nav-link" href="#" nobr="">מתכון חדש</a>
          </li>
          <li className="nav-item" ng-show="connected">
            <a className="nav-link" href="#!/my-recipes">המתכונים שלי</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!/">כל המתכונים</a>
          </li>
        </ul>
      </div>
      <div className="collapse navbar-collapse row" id="collapsibleNavbar">
        <ul className="navbar-nav w-100 dir-ltr">

          <li className="nav-item ng-pristine ng-untouched ng-valid ng-not-empty" ng-show="connected" ng-model="connected">
            <a className="nav-link" href="javascript:void(0)" ng-click="logout()">התנתקות</a>
          </li>
          <li className="nav-item ng-hide" ng-show="!connected" id="loginLink">
            <a className="nav-link" ng-click="showLoginWin()" data-toggle="collapse" href="javascript:void(0)" role="button" aria-expanded="false" aria-controls="collapseExample">התחברות</a>
          </li>
          <li className="nav-item ng-hide" ng-show="!connected">
            <a className="nav-link" href="#!/signup">רישום</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</div>
</div>



}

export default MenuTopProject;