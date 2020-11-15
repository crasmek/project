// Top Search Menu
// Meanwhile: my recipes
import React from 'react';

function TopSearch(props) {
    return <>
        <h1 className="text-right">המתכונים שלי</h1>

        <div className="row text-right">
            <div className="col-lg-3 col-6">
                <h2>הצג לי את המתכונים </h2>
            </div>
            <div className="form-group">
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="radio" name="orderProp" className="form-check-input ng-pristine ng-untouched ng-valid ng-not-empty" ng-model="byPropName" value="views" />הכי
                פופולאריים
            </label>
                </div>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="radio" name="orderProp" className="form-check-input ng-pristine ng-untouched ng-valid ng-not-empty" ng-model="byPropName" value="createdAt" />הכי חדשים
            </label>
                </div>
            </div>
        </div>

        <div className="row ng-scope">
            <div className="col-lg-6">
                {/* <!-- Search form --> */}
                <div className="md-form active-pink active-pink-2 mb-3 mt-0">
                    <input type="text" className="form-control ng-pristine ng-untouched ng-valid ng-empty" placeholder="חיפוש מתכון" ng-model="searchText" aria-label="Search" ng-change="findRecipe()" />
                </div>
                <div className="search-results list-group">
                    {/* <!-- recipe in results | limitTo : 10 --> */}
                </div>
            </div>
            <div className="col-lg-6"></div>
        </div>

        {/*Now Search By ingrediant */}
        <div className="row ng-scope">
            <div className="col-lg-6">
                {/* <!-- Search form --> */}
                <div className="md-form active-pink active-pink-2 mb-3 mt-0">
                    <input type="text" className="form-control ng-pristine ng-untouched ng-valid ng-empty" placeholder="חיפוש לפי רכיב" ng-model="searchText" aria-label="Search" ng-change="findIng()" />
                </div>
                <div className="search-results list-group">
                    {/* <!-- recipe in results | limitTo : 10 --> */}
                </div>
            </div>
            <div className="col-lg-6">
        <div className="form-check-inline">
            <label className="form-check-label">
                <input type="radio" className="form-check-input ng-pristine ng-untouched ng-valid ng-not-empty" name="multipleIng" ng-model="isAll" ng-value="true" value="true"/>כולם
            </label>
        </div>
        <div className="form-check-inline">
            <label className="form-check-label">
                <input type="radio" className="form-check-input ng-pristine ng-untouched ng-valid ng-not-empty" name="multipleIng" ng-model="isAll" ng-value="false" value="false"/>לפחות אחד
            </label>
        </div>
    </div>        </div>

    </>
}

export default TopSearch;