import React from 'react';

function ItemDetailed(props) {
  return <div className="ItemBackGround text-right">
    <h1 >קציצות חומוס אפויות</h1>

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <img className="card-img-top" ng-src="https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/9c2751c1d4080cbd9e8030ecc2cd5b12_NaN.jpeg" alt="קציצות חומוס אפויות" 
          src={props.url} />
        </div>
        <div className="col-md-7">
          <div className="row">
            <div style={{ float: "right" }} className="font-weight-bold">מקור:&nbsp;</div>
            <div style={{ float: "right" }}>
              <a href="http://cooking.einatnutrition.co.il/?p=382" target="_blank" className="ng-binding">בישול בריא עם עינת שגיא</a>
            </div>
          </div>
          <div className="row mt-2">
            <div style={{ float: "right" }} className="font-weight-bold">סוג המתכון:&nbsp;</div>
            {/* <!-- ngRepeat: dish in dishTypes --> */}
          </div>
          <div className="row mt-2">
            <div style={{ float: "right" }} className="font-weight-bold">רכיבים:&nbsp;</div>
            {/* <!-- ngRepeat: an_ingredient in recipe.ingredients -->*/}
            <div ng-repeat="an_ingredient in recipe.ingredients" className="ng-scope">
              <a href="#" target="_blank" className="ng-binding">גרגירי חומוס</a>
              <span ng-hide="$last">,&nbsp;</span>
            </div>
            {/* <!-- end ngRepeat: an_ingredient in recipe.ingredients --> */}
            <div ng-repeat="an_ingredient in recipe.ingredients" className="ng-scope">
              <a href="#" target="_blank" className="ng-binding">בצל</a>
              <span ng-hide="$last">,&nbsp;</span>
            </div>
            {/* <!-- end ngRepeat: an_ingredient in recipe.ingredients --> */}
            <div ng-repeat="an_ingredient in recipe.ingredients" className="ng-scope">
              <a href="#" target="_blank" className="ng-binding">שיני שום</a>
              <span ng-hide="$last" className="ng-hide">,&nbsp;</span>
            </div>
            {/* <!-- end ngRepeat: an_ingredient in recipe.ingredients --> */}
          </div>
          <div className="row mt-2">
            <div style={{ float: "right" }} className="font-weight-bold">מתאים ל:&nbsp;</div>
            {/* <!-- ngRepeat: diet in dietTypes --> */}
            <div ng-repeat="diet in dietTypes" className="ng-scope">
              <a href="#" target="_blank" className="ng-binding">טבעוני</a>
              <span ng-hide="$last">,&nbsp;</span>
            </div>
            {/* <!-- end ngRepeat: diet in dietTypes --> */}
            <div ng-repeat="diet in dietTypes" className="ng-scope">
              <a href="#" target="_blank" className="ng-binding">כשר</a>
              <span ng-hide="$last">,&nbsp;</span>
            </div>
            {/* <!-- end ngRepeat: diet in dietTypes --> */}
            <div ng-repeat="diet in dietTypes" className="ng-scope">
              <a href="#" target="_blank" className="ng-binding">פרווה</a>
              <span ng-hide="$last">,&nbsp;</span>
            </div>
            {/* <!-- end ngRepeat: diet in dietTypes --> */}
            <div ng-repeat="diet in dietTypes" className="ng-scope">
              <a href="#" target="_blank" className="ng-binding">צמחוני</a>
              <span ng-hide="$last" className="ng-hide">,&nbsp;</span>
            </div>
            {/* <!-- end ngRepeat: diet in dietTypes --> */}
          </div>
          <div className="row mt-2">
            {/* <!-- ngRepeat: descLine in recipe.description.split('\n') --> */}
          </div>

        </div>
      </div>
    </div>

    {/* next part */}
    <div className="container mt-5" ng-show="recipe.ingredients.length > 0">
      <div className="row">
        <h3>רכיבים</h3>
      </div>
      <div className="row">
        <ul className="list-group list-group-flush w-100">

          {/* <!-- ngRepeat: an_ingredient in recipe.ingredients --> */}
          <li ng-repeat="an_ingredient in recipe.ingredients" className="list-group-item ng-scope">
            <div className="row">
              <div className="col-sm-3 text-nowrap ng-binding">2.5&nbsp;כוסות</div>
              <div className="col-sm-9  ng-binding">גרגירי חומוס&nbsp;לא מבושלים, שהושרו לפחות 24 שעות</div>
            </div>
          </li>
          {/* <!-- end ngRepeat: an_ingredient in recipe.ingredients --> */}
          <li ng-repeat="an_ingredient in recipe.ingredients" ng-className-odd="'striped'" className="striped list-group-item ng-scope">
            <div className="row striped ">
              <div className="col-sm-3 text-nowrap ng-binding">1&nbsp;יחידה</div>
              <div className="col-sm-9  ng-binding">בצל&nbsp;גדול קלוך</div>
            </div>
          </li>
          {/* <!-- end ngRepeat: an_ingredient in recipe.ingredients --> */}

          <li ng-repeat="an_ingredient in recipe.ingredients" ng-className-odd="'striped'" className="list-group-item ng-scope">
            <div className="row">
              <div className="col-sm-3 text-nowrap ng-binding">3-4&nbsp;יחידות</div>
              <div className="col-sm-9  ng-binding">שיני שום&nbsp;קלופות</div>
            </div>
          </li>
          {/* <!-- end ngRepeat: an_ingredient in recipe.ingredients --> */}
        </ul>
      </div>
    </div>

    {/* last part */}
    <div className="container mt-5" ng-show="recipe.instructions.length > 0">
      <div className="row">
        <h3>הוראות הכנה</h3>
      </div>
      <div className="row">
        <ul className="list-group list-group-flush  w-100">
          {/* <!-- ngRepeat: instruction in recipe.instructions --> */}
          <li ng-repeat="instruction in recipe.instructions" ng-className-odd="'striped'" className="list-group-item ng-scope striped">
            <div className="row">
              <div className="col-sm-1 ng-binding">1</div>
              <div className="col-sm-11 ng-binding">מחממים תנור ל- °180.</div>
            </div>
          </li>
          {/* <!-- end ngRepeat: instruction in recipe.instructions --> */}
          <li ng-repeat="instruction in recipe.instructions" ng-className-odd="'striped'" className="list-group-item ng-scope">
            <div className="row">
              <div className="col-sm-1 ng-binding">2</div>
              <div className="col-sm-11 ng-binding">טוחנים את החומוס הבצל והשום ומעבירים לקערה.</div>
            </div>
          </li>
          {/* <!-- end ngRepeat: instruction in recipe.instructions --> */}
          <li ng-repeat="instruction in recipe.instructions" ng-className-odd="'striped'" className="list-group-item ng-scope striped">
            <div className="row">
              <div className="col-sm-1 ng-binding">3</div>
              <div className="col-sm-11 ng-binding">מערבבים את כל החומרים יחד לתערובת אחידה.</div>
            </div>
          </li>
          {/* <!-- end ngRepeat: instruction in recipe.instructions --> */}
          <li ng-repeat="instruction in recipe.instructions" ng-className-odd="'striped'" className="list-group-item ng-scope">
            <div className="row">
              <div className="col-sm-1 ng-binding">4</div>
              <div className="col-sm-11 ng-binding">טוחנים שוב עם בלנדר מוט לקבלת מרקם אחיד.</div>
            </div>
          </li>
          {/* <!-- end ngRepeat: instruction in recipe.instructions --> */}
          <li ng-repeat="instruction in recipe.instructions" ng-className-odd="'striped'" className="list-group-item ng-scope striped">
            <div className="row">
              <div className="col-sm-1 ng-binding">5</div>
              <div className="col-sm-11 ng-binding">מכינים קציצות ומניחים בתבנית על נייר אפייה.</div>
            </div>
          </li>
          {/* <!-- end ngRepeat: instruction in recipe.instructions --> */}
          <li ng-repeat="instruction in recipe.instructions" ng-className-odd="'striped'" className="list-group-item ng-scope">
            <div className="row">
              <div className="col-sm-1 ng-binding">6</div>
              <div className="col-sm-11 ng-binding">מורחים מלמעלה מעט שמן זית עם מברשת סיליקון.</div>
            </div>
          </li>
          {/* <!-- end ngRepeat: instruction in recipe.instructions --> */}
        </ul>
      </div>
    </div>

    {/*button */}
    <div className="container mt-5">
      <div className="row text-left float-left">
        <button onClick={() => { props.onClickMe(props.Me);}} type="button" className="btn btn-primary" ng-click="backToList()">בחזרה לרשימה</button>
      </div>
    </div>

  </div>


}

export default ItemDetailed;