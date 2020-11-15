function leftZero(s, maxLength) // used for hours/minutes/seconds with trailing 0
{
  s = "" + s;
  if (s.length < maxLength)
    s = "0" + s;
  return s;
}

function GetDateTime() {
  var currentdate = new Date();
  var datetime = 
  //"Last Updated " + 
  currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " "
    + leftZero(currentdate.getHours(), 2) + ":"   // leftZero adds trailing '0'
    + leftZero(currentdate.getMinutes(), 2) + ":"
    + leftZero(currentdate.getSeconds(), 2);
  console.log(datetime);
  return datetime;
}

/*module.exports = {
    GetDateTime
};
*/
export {GetDateTime};