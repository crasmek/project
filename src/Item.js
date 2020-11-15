import React from 'react';

function Item(props) {

  return <div className="col-sm-6	col-md-4	col-xl-3 my-2"  >

    <div className="card h-100">
      <img src={props.url || "https://tse3.mm.bing.net/th?id=OIP.iYyPimFLj1_wgKEsTsggQgHaEK&pid=Api&P=0&w=292&h=165"}
        className="card-img-top" alt="..." />
      <div className="card-body text-center">
        <h5 className="card-title font-italic">

          {/* add onclick just change state */}
          <a href="#" onClick={() => { props.onClickMe(props.Me,props.url); console.log(props.username) }} className="ng-binding">{props.Itemname}</a>
          <div className="LastUpdate">{props.LastUpdate}</div>
          <div className="text-right">צפיות: {props.Views}</div>
        </h5>
        {/* <p className="card-text">Email - {props.email}</p>
        <a href="#" className="btn btn-primary">EDIT</a> */}
      </div>
      <div className="card-footer text-center" ng-show="true">
        <a href="#!/edit-recipe/7AJHZb9CZM" className="btn btn-primary">עריכה</a></div>

    </div>

  </div>;

}

export default Item;